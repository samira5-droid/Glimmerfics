(() => {
  'use strict';
  const KEY='glimmerfics-hogwarts-v12';
  const $=s=>document.querySelector(s);
  const esc=s=>{const d=document.createElement('div');d.textContent=s;return d.innerHTML};
  const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch(_){return null}};
  const save=s=>localStorage.setItem(KEY,JSON.stringify(s));
  let active=false;

  const scenes={
    journalNext:{
      chapter:'Episode XIII · The Seventh Anchor',loc:'Gaunt Mausoleum · The Journal',
      text:`The page did not turn immediately.

For several seconds, nothing happened at all.

Samira remained with one hand resting lightly against the edge of the journal, afraid that even the smallest movement might disturb whatever had awakened inside it. The candlelight trembled across the old leather cover. Dust hung in the air. Somewhere beyond the mausoleum walls, wind moved through the dead branches of the estate, making them scrape softly against the stone.

Sebastian had stopped breathing quite so loudly.

Ominis had gone completely still.

Neither of them reached for the book.

It was the first sensible thing any of them had done since opening it.

Then the silver writing returned.

Not all at once.

One word appeared beneath another, slowly enough that Samira could feel the meaning forming before she had read it.

THE SEVENTH ANCHOR WAS NEVER MEANT TO BE A PLACE.

Sebastian leaned closer.

Samira read the sentence again.

Then a third time.

“A place,” she whispered. “So the seventh point isn't another location.”

“No,” Ominis said.

His voice was quieter than usual.

“It isn't.”

The journal remained open between them.

Another line appeared.

IT WAS A WITNESS.

Samira's fingers tightened against the leather.

A witness.

The word should have made the answer simpler.

Instead, it opened another dozen questions.

“What does that mean?” she asked.

Ominis tilted his head, listening to something neither Samira nor Sebastian could hear.

“It means the seventh point does not hold the magic.”

Sebastian frowned.

“Then what does it do?”

“It remembers.”

Silence settled over the room.

Samira thought of her father's notes.

Seven points.

Six active.

One left unfinished.

She had assumed the missing connection was a flaw in the diagram. Something he had failed to solve. Something they would eventually need to repair.

But perhaps her father had never intended to complete it.

Perhaps the empty space had been the most deliberate part of the entire design.

The journal turned another page.

This time, the writing was longer.

A living resonance may observe a completed circuit without becoming part of it. The witness must remain separate. The vessel must remain empty.

Sebastian read the sentence twice.

“That's important.”

“It is,” Samira said.

She looked down at the words again.

A living resonance.

A witness.

A vessel.

Three different things.

Three things the Gaunts might have deliberately confused.

And then Anne's name came into her mind.

She did not say it.

She didn't need to.

Sebastian's expression told her he had reached the same conclusion.

Ominis's hand tightened around his wand.

“Whatever you are thinking,” he said, “do not decide anything yet.”

Samira looked at him.

“I wasn't going to.”

“You were considering it.”

She almost smiled.

“You're becoming annoyingly good at that.”

“I have had practice.”

Sebastian gave a quiet huff of laughter.

The moment was small.

Almost ordinary.

And that made the next line on the page feel worse.

DO NOT COMPLETE THE CIRCUIT WITH A CURSED SOUL.

No one spoke.

The sentence seemed to occupy the entire chamber.

Samira looked at Anne's name in her mind and felt the hope she had been carrying all morning twist into something more careful.

This was not a solution yet.

It was a boundary.

A warning written by someone who had already learned what happened when that boundary was crossed.

Sebastian finally spoke.

“So we know what not to do.”

Ominis nodded.

“And now we find out why.”

The journal gave one final pulse of silver light.

Beneath the warning, a map slowly appeared.

It was not a map of the grounds above them.

It showed the stone beneath the mausoleum.

A staircase.

A corridor.

A circular chamber.

Seven pillars.

And beneath them, written in the same silver hand:

THE PLACE WHERE THE FIRST ATTEMPT FAILED.

Samira stared at the map.

Her father's research had not been a dead end.

He had left them a trail.

And the trail did not point towards Anne.

It pointed deeper.

“That's where we're going,” she said.

Sebastian looked at her.

Ominis did too.

Neither objected.

But this time, no one rushed towards the stairs.

They stood together for another long moment, letting the weight of the warning settle before they moved.

Because whatever waited below had already happened once.

And none of them intended to let it happen again.`,
      choices:[
        ['Study the map carefully before going anywhere.','slowMap',{anne:1}],
        ['Ask Ominis what he knows about the first failed attempt.','slowGaunt',{ominis:2}],
        ['Close the journal for now and make sure everyone is ready.','slowReady',{sebastian:1,ominis:1}]
      ]
    },
    slowMap:{chapter:'Episode XIII · The Seventh Anchor',loc:'Gaunt Mausoleum · The Map',text:`Samira did not move towards the stairs.

Instead, she lowered herself beside the journal and studied the map until the lines stopped looking like ink and started looking like architecture.

The mausoleum had been built above something much older.

The upper crypt was only the visible part of the structure. Beneath it, the map showed three descending levels. The first contained family records. The second was marked with six circles. The third contained the chamber with seven pillars.

The seventh point had been drawn differently.

Not as a circle.

As an open eye.

Samira traced the shape in the air without touching the page.

“A witness,” she whispered.

Sebastian crouched beside her.

“There are routes around the chamber.”

“Escape routes?”

“Maybe.”

Ominis listened to the stone.

“No.”

They looked at him.

“There are doors,” he said. “But they were not built for escape.”

“What were they built for?” Samira asked.

He was silent for a moment.

“To observe.”

A chill moved through her.

Someone had designed the chamber so that a person could stand outside the circuit and watch what happened inside.

Her father's missing seventh point suddenly made more sense.

He had not needed another source of power.

He had needed someone who could see the truth without becoming part of it.

Samira looked at the map again.

“And the first attempt?”

Ominis's voice became very quiet.

“It happened below.”

Sebastian folded the map carefully.

“Then we go down slowly.”

Samira nodded.

No one made a joke.

No one tried to make the danger smaller than it was.

They gathered their things, checked their wands, and stood together at the entrance to the staircase.

The darkness below did not feel like an invitation.

It felt like a memory waiting to be disturbed.`,choices:[['Descend together, one step at a time.','lowerChambers',{anne:1}],['Ask Ominis to lead them through the old ward.','lowerChambers',{ominis:2}],['Ask Sebastian to check every step before anyone follows.','lowerChambers',{sebastian:2}]]},
    slowGaunt:{chapter:'Episode XIII · The Seventh Anchor',loc:'Gaunt Mausoleum · The Old Record',text:`Ominis did not answer immediately.

He stood with one hand resting against the journal cover, as though the old leather itself had become something he needed to keep at a distance.

“The first attempt,” he said at last, “was not an experiment in the way you mean.”

Samira waited.

“My family believed a curse could be separated from its victim by moving the curse into a prepared vessel.”

Sebastian's expression hardened.

“And the vessel?”

“Was meant to be empty.”

Ominis paused.

“It wasn't.”

The silence that followed was heavier than the words.

Samira understood.

“Someone was already inside it.”

“Yes.”

“And they became the anchor.”

“Yes.”

Sebastian looked away.

“So the warning isn't theoretical.”

“No.”

Ominis turned his face towards Samira.

“It is the warning my family should have written generations earlier.”

Samira felt something inside her settle.

They were not looking for a way to make the ritual stronger.

They were looking for a way to make it refuse the wrong outcome.

That distinction would matter.

More than any spell.

More than any amount of power.

Samira closed the journal carefully.

“Then we don't need to know how they succeeded.”

Ominis frowned.

“We need to know how they failed.”

Sebastian smiled faintly.

“That sounds like something your father would have said.”

Samira looked at him.

“Maybe that's why we're here.”

No one answered.

They simply turned towards the staircase.

This time, they were not going down to find a miracle.

They were going down to understand a mistake.`,choices:[['Descend and find the chamber where it happened.','lowerChambers',{anne:2}],['Ask Ominis to stay beside Samira on the stairs.','lowerChambers',{ominis:2}],['Ask Sebastian to carry the journal while Samira leads.','lowerChambers',{sebastian:2}]]},
    slowReady:{chapter:'Episode XIII · The Seventh Anchor',loc:'Gaunt Mausoleum · Before the Descent',text:`They took their time.

That was the first decision.

Sebastian checked the straps on his bag and made sure the crystal was protected. Ominis went over the map again, memorising the turns rather than trusting the paper. Samira reread the warning until she could almost feel the words beneath her skin.

No cursed soul.

No vessel.

No completed seventh point.

Three boundaries.

Three things they would not compromise.

“Anything else?” Sebastian asked.

Samira looked at Ominis.

He shook his head.

“Not yet.”

The word mattered.

Not yet meant they did not have to solve everything tonight.

Not yet meant they could stop.

Not yet meant Anne would not be placed in danger simply because they were desperate for an answer.

Samira breathed out slowly.

“Then we go.”

Ominis nodded.

Sebastian opened the old door.

Cold air rose from the staircase.

The first step disappeared into darkness.

Samira took it.

Then another.

Behind her, she heard Sebastian follow.

Ominis came last.

The door above them remained open for several seconds before slowly closing on its own.

None of them saw it happen.

By the time they reached the bottom, the world above felt impossibly far away.`,choices:[['Continue into the lower chambers.','lowerChambers',{anne:1}],['Stop at the bottom and listen before moving on.','lowerChambers',{ominis:1}],['Ask Sebastian to light the chamber before they proceed.','lowerChambers',{sebastian:1}]]},
    lowerChambers:{chapter:'Episode XIV · What the Gaunts Buried',loc:'Gaunt Mausoleum · Lower Chambers',text:`The staircase did not end where the map suggested it should.

It curved beneath the foundations of the mausoleum and continued down through stone that looked older than the building above it. The walls changed halfway down. Smooth blocks gave way to rough rock, then to black stone veined with something that caught the wandlight and returned it as a dull silver shimmer.

Samira slowed.

“Do you feel that?”

Sebastian did.

Ominis had already stopped.

“It isn't the resonance,” he said.

“What is it?”

“An echo of it.”

The distinction made Samira uneasy.

They continued.

At the bottom stood a narrow landing. No door. No handle. Only seven shallow grooves carved into the wall.

Six were dark.

The seventh held a thread of pale light.

Samira approached without touching it.

The light brightened.

Not because she cast a spell.

Because it recognised her.

Sebastian moved closer.

“Samira.”

“I know.”

The seventh groove opened.

Stone shifted somewhere beneath their feet.

A door appeared in the wall.

Ominis raised his wand.

“This is the chamber.”

“How can you know?” Sebastian asked.

“Because I can hear the wards remembering.”

Samira looked at him.

“Remembering what?”

Ominis swallowed.

“A scream.”

The word stopped all three of them.

No one moved for several seconds.

Then Samira stepped forward.

Not because she was fearless.

Because turning back without understanding would leave Anne's future in the hands of a mistake none of them had even named yet.

The door opened.

Inside was a circular chamber large enough to hold a ritual circle, but the circle itself had been destroyed. Six pillars stood around its edge. The seventh had been deliberately broken at the base.

In the centre was a stone basin.

Nothing moved.

Nothing glowed.

And yet the room felt occupied.

Samira took one slow breath.

They had finally reached the place where the warning had begun.`,choices:[['Enter the chamber together.','basin',{anne:1}],['Ask Ominis to listen before anyone crosses the threshold.','basinOm',{ominis:2}],['Ask Sebastian to inspect the broken seventh pillar.','basinSeb',{sebastian:2}]]},
    basin:{chapter:'Episode XIV · What the Gaunts Buried',loc:'Gaunt Mausoleum · The First Chamber',text:`No one crossed the threshold immediately.

The chamber had the kind of silence that made ordinary silence feel loud.

Samira could hear Sebastian's breathing. She could hear the faint movement of Ominis's wand through the air as he tested the edges of the wards. She could hear her own heartbeat.

Then she heard something else.

A slow pulse beneath the stone.

One.

Two.

Three.

The same rhythm.

Her father's resonance pattern.

Samira stepped inside.

The room answered.

Silver light travelled along the floor and stopped at each pillar in turn. Six lights awakened. The seventh remained dark.

Sebastian stared.

“He built the same sequence.”

“Or copied it,” Ominis said.

Samira moved towards the basin.

A memory formed above it.

Her father.

Younger than she remembered him.

Tired.

Afraid.

He stood beside a woman whose face remained hidden.

“We cannot use the child,” the woman said.

Her father's voice was low.

“I know.”

“Then destroy the seventh point.”

“No.”

The memory flickered.

“If I destroy it, no one will ever understand what happened here.”

The woman turned away.

“Then leave a witness.”

The vision vanished.

Samira stood frozen.

Sebastian was beside her immediately.

Ominis had gone pale.

“Did you hear that?” Samira asked.

“Yes,” Ominis whispered.

A new line appeared across the basin.

THE WITNESS MUST LIVE.

Samira stared at it.

The words were not asking for sacrifice.

They were rejecting it.

For the first time, she understood what her father might have been trying to accomplish.

He had not designed a way to make the curse obey.

He had designed a way to make the ritual stop before it could consume anyone.

Sebastian looked at her.

“That changes everything.”

Samira nodded.

But she was still looking at the seventh pillar.

“Not everything.”

A hidden seam appeared beneath the basin.

Something below them unlocked.

A door began to open in the floor.

And from somewhere beneath it came the faintest sound of turning pages.`,choices:[['Open the hidden chamber beneath the basin.','hiddenDoor',{anne:1}],['Ask Ominis what he heard beneath the stone.','basinOm',{ominis:2}],['Ask Sebastian to record everything before they continue.','recordSearch',{sebastian:2}]]},
    hiddenDoor:{chapter:'Episode XIV · What the Gaunts Buried',loc:'Gaunt Mausoleum · The Hidden Chamber',text:`The door beneath the basin opened slowly.

Not with the violent movement of an ancient mechanism, but with the quiet precision of a lock that had been waiting for the correct hand.

Cold air rose from below.

Samira looked at Sebastian.

He was already watching her.

Ominis stood with his wand raised, listening.

“No spell,” he said.

“What?”

“The door opened because it recognised the witness.”

Samira looked down.

The seventh point was glowing beneath her feet.

She had not cast anything.

She had simply remained alive and separate from the circuit.

The principle her father had written about was no longer theory.

It was responding to her.

They descended into the hidden chamber.

There was no ritual circle here.

Only shelves.

Boxes.

Records.

And at the centre, a stone table holding three objects.

A crystal.

A broken wand.

And a letter sealed with wax.

Samira recognised the handwriting immediately.

Her father's.

She did not open it.

Not yet.

For a moment, she simply stood there with her hand hovering above the seal.

The journey from the library to this place suddenly felt impossibly long.

The late-night research.

Sebastian's diagram.

Ominis's confession about his family.

The journey through Hogsmeade.

The warning.

The stairs.

All of it had led to this small room beneath the Gaunt mausoleum.

And somehow, that made opening the letter feel more frightening than facing the wards had.

Sebastian stepped beside her.

“You don't have to do it now.”

Ominis nodded.

“We can leave it until we are ready.”

Samira looked at the sealed letter.

Then at the crystal.

Then at the broken wand.

“No,” she said quietly.

“We came here for the truth.”

She touched the seal.

The wax warmed beneath her fingers.

The letter opened by itself.`,choices:[['Read the letter now, together.','fatherLetter',{anne:2}],['Study the crystal before opening the letter.','stoneBox',{anne:1}],['Ask Ominis to examine the broken wand.','serpent',{ominis:2}]]},
    fatherLetter:{chapter:'Episode XV · What He Left Behind',loc:'Gaunt Mausoleum · The Hidden Chamber',text:`Samira unfolded the letter carefully.

The first line was addressed to her.

Not to a researcher.

Not to a colleague.

To his daughter.

She had to stop reading for a moment.

Sebastian did not speak.

Ominis did not move.

The room gave her the silence she needed.

When she finally continued, the letter explained why the seventh point had been left incomplete.

Her father had discovered the Gaunt records years earlier. He had learned that the family had attempted to separate curses by moving them into magical vessels. The first attempt had failed because the vessel had not been empty.

He had spent years trying to build a different method.

Not a transfer.

A separation.

Not a sacrifice.

A witness.

He had almost succeeded.

Then he realised the final component could not be another spell.

It had to be a person capable of witnessing the resonance without being consumed by it.

Someone whose magic naturally resisted the circuit.

Someone whose connection to the resonance was strong enough to see it, but not strong enough to be controlled by it.

Samira read the sentence twice.

Her father had not written her name.

He had not known for certain.

But the implication was impossible to ignore.

The letter ended with one final instruction.

If you have found this, do not attempt the separation until you understand why the seventh point responds to you.

Find the answer first.

Then, and only then, help Anne.

Samira lowered the letter.

For a long moment, she could not speak.

Sebastian finally said her name.

She looked at him.

“I think my father knew this might happen.”

Ominis answered quietly.

“Then we make sure his fear does not become your fate.”

Samira folded the letter.

The crystal on the table began to glow.

Not brightly.

Steadily.

As though the next piece of the story had just awakened.`,choices:[['Take the letter and crystal back to Hogwarts.','returnMausoleum',{anne:2}],['Ask what it means that the seventh point responds to Samira.','anchorSamira',{anne:1}],['Stay here a little longer and study the chamber.','recordSearch',{anne:1}]]},
    returnMausoleum:{chapter:'Episode XV · What Comes Next',loc:'Road Back to Hogsmeade · Dusk',text:`They did not leave immediately.

For several minutes after closing the hidden chamber, they simply stood in the corridor above it.

No one seemed willing to be the first to speak.

Eventually Sebastian broke the silence.

“We should go before we have another mysterious door deciding to open.”

Ominis gave a quiet laugh.

Samira smiled.

It was a small thing.

But after everything they had seen, the sound mattered.

They climbed the stairs slowly.

The cold air of the mausoleum felt almost welcoming when they reached the entrance.

Outside, the sky had begun to darken.

Snow fell through the last light of evening.

Samira carried her father's letter close to her.

Sebastian carried the crystal.

Ominis carried the map.

Three objects.

Three pieces of a story that had been waiting for them beneath the Gaunt estate.

They walked back towards Hogsmeade without hurrying.

There was no reason to.

Anne was not going to be saved tonight.

That truth would have frightened Samira a few days ago.

Now it felt like wisdom.

They needed time.

They needed safeguards.

They needed to understand exactly why the seventh point responded to her.

Most of all, they needed Anne to have a choice in what happened next.

Sebastian walked beside her.

“You all right?”

Samira looked at him.

“No.”

He nodded.

“Good answer.”

She laughed softly.

A little farther back, Ominis listened to the snow beneath their steps.

The three of them continued through the dusk.

For once, they were not chasing an answer.

They were carrying one home.

And that difference gave Samira room to breathe.`,choices:[['Walk beside Sebastian and talk about the letter.','eveningSeb',{sebastian:2}],['Walk beside Ominis and ask what he heard in the chamber.','eveningOm',{ominis:2}],['Stay between them and talk through everything together.','eveningAll',{sebastian:1,ominis:1,anne:1}]]},
    eveningAll:{chapter:'Episode XV · What Comes Next',loc:'Hogsmeade · A Quiet Evening',text:`They found a quiet table away from the busiest part of the village.

No one opened the journal.

No one drew a wand.

For the first time since the morning, there was nothing they needed to solve immediately.

Samira placed her father's letter on the table.

Sebastian sat opposite her.

Ominis took the chair beside them.

They read the letter again.

Slowly.

Carefully.

Every line raised another question, but they resisted the urge to answer them all at once.

That was becoming the difference between them and the people who had come before.

They were willing to stop.

They were willing to leave a question unanswered until they could answer it safely.

Sebastian finally leaned back.

“I think your father knew that desperation would be the dangerous part.”

Samira looked at him.

“What do you mean?”

“If Anne is suffering, every person involved will eventually want the fastest answer.”

Ominis nodded.

“And the fastest answer is rarely the safest one.”

Samira looked down at her hands.

She thought about Anne.

About the curse.

About the possibility that, for the first time, there might actually be a method capable of separating the two.

Hope was there.

She could feel it.

But it no longer demanded that she run towards it.

It could wait.

That was new.

Outside, the snow thickened against the window.

Sebastian reached for the letter and folded it carefully.

“Tomorrow we reconstruct the circuit.”

Ominis added, “Without Anne.”

Samira nodded.

“Then we test it.”

“And only when we understand the result,” Sebastian said, “do we speak to her about using it.”

Samira looked at both of them.

“Together?”

“Together,” Ominis said.

Sebastian smiled.

For a while, they simply sat there.

The village carried on outside.

Someone laughed in the street.

A door opened and closed.

Snow touched the glass.

And Samira realised that this quiet moment might be just as important as everything they had discovered beneath the mausoleum.

The story did not need to rush towards its ending.

Anne needed time.

They needed time.

And tomorrow would still be there when they woke.`,choices:[['Return to Hogwarts together and begin tomorrow.','newDawn',{anne:1,sebastian:1,ominis:1}],['Stay a little longer and let the evening remain quiet.','newDawn',{sebastian:1,ominis:1}],['Ask Sebastian and Ominis what they want to do before they leave.','newDawn',{sebastian:1,ominis:1}]]}
  };

  function apply(){
    const s=read(); if(!s||!scenes[s.node]||active)return;
    const sc=scenes[s.node], story=$('#story'), choices=$('#choices');
    if(!story||!choices)return;
    active=true;
    $('#chapterLabel').textContent=sc.chapter;
    $('#location').textContent=sc.loc;
    $('#progress').textContent=`Scene ${(s.history?.length||0)+1} · ${((sc.chapter.match(/Episode\s+([IVXLCDM]+)/)||[])[1])||''}`;
    story.innerHTML=sc.text.trim().split(/\n\s*\n/).map(p=>`<p>${esc(p).replace(/\n/g,'<br>')}</p>`).join('');
    choices.innerHTML='';
    sc.choices.forEach(([label,target,delta],i)=>{
      const b=document.createElement('button');b.type='button';b.className='choice';
      b.innerHTML=`<span class="choice-num">${i+1}</span><span>${esc(label)}</span>`;
      b.onclick=()=>{const now=read();if(!now)return;now.history=Array.isArray(now.history)?now.history:[];now.history.push({from:now.node,label,to:target,at:Date.now()});Object.entries(delta||{}).forEach(([k,v])=>now[k]=(now[k]||0)+v);now.node=target;save(now);location.reload()};
      choices.appendChild(b);
    });
    $('#relationshipState').textContent=`Sebastian · ${s.sebastian||0} | Ominis · ${s.ominis||0} | Anne · ${s.anne||0}`;
    active=false;
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function watch(){apply();const story=$('#story');if(!story)return;new MutationObserver(()=>setTimeout(apply,0)).observe(story,{childList:true,subtree:true});}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',watch);else setTimeout(watch,0);
})();
