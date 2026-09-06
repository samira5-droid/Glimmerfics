const KEY='glimmerfics-hogwarts-v2';
const saved=JSON.parse(localStorage.getItem(KEY)||'null');
const state=saved||{page:0,node:null,sebastian:0,ominis:0,anne:0,custom:[]};
const $=s=>document.querySelector(s); const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
const effects={sebastian:()=>state.sebastian++,ominis:()=>state.ominis++,anne:()=>state.anne++};
function renderPage(){
  const raw=STORY_PAGES[state.page]||'';
  const clean=raw.replace(/^Hogwarts Legacy\s*/,'').replace(/^Instructions:[\s\S]*?\n\n/,'');
  $('#chapterLabel').textContent=state.page<60?'Original Story · Page '+(state.page+1):'Episode III · The First Resonance';
  $('#progress').textContent='Original story · '+(state.page+1)+' / '+STORY_PAGES.length;
  $('#location').textContent=state.page<60?'Hogwarts · Original Story':'Ravenclaw Tower';
  $('#story').innerHTML=clean.split(/\n\s*\n/).filter(Boolean).map(x=>`<p>${escapeHtml(x).replace(/\n/g,' ')}</p>`).join('');
  const box=$('#choices'); box.innerHTML='';
  if(state.page<60){
    const b=document.createElement('button');b.className='choice';b.innerHTML='<span class="num">→</span><span>Continue</span>';b.onclick=()=>{state.page++;save();renderPage()};box.appendChild(b);
    $('#customForm').style.display='block';
  } else { renderEpisodeIII(); }
  $('#relationshipState').textContent=`Sebastian · ${state.sebastian}  |  Ominis · ${state.ominis}  |  Anne · ${state.anne}`;
  window.scrollTo({top:0,behavior:'smooth'});
}
function renderEpisodeIII(){
  const n=EPISODE_THREE.scenes[state.node??0];
  $('#chapterLabel').textContent='Episode III · The First Resonance'; $('#progress').textContent='Episode III'; $('#location').textContent=n.loc;
  $('#story').innerHTML=n.text.split(/\n\n/).map(x=>`<p>${escapeHtml(x)}</p>`).join('');
  const box=$('#choices');box.innerHTML='';
  n.choices.forEach((c,i)=>{const b=document.createElement('button');b.className='choice';b.innerHTML=`<span class="num">${i+1}</span><span>${escapeHtml(c.label)}</span>`;b.onclick=()=>{(c.tags||[]).forEach(t=>{if(effects[t])effects[t]();});state.node=c.next;save();renderEpisodeIII()};box.appendChild(b)});
  $('#customForm').style.display='block'; $('#relationshipState').textContent=`Sebastian · ${state.sebastian}  |  Ominis · ${state.ominis}  |  Anne · ${state.anne}`;
}
$('#customForm').onsubmit=e=>{e.preventDefault();const v=$('#customChoice').value.trim();if(!v)return;state.custom.push({page:state.page,node:state.node,text:v});$('#customChoice').value='';save();const msg=document.createElement('p');msg.className='thought';msg.textContent=`You choose to: ${v}`;$('#story').appendChild(msg)};
function escapeHtml(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}
$('#restart').onclick=()=>{if(confirm('Restart this story from the beginning?')){localStorage.removeItem(KEY);location.reload()}};
renderPage();