(() => {
  'use strict';
  const KEY='glimmerfics-hogwarts-v12';
  const $=s=>document.querySelector(s);
  const esc=s=>{const d=document.createElement('div');d.textContent=d.textContent=s;return d.innerHTML};
  const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch(_){return null}};
  const save=s=>localStorage.setItem(KEY,JSON.stringify(s));

  const scenes={
    morning:{
      chapter:'Episode XII · The Morning After',loc:'Ravenclaw Tower · Samira’s Room',
      text:`The morning came too early.

For a long while, Samira remained beneath the blankets without opening her eyes. She listened to Hogwarts waking around her.

A distant door closed somewhere along the tower. Footsteps crossed the corridor. Someone laughed below, then immediately lowered their voice as if remembering that the rest of Ravenclaw Tower was still asleep. Wind pressed gently against the tall windows, and the old stone answered with a low, familiar creak.

Nothing was wrong.

That was the strangest part.

The castle sounded exactly as it always did.

And yet Samira could still feel last night's library in the space behind her ribs.

Her father's pages.

The resonance pattern.

Sebastian's diagram.

The seven points.

The promise they had made before leaving the table.

And the Gaunt mausoleum waiting somewhere beyond Hogwarts.

She opened her eyes.

Grey winter light had reached the foot of her bed. It was not quite dawn anymore. The pale sky had begun to brighten, turning the frost on the window into a sheet of silver.

Samira sat up slowly.

For several seconds, she simply looked at her hands.

Last night, they had felt steady.

Now they did not.

Not because she was frightened of the mausoleum itself. She had faced darker things at Hogwarts. She had walked into places sensible students avoided. She had learned that fear was not always a warning to stop.

Sometimes it was a warning to pay attention.

She dressed without rushing.

Her wand went into its holster. Then came her gloves, her coat, and the small collection of notes she had copied from her father's work. She checked them twice even though she already knew every page by heart.

Seven points.

A missing connection.

A family that had buried its own history.

And Anne.

Always Anne.

That thought finally made Samira stand.

She crossed to the window.

Far below, the grounds were still covered in a thin layer of winter frost. Students were beginning to move towards the castle doors. Beyond them, the road to Hogsmeade disappeared between bare trees.

Today was supposed to be a Hogsmeade weekend.

A normal Saturday.

Butterbeer. Shops. Students pretending not to be students for a few hours.

Instead, three people were planning to leave the village and walk towards a Gaunt family mausoleum because somewhere beneath it might be the missing piece of research that could help Anne.

Samira rested her forehead briefly against the cold glass.

She thought of Sebastian.

Not the dangerous parts of him. Not the stubbornness or the reckless confidence. She remembered the quiet moment at the library when he had finally stopped arguing with her and simply listened.

Then she thought of Ominis.

His voice had been different when he spoke about his family. Less guarded. Tired, perhaps, though he would never have called it that.

You choose differently every day.

She had not forgotten.

A soft knock came from the corridor.

Samira turned.

The knock came again.

Not impatient.

Just deliberate.

She opened the door.

No one was there.

Only a folded scrap of parchment lay on the floor.

She picked it up.

Three words were written across it in Sebastian's unmistakable handwriting:

Breakfast. Don't vanish.

Despite everything, Samira smiled.

Then she heard footsteps approaching from the stairwell.

This time she knew who they belonged to.

Ominis stopped outside the doorway.

“I was told Sebastian had already found you.”

“He left a note.”

“I see.”

There was the faintest hint of amusement in his voice.

Samira folded the parchment.

“Are you ready?”

Ominis was quiet for a moment.

“No.”

She waited.

Then he added, “But I think there is a difference between being ready and deciding to go anyway.”

Samira smiled.

“Yes.”

She closed her door behind her.

They began down the tower stairs together.

And for the first time that morning, Samira allowed herself to wonder what the day might become before she tried to control it.`,
      choices:[['Go down with Ominis and talk before breakfast.','towerWalk',{ominis:1}],['Find Sebastian first and make him explain the “don’t vanish” note.','sebMorning',{sebastian:1}],['Take a few quiet minutes alone in the Ravenclaw common room.','commonRoom',{anne:1}]]
    },
    towerWalk:{
      chapter:'Episode XII · The Morning After',loc:'Ravenclaw Tower · Staircase',
      text:`They did not hurry.

That mattered to Samira more than she expected.

The staircase curled downward through the tower, each landing opening briefly onto another part of Ravenclaw's morning. A portrait was already complaining about the cold. Somewhere below, a group of first-years were whispering urgently about whether the Hogsmeade trip had been postponed because of the weather.

Ominis walked beside her.

For several flights, neither spoke.

Samira found herself noticing small things she might normally have ignored: the warmth of the stone beneath her gloves when her hand brushed the railing, the way the morning light changed as they descended, the faint smell of toast drifting upwards from the Great Hall.

It was ordinary.

Almost painfully ordinary.

“You're thinking too loudly,” Ominis said.

Samira looked at him.

“I didn't say anything.”

“You didn't need to.”

She smiled.

“About the mausoleum?”

“About everything.”

They reached a landing and stopped while two younger students hurried past them.

Only when the corridor was empty again did Ominis continue.

“My family home was never frightening because of the building.”

Samira waited.

“It was frightening because everyone inside it behaved as though cruelty was ordinary.”

His fingers tightened slightly around his wand.

“I remember being told that certain questions were disrespectful. That certain rooms were not for me. That some things were better understood through obedience than through knowledge.”

“And you hated that.”

“I hated that I believed them for a while.”

Samira looked at him.

“You were young.”

“So were you, when you first learned that adults can be wrong.”

That silenced her.

They continued down.

“I don't want the mausoleum to decide who I am,” Ominis said.

“It won't.”

“You cannot know that.”

“No.”

Samira rested her hand on the railing.

“But I know you get to decide what you do once you're inside.”

Ominis smiled faintly.

“That is considerably more useful.”

They reached the bottom of the tower.

The doors to the Great Hall stood open ahead.

Warmth spilled into the corridor.

So did voices.

And, somewhere inside, Sebastian's laughter.

Ominis paused beside Samira.

“Whatever happens today,” he said, “don't let the urgency about Anne make every decision for you.”

Samira understood what he meant.

Hope could become its own kind of danger.

She nodded.

Then they entered the Great Hall.`,
      choices:[['Sit with Ominis and talk over breakfast before meeting Sebastian.','breakfast',{ominis:1}],['Go straight to Sebastian.','sebMorning',{sebastian:1}],['Ask Ominis to stay beside her while they face the day together.','breakfast',{anne:1,ominis:1}]]
    },
    commonRoom:{
      chapter:'Episode XII · The Morning After',loc:'Ravenclaw Tower · Common Room',
      text:`Samira did not go downstairs immediately.

She sat near the window in the Ravenclaw common room and let the morning exist without her for a few minutes.

The blue-and-bronze room was quieter than usual. Sunlight moved slowly over the shelves. A few students were reading. Someone had left an unfinished chess game on a table, and one piece had been knocked over as though the match had ended abruptly.

Samira watched the pieces.

That was how the day felt.

A board already arranged.

Several possible moves.

No certainty about which one would matter most.

She took out her father's notes.

Not to solve them.

Just to look.

The handwriting was familiar enough to hurt.

There were arrows in the margins. Corrections. Places where he had crossed out an idea and written another beneath it. It reminded Samira that he had not known the answer either.

He had simply kept going.

A voice came from behind her.

“Are you planning to spend the entire morning interrogating a piece of parchment?”

Samira turned.

Amit stood there with an expression of exaggerated concern.

Samantha Dale was beside him, carrying two cups of tea.

“You both appear suspiciously awake,” Samira said.

“Some of us are responsible,” Amit replied.

Samantha handed Samira a cup.

“Or some of us were dragged out of bed.”

Samira laughed softly.

For a little while, they talked about nothing important.

Classes.

The weather.

Quidditch gossip.

A professor who had apparently assigned far too much reading for a Saturday.

Then Amit looked at the notes in front of Samira.

“You don't have to tell us,” he said.

Samira looked up.

“But if you do need someone to notice when you're about to do something spectacularly dangerous, Ravenclaw has a long and proud tradition of that.”

Samantha nodded.

“You don't have to make every problem yours alone.”

The words landed differently coming from them.

There was no romance in them.

No secret tension.

Just friendship.

Samira closed the notes.

“I'm going to Hogsmeade.”

Amit smiled.

“Good.”

Samantha raised an eyebrow.

“Are you actually going to enjoy yourself?”

Samira considered it.

“I'll try.”

“That,” Amit said, “is a much healthier plan.”

The three of them remained by the window a little longer.

And when Samira finally stood, she felt less like someone carrying a secret through Hogwarts and more like a student who happened to have a difficult day ahead.`,
      choices:[['Stay a little longer with Amit and Samantha.','breakfast',{anne:1}],['Tell them she has to meet Sebastian and Ominis, but thank them for being there.','breakfast',{ominis:1}],['Head to the Great Hall and let the day begin.','breakfast',{sebastian:1}]]
    },
    sebMorning:{
      chapter:'Episode XII · The Morning After',loc:'Hogwarts · Entrance Hall',
      text:`Sebastian was waiting beneath the great staircase.

He looked as though he had been there for some time.

Samira stopped several paces away.

“You wrote ‘don't vanish.’”

“I did.”

“Why?”

He looked genuinely surprised by the question.

“Because you have a habit of disappearing into libraries when you are worried.”

“That is an unfairly accurate observation.”

“I've had practice.”

He smiled, but the smile did not quite reach his eyes.

For a moment, they simply stood there while students moved around them.

Then Sebastian lowered his voice.

“I meant what I said last night.”

“About the research?”

“About you not carrying this alone.”

Samira looked towards the doors.

Outside, the grounds were bright with cold winter light.

“I'm still worried,” she admitted.

“I know.”

“And you're still going to tell me to be careful.”

“Yes.”

“And you're still going to do something reckless five minutes after saying it.”

“Almost certainly.”

She laughed.

The tension eased.

Sebastian studied her for another moment.

“Did you sleep?”

“A little.”

“Good.”

“And you?”

He hesitated.

Samira narrowed her eyes.

“Sebastian.”

“Enough.”

“That isn't an answer.”

“It is the only answer you're getting before breakfast.”

She shook her head.

“Three hours?”

He sighed.

“Perhaps.”

“Sebastian.”

“I know.”

He looked down at his hands.

Then, more quietly:

“I couldn't stop thinking about the diagram.”

“Because of the seventh point?”

“Because of what it might mean.”

He reached into his coat and unfolded a small copy of the diagram.

He did not hand it to her immediately.

Instead, he held it between them.

“I changed one thing.”

Samira leaned closer.

The seventh point was still open.

But around it he had drawn a thin circle, deliberately incomplete.

“A boundary,” he said.

“Not an anchor.”

“Exactly.”

Samira looked at him.

“You've been working since last night.”

“Yes.”

“You promised me.”

“I promised to sleep. I didn't promise not to think.”

She gave him a look.

He smiled.

Then the smile faded.

“Samira, whatever we find in that mausoleum, we don't force it to give us an answer.”

She nodded.

“Agreed.”

“Even if it looks like the answer to Anne's curse?”

Samira took a breath.

“Especially then.”

Something in Sebastian's expression eased.

“Good.”

Behind them, footsteps approached.

Ominis's voice carried across the hall.

“I sincerely hope neither of you has decided to solve the entire problem before breakfast.”

Sebastian folded the diagram.

“No promises.”

Samira smiled.

The three of them were finally together.

The day could begin.`,
      choices:[['Ask Sebastian to show the revised diagram over breakfast.','breakfast',{sebastian:1}],['Tell him you are glad he changed the seventh point into a boundary.','breakfast',{anne:1,sebastian:1}],['Join Ominis immediately and leave the planning for later.','hogsmeade',{ominis:1}]]
    }
  };

  function render(scene){
    const story=$('#story'), choices=$('#choices'); if(!story||!choices)return;
    $('#chapterLabel').textContent=scene.chapter;
    $('#location').textContent=scene.loc;
    const s=read()||{history:[],sebastian:0,ominis:0,anne:0,node:'morning'};
    $('#progress').textContent=`Scene ${(s.history||[]).length+1} · ${scene.chapter.split('·')[0].trim()}`;
    story.innerHTML=scene.text.trim().split(/\n\s*\n/).map(p=>`<p>${esc(p).replace(/\n/g,'<br>')}</p>`).join('');
    choices.innerHTML='';
    scene.choices.forEach(([label,target,delta],i)=>{
      const b=document.createElement('button');b.type='button';b.className='choice';
      b.innerHTML=`<span class="choice-num">${i+1}</span><span>${esc(label)}</span>`;
      b.dataset.slowTarget=target;
      choices.appendChild(b);
    });
    $('#relationshipState').textContent=`Sebastian · ${s.sebastian||0} | Ominis · ${s.ominis||0} | Anne · ${s.anne||0}`;
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function current(){const s=read();return s&&scenes[s.node]?s:null}
  function apply(){const s=current();if(s)render(scenes[s.node])}
  function choose(target,delta,label){
    const s=read(); if(!s)return;
    const from=s.node; s.history=Array.isArray(s.history)?s.history:[];
    s.history.push({from,label,to:target,at:Date.now()});
    s.sebastian=(s.sebastian||0)+(delta.sebastian||0);s.ominis=(s.ominis||0)+(delta.ominis||0);s.anne=(s.anne||0)+(delta.anne||0);
    s.node=target;save(s);apply();
  }

  document.addEventListener('click',e=>{
    const b=e.target.closest('#choices button[data-slow-target]'); if(!b)return;
    const s=current(); if(!s)return;
    e.preventDefault();e.stopImmediatePropagation();
    const scene=scenes[s.node];const i=[...$('#choices').children].indexOf(b);const c=scene.choices[i];
    choose(c[1],c[2],c[0]);
  },true);

  const start=()=>{apply();const story=$('#story');if(story)new MutationObserver(()=>{if(!active){active=true;setTimeout(()=>{apply();active=false},0)}}).observe(story,{childList:true,subtree:true})};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else setTimeout(start,0);
})();
