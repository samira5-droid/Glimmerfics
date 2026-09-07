(() => {
  'use strict';
  const KEY='glimmerfics-hogwarts-v12';
  const $=s=>document.querySelector(s);
  const esc=s=>{const d=document.createElement('div');d.textContent=s;return d.innerHTML};
  const get=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch(_){return null}};
  const save=s=>localStorage.setItem(KEY,JSON.stringify(s));

  function continueFromChapter(target, delta={}){
    const s=get(); if(!s)return;
    s.history=Array.isArray(s.history)?s.history:[];
    const label={
      lowerChambers:'Begin the next chapter and descend into the lower chambers.',
      anchorSamira:'Question whether Samira is the seventh anchor.',
      leaveMausoleum:'Close the journal and leave the mausoleum.'
    }[target] || 'Continue into the next chapter.';
    s.history.push({from:'journalNext',label,to:target,at:Date.now()});
    Object.entries(delta).forEach(([k,v])=>{s[k]=(s[k]||0)+v});
    s.node=target;
    save(s); location.reload();
  }

  function install(){
    const s=get();
    if(!s || s.node!=='journalNext')return;
    const story=$('#story'), choices=$('#choices'), chapter=$('#chapterLabel'), progress=$('#progress'), loc=$('#location');
    if(!story||!choices)return;

    chapter.textContent='Episode XIV · What the Gaunts Buried';
    loc.textContent='Gaunt Mausoleum · The Journal';
    progress.textContent=`Scene ${s.history?.length+1||1} · XIV`;

    story.innerHTML=`
      <p>The next page turned.</p>
      <p><strong>THE SEVENTH ANCHOR WAS NEVER MEANT TO BE A PLACE.</strong></p>
      <p>It was a person.</p>
      <p>Samira stopped breathing.</p>
      <p>Sebastian stared at the words.</p>
      <p>Ominis said nothing.</p>
      <p>The journal continued.</p>
      <p><em>A living resonance can become the centre of a completed circuit. The danger is not in the power itself, but in what the circuit chooses to hold.</em></p>
      <p>Samira's hand went instinctively to her chest.</p>
      <p>Her father's research. The silver line. The seven beats. Her visions. Anne's curse.</p>
      <p>They were not separate.</p>
      <p>They had never been separate.</p>
      <p>The journal revealed a map beneath the writing: a route into the lower chambers.</p>
      <p>Then the final line appeared.</p>
      <p class="chapter-warning"><strong>And one final warning:</strong><br><br><strong>DO NOT COMPLETE THE CIRCUIT WITH A CURSED SOUL.</strong></p>
      <div class="chapter-break" aria-label="Beginning of next chapter">
        <span>✦</span>
        <span>EPISODE XIV</span>
        <span>WHAT THE GAUNTS BURIED</span>
        <span>✦</span>
      </div>
      <p><em>The warning remained on the page long after the silver light had faded.</em></p>
      <p>Samira looked at Sebastian and Ominis.</p>
      <p>No one spoke for several seconds.</p>
      <p>Then Ominis finally broke the silence.</p>
      <p>“We know one thing now. Anne cannot be used as part of the circuit.”</p>
      <p>Sebastian nodded. “Then we find another way.”</p>
      <p>Samira looked at the map.</p>
      <p>The route led beneath the mausoleum.</p>
      <p>Whatever the Gaunts had buried there might explain why her father had left the seventh point incomplete.</p>
      <p>And if there was another way to separate Anne's curse, it was waiting somewhere below.</p>
      <p>Samira closed her fingers around the edge of the journal.</p>
      <p><em>This time, they would not guess. They would find the truth.</em></p>`;

    choices.innerHTML='';
    const options=[
      ['Follow the map into the lower chambers.','lowerChambers',{anne:2}],
      ['Ask whether Samira herself could be the seventh anchor.','anchorSamira',{anne:1}],
      ['Close the journal and leave before they risk activating anything else.','leaveMausoleum',{sebastian:1,ominis:1}]
    ];
    options.forEach(([label,target,delta],i)=>{
      const b=document.createElement('button');
      b.type='button'; b.className='choice';
      b.innerHTML=`<span class="choice-num">${i+1}</span><span>${esc(label)}</span>`;
      b.addEventListener('click',()=>continueFromChapter(target,delta));
      choices.appendChild(b);
    });
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install);else install();
})();
