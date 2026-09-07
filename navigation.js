(() => {
  'use strict';
  const STORY_KEY='glimmerfics-hogwarts-v12', HISTORY_KEY='glimmerfics-back-v3', $=s=>document.querySelector(s);
  const read=()=>{try{return JSON.parse(localStorage.getItem(HISTORY_KEY)||'[]')}catch(_){return[]}};
  const write=a=>localStorage.setItem(HISTORY_KEY,JSON.stringify(a.slice(-50)));
  const snapshot=()=>{const c=localStorage.getItem(STORY_KEY);if(!c)return;const a=read();if(a[a.length-1]!==c){a.push(c);write(a)}};
  function install(){
    const top=$('.topbar'),restart=$('#restart'); if(!top||!restart||$('#backButton'))return;
    const b=document.createElement('button');b.id='backButton';b.className='ghost';b.type='button';b.textContent='← Back';
    b.addEventListener('click',()=>{
      const a=read();
      if(a.length){const prev=a.pop();write(a);localStorage.setItem(STORY_KEY,prev);location.reload();return;}
      try{
        const s=JSON.parse(localStorage.getItem(STORY_KEY)||'null');
        if(s&&s.history&&s.history.length){const h=s.history.pop();s.node=h.from;localStorage.setItem(STORY_KEY,JSON.stringify(s));location.reload();}
      }catch(_){ }
    });
    top.insertBefore(b,restart);
    const refresh=()=>{let enabled=read().length>0;try{const s=JSON.parse(localStorage.getItem(STORY_KEY)||'null');enabled=enabled||!!(s&&s.history&&s.history.length)}catch(_){}b.disabled=!enabled;b.setAttribute('aria-disabled',String(!enabled));};
    refresh();setInterval(refresh,300);
  }
  document.addEventListener('click',e=>{if(e.target.closest('#choices button'))snapshot()},true);
  document.addEventListener('submit',e=>{if(e.target?.id==='customForm')snapshot()},true);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install);else install();
})();
