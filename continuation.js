(() => {
  'use strict';

  const KEY = 'glimmerfics-hogwarts-v12';
  const $ = (s) => document.querySelector(s);
  const esc = (s) => {
    const d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  };
  const read = () => {
    try { return JSON.parse(localStorage.getItem(KEY) || 'null'); }
    catch (_) { return null; }
  };
  const save = (s) => localStorage.setItem(KEY, JSON.stringify(s));

  // This is the single, stable continuation engine. It deliberately takes over
  // after the PDF and also repairs older saved states whose next node did not exist.
  const scenes = {
    lowerChambers: {
      chapter: 'Episode XIV · What the Gaunts Buried',
      loc: 'Gaunt Mausoleum · Lower Chambers',
      text: `The corridor narrowed until the three of them had to walk almost single file.

The stone beneath their shoes had changed. It was no longer the clean, pale limestone of the upper mausoleum. Here it was darker, damp at the seams, and threaded with thin veins that caught the wandlight without actually reflecting it.

Samira noticed that none of them spoke for several seconds.

It was not the kind of silence that meant there was nothing to say.

It was the kind that meant everyone was listening.

Ahead, the passage opened into a circular chamber.

Seven shallow alcoves had been cut into the walls. Six contained broken stone pillars. The seventh was different. Its pillar had been smashed near the middle, as though something had struck it from inside.

Samira stopped.

Sebastian nearly walked into her.

“Could you warn me before you become a statue?” he whispered.

She glanced over her shoulder.

“You're the one who keeps walking into things.”

“I was looking at the architecture.”

“You were looking at Ominis.”

“I was absolutely not.”

Ominis, a few steps ahead, gave a quiet laugh.

“I can hear both of you, you know.”

For one ridiculous second, the three of them simply stood there trying not to laugh too loudly in a family mausoleum.

It broke the tension.

Only a little.

Samira approached the broken pillar.

There was a symbol carved into the surviving stone: a circle around six small marks, with a seventh line deliberately left open.

Sebastian crouched beside it.

“This is the same structure as my diagram.”

“Same structure,” Ominis said carefully. “Not necessarily the same purpose.”

Sebastian looked up.

“You've become very fond of that distinction.”

“Because you keep ignoring it.”

Samira almost smiled.

They were still teenagers. It was absurdly easy to forget that in places like this. Hogwarts had a way of making them feel older than they were. Ancient magic. Family curses. Research that could change someone's life.

And yet Sebastian still argued with Ominis over diagrams like they were fighting about homework.

Ominis still made dry comments when he was nervous.

Samira still wanted to laugh at inappropriate moments simply because the alternative was admitting how frightened she was.

The broken pillar gave a faint click.

All three went silent.

Something beneath the floor had moved.

Samira slowly raised her wand.

“Okay,” Sebastian whispered. “That was not me.”

“I didn't accuse you.”

“You were thinking it.”

“I was thinking it,” Ominis confirmed.

A second click followed.

Then, from somewhere beyond the wall, came the sound of water.`,
      choices: [
        ['Let Ominis listen before anyone touches the pillar.', 'basinOm', { ominis: 1 }],
        ['Have Sebastian inspect the broken seventh pillar carefully.', 'basinSeb', { sebastian: 1 }],
        ['Step closer together and enter the chamber as a group.', 'basin', { anne: 1 }]
      ]
    },

    basinOm: {
      chapter: 'Episode XIV · What the Gaunts Buried',
      loc: 'Gaunt Mausoleum · The Listening Chamber',
      text: `Ominis lifted his wand.

“Everyone stop.”

Sebastian opened his mouth.

Ominis raised one finger.

“Please.”

That was enough.

Samira lowered her wand until the light rested against the floor.

Ominis tilted his head.

At first there was nothing.

Then he whispered, “Water.”

“We heard that,” Sebastian said.

“No. Not the water in the wall.”

Ominis turned slightly.

“There's a basin beneath us.”

Samira frowned.

“How can you tell?”

“The sound is wrong for a pipe. It is echoing upwards.”

Sebastian stared at him.

“That is incredibly inconveniently impressive.”

Ominis smiled despite himself.

“I'll treasure the compliment.”

They moved slowly towards the centre of the room.

The floor was covered in dust except for one narrow crescent where the dust had been disturbed recently.

Samira crouched.

“Someone has been here.”

Sebastian crouched beside her.

“Recently?”

“Very.”

Ominis's expression changed.

“If the journal was moved…”

“Then someone may already know we are looking for it,” Samira finished.

For a moment nobody joked.

Then Sebastian quietly said, “Right. New rule.”

Samira looked at him.

“No heroic nonsense.”

She raised an eyebrow.

“You're saying that?”

“Yes.”

“To me?”

“To all of us.”

Ominis folded his arms.

“I'd like that rule written down.”

Sebastian sighed.

“Fine. I know how this sounds.”

“Good,” Samira said.

“I am capable of learning.”

“Debatable.”

He gave her an offended look.

“You wound me.”

“You'll survive.”

The moment passed, but the warmth stayed.

Then Ominis's wand tip touched the stone.

A low note travelled through the chamber.

The floor answered.

A circular outline appeared beneath their feet.

In its centre was a shallow stone basin.

And inside it, untouched by dust, lay a folded strip of black parchment.`,
      choices: [
        ['Ask Ominis what he can hear around the basin before approaching.', 'basin', { ominis: 1 }],
        ['Let Sebastian examine the parchment without touching it.', 'basinSeb', { sebastian: 1 }],
        ['Tell them to wait and discuss what they have found first.', 'basinTalk', { anne: 1 }]
      ]
    },

    basinSeb: {
      chapter: 'Episode XIV · What the Gaunts Buried',
      loc: 'Gaunt Mausoleum · Seventh Pillar',
      text: `Sebastian knelt beside the broken pillar.

For once, he did not touch it immediately.

Samira noticed.

“You're being careful.”

“I can be careful.”

“I know.”

He glanced up at her.

“You sounded surprised.”

“I was.”

Ominis made a quiet sound that might have been a laugh.

Sebastian ignored him.

He traced the air above the broken stone with his wand rather than making contact.

“There's residue.”

“Cursed?” Samira asked.

“Not exactly.”

His brow furrowed.

“It's more like… a memory of magic.”

Ominis stepped closer.

“Then it may respond to resonance.”

Samira looked between them.

Her father's notes.

The diagram.

The seven points.

Anne.

Everything seemed to be pulling into the same shape.

Sebastian sat back on his heels.

“I don't like it.”

Samira blinked.

“You don't like a mysterious magical object?”

“I know. Shocking.”

“No, really.”

He looked at her.

“If this reacts to resonance, it might react to a person. And if the seventh point was meant to be a boundary rather than an anchor…”

He stopped.

Ominis finished the thought.

“Then someone may have deliberately prevented a living person from becoming part of the circuit.”

The room seemed colder.

Samira looked at the broken seventh pillar.

“Then we don't repair it.”

Sebastian nodded.

“Agreed.”

He stood.

“And we definitely don't experiment on Anne from here.”

Samira exhaled slowly.

That was the answer she had needed to hear.

Not because it solved anything.

Because it meant they were still thinking about Anne as a person, not a problem to be fixed.`,
      choices: [
        ['Ask Sebastian what he thinks the broken pillar was protecting.', 'basinTalk', { sebastian: 1 }],
        ['Ask Ominis to search the chamber for another entrance.', 'basinOm', { ominis: 1 }],
        ['Tell them Anne comes first, even if the answer takes longer.', 'basinTalk', { anne: 2 }]
      ]
    },

    basin: {
      chapter: 'Episode XIV · What the Gaunts Buried',
      loc: 'Gaunt Mausoleum · The Black Basin',
      text: `They approached together.

The basin was smaller than Samira expected, hardly wider than a dinner plate. Its surface looked dry until her wandlight touched it.

Then something moved beneath the black stone.

Not water.

Ink.

A thin line travelled around the rim and stopped at seven small cuts in the stone.

Sebastian leaned closer.

“That's new.”

“Very reassuring,” Ominis said.

Samira glanced at both of them.

“Does anyone have an idea that doesn't involve touching it?”

Sebastian raised his hand slightly.

“No.”

“Honest.”

“I thought you'd appreciate that.”

They laughed quietly.

It was a strange thing to laugh in a mausoleum, but the sound made the chamber feel less like a tomb.

Samira sat on the edge of the stone floor instead of immediately solving the problem.

Sebastian looked at her.

“What?”

“Nothing.”

“You're staring.”

“I was wondering whether you were going to sit down.”

“I am perfectly capable of sitting.”

“Excellent.”

He sat beside her.

Ominis remained standing for another moment, then sighed and joined them.

For several minutes, they did nothing.

They talked about the most ordinary things they could think of.

Sebastian complained about the food in the Great Hall.

Ominis argued that Sebastian had no right to complain when he had eaten three pieces of toast.

Samira admitted she had once fallen asleep during a particularly dull History of Magic lecture.

Sebastian looked scandalised.

“You?”

“Apparently I am not perfect.”

“I'll need a moment.”

Ominis smiled.

“I knew there was hope for the rest of us.”

The conversation wandered from classes to professors, from professors to Quidditch, from Quidditch to the ridiculous number of essays waiting for them after the weekend.

For a few minutes, they were simply three students sitting on cold stone.

Then Samira realised something.

She was no longer shaking.

The basin waited patiently in front of them.

The answer could wait another minute.

Anne could not be helped by panic.

So they took one more breath.

And then they stood.`,
      choices: [
        ['Let Ominis examine the basin by sound and magic.', 'basinOm', { ominis: 1 }],
        ['Ask Sebastian to compare it with his diagram.', 'basinSeb', { sebastian: 1 }],
        ['Search the chamber together before touching anything.', 'basinSearch', { anne: 1 }]
      ]
    },

    basinTalk: {
      chapter: 'Episode XIV · What the Gaunts Buried',
      loc: 'Gaunt Mausoleum · Between the Pillars',
      text: `They sat with their backs against the old stone wall.

The silence that followed was comfortable enough to surprise Samira.

Sebastian broke it first.

“Do you ever wonder what we'd be doing if Anne wasn't ill?”

Samira looked at him.

“Right now?”

“Right now.”

She thought about it.

“I'd probably be in Hogsmeade.”

“With what?”

“Chocolate.”

Ominis nodded solemnly.

“A noble pursuit.”

“And you'd be doing what?” Samira asked.

“I'd be avoiding Sebastian.”

Sebastian looked offended.

“You wound me again.”

“You recover quickly.”

Samira laughed.

Sebastian shook his head.

“If Anne were fine, I'd probably be complaining about an assignment.”

“You complain about assignments anyway.”

“Exactly. Some traditions are important.”

Ominis smiled.

“And you?” Samira asked.

Ominis was quiet.

“I think I'd like one ordinary weekend.”

Samira understood immediately.

Not because the words were dramatic.

Because they weren't.

They sat there a little longer.

Then Sebastian nudged her shoulder lightly with his.

“After this,” he said, “we're getting that chocolate.”

Samira smiled.

“After this.”

The promise was small.

That was what made it feel possible.`,
      choices: [
        ['Stand and return to the basin together.', 'basinSearch', { anne: 1 }],
        ['Ask Ominis what an ordinary weekend would look like for him.', 'ominisTalk', { ominis: 1 }],
        ['Ask Sebastian what he would actually do with a free day.', 'sebTalk', { sebastian: 1 }]
      ]
    },

    basinSearch: {
      chapter: 'Episode XIV · What the Gaunts Buried',
      loc: 'Gaunt Mausoleum · Hidden Stair',
      text: `They searched without rushing.

Samira checked the walls.
Sebastian examined the floor.
Ominis listened.

Every few minutes one of them called the others over to inspect something that turned out to be nothing.

A crack.
A loose stone.
A faded carving.
A very determined spider.

“That,” Sebastian said, watching the spider disappear into a gap, “is the most successful resident of this mausoleum.”

Samira smiled.

Ominis tilted his head.

“Wait.”

They stopped.

Ominis pointed his wand towards the far wall.

“There's a hollow space behind it.”

Sebastian walked over.

“Door?”

“No.”

He listened again.

“Stairs.”

Samira brushed dust away from a narrow seam in the stone.

A hidden door appeared.

It did not open.

Sebastian looked at the three of them.

“Before anyone says it: I am not blasting it.”

Samira smiled.

“I wasn't going to.”

“You were thinking it.”

“I was considering it.”

Ominis sighed.

“Progress.”

There was a small depression in the door shaped like an incomplete circle.

Samira held her wand near it.

The symbol answered with a faint warmth.

Her father's research had not led them here by accident.

But the door still had to be opened.

And whatever waited below had been hidden for a reason.`,
      choices: [
        ['Use the incomplete circle from Sebastian’s diagram.', 'hiddenDoor', { sebastian: 1 }],
        ['Ask Ominis whether he recognises the Gaunt ward.', 'hiddenDoorOm', { ominis: 1 }],
        ['Study the symbol together before opening anything.', 'hiddenDoorTalk', { anne: 1 }]
      ]
    },

    hiddenDoor: {
      chapter: 'Episode XV · The Room Beneath the Room',
      loc: 'Gaunt Mausoleum · Hidden Stair',
      text: `Sebastian unfolded his diagram on the floor.

For once, he did not try to solve the problem alone.

Samira knelt beside him.
Ominis crouched on his other side.

The three drawings almost matched.

Almost.

“Here,” Samira said.

She pointed to the incomplete seventh line.

Sebastian followed it with his finger.

“If we close it, we make the circuit.”

“And if we don't?” Ominis asked.

“It becomes a boundary.”

Samira looked at the door.

“Then we leave it open.”

Sebastian smiled.

“Look at us. Responsible.”

“Don't ruin it,” Ominis said.

Samira placed her wand against the first six marks, one at a time, leaving the seventh untouched.

The door shuddered.

Stone grated against stone.

Cold air rose from below.

Not the cold of winter.

Something older.

A staircase descended into darkness.

Sebastian looked at Samira.

“Together?”

She nodded.

“Together.”

They started down.

This time nobody walked ahead.`,
      choices: [
        ['Descend slowly, staying together.', 'catacomb', { anne: 1 }],
        ['Ask Ominis to lead while everyone watches for wards.', 'catacombOm', { ominis: 1 }],
        ['Ask Sebastian to keep the diagram open and compare every symbol.', 'catacombSeb', { sebastian: 1 }]
      ]
    },

    hiddenDoorOm: {
      chapter: 'Episode XV · The Room Beneath the Room',
      loc: 'Gaunt Mausoleum · Hidden Door',
      text: `Ominis ran his fingers over the air just above the symbol.

His expression tightened.

“I know this ward.”

Samira waited.

“My family used variations of it for rooms they did not want children entering.”

Sebastian frowned.

“That sounds healthy.”

“It wasn't.”

Ominis traced the incomplete circle with his wand.

“The important part is the gap.”

Samira looked at him.

“Because it isn't a lock?”

“It's a choice.”

Sebastian's eyes met Samira's.

“Then let's make the right one.”

Together, they activated only the six complete marks.

The hidden door opened.

Ominis did not move for a moment.

Samira touched his sleeve.

“You don't have to be alone in this.”

He nodded.

“I know.”

They descended.`,
      choices: [
        ['Stay beside Ominis on the stairs.', 'catacombOm', { ominis: 1 }],
        ['Keep Sebastian between the two of them and watch the symbols.', 'catacombSeb', { sebastian: 1 }],
        ['Descend together and focus on what might help Anne.', 'catacomb', { anne: 1 }]
      ]
    },

    hiddenDoorTalk: {
      chapter: 'Episode XV · The Room Beneath the Room',
      loc: 'Gaunt Mausoleum · Hidden Door',
      text: `They did not open the door immediately.

Samira insisted on reading the symbol twice.
Sebastian checked his diagram three times.
Ominis listened until he could describe the space beyond it.

It took longer.

It also made them safer.

At one point Sebastian leaned back against the wall.

“If we survive today, I am never complaining about a library again.”

Samira looked at him.

“You complained about the library yesterday.”

“I am growing as a person.”

Ominis smiled.

“Very slowly.”

“Still counts.”

Samira laughed.

Then she placed her hand over the incomplete mark.

“Let's go.”

The door opened.`,
      choices: [
        ['Descend together.', 'catacomb', { anne: 1 }],
        ['Let Ominis lead the first few steps.', 'catacombOm', { ominis: 1 }],
        ['Let Sebastian keep the diagram and watch the wards.', 'catacombSeb', { sebastian: 1 }]
      ]
    },

    catacomb: {
      chapter: 'Episode XV · The Room Beneath the Room',
      loc: 'Gaunt Mausoleum · Catacombs',
      text: `The staircase seemed to go on forever.

Their footsteps became softer as the walls closed around them.

Nobody spoke for the first twenty steps.

Then Sebastian whispered, “I hate stairs.”

Samira nearly laughed.

“You've been climbing stairs at Hogwarts for years.”

“Those stairs move. These stairs judge.”

Ominis laughed under his breath.

“They are stone.”

“Exactly. Suspiciously silent stone.”

The sound of their laughter travelled down the stairwell and came back strangely distorted.

Samira smiled until she noticed the writing on the wall.

Seven names.

Six had been scratched through.

The seventh had never been completed.

She stopped.

“So the seventh anchor was never a place,” she whispered.

Ominis touched the wall.

“No.”

His voice was very quiet.

“It was a person.”

Sebastian looked at Samira.

Nobody said Anne's name.

They did not have to.

The staircase ended at a door.

Beyond it came a faint pulse of magic.

Not hostile.

Waiting.`,
      choices: [
        ['Open the door together.', 'sealedRoom', { anne: 1 }],
        ['Ask Ominis to listen before crossing the threshold.', 'sealedRoomOm', { ominis: 1 }],
        ['Ask Sebastian to inspect the door for a resonance trap.', 'sealedRoomSeb', { sebastian: 1 }]
      ]
    },

    catacombOm: {
      chapter: 'Episode XV · The Room Beneath the Room',
      loc: 'Gaunt Mausoleum · Catacombs',
      text: `Ominis went first.

He moved carefully, wand angled low, pausing whenever the stone changed beneath their feet.

Samira stayed close enough to hear him breathe.

Sebastian followed behind them.

“You know,” Sebastian whispered, “for someone who claims not to like adventures, you are remarkably good at this.”

Ominis smiled.

“I prefer surviving them.”

“That is a surprisingly sensible ambition.”

“Try it sometime.”

Samira covered a laugh with her hand.

Then Ominis stopped.

“There.”

His wand pointed towards a door.

He listened.

“There is magic on the other side.”

“Dangerous?” Samira asked.

“I don't know.”

That honesty made her trust him more, not less.

They approached together.

On the door was the unfinished seventh circle.`,
      choices: [
        ['Open it together.', 'sealedRoom', { anne: 1 }],
        ['Ask Sebastian to inspect the ward first.', 'sealedRoomSeb', { sebastian: 1 }],
        ['Stay beside Ominis and let him decide when to cross.', 'sealedRoomOm', { ominis: 1 }]
      ]
    },

    catacombSeb: {
      chapter: 'Episode XV · The Room Beneath the Room',
      loc: 'Gaunt Mausoleum · Catacombs',
      text: `Sebastian kept the diagram open as they descended.

Every few steps, he compared it with the symbols carved into the wall.

“Still matching?” Samira asked.

“Mostly.”

“Mostly?”

He made a face.

“I was hoping you wouldn't notice that word.”

Ominis smiled.

“She notices everything.”

“I know.”

Sebastian looked at Samira for a moment longer than necessary.

Then he turned back to the wall.

“There.”

A seventh mark had been carved into the stone, but someone had deliberately broken it.

Sebastian touched the air above it.

“This was never supposed to be completed.”

Samira nodded.

“Then we won't complete it.”

He folded the diagram.

“Good.”

They reached the final door.`,
      choices: [
        ['Open the final door together.', 'sealedRoom', { anne: 1 }],
        ['Let Ominis inspect the ward.', 'sealedRoomOm', { ominis: 1 }],
        ['Ask Sebastian to explain what the broken seventh mark means.', 'sealedRoomTalk', { sebastian: 1 }]
      ]
    },

    sealedRoom: {
      chapter: 'Episode XV · The Room Beneath the Room',
      loc: 'Gaunt Mausoleum · The Sealed Room',
      text: `The door opened without a sound.

Beyond it was a small circular room.

There were no bodies.
No treasure.
No weapon.

Only a desk.

A chair.

And a single journal lying open beneath a layer of grey dust.

Samira stepped inside.

The pages were filled with diagrams.

Her father's handwriting appeared in the margins.

She froze.

Sebastian came to stand beside her.

“Samira…”

“I know.”

Ominis remained at the threshold.

“Is it his?”

Samira nodded.

Her throat tightened.

This was not the answer yet.

It was a trail.

And perhaps that was more important.

She turned the first page.

At the top, one sentence had been written in her father's hand:

The seventh anchor must never be a cursed soul.

Samira closed her eyes.

Anne.

For the first time since entering the mausoleum, hope and fear arrived together.

Not because they had found a cure.

Because they had found a warning.`,
      choices: [
        ['Read the next page slowly, together.', 'journalRead', { anne: 2 }],
        ['Ask Ominis to search the room for anything hidden.', 'journalSearch', { ominis: 1 }],
        ['Ask Sebastian to compare the journal with his diagram.', 'journalSeb', { sebastian: 1 }]
      ]
    },

    sealedRoomOm: {
      chapter: 'Episode XV · The Room Beneath the Room',
      loc: 'Gaunt Mausoleum · The Sealed Room',
      text: `Ominis crossed the threshold first.

He listened.

Nothing moved.

“Safe,” he said at last. “For now.”

Samira entered.

Sebastian followed.

The room was almost disappointingly ordinary.

A desk.
A chair.
A journal.
A dead fireplace.

Then Samira saw the handwriting.

She knew it instantly.

Her father's.

Sebastian stopped beside her.

“Don't rush,” he said.

She nodded.

Ominis stood quietly near the door.

For once, nobody tried to fill the silence.

Samira turned the page.`,
      choices: [
        ['Read the journal together.', 'journalRead', { anne: 2 }],
        ['Ask Ominis to search the room.', 'journalSearch', { ominis: 1 }],
        ['Ask Sebastian to compare the diagrams.', 'journalSeb', { sebastian: 1 }]
      ]
    },

    sealedRoomSeb: {
      chapter: 'Episode XV · The Room Beneath the Room',
      loc: 'Gaunt Mausoleum · The Sealed Room',
      text: `Sebastian checked the ward twice.

Then he stepped aside.

“No trap.”

Samira opened the door.

The room beyond held a desk, a chair, and an old journal.

She recognised the handwriting before she could read a word.

Her father's.

Sebastian's expression softened.

“You don't have to do this quickly.”

“I know.”

“And you don't have to do it alone.”

“I know that too.”

Ominis gave a small smile.

“Remarkable. We are learning.”

Samira laughed quietly.

Then she opened the journal.`,
      choices: [
        ['Read the first entry.', 'journalRead', { anne: 2 }],
        ['Ask Ominis to check the room first.', 'journalSearch', { ominis: 1 }],
        ['Ask Sebastian what he sees in the diagrams.', 'journalSeb', { sebastian: 1 }]
      ]
    },

    sealedRoomTalk: {
      chapter: 'Episode XV · The Room Beneath the Room',
      loc: 'Gaunt Mausoleum · The Sealed Room',
      text: `“The seventh mark was never an anchor,” Sebastian said.

He sounded certain now.

“It was a safeguard.”

Samira stared at him.

“Against what?”

“Against someone completing the circuit with something that shouldn't be part of it.”

Ominis's face tightened.

“A cursed soul.”

The words settled over them.

Samira thought of Anne.

Then she thought of her father's warning.

They had not found a shortcut.

They had found proof that there had been a reason to fear one.

The three of them entered the room together.

On the desk waited an old journal.`,
      choices: [
        ['Read the journal together.', 'journalRead', { anne: 2 }],
        ['Search the room first.', 'journalSearch', { ominis: 1 }],
        ['Let Sebastian preserve the diagrams before touching the journal.', 'journalSeb', { sebastian: 1 }]
      ]
    },

    journalRead: {
      chapter: 'Episode XVI · What Your Father Knew',
      loc: 'Gaunt Mausoleum · Hidden Study',
      text: `They read slowly.

Not because the handwriting was difficult.

Because every page changed what the previous one meant.

Her father had come here years earlier.

He had studied the same resonance pattern.

He had discovered that the seventh point was not a source of power at all. It was a limit.

A warning built into the system.

Samira read until her eyes hurt.

Sebastian took over when her hands began to tremble.

Ominis listened while he read aloud.

Every so often they stopped to argue over a sentence.

Sometimes they were right.
Sometimes they were completely wrong.

At one point Sebastian insisted that a note meant one thing, only for Ominis to point out that he had read the line upside down.

Samira laughed so hard she had to put the journal down.

“Don't tell anyone,” Sebastian said.

“I absolutely will.”

“Samira.”

“You're never living this down.”

Even Ominis was laughing.

The moment lasted only a few seconds.

Then Samira turned the page.

The final note was shorter.

If Anne's curse is connected to this resonance, the answer will not be found by forcing the seventh point. It will be found by discovering what the seventh point was protecting.

Samira stared at the sentence.

The three of them understood at the same time.

The mausoleum had not given them a cure.

It had given them the next question.`,
      choices: [
        ['Stay and read until they understand every remaining note.', 'studyNight', { anne: 2 }],
        ['Take the journal back to Hogwarts before doing anything else.', 'returnHogwarts', { ominis: 1 }],
        ['Ask whether this changes what they should tell Anne.', 'anneQuestion', { anne: 1 }]
      ]
    },

    journalSearch: {
      chapter: 'Episode XVI · What Your Father Knew',
      loc: 'Gaunt Mausoleum · Hidden Study',
      text: `Ominis searched the room by touch and sound while Samira and Sebastian watched the journal.

He found a loose floorboard.

Then a hidden drawer.

Inside was a small bundle of letters tied with faded blue thread.

Samira recognised her father's handwriting again.

Sebastian sat on the floor.

“This day keeps getting worse at being subtle.”

Ominis smiled.

“Perhaps the family was not subtle either.”

They opened the first letter.

It mentioned resonance.

The second mentioned Anne.

The third was incomplete.

But one phrase appeared twice:

Do not let the seventh become a person.

Samira closed her eyes.

“Then we know what not to do.”

Sebastian nodded.

“And now we find what to do instead.”

It was not a dramatic declaration.

It was better.

It was a plan.`,
      choices: [
        ['Combine the letters with the journal before leaving.', 'studyNight', { anne: 2 }],
        ['Return to Hogwarts and show the evidence to Professor Sharp.', 'returnHogwarts', { ominis: 1 }],
        ['Keep the letters private until they understand them.', 'studyNight', { sebastian: 1 }]
      ]
    },

    journalSeb: {
      chapter: 'Episode XVI · What Your Father Knew',
      loc: 'Gaunt Mausoleum · Hidden Study',
      text: `Sebastian spread his diagram beside the journal.

For the next half hour, they simply talked.

Not every sentence was about curses.

They disagreed about the meaning of symbols.
They corrected one another.
They got distracted.

Sebastian complained that Ominis had an unfair advantage because he could hear wards.

Ominis replied that Sebastian had an unfair advantage because he apparently had no instinct for self-preservation.

Samira sat between them and tried to keep them focused.

She failed.

Eventually, she started laughing.

“You two are impossible.”

Sebastian smiled.

“And yet you brought us both.”

Ominis nodded.

“A questionable decision.”

“Still your decision,” Samira said.

That quieted them.

Then Sebastian looked at the diagram again.

“I think we've been asking the wrong question.”

Samira leaned closer.

“What question?”

“Not how do we complete the circuit?”

He tapped the incomplete seventh point.

“But why was it left incomplete?”

The room went quiet.

The journal had the answer.`,
      choices: [
        ['Read the journal with the new question in mind.', 'journalRead', { anne: 2 }],
        ['Search for another page hidden in the desk.', 'journalSearch', { ominis: 1 }],
        ['Write the new question into the research notes.', 'studyNight', { sebastian: 1 }]
      ]
    },

    studyNight: {
      chapter: 'Episode XVI · What Your Father Knew',
      loc: 'Gaunt Mausoleum · Hidden Study',
      text: `Time disappeared.

The three of them sat around the old desk until the candles had burned low.

They talked.

About magic.
About Anne.
About Samira's father.
About Hogwarts.
About absolutely nothing.

Sebastian told a ridiculous story about nearly getting caught sneaking into a restricted corridor.

Ominis corrected half the details.

Samira demanded to know which version was true.

“Mine,” Sebastian said.

“Ours,” Ominis corrected.

Samira laughed.

Then the laughter faded naturally.

Nobody wanted to leave.

Not because the mausoleum was safe.

Because they had become a small team inside it.

And teams, Samira thought, were allowed to have quiet moments.

She looked at the journal.

Tomorrow they would have to decide what to tell Anne.

Tonight they had one certainty:

They would not sacrifice her to make the magic work.

Whatever the answer was, they would find another way.`,
      choices: [
        ['Pack everything carefully and return to Hogwarts.', 'returnHogwarts', { anne: 1 }],
        ['Stay a little longer and let the three of them talk about normal things.', 'quietTalk', { ominis: 1, sebastian: 1 }],
        ['Write one final note for Anne before leaving.', 'anneNote', { anne: 2 }]
      ]
    },

    quietTalk: {
      chapter: 'Episode XVI · What Your Father Knew',
      loc: 'Gaunt Mausoleum · Hidden Study',
      text: `They put the research aside.

For once, nobody had a question to solve.

Sebastian stretched his legs out beneath the desk.

“If we get back to Hogwarts before breakfast, I am sleeping for twelve hours.”

“You said that last night,” Samira said.

“I have refined the plan.”

Ominis smiled.

“You have not slept enough to refine anything.”

Samira looked at Ominis.

“And you?”

“I would like tea.”

“That's your grand ambition?”

“At this exact moment, yes.”

Sebastian considered it.

“I could go for tea.”

“You both sound eighty.”

“Tea is timeless,” Ominis said.

Samira shook her head, smiling.

The conversation drifted.

Favourite classes.
Worst professors.
The strangest things they'd seen at Hogwarts.
What they would do after leaving school.

Nothing earth-shattering.

Nothing that needed fixing.

Just three teenagers talking in a hidden room while the rest of Hogwarts carried on without them.

And somehow, that ordinary conversation made the danger feel more bearable.

Eventually Samira closed the journal.

“Come on.”

Sebastian stood.

Ominis followed.

“Tea,” he reminded them.

Samira laughed.

“Tea.”`,
      choices: [
        ['Return to Hogwarts together.', 'returnHogwarts', { anne: 1 }],
        ['Ask Sebastian to walk with Samira while Ominis leads.', 'returnSeb', { sebastian: 1 }],
        ['Ask Ominis to stay beside Samira on the way back.', 'returnOm', { ominis: 1 }]
      ]
    },

    anneQuestion: {
      chapter: 'Episode XVI · What Your Father Knew',
      loc: 'Gaunt Mausoleum · Hidden Study',
      text: `Samira closed the journal.

“What do we tell Anne?”

Sebastian answered first.

“The truth.”

Ominis shook his head slightly.

“Not all of it at once.”

Samira looked between them.

“She deserves to know.”

“She does,” Ominis said. “But she also deserves not to hear that we found something that might help her and then immediately start experimenting.”

Sebastian nodded.

“We tell her we found a warning. And a path.”

“A path that might lead somewhere,” Samira said.

“Exactly.”

She smiled faintly.

“Together?”

“Together,” Sebastian said.

Ominis added, “And preferably after tea.”

Samira laughed.

They packed the journal.`,
      choices: [
        ['Return to Hogwarts and speak to Anne when the time is right.', 'returnHogwarts', { anne: 1 }],
        ['Write down exactly what they know before leaving.', 'studyNight', { anne: 1 }],
        ['Let Ominis carry the letters while Samira keeps the journal.', 'returnOm', { ominis: 1 }]
      ]
    },

    anneNote: {
      chapter: 'Episode XVI · What Your Father Knew',
      loc: 'Gaunt Mausoleum · Hidden Study',
      text: `Samira tore a clean sheet from her notebook.

She thought for a long time before writing.

Not a promise.

Not a claim that they had found a cure.

Just the truth.

We found something my father studied. It doesn't give us the answer yet, but it tells us what not to do. We're going to keep looking. No shortcuts. No using you as part of the magic. We're coming back with a real plan.

She folded the note.

Sebastian read it once.

“Good.”

Ominis nodded.

“It gives her hope without making a promise you cannot keep.”

Samira slipped the note into her pocket.

“Then let's go home.”

For the first time that night, the word felt comforting.`,
      choices: [
        ['Return to Hogwarts together.', 'returnHogwarts', { anne: 1 }],
        ['Ask Sebastian to keep the journal safe on the way back.', 'returnSeb', { sebastian: 1 }],
        ['Ask Ominis to guide them through the wards again.', 'returnOm', { ominis: 1 }]
      ]
    },

    returnHogwarts: {
      chapter: 'Episode XVII · The Walk Back',
      loc: 'Hogsmeade Road · Before Dawn',
      text: `The walk back took longer than the walk there.

Not because they were lost.

Because none of them was in a hurry.

The sky had begun to pale above the trees. Frost silvered the road. Their breath appeared in small clouds whenever they spoke.

For a while, they walked in silence.

Then Sebastian yawned.

Samira looked at him.

“You said you weren't tired.”

“I was wrong.”

Ominis smiled.

“A historic moment.”

Sebastian nudged his shoulder.

“Don't get used to it.”

They continued.

Samira felt the journal beneath her coat.

The weight was physical.

So was the hope.

They had not cured Anne.

But they had found a direction.

And tomorrow, after sleep and tea and several hours of pretending to be normal students, they would begin again.

Hogwarts appeared through the trees.

Its windows were beginning to glow.

Samira looked at the two boys beside her.

They were tired.
They were cold.
They were probably going to get in trouble.

They were also still here.

Together.`,
      choices: [
        ['Go to breakfast with everyone before sleeping.', 'breakfastReturn', { anne: 1 }],
        ['Ask Sebastian to walk with Samira a little longer.', 'returnSeb', { sebastian: 1 }],
        ['Ask Ominis to stay with Samira until they reach Ravenclaw Tower.', 'returnOm', { ominis: 1 }]
      ]
    },

    returnSeb: {
      chapter: 'Episode XVII · The Walk Back',
      loc: 'Hogsmeade Road · Quiet Path',
      text: `Sebastian fell into step beside Samira.

For a while, neither said anything.

Then he said, “You know, I really am going to sleep this time.”

Samira smiled.

“You'd better.”

“I know.”

They walked beneath the bare trees.

“Are you frightened?” he asked.

She thought about lying.

“A little.”

“Me too.”

That surprised her.

Sebastian shrugged.

“I can be brave and frightened at the same time.”

Samira looked at him.

“That's actually a good answer.”

“I have those occasionally.”

She laughed.

They reached the edge of the village.

Sebastian glanced at her hand.

He did not take it.

He only smiled.

“Tomorrow,” he said. “We start again.”

“Tomorrow.”`,
      choices: [
        ['Return to the others and go back to Hogwarts.', 'breakfastReturn', { anne: 1 }],
        ['Tell Sebastian about the promise she still remembers.', 'breakfastReturn', { sebastian: 1 }]
      ]
    },

    returnOm: {
      chapter: 'Episode XVII · The Walk Back',
      loc: 'Hogsmeade Road · Quiet Path',
      text: `Ominis walked beside Samira while Sebastian went a little ahead.

The road was quiet.

“You're thinking again,” Ominis said.

Samira smiled.

“I thought you couldn't read minds.”

“I can't.”

A pause.

“You sigh when you think too much.”

She laughed.

“That is unfair.”

“Useful, though.”

They walked on.

Samira told him she was still afraid of what the journal might mean.

Ominis admitted he was afraid too.

Neither tried to fix the other's fear.

They simply kept walking.

When Hogwarts came into view, Ominis said quietly, “You know what I said before?”

“About choosing differently every day?”

“Yes.”

He smiled.

“I think bringing us here was one of yours.”

Samira looked ahead.

“Good.”

“Good.”`,
      choices: [
        ['Rejoin Sebastian and head for breakfast.', 'breakfastReturn', { anne: 1 }],
        ['Stay beside Ominis until the castle doors.', 'breakfastReturn', { ominis: 1 }]
      ]
    },

    breakfastReturn: {
      chapter: 'Episode XVII · The Walk Back',
      loc: 'Hogwarts · Great Hall',
      text: `By the time they reached the Great Hall, the castle was fully awake.

Students were laughing over breakfast.

Someone had already started an argument about Quidditch.

A professor walked past looking profoundly unimpressed by the noise.

Samira stopped at the entrance.

For a moment, she simply watched.

This was Hogwarts.

Normal.

Warm.

Loud.

Ridiculously ordinary.

Sebastian dropped into a chair.

“I am starving.”

Ominis sat beside him.

“You are always starving.”

Samira laughed and finally joined them.

The journal was hidden safely beneath her coat.

The problem was still waiting.

Anne was still cursed.

There were still questions they could not answer.

But for one breakfast, they could be students again.

They could argue about toast.

They could complain about homework.

They could tease one another.

And when the time came, they would face the next chapter together.`,
      choices: [
        ['Sit with Amit and Samantha too and tell them about the Hogsmeade weekend.', 'ravenclawBreakfast', { anne: 1 }],
        ['Stay with Sebastian and Ominis and finally eat something.', 'ravenclawBreakfast', { sebastian: 1, ominis: 1 }],
        ['Let everyone talk about normal Hogwarts things for a while.', 'ravenclawBreakfast', { anne: 1 }]
      ]
    },

    ravenclawBreakfast: {
      chapter: 'Episode XVIII · An Ordinary Morning',
      loc: 'Hogwarts · Great Hall',
      text: `The conversation became gloriously unimportant.

Amit complained about an essay.
Samantha complained about Amit complaining.
Sebastian stole a piece of toast from Samira's plate.
Samira stole it back.
Ominis declared both of them impossible.

Nobody talked about ancient magic for several minutes.

Nobody said Anne's name.

And Samira realised she needed that.

Not every moment had to be about the curse.

Sometimes friendship meant sitting at a table while the morning light crossed the Great Hall and arguing over who had taken the last piece of toast.

Sometimes being seventeen meant laughing too loudly and then remembering a professor was nearby.

Sometimes it meant being scared about something enormous and still having homework due on Monday.

Samira looked around the table.

The next part of the story could wait until after breakfast.

For now, she let herself be exactly what she was:

A Ravenclaw fifth-year.

A friend.

A girl trying to save someone she loved.

And a teenager who really, really wanted another piece of toast.`,
      choices: [
        ['Stay at breakfast and keep talking with everyone.', 'nextMorning', { anne: 1 }],
        ['Ask Sebastian about the diagram after breakfast.', 'nextMorning', { sebastian: 1 }],
        ['Ask Ominis whether he really wants tea after all.', 'nextMorning', { ominis: 1 }]
      ]
    },

    nextMorning: {
      chapter: 'Episode XIX · The Next Question',
      loc: 'Ravenclaw Tower · Later That Morning',
      text: `Later, back in Ravenclaw Tower, Samira placed the journal on her desk.

Sunlight had replaced the grey dawn.

Outside the window, Hogwarts carried on as if nothing had happened.

Samira opened her notebook.

At the top of a clean page, she wrote:

WHAT WAS THE SEVENTH POINT PROTECTING?

She looked at the question for a long time.

Then she smiled faintly.

There was a long way to go.

Good.

For once, she did not want the answer to arrive too quickly.`,
      choices: [
        ['Begin researching the seventh point with Amit and Samantha.', 'researchFriends', { anne: 1 }],
        ['Ask Sebastian to work through the diagram with her.', 'researchSeb', { sebastian: 1 }],
        ['Ask Ominis what he remembers about the Gaunt records.', 'researchOm', { ominis: 1 }]
      ]
    },

    researchFriends: {
      chapter: 'Episode XIX · The Next Question',
      loc: 'Ravenclaw Tower · Study Table',
      text: `Amit arrived with three books, two quills, and far too much confidence.

Samantha arrived with tea and immediately announced that Amit's confidence was the least reliable item on the table.

Samira laughed.

They spent the morning researching.

Not dramatically.

Not quickly.

They argued about definitions.
They found useless references.
They got distracted by a ridiculous footnote.
They talked about classes.
They talked about weekend plans.

And slowly, beneath all of it, a pattern began to emerge.

The seventh point appeared in old protective magic more often than in healing magic.

It was not a source.

It was a boundary.

Samira copied the reference into her notes.

For the first time, the mystery felt less like a wall and more like a door.`,
      choices: [
        ['Keep researching with the Ravenclaws.', 'researchFriends', { anne: 1 }],
        ['Take the new reference to Sebastian and Ominis.', 'nextQuestionGroup', { anne: 1 }]
      ]
    },

    researchSeb: {
      chapter: 'Episode XIX · The Next Question',
      loc: 'Ravenclaw Tower · Study Table',
      text: `Sebastian arrived pretending he had only come for the diagram.

He stayed for nearly two hours.

They worked quietly at first.

Then came the arguments.

Then the jokes.

Then a completely unnecessary debate about whether one particular symbol looked more like a snake or a badly drawn spoon.

“It is a snake,” Sebastian insisted.

“It is a spoon,” Samira said.

Ominis, who had arrived halfway through, examined it.

“It is neither. It's upside down.”

Samira covered her face.

Sebastian laughed.

Eventually the joking stopped.

The diagram showed the same thing the journal had shown.

The seventh point was a limit.

Not a sacrifice.

Not a person.

A protection.`,
      choices: [
        ['Compare the result with the journal.', 'nextQuestionGroup', { anne: 1 }],
        ['Take a break and talk about anything except magic.', 'nextQuestionGroup', { sebastian: 1 }]
      ]
    },

    researchOm: {
      chapter: 'Episode XIX · The Next Question',
      loc: 'Ravenclaw Tower · Quiet Corner',
      text: `Ominis remembered more than he expected.

Not exact dates.
Not complete spells.

Fragments.

Things he had overheard as a child.

Rooms he had been told not to enter.

Words adults had used when they thought he was not listening.

Samira wrote everything down.

Sometimes Ominis stopped and admitted he was unsure.

She never pushed him to remember more.

Eventually he said, “There is one thing I am certain of.”

Samira looked up.

“The Gaunts were afraid of this magic too.”

That mattered.

Because it meant the answer was not simply hidden.

Someone had been trying to keep it contained.`,
      choices: [
        ['Write the memory beside the journal notes.', 'nextQuestionGroup', { anne: 1 }],
        ['Ask Ominis whether he wants to stop for tea.', 'nextQuestionGroup', { ominis: 1 }]
      ]
    },

    nextQuestionGroup: {
      chapter: 'Episode XX · The Work Continues',
      loc: 'Hogwarts · Ravenclaw Tower',
      text: `By afternoon, the three of them were back together.

The journal lay open.
Sebastian's diagram covered half the table.
Samira's notes filled the other half.

Outside, students hurried through the corridor.

Inside, the work continued.

Slowly.
Carefully.
Together.

There was no miracle.

Not yet.

There was only another question.

And for the first time, Samira did not mind that.

The story was not over.

It was finally beginning to make sense.`,
      choices: [
        ['Keep researching.', 'nextMorning', { anne: 1 }],
        ['Take a break with your friends before continuing.', 'ravenclawBreakfast', { anne: 1 }]
      ]
    }
  };

  function render(scene) {
    const story = $('#story');
    const choices = $('#choices');
    if (!story || !choices) return;
    const s = read() || { node: 'lowerChambers', history: [], sebastian: 0, ominis: 0, anne: 0 };
    $('#chapterLabel').textContent = scene.chapter;
    $('#location').textContent = scene.loc;
    $('#progress').textContent = `Scene ${(s.history || []).length + 1} · ${scene.chapter.split('·')[0].trim()}`;
    story.innerHTML = scene.text.trim().split(/\n\s*\n/).map(p => `<p>${esc(p).replace(/\n/g, '<br>')}</p>`).join('');
    choices.innerHTML = '';
    scene.choices.forEach(([label, target, delta], i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'choice';
      b.innerHTML = `<span class="choice-num">${i + 1}</span><span>${esc(label)}</span>`;
      b.dataset.continuationTarget = target;
      b.dataset.delta = JSON.stringify(delta || {});
      choices.appendChild(b);
    });
    $('#relationshipState').textContent = `Sebastian · ${s.sebastian || 0} | Ominis · ${s.ominis || 0} | Anne · ${s.anne || 0}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function currentScene() {
    const s = read();
    return s && scenes[s.node] ? scenes[s.node] : null;
  }

  function go(target, delta, label) {
    const s = read() || { node: 'lowerChambers', history: [], sebastian: 0, ominis: 0, anne: 0, custom: [] };
    const from = s.node;
    s.history = Array.isArray(s.history) ? s.history : [];
    s.history.push({ from, label, to: target, at: Date.now() });
    s.sebastian = (s.sebastian || 0) + (delta.sebastian || 0);
    s.ominis = (s.ominis || 0) + (delta.ominis || 0);
    s.anne = (s.anne || 0) + (delta.anne || 0);
    s.node = scenes[target] ? target : 'lowerChambers';
    save(s);
    render(scenes[s.node]);
  }

  document.addEventListener('click', (e) => {
    const b = e.target.closest('#choices button[data-continuation-target]');
    if (!b) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    let delta = {};
    try { delta = JSON.parse(b.dataset.delta || '{}'); } catch (_) {}
    go(b.dataset.continuationTarget, delta, b.innerText.replace(/^\s*\d+\s*/, '').trim());
  }, true);

  // If an older save is sitting on a node that one of the previous experimental
  // engines could not continue, this engine owns that state instead of dead-ending.
  function boot() {
    const s = read();
    if (!s) return;
    if (scenes[s.node]) render(scenes[s.node]);
    else if (s.node === 'basin' || s.node === 'basinOm' || s.node === 'basinSeb') render(scenes[s.node]);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else setTimeout(boot, 0);
})();
