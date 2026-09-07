(() => {
  'use strict';
  const KEY='glimmerfics-hogwarts-v12';
  const $=s=>document.querySelector(s);
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const show=(value)=>{
    const story=$('#story'); if(!story)return;
    story.querySelectorAll('.custom-response').forEach(n=>n.remove());
    const box=document.createElement('div');
    box.className='custom-response';
    box.innerHTML=`<p class="custom-response-label">Samira's choice</p><p><em>“${esc(value)}”</em></p><p class="custom-response-note">The decision is hers. For a moment, the room seems to wait with her.</p>`;
    story.appendChild(box);
    box.scrollIntoView({behavior:'smooth',block:'center'});
  };
  const restore=()=>{
    const s=(()=>{try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch(_){return null}})();
    if(!s||!s.history?.length)return;
    const last=s.history[s.history.length-1];
    if(last?.label?.startsWith('Custom action: ') && last.from===s.node)show(last.label.slice(15));
  };
  const submit=e=>{
    if(e.target?.id!=='customForm')return;
    e.preventDefault(); e.stopImmediatePropagation();
    const input=$('#customChoice'), value=input?.value.trim(); if(!value)return;
    const s=(()=>{try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch(_){return null}})(); if(!s)return;
    s.custom=Array.isArray(s.custom)?s.custom:[];
    s.history=Array.isArray(s.history)?s.history:[];
    s.custom.push({node:s.node,text:value,at:Date.now()});
    s.history.push({from:s.node,label:`Custom action: ${value}`,to:s.node,at:Date.now()});
    localStorage.setItem(KEY,JSON.stringify(s)); input.value=''; show(value);
  };
  document.addEventListener('submit',submit,true);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',restore);else restore();
})();
