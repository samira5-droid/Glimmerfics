const KEY='glimmerfics-hogwarts-v6';
const saved=JSON.parse(localStorage.getItem(KEY)||'null');
const state=saved||{node:0,sebastian:0,ominis:0,anne:0,custom:[],view:'play'};
const $=s=>document.querySelector(s); const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
const effects={sebastian:()=>state.sebastian++,ominis:()=>state.ominis++,anne:()=>state.anne++};
function escapeHtml(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}

const EPISODE={title:'Episode III · The First Resonance',scenes:[
{loc:'Hogwarts Library · After Midnight',text:`The library had gone so quiet that, for a moment, I wondered whether I was the only person left awake in the entire castle.

I could hear the wind pressing against the tall windows, the occasional creak of the old shelves, and the soft, almost comforting crackle of the candles scattered across our table. Somewhere far above us, a door closed with a distant thud. The sound travelled through the stone and disappeared again.

I looked down at the mess in front of me.

My father's notes covered almost half the table. Some pages were folded over themselves, others were held open beneath ink bottles and books Sebastian had pulled from the library shelves. There were little pieces of parchment everywhere, covered in calculations, symbols and questions I had written in the margins.

I should have been tired.

I was tired.

But every time I tried to look away from my father's handwriting, I remembered why we were here.

Anne.

The thought of her was enough to make the exhaustion disappear again.

Across from me, Sebastian was bent over his latest diagram. His sleeves were rolled up, his tie was crooked, and there was a small smear of ink along the side of his hand. He had been staring at the same section for several minutes, occasionally scratching something out and replacing it with another line.

Ominis sat beside the window, his wand resting lightly between his fingers. He had been unusually quiet tonight. I had learned by now that Ominis's silence rarely meant that he had nothing to say. Usually, it meant he was listening to something the rest of us couldn't hear.

I was about to ask him what he sensed when something on the table moved.

I froze.

A thin silver line had appeared across one of my father's pages.

It was so faint that at first I thought it was only the candlelight. Then it shimmered again.

Sebastian lifted his head.

“Did you do that?”

I shook my head.

“No.”

Ominis immediately straightened.

“Don't touch it.”

I hadn't intended to.

At least, that was what I told myself.

The silver line slowly travelled between the words my father had written, slipping through the spaces between them as though the ink itself had become liquid. It moved toward Sebastian's diagram.

Then it stopped.

Right at the centre.

I felt a strange pressure behind my ribs.

Not pain.

Recognition.

I leaned closer before I could stop myself.

The silver line pulsed once.

And somehow, impossibly, I had the feeling that the parchment was waiting for me.` ,choices:[['Ask Ominis what he can sense.', ['ominis']],['Move closer to Sebastian and study the diagram with him.', ['sebastian']],['Reach out and touch the silver line.', ['anne']],['Tell them everything my father wrote about resonance.', ['anne','ominis']] ]},
{loc:'Hogwarts Library · The Resonance',text:`I barely had time to think before I reached out.

My fingertip touched the silver line.

Cold shot through my hand.

I gasped and almost pulled away, but then the sensation changed. The cold travelled up my wrist and settled somewhere beneath my skin, not painful but strangely familiar. It felt like standing beside a powerful magical object and hearing it hum before it was even activated.

Only this time, the magic was humming inside me.

The silver line brightened.

Sebastian was beside me instantly.

“Samira.”

His hand closed around my wrist when I swayed.

I could feel his fingers against my skin, warm and steady, and for one ridiculous second I became more aware of that than the magic itself.

Then the library disappeared.

I was standing somewhere else.

A corridor stretched in front of me, built from pale, ancient stone. I couldn't see where the light came from. There were no torches, no windows, nothing that should have illuminated the passage, yet I could see every crack in the walls.

I heard something.

A low vibration.

The same sound Ominis had described.

I turned.

At the end of the corridor stood a door.

There was a symbol carved into it.

My father's symbol.

I knew it immediately.

I had seen it in his notes so many times that I could have drawn it with my eyes closed.

I stepped toward it.

The closer I came, the louder the vibration became.

Then the door moved.

Just slightly.

I reached for it—

—and suddenly I was back in the library.

I stumbled against the table.

Sebastian caught me before I fell.

“Easy.”

I looked at him, trying to catch my breath.

Ominis was standing now too.

“What happened?” he asked.

I opened my mouth, but for a moment no words came.

I could still see the door.

I could still hear that sound.

And beneath all of it was the awful certainty that what I had just seen had not been a dream.

“You saw something,” Sebastian said quietly.

I looked down at the silver line.

It had gone dark again.

“Yes,” I whispered.

And suddenly, the little room felt much too small for the three of us.` ,choices:[['Tell Sebastian everything you saw.', ['sebastian']],['Tell Ominis first, including the sound you heard.', ['ominis']],['Describe my father’s symbol to both of them.', ['anne']],['Pull away, breathe, and search my father’s notes for the same symbol.', ['anne']] ]},
{loc:'The Undercroft · The Theory',text:`We did not stay in the library.

There was no discussion about it. Sebastian simply gathered the most important pages, Ominis took the lantern, and I followed them through the castle with my father's notes held tightly against my chest.

The Undercroft felt colder than usual.

I noticed it the moment we entered.

The familiar darkness seemed to close around us, and the faint magical glow from Ominis's wand stretched long shadows across the walls. I put the papers down while Sebastian cleared a space on the table.

For a few moments, none of us spoke.

Then Sebastian unfolded the diagram.

“I think I've misunderstood this,” he said.

I looked at him.

“That's reassuring.”

He gave me a tired smile.

“I was hoping you'd say something more encouraging.”

“You've been awake half the night.”

“So have you.”

“That isn't the point.”

Ominis made a quiet sound that might have been amusement.

Sebastian ignored him and pointed to the circles on the parchment.

“These aren't measurements.”

I leaned closer.

“What are they?”

“Positions.”

He traced one of the lines with his finger.

“Places where magical resonance can be amplified. Your father's notes describe magic as a frequency. I think he discovered that certain locations can make that frequency stronger.”

My stomach tightened.

“The corridor.”

Sebastian nodded.

“I think that's what you saw.”

Ominis's expression became serious.

“And what happens if a curse is exposed to that kind of resonance?”

Sebastian looked at him.

“I don't know.”

I hated those words.

I hated how often they had become part of our conversations.

I looked at Anne's name in my father's notes.

“Could it help her?”

Sebastian went still.

I saw the hope in his eyes before he tried to hide it.

“It might,” he said.

My heart gave a painful little twist.

“Might?”

“I don't want to promise you something I can't prove.”

For once, Sebastian sounded completely serious.

“If we can control the resonance, it might interrupt the way the curse feeds itself. It could give Anne's magic a chance to stabilise.”

Ominis's fingers tightened around his wand.

“And the cost?”

Sebastian didn't answer.

That frightened me more than anything else he could have said.` ,choices:[['Ask Sebastian to show me the part of the diagram he has been hiding.', ['sebastian']],['Ask Ominis what worries him about resonance magic.', ['ominis']],['Say that if there is even a chance to help Anne, we have to investigate.', ['anne']],['Insist that we understand every risk before we try anything.', []] ]},
{loc:'The Undercroft · Sebastian',text:`I knew there was another page.

I could see it in the way Sebastian kept one hand over the lower edge of the diagram.

“Sebastian.”

He looked at me.

“What?”

“You're hiding something.”

Ominis sighed softly.

“I was beginning to wonder how long it would take you.”

Sebastian gave him an annoyed look, then reached beneath the diagram and pulled out a folded piece of parchment.

“I wasn't hiding it.”

“You were literally hiding it under the parchment.”

“I was deciding whether it was worth showing you.”

He unfolded it.

The drawing made my breath catch.

At the centre was a small circle surrounded by seven marks. Fine lines connected them, forming a pattern that reminded me of the symbol from my vision.

“I think this is a stabilisation pattern,” Sebastian said.

I stared at it.

“Could it cure her?”

He immediately shook his head.

“No. I need you to understand that. I don't know if anything can cure what Anne has.”

His voice softened.

“But it might give her time.”

Time.

Such a small word.

Such a huge thing to hope for.

I looked at Sebastian.

He was staring at the parchment, but I could tell he wasn't really seeing it anymore.

“You haven't slept,” I said.

“Neither have you.”

“Sebastian.”

He closed his eyes for a moment.

When he opened them again, the usual confidence was gone.

“I can't stop.”

His voice was barely above a whisper.

“Every time I think I've found something, there's another problem. Another piece missing. And while I'm sitting here trying to solve it, Anne is still suffering.”

I didn't know what to say.

I had seen Sebastian angry. Reckless. Determined. Frustrated.

I had rarely seen him afraid.

“I don't know how to do this,” he admitted.

The words hurt to hear.

Not because they were weakness.

Because I knew how much courage it had taken him to say them.

I reached across the table.

For a moment I hesitated.

Then I took his hand.

His fingers tightened around mine.

Neither of us spoke.

And somehow, in the silence of the Undercroft, that was enough.` ,choices:[['Promise Sebastian I will help, but make him rest tonight.', ['sebastian','anne']],['Tell him he doesn't have to carry Anne’s fate alone.', ['sebastian','anne']],['Ask Ominis to help me keep Sebastian grounded.', ['ominis','sebastian']],['Keep holding Sebastian’s hand and tell him I’m not going anywhere.', ['sebastian','anne']] ]},
{loc:'Hogwarts Library · The Pinky Promise',text:`When we returned to the library, I realised just how late it had become.

The candles had burned down almost to their holders. My eyes felt heavy, and every muscle in my shoulders ached from sitting in the same position for hours.

Sebastian still had the diagram in his hands.

“Tomorrow,” he said.

I raised an eyebrow.

“Tomorrow what?”

“I'll finish it.”

“You said that yesterday.”

“I was optimistic yesterday.”

“You were awake until three.”

“That is completely unrelated.”

I stared at him.

He stared back.

Then he sighed.

“Fine.”

I held out my little finger.

Sebastian looked at it as though I had presented him with an especially complicated potion ingredient.

“What are you doing?”

“Making sure you actually sleep.”

“You think a pinky promise is going to stop me?”

“Yes.”

“That is absurd.”

“Then you have nothing to lose.”

He shook his head, but there was a smile hiding at the corner of his mouth.

Slowly, he hooked his little finger around mine.

“Fine,” he murmured. “Pinky promise.”

For a second, neither of us moved.

His hand was warm.

I became suddenly aware of how close we were standing.

Then Ominis cleared his throat.

“I feel I should be charging admission.”

I laughed.

Sebastian groaned.

“You're insufferable.”

“And yet,” Ominis replied, “you continue to bring me along.”

“I didn't bring you.”

“No. I followed you.”

The tension broke.

For a few minutes, we simply talked.

No curse.

No resonance.

No vault.

Just us.

I wished I could keep that moment somewhere safe.

Because I knew what was coming.

And somehow, the knowledge made every quiet moment feel more precious.` ,choices:[['Keep the promise between Sebastian and me to myself.', ['sebastian']],['Tease Ominis about being jealous.', ['ominis']],['Ask Ominis what he has been thinking about all night.', ['ominis']],['Return to the notes and focus on what comes next.', ['anne']] ]},
{loc:'Hogwarts Library · The Gaunt Vault',text:`Ominis became quieter when he began talking about his family.

I had noticed it before, but tonight I understood what it meant.

He wasn't simply remembering.

He was preparing himself.

“The vault is in the family mausoleum,” he said. “About a mile from the main house.”

I looked at him.

“A mausoleum?”

“Of course.” A faint smile crossed his face. “The Gaunts have never been particularly fond of cheerful architecture.”

I smiled, but it disappeared when he continued.

“There are blood wards. Old ones. If they are still active, they will recognise me.”

“And that's good?” Sebastian asked.

“Not necessarily.”

Ominis turned his face slightly toward us.

“There may be a journal inside. My family kept records of almost everything they considered important. There may also be maps of the catacombs.”

My father's symbol flashed through my mind.

“The journal could tell us where the resonance chamber is.”

“Yes.”

Sebastian leaned over the table.

“When?”

Ominis didn't hesitate.

“Hogsmeade weekend.”

I frowned.

“The plan is simple. We slip out, I handle the blood wards, we're in and out before anyone notices.”

I stared at him.

“That is your definition of simple?”

A small smile appeared.

“I said the plan was simple. I didn't say it was safe.”

I should have laughed.

Instead, I looked at his face.

For Ominis, this wasn't just another secret passage or forbidden room.

He would be going back to a place connected to everything he had spent years trying to escape.

“Are you afraid?” I asked.

He was silent.

Then he answered honestly.

“Yes.”

The single word settled between us.

I stepped closer.

“You won't be alone.”

His expression changed.

“You shouldn't make promises like that lightly, Samira.”

“I don't.”

For a moment, he simply looked in my direction.

Then he nodded.

“I know.”` ,choices:[['Ask Ominis exactly how the blood wards work.', ['ominis']],['Tell Ominis I will be beside him when we enter the vault.', ['ominis','anne']],['Ask Sebastian what we should prepare before Hogsmeade weekend.', ['sebastian']],['Tell them both that we are going to get that journal.', ['ominis','sebastian','anne']] ]},
{loc:'Hogwarts Library · Before Dawn',text:`The first pale light of dawn was beginning to appear beyond the windows when we finally stopped.

I stood beside the table and looked at everything we had gathered.

My father's notes.

Sebastian's diagram.

The symbol from my vision.

The notes about resonance.

And now the plan for the Gaunt mausoleum.

It should have frightened me more than it did.

Maybe it did frighten me.

I just didn't have room for fear anymore.

There were too many things depending on us.

Anne.

The mystery my father had left behind.

Sebastian, who kept trying to carry everything himself.

Ominis, who was preparing to walk back into the darkest part of his family's history.

I looked toward Ominis.

“You're not like them,” I said quietly.

He turned his head toward me.

“You know that, right?”

For a moment, he said nothing.

Then he gave the smallest smile.

“I know what I'm not.”

He paused.

“And I choose differently every day.”

The words stayed with me.

Behind us, Sebastian gathered the papers into a neat pile. He had finally agreed to sleep, although I suspected that agreement had required more persuasion than he wanted to admit.

I glanced at him.

He caught me looking.

“What?”

“Nothing.”

He smiled.

I smiled back.

Then I looked down at my father's notes one last time.

The silver line had disappeared.

But I could still feel the resonance somewhere beneath my skin.

Two days.

That was all we had before Hogsmeade weekend.

Two days before we would leave the safety of Hogwarts and walk toward the Gaunt family mausoleum.

Two days before we would find out whether my father's research had been pointing us toward a cure—or toward something much more dangerous.

I closed the notebook.

For the first time, the plan felt real.

And somehow, I knew that after we entered that vault, none of us would come back exactly the same.` ,choices:[['Tell Ominis I believe him.', ['ominis']],['Tell Sebastian I am ready to finish the diagram with him tomorrow.', ['sebastian']],['Promise both of them I will be there when the vault opens.', ['ominis','sebastian','anne']],['Say nothing and let the silence keep the promise for me.', []] ]}
]};

function applyTags(tags){(tags||[]).forEach(t=>effects[t]&&effects[t]())}
function updateMeta(){ $('#chapterLabel').textContent=EPISODE.title; $('#progress').textContent=state.view==='all'?'Complete chapter':'Scene '+Math.min(state.node+1,EPISODE.scenes.length)+' / '+EPISODE.scenes.length; $('#relationshipState').textContent=`Sebastian · ${state.sebastian}  |  Ominis · ${state.ominis}  |  Anne · ${state.anne}`; }
function renderAll(){ $('#location').textContent='The complete chapter'; $('#story').innerHTML=EPISODE.scenes.map((s,i)=>`<section class="chapter-scene"><div class="scene-heading"><span>${i+1}</span><em>${escapeHtml(s.loc)}</em></div>${s.text.split(/\n\n/).map(p=>`<p>${escapeHtml(p)}</p>`).join('')}</section>`).join(''); $('#choices').innerHTML=''; $('#customForm').style.display='none'; updateMeta(); }
function render(){ if(state.view==='all'){renderAll();return} const n=EPISODE.scenes[Math.min(state.node,EPISODE.scenes.length-1)]; $('#location').textContent=n.loc; $('#story').innerHTML=n.text.split(/\n\n/).map(p=>`<p>${escapeHtml(p)}</p>`).join(''); const box=$('#choices'); box.innerHTML=''; if(state.node>=EPISODE.scenes.length){$('#progress').textContent='Episode complete · To be continued';$('#customForm').style.display='none';updateMeta();return} n.choices.forEach((c,i)=>{const b=document.createElement('button');b.className='choice';b.innerHTML=`<span class="num">${i+1}</span><span>${escapeHtml(c[0])}</span>`;b.onclick=()=>{applyTags(c[1]);state.node++;save();render();window.scrollTo({top:0,behavior:'smooth'});};box.appendChild(b)}); $('#customForm').style.display='block'; updateMeta(); }
function addReaderControls(){const meta=$('.story-meta');if(!meta)return;let btn=document.createElement('button');btn.id='chapterToggle';btn.className='ghost';btn.type='button';btn.textContent='Read whole chapter';btn.onclick=()=>{state.view=state.view==='all'?'play':'all';save();render();window.scrollTo({top:0,behavior:'smooth'});};meta.appendChild(btn)}
$('#customForm').onsubmit=e=>{e.preventDefault();const v=$('#customChoice').value.trim();if(!v)return;state.custom.push({node:state.node,text:v});$('#customChoice').value='';save();const msg=document.createElement('p');msg.className='thought';msg.innerHTML=`<em>I choose to: ${escapeHtml(v)}</em>`;$('#story').appendChild(msg)};
$('#restart').onclick=()=>{if(confirm('Restart this story from the beginning?')){localStorage.removeItem(KEY);location.reload()}};
addReaderControls();render();
