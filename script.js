const KEY='glimmerfics-hogwarts-v4';
const saved=JSON.parse(localStorage.getItem(KEY)||'null');
const state=saved||{page:0,node:0,sebastian:0,ominis:0,anne:0,custom:[],episodeDone:false};
const $=s=>document.querySelector(s);
const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
const effects={sebastian:()=>state.sebastian++,ominis:()=>state.ominis++,anne:()=>state.anne++};
function escapeHtml(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}

const EPISODE_THREE={
 title:'Episode III · The First Resonance',
 scenes:[
 {loc:'Hogwarts Library · After Midnight',text:`The library has gone so quiet that you can hear the old stone settling around you. Your father's resonance notes lie open beneath Sebastian's unfinished diagram, the pages overlapping like two halves of a puzzle that were never meant to meet.\n\nSebastian is leaning over the table, one hand braced beside your notes. Ominis sits opposite, wand resting across his palm, listening to the room in the way he always does.\n\nFor a moment, none of you speaks. Then the ink on your father's page shimmers.`,choices:[['Ask Ominis what he can sense.',['ominis']],['Move closer to Sebastian and examine the diagram with him.',['sebastian']],['Touch the silver line in the parchment.',[]],['Tell them exactly what your father wrote.',['anne']]]},
 {loc:'Hogwarts Library',text:`The silver line brightens beneath your fingertip. It is not ink anymore. It feels like a thread of cold magic running through the page—and, impossibly, through your wand.\n\nOminis's head lifts sharply.\n\n"There," he says. "Don't move."\n\nSebastian looks from your hand to the parchment. His excitement is immediate, almost frightening in its intensity.\n\n"That's resonance," he whispers. "It's responding to you."`,choices:[['Let Ominis examine the resonance.',['ominis']],['Ask Sebastian what he thinks it means.',['sebastian']],['Pull your hand away.',[]],['Try to follow the sensation.',['anne']]]},
 {loc:'Hogwarts Library',text:`The sensation changes when you follow it. For one heartbeat, the library disappears behind a wash of silver light.\n\nYou see stone. A narrow passage. A door marked with a symbol you recognize from the margins of your father's notes.\n\nThen the vision is gone.\n\nSebastian catches your wrist before you can stumble. His fingers are warm. He does not let go immediately.`,choices:[['Tell Sebastian what you saw.',['sebastian']],['Tell Ominis first.',['ominis']],['Describe the symbol to both of them.',['anne']],['Say nothing and study the diagram again.',[]]]},
 {loc:'The Undercroft',text:`By the time the three of you reach the Undercroft, the castle is asleep.\n\nSebastian spreads the diagram across the table. Ominis lights the room with a low wand-glow, and you place your father's notes beside the parchment.\n\n"If the vision was real," Sebastian says, "then your father's resonance work wasn't just theoretical. He found a place where the frequency could be amplified."\n\nOminis's expression tightens. "And places built to amplify old magic are rarely built for harmless reasons."`,choices:[['Ask what kind of place could amplify it.',['ominis']],['Tell Sebastian to show you the part of his diagram he has been hiding.',['sebastian']],['Suggest taking the notes to Professor Sharp.',[]],['Ask whether the resonance could help Anne.',['anne']]]},
 {loc:'The Undercroft',text:`Sebastian hesitates before unfolding the final section of his diagram.\n\n"I didn't show you this because I wasn't finished," he says. "But I think the frequency can be used to stabilize Anne's curse. Not cure it. Not yet. But stabilize it."\n\nHope flashes across his face before he can hide it.\n\nOminis is quiet for a long moment.\n\n"And what is the cost?" he asks.`,choices:[['Ask Sebastian what the risk is.',['sebastian']],['Ask Ominis what he is worried about.',['ominis']],['Say that saving Anne is worth a calculated risk.',['anne']],['Refuse to proceed until you know the full cost.',[]]]},
 {loc:'The Undercroft',text:`Sebastian's shoulders sink a fraction.\n\n"I don't know," he admits. "That's the problem. Every time I think I've got it, there's another piece missing."\n\nYou look at him. Really look at him. The usual confidence is still there, but underneath it is exhaustion—and fear.\n\n"I can't stop, Samira," he says quietly. "Every hour I waste is an hour Anne spends in pain."`,choices:[['Promise you will help him, but make him rest tonight.',['sebastian']],['Tell him you understand why he cannot stop.',['sebastian','anne']],['Ask Ominis to help you keep Sebastian grounded.',['ominis']],['Take his hand.',['sebastian']]]},
 {loc:'Hogwarts Library',text:`Later, back among the shelves, Sebastian folds the diagram and tucks it into his robes.\n\n"I'll show you the finished version tomorrow," he says. "Promise me you'll look at it."\n\nYou hold out your pinky.\n\nSebastian stares at it as if you've presented him with a particularly difficult spell.`,choices:[['Pinky promise if he promises to sleep.',['sebastian']],['Tell him you trust him without making a promise.',['sebastian']],['Tease him until he agrees.',['sebastian']],['Ask Ominis what he thinks.',['ominis']]]},
 {loc:'Hogwarts Library',text:`Sebastian finally hooks his pinky around yours.\n\n"Fine," he mutters. "Pinky promise. I'll sleep."\n\nHis fingers linger for one extra heartbeat before he pulls away.\n\nFrom the shadows, Ominis lets out a quiet breath that might almost be a laugh.\n\n"I feel I should be charging admission for this."`,choices:[['Tell Ominis he's just jealous.',['ominis']],['Laugh and ask Ominis about his own research.',['ominis']],['Look at Sebastian and smile.',['sebastian']],['Change the subject before either of them gets worse.',[]]]},
 {loc:'Hogwarts Library',text:`The conversation turns quieter as the hour grows late.\n\nOminis tells you about his nonverbal Revelio work—the way he learned to read resonance through his wand rather than through sight. He describes hidden doors, hollow walls, and the difference between ordinary silence and magical silence.\n\nThen, almost reluctantly, he tells you about the Gaunt vault.\n\nIt is in the family mausoleum, about a mile from the main house. Somewhere inside may be a journal containing old catacomb maps.`,choices:[['Ask Ominis whether he is afraid to go back.',['ominis']],['Ask about the blood wards.',['ominis']],['Tell him he will not face the Gaunts alone.',['ominis','anne']],['Ask what Sebastian knows about the vault.',['sebastian']]]},
 {loc:'Hogwarts Library',text:`Ominis goes very still.\n\n"The blood wards recognize family before they recognize anything else," he says. "If my great-aunt has reinforced them, I may be the only one who can get us through."\n\nYou ask the question he has been avoiding.\n\n"Are you ready to go home?"\n\n"No," he says.\n\nThe honesty of it hurts more than a dramatic answer would have.`,choices:[['Tell him he does not have to be ready alone.',['ominis']],['Tell him he is not becoming them.',['ominis']],['Ask what he thinks he will find there.',['ominis','anne']],['Give him silence instead of reassurance.',[]]]},
 {loc:'Hogwarts Library',text:`"You're not like them," you say softly.\n\nOminis turns his head toward your voice.\n\n"You know that, right?"\n\nFor a long moment, the only sound is the library's old clock.\n\n"Every day," he says. "I choose differently every day."\n\nThe words settle between you. They feel less like an answer and more like a vow.`,choices:[['Tell him you believe him.',['ominis']],['Ask whether Sebastian knows how much that costs him.',['sebastian','ominis']],['Reach for his hand.',['ominis']],['Promise that you will be there when he opens the vault.',['ominis','anne']]]},
 {loc:'Hogsmeade Weekend · The Night Before',text:`Two days remain before Hogsmeade weekend.\n\nThe plan is simple on paper: leave Hogwarts, reach the Gaunt mausoleum, get the journal and catacomb maps, and return before anyone notices.\n\nNothing about it feels simple.\n\nYour father's resonance notes are tucked safely inside your robe. Sebastian's diagram is folded beside them. Ominis's promise hangs in the air between the three of you.`,choices:[['Prepare the resonance notes.',['anne']],['Meet Sebastian in the Undercroft.',['sebastian']],['Find Ominis and go over the blood wards again.',['ominis']],['Write a private plan for all three of you.',[]]]},
 {loc:'Ravenclaw Tower',text:`That night, sleep refuses to come easily.\n\nYou think of Sebastian's pinky curled around yours. You think of Ominis saying, "Every day."\n\nYou are caught between two kinds of trust—one loud enough to burn, the other quiet enough to feel like gravity.\n\nTomorrow, the three of you will leave the safety of Hogwarts behind.`,choices:[['Head to bed. You need rest.',[]],['Stay awake and study your father's notes.',['anne']],['Write down what you feel about Sebastian.',['sebastian']],['Write down what you feel about Ominis.',['ominis']]]}
 ]
};

const FINAL_THOUGHTS={sebastian:`I can't stop thinking about the way you looked at me after I showed you the diagram. You made me promise to sleep, and somehow I actually listened. I keep wondering what you'll see when I finish it tomorrow.`,ominis:`You asked me to choose differently. Not once, but as though you believed I could keep choosing. I don't know what will be waiting for me in that vault. I only know I won't be facing it alone.`};

function applyTags(tags){(tags||[]).forEach(t=>{if(effects[t])effects[t]()})}
function updateRelationships(){
 $('#relationshipState').textContent=`Sebastian · ${state.sebastian}  |  Ominis · ${state.ominis}  |  Anne · ${state.anne}`;
}
function renderThoughts(){
 $('#chapterLabel').textContent='Episode III · After Midnight';
 $('#progress').textContent='Episode complete';
 $('#location').textContent='Private thoughts';
 $('#story').innerHTML=`<p class="thought"><strong>Sebastian</strong><br><em>${escapeHtml(FINAL_THOUGHTS.sebastian)}</em></p><p class="thought"><strong>Ominis</strong><br><em>${escapeHtml(FINAL_THOUGHTS.ominis)}</em></p>`;
 $('#choices').innerHTML='';
 $('#customForm').style.display='block';
 updateRelationships();
}
function renderScene(){
 if(state.node>=EPISODE_THREE.scenes.length){renderThoughts();return}
 const n=EPISODE_THREE.scenes[state.node];
 $('#chapterLabel').textContent=EPISODE_THREE.title;
 $('#progress').textContent=`Scene ${state.node+1} / ${EPISODE_THREE.scenes.length}`;
 $('#location').textContent=n.loc;
 $('#story').innerHTML=n.text.split(/\n\n/).map(x=>`<p>${escapeHtml(x)}</p>`).join('');
 const box=$('#choices');box.innerHTML='';
 n.choices.forEach((c,i)=>{
   const b=document.createElement('button');b.className='choice';
   b.innerHTML=`<span class="num">${i+1}</span><span>${escapeHtml(c[0])}</span>`;
   b.onclick=()=>{applyTags(c[1]);state.node++;save();renderScene();window.scrollTo({top:0,behavior:'smooth'});};
   box.appendChild(b);
 });
 $('#customForm').style.display='block';
 updateRelationships();
}

$('#customForm').onsubmit=e=>{
 e.preventDefault();
 const v=$('#customChoice').value.trim();
 if(!v)return;
 state.custom.push({node:state.node,text:v});
 $('#customChoice').value='';
 save();
 const msg=document.createElement('p');msg.className='thought';msg.innerHTML=`<em>You choose to: ${escapeHtml(v)}</em>`;
 $('#story').appendChild(msg);
};
$('#restart').onclick=()=>{if(confirm('Restart this story from the beginning?')){localStorage.removeItem(KEY);location.reload()}};

// If the original PDF pages are ever supplied as STORY_PAGES, keep the same viewer compatible with them.
if(Array.isArray(window.STORY_PAGES)&&window.STORY_PAGES.length){
 const legacyPages=window.STORY_PAGES;
 const oldRender=()=>{};
}
renderScene();
