const KEY='glimmerfics-hogwarts-v3';
const saved=JSON.parse(localStorage.getItem(KEY)||'null');
const state=saved||{page:0,node:0,sebastian:0,ominis:0,anne:0,custom:[]};
const $=s=>document.querySelector(s); const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
const effects={sebastian:()=>state.sebastian++,ominis:()=>state.ominis++,anne:()=>state.anne++};
function escapeHtml(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}
const EPISODE_THREE={scenes:[
 {loc:'Ravenclaw Tower',text:'The morning arrives too quickly. Your father’s resonance notes, Sebastian’s unfinished diagram, and Ominis’s promise about the Gaunt vault all seem to point toward the same mystery.',choices:[{label:'Find Sebastian.',next:1,tags:['sebastian']},{label:'Find Ominis.',next:2,tags:['ominis']},{label:'Go to the library alone.',next:3}]},
 {loc:'Great Hall',text:'Sebastian is already at breakfast, but the moment he sees you, his expression changes. “You look like you barely slept.” His eyes flick toward the empty space beside you.',choices:[{label:'Sit beside him.',next:4,tags:['sebastian']},{label:'Tease him about noticing.',next:4,tags:['sebastian']},{label:'Tell him you are worried about Ominis.',next:4,tags:['ominis']}]},
 {loc:'Great Hall',text:'Ominis lowers his voice. “The wards will recognize blood before they recognize anything else.” He sounds calm, but you hear the tension underneath.',choices:[{label:'Ask if he is certain.',next:4,tags:['ominis']},{label:'Ask about the blood wards.',next:4,tags:['ominis']},{label:'Tell him you will not let him face the Gaunts alone.',next:4,tags:['ominis','anne']}]},
 {loc:'Library',text:'You spread your father’s resonance notes across the table. One pattern repeats through the margins: a place can answer another place, even when no ordinary path connects them.',choices:[{label:'Trace the pattern.',next:4},{label:'Look for Gaunt magic.',next:4,tags:['ominis']},{label:'Wait for Sebastian and Ominis.',next:4}]},
 {loc:'Library',text:'Sebastian arrives with his diagram. “Resonance,” he says slowly, “connects places that should not be connected.” He looks from the parchment to you.',choices:[{label:'Show him the unfinished diagram.',next:5,tags:['sebastian']},{label:'Ask whether it could help Anne.',next:5,tags:['anne']},{label:'Tell him what your father wrote.',next:5}]},
 {loc:'Hogwarts',text:'The three of you stand over the notes. The Gaunt vault may contain the missing piece, but the resonance could also reveal a safer way inside.',choices:[{label:'Meet in the library tonight.',next:6},{label:'Ask Professor Sharp for advice.',next:6},{label:'Prepare for the Hogsmeade weekend.',next:6}]},
 {loc:'Library',text:'For one breath, the ink on the parchment seems to move. A faint line appears between your father’s notes and Sebastian’s diagram. Ominis turns his head toward it as though he can hear something you cannot.',choices:[{label:'Follow the resonance.',next:0},{label:'Tell Sebastian and Ominis everything.',next:0},{label:'Write down every detail.',next:0}]}
]};
function renderPage(){
 if(state.page<STORY_PAGES.length){
  const raw=STORY_PAGES[state.page]||'';
  const clean=raw.replace(/^Hogwarts Legacy\s*/,'').replace(/^Instructions:[\s\S]*?\n\n/,'');
  $('#chapterLabel').textContent='Original Story · Page '+(state.page+1);
  $('#progress').textContent='Original story · '+(state.page+1)+' / '+STORY_PAGES.length;
  $('#location').textContent='Hogwarts · Original Story';
  $('#story').innerHTML=clean.split(/\n\s*\n/).filter(Boolean).map(x=>`<p>${escapeHtml(x).replace(/\n/g,' ')}</p>`).join('');
  const box=$('#choices');box.innerHTML='';
  const b=document.createElement('button');b.className='choice';b.innerHTML='<span class="num">→</span><span>Continue</span>';b.onclick=()=>{state.page++;save();renderPage()};box.appendChild(b);
  $('#customForm').style.display='block';
 }else renderEpisodeIII();
 updateRelationships();window.scrollTo({top:0,behavior:'smooth'});
}
function renderEpisodeIII(){
 const n=EPISODE_THREE.scenes[state.node??0];
 $('#chapterLabel').textContent='Episode III · The First Resonance';$('#progress').textContent='Episode III';$('#location').textContent=n.loc;
 $('#story').innerHTML=n.text.split(/\n\n/).map(x=>`<p>${escapeHtml(x)}</p>`).join('');
 const box=$('#choices');box.innerHTML='';
 n.choices.forEach((c,i)=>{const b=document.createElement('button');b.className='choice';b.innerHTML=`<span class="num">${i+1}</span><span>${escapeHtml(c.label)}</span>`;b.onclick=()=>{(c.tags||[]).forEach(t=>{if(effects[t])effects[t]()});state.node=c.next;save();renderEpisodeIII()};box.appendChild(b)});
 $('#customForm').style.display='block';updateRelationships();
}
function updateRelationships(){$('#relationshipState').textContent=`Sebastian · ${state.sebastian}  |  Ominis · ${state.ominis}  |  Anne · ${state.anne}`}
$('#customForm').onsubmit=e=>{e.preventDefault();const v=$('#customChoice').value.trim();if(!v)return;state.custom.push({page:state.page,node:state.node,text:v});$('#customChoice').value='';save();const msg=document.createElement('p');msg.className='thought';msg.textContent=`You choose to: ${v}`;$('#story').appendChild(msg)};
$('#restart').onclick=()=>{if(confirm('Restart this story from the beginning?')){localStorage.removeItem(KEY);location.reload()}};
if(!Array.isArray(window.STORY_PAGES))window.STORY_PAGES=[];
if(state.page>STORY_PAGES.length)state.page=0;
renderPage();