(() => {
  'use strict';
  const KEY='glimmerfics-hogwarts-v12';
  const $=s=>document.querySelector(s);
  const esc=s=>{const d=document.createElement('div');d.textContent=s;return d.innerHTML};
  const get=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch(_){return null}};
  const save=s=>localStorage.setItem(KEY,JSON.stringify(s));

  // This layer deliberately slows the story down. These scenes are long chapter prose,
  // not transition snippets: the characters get room to think, talk, notice things and choose.
  const scenes={
    journalNext:{episode:'Episode XIV · What the Gaunts Buried',loc:'Gaunt Mausoleum · The Journal',text:`The next page turned with a sound so quiet that, for a moment, Samira wondered whether she had imagined it.

The three of them remained exactly where they were.

No one reached for the journal.

The silver line beneath the final warning had stopped glowing, but the faint warmth it had left in the parchment remained beneath Samira's fingertips. It was an unsettling warmth. Not the heat of a spell. Not the residue of fire. Something closer to the sensation of touching a living pulse through a layer of cloth.

She drew her hand back.

The mausoleum seemed colder than it had a moment ago.

Sebastian was the first to speak.

“Read it again.”

Samira looked down.

The words were still there.

DO NOT COMPLETE THE CIRCUIT WITH A CURSED SOUL.

She read them silently a second time.

Then a third.

There was no hidden clause beneath them. No footnote. No softened interpretation waiting to make the sentence less frightening.

Ominis stood opposite her, his wand lowered but still in his hand.

“What exactly counts as a cursed soul?” he asked.

Samira looked at him.

“I don't know.”

“That,” Sebastian said quietly, “is precisely what worries me.”

He moved closer to the journal, but did not touch it.

“The writer could have said ‘do not use Anne.’ They didn't.”

Samira felt the weight of that distinction settle between them.

Anne had never been merely a name in their research. She was the reason the research mattered. The reason Sebastian had chased answers long after caution should have stopped him. The reason Ominis had agreed to return to a family place he had spent years trying not to think about. The reason Samira had followed her father's scattered notes into secrets that had been buried for generations.

But now the journal had drawn a boundary.

And boundaries mattered.

Ominis slowly turned his face towards the wall on his left.

“There's something else.”

Samira followed his attention.

At first she saw only stone.

Then she noticed the pattern.

Seven shallow marks had been carved into the wall, almost invisible beneath age and dust. Six were dark. The seventh caught the faintest trace of silver light.

Sebastian crouched beside them.

“That's not decoration.”

“No,” Ominis said. “It's a wayfinder.”

“You can tell?”

“I can hear the enchantment.”

Samira watched him raise his wand.

He did not cast.

He simply listened.

A few seconds passed.

Then his expression changed.

“There is a passage behind this wall.”

Sebastian looked at Samira.

Samira looked at the journal.

For once, nobody suggested rushing forward.

They had spent too long discovering what happened when they mistook urgency for courage.

Samira opened the journal again and studied the map hidden beneath the warning. It was not a normal map. The lines did not show rooms and corridors. They showed relationships: one chamber leading to another, one seal depending upon another seal, one point remaining deliberately incomplete.

At the bottom was a symbol that matched the seventh mark on the wall.

Her father's handwriting appeared beside it.

Not a sentence.

Only three words.

Leave the seventh open.

Samira's throat tightened.

Her father had known.

Perhaps not everything. Perhaps not what the Gaunts had hidden beneath their mausoleum. But he had known enough to stop before completing the final point.

Sebastian read the words over her shoulder.

“Your father wasn't trying to finish it.”

“No.”

“He was trying to prevent someone else from finishing it.”

Samira nodded slowly.

The realization was strangely comforting.

Not because it made the mystery smaller.

Because it meant the missing piece had always been intentional.

Ominis moved closer to the wall.

“If the passage is real, it may lead to the original chamber.”

“The one where the circuit was first constructed?” Samira asked.

“Or the place where they learned why it should never be completed.”

Nobody answered immediately.

Beyond the mausoleum, the winter wind moved through the trees. Somewhere above the stone ceiling, a branch scraped against the roof with a slow, repetitive sound.

Samira closed the journal.

“We don't go down there because we are curious.”

Sebastian gave a faint, humorless smile.

“That eliminates at least one of us.”

She looked at him.

He lifted both hands.

“I said at least.”

Even Ominis smiled.

It lasted only a moment.

Then Samira turned back towards the wall.

There was fear in her chest.

But underneath it was something steadier.

A decision.

They had come here for Anne.

They would leave only when they understood what the journal was warning them about.`},
    lowerChambers:{episode:'Episode XIV · What the Gaunts Buried',loc:'Gaunt Mausoleum · The Hidden Stair',text:`The seventh mark responded when Samira touched it.

Not with a flash.

Not with the dramatic crack of a door unlocking.

Instead, the stone beneath her palm became warm.

A single line of silver travelled through the wall.

It followed the carved mark, crossed the old stonework, and disappeared beneath the floor.

Ominis tilted his head.

“It's opening.”

A section of the wall shifted inward by less than an inch.

Dust fell.

Sebastian caught his breath.

Samira waited.

The mechanism moved again.

Slowly, painfully slowly, a narrow doorway appeared where there had been solid stone. Beyond it was darkness, but not ordinary darkness. The kind that seemed to absorb the weak light from their wands rather than reflect it.

A staircase descended into it.

There were no torches.

No portraits.

No family crest.

Only seven steps visible before the darkness swallowed the rest.

Sebastian looked down.

“Of course there are stairs.”

Samira almost laughed.

“Don't.”

“I didn't say anything.”

“You were thinking it loudly.”

Ominis gave the smallest shake of his head.

“Both of you are impossible.”

For a moment, the three of them simply stood at the entrance.

This was different from the corridors of Hogwarts. Different from the Undercroft. Different even from the parts of the castle that had been forgotten by everyone except ghosts and old portraits.

This place had been designed to be forgotten.

Samira lifted her wand.

“Before we go down, rules.”

Sebastian sighed theatrically.

“Again?”

“Yes. Again.”

She held up one finger.

“No completed seventh point.”

A second.

“No curse transferred into a person.”

A third.

“If either of you says stop, we stop.”

Ominis nodded immediately.

Sebastian's expression became serious.

“Agreed.”

Samira took one breath.

Then she stepped onto the first stair.

Nothing happened.

The second stair was the same.

The third.

On the fourth, the air changed.

It smelled faintly of stone after rain.

On the fifth, Samira heard something.

Not a voice.

A vibration.

A low, almost inaudible hum beneath the soles of her shoes.

Ominis stopped.

“You hear that?”

“I feel it.”

Sebastian raised his wand.

“Then we're close.”

“Or we're being warned,” Ominis said.

That stopped him.

They continued more carefully.

The seventh stair was different.

A thin silver line crossed it from one wall to the other.

Samira crouched.

Her father's handwriting had appeared again, this time scratched directly into the stone.

Not a warning.

A question.

What remains when the vessel is removed?

Samira stared at it.

“The curse,” she whispered.

Ominis shook his head.

“No.”

She looked at him.

“The memory.”

Sebastian's expression changed.

They all understood at once.

The circuit was not only about containing a curse.

It was about separating what the curse had become from what the person had been.

And somewhere below them, the Gaunts had apparently learned how to do it.

The staircase continued.

This time Samira led.

Not because she was fearless.

Because she finally understood that the point of the descent was not to reach the bottom as quickly as possible.

It was to notice what the people before them had left behind.`},
    anchorSamira:{episode:'Episode XV · The Seventh Point',loc:'Gaunt Mausoleum · The Lower Archive',text:`Samira did not move towards the staircase.

Instead, she looked down at the final line in the journal.

Then she looked at the seven marks on the wall.

“What if it's me?”

Sebastian's expression hardened immediately.

“Don't.”

“I asked a question.”

“And I am answering it.”

Ominis remained silent.

Samira turned towards him.

“You're thinking about it.”

“Yes.”

Sebastian looked at him.

Ominis did not flinch.

“I am thinking about whether the journal could have been referring to a living resonance rather than a cursed person.”

Samira's pulse quickened.

“That could be me.”

“It could,” Ominis admitted.

Sebastian stepped forward.

“Or it could be precisely the conclusion the journal wants someone frightened enough to make.”

The words landed harder than Samira expected.

She looked down at her father's notes.

He had never written that she was the seventh point.

He had written that the seventh point must remain open.

There was a difference.

A very important one.

Samira sat on the cold stone bench beside the journal.

For several moments, none of them spoke.

The silence was not awkward.

It was the kind of silence that came when everyone was trying to be honest before saying something that could not be unsaid.

Finally Ominis spoke.

“You have been carrying the possibility that you are connected to this since the beginning.”

Samira looked at him.

“Yes.”

“You never told us how frightened you were.”

She almost smiled.

“I didn't know how.”

Sebastian sat opposite her.

“You don't have to turn yourself into an answer just because you want Anne to be saved.”

Samira's eyes stung.

That was the first time either of them had said it so plainly.

She had been treating herself like another piece of research.

A variable.

A possible vessel.

Something that could be tested if the alternative was Anne remaining cursed.

She closed the journal.

“No more guessing that I am expendable.”

Sebastian nodded.

Ominis did too.

The decision felt strangely quiet.

No spell.

No dramatic revelation.

Just three people agreeing that saving Anne could not mean sacrificing Samira to the same machinery that had hurt her.

Then Ominis reached towards the wall.

“There is another inscription.”

Samira stood.

He traced the edge of a concealed panel with his wand.

A phrase appeared in silver.

THE WITNESS MAY OPEN THE WAY.

NOT THE VESSEL.

Samira stared.

“The witness.”

Sebastian looked at her.

“That sounds much more like you.”

For the first time since they had opened the journal, Samira breathed freely.

They did not have an answer yet.

But they had something better.

A distinction.

The person who could open the circuit did not have to become the thing the circuit consumed.

Somewhere beneath them, a lock clicked.

The hidden stairway was waiting.`},
    leaveMausoleum:{episode:'Episode XIV · What the Gaunts Buried',loc:'Outside the Gaunt Mausoleum · Winter Grounds',text:`Samira closed the journal.

Not because she was giving up.

Because she had finally learned when to stop.

The warning was too important to ignore, and the lower passage was too old to enter without preparation. They could return. They could research. They could compare her father's notes with the Gaunt records before stepping into a place built around a ritual none of them fully understood.

Sebastian looked disappointed.

Ominis looked relieved.

Samira noticed both.

“We're not abandoning this,” she said.

“I know,” Sebastian answered.

They walked back through the mausoleum together.

The winter air outside felt almost painfully clean.

For a while they said nothing.

The trees moved in the wind. Snow rested in the hollows between the stones. Somewhere beyond the grounds, the world continued as though three students had not just discovered a secret that might determine whether Anne could ever be free.

Samira looked back at the mausoleum.

The door was already closing.

Ominis stopped beside her.

“Coming back tomorrow?”

Samira looked at the journal beneath her arm.

“Yes.”

Sebastian smiled.

“Good.”

They began the walk back towards Hogwarts.

It was not the dramatic ending Samira had imagined when they first made their plan.

It was better.

They had discovered a warning.

They had discovered a hidden passage.

And, perhaps most importantly, they had decided not to let desperation choose for them.

Anne deserved a cure.

She did not deserve another sacrifice.

Neither did Samira.`}
  };

  const options={
    journalNext:[
      ['Follow the map into the hidden stairway.','lowerChambers',{anne:2}],
      ['Ask whether Samira could be the seventh point.','anchorSamira',{anne:1}],
      ['Close the journal and leave until they can prepare properly.','leaveMausoleum',{sebastian:1,ominis:1}]
    ],
    lowerChambers:[
      ['Continue deeper and examine the first inscription.','lowerChambers2',{anne:1}],
      ['Ask Ominis to listen for hidden wards before going farther.','anchorSamira',{ominis:2}],
      ['Return to the journal and compare the seven marks carefully.','journalNext',{anne:1}]
    ],
    anchorSamira:[
      ['Accept the distinction: witness, not vessel, and examine the hidden lock.','lowerChambers',{anne:2}],
      ['Ask Sebastian what he noticed about the inscription.','lowerChambers',{sebastian:1}],
      ['Ask Ominis to explain what the Gaunts may have known.','lowerChambers',{ominis:1}]
    ],
    leaveMausoleum:[
      ['Return to Hogwarts and research the seventh point before coming back.','morning',{anne:1}],
      ['Ask Sebastian to stay and talk before they return.','morning',{sebastian:2}],
      ['Ask Ominis what he truly thinks the warning means.','morning',{ominis:2}]
    },
    lowerChambers2:[
      ['Study the inscription slowly before touching anything.','anchorSamira',{anne:1}],
      ['Let Ominis examine the ward from a safe distance.','anchorSamira',{ominis:2}],
      ['Mark the location and return to Hogwarts with the information.','leaveMausoleum',{anne:1}]
    ]
  };

  function apply(target,delta,from,label){
    const s=get(); if(!s)return;
    s.history=Array.isArray(s.history)?s.history:[];
    s.history.push({from,label,to:target,at:Date.now()});
    Object.entries(delta||{}).forEach(([k,v])=>{s[k]=(s[k]||0)+v});
    s.node=target; save(s); location.reload();
  }

  function renderFlow(s){
    const scene=scenes[s.node];
    const story=$('#story'), choices=$('#choices');
    if(!scene||!story||!choices)return false;
    $('#chapterLabel').textContent=scene.episode;
    $('#location').textContent=scene.loc;
    $('#progress').textContent=`Scene ${(s.history?.length||0)+1} · ${scene.episode.match(/Episode\s+([IVXLCDM]+)/)?.[1]||''}`;
    story.innerHTML=scene.text.trim().split(/\n\s*\n/).map(p=>`<p>${esc(p).replace(/\n/g,'<br>')}</p>`).join('');
    choices.innerHTML='';
    (options[s.node]||[]).forEach(([label,target,delta],i)=>{
      const b=document.createElement('button'); b.type='button'; b.className='choice';
      b.innerHTML=`<span class="choice-num">${i+1}</span><span>${esc(label)}</span>`;
      b.addEventListener('click',()=>apply(target,delta,s.node,label)); choices.appendChild(b);
    });
    $('#relationshipState').textContent=`Sebastian · ${s.sebastian||0} | Ominis · ${s.ominis||0} | Anne · ${s.anne||0}`;
    save(s); window.scrollTo({top:0,behavior:'smooth'}); return true;
  }

  function install(){const s=get();if(s&&scenes[s.node])renderFlow(s)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install);else install();
})();
