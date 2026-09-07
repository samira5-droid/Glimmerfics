(() => {
  'use strict';
  const STORY_KEY = 'glimmerfics-hogwarts-v12';
  const HISTORY_KEY = 'glimmerfics-back-v2';
  const $ = (s) => document.querySelector(s);
  const read = () => { try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); } catch (_) { return []; } };
  const write = (a) => localStorage.setItem(HISTORY_KEY, JSON.stringify(a.slice(-50)));
  const snapshot = () => {
    const current = localStorage.getItem(STORY_KEY);
    if (!current) return;
    const a = read();
    if (a[a.length - 1] !== current) { a.push(current); write(a); }
  };
  const install = () => {
    const top = $('.topbar'), restart = $('#restart');
    if (!top || !restart || $('#backButton')) return;
    const b = document.createElement('button');
    b.id = 'backButton'; b.className = 'ghost back-button'; b.type = 'button'; b.textContent = '← Back';
    b.addEventListener('click', () => {
      const a = read();
      if (!a.length) return;
      const previous = a.pop();
      write(a); localStorage.setItem(STORY_KEY, previous); location.reload();
    });
    top.insertBefore(b, restart);
    const refresh = () => { b.disabled = read().length === 0; b.setAttribute('aria-disabled', String(b.disabled)); };
    refresh(); setInterval(refresh, 200);
  };
  document.addEventListener('click', (e) => { if (e.target.closest('#choices button')) snapshot(); }, true);
  document.addEventListener('submit', (e) => { if (e.target?.id === 'customForm') snapshot(); }, true);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install); else install();
})();
