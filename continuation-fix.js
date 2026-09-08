(() => {
  'use strict';
  const KEY='glimmerfics-hogwarts-v12';
  const $=s=>document.querySelector(s);
  const esc=s=>{const d=document.createElement('div');d.textContent=s;return d.innerHTML};
  const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch(_){return null}};
  const save=s=>localStorage.setItem(KEY,JSON.stringify(s));

  const scenes={
    lowerChambers:{chapter:'Episode XIV · What the Gaunts Buried',loc:'Gaunt Mausoleum · Lower Chambers',text:`Nothing glowed.

And yet the room felt occupied.

Samira took one slow breath.

The three of them had reached the place where the warning had begun.

The chamber was smaller than the map had suggested. Seven broken pillars stood around its edge, their surfaces worn smooth in places where generations of hands had touched them. Dust lay undisturbed except for a narrow trail near the seventh pillar.

Sebastian noticed it at the same moment she did.

“Someone's been here.”

Ominis tilted his head.

“Recently?”

“Recently enough.”

Samira looked at the seventh pillar. The break in it was clean, almost deliberate.

For a moment none of them moved.

Then Sebastian said, “I suppose this is the part where we pretend we're sensible.”

Samira glanced at him.

“You're welcome to start.”

“I was hoping you'd start.”

Ominis laughed softly.

It was ridiculous, really. They were standing inside an ancient Gaunt mausoleum, discussing a dangerous magical circuit, and Sebastian was still incapable of admitting that he was nervous without turning it into a joke.

Samira smiled.

“Before we touch anything, let's actually talk.”

Sebastian sat on the edge of the lowest step.

Ominis joined him.

Samira stayed standing for a moment, then sat too.

No spell was cast.

No door opened.

They simply talked.

About the warning.

About Anne.

About what they would do if the journal really did contain something useful.

And, gradually, about everything except magic.

Sebastian complained about how cold the stone was.

Ominis pointed out that Sebastian had chosen to sit on it.

Samira admitted that she had forgotten breakfast.

Both boys looked at her in disbelief.

“You forgot breakfast?” Sebastian asked.

“I was distracted.”

“By an ancient cursed mausoleum?”

“Yes.”

“Priorities, Samira.”

Ominis smiled.

“You're both impossible.”

“Yet,” Sebastian said, “you brought us.”

Samira looked at them.

For one quiet moment, the danger seemed farther away.

Then something clicked beneath the floor.

All three stopped laughing.

Ominis lifted his wand.

“Now,” he whispered, “we listen.”`,choices:[['Let Ominis listen before anyone touches the pillar.','basinOm',{ominis:1}],['Let Sebastian inspect the broken seventh pillar.','basinSeb',{sebastian:1}],['Stay together and examine the chamber as a group.','basin',{anne:1}]]},

    basinOm:{chapter:'Episode XIV · What the Gaunts Buried',loc:'Gaunt Mausoleum · The Listening Chamber',text:`Ominis raised his wand but did not cast.

“Everyone be quiet.”

Sebastian opened his mouth.

Ominis turned towards him.

“Especially you.”

Samira covered a smile.

They waited.

At first there was only the faint movement of air through the cracks in the stone.

Then Ominis whispered, “Water.”

Samira frowned.

“I can hear it too.”

“Not the sound itself. The echo.”

He pointed towards the centre of the room.

“There is something hollow beneath us.”

Sebastian crouched and tapped the floor.

A dull answer came back.

They looked at one another.

“Basin?” Sebastian guessed.

“Likely.”

“Hidden passage?”

“Possibly.”

“Trap?”

Ominis sighed.

“Almost certainly, if you continue asking.”

Samira laughed quietly.

They searched slowly.

There was no rush. Every stone was examined. Every mark was discussed. At one point Sebastian found a scratch that looked significant until Samira pointed out that it was probably made by a chair.

“Someone brought furniture down here?” Sebastian asked.

“No. I think it was a very determined rat.”

Ominis smiled.

Eventually they found a shallow black basin beneath a loose section of floor.

Nothing moved inside it.

But when Samira's wandlight crossed the surface, seven tiny lines appeared around the rim.

Six closed.

One open.

Sebastian unfolded his diagram.

The silence returned.

This time it felt different.

They had found the shape of the warning.`,choices:[['Ask Ominis to keep listening while Samira studies the seven marks.','basinTalk',{ominis:1}],['Let Sebastian compare the basin with his diagram.','basinSeb',{sebastian:1}],['Sit down for a moment and decide what not to do before proceeding.','basinTalk',{anne:1}]]},

    basinSeb:{chapter:'Episode XIV · What the Gaunts Buried',loc:'Gaunt Mausoleum · Seventh Pillar',text:`Sebastian crouched beside the broken pillar.

He did not touch it.

Samira noticed.

“You're being careful.”

“I can be careful.”

“I know.”

He looked up.

“You sounded surprised.”

“I was.”

Ominis made a quiet sound that might have been a laugh.

Sebastian ignored him and traced the air above the broken stone with his wand.

“There is residue here.”

“Cursed?” Samira asked.

“Not exactly.”

He frowned.

“It feels like the magic remembers being used.”

Ominis stepped closer.

“Then the break may have been intentional.”

Samira looked at the incomplete seventh mark.

“If the circuit was supposed to be closed, someone stopped it.”

“Or someone protected it,” Ominis said.

That sentence changed the room.

They stopped thinking about how to activate the magic.

They started thinking about why someone had prevented it.

Sebastian sat back.

“I don't like that answer.”

“Because?”

“Because it means the easiest answer is probably the worst one.”

Samira knew exactly what he meant.

Anne.

No one said her name.

They didn't need to.

Samira folded her arms.

“Then we don't use her.”

Sebastian nodded immediately.

“Never.”

Ominis's voice was quiet.

“Good.”

For several minutes they simply sat there, talking through possibilities. Sebastian was stubborn. Ominis was cautious. Samira kept bringing them back to the same question: what protected the seventh point?

They disagreed.

They joked.

They got distracted by the absurdity of arguing over ancient magic while sitting on a dusty floor.

And slowly, a second door became visible behind the broken pillar.`,choices:[['Search the hidden doorway together.','basinSearch',{anne:1}],['Ask Ominis to identify the ward.','hiddenDoorOm',{ominis:1}],['Ask Sebastian to map the doorway before opening it.','hiddenDoor',{sebastian:1}]]},

    basinTalk:{chapter:'Episode XIV · What the Gaunts Buried',loc:'Gaunt Mausoleum · Between the Pillars',text:`They sat down.

It was not what Samira had expected them to do in an ancient mausoleum, but nobody seemed eager to argue.

Sebastian leaned back against the wall.

“So,” he said. “If we weren't here, what would you be doing?”

“Sleeping,” Ominis answered immediately.

Samira laughed.

“Honestly?”

“Honestly.”

Sebastian considered it.

“I'd be in Hogsmeade.”

“With what money?” Samira asked.

He looked offended.

“You've ruined the fantasy.”

Ominis smiled.

Samira thought for a moment.

“I'd probably be with Amit and Samantha.”

“Doing what?”

“Nothing important.”

“That sounds nice,” Ominis said.

It did.

They talked about school for a while.

About Professor Sharp.

About which classes they secretly liked.

About how Hogwarts managed to give them impossible amounts of homework while also somehow finding new corridors for them to get lost in.

Sebastian admitted he had once skipped an entire evening of studying because he had become convinced he could teach himself a spell from an old book.

“Did it work?” Samira asked.

“No.”

Ominis laughed.

“What happened?”

“I accidentally turned my own shoes green.”

Samira stared at him.

“You're lying.”

“I wish I were.”

The laughter came easily.

For a little while they were not investigators or rescuers or children carrying problems much older than themselves.

They were simply three teenagers sitting on cold stone, talking nonsense because they needed a break.

Then Samira looked at the broken pillar.

“After Anne is safe,” she said quietly, “we're having that ordinary weekend.”

Ominis smiled.

“With tea.”

Sebastian added, “And chocolate.”

Samira nodded.

“Deal.”

The promise settled between them.

Then they stood.`,choices:[['Search the chamber for the hidden doorway.','basinSearch',{anne:1}],['Ask Ominis what an ordinary weekend would look like for him.','ominisTalk',{ominis:1}],['Ask Sebastian what he would actually do in Hogsmeade.','sebTalk',{sebastian:1}]]},

    basinSearch:{chapter:'Episode XIV · What the Gaunts Buried',loc:'Gaunt Mausoleum · Hidden Stair',text:`They searched without rushing.

Samira checked the walls.
Sebastian examined the floor.
Ominis listened.

Every few minutes one of them called the others over to inspect something that turned out to be nothing.

A crack. A loose stone. A faded carving. A stubborn spider.

“That spider has better survival instincts than we do,” Sebastian muttered.

Ominis smiled.

“Finally, something you admire.”

Eventually Ominis stopped.

“Wait.”

They froze.

He pointed towards the far wall.

“There is a hollow space behind it.”

Samira brushed away dust.

A narrow seam appeared.

Sebastian crouched beside her.

“Door.”

“Stairs,” Ominis corrected.

They found an incomplete circle in the stone.

Sebastian unfolded his diagram.

Samira compared it with her father's notes.

Nobody spoke for a while.

The symbol was not an invitation to complete the circuit.

It was an instruction to leave it incomplete.

Samira placed her wand against the first six marks.

The hidden door opened.

Cold air rose from below.

Sebastian looked at the darkness.

“I vote we don't do anything stupid.”

Ominis smiled.

“That is the most encouraging thing you've said all day.”

Samira stepped towards the stairs.

“Together?”

“Together,” Sebastian said.

Ominis nodded.

They descended.`,choices:[['Go down together, slowly.','catacomb',{anne:1}],['Let Ominis lead and listen for wards.','catacombOm',{ominis:1}],['Let Sebastian keep the diagram open while they descend.','catacombSeb',{sebastian:1}]]},

    hiddenDoor:{chapter:'Episode XV · The Room Beneath the Room',loc:'Gaunt Mausoleum · Hidden Stair',text:`Sebastian spread the diagram across the floor.

For once, he did not immediately reach for his wand.

“Tell me if I'm wrong,” he said.

Samira leaned over the page.

Ominis listened to the stone.

They compared three different kinds of knowledge: her father's research, Sebastian's instinct for magical patterns, and Ominis's knowledge of Gaunt wards.

It was slow.

Messy.

They disagreed.

They changed their minds.

At one point Sebastian pointed at a symbol and said, “That is obviously a snake.”

Samira stared at it.

“It's a spoon.”

Ominis considered it.

“It's upside down.”

Sebastian looked betrayed.

“You two are impossible.”

Samira laughed.

Eventually they stopped joking.

The seventh mark was deliberately incomplete.

“Then we keep it that way,” Samira said.

The door opened.

Beyond it waited a staircase disappearing into darkness.

Nobody pretended they weren't nervous.

They simply went together.`,choices:[['Descend slowly.','catacomb',{anne:1}],['Ask Ominis to lead.','catacombOm',{ominis:1}],['Ask Sebastian to watch the diagram.','catacombSeb',{sebastian:1}]]},

    hiddenDoorOm:{chapter:'Episode XV · The Room Beneath the Room',loc:'Gaunt Mausoleum · Hidden Door',text:`Ominis touched the air above the symbol.

“I know this kind of ward.”

Samira waited.

“My family used variations of it to keep people away from rooms they considered important.”

Sebastian frowned.

“That sounds welcoming.”

“It wasn't.”

Ominis paused.

“But the important part is the gap.”

Samira looked at the unfinished circle.

“It is meant to stay open.”

“Yes.”

They activated the six complete marks.

The door opened.

Ominis remained still for a moment.

Samira touched his sleeve.

“You don't have to face your family's history alone.”

He nodded.

“I know.”

Sebastian looked between them.

“Then let's make sure we remember that.”

They started down the stairs.`,choices:[['Stay beside Ominis.','catacombOm',{ominis:1}],['Let Sebastian watch the wards.','catacombSeb',{sebastian:1}],['Descend together.','catacomb',{anne:1}]]},

    catacomb:{chapter:'Episode XV · The Room Beneath the Room',loc:'Gaunt Mausoleum · Catacombs',text:`The staircase went down farther than any of them expected.

The air grew colder.

Their footsteps became quieter.

For twenty steps nobody spoke.

Then Sebastian whispered, “I hate stairs.”

Samira nearly laughed.

“You climb stairs every day.”

“Hogwarts stairs move. These ones stare.”

Ominis laughed.

“They are stone.”

“Exactly. Suspiciously silent stone.”

The sound of their laughter travelled down the stairwell.

Then Samira saw the writing on the wall.

Seven names.

Six scratched through.

One unfinished.

Her stomach tightened.

“So the seventh anchor was never a place,” she whispered.

Ominis touched the wall.

“No.”

His voice changed.

“It was a person.”

No one said Anne's name.

At the bottom stood a sealed door.

A faint pulse of magic came from behind it.

Not attacking.

Waiting.`,choices:[['Open the door together.','sealedRoom',{anne:1}],['Ask Ominis to listen first.','sealedRoomOm',{ominis:1}],['Ask Sebastian to inspect the resonance.','sealedRoomSeb',{sebastian:1}]]},

    catacombOm:{chapter:'Episode XV · The Room Beneath the Room',loc:'Gaunt Mausoleum · Catacombs',text:`Ominis led them down.

He stopped often, listening.

Samira stayed close.

Sebastian followed behind, unusually quiet.

“You're very good at this,” Sebastian whispered.

“I prefer surviving to adventuring.”

“That may be the wisest thing you've ever said.”

“Try it sometime.”

Samira covered a laugh.

At the bottom, Ominis stopped.

“There is a door.”

He listened again.

“And something old behind it.”

They approached together.

The unfinished seventh circle was carved into the stone.

Samira took a breath.

“Ready?”

“No,” Ominis said.

Sebastian smiled.

“Good. Neither am I.”

They opened the door together.`,choices:[['Enter together.','sealedRoom',{anne:1}],['Let Ominis cross first.','sealedRoomOm',{ominis:1}],['Let Sebastian inspect the ward.','sealedRoomSeb',{sebastian:1}]]},

    catacombSeb:{chapter:'Episode XV · The Room Beneath the Room',loc:'Gaunt Mausoleum · Catacombs',text:`Sebastian kept his diagram open as they descended.

Every few steps he compared the markings on the walls with his notes.

“Still matching?” Samira asked.

“Mostly.”

“Mostly?”

He sighed.

“I was hoping you wouldn't notice.”

Ominis smiled.

“She notices everything.”

“I know.”

Then Sebastian stopped.

A broken seventh mark had been carved into the wall.

“This was never meant to be completed.”

Samira nodded.

“Then we won't complete it.”

They reached the final door.

Sebastian folded the diagram.

“Together?”

Samira nodded.

“Together.”`,choices:[['Open it.','sealedRoom',{anne:1}],['Let Ominis inspect it.','sealedRoomOm',{ominis:1}],['Stay a moment and discuss what it protects.','sealedRoomTalk',{sebastian:1}]]},

    sealedRoom:{chapter:'Episode XV · The Room Beneath the Room',loc:'Gaunt Mausoleum · The Sealed Room',text:`The door opened without a sound.

The room beyond was small.

A desk.
A chair.
A dead fireplace.
A journal beneath grey dust.

Samira froze when she saw the handwriting.

Her father's.

Sebastian stopped beside her.

“Take your time.”

Ominis stayed near the doorway.

Nobody pushed her.

Samira stepped forward.

The first page contained diagrams.

The second contained a warning.

The third mentioned Anne.

Her hands began to shake.

Sebastian quietly took the page when she could no longer hold it steady.

He read.

Then he looked at her.

“The seventh anchor must never be a cursed soul.”

The words seemed to drain the warmth from the room.

Samira closed her eyes.

They had not found a cure.

They had found a boundary.

And perhaps that was the first real clue.`,choices:[['Read the journal together, slowly.','journalRead',{anne:2}],['Let Ominis search the room first.','journalSearch',{ominis:1}],['Let Sebastian compare the diagrams.','journalSeb',{sebastian:1}]]},

    sealedRoomOm:{chapter:'Episode XV · The Room Beneath the Room',loc:'Gaunt Mausoleum · The Sealed Room',text:`Ominis entered first.

He listened.

“Nothing moving.”

Samira stepped inside.

Sebastian followed.

The room was almost ordinary.

Then Samira saw the handwriting.

Her father's.

Nobody spoke for a while.

Ominis finally said, “You don't have to read it all at once.”

Samira nodded.

“Thank you.”

Sebastian sat on the edge of the desk.

“We can take turns.”

They opened the journal.`,choices:[['Read the first entry.','journalRead',{anne:2}],['Search the room.','journalSearch',{ominis:1}],['Compare the diagrams.','journalSeb',{sebastian:1}]]},

    sealedRoomSeb:{chapter:'Episode XV · The Room Beneath the Room',loc:'Gaunt Mausoleum · The Sealed Room',text:`Sebastian checked the door twice before stepping aside.

“No trap.”

Samira entered.

The journal waited on the desk.

She recognised her father's handwriting immediately.

Sebastian's voice softened.

“You don't have to rush.”

“I know.”

Ominis smiled faintly.

“Remarkably sensible.”

“Don't get used to it,” Sebastian said.

Samira laughed quietly.

Then she opened the journal.`,choices:[['Read it together.','journalRead',{anne:2}],['Ask Ominis to search first.','journalSearch',{ominis:1}],['Ask Sebastian to compare the diagrams.','journalSeb',{sebastian:1}]]},

    sealedRoomTalk:{chapter:'Episode XV · The Room Beneath the Room',loc:'Gaunt Mausoleum · The Sealed Room',text:`Sebastian stared at the incomplete seventh mark.

“It was never an anchor.”

Samira looked at him.

“What was it?”

“A safeguard.”

Ominis's expression tightened.

“A safeguard against someone becoming part of the circuit.”

Samira thought of Anne.

They had been looking for a way to connect something.

Her father had been looking for a way to stop that connection from becoming a sacrifice.

Sebastian folded his diagram.

“We do not experiment on Anne.”

Samira nodded.

“Never.”

The journal waited on the desk.`,choices:[['Read it together.','journalRead',{anne:2}],['Search the room first.','journalSearch',{ominis:1}],['Preserve the diagrams before touching anything.','journalSeb',{sebastian:1}]]},

    journalRead:{chapter:'Episode XVI · What Your Father Knew',loc:'Gaunt Mausoleum · Hidden Study',text:`They read slowly.

Very slowly.

Not because the handwriting was difficult, but because every page changed the meaning of the one before it.

Samira's father had studied the resonance years earlier.

He had discovered that the seventh point was not a source of power.

It was a limit.

A boundary built into the system.

They argued over the notes.

Sebastian thought one symbol meant containment.

Ominis thought it meant exclusion.

Samira thought both were partly right.

At one point Sebastian read a line upside down.

Ominis noticed.

Samira laughed so hard she had to put the journal down.

“Don't tell anyone,” Sebastian said.

“I absolutely will.”

“Samira.”

“You're never living this down.”

Even Ominis laughed.

Then the mood settled again.

The final note was short.

If Anne's curse is connected to this resonance, the answer will not be found by forcing the seventh point. It will be found by discovering what the seventh point was protecting.

Samira stared at the page.

That was not a cure.

But it was a direction.`,choices:[['Stay and read every remaining note.','studyNight',{anne:2}],['Take the journal back to Hogwarts.','returnHogwarts',{ominis:1}],['Talk about what this means for Anne before deciding anything.','anneQuestion',{anne:1}]]},

    journalSearch:{chapter:'Episode XVI · What Your Father Knew',loc:'Gaunt Mausoleum · Hidden Study',text:`Ominis searched the room slowly.

He found a loose floorboard.

Then a hidden drawer.

Inside were letters tied with faded blue thread.

Samira recognised her father's handwriting again.

They read them one at a time.

The first mentioned resonance.

The second mentioned Anne.

The third was incomplete.

But the same warning appeared twice:

Do not let the seventh become a person.

Samira closed her eyes.

“Then we know what not to do.”

Sebastian nodded.

“And now we find what to do instead.”

Ominis folded the letters carefully.

For once, there was no argument.

Just a plan.`,choices:[['Combine the letters with the journal.','studyNight',{anne:2}],['Return to Hogwarts with the evidence.','returnHogwarts',{ominis:1}],['Keep the letters private until they understand them.','studyNight',{sebastian:1}]]},

    journalSeb:{chapter:'Episode XVI · What Your Father Knew',loc:'Gaunt Mausoleum · Hidden Study',text:`Sebastian spread his diagram beside the journal.

They spent the next hour comparing symbols.

Sometimes they worked in silence.

Sometimes they argued.

Sometimes they stopped because one of them had become distracted by something completely irrelevant.

Sebastian complained that Ominis had an unfair advantage when it came to wards.

Ominis replied that Sebastian had an unfair advantage because he apparently had no survival instinct.

Samira tried to keep them focused.

She failed.

Eventually she laughed.

“You two are impossible.”

Sebastian smiled.

“And yet you brought us both.”

Ominis nodded.

“A questionable decision.”

Samira looked back at the diagram.

The seventh point was not a missing piece.

It was deliberately absent.

That changed everything.`,choices:[['Read the journal with that in mind.','journalRead',{anne:2}],['Search for another hidden page.','journalSearch',{ominis:1}],['Write the new theory into Samira’s notes.','studyNight',{sebastian:1}]]},

    studyNight:{chapter:'Episode XVI · What Your Father Knew',loc:'Gaunt Mausoleum · Hidden Study',text:`Time disappeared.

The candles burned lower.

The journal stayed open.

They talked for hours.

About the research.

About Anne.

About Samira's father.

Then, inevitably, about everything else.

Sebastian told a ridiculous story about nearly being caught in a restricted corridor.

Ominis corrected half of it.

Samira demanded to know which version was true.

“Mine,” Sebastian said.

“Ours,” Ominis corrected.

Samira laughed.

They talked about classes.

Which professors were secretly terrifying.
Which homework assignments they hated.
Which places in Hogwarts they would visit if they were not constantly chasing some mystery.

Sebastian admitted he would happily spend an entire day doing nothing.

Samira did not believe him.

Ominis wanted tea.

Samira wanted chocolate.

Sebastian wanted both.

For a little while, Anne's curse was not the only thing in the room.

They were still teenagers.

They were allowed to laugh.

They were allowed to be tired.

They were allowed to talk nonsense.

And when the candles had nearly burned out, they made one quiet agreement:

They would not sacrifice Anne to make the magic work.

Whatever the answer was, they would find another way.`,choices:[['Pack everything and return to Hogwarts.','returnHogwarts',{anne:1}],['Stay a little longer and talk about ordinary things.','quietTalk',{sebastian:1,ominis:1}],['Write a note for Anne before leaving.','anneNote',{anne:2}]]},

    quietTalk:{chapter:'Episode XVI · What Your Father Knew',loc:'Gaunt Mausoleum · Hidden Study',text:`The research was closed.

For once, nobody had anything to solve.

Sebastian stretched his legs out beneath the desk.

“I am sleeping for twelve hours.”

“You said that yesterday,” Samira reminded him.

“I have refined the plan.”

Ominis smiled.

“You have not slept enough to refine anything.”

Samira laughed.

“What would you actually do if you had a completely free day?”

Sebastian thought.

“Hogsmeade. Food. No studying.”

“That is your entire plan?”

“It's a good plan.”

Ominis said he would find a quiet place, order tea, and spend several hours reading something that had nothing to do with his family.

Samira said she would probably drag both of them around every shop until they complained.

Sebastian looked horrified.

“You shop?”

“Sometimes.”

Ominis smiled.

“I think we have discovered Sebastian's greatest fear.”

Samira laughed.

The conversation wandered on.

Favourite sweets.
Worst school memories.
The strangest things they had seen at Hogwarts.
What they might do after leaving school.

Nothing dramatic.

Nothing that needed fixing.

Just three teenagers talking in a hidden room while the world outside carried on.

Eventually Samira closed the journal.

“Come on.”

Sebastian stood.

Ominis followed.

“Tea,” he reminded them.

“Tea,” Samira agreed.`,choices:[['Return to Hogwarts together.','returnHogwarts',{anne:1}],['Walk back with Sebastian.', 'returnSeb',{sebastian:1}],['Walk back with Ominis.','returnOm',{ominis:1}]]},

    anneQuestion:{chapter:'Episode XVI · What Your Father Knew',loc:'Gaunt Mausoleum · Hidden Study',text:`Samira closed the journal.

“What do we tell Anne?”

Sebastian answered first.

“The truth.”

Ominis shook his head.

“Not all at once.”

Samira looked between them.

“She deserves to know.”

“She does,” Ominis said. “But she also deserves not to hear that we found a possible path and then immediately turn her into part of an experiment.”

Sebastian nodded.

“We tell her we found a warning.”

“And a path,” Samira added.

“A path that might lead somewhere,” he said.

She smiled faintly.

“Together?”

“Together.”

Ominis sighed.

“And after tea.”

Samira laughed.

They packed the journal.`,choices:[['Return to Hogwarts.','returnHogwarts',{anne:1}],['Write down everything first.','studyNight',{anne:1}],['Let Ominis carry the letters.','returnOm',{ominis:1}]]},

    anneNote:{chapter:'Episode XVI · What Your Father Knew',loc:'Gaunt Mausoleum · Hidden Study',text:`Samira wrote a note for Anne.

Not a promise.

Not a claim that they had found a cure.

Just the truth.

We found something my father studied. It doesn't give us the answer yet, but it tells us what not to do. We're going to keep looking. No shortcuts. No using you as part of the magic. We're coming back with a real plan.

She folded the note.

Sebastian read it once.

“Good.”

Ominis nodded.

“It gives her hope without promising something you cannot keep.”

Samira slipped the note into her pocket.

“Then let's go home.”

For the first time that night, the word felt comforting.`,choices:[['Return to Hogwarts together.','returnHogwarts',{anne:1}],['Ask Sebastian to keep the journal safe.','returnSeb',{sebastian:1}],['Ask Ominis to guide them through the wards.','returnOm',{ominis:1}]]},

    returnHogwarts:{chapter:'Episode XVII · The Walk Back',loc:'Hogsmeade Road · Before Dawn',text:`The walk back took longer.

Not because they were lost.

Because nobody hurried.

The sky was beginning to pale between the trees. Frost silvered the road. Their breath appeared in small clouds.

For a while, they said nothing.

Then Sebastian yawned.

Samira looked at him.

“You said you weren't tired.”

“I was wrong.”

Ominis smiled.

“A historic moment.”

Sebastian nudged his shoulder.

“Don't get used to it.”

They kept walking.

Samira could feel the journal beneath her coat.

They had not cured Anne.

But they had found a direction.

And sometimes, Samira thought, a direction was more valuable than a false answer.

When Hogwarts appeared through the trees, its windows were beginning to glow.

Sebastian stopped.

“Breakfast?”

Ominis sighed.

“Tea.”

Samira smiled.

“Both.”

They walked towards the castle together.`,choices:[['Go to breakfast with everyone.','breakfastReturn',{anne:1}],['Walk with Sebastian a little longer.','returnSeb',{sebastian:1}],['Stay beside Ominis until the castle doors.','returnOm',{ominis:1}]]},

    returnSeb:{chapter:'Episode XVII · The Walk Back',loc:'Hogsmeade Road · Quiet Path',text:`Sebastian fell into step beside Samira.

For a while, neither spoke.

Then he said, “I really am going to sleep this time.”

Samira smiled.

“You'd better.”

“I know.”

He kicked a loose pebble from the path.

“Are you frightened?” he asked.

“A little.”

“Me too.”

She looked at him.

He shrugged.

“I can be frightened and still go forward.”

“That is surprisingly sensible.”

“I have moments.”

She laughed.

They talked about ordinary things as they walked: Hogsmeade, sweets, school, the professors they would gladly avoid forever.

At the edge of the village, Sebastian glanced at her.

“Tomorrow,” he said. “We start again.”

“Tomorrow.”`,choices:[['Rejoin the others.','breakfastReturn',{anne:1}],['Remind Sebastian of the pinky promise.','breakfastReturn',{sebastian:1}]]},

    returnOm:{chapter:'Episode XVII · The Walk Back',loc:'Hogsmeade Road · Quiet Path',text:`Ominis walked beside Samira while Sebastian went ahead.

The road was quiet.

“You're thinking again,” Ominis said.

“I thought you couldn't read minds.”

“I can't.”

A pause.

“You sigh.”

Samira laughed.

“That is unfair.”

“Useful, though.”

She told him she was still afraid of what the journal might mean.

Ominis admitted he was afraid too.

Neither tried to fix the other's fear.

They simply walked.

When Hogwarts came into view, Ominis said quietly, “You know what I said before?”

“About choosing differently every day?”

“Yes.”

He smiled.

“I think bringing us here was one of yours.”

Samira looked ahead.

“Good.”

“Good.”`,choices:[['Rejoin Sebastian and go to breakfast.','breakfastReturn',{anne:1}],['Stay beside Ominis until the castle doors.','breakfastReturn',{ominis:1}]]},

    breakfastReturn:{chapter:'Episode XVII · The Walk Back',loc:'Hogwarts · Great Hall',text:`The Great Hall was already loud.

Students laughed over breakfast.

Someone was arguing about Quidditch.

A professor walked past looking as though he regretted choosing education as a career.

Samira stopped at the entrance.

This was Hogwarts.

Normal.
Warm.
Loud.
Ridiculously ordinary.

Sebastian dropped into a chair.

“I am starving.”

Ominis sat beside him.

“You are always starving.”

Samira finally sat too.

For one breakfast, the journal stayed hidden.

They talked about homework.

Quidditch.

A ridiculous rumour about a professor.

Amit's latest theory about magical creatures.

Samantha's opinion that Amit's theories were usually the reason everyone else got extra homework.

Sebastian stole toast from Samira.

She stole it back.

Ominis declared them both unbearable.

Samira laughed.

Anne was still waiting for an answer.

But for a little while, they were allowed to be students.`,choices:[['Sit with Amit and Samantha too.','ravenclawBreakfast',{anne:1}],['Stay with Sebastian and Ominis.','ravenclawBreakfast',{sebastian:1,ominis:1}],['Let everyone talk about normal things.','ravenclawBreakfast',{anne:1}]]},

    ravenclawBreakfast:{chapter:'Episode XVIII · An Ordinary Morning',loc:'Hogwarts · Great Hall',text:`The conversation became gloriously unimportant.

Amit complained about an essay.
Samantha complained about Amit complaining.
Sebastian stole another piece of toast.
Samira stole it back.
Ominis announced that neither of them had the maturity to be trusted with breakfast.

Amit looked between them.

“Why do you all look like you've been awake for three days?”

Samira nearly choked on her tea.

Sebastian looked innocent.

Ominis said nothing.

Samantha narrowed her eyes.

“You've done something.”

“Define something,” Sebastian said.

Amit groaned.

“Please don't.”

They laughed.

For several minutes they talked about school instead of curses.

They argued about which professor gave the worst homework.

They discussed Quidditch.

Samantha told Samira about a ridiculous rumour she had heard in the common room.

Amit insisted it was false.

Nobody believed him.

Samira looked around the table.

This mattered.

She could save Anne and still laugh.

She could be frightened and still be seventeen.

She did not have to become serious every second simply because the problem was serious.

After breakfast, the work would continue.

For now, she took another piece of toast.`,choices:[['Stay and keep talking with everyone.','nextMorning',{anne:1}],['Ask Sebastian about his diagram after breakfast.','nextMorning',{sebastian:1}],['Ask Ominis whether he still wants tea.','nextMorning',{ominis:1}]]},

    nextMorning:{chapter:'Episode XIX · The Next Question',loc:'Ravenclaw Tower · Later That Morning',text:`Later, Samira placed the journal on her desk.

The room was bright with winter sunlight.

Outside, students hurried through the corridor.

Someone laughed.

A door slammed.

A professor called after a student who was definitely pretending not to hear.

Hogwarts continued.

Samira opened her notebook.

At the top of a clean page she wrote:

WHAT WAS THE SEVENTH POINT PROTECTING?

She stared at the question.

Then she smiled.

There was a long way to go.

Good.

For once, she did not want the answer to arrive too quickly.`,choices:[['Research with Amit and Samantha.','researchFriends',{anne:1}],['Work through Sebastian’s diagram.','researchSeb',{sebastian:1}],['Ask Ominis about the Gaunt records.','researchOm',{ominis:1}]]},

    researchFriends:{chapter:'Episode XIX · The Next Question',loc:'Ravenclaw Tower · Study Table',text:`Amit arrived with three books, two quills and far too much confidence.

Samantha arrived with tea.

“I brought the useful thing,” she announced.

Amit looked offended.

They spent the morning researching.

They argued over definitions.

They found useless references.

They got distracted by a footnote.

They talked about classes and weekend plans.

Slowly, a pattern appeared.

The seventh point showed up in protective magic far more often than healing magic.

It was not a source.

It was a boundary.

Samira copied the reference into her notes.

For the first time, the mystery felt less like a wall and more like a door.`,choices:[['Keep researching with the Ravenclaws.','researchFriends',{anne:1}],['Take the new reference to Sebastian and Ominis.','nextQuestionGroup',{anne:1}]]},

    researchSeb:{chapter:'Episode XIX · The Next Question',loc:'Ravenclaw Tower · Study Table',text:`Sebastian arrived claiming he had only come for the diagram.

He stayed for two hours.

They worked quietly.

Then they argued.

Then they joked.

Then Ominis arrived and immediately asked why Sebastian had drawn a spoon on the parchment.

“It is a snake,” Sebastian said.

“It is a spoon,” Samira said.

“It is upside down,” Ominis replied.

Samira covered her face.

Eventually they returned to the real problem.

The diagram matched the journal.

The seventh point was a limit.

Not a sacrifice.

Not a person.

A protection.`,choices:[['Compare the result with the journal.','nextQuestionGroup',{anne:1}],['Take a break and talk about anything except magic.','nextQuestionGroup',{sebastian:1}]]},

    researchOm:{chapter:'Episode XIX · The Next Question',loc:'Ravenclaw Tower · Quiet Corner',text:`Ominis remembered fragments.

Not dates.
Not complete spells.

Fragments.

Rooms he had been forbidden to enter.

Words adults had used when they thought he was not listening.

Samira wrote everything down.

Sometimes he stopped and said he wasn't sure.

She never pushed him.

Eventually he said, “There is one thing I am certain of.”

Samira looked up.

“The Gaunts were afraid of this magic too.”

That mattered.

Someone had not merely hidden the answer.

Someone had tried to contain it.`,choices:[['Write the memory beside the journal notes.','nextQuestionGroup',{anne:1}],['Ask Ominis whether he wants tea.','nextQuestionGroup',{ominis:1}]]},

    nextQuestionGroup:{chapter:'Episode XX · The Work Continues',loc:'Hogwarts · Ravenclaw Tower',text:`By afternoon, the table was covered in parchment.

The journal lay open.

Sebastian's diagram occupied half the desk.

Samira's notes covered the other half.

Amit had added three books.

Samantha had added snacks.

Nobody agreed on what the seventh point protected.

That was good.

It meant they were still asking questions instead of pretending they had an answer.

Outside, Hogwarts carried on.

Inside, the work continued.

Slowly.

Carefully.

Together.

And for the first time, Samira understood that the next part of the story did not have to be a race.

It could be a journey.`,choices:[['Keep researching.','nextMorning',{anne:1}],['Take a break with your friends first.','ravenclawBreakfast',{anne:1}]]}
  };

  const aliases={journalNext:'lowerChambers',slowMap:'lowerChambers',slowGaunt:'lowerChambers',slowReady:'lowerChambers'};
  const normalize=(target)=>scenes[target]?target:(aliases[target]||'lowerChambers');

  function render(node){
    const scene=scenes[node]; if(!scene)return;
    const story=$('#story'),choices=$('#choices'); if(!story||!choices)return;
    const s=read()||{node,history:[],sebastian:0,ominis:0,anne:0,custom:[]};
    $('#chapterLabel').textContent=scene.chapter;
    $('#location').textContent=scene.loc;
    $('#progress').textContent=`Scene ${(s.history||[]).length+1} · ${scene.chapter.split('·')[0].trim()}`;
    story.innerHTML=scene.text.trim().split(/\n\s*\n/).map(p=>`<p>${esc(p).replace(/\n/g,'<br>')}</p>`).join('');
    choices.innerHTML='';
    scene.choices.forEach(([label,target,delta],i)=>{const b=document.createElement('button');b.type='button';b.className='choice';b.innerHTML=`<span class="choice-num">${i+1}</span><span>${esc(label)}</span>`;b.dataset.fixTarget=target;b.dataset.fixDelta=JSON.stringify(delta||{});choices.appendChild(b)});
    $('#relationshipState').textContent=`Sebastian · ${s.sebastian||0} | Ominis · ${s.ominis||0} | Anne · ${s.anne||0}`;
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function go(target,delta,label){
    const s=read()||{node:'lowerChambers',history:[],sebastian:0,ominis:0,anne:0,custom:[]};
    const from=s.node; target=normalize(target);
    s.history=Array.isArray(s.history)?s.history:[];
    s.history.push({from,label,to:target,at:Date.now()});
    s.sebastian=(s.sebastian||0)+(delta.sebastian||0);
    s.ominis=(s.ominis||0)+(delta.ominis||0);
    s.anne=(s.anne||0)+(delta.anne||0);
    s.node=target; save(s); render(target);
  }

  document.addEventListener('click',e=>{
    const b=e.target.closest('#choices button'); if(!b)return;
    const target=b.dataset.fixTarget||b.dataset.continuationTarget||b.dataset.slowTarget; if(!target)return;
    e.preventDefault(); e.stopImmediatePropagation();
    let delta={}; try{delta=JSON.parse(b.dataset.fixDelta||b.dataset.delta||'{}')}catch(_){}
    go(target,delta,b.innerText.replace(/^\s*\d+\s*/,'').trim());
  },true);

  function boot(){
    const s=read(); if(!s)return;
    if(scenes[s.node]){render(s.node);return;}
    const target=aliases[s.node]; if(target){s.node=target;save(s);render(target);}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else setTimeout(boot,0);
})();
