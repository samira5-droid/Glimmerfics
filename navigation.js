(() => {
  'use strict';

  const HISTORY_KEY = 'glimmerfics-navigation-v1';
  const STORY_KEY = 'glimmerfics-hogwarts-v12';
  const $ = (s) => document.querySelector(s);

  const read = () => {
    try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); }
    catch (_) { return []; }
  };
  const write = (items) => localStorage.setItem(HISTORY_KEY, JSON.stringify(items.slice(-40)));

  // Keep a snapshot immediately BEFORE every story choice/custom action.
  // The story engine itself remains untouched; Back simply restores that snapshot.
  const remember = () => {
    const current = localStorage.getItem(STORY_KEY);
    if (!current) return;
    const items = read();
    if (items[items.length - 1] !== current) {
      items.push(current);
      write(items);
    }
  };

  const styleButton = (button) => {
    button.type = 'button';
    button.className = 'ghost back-button';
    button.textContent = '← Back';
    button.title = 'Go back one choice';
  };

  const install = () => {
    const topbar = $('.topbar');
    const restart = $('#restart');
    if (!topbar || !restart || $('#backButton')) return;

    const back = document.createElement('button');
    back.id = 'backButton';
    styleButton(back);
    back.addEventListener('click', () => {
      const items = read();
      if (!items.length) return;
      const previous = items.pop();
      write(items);
      localStorage.setItem(STORY_KEY, previous);
      location.reload();
    });
    topbar.insertBefore(back, restart);

    const refresh = () => {
      back.disabled = read().length === 0;
      back.setAttribute('aria-disabled', String(back.disabled));
    };
    refresh();
    setInterval(refresh, 250);
  };

  // Capture before the story engine handles the event.
  document.addEventListener('click', (event) => {
    if (event.target.closest('#choices button')) remember();
  }, true);

  document.addEventListener('submit', (event) => {
    if (event.target && event.target.id === 'customForm') remember();
  }, true);

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
})();
