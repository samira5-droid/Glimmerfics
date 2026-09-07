(() => {
  'use strict';
  const STORY_KEY = 'glimmerfics-hogwarts-v12';
  const $ = (s) => document.querySelector(s);
  const friends = () => {
    const location = $('#location')?.textContent || '';
    const choices = $('#choices');
    if (!choices || !/Ravenclaw Tower/i.test(location) || choices.querySelector('[data-ravenclaw]')) return;
    const b = document.createElement('button');
    b.type = 'button';
    b.dataset.ravenclaw = 'true';
    b.textContent = 'Join Amit and Samantha for breakfast before Hogsmeade.';
    b.addEventListener('click', () => {
      const story = $('#story');
      if (!story) return;
      story.innerHTML = `<p>Samira almost made it to the stairs before two familiar voices stopped her.</p><p>Amit Thakkar was sitting near the Ravenclaw common-room window with a stack of notes balanced beside his tea. Samantha Dale sat opposite him, turning a small magical device over in her hands.</p><p>“There she is,” Samantha said. “We were beginning to think you had abandoned Ravenclaw for mysterious midnight adventures.”</p><p>Amit looked at Samira over the top of his notes. “Please tell me you're coming to Hogsmeade. I have a theory about the old magical instruments shop, and I need someone who will tell me when the theory is terrible.”</p><p>For once, nobody mentioned Sebastian. Nobody mentioned Ominis. Nobody asked about curses.</p><p>They talked about classes, Quidditch gossip, Professor Sharp's latest impossible assignment, and whether Amit's theory was actually terrible. Samira laughed before she realised how much she had needed to.</p><p>It felt good to have people who knew her simply as Samira — a Ravenclaw, a friend, and someone who occasionally needed breakfast more than another dangerous revelation.</p>`;
      choices.innerHTML = '';
      const c = document.createElement('button'); c.type='button'; c.textContent='Finish breakfast with your Ravenclaw friends and then meet Sebastian and Ominis.';
      c.addEventListener('click', () => {
        try { const s=JSON.parse(localStorage.getItem(STORY_KEY)||'null'); if(s){ s.node='breakfast'; s.history=s.history||[]; s.history.push({from:'morning',label:'Spent time with Ravenclaw friends',to:'breakfast',at:Date.now()}); localStorage.setItem(STORY_KEY,JSON.stringify(s)); } } catch(_){}
        location.reload();
      });
      choices.appendChild(c);
      window.scrollTo({top:0,behavior:'smooth'});
    });
    choices.appendChild(b);
  };
  const observe = () => { friends(); new MutationObserver(friends).observe($('#choices') || document.body,{childList:true,subtree:true}); };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',observe); else observe();
})();
