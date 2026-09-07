(() => {
'use strict';
const KEY='glimmerfics-hogwarts-v12';
const $=s=>document.querySelector(s);
const esc=s=>{const d=document.createElement('div');d.textContent=s;return d.innerHTML};
const get=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch(_){return null}};
const put=s=>localStorage.setItem(KEY,JSON.stringify(s));

const scenes={
  morning:{chapter:'Episode XII · The Morning After',loc:'Ravenclaw Tower · Samira’s Room',text:`The morning came too early.

For a long while, Samira remained beneath the blankets without opening her eyes. She listened to Hogwarts waking around her: a door closing somewhere along the tower, footsteps crossing the corridor, a burst of laughter quickly muffled by someone remembering the hour.

Nothing was wrong.

That was the strangest part.

The castle sounded exactly as it always did.

And yet last night's library was still with her.

Her father's pages. The resonance pattern. Sebastian's diagram. The seven points. The promise they had made before leaving the table. And, beyond all of it, the Gaunt mausoleum waiting somewhere beyond Hogsmeade.

Samira opened her eyes.

Grey winter light had reached the foot of her bed. Frost silvered the tall window. She sat up slowly and let the cold air wake her properly.

Today was supposed to be ordinary.

A Hogsmeade weekend. Shops. Warm drinks. Students escaping the castle for an afternoon.

Instead, three people were preparing to walk towards an old family mausoleum because somewhere beneath it might be the missing piece of research that could help Anne.

Anne.

The thought changed everything.

Samira dressed without rushing. Wand. Gloves. Coat. Notes. She checked the notes twice, though she already knew the handwriting by heart.

Seven points.

A missing connection.

A family that had buried its history.

And a question nobody dared to say aloud: what if the answer was close enough to Anne to hurt her?

She crossed to the window.

Far below, students moved across the frosted grounds. The road to Hogsmeade disappeared between bare trees.

Samira rested her forehead against the glass.

She thought of Sebastian first—not only his recklessness, but the moment he had finally stopped trying to solve everything and listened to her. She thought of the ridiculous pinky promise that had somehow felt more serious than any grand declaration.

Then she thought of Ominis, and the quiet weight in his voice when he spoke about his family. You choose differently every day.

A soft knock interrupted her.

She opened the door.

No one stood there. Only a folded scrap of parchment lay on the floor.

Breakfast. Don't vanish.

Sebastian.

Despite everything, she smiled.

Footsteps approached from the stairwell.

Ominis stopped outside her door.

“I was told Sebastian had already found you.”

“He left a note.”

“I see.” There was the faintest amusement in his voice.

“Are you ready?” Samira asked.

Ominis was quiet.

“No.”

She waited.

“But I think there is a difference between being ready and deciding to go anyway.”

Samira smiled.

“Yes.”

She closed her door.

They began down the tower stairs together.

And for the first time that morning, Samira allowed herself to wonder what the day might become before trying to control it.`,choices:[['Go down with Ominis and talk before breakfast.','towerWalk',{ominis:1}],['Find Sebastian first and make him explain the “don’t vanish” note.','sebMorning',{sebastian:1}],['Take a few quiet minutes in the Ravenclaw common room.','commonRoom',{anne:1}]]},
  towerWalk:{chapter:'Episode XII · The Morning After',loc:'Ravenclaw Tower · Staircase',text:`They did not hurry.

The staircase curled downward through the tower, each landing opening briefly onto another piece of Ravenclaw's morning. A portrait complained about the cold. Two first-years hurried past discussing Hogsmeade. Somewhere below, the smell of toast drifted through the stone corridors.

For several flights, neither Samira nor Ominis spoke.

The silence was not uncomfortable.

That was what made her notice it.

“You're thinking too loudly,” Ominis said.

“I didn't say anything.”

“You didn't need to.”

Samira smiled.

They reached a landing and paused for passing students.

“My family home was never frightening because of the building,” Ominis said quietly. “It was frightening because everyone inside it behaved as though cruelty were ordinary.”

Samira waited.

“Questions were disrespectful. Certain rooms were forbidden. Obedience was treated as knowledge.”

“And you hated that.”

“I hated that I believed it for a while.”

“You were young.”

“So were you when you learned adults can be wrong.”

That stayed with her.

They continued downward.

“I don't want the mausoleum to decide who I am,” Ominis said.

“It won't.”

“You cannot know that.”

“No.” Samira touched the railing. “But I know you get to decide what you do once you're inside.”

Ominis smiled faintly.

“That is considerably more useful.”

At the bottom, warmth spilled from the Great Hall.

Before entering, Ominis stopped.

“Whatever happens today, don't let the urgency about Anne make every decision for you.”

Samira understood.

Hope could become its own kind of danger.

She nodded.

Then they entered the Great Hall, where the ordinary life of Hogwarts was waiting for them as though nothing in the world had changed.`,choices:[['Sit with Ominis and talk over breakfast.','breakfast',{ominis:1}],['Go straight to Sebastian.','sebMorning',{sebastian:1}],['Ask Ominis to stay beside her while they face the day together.','breakfast',{anne:1,ominis:1}]]},
  commonRoom:{chapter:'Episode XII · The Morning After',loc:'Ravenclaw Tower · Common Room',text:`Samira stayed upstairs for a few more minutes.

The Ravenclaw common room was quiet enough that she could hear the fire settling in its grate. Winter light moved across the blue-and-bronze furnishings. An unfinished chess game waited on a table, one piece lying on its side as though someone had left in the middle of an argument.

She opened her father's notes.

Not to solve them.

Just to look.

His handwriting was familiar enough to hurt. Corrections crowded the margins. Questions were crossed out and replaced with better questions. He had not known the answer when he began. He had simply refused to stop looking.

“Are you planning to interrogate that parchment all morning?”

Samira looked up.

Amit stood behind her. Samantha Dale was beside him with two cups of tea.

“You both appear suspiciously awake.”

“Some of us are responsible,” Amit said.

“Some of us were dragged out of bed,” Samantha corrected.

Samira laughed.

For a while they talked about ordinary things: classes, Quidditch gossip, the weather, a professor who had apparently assigned too much reading for a Saturday.

Then Amit glanced at the notes.

“You don't have to tell us,” he said. “But if you need someone to notice when you're about to do something spectacularly dangerous, Ravenclaw has a long and proud tradition of that.”

Samantha nodded.

“You don't have to make every problem yours alone.”

There was no romance in the words. No hidden tension. Just friendship.

Samira closed the notes.

“I'm going to Hogsmeade.”

“Good,” Amit said.

Samantha raised an eyebrow. “Are you actually going to enjoy yourself?”

“I'll try.”

“That,” Amit said, “is a much healthier plan.”

They remained by the window a little longer.

When Samira finally stood, she felt less like someone carrying a secret through Hogwarts and more like a Ravenclaw student who happened to have a difficult day ahead.

For the first time in several days, she was not thinking only about who might be waiting for her.

She was thinking about who would still be there when the day was over.`,choices:[['Stay a little longer with Amit and Samantha.','breakfast',{anne:1}],['Thank them and meet Sebastian and Ominis.','breakfast',{ominis:1}],['Head to the Great Hall and let the day begin.','breakfast',{sebastian:1}]]},
  sebMorning:{chapter:'Episode XII · The Morning After',loc:'Hogwarts · Entrance Hall',text:`Sebastian was waiting beneath the great staircase.

He looked as though he had been there for some time.

“You wrote ‘don't vanish.’”

“I did.”

“Why?”

“Because you have a habit of disappearing into libraries when you're worried.”

“That is unfairly accurate.”

“I've had practice.”

For a moment, students moved around them and neither spoke.

Then Sebastian lowered his voice.

“I meant what I said last night. You're not carrying this alone.”

Samira looked towards the doors. Cold light spilled across the floor.

“I'm still worried.”

“I know.”

“You're still going to tell me to be careful.”

“Yes.”

“And you're still going to do something reckless five minutes later.”

“Almost certainly.”

She laughed.

He smiled, then grew serious.

“Did you sleep?”

“A little.”

“And you?”

“Enough.”

“That's not an answer.”

He sighed. “Three hours.”

“Sebastian.”

“I know.”

He unfolded a copy of his diagram.

The seventh point remained open, but around it he had drawn a thin incomplete circle.

“A boundary,” he said.

“Not an anchor.”

“Exactly.”

Samira studied it.

“You worked since last night.”

“I couldn't stop thinking about what the missing point meant.”

He looked at her.

“Whatever we find in that mausoleum, we don't force it to give us an answer.”

“Agreed.”

“Even if it looks like the answer to Anne's curse?”

“Especially then.”

Something eased in his expression.

Behind them came Ominis's voice.

“I sincerely hope neither of you has decided to solve the entire problem before breakfast.”

Sebastian folded the diagram.

“No promises.”

Samira smiled.

For one brief moment, the three of them were simply students standing in Hogwarts on a winter morning.

Then the doors opened.

Cold air swept into the hall.

The day was waiting.`,choices:[['Ask Sebastian to show the revised diagram over breakfast.','breakfast',{sebastian:1}],['Tell him you are glad he made the seventh point a boundary.','breakfast',{anne:1,sebastian:1}],['Join Ominis and leave the planning for later.','hogsmeade',{ominis:1}]]},
  breakfast:{chapter:'Episode XII · The Morning After',loc:'Great Hall · Saturday Morning',text:`Breakfast lasted longer than Samira expected.

That was deliberate.

No one suggested rushing through it.

The Great Hall was bright with winter light, the enchanted ceiling showing a pale sky above the long tables. Plates appeared and vanished. Students argued over weekend plans. Somewhere near the doors, someone was already discussing which shop in Hogsmeade had the best sweets.

Samira sat with Amit and Samantha for part of the meal, then with Sebastian and Ominis. The groups did not compete for her attention. They simply existed around her, and that made the morning feel more like her life again.

Sebastian eventually spread his revised diagram beside his plate.

Ominis listened as he explained the incomplete seventh point.

“Not a source,” Sebastian said. “A boundary.”

“A witness,” Ominis corrected.

Samira looked between them.

“Then we don't know which interpretation is right.”

“No,” Ominis said. “Which means we do not choose one because it would be convenient.”

Anne's name was not spoken.

It did not need to be.

Samira folded the diagram.

“We go to Hogsmeade. We take our time. We find the mausoleum. We read the journal. And if the answer isn't safe, we don't use it.”

Sebastian nodded.

Ominis did too.

The agreement was quiet.

That made it stronger.

When breakfast finally ended, they did not immediately leave the castle. They collected what they needed. Coats. Gloves. Notes. A lantern. The diagram. A small pouch of reagents Sebastian insisted might be useful.

At the entrance, Samira looked back once.

Hogwarts stood behind her, warm and familiar.

Ahead waited Hogsmeade, then the road beyond it, then a mausoleum belonging to a family that had spent generations hiding something.

Sebastian opened the door.

Ominis stepped beside Samira.

“Ready?” Sebastian asked.

Samira breathed in the cold air.

“No.”

Ominis smiled.

“Good answer.”

Together, they stepped outside.`,choices:[['Walk with all three together towards Hogsmeade.','hogsmeade',{anne:1}],['Ask for a slower walk and talk privately with Ominis on the way.','walkOm',{ominis:1}],['Ask Sebastian what he changed in the diagram.','walkSeb',{sebastian:1}]]},
  walkOm:{chapter:'Episode XII · The Road Out',loc:'Road to Hogsmeade',text:`Ominis walked beside Samira while Sebastian went a little ahead.

The castle disappeared slowly behind them.

First the towers became smaller. Then the windows were only points of light. Finally the road curved and Hogwarts vanished behind the trees.

The silence beyond the grounds felt different.

Less protected.

More honest.

“You don't have to talk,” Ominis said.

“I know.”

“And yet you are thinking about Anne.”

“Always.”

He nodded.

“I understand.”

They walked several minutes before Samira asked, “Are you afraid of what we'll find?”

“Yes.”

The honesty surprised her.

“Why?”

“Because I know my family well enough to know that people don't hide harmless things for generations.”

Samira looked at him.

“And because some part of me is afraid I'll recognise myself in what they did.”

“You won't.”

“You cannot know that.”

“I know you well enough to know you care what happens after the choice.”

Ominis was quiet.

“That,” he said, “is a dangerous compliment.”

“Perhaps.”

Ahead, Sebastian turned and called that Hogsmeade was only a few minutes away.

Ominis lowered his voice.

“When we reach the village, I want you to enjoy at least one ordinary thing.”

“Such as?”

“Tea. A sweet. Complaining about the cold. Anything.”

Samira smiled.

“I'll try.”

“Good.”

They continued towards the distant lights of Hogsmeade.

For the first time that day, the mausoleum felt far away.

And Samira decided not to be sorry about that.`,choices:[['Stop in Hogsmeade for tea before continuing.','hogsmeade',{ominis:1}],['Catch up with Sebastian and ask about his diagram.','walkSeb',{sebastian:1}],['Let the quiet continue until Hogsmeade.','hogsmeade',{anne:1}]]},
  walkSeb:{chapter:'Episode XII · The Road Out',loc:'Road to Hogsmeade',text:`Sebastian waited until Samira caught up.

For a while they walked without speaking.

Snow crunched beneath their boots. Bare branches moved in the wind. Ahead, Hogsmeade smoke rose in thin grey columns against the sky.

“You really changed the diagram,” Samira said.

“I did.”

“Why?”

“Because I kept looking at the missing point as though something had been left out.”

“And?”

“And I realised something might have been left out on purpose.”

He tapped the folded parchment.

“The empty space is doing work.”

Samira smiled.

“That sounds like something a Ravenclaw would say.”

“I'll take that as an insult.”

“It wasn't.”

They walked on.

After a while Sebastian said, “I keep thinking about what happens if we find the answer.”

Samira looked at him.

“You're usually the one who wants answers.”

“I know.”

His expression turned serious.

“But an answer isn't automatically a solution.”

That mattered.

Perhaps more than the diagram.

The road dipped, and Hogsmeade came fully into view.

Sebastian glanced at her.

“We'll do this properly.”

“Slowly?”

“Slowly.”

She nodded.

And neither of them hurried the rest of the way.`,choices:[['Ask Sebastian to stop in Hogsmeade before the mausoleum.','hogsmeade',{sebastian:1}],['Tell him you appreciate that he is thinking beyond the answer itself.','hogsmeade',{anne:1,sebastian:1}],['Catch up with Ominis and walk together.','walkOm',{ominis:1}]]},
  hogsmeade:{chapter:'Episode XII · Hogsmeade Weekend',loc:'Hogsmeade · Main Street',text:`Hogsmeade was louder than Samira expected.

Students filled the street in winter coats. Shop windows glowed warmly against the pale afternoon. Somewhere nearby, a door opened and released the smell of cinnamon and hot chocolate into the cold air.

For a few minutes, they did nothing about the mausoleum.

They stopped.

They bought tea.

Sebastian complained that the cup was too hot and then drank it anyway. Ominis quietly identified the shopkeeper's music before Samira realised it was playing. Samira laughed at both of them.

It was a small thing.

That was precisely why it mattered.

The three of them stood beneath a shop awning while snow began to fall again.

Samira watched students pass.

She wondered whether any of them knew how strange it was to be standing in the middle of an ordinary Hogsmeade afternoon while carrying a plan that might decide Anne's future.

“Five more minutes,” she said.

Sebastian looked at her.

“Five?”

“Five.”

Ominis nodded.

“Then five.”

They stayed.

No revelations.

No spells.

No dramatic discoveries.

Just warmth in their hands and snow collecting on the shoulders of their coats.

When the five minutes were gone, Samira put down her cup.

“Now we go.”

They left the village by the western road.

The sounds of Hogsmeade faded behind them.

The path narrowed.

The trees grew thicker.

And with every step, the ordinary world fell farther away.`,choices:[['Continue towards the Gaunt estate together.','mausoleumRoad',{anne:1}],['Ask Ominis to explain exactly what the blood wards may do.','mausoleumRoad',{ominis:2}],['Ask Sebastian to keep the diagram ready as they travel.','mausoleumRoad',{sebastian:2}]]},
  mausoleumRoad:{chapter:'Episode XII · Beyond Hogsmeade',loc:'Road to the Gaunt Estate',text:`The walk beyond Hogsmeade took longer than Samira expected.

The road became little more than a track between bare trees. Snow softened the edges of the world. Their footsteps were sometimes the only sound.

Sebastian stopped being impatient.

Ominis stopped pretending he was calm.

Samira stopped pretending she was not afraid.

It was, strangely, a relief.

They talked as they walked.

About the map.

About the family.

About what they would do if the journal contained nothing useful.

About what they would do if it contained too much.

“We don't split up,” Samira said.

“No,” Sebastian agreed.

“We don't activate anything just because it responds to us.”

“Agreed,” said Ominis.

“And if Anne is somehow connected to the ritual—”

“We stop,” Sebastian said immediately.

Samira looked at him.

He held her gaze.

“We stop,” he repeated.

The estate appeared between the trees just before dusk.

The main house stood dark in the distance.

The mausoleum was farther away, half hidden among old yew trees.

Ominis slowed.

Samira heard his breath change.

“That's it.”

No one answered.

They continued.

The closer they came, the older the stone looked.

The door bore no name.

Only a family crest worn nearly smooth by weather.

Ominis lifted his wand.

“Once we open this, there is no pretending we don't know what we are looking for.”

Samira stepped beside him.

“Then we don't pretend.”

Sebastian came to her other side.

The three stood before the door.

The wind moved through the yew branches.

Then Ominis placed his hand against the stone.`,choices:[['Let Ominis open the blood ward while Samira watches the pattern.','mausoleumGate',{ominis:2}],['Ask Sebastian to study the crest before the ward is opened.','mausoleumGate',{sebastian:1}],['Take one last moment outside and agree on the rules.','mausoleumGate',{anne:1}]]},
  mausoleumGate:{chapter:'Episode XIII · The Seventh Anchor',loc:'Gaunt Mausoleum · Outer Door',text:`Ominis did not open the door immediately.

He listened.

The rest of them waited.

The silence became so complete that Samira could hear snow landing on her sleeve.

Then Ominis whispered a spell.

Nothing happened.

He tried again, changing one word.

A thin line of light appeared beneath his palm.

It travelled through the crest like a vein waking beneath skin.

Samira watched the pattern.

It was not one ward.

It was several, layered together.

A warning ward.

A blood ward.

And something else she could not identify.

“Don't touch the centre,” Ominis said.

“I wasn't going to.”

“I know.”

Sebastian leaned closer without touching it.

“The outer ring is incomplete.”

Ominis went still.

“Show me.”

Sebastian pointed.

One section had been deliberately broken.

Samira felt a chill.

“The seventh point.”

“Perhaps,” Ominis said. “Or perhaps the family wanted the door to remember who should never enter.”

The ward pulsed.

A voice—not a living voice, but an old magical imprint—whispered from inside the stone.

“Blood remembers.”

Ominis's face tightened.

Samira stepped closer.

“Then let it remember us correctly.”

Ominis breathed out.

The ward opened.

The door moved inward with a sound like stone dragged across centuries.

Cold air emerged.

Not ordinary cold.

The cold of a room that had not expected visitors.

They entered.

The door remained open behind them for only a few seconds before beginning to close.

Sebastian caught it.

“Not yet.”

They waited until the last trace of daylight was gone from the floor.

Then the door shut.

Darkness surrounded them.

Samira raised her wand.

A narrow staircase appeared.

Somewhere below, something answered the light.`,choices:[['Descend together, slowly.','journalRoom',{anne:1}],['Ask Ominis to listen to the wards before taking the first step.','journalRoom',{ominis:2}],['Ask Sebastian to check the staircase for traps.','journalRoom',{sebastian:2}]]},
  journalRoom:{chapter:'Episode XIII · The Seventh Anchor',loc:'Gaunt Mausoleum · Inner Crypt',text:`The staircase ended in a chamber lined with shelves.

Not graves.

Records.

Hundreds of them.

Journals. Ledgers. Rolled maps. Boxes sealed with wax. Names carved into the stone above each alcove.

Samira moved slowly between them.

The room felt less like a tomb than an archive someone had buried on purpose.

Sebastian lifted a ledger and blew dust from the cover.

Ominis stopped near the centre.

“I can hear a ward beneath the floor.”

Samira crouched.

There was a seam in the stone.

A compartment.

They opened it together.

Inside lay a single journal bound in dark leather.

No title.

No name.

Only seven small marks stamped into the cover.

Samira did not touch it.

“Should we?”

Ominis shook his head.

“Not yet.”

Sebastian looked at him.

“That might be the wisest thing you've said all day.”

Ominis gave him a flat look.

Samira smiled despite herself.

They prepared the room first. Wards checked. Exit located. Wands ready. Only then did Samira place her fingers on the journal.

It opened by itself.

The first pages were blank.

Then silver writing appeared.

Not a spell.

Not an instruction.

A record.

A description of an earlier experiment.

Samira read slowly.

The more she read, the more the room seemed to contract around them.

The first attempt had not failed because there was too little power.

It had failed because someone had been used as the seventh point.

A living witness had been turned into a vessel.

Samira stopped.

Sebastian's voice was barely audible.

“Samira.”

She turned the page.

Another line appeared.

The vessel remembered everything.

Ominis went pale.

“What does it say next?”

Samira read.

And then the journal turned the page on its own.`,choices:[['Keep reading, no matter how disturbing it becomes.','journalNext',{anne:1}],['Stop and let Ominis examine the writing.','journalNext',{ominis:2}],['Ask Sebastian to copy the page before turning it.','journalNext',{sebastian:2}]]},
  journalNext:{chapter:'Episode XIII · The Seventh Anchor',loc:'Gaunt Mausoleum · The Journal',text:`The page did not turn immediately.

For several seconds, nothing happened.

Then silver writing appeared.

THE SEVENTH ANCHOR WAS NEVER MEANT TO BE A PLACE.

Samira read it twice.

Ominis whispered, “It was a witness.”

Another line formed.

A LIVING RESONANCE MAY OBSERVE A COMPLETED CIRCUIT WITHOUT BECOMING PART OF IT.

Sebastian leaned closer.

“The vessel must remain empty.”

Samira thought of Anne.

She did not say her name.

She did not need to.

The final warning appeared slowly, each letter bright against the old page.

DO NOT COMPLETE THE CIRCUIT WITH A CURSED SOUL.

No one spoke.

The sentence was not a solution.

It was a boundary.

Beneath it, a map appeared: a staircase, a corridor, a circular chamber, seven pillars—and beneath them, the words:

THE PLACE WHERE THE FIRST ATTEMPT FAILED.

Samira closed her eyes for one breath.

Then she opened them.

“We don't rush.”

Sebastian nodded.

Ominis did too.

For the first time, all three of them understood that the most important thing they could do was refuse to repeat the mistake.`,choices:[['Study the map carefully before moving.','slowMap',{anne:1}],['Ask Ominis what he knows about the first failed attempt.','slowGaunt',{ominis:2}],['Close the journal and make sure everyone is ready.','slowReady',{sebastian:1,ominis:1}]]},
  slowMap:{chapter:'Episode XIII · The Seventh Anchor',loc:'Gaunt Mausoleum · The Map',text:`They stayed in the archive room until the candle had burned low.

No one wanted to descend merely because the map had appeared.

Samira studied every line. Sebastian copied the architecture. Ominis listened to the stone.

The lower level was older than the mausoleum above it. Six chambers surrounded a circular room. The seventh point was drawn not as a circle, but as an open eye.

“A witness,” Samira said.

Ominis nodded.

“The chamber was designed so someone could observe without entering the circuit.”

Sebastian traced the route with one finger above the page.

“There are doors around the circle.”

“Observation rooms,” Ominis said.

The realisation made Samira uneasy.

Someone had expected the ritual to go wrong.

Perhaps someone had even designed the structure around that possibility.

“We go slowly,” Samira said.

“No heroics,” Sebastian agreed.

“No improvising with cursed magic,” Ominis added.

They gathered their things.

The staircase waited.

Darkness rose from below like cold breath.

Samira took the first step.

Sebastian followed.

Ominis came last.

And this time, no one pretended they were simply exploring.`,choices:[['Descend together, one step at a time.','lowerChambers',{anne:1}],['Ask Ominis to lead through the old ward.','lowerChambers',{ominis:2}],['Ask Sebastian to check every step.','lowerChambers',{sebastian:2}]]},
  slowGaunt:{chapter:'Episode XIII · The Seventh Anchor',loc:'Gaunt Mausoleum · The Old Record',text:`Ominis stood with one hand on the journal.

“The first attempt was not an experiment in the way you mean,” he said.

“My family believed a curse could be separated from its victim by moving it into a prepared vessel.”

Sebastian's expression hardened.

“And the vessel?”

“Was meant to be empty.”

Ominis paused.

“It wasn't.”

The silence became heavy.

“Someone was already inside it,” Samira said.

“Yes.”

“And they became the anchor.”

“Yes.”

Ominis looked at the journal.

“The warning is not theoretical. It is the warning my family should have written generations earlier.”

Samira understood the distinction now.

They were not searching for a stronger ritual.

They were searching for a way to prevent the wrong outcome.

Sebastian looked at her.

“That sounds like your father.”

“Perhaps that's why we're here.”

They turned towards the stairs.

Not to find a miracle.

To understand a mistake.`,choices:[['Descend and find the chamber where it happened.','lowerChambers',{anne:2}],['Ask Ominis to stay beside Samira on the stairs.','lowerChambers',{ominis:2}],['Ask Sebastian to carry the journal.','lowerChambers',{sebastian:2}]]},
  slowReady:{chapter:'Episode XIII · The Seventh Anchor',loc:'Gaunt Mausoleum · Before the Descent',text:`They took their time.

Sebastian checked the straps on his bag. Ominis memorised the map. Samira reread the warning until she could almost feel the words beneath her skin.

No cursed soul.

No forced vessel.

No completed seventh point.

Three boundaries.

“Anything else?” Sebastian asked.

Samira looked at Ominis.

“Not yet,” he said.

The words mattered.

Not yet meant they did not have to solve everything tonight.

Not yet meant they could stop.

Not yet meant Anne would not be placed in danger simply because they were desperate for an answer.

Samira breathed out.

“Then we go.”

Sebastian opened the old door.

Cold air rose from the staircase.

The first step disappeared into darkness.

Samira took it.

Then another.

Behind her came Sebastian, then Ominis.

The door above them closed slowly.

By the time they reached the bottom, Hogwarts felt impossibly far away.`,choices:[['Continue into the lower chambers.','lowerChambers',{anne:1}],['Stop and listen before moving on.','lowerChambers',{ominis:1}],['Ask Sebastian to light the chamber.','lowerChambers',{sebastian:1}]]},
  lowerChambers:{chapter:'Episode XIV · What the Gaunts Buried',loc:'Gaunt Mausoleum · Lower Chambers',text:`The staircase did not end where the map suggested.

It curved beneath the foundations and continued through stone older than the mausoleum. Smooth blocks became rough rock. Veins of black stone caught the wandlight and returned it as a dull silver shimmer.

Samira slowed.

“Do you feel that?”

Sebastian did.

Ominis had already stopped.

“It isn't the resonance,” he said.

“What is it?”

“An echo of it.”

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

Stone shifted beneath their feet.

A door appeared.

Ominis raised his wand.

“This is the chamber.”

“How can you know?” Sebastian asked.

“Because I can hear the wards remembering.”

“Remembering what?”

Ominis swallowed.

“A scream.”

No one moved.

Then Samira stepped forward.

Not because she was fearless.

Because turning back without understanding would leave Anne's future in the hands of a mistake none of them had named yet.

The door opened.

Inside stood six intact pillars and a seventh broken at the base. A stone basin occupied the centre.

Nothing moved.

Nothing glowed.

And yet the room felt occupied.

Samira took one slow breath.

They had reached the place where the warning had begun.`,choices:[['Enter the chamber together.','basin',{anne:1}],['Ask Ominis to listen before crossing the threshold.','basinOm',{ominis:2}],['Ask Sebastian to inspect the broken seventh pillar.','basinSeb',{sebastian:2}]]}
};

function render(scene){
 const story=$('#story'),choices=$('#choices');if(!story||!choices)return;
 const s=get()||{history:[],sebastian:0,ominis:0,anne:0};
 $('#chapterLabel').textContent=scene.chapter;$('#location').textContent=scene.loc;$('#progress').textContent=`Scene ${(s.history||[]).length+1} · ${scene.chapter.split('·')[0].trim()}`;
 story.innerHTML=scene.text.trim().split(/\n\s*\n/).map(p=>`<p>${esc(p).replace(/\n/g,'<br>')}</p>`).join('');
 choices.innerHTML='';
 scene.choices.forEach(([label,target,delta],i)=>{const b=document.createElement('button');b.type='button';b.className='choice';b.innerHTML=`<span class="choice-num">${i+1}</span><span>${esc(label)}</span>`;b.dataset.slow=target;b.dataset.delta=JSON.stringify(delta);b.dataset.label=label;choices.appendChild(b)});
 $('#relationshipState').textContent=`Sebastian · ${s.sebastian||0} | Ominis · ${s.ominis||0} | Anne · ${s.anne||0}`;
 window.scrollTo({top:0,behavior:'smooth'});
}
function current(){const s=get();return s&&scenes[s.node]?s:null}
function apply(){const s=current();if(s)render(scenes[s.node])}
document.addEventListener('click',e=>{const b=e.target.closest('#choices button[data-slow]');if(!b)return;const s=current();if(!s)return;e.preventDefault();e.stopImmediatePropagation();const delta=JSON.parse(b.dataset.delta||'{}');s.history=Array.isArray(s.history)?s.history:[];s.history.push({from:s.node,label:b.dataset.label,to:b.dataset.slow,at:Date.now()});s.sebastian=(s.sebastian||0)+(delta.sebastian||0);s.ominis=(s.ominis||0)+(delta.ominis||0);s.anne=(s.anne||0)+(delta.anne||0);s.node=b.dataset.slow;put(s);apply()},true);
function start(){apply()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else setTimeout(start,0);
})();
