const KEY='glimmerfics-hogwarts-v5';
const saved=JSON.parse(localStorage.getItem(KEY)||'null');
const state=saved||{node:0,sebastian:0,ominis:0,anne:0,custom:[],view:'play'};
const $=s=>document.querySelector(s); const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
const effects={sebastian:()=>state.sebastian++,ominis:()=>state.ominis++,anne:()=>state.anne++};
function escapeHtml(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}

const EPISODE={title:'Episode III · The First Resonance',scenes:[
{loc:'Hogwarts Library · After Midnight',text:`The library had gone quiet in the particular way Hogwarts became quiet after midnight. It was not an absence of sound so much as a collection of sounds that had become too distant to notice: the slow sigh of wind against the high windows, the occasional creak of ancient timber, the faint hiss of candle flames fighting the draughts that slipped beneath the doors.

Samira had stopped paying attention to the cold hours ago.

Her father's notes were spread across the table in a disorder that would have horrified any sensible scholar. Pages covered one another. Margins were crowded with hurried observations. Several passages had been underlined so many times that the parchment had begun to soften beneath the ink. Beside them lay Sebastian's diagram, still unfinished, its circles and intersecting lines forming a pattern that seemed almost familiar without ever quite becoming understandable.

Sebastian stood opposite her, one hand pressed against the table as he leaned over the parchment. His sleeves were rolled back, his tie had long since lost any resemblance to how it was supposed to be worn, and there was ink along the side of his hand.

Ominis sat on the other side of the table with his wand resting lightly across his palm. He had been quiet for several minutes.

Then the ink moved.

Samira blinked.

A thin silver line appeared between two of her father's notes. It shimmered once, like moonlight caught beneath water.

Sebastian straightened.

“Did you do that?”

“No.”

Ominis's head lifted immediately.

“Don't touch anything.”

The three of them stared at the page.

For one impossible moment, Samira had the distinct feeling that the parchment was listening to them.` ,choices:[['Ask Ominis what he can sense.', ['ominis']],['Move closer to Sebastian and examine the diagram with him.', ['sebastian']],['Touch the silver line in the parchment.', ['anne']],['Tell them exactly what your father wrote about resonance.', ['anne','ominis']] ]},
{loc:'Hogwarts Library',text:`The moment Samira's fingertip touched the silver line, the world seemed to draw one careful breath.

Cold travelled through her hand.

It was not the cold of winter or stone. It was something deeper—a sensation that seemed to exist somewhere between magic and memory. The silver line brightened beneath her finger and then spread outward, following the grooves of Sebastian's diagram.

Sebastian was beside her before she could pull away.

“Samira.”

She could hear the warning in his voice, but there was wonder there too.

Ominis stood so quickly that his chair scraped against the floor.

“There.” His voice had gone very quiet. “I can hear it.”

“Hear what?” Sebastian asked.

“A vibration. Very faint. Like a spell being cast somewhere behind a wall.”

Samira swallowed.

The vibration was inside her now.

Not painful. Not yet. It pulsed with her heartbeat, and every pulse made another fragment of the diagram brighten. For a moment she saw something that could not possibly have been in the library: a narrow corridor of pale stone, a staircase descending into darkness, and at the very end of it a door bearing the same strange symbol her father had drawn again and again in the margins of his research.

Then the vision vanished.

Samira staggered.

Sebastian caught her wrist.

His fingers closed around her skin instinctively, steadying her before she could fall against the table. He did not speak at first. Neither did she.

“You saw something,” he said finally.

It was not a question.

Across from them, Ominis had gone completely still.` ,choices:[['Tell Sebastian exactly what you saw.', ['sebastian']],['Tell Ominis first and describe the sound as well as the vision.', ['ominis']],['Describe the symbol to both of them.', ['anne']],['Pull away, take a breath, and study your father’s notes again.', ['anne']] ]},
{loc:'The Undercroft',text:`By the time the three of them reached the Undercroft, the castle above them had settled into sleep.

The hidden room felt different tonight.

Perhaps it was because Samira knew what they were looking for now. Perhaps it was because the vision had left a strange afterimage behind her eyes. The old stone seemed darker than usual, the shadows deeper in the corners, and the water beyond the chamber gave off a faint silver reflection whenever one of the candles moved.

Sebastian spread the diagram across the table.

“I've been comparing this with your father's work for days,” he said. “I thought the circles were measurements. They aren't.”

He turned the parchment around.

“They're positions.”

Ominis frowned. “Positions of what?”

“Magical resonance points.”

Samira leaned closer.

Sebastian tapped one mark, then another. “If your father's theory is right, certain places can strengthen a magical frequency. The magic doesn't have to be stronger by itself. The location makes it louder.”

“And the place you saw?” Ominis asked.

“I think it could be one of them.”

A silence followed.

Samira thought of Anne.

Of the pain she had seen in her face. Of all the promises that had been made and broken around that curse. Of how often hope had appeared only to be taken away again.

“Could it help her?” she asked.

Sebastian's expression changed.

It was only a fraction of a second, but Samira saw it: hope arriving before caution could stop it.

“I don't know,” he said. “But I think it might.”

Ominis's fingers tightened around his wand.

“And what is the cost?”

Sebastian looked away.` ,choices:[['Ask Sebastian to show you the part of the diagram he has been hiding.', ['sebastian']],['Ask Ominis what worries him about resonance magic.', ['ominis']],['Say that saving Anne is worth investigating a calculated risk.', ['anne']],['Insist that none of you proceeds until the risks are understood.', []] ]},
{loc:'The Undercroft',text:`Sebastian hesitated for so long that Samira knew there was another page.

He reached beneath the diagram and pulled out a folded sheet of parchment.

“I wasn't finished.”

He unfolded it carefully.

The final section of the diagram was different from the rest. The lines were darker, more intricate, and at the centre was a small circle surrounded by seven marks.

“I think this is a stabilisation pattern,” Sebastian said. “Not a cure. I need you to understand that.”

Samira nodded.

“But if the resonance can be controlled, it might interrupt the way the curse feeds itself. Give Anne's magic a chance to settle.”

His voice became quieter.

“Give her time.”

Hope hurt more than certainty ever could.

Ominis moved closer to the parchment.

“And if it doesn't work?”

Sebastian did not answer.

“And if it makes the curse worse?” Ominis continued.

“I don't know.”

The words sounded torn from him.

Sebastian pushed a hand through his hair and looked suddenly, painfully young.

“I don't know,” he repeated. “That's the problem. Every time I think I've found the missing piece, there's another one.”

Samira watched him.

The confidence was still there, somewhere. But underneath it was exhaustion. Fear. The kind of fear that came from caring so much that failure had become unbearable.

“I can't stop,” he said. “Every hour I waste is another hour Anne spends in pain.”

The Undercroft seemed to grow very still.` ,choices:[['Promise Sebastian you will help, but make him rest tonight.', ['sebastian','anne']],['Tell him you understand why he cannot simply stop.', ['sebastian','anne']],['Ask Ominis to help you keep Sebastian grounded.', ['ominis','sebastian']],['Take Sebastian’s hand and tell him he does not have to carry this alone.', ['sebastian','anne']] ]},
{loc:'Hogwarts Library · Later That Night',text:`It was nearly an hour later when they returned to the library.

Sebastian had finally agreed to put the diagram away.

“Tomorrow,” he said, sliding it carefully into his robes. “I'll finish it tomorrow.”

“You said that yesterday.”

“I was optimistic.”

“You were awake until three.”

“That is an entirely separate issue.”

Samira looked at him.

Sebastian lasted approximately two seconds before sighing.

“Fine.”

She held out her little finger.

He stared at it.

“What is that supposed to mean?”

“A promise.”

“I know what a pinky is, Samira.”

“Then you know what to do.”

For once, Sebastian had no clever answer.

Slowly, almost reluctantly, he hooked his little finger around hers.

“Fine,” he murmured. “Pinky promise. I'll sleep.”

His hand remained there for one heartbeat longer than necessary.

Then Ominis cleared his throat from across the table.

“I feel I should be charging admission.”

Samira laughed before she could stop herself.

Sebastian rolled his eyes.

“You're insufferable.”

“And yet you keep inviting me.”

“I didn't invite you.”

“You came anyway.”

The laughter faded gradually, leaving something warmer in its place.

For a brief moment, none of them were thinking about curses, vaults, blood wards or impossible magic.

They were simply three students sitting in an ancient library long after they were supposed to be asleep.

And somehow, that made the danger waiting for them feel even more real.` ,choices:[['Smile at Sebastian and keep the promise between you.', ['sebastian']],['Tease Ominis about being jealous.', ['ominis']],['Ask Ominis what he has been researching.', ['ominis']],['Let the moment pass and return to the mystery of the resonance.', ['anne']] ]},
{loc:'Hogwarts Library · The Gaunt Vault',text:`Ominis's voice changed when he began speaking about his family.

Not dramatically. He did not lower it into a whisper or become visibly angry. If anything, he became more controlled.

That was what made Samira listen more carefully.

“The vault isn't beneath the main house,” he explained. “It's in the family mausoleum. About a mile away.”

“A mausoleum?” Sebastian asked.

“Of course,” Ominis said dryly. “The Gaunts have never been particularly fond of cheerful architecture.”

Samira smiled faintly, but the humour disappeared when he continued.

“There are blood wards. Old ones. If my family reinforced them, they may recognize me before they recognize anyone else.”

“And that's why you have to go?” Samira asked.

“Yes.”

Ominis paused.

“There may be a journal inside. Old records. Catacomb maps. If the symbol in your father's notes is connected to the Gaunts, that journal could tell us where the resonance chamber is.”

Sebastian leaned back.

“Hogsmeade weekend.”

Ominis nodded.

“The plan is simple. We slip out, I handle the blood wards, we're in and out before anyone notices.”

Samira stared at him.

“That's your definition of simple?”

A faint smile touched his mouth.

“I said the plan was simple. I didn't say it was safe.”

The words stayed with her.

For the first time, Samira understood that going there would not simply be another adventure.

For Ominis, it meant returning to a place he had spent years trying to leave behind.` ,choices:[['Ask Ominis whether he is afraid to go back.', ['ominis']],['Ask him exactly how the blood wards work.', ['ominis']],['Tell him he will not face the Gaunts alone.', ['ominis','anne']],['Ask Sebastian what he thinks they should prepare before leaving Hogwarts.', ['sebastian']] ]},
{loc:'Hogwarts Library · Before Dawn',text:`The candles had burned low by the time they finally stopped talking.

Ominis stood near the window, his face turned toward the darkness beyond the glass.

Samira approached him slowly.

“You're not like them,” she said.

He did not move.

“You know that, right?”

For a long moment, there was no answer.

Then Ominis turned his head toward her voice.

“I know what you're trying to say.”

“That isn't an answer.”

“No.”

He gave a quiet breath that might almost have been a laugh.

“Every day,” he said. “I choose differently every day.”

Samira felt the words settle somewhere deep inside her.

Not like a reassurance.

Like a vow.

Behind them, Sebastian gathered the scattered pages into a neat pile. He did not interrupt. He simply watched for a moment before looking away, giving them the privacy neither of them had asked for.

Outside, the first suggestion of dawn was beginning to soften the horizon.

Hogwarts was waking.

None of them had slept.

And yet Samira had the strange certainty that something had changed tonight.

The resonance had answered her.

Sebastian had shown her the part of his research he had been afraid to show anyone.

Ominis had told her the truth about the vault.

And now there was a plan.

Not a good plan.

Not a safe one.

But a plan.

Two days until Hogsmeade weekend.

Two days until they left the castle and walked into the world the Gaunts had built.

Samira looked once more at her father's notes.

The silver line had faded.

But she could still feel it beneath her skin.` ,choices:[['Tell Ominis you believe him.', ['ominis']],['Tell Sebastian you are ready to finish the diagram together.', ['sebastian']],['Promise both of them that you will be there when the vault opens.', ['ominis','sebastian','anne']],['Say nothing. Let the silence hold the promise for you.', []] ]}
]};

function applyTags(tags){(tags||[]).forEach(t=>effects[t]&&effects[t]())}
function updateMeta(){ $('#chapterLabel').textContent=EPISODE.title; $('#progress').textContent=state.view==='all'?'Complete chapter':'Scene '+Math.min(state.node+1,EPISODE.scenes.length)+' / '+EPISODE.scenes.length; $('#relationshipState').textContent=`Sebastian · ${state.sebastian}  |  Ominis · ${state.ominis}  |  Anne · ${state.anne}`; }
function renderAll(){
 $('#location').textContent='The complete chapter';
 $('#story').innerHTML=EPISODE.scenes.map((s,i)=>`<section class="chapter-scene"><div class="scene-heading"><span>${i+1}</span><em>${escapeHtml(s.loc)}</em></div>${s.text.split(/\n\n/).map(p=>`<p>${escapeHtml(p)}</p>`).join('')}</section>`).join('');
 $('#choices').innerHTML=''; $('#customForm').style.display='none'; updateMeta();
}
function render(){
 if(state.view==='all'){renderAll();return}
 const n=EPISODE.scenes[state.node];
 $('#location').textContent=n.loc; $('#story').innerHTML=n.text.split(/\n\n/).map(p=>`<p>${escapeHtml(p)}</p>`).join('');
 const box=$('#choices'); box.innerHTML='';
 n.choices.forEach((c,i)=>{const b=document.createElement('button');b.className='choice';b.innerHTML=`<span class="num">${i+1}</span><span>${escapeHtml(c[0])}</span>`;b.onclick=()=>{applyTags(c[1]);if(state.node<EPISODE.scenes.length-1)state.node++;else state.node=EPISODE.scenes.length;save();render();window.scrollTo({top:0,behavior:'smooth'});};box.appendChild(b)});
 $('#customForm').style.display='block'; updateMeta();
}
function addReaderControls(){const meta=$('.story-meta');if(!meta)return;let btn=document.createElement('button');btn.id='chapterToggle';btn.className='ghost';btn.type='button';btn.textContent='Read whole chapter';btn.onclick=()=>{state.view=state.view==='all'?'play':'all';save();render();window.scrollTo({top:0,behavior:'smooth'});};meta.appendChild(btn)}
$('#customForm').onsubmit=e=>{e.preventDefault();const v=$('#customChoice').value.trim();if(!v)return;state.custom.push({node:state.node,text:v});$('#customChoice').value='';save();const msg=document.createElement('p');msg.className='thought';msg.innerHTML=`<em>You choose to: ${escapeHtml(v)}</em>`;$('#story').appendChild(msg)};
$('#restart').onclick=()=>{if(confirm('Restart this story from the beginning?')){localStorage.removeItem(KEY);location.reload()}};
addReaderControls();render();
