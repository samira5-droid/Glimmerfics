(() => {
  'use strict';
  const KEY='glimmerfics-hogwarts-v12';
  const deltas={basinOm:{ominis:1},basinSeb:{sebastian:1},basin:{anne:1},basinTalk:{anne:1},basinSearch:{anne:1},hiddenDoor:{sebastian:1},hiddenDoorOm:{ominis:1},hiddenDoorTalk:{anne:1},catacomb:{anne:1},catacombOm:{ominis:1},catacombSeb:{sebastian:1},sealedRoom:{anne:1},sealedRoomOm:{ominis:1},sealedRoomSeb:{sebastian:1},sealedRoomTalk:{sebastian:1},journalRead:{anne:2},journalSearch:{ominis:1},journalSeb:{sebastian:1},studyNight:{anne:1},quietTalk:{ominis:1,sebastian:1},anneQuestion:{anne:1},anneNote:{anne:2},returnHogwarts:{anne:1},returnSeb:{sebastian:1},returnOm:{ominis:1},breakfastReturn:{anne:1},ravenclawBreakfast:{anne:1},nextMorning:{anne:1},researchFriends:{anne:1},researchSeb:{sebastian:1},researchOm:{ominis:1},nextQuestionGroup:{anne:1},ominisTalk:{ominis:1},sebTalk:{sebastian:1}};
  function advance(b,e){
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    let s;
    try{s=JSON.parse(localStorage.getItem(KEY)||'null')}catch(_){return false}
    if(!s)return false;
    const target=b.dataset.continuationTarget||b.dataset.slowTarget||b.dataset.teenTarget;
    if(!target)return false;
    let d={};
    try{d=JSON.parse(b.dataset.delta||'{}')}catch(_){d=deltas[target]||{}}
    if(!Object.keys(d).length)d=deltas[target]||{};
    s.history=Array.isArray(s.history)?s.history:[];
    const label=b.innerText.replace(/^\s*\d+\s*/,'').trim();
    s.history.push({from:s.node,label,to:target,at:Date.now()});
    s.sebastian=(s.sebastian||0)+(d.sebastian||0);
    s.ominis=(s.ominis||0)+(d.ominis||0);
    s.anne=(s.anne||0)+(d.anne||0);
    s.node=target;
    localStorage.setItem(KEY,JSON.stringify(s));
    location.reload();
    return true;
  }
  document.addEventListener('pointerdown',e=>{
    const b=e.target.closest('#choices button[data-continuation-target],#choices button[data-slow-target],#choices button[data-teen-target]');
    if(b)advance(b,e);
  },true);
})();
