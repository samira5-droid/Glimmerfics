(() => {
  'use strict';

  const $ = (s) => document.querySelector(s);
  const KEY = 'glimmerfics-hogwarts-v12';
  const blank = { node: 'morning', sebastian: 0, ominis: 0, anne: 0, history: [], custom: [] };
  let state;
  try { state = JSON.parse(localStorage.getItem(KEY) || 'null') || structuredClone(blank); } catch (_) { state = structuredClone(blank); }
  const save = () => localStorage.setItem(KEY, JSON.stringify(state));
  const esc = (s) => { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; };
  const S = (id, loc, episode, text, choices) => ({ id, loc, episode, text, choices });

  // V12 deliberately begins AFTER the PDF's final library scene.
  // The PDF is the canon/story bible: nothing here repeats its discoveries.
  const nodes = {
    morning: S('morning','Ravenclaw Tower · The Next Morning','Episode XII · Hogsmeade Weekend',`
Morning arrived without asking whether Samira had slept.

She had not.

Long after she had left the library, her father's pages had remained behind her eyes: the resonance notes, Sebastian's diagram, the seven points, and the plan they had finally settled on. Hogsmeade weekend. The Gaunt family mausoleum. The journal. The catacomb maps.

It should have felt like a beginning.

Instead, it felt like standing at the edge of something enormous and trying very hard not to look down.

Samira sat on the edge of her bed and watched pale winter light move across the floor of Ravenclaw Tower. Somewhere below, students were already making their way towards breakfast. Voices travelled through the stairwell. Someone laughed. A door slammed.

Normal Hogwarts sounds.

For a few seconds, she almost let herself believe this was an ordinary Saturday.

Then she remembered Sebastian's pinky promise.

The ridiculous little gesture had mattered more than she wanted to admit. So had the way he had looked at her afterwards, as if she had asked him for something much larger than sleep.

And then there was Ominis.

You choose differently every day.

She could still hear his voice.

Samira dressed slowly.

Today they would leave the castle.

Today they would go looking for the Gaunt family's secrets.

And somewhere beneath all of it was the same reason that had brought them here in the first place.

Anne.

Samira stood.

There was no point being afraid of a day that had already begun.`,[
      ['Find Sebastian before breakfast.','sebMorning',{sebastian:1}],
      ['Find Ominis and ask whether he is truly ready for the mausoleum.','omMorning',{ominis:1}],
      ['Go to breakfast alone and give herself a moment before the day begins.','breakfast',{anne:1}]
    ]),

    sebMorning: S('sebMorning','Hogwarts · Entrance Hall','Episode XII · Hogsmeade Weekend',`
Samira found Sebastian in the Entrance Hall, exactly where she expected him not to be.

He was leaning against one of the pillars with the expression of someone who had been awake for far too long and intended to deny it if questioned.

“You look terrible,” Samira said.

His mouth twitched.

“Good morning to you too.”

“You promised.”

“I did sleep.”

“How long?”

Sebastian considered lying. She could see the calculation happen.

“Enough.”

“That isn't a number.”

“It is when one is trying to avoid an argument.”

She folded her arms.

He sighed.

“Three hours.”

“Sebastian.”

“I know.”

For a moment neither of them spoke.

Then his expression softened.

“I meant what I said last night, you know.”

Samira's heartbeat stumbled.

“About the research?”

“About not carrying it alone.”

He looked towards the great doors.

“The mausoleum is dangerous. The Gaunts don't exactly have a reputation for welcoming visitors. If something goes wrong, I want you behind me.”

Samira raised an eyebrow.

“That sounds suspiciously like an order.”

“It was supposed to.”

She smiled despite herself.

Sebastian noticed.

That made his own smile appear.

Then the doors opened and cold air swept through the Entrance Hall.

Ominis's voice came from behind them.

“If the two of you are finished pretending this is a romantic morning stroll, we should leave.”

Sebastian closed his eyes.

Samira laughed.

For one small moment, the weight of the curse seemed farther away.`,[
      ['Tease Sebastian about being protective.','protective',{sebastian:1}],
      ['Thank him quietly for staying beside her.','quietSeb',{sebastian:2}],
      ['Join Ominis and head for Hogsmeade.','hogsmeade',{ominis:1}]
    ]),

    omMorning: S('omMorning','Hogwarts · Entrance Hall','Episode XII · Hogsmeade Weekend',`
Ominis was waiting near the doors.

He had his wand in one hand and his coat buttoned against the cold. He looked composed, but Samira had spent enough time around him to notice the signs he thought he hid well.

His thumb kept moving along the edge of his wand.

“You're nervous,” she said.

“I am cautious.”

“You're nervous.”

A small pause.

“Perhaps.”

Samira stepped closer.

“About the mausoleum?”

“About what we might find there.”

He turned his face towards her.

“My family kept secrets because they believed secrets were a form of power. Some of them were.”

“And some?”

“Some were simply cruel.”

The answer sat between them.

Samira remembered what he had told her in the library: that he knew what he was not, even if he was still learning what he was.

“You don't have to become them to open their door,” she said.

Ominis went very still.

“No,” he said quietly. “I don't.”

Footsteps approached.

Sebastian appeared with two scarves over one arm.

“Right. Before either of you becomes unbearably philosophical, we're going to Hogsmeade.”

Ominis gave a faint smile.

Samira caught herself smiling too.

The three of them stepped outside.`,[
      ['Walk beside Ominis on the way to Hogsmeade.','walkOm',{ominis:1}],
      ['Walk beside Sebastian and ask about the diagram.','walkSeb',{sebastian:1}],
      ['Walk between them and insist this remains a team effort.','hogsmeade',{anne:1}]
    ]),

    breakfast: S('breakfast','Great Hall · Saturday Morning','Episode XII · Hogsmeade Weekend',`
Samira went to breakfast alone.

It was the sort of decision that sounded insignificant until she realised how much she needed it.

She sat beneath the Ravenclaw banners and let herself listen.

Students argued over Quidditch. Someone complained about an essay. At the far end of the table, two younger students were trying to decide whether a particularly ugly pastry was meant to be eaten or displayed.

For ten minutes, Samira did nothing about curses, resonance, vaults, or dead researchers.

She simply ate breakfast.

It helped.

Not enough.

But enough to breathe.

When she finally looked towards the entrance, Sebastian was standing there.

Ominis was beside him.

Sebastian caught her eye and lifted a hand.

Ominis tilted his head, as though he had somehow known exactly where she was sitting.

Samira stood.

Whatever happened today, she would not face it alone.

They had already made the plan.

Now they had to trust it.`,[
      ['Join them and leave for Hogsmeade.','hogsmeade',{anne:1}],
      ['Ask them to wait while she checks one last reference in the library.','lastReference',{anne:1,ominis:1}],
      ['Tell them she is ready, then let them choose the route.','hogsmeade',{sebastian:1,ominis:1}]
    ]),

    lastReference: S('lastReference','Hogwarts Library · One Last Look','Episode XII · Hogsmeade Weekend',`
The library smelled of dust, ink, and the faint trace of last night's candles.

Samira returned to the table where everything had changed.

She did not reopen the resonance experiment. She did not touch the silver line. She simply searched the ordinary bookshelves for one thing: references to the Gaunt family mausoleum.

Ominis had warned her that the family kept their records private.

Her father's notes had taught her something else.

Private did not mean invisible.

After several minutes she found an old architectural register tucked behind a volume on magical estates.

The Gaunt name appeared in the index.

Samira opened to the page.

The mausoleum was listed beneath the family estate, but beside it someone had written a handwritten note:

The lower chambers were sealed after the incident.

No date.

No explanation.

Just that.

Sebastian read over her shoulder.

“That's encouraging.”

Ominis took the page carefully.

His expression changed.

“I know that handwriting.”

Samira looked at him.

“Whose?”

“My grandfather's.”

The room suddenly felt colder.

Ominis folded the page.

“We should go.”`,[
      ['Ask Ominis what the incident was.','incident',{ominis:2}],
      ['Ask Sebastian whether he can find another copy of the register.','register',{sebastian:1}],
      ['Put the page away and leave before they attract attention.','hogsmeade',{anne:1}]
    ]),

    incident: S('incident','Hogwarts Library · The Handwriting','Episode XII · Hogsmeade Weekend',`
Ominis did not answer immediately.

He touched the edge of the folded page as though he could feel the years in it.

“My family records rarely mention incidents directly,” he said. “They preferred euphemisms.”

“Such as?” Samira asked.

“Correction. Purification. Necessary silence.”

Sebastian's expression hardened.

“And what did this one mean?”

Ominis exhaled.

“I don't know.”

Samira noticed the difference this time.

He was not avoiding the answer.

He genuinely did not know.

“But I know where we can find out.”

He tapped the register.

“The lower chambers.”

A silence followed.

Sebastian broke it.

“Then that's where we're going.”

Ominis turned towards him.

“You understand that the lower chambers are the part of the mausoleum my family never discusses.”

“Yes.”

“And that there may be blood wards.”

“Yes.”

“And that we could discover something we cannot undo.”

Sebastian glanced at Samira.

“We already have.”

Ominis looked between them.

Then he nodded.

“Very well.”

Samira tucked the register back onto the shelf.

The three of them left the library together.`,[
      ['Ask Ominis to teach Samira how to recognise a Gaunt blood ward.','wards',{ominis:2}],
      ['Ask Sebastian to stay close when they enter the lower chambers.','protective',{sebastian:1}],
      ['Tell them Anne is the reason they are doing this.','hogsmeade',{anne:2}]
    ]),

    protective: S('protective','Road to Hogsmeade · Winter Air','Episode XII · Hogsmeade Weekend',`
The path to Hogsmeade was bright with thin winter sunlight.

Snow had settled into the edges of the road, and the cold made every breath visible.

Sebastian walked slightly ahead.

Not enough to be obvious.

Enough that Samira noticed.

“You're doing it again,” she said.

He glanced back.

“Doing what?”

“Trying to put yourself between me and danger.”

“I thought we'd established that I'm protective.”

“You established it. I did not agree.”

Sebastian smiled.

“You don't have to.”

For a few steps, there was only the crunch of snow.

Then he spoke more quietly.

“I know what you think.”

“Do you?”

“That I'm reckless.”

“You are.”

“That I take things too far.”

“You do.”

“That I shouldn't be trusted around anything involving forbidden magic.”

Samira looked at him.

“I trust you.”

He stopped walking.

She had not meant to say it so simply.

Sebastian's expression changed.

Not dramatically.

That was what made it matter.

“Samira,” he said.

Ominis called from ahead.

“If you're both finished standing in the snow, Hogsmeade is this way.”

Sebastian smiled again.

But this time he did not hide how much her words had affected him.`,[
      ['Take Sebastian’s hand for a moment before continuing.','handSeb',{sebastian:2}],
      ['Tease him until the tension breaks.','hogsmeade',{sebastian:1}],
      ['Catch up with Ominis and leave Sebastian to wonder.','hogsmeade',{ominis:1}]
    ]),

    quietSeb: S('quietSeb','Hogwarts · Entrance Hall','Episode XII · Hogsmeade Weekend',`
Samira touched Sebastian's sleeve.

“Thank you.”

He looked at her.

“For what?”

“For staying.”

The answer was simple.

Sebastian's expression was not.

He glanced down at her hand on his sleeve, then back to her face.

“I told you,” he said softly. “You're not doing this alone.”

Something warm moved through Samira's chest.

Before she could answer, he offered his hand.

Not dramatically.

Not as a promise.

Just there.

An invitation.

She looked at it.

Then at him.

And took it.

His fingers closed around hers.

For a few seconds, neither of them said anything.

Then Ominis cleared his throat from several feet away.

“I can hear both of you being suspiciously quiet.”

Sebastian laughed.

Samira let go before her face could betray her.

“Come on,” she said.

They headed for Hogsmeade.`,[
      ['Walk with Sebastian and keep the moment between them.','hogsmeade',{sebastian:2}],
      ['Tell Ominis what happened.','walkOm',{ominis:1}],
      ['Say nothing and focus on the plan.','hogsmeade',{anne:1}]
    ]),

    walkSeb: S('walkSeb','Road to Hogsmeade','Episode XII · Hogsmeade Weekend',`
Sebastian kept the conversation practical.

The diagram.

The seven anchors.

The stabilisation pattern.

The possibility that the Gaunt journal might explain why the seventh point had been left incomplete.

But every so often, Samira caught him looking at her instead of the road.

“What?” she asked eventually.

“Nothing.”

“That wasn't a nothing look.”

He smiled.

“You're observant.”

“You've made that very difficult not to notice.”

Sebastian's expression softened.

“I was thinking about last night.”

“The research?”

“Partly.”

Samira waited.

He looked away.

“Your father trusted you with something dangerous. I think I understand why.”

“Why?”

“Because you don't stop asking questions.”

He paused.

“And because you care about people even when it would be easier not to.”

Samira felt the compliment more deeply than she expected.

Ahead, the roofs of Hogsmeade appeared through the trees.

Their conversation ended without needing to.`,[
      ['Ask what else he was thinking about.','handSeb',{sebastian:1}],
      ['Change the subject and ask about the mausoleum.','hogsmeade',{anne:1}],
      ['Tell him she was thinking about him too.','handSeb',{sebastian:2}]
    ]),

    walkOm: S('walkOm','Road to Hogsmeade','Episode XII · Hogsmeade Weekend',`
Ominis walked at Samira's pace.

For a while they said nothing.

The silence was comfortable.

That was becoming something she associated with him: the absence of pressure.

“You are thinking very loudly,” Ominis said.

Samira smiled.

“I didn't know that was possible.”

“With you, apparently it is.”

She looked at him.

“Are you frightened?”

Ominis considered the question.

“Yes.”

She had expected a joke.

Instead, he gave her the truth.

“I am frightened of opening that door and finding that my family was worse than I thought.”

“And if they were?”

“Then I will know.”

He stopped walking.

“Knowing is sometimes the cruelest part.”

Samira stood beside him.

“You don't have to face it alone.”

A small smile touched his face.

“That sounds familiar.”

“It happens to be good advice.”

“It is.”

He offered his arm.

“Shall we?”

Samira linked her arm through his.

Together, they continued towards Hogsmeade.`,[
      ['Stay close to Ominis and let the quiet continue.','hogsmeade',{ominis:2}],
      ['Ask whether he regrets agreeing to come.','regretOm',{ominis:1}],
      ['Ask him what he hopes the journal contains.','journalHope',{ominis:2}]
    ]),

    regretOm: S('regretOm','Road to Hogsmeade','Episode XII · Hogsmeade Weekend',`
“Do you regret agreeing to this?” Samira asked.

Ominis was quiet.

“No.”

The answer came quickly.

Then he corrected himself.

“I regret that my family left us with a reason to do it.”

Samira squeezed his arm.

He noticed.

His expression softened.

“I don't know what will happen in that mausoleum,” he said. “But I know one thing.”

“What?”

“I would rather go with you than let you go there without me.”

The words were quiet.

They landed heavily anyway.

Hogsmeade was close now.

The first rooftops appeared through the trees.

Samira looked ahead, but she could not stop thinking about what he had said.`,[
      ['Tell Ominis she would choose him too.','hogsmeade',{ominis:2}],
      ['Deflect with a joke before she says too much.','hogsmeade',{ominis:1}],
      ['Say that she is glad he came.','hogsmeade',{ominis:2}]
    ]),

    journalHope: S('journalHope','Road to Hogsmeade','Episode XII · Hogsmeade Weekend',`
“I hope it contains a map,” Ominis said.

Samira laughed.

“That is very practical.”

“It is also what we need.”

“And what do you want it to contain?”

His expression became distant.

“Something that explains why my family was so afraid of resonance.”

“Your family knew about it?”

“I suspect they knew more than they ever admitted.”

He lowered his voice.

“If the journal connects the Gaunt vault to the resonance anchors, then your father's research may not have been independent.”

Samira's steps slowed.

“You think he knew about them?”

“I think he may have discovered something my family had spent generations hiding.”

The implication was enormous.

Anne's curse suddenly felt connected to a history much older than any of them had understood.

Hogsmeade waited ahead.

The day was only beginning.`,[
      ['Ask Ominis what he thinks the Gaunts were hiding.','hogsmeade',{ominis:1,anne:1}],
      ['Promise that whatever they find, they will face it together.','hogsmeade',{ominis:2}],
      ['Focus on getting the journal first.','hogsmeade',{anne:1}]
    ]),

    handSeb: S('handSeb','Road to Hogsmeade','Episode XII · Hogsmeade Weekend',`
Samira reached for Sebastian's hand.

This time, she did not pretend it was accidental.

His fingers closed around hers immediately.

Neither of them spoke for several steps.

The cold air made the warmth of his hand feel strangely unreal.

“Is this a habit?” Sebastian asked.

“What?”

“You making promises without saying them.”

Samira looked at him.

“Maybe.”

His thumb brushed once across her knuckles.

“Then I hope you keep it.”

She smiled.

Ahead, Ominis called that they were nearly there.

Sebastian did not let go immediately.

Neither did Samira.`,[
      ['Keep holding his hand until they reach Hogsmeade.','hogsmeade',{sebastian:2}],
      ['Let go, but give him a knowing smile.','hogsmeade',{sebastian:1}],
      ['Invite Ominis to walk with them.','hogsmeade',{sebastian:1,ominis:1}]
    ]),

    register: S('register','Hogwarts Library · The Register','Episode XII · Hogsmeade Weekend',`
Sebastian found another reference buried in a catalogue of private magical estates.

This one contained a map.

Not a complete map.

Just the upper grounds of the Gaunt estate and a narrow path leading towards the family mausoleum.

At the bottom was a symbol Samira recognised immediately.

Seven circles.

One incomplete.

Her father's work again.

Sebastian stared at it.

“So he knew.”

“Or someone before him did,” Samira said.

Ominis touched the page.

His face tightened.

“There is something underneath the mausoleum.”

“How do you know?”

“I can hear the ink.”

Samira blinked.

“The ink?”

“The ward around the lower chambers is bleeding through the paper.”

Sebastian gave him a look.

“I have decided I am never getting used to that.”

Ominis ignored him.

“We have our route.”

Samira folded the map carefully.

“Then let's go.”`,[
      ['Leave for Hogsmeade immediately.','hogsmeade',{anne:1}],
      ['Ask Ominis what he means by a ward bleeding through ink.','wards',{ominis:1}],
      ['Ask Sebastian to memorise the map before they leave it behind.','hogsmeade',{sebastian:1}]
    ]),

    wards: S('wards','Road to Hogsmeade · Blood Wards','Episode XII · Hogsmeade Weekend',`
Ominis stopped beneath the trees.

“Blood wards respond to intent,” he explained. “That is why they are dangerous. A normal protective charm asks what you are doing. A blood ward asks who you are.”

Samira thought of the Gaunt name.

“And if it doesn't recognise us?”

“It may attack.”

Sebastian looked at him.

“Comforting.”

Ominis ignored the comment.

“I can open the first layer because I am family.”

“And the second?” Samira asked.

Ominis hesitated.

“That is the problem.”

Samira waited.

“The second layer may require a living descendant to willingly acknowledge the thing the family tried to hide.”

Sebastian's expression darkened.

“And what exactly did they hide?”

“We won't know until we reach the door.”

Samira looked between them.

“Then we reach the door.”

Ominis smiled faintly.

“You sound like Sebastian.”

“I am offended,” Sebastian said.

Samira laughed.

For a moment, the three of them stood together in the cold.

Then they continued towards Hogsmeade.`,[
      ['Ask Ominis whether Samira could help with the second ward.','wardChoice',{ominis:2}],
      ['Ask Sebastian to help Samira prepare a counter-charm.','counter',{sebastian:2}],
      ['Agree to follow Ominis’s lead once they reach the mausoleum.','hogsmeade',{ominis:1}]
    ]),

    wardChoice: S('wardChoice','Road to Hogsmeade · The Second Ward','Episode XII · Hogsmeade Weekend',`
“Could I help?” Samira asked.

Ominis turned towards her.

“You could.”

“Then I will.”

“You don't know what it will ask of you.”

“No.”

She held his gaze.

“But neither do you.”

A quiet smile appeared.

“No,” he admitted. “I don't.”

Sebastian stepped closer.

“Whatever it asks, neither of you answers alone.”

Samira looked at him.

Something about the certainty in his voice made her chest tighten.

Ominis nodded.

“Agreed.”

They walked on.`,[
      ['Tell them both that Anne is worth the risk.','hogsmeade',{anne:2}],
      ['Ask Sebastian to stay close to Samira during the ward opening.','hogsmeade',{sebastian:1}],
      ['Ask Ominis what he is afraid the ward will reveal.','regretOm',{ominis:1}]
    ]),

    counter: S('counter','Road to Hogsmeade · A Small Preparation','Episode XII · Hogsmeade Weekend',`
Sebastian drew his wand and began explaining the counter-charm in the snow.

It was not a spell to break the ward.

It was a spell to redirect the first strike if the ward rejected them.

“Your father would have called this inefficient,” Sebastian said.

“My father wasn't standing outside a Gaunt mausoleum.”

“Fair point.”

He corrected one of the runes.

Samira copied it with the tip of her wand.

Their hands nearly touched.

Neither moved immediately.

Sebastian looked at her.

“Ready?”

Samira nodded.

He smiled.

“Good.”

The spell faded into the snow.

For the first time that morning, she felt prepared.`,[
      ['Thank Sebastian with a small smile.','hogsmeade',{sebastian:1}],
      ['Ask him to promise he will not take the first hit himself.','promiseSeb',{sebastian:2}],
      ['Put the spell away and return to the plan.','hogsmeade',{anne:1}]
    ]),

    promiseSeb: S('promiseSeb','Road to Hogsmeade · Another Promise','Episode XII · Hogsmeade Weekend',`
“Promise me something.”

Sebastian raised an eyebrow.

“That sounds dangerous.”

“Don't throw yourself in front of the ward.”

He looked at her for a long moment.

Then he smiled.

“You really do like making me promise things.”

“Sebastian.”

“All right.”

He held out his little finger.

Samira stared at it.

“You cannot be serious.”

“I am completely serious.”

She hooked her finger around his.

“Promise.”

His voice softened.

“Promise.”

The gesture was absurdly familiar now.

And somehow, that made it matter more.`,[
      ['Keep the promise between them.','hogsmeade',{sebastian:2}],
      ['Tell Ominis about the promise when they catch up.','hogsmeade',{ominis:1}],
      ['Say that now they both have to survive the day.','hogsmeade',{sebastian:1,anne:1}]
    ]),

    hogsmeade: S('hogsmeade','Hogsmeade · Before the Road North','Episode XII · Hogsmeade Weekend',`
Hogsmeade was busy with students enjoying their freedom.

Shops glowed warmly against the cold. Voices carried through the streets. Somewhere nearby, someone was laughing far too loudly.

Samira looked at the village and realised how strange it was that they were about to leave all of this behind.

The others would spend the afternoon buying sweets and books.

They were going to a mausoleum.

Sebastian unfolded the map.

“The estate is north of here.”

Ominis nodded.

“The path is hidden from ordinary travellers.”

“Of course it is,” Sebastian muttered.

Samira looked at both of them.

The plan was simple.

Reach the estate.

Open the outer ward.

Find the family journal.

Find the catacomb maps.

Get out.

Simple plans had a habit of becoming something else at Hogwarts.

She took a breath.

“Ready?”

Sebastian nodded.

Ominis smiled faintly.

“Let's find out what the Gaunts were so desperate to hide.”`,[
      ['Take the hidden northern path immediately.','northPath',{anne:1}],
      ['Stop first and make everyone repeat the plan.','plan',{anne:1,ominis:1}],
      ['Ask for one quiet minute before they leave Hogsmeade.','quietMoment',{sebastian:1,ominis:1}]
    ]),

    plan: S('plan','Hogsmeade · The Plan','Episode XII · Hogsmeade Weekend',`
Samira made them repeat the plan.

Sebastian sighed theatrically.

“Ominis opens the first blood ward.”

“Ominis,” he added, “checks for the second.”

Samira nodded.

“I handle the counter-charm.”

“Correct.”

“We find the journal and maps.”

“And we leave,” Ominis finished.

Samira looked at them.

“And if something goes wrong?”

Sebastian answered first.

“We stay together.”

Ominis nodded.

“We stay together.”

The words settled something inside her.

Then they left Hogsmeade behind.`,[
      ['Take the northern path.','northPath',{anne:1}],
      ['Ask Sebastian to lead.','northPath',{sebastian:1}],
      ['Ask Ominis to lead them through the hidden route.','northPath',{ominis:1}]
    ]),

    quietMoment: S('quietMoment','Hogsmeade · Just Before Leaving','Episode XII · Hogsmeade Weekend',`
For one minute, none of them spoke about the mausoleum.

They stood at the edge of the village while snow drifted across the road.

Samira looked at Sebastian.

Then Ominis.

The two boys looked back.

“This matters,” she said.

Sebastian nodded.

“I know.”

Ominis added quietly, “We all do.”

Samira smiled.

“Then let's go.”

They stepped onto the northern path together.`,[
      ['Walk beside Sebastian.','northPath',{sebastian:1}],
      ['Walk beside Ominis.','northPath',{ominis:1}],
      ['Walk between them.','northPath',{sebastian:1,ominis:1}]
    ]),

    northPath: S('northPath','Hidden Path North of Hogsmeade','Episode XIII · The Gaunt Mausoleum',`
The path disappeared behind them almost immediately.

The sounds of Hogsmeade faded until there was only snow beneath their boots and the occasional creak of branches overhead.

The further they walked, the older the forest seemed.

Ominis slowed.

“We're close.”

Samira felt it too.

Not the resonance from the library.

Something colder.

A pressure against the edges of her magic.

Sebastian unfolded the map one final time.

“There.”

Between two rows of black trees stood a stone wall.

Beyond it, barely visible through the snow, was the Gaunt mausoleum.

Its roof was broken in places. Thorn-covered vines climbed the stone. The entrance was framed by two statues whose faces had been deliberately damaged.

Ominis stopped.

For the first time since leaving Hogwarts, he looked genuinely shaken.

Samira stepped closer.

“Are you all right?”

“Yes.”

He took a breath.

“No.”

Sebastian looked at him.

“We can turn back.”

Ominis shook his head.

“No. If we turn back now, the secrets remain exactly where my family left them.”

He raised his wand.

The air changed.

A thin red line appeared across the mausoleum door.

The blood ward had noticed him.`,[
      ['Let Ominis approach the first ward.','outerWard',{ominis:1}],
      ['Stand beside Ominis and support him silently.','supportOm',{ominis:2}],
      ['Prepare Sebastian’s counter-charm.','counterReady',{sebastian:1}]
    ]),

    supportOm: S('supportOm','Gaunt Mausoleum · The First Ward','Episode XIII · The Gaunt Mausoleum',`
Samira stood beside Ominis without touching him.

She did not need to.

He knew she was there.

His wand moved through the air in a precise pattern.

The red line on the door brightened.

Ominis whispered a word in Parseltongue.

The ward answered.

Stone groaned.

Sebastian raised his wand.

“Samira.”

“I know.”

The ward struck.

Samira cast the counter-charm.

Light flashed across the doorway.

For one terrifying second, the three spells locked together.

Then the red line split.

The outer ward opened.

Ominis lowered his wand.

His breathing was uneven.

Samira looked at him.

He nodded once.

“Still here.”

Sebastian gave a crooked smile.

“Good. I'd hate to have to explain to Anne that we lost you before finding anything useful.”

Ominis actually laughed.

The mausoleum door opened into darkness.`,[
      ['Enter together.','mausoleum',{anne:1}],
      ['Let Ominis enter first.','mausoleum',{ominis:1}],
      ['Let Sebastian enter first.','mausoleum',{sebastian:1}]
    ]),

    outerWard: S('outerWard','Gaunt Mausoleum · The First Ward','Episode XIII · The Gaunt Mausoleum',`
Ominis stepped towards the door.

The red ward tightened around him.

Samira could almost feel its attention.

“Do not interfere unless I ask,” Ominis said.

Sebastian frowned.

“That is an unpleasant sentence.”

Ominis ignored him.

He raised his wand.

A whisper moved through the stone.

The door recognised him.

The ward opened one inch.

Then stopped.

Ominis's expression hardened.

“It wants something.”

“What?” Samira asked.

“I don't know.”

The red line pulsed.

Samira stepped closer.

Her father's resonance mark appeared faintly beneath it.

All three saw it.

Sebastian whispered, “There it is.”

The missing connection.

Whatever the Gaunts had hidden, it was connected to her father's research.`,[
      ['Touch the resonance mark.','mausoleum',{anne:2}],
      ['Ask Ominis what the ward is asking for.','wardQuestion',{ominis:2}],
      ['Have Sebastian prepare the counter-charm.','counterReady',{sebastian:1}]
    ]),

    wardQuestion: S('wardQuestion','Gaunt Mausoleum · The First Ward','Episode XIII · The Gaunt Mausoleum',`
“What does it want?” Samira asked.

Ominis listened.

His face went pale.

“It wants an admission.”

“An admission of what?” Sebastian asked.

Ominis swallowed.

“That my family used the resonance chamber.”

Samira's heart beat faster.

“For what?”

“I don't know.”

The ward pulsed again.

Ominis whispered the admission.

The door opened.

Beyond it was a staircase descending into darkness.

On the first step, carved into the stone, was the same broken seventh mark from the library.`,[
      ['Go down together.','descent',{anne:1}],
      ['Ask Ominis whether he wants to stop.','descent',{ominis:2}],
      ['Ask Sebastian to compare the mark with his diagram.','markCompare',{sebastian:2}]
    ]),

    counterReady: S('counterReady','Gaunt Mausoleum · The Threshold','Episode XIII · The Gaunt Mausoleum',`
Sebastian drew the counter-charm across the doorway.

The spell settled like a thin veil over the stone.

“If anything moves,” he said, “we have three seconds.”

“Three?” Samira asked.

“I was trying to be optimistic.”

Ominis shook his head.

“You are impossible.”

“Still useful.”

Samira smiled.

The ward opened.

The three of them stepped forward together.

The darkness swallowed the daylight behind them.`,[
      ['Continue down the stairs.','descent',{anne:1}],
      ['Stay close to Sebastian.','descent',{sebastian:1}],
      ['Stay close to Ominis.','descent',{ominis:1}]
    ]),

    markCompare: S('markCompare','Gaunt Mausoleum · The Seventh Mark','Episode XIII · The Gaunt Mausoleum',`
Sebastian crouched beside the carved symbol.

He traced its shape without touching the stone.

“This is the same structure.”

Samira knelt beside him.

“But the seventh point is complete here.”

Ominis turned towards them.

“Then the break in the diagram wasn't a missing piece.”

Sebastian looked up.

“It was deliberate.”

Samira felt cold despite her coat.

Her father had not failed to complete the seventh point.

He had chosen not to.

“Why?” she whispered.

No one knew.

The staircase waited below.`,[
      ['Go down and find out.','descent',{anne:1}],
      ['Ask Sebastian what he thinks the completed point means.','descent',{sebastian:2}],
      ['Ask Ominis what his family may have been protecting.','descent',{ominis:2}]
    ]),

    mausoleum: S('mausoleum','Gaunt Mausoleum · Entrance Hall','Episode XIII · The Gaunt Mausoleum',`
The mausoleum was colder inside than it had been outside.

Their footsteps echoed against the stone.

There were no candles.

No portraits.

No family names.

Only empty alcoves and old iron doors.

Then Samira saw it.

A small table against the far wall.

On it rested a single leather-bound journal.

Sebastian moved first.

Ominis caught his sleeve.

“Wait.”

The journal was surrounded by a circle of silver dust.

A trap.

Or a ward.

Possibly both.

Samira stepped closer.

The resonance beneath her ribs returned.

Seven slow beats.

The same pattern Ominis had heard in the library.`,[
      ['Ask Ominis to listen to the journal.','journalListen',{ominis:2}],
      ['Ask Sebastian to examine the silver circle.','journalTrap',{sebastian:2}],
      ['Stand between them and wait for the resonance to reveal itself.','journalReveal',{anne:1}]
    ]),

    journalListen: S('journalListen','Gaunt Mausoleum · The Journal','Episode XIII · The Gaunt Mausoleum',`
Ominis stood before the journal.

He listened.

The silence stretched.

Then he whispered, “It's not empty.”

Sebastian frowned.

“What does that mean?”

“There is a memory inside it.”

Samira's pulse quickened.

“Can you open it?”

“Not safely.”

The journal's cover shifted by itself.

A page turned.

Then another.

The writing appeared one line at a time.

Not ink.

Silver light.

A sentence formed.

THE SEVENTH ANCHOR WAS NEVER MEANT TO BE A PLACE.

Samira stared.

Sebastian whispered, “Then what is it?”

The journal turned another page.

The answer had not yet appeared.`,[
      ['Wait for the next page.','journalNext',{anne:1}],
      ['Ask Ominis to close the journal before it activates.','journalClose',{ominis:2}],
      ['Ask Sebastian what he thinks the seventh anchor could be.','journalNext',{sebastian:2}]
    ]),

    journalTrap: S('journalTrap','Gaunt Mausoleum · The Journal','Episode XIII · The Gaunt Mausoleum',`
Sebastian crouched beside the silver circle.

“It's not a trap.”

Ominis tilted his head.

“You sound disappointed.”

“It's a lock.”

Samira looked closer.

Seven tiny points were hidden in the dust.

Six were dark.

One was glowing.

Sebastian's face changed.

“Samira.”

She knew.

The glowing point matched the resonance she could feel beneath her ribs.

The journal was responding to her.

Not to the Gaunt bloodline.

To her.`,[
      ['Step into the circle.','journalReveal',{anne:2}],
      ['Ask Sebastian to find a safer way to activate it.','journalSafe',{sebastian:2}],
      ['Ask Ominis what the Gaunts would have wanted hidden from her.','journalReveal',{ominis:1}]
    ]),

    journalReveal: S('journalReveal','Gaunt Mausoleum · The Resonant Journal','Episode XIII · The Gaunt Mausoleum',`
Samira stepped closer.

The seven beats returned.

One.

Two.

Three.

The silver circle brightened.

Four.

Five.

Sebastian moved beside her.

Six.

Ominis whispered, “Samira, wait.”

Seven.

The journal opened.

A wave of magic passed through the chamber.

For one impossible instant, Samira saw her father's study.

Not a memory she recognised.

A moment she had never witnessed.

Her father stood over the resonance diagram.

Someone else stood opposite him.

The face remained hidden.

But the voice was clear.

“You cannot cure a curse by destroying its anchor.”

Her father answered:

“Then we must move the anchor.”

The vision broke.

Samira stumbled.

Sebastian caught her.

Ominis had gone completely still.

“What?” Samira asked.

“I heard it too,” he whispered.

The journal remained open.

A map waited on the next page.`,[
      ['Take the map and search the lower chambers.','lowerChambers',{anne:1}],
      ['Ask Ominis about the voice he heard.','voiceOm',{ominis:2}],
      ['Ask Sebastian what moving an anchor could mean for Anne.','anchorSeb',{sebastian:2,anne:1}]
    ]),

    journalNext: S('journalNext','Gaunt Mausoleum · The Seventh Anchor','Episode XIII · The Gaunt Mausoleum',`
The next page turned.

THE SEVENTH ANCHOR WAS NEVER MEANT TO BE A PLACE.

It was a person.

Samira stopped breathing.

Sebastian stared at the words.

Ominis said nothing.

The journal continued.

A living resonance can become the centre of a completed circuit. The danger is not in the power itself, but in what the circuit chooses to hold.

Samira's hand went instinctively to her chest.

Her father's research.

The silver line.

The seven beats.

Her visions.

Anne's curse.

They were not separate.

They had never been separate.

The journal revealed a map beneath the writing.

A route into the lower chambers.

And one final warning:

DO NOT COMPLETE THE CIRCUIT WITH A CURSED SOUL.`,[
      ['Ask what the warning means for Anne.','lowerChambers',{anne:2}],
      ['Ask whether Samira herself is the seventh anchor.','anchorSamira',{anne:1}],
      ['Close the journal and leave before they activate anything else.','leaveMausoleum',{ominis:1,sebastian:1}]
    ]),

    journalSafe: S('journalSafe','Gaunt Mausoleum · A Safer Method','Episode XIII · The Gaunt Mausoleum',`
Sebastian studied the circle again.

“We can activate it without forcing it.”

Ominis turned towards him.

“How?”

“Resonance.”

Samira understood immediately.

“Use the pattern my father described.”

Sebastian nodded.

“Exactly.”

Together they reproduced the seven-point sequence without completing the final connection.

The journal opened.

No violent wave of magic.

No vision.

Just a map.

Sebastian exhaled.

“That is considerably better.”

Samira looked at the lower chambers marked beneath the mausoleum.

The map showed a circular room beneath them.

At its centre was a single symbol.

The broken seventh point.`,[
      ['Take the map and descend.','lowerChambers',{anne:1}],
      ['Ask Sebastian to copy the map first.','lowerChambers',{sebastian:1}],
      ['Ask Ominis what the central room was used for.','lowerChambers',{ominis:1}]
    ]),

    voiceOm: S('voiceOm','Gaunt Mausoleum · The Voice','Episode XIII · The Gaunt Mausoleum',`
Ominis was pale.

“That voice,” Samira said gently. “You recognised it.”

“I recognised the magic.”

He swallowed.

“It belonged to someone who used the Gaunt chamber long before I was born.”

“Who?”

“I don't know.”

His hand tightened around his wand.

“But I know what the chamber was for.”

Sebastian looked at him.

“What?”

“Moving curses.”

The words seemed to make the air colder.

Ominis continued.

“My family believed a curse could be transferred from one living anchor to another.”

Samira's stomach dropped.

“And Anne?”

“I don't know whether her curse can be moved.”

He looked directly towards her.

“But if your father's research was trying to interrupt the process, he may have been trying to prevent exactly that.”`,[
      ['Ask what the lower chamber could teach them.','lowerChambers',{ominis:2,anne:1}],
      ['Ask Sebastian whether they should stop.','lowerChambers',{sebastian:1}],
      ['Say they need to know the truth for Anne.','lowerChambers',{anne:2}]
    ]),

    anchorSeb: S('anchorSeb','Gaunt Mausoleum · The Moving Anchor','Episode XIII · The Gaunt Mausoleum',`
Sebastian stared at the map.

“If the anchor can move,” he said slowly, “then the curse might be separable from the person.”

Samira looked at him.

“That's good.”

“Maybe.”

His voice was careful.

“It could also mean someone has to receive it.”

Ominis's expression hardened.

“No.”

Sebastian nodded.

“I know.”

Samira looked between them.

Nobody said the obvious thing.

The obvious thing was Samira herself.

The journal had called the seventh anchor a person.

Her father had left the seventh point incomplete.

And the resonance responded to her.`,[
      ['Say the seventh anchor might be Samira.','anchorSamira',{anne:1}],
      ['Refuse to speculate until they know more.','lowerChambers',{anne:1}],
      ['Ask Sebastian to promise he will not attempt the transfer himself.','promiseTransfer',{sebastian:2}]
    ]),

    anchorSamira: S('anchorSamira','Gaunt Mausoleum · The Seventh Anchor','Episode XIII · The Gaunt Mausoleum',`
Samira said it aloud.

“I might be the seventh anchor.”

Neither boy answered.

Sebastian looked furious.

Ominis looked frightened.

Then Ominis spoke.

“No.”

Samira blinked.

“You don't know that.”

“I know that I will not let a piece of parchment decide what you are.”

Sebastian stepped closer.

“And neither will I.”

The certainty in his voice steadied her.

The journal could reveal clues.

It could reveal history.

It could even reveal something about her father's final work.

But it did not get to decide her fate.

Not yet.

Samira closed the journal.

“We find the lower chamber,” she said. “Then we decide what it means.”`,[
      ['Descend together.','lowerChambers',{anne:1}],
      ['Take a moment with Sebastian before descending.','sebQuiet',{sebastian:2}],
      ['Take a moment with Ominis before descending.','omQuiet',{ominis:2}]
    ]),

    promiseTransfer: S('promiseTransfer','Gaunt Mausoleum · A Promise','Episode XIII · The Gaunt Mausoleum',`
“Promise me you won't try it.”

Sebastian looked at Samira.

“If we find a way to transfer the curse, you mean.”

“Yes.”

He was silent.

Then he held out his little finger.

Samira stared at it.

“You're becoming predictable.”

“Perhaps.”

She hooked her finger around his.

“I promise.”

His eyes softened.

“Good.”

Ominis looked away, giving them privacy without comment.

Samira knew, suddenly, that whatever happened below, this mattered.

The promise.

The people beside her.

The reason they had come.`,[
      ['Descend.','lowerChambers',{anne:1}],
      ['Thank Sebastian quietly.','lowerChambers',{sebastian:1}],
      ['Ask Ominis to lead them down.','lowerChambers',{ominis:1}]
    ]),

    sebQuiet: S('sebQuiet','Gaunt Mausoleum · Before the Descent','Episode XIII · The Gaunt Mausoleum',`
Samira caught Sebastian's hand before he turned away.

He looked at her.

“I meant it,” she said.

“About the promise?”

“About trusting you.”

His expression softened.

“I know.”

For a moment the mausoleum disappeared.

There was only his hand around hers and the quiet understanding that had grown between them without either of them naming it.

Then he squeezed her fingers.

“Come on.”

They joined Ominis at the stairs.`,[
      ['Descend together.','lowerChambers',{sebastian:1,anne:1}],
      ['Let Ominis lead.','lowerChambers',{ominis:1}],
      ['Tell Sebastian she is glad he is here.','lowerChambers',{sebastian:2}]
    ]),

    omQuiet: S('omQuiet','Gaunt Mausoleum · Before the Descent','Episode XIII · The Gaunt Mausoleum',`
Samira stood beside Ominis.

“Are you all right?”

“No.”

She smiled faintly.

“At least you're honest.”

“I am trying.”

He turned towards her.

“I don't know what I will find below.”

“Neither do I.”

“And yet you're going.”

“Because Anne needs us.”

A pause.

“And because you need someone beside you.”

Ominis's expression softened.

“Thank you.”

Samira touched his arm.

Then they joined Sebastian at the stairs.`,[
      ['Descend together.','lowerChambers',{ominis:1,anne:1}],
      ['Let Ominis lead.','lowerChambers',{ominis:2}],
      ['Ask Sebastian to stay close.','lowerChambers',{sebastian:1}]
    ]),

    lowerChambers: S('lowerChambers','Gaunt Mausoleum · Lower Chambers','Episode XIV · What the Gaunts Buried',`
The stairs seemed to go on forever.

The air changed with every step.

Colder.

Heavier.

More magical.

At the bottom, they found a circular chamber.

Seven pillars surrounded a stone basin.

Six were dark.

The seventh glowed faintly.

Samira stopped.

The resonance beneath her ribs answered.

Sebastian whispered, “Don't move.”

Ominis lifted his wand.

“I hear something.”

A heartbeat.

Not Samira's.

Not Sebastian's.

Not his own.

Something beneath the stone basin was alive.

Then the seventh pillar illuminated.

A voice moved through the chamber.

Samira.

Her name again.

The same voice from the vision.`,[
      ['Approach the basin with both boys beside her.','basin',{anne:1}],
      ['Ask Ominis to identify the voice.','basinOm',{ominis:2}],
      ['Ask Sebastian to inspect the seven pillars.','basinSeb',{sebastian:2}]
    ]),

    basin: S('basin','Gaunt Mausoleum · The Resonance Chamber','Episode XIV · What the Gaunts Buried',`
Samira approached the basin.

The stone beneath it was carved with a pattern she knew immediately.

Her father's hand.

Not his handwriting.

His magic.

The same resonance pattern he had spent years studying.

Sebastian stood on one side of her.

Ominis on the other.

The seventh pillar brightened.

A memory appeared above the basin.

Her father stood in this chamber.

He looked exhausted.

Someone was with him.

A woman whose face remained hidden beneath a hood.

“We cannot use Anne,” the woman said.

Samira's blood ran cold.

Her father answered:

“No. The child is already cursed. The chamber would consume her.”

The memory broke.

Samira could barely breathe.

Sebastian caught her shoulder.

Ominis whispered, “We need to leave.”

But the seventh pillar was still glowing.

And beneath it, another door had appeared.`,[
      ['Open the new door.','hiddenDoor',{anne:1}],
      ['Leave the chamber with what they have learned.','returnMausoleum',{anne:1}],
      ['Ask Ominis whether the woman could have been a Gaunt.','basinOm',{ominis:1}]
    ]),

    basinOm: S('basinOm','Gaunt Mausoleum · The Voice Beneath the Stone','Episode XIV · What the Gaunts Buried',`
Ominis listened for a long moment.

“Yes,” he said.

Samira looked at him.

“You know her?”

“No.”

He swallowed.

“But I recognise the spellwork.”

“From your family?” Sebastian asked.

“From the oldest records.”

Ominis's face was pale.

“The woman in the memory was trying to stop my family from using the chamber.”

Samira looked towards the hidden door.

“And she knew about Anne.”

“Yes.”

The seventh pillar pulsed again.

A message appeared on the stone.

THE CHILD WAS NEVER THE KEY.

Samira stared.

“Then what is?”

The answer did not appear.

Not yet.`,[
      ['Open the hidden door.','hiddenDoor',{anne:1}],
      ['Ask Ominis to search the old records in the chamber.','recordSearch',{ominis:2}],
      ['Ask Sebastian what the message means.','meaningSeb',{sebastian:2}]
    ]),

    basinSeb: S('basinSeb','Gaunt Mausoleum · Seven Pillars','Episode XIV · What the Gaunts Buried',`
Sebastian walked around the chamber.

He counted the pillars.

“Six active anchors,” he said. “One observer.”

Samira looked at him.

“Observer?”

“The seventh doesn't hold power.”

He pointed at the glowing pillar.

“It records it.”

Ominis turned towards him.

“Then it isn't an anchor.”

“No.”

Sebastian's eyes narrowed.

“It is a witness.”

Samira felt something inside her settle.

The seventh point was not meant to consume her.

It might be meant to show her what had happened.

The chamber had not chosen her as a sacrifice.

It had chosen her as the person who could see.`,[
      ['Open the hidden door.','hiddenDoor',{anne:1}],
      ['Ask Sebastian whether her father designed the seventh point for her.','meaningSeb',{sebastian:2}],
      ['Ask Ominis what a witness means in Gaunt magic.','recordSearch',{ominis:1}]
    ]),

    meaningSeb: S('meaningSeb','Gaunt Mausoleum · The Witness','Episode XIV · What the Gaunts Buried',`
Sebastian looked at Samira for a long moment.

“I think your father knew you might find this.”

The idea frightened her more than she expected.

“He left it for me?”

“Maybe.”

Ominis spoke quietly.

“Or he left it for whoever could finish what he started.”

Samira looked at the seventh pillar.

A witness.

Not a sacrifice.

Not a vessel.

A witness.

The distinction mattered.

It meant there was another way.

She just had to find it.`,[
      ['Open the hidden door.','hiddenDoor',{anne:1}],
      ['Search the chamber for your father’s name.','recordSearch',{anne:1}],
      ['Ask Sebastian to stay with her while she searches.','recordSearch',{sebastian:2}]
    ]),

    recordSearch: S('recordSearch','Gaunt Mausoleum · Hidden Records','Episode XIV · What the Gaunts Buried',`
They searched the chamber together.

Behind the sixth pillar, Ominis found a narrow compartment in the stone.

Inside was a bundle of papers.

Most were too damaged to read.

One was not.

Samira unfolded it.

Her father's name was written at the top.

Underneath was a single sentence:

The resonance can separate what the curse binds, but only if the living anchor remains a witness rather than a vessel.

Samira's hands shook.

Sebastian read it over her shoulder.

“That's it.”

“Not quite,” Ominis said.

He had found another line beneath the fold.

The separation must occur at the seventh point, where the circuit can be observed without being completed.

Anne might be saved.

Not cured by force.

Not by transferring the curse.

Separated from it.`,[
      ['Take the papers and open the hidden door.','hiddenDoor',{anne:2}],
      ['Ask Ominis whether the Gaunts ever attempted this.','gauntAttempt',{ominis:2}],
      ['Ask Sebastian what they still need to make it work.','nextStep',{sebastian:2,anne:1}]
    ]),

    gauntAttempt: S('gauntAttempt','Gaunt Mausoleum · The Failed Attempt','Episode XIV · What the Gaunts Buried',`
Ominis read the damaged record.

“Yes,” he said.

His voice was barely audible.

“They attempted it once.”

“What happened?” Samira asked.

“The anchor became the vessel.”

Silence.

“That is why the seventh point was broken in your father's diagram,” Ominis continued. “He wasn't afraid of the chamber. He was afraid of repeating the mistake.”

Samira closed her eyes.

Then opened them.

“Then we don't repeat it.”

Sebastian nodded.

“Exactly.”

For the first time, the three of them had something better than hope.

They had a method.`,[
      ['Find the hidden door and continue.','hiddenDoor',{anne:2}],
      ['Ask Ominis what safeguards his family used.','nextStep',{ominis:2}],
      ['Ask Sebastian to build the stabilisation pattern from the notes.','nextStep',{sebastian:2}]
    ]),

    nextStep: S('nextStep','Gaunt Mausoleum · The Method','Episode XIV · What the Gaunts Buried',`
Sebastian laid the papers beside his diagram.

“The stabiliser needs three things.”

Samira listened.

“A witness.”

He pointed to her.

“A controlled resonance.”

He pointed to the seven pillars.

“And a second magical signature capable of interrupting the curse without absorbing it.”

Ominis understood first.

“Two wands.”

“Two people,” Sebastian corrected.

Samira looked between them.

“Sebastian and Ominis.”

Neither argued.

The method was becoming clear.

Samira would remain the witness.

They would shape the resonance from opposite sides.

Anne's curse would be isolated rather than transferred.

It was still dangerous.

But now the danger had a boundary.`,[
      ['Open the hidden door and search for the final component.','hiddenDoor',{anne:2}],
      ['Ask Sebastian to refine the stabiliser.','stabiliser',{sebastian:2}],
      ['Ask Ominis to find the Gaunt safeguard.','stabiliser',{ominis:2}]
    ]),

    stabiliser: S('stabiliser','Gaunt Mausoleum · The Stabiliser','Episode XIV · What the Gaunts Buried',`
They worked by the light of their wands.

Sebastian reconstructed the stabilisation pattern from fragments of Samira's father's notes.

Ominis translated the Gaunt safeguards hidden in the older records.

Samira watched both.

The work was strangely peaceful.

No dramatic revelation.

No vision.

Just three people trying to solve an impossible problem.

Sebastian occasionally asked her to check a symbol.

Ominis asked whether a particular phrase from her father's notes matched the Gaunt wording.

Piece by piece, the pattern became whole.

Then the hidden door opened by itself.

Beyond it was a narrow chamber.

At the centre sat a stone box.

On its lid was the final symbol.

The seventh point.

Complete.

But beside it was a second mark.

A serpent.

Ominis stopped.

“That,” he whispered, “is not a Gaunt symbol.”`,[
      ['Open the stone box.','stoneBox',{anne:1}],
      ['Ask Ominis whose serpent mark it is.','serpent',{ominis:2}],
      ['Ask Sebastian to inspect the box for traps.','stoneBox',{sebastian:2}]
    ]),

    serpent: S('serpent','Gaunt Mausoleum · The Serpent Mark','Episode XIV · What the Gaunts Buried',`
Ominis stepped closer.

“It is older than my family.”

“Older than the Gaunts?” Sebastian asked.

“Yes.”

His voice had changed.

The mark was not merely decorative.

It was a warning.

Or an invitation.

Samira looked at the box.

“Can you open it?”

Ominis shook his head.

“Not alone.”

Sebastian smiled faintly.

“Good thing we're three.”

Ominis almost smiled.

Then the box clicked.

It opened by itself.`,[
      ['Look inside.','stoneBox',{anne:1}],
      ['Wait for the magic to settle first.','stoneBox',{ominis:1}],
      ['Ask Sebastian to check the contents before anyone touches them.','stoneBox',{sebastian:1}]
    ]),

    stoneBox: S('stoneBox','Gaunt Mausoleum · The Last Piece','Episode XIV · What the Gaunts Buried',`
Inside the stone box was a small crystal.

It was not bright.

It did not glow.

It simply seemed to hold the darkness around it in place.

Samira recognised the feeling immediately.

Resonance.

Her father's notes had described it as a stabilising medium.

A substance capable of carrying magical frequency without becoming the source of it.

Sebastian picked up the note beneath it.

“Found it.”

Ominis touched the crystal carefully.

“This was hidden here for a reason.”

Samira looked at the three pieces they now possessed: the journal, the catacomb map, and the crystal.

Enough to attempt the method.

Not enough to guarantee success.

But enough to give Anne a chance.`,[
      ['Take the crystal and return to Hogwarts.','returnMausoleum',{anne:2}],
      ['Ask whether they should test the crystal here first.','testCrystal',{anne:1}],
      ['Promise each other that no one attempts the ritual alone.','teamPromise',{sebastian:1,ominis:1,anne:1}]
    ]),

    testCrystal: S('testCrystal','Gaunt Mausoleum · A Controlled Test','Episode XIV · What the Gaunts Buried',`
They tested the crystal without activating the full circuit.

Sebastian created a small resonance field.

Ominis monitored the magical frequency.

Samira stood outside the circle.

The crystal responded immediately.

It absorbed the resonance.

Then released it unchanged.

Sebastian stared.

“This could work.”

Ominis nodded.

“It can carry the frequency without becoming part of it.”

Samira felt hope rise in her chest.

Real hope.

The dangerous kind.

The kind that could hurt if it failed.

But for the first time, Anne's curse did not feel untouchable.

They had a method.

They had a stabiliser.

They had the truth.

Now they needed to get home.`,[
      ['Return to Hogwarts.','returnMausoleum',{anne:2}],
      ['Ask Sebastian to keep the crystal safe.','returnMausoleum',{sebastian:1}],
      ['Ask Ominis to keep the journal safe.','returnMausoleum',{ominis:1}]
    ]),

    teamPromise: S('teamPromise','Gaunt Mausoleum · The Promise','Episode XIV · What the Gaunts Buried',`
“No one does this alone,” Samira said.

Sebastian nodded.

“Agreed.”

Ominis added, “No matter what the chamber shows us.”

Samira looked at them.

The three of them stood beneath the completed seventh point.

No one was a sacrifice.

No one was a vessel.

They were simply three people who had chosen to stay.

Samira held out her hand.

Sebastian placed his over it.

Ominis added his.

It was not a grand oath.

It was better.

It was simple.

Together.`,[
      ['Return to Hogwarts.','returnMausoleum',{anne:2}],
      ['Keep the moment quiet and leave together.','returnMausoleum',{sebastian:1,ominis:1}],
      ['Say Anne’s name before they go.','returnMausoleum',{anne:2}]
    ]),

    returnMausoleum: S('returnMausoleum','Road Back to Hogsmeade','Episode XV · What Comes Next',`
They left the mausoleum before sunset.

The forest looked different on the way back.

Perhaps because they had changed.

Samira carried the journal.

Sebastian carried the crystal.

Ominis carried the map.

Three pieces of a puzzle her father had started long before any of them understood what they were looking for.

They did not talk much.

They did not need to.

Eventually, Hogsmeade appeared through the trees.

Students were still laughing in the streets.

The world had continued while they were underground.

Samira found that strangely comforting.

Tomorrow, they would return to Hogwarts.

They would hide the crystal.

They would reconstruct the full resonance circuit.

And then they would have to decide whether they were ready to try it on Anne's curse.

Tonight, they had earned one quiet evening.`,[
      ['Spend the evening with Sebastian.','eveningSeb',{sebastian:2}],
      ['Spend the evening with Ominis.','eveningOm',{ominis:2}],
      ['Stay with both of them and talk through what they found.','eveningAll',{sebastian:1,ominis:1,anne:1}]
    ]),

    eveningSeb: S('eveningSeb','Hogsmeade · Evening','Episode XV · What Comes Next',`
Sebastian found a quiet corner away from the busiest streets.

For once, he did not talk about the research.

He simply sat beside Samira.

“You're thinking,” he said.

“I always am.”

“I know.”

She looked at him.

“You're thinking too.”

He smiled.

“Unfortunately.”

They sat in silence.

Then Sebastian reached for her hand.

“You were brave today.”

“So were you.”

He shook his head.

“No. I was terrified.”

Samira squeezed his hand.

“That's usually what brave means.”

He laughed softly.

Then he looked at her for a long moment.

There was something in his expression she could not quite name.

Or perhaps she could.

She simply wasn't ready to say it aloud.`,[
      ['Stay close to Sebastian.','newDawn',{sebastian:2}],
      ['Tell him she is glad he stayed.','newDawn',{sebastian:2}],
      ['Break the tension with a joke.','newDawn',{sebastian:1}]
    ]),

    eveningOm: S('eveningOm','Hogsmeade · Quiet Street','Episode XV · What Comes Next',`
Ominis chose the quieter road back through the village.

The snow had begun again.

“You were right,” he said.

“About what?”

“That secrets are heavier when you carry them alone.”

Samira smiled.

“You're allowed to admit I was right.”

“I have just done so. Don't become greedy.”

She laughed.

Ominis smiled.

Then his expression grew thoughtful.

“I am glad you came.”

“To Hogsmeade?”

“To the mausoleum.”

He turned towards her.

“I would not have opened that door alone.”

Samira's chest tightened.

“You don't have to anymore.”

He nodded.

“I know.”`,[
      ['Stay beside Ominis a little longer.','newDawn',{ominis:2}],
      ['Tell him she trusts him.','newDawn',{ominis:2}],
      ['Ask him to walk back with her.','newDawn',{ominis:1}]
    ]),

    eveningAll: S('eveningAll','Hogsmeade · Three at the Table','Episode XV · What Comes Next',`
They found a quiet table and spread the notes between them.

No spell was cast.

No door opened.

They simply talked.

Sebastian explained the stabiliser.

Ominis explained the Gaunt safeguards.

Samira explained what she had seen in the chamber.

Again and again, they returned to the same conclusion.

The ritual would not be about overpowering Anne's curse.

It would be about separating the curse from the person without creating a new vessel.

That was the difference between what the Gaunts had attempted and what Samira's father had been trying to build.

For the first time, the three of them could see a path forward.

It was narrow.

Dangerous.

But real.

Samira looked at Sebastian and Ominis.

“Tomorrow?”

Sebastian nodded.

Ominis smiled.

“Tomorrow.”`,[
      ['Return to Hogwarts together.','newDawn',{anne:1,sebastian:1,ominis:1}],
      ['Make one final promise before leaving.','promiseAll',{anne:1,sebastian:1,ominis:1}],
      ['Let the evening end quietly.','newDawn',{anne:1}]
    ]),

    promiseAll: S('promiseAll','Hogsmeade · One Final Promise','Episode XV · What Comes Next',`
Samira placed her hand on the table.

“No one becomes the vessel.”

Sebastian placed his hand over hers.

“No one goes into the chamber alone.”

Ominis added his hand.

“And no one hides a discovery that could change the plan.”

Samira smiled.

“Agreed.”

Three hands.

Three promises.

One impossible hope.

Outside, the snow continued to fall.

Inside, for the first time in a long while, Samira allowed herself to imagine Anne without the curse.

Not healed yet.

Not safe yet.

But possible.

And sometimes possible was enough to keep going.`,[
      ['Return to Hogwarts.','newDawn',{anne:2,sebastian:1,ominis:1}],
      ['Stay a little longer together.','newDawn',{sebastian:1,ominis:1}],
      ['Begin planning the ritual immediately.','newDawn',{anne:2}]
    ]),

    newDawn: S('newDawn','Hogwarts · The Following Morning','Episode XVI · The Seventh Point',`
The next morning, Hogwarts looked exactly as it always did.

That was the strange part.

The castle had no idea what they had found.

Students hurried through corridors. Professors assigned essays. The Great Hall filled with noise.

But beneath the ordinary rhythm of the school, Samira carried a journal that might explain her father's final work.

Sebastian carried the crystal.

Ominis carried the map.

And Anne's name sat at the centre of everything.

They had not cured her.

They had not even attempted the ritual.

But they had something they had not possessed before.

A method.

A safeguard.

And a reason to believe her father's research had not ended in failure.

Samira looked at the two boys beside her.

The next step would be harder.

They would need to reconstruct the seven-point circuit at Hogwarts.

They would need to decide exactly where the seventh point could be observed without completing it.

And eventually, they would have to face Anne's curse itself.

But that was tomorrow's danger.

For now, Samira breathed in the familiar air of Hogwarts.

The story had not ended.

It had finally found its direction.`,[
      ['Begin reconstructing the circuit with Sebastian.','reconstructSeb',{sebastian:1}],
      ['Begin with Ominis and translate the Gaunt safeguards.','reconstructOm',{ominis:1}],
      ['Bring Sebastian and Ominis together and plan the next experiment.','reconstructAll',{anne:1,sebastian:1,ominis:1}]
    ]),

    reconstructSeb: S('reconstructSeb','Undercroft · Morning','Episode XVI · The Seventh Point',`
Sebastian spread the diagram across the stone table.

This time, he did not begin with the seven anchors.

He began with the empty space between them.

“The witness point,” he said.

Samira leaned closer.

“The seventh.”

He nodded.

“If we can observe the resonance without completing the circuit, we may be able to isolate Anne's curse pattern.”

He looked at her.

“And then we can finally test whether your father's theory works.”

Samira felt the familiar mixture of fear and hope.

The work was beginning again.

Only now, they knew what they were looking for.`,[
      ['Keep working until they have a complete safe pattern.','reconstructAll',{sebastian:2,anne:1}],
      ['Ask Sebastian what he is most afraid will happen.','fearSeb',{sebastian:2}],
      ['Call Ominis in before they proceed.','reconstructAll',{ominis:1}]
    ]),

    reconstructOm: S('reconstructOm','Undercroft · Morning','Episode XVI · The Seventh Point',`
Ominis laid the Gaunt records beside Samira's father's notes.

The languages were different.

The magical principles were not.

“The safeguards are designed around refusal,” he said.

“Refusal?”

“A spell can be forced to hold power. A safeguard can be designed to refuse it.”

Samira understood.

“The crystal refuses to become the vessel.”

“Yes.”

“And the seventh point refuses to become an anchor.”

“Yes.”

She smiled.

“Then we have the same idea twice.”

Ominis nodded.

“That is why I think it may work.”`,[
      ['Continue translating the safeguards.','reconstructAll',{ominis:2,anne:1}],
      ['Ask Ominis what he is afraid will happen.','fearOm',{ominis:2}],
      ['Bring Sebastian in before they finalise the pattern.','reconstructAll',{sebastian:1}]
    ]),

    reconstructAll: S('reconstructAll','Undercroft · The New Diagram','Episode XVI · The Seventh Point',`
The three of them worked until the candles burned low.

The new diagram was nothing like the first one.

It was more careful.

More deliberate.

The seventh point remained open.

The crystal sat outside the circuit.

The safeguards surrounded the whole pattern.

And at the centre, they had left space for one thing only:

Anne.

Samira stared at the completed work.

For the first time, the impossible had a shape.

Sebastian leaned back.

Ominis lowered his wand.

Neither of them spoke.

Samira finally did.

“We can try.”

Sebastian nodded.

Ominis took a slow breath.

“Then we prepare properly.”

Somewhere above them, Hogwarts bells began to ring.

A new day had started.

And with it, the next chapter of their fight for Anne.`,[
      ['Continue the story and prepare for the first controlled test.','testPrep',{anne:2}],
      ['Take a quiet moment with Sebastian before the next step.','sebQuietNext',{sebastian:2}],
      ['Take a quiet moment with Ominis before the next step.','omQuietNext',{ominis:2}]
    ]),

    fearSeb: S('fearSeb','Undercroft · A Quiet Question','Episode XVI · The Seventh Point',`
Sebastian was silent for a while.

“That I will be wrong.”

Samira waited.

“That I'll convince everyone this can work, and then I'll make it worse.”

He looked at the diagram.

“I don't want Anne to pay for my certainty.”

Samira understood then.

His confidence was not the absence of fear.

It was how he survived it.

“You won't decide alone,” she said.

He looked at her.

“No.”

A small smile.

“I won't.”`,[
      ['Continue the work together.','reconstructAll',{sebastian:1,anne:1}],
      ['Tell Sebastian she trusts him.','reconstructAll',{sebastian:2}],
      ['Call Ominis into the conversation.','reconstructAll',{ominis:1}]
    ]),

    fearOm: S('fearOm','Undercroft · A Quiet Question','Episode XVI · The Seventh Point',`
Ominis's answer took longer.

“That I will discover there is no difference between me and them.”

Samira looked at him.

“The Gaunts.”

“Yes.”

He touched the edge of the old record.

“I have spent years believing I could choose differently. Sometimes I still wonder whether choice is enough.”

Samira answered quietly.

“It is when you keep choosing.”

He smiled.

“You remember everything I say.”

“Not everything.”

“Enough.”

The moment stayed between them.

Then Ominis returned to the diagram.

“Let's finish this.”`,[
      ['Finish the safeguards together.','reconstructAll',{ominis:2,anne:1}],
      ['Tell Ominis she believes him.','reconstructAll',{ominis:2}],
      ['Bring Sebastian into the conversation.','reconstructAll',{sebastian:1}]
    ]),

    testPrep: S('testPrep','Undercroft · Preparing the First Test','Episode XVI · The Seventh Point',`
The controlled test would not involve Anne.

Not yet.

That was the first rule.

They would use a harmless curse imprint taken from an old practice object.

If the circuit could separate the imprint without creating a new vessel, they would know the theory was sound.

Samira stood at the edge of the diagram.

Sebastian checked the crystal.

Ominis checked the safeguards.

Everything was ready.

The first controlled test was about to begin.`,[
      ['Begin the test.','testOne',{anne:1}],
      ['Double-check every safeguard before beginning.','doubleCheck',{anne:1,ominis:1}],
      ['Ask Sebastian and Ominis to promise they will stop if anything changes.','testPromise',{sebastian:1,ominis:1}]
    ]),

    doubleCheck: S('doubleCheck','Undercroft · One Last Check','Episode XVI · The Seventh Point',`
They checked everything twice.

Then a third time.

No missing rune.

No completed seventh point.

The crystal remained outside the circuit.

The safeguards were active.

The practice imprint was weak enough to be stopped immediately.

Samira looked at the two boys.

“Now?”

Sebastian nodded.

Ominis raised his wand.

“Now.”`,[
      ['Begin the test.','testOne',{anne:1}],
      ['Take one final breath and begin together.','testOne',{sebastian:1,ominis:1}]
    ]),

    testPromise: S('testPromise','Undercroft · The Rule','Episode XVI · The Seventh Point',`
Sebastian held out his hand.

“No matter what happens, we stop.”

Ominis nodded.

“If the seventh point begins to close, we stop.”

Samira added, “If the crystal becomes unstable, we stop.”

Three rules.

No exceptions.

Then they began.`,[
      ['Begin the controlled test.','testOne',{anne:1,sebastian:1,ominis:1}]
    ]),

    testOne: S('testOne','Undercroft · The First Controlled Test','Episode XVI · The Seventh Point',`
The practice imprint awakened.

A thin shadow appeared inside the circle.

Sebastian activated the first anchor.

Ominis activated the second.

The crystal responded.

Samira watched the seventh point.

It remained open.

The shadow separated.

Not violently.

Not completely.

But enough.

The curse imprint detached from its original object and dissolved into harmless sparks.

No vessel formed.

No backlash came.

Silence.

Then Sebastian laughed.

A stunned, disbelieving laugh.

Ominis exhaled.

“It worked.”

Samira looked at the empty circle.

It worked.

The method was real.

Anne might have a chance.`,[
      ['Let herself feel hopeful.','hope',{anne:2}],
      ['Ask what must change before they try it on Anne.','annePlan',{anne:2}],
      ['Share the moment with Sebastian and Ominis.','hope',{sebastian:1,ominis:1,anne:1}]
    ]),

    hope: S('hope','Undercroft · After the Test','Episode XVI · The Seventh Point',`
For a few seconds, nobody moved.

Then Samira smiled.

A real smile.

Sebastian saw it first.

“There.”

“What?”

“That look.”

“What look?”

“The one you get when you think something might actually work.”

Ominis smiled too.

Samira looked at the empty circle.

Hope was dangerous.

But so was giving up.

She chose hope.`,[
      ['Begin planning the attempt for Anne.','annePlan',{anne:2}],
      ['Let Sebastian have the first quiet moment with her.','sebQuietNext',{sebastian:2}],
      ['Let Ominis have the first quiet moment with her.','omQuietNext',{ominis:2}]
    ]),

    annePlan: S('annePlan','Undercroft · The Plan for Anne','Episode XVII · A Chance',`
They did not rush.

The successful test gave them confidence, not permission to become careless.

They needed Anne's consent.

They needed a controlled environment.

They needed a way to stop the process immediately if the curse resisted separation.

Most importantly, they needed to know what Anne's curse would do when exposed to the seventh point.

Samira wrote the final condition at the bottom of the page:

Anne remains herself.

If that changes, the ritual ends.

Sebastian nodded.

Ominis added another line:

No transfer.

Samira looked at both.

“Then we tell Anne the truth.”

The next chapter would not begin in a hidden chamber.

It would begin with her.`,[
      ['End this chapter and prepare to speak with Anne.','end',{anne:2}],
      ['Ask Sebastian to come with Samira when they speak to Anne.','end',{sebastian:1,anne:1}],
      ['Ask Ominis to come with Samira when they speak to Anne.','end',{ominis:1,anne:1}]
    ]),

    end: S('end','Hogwarts · Before the Next Conversation','Episode XVII · A Chance',`
The pages were finally still.

Samira closed the journal.

Outside the Undercroft, Hogwarts continued as though nothing had changed.

But everything had.

They had followed the path her father's research had left behind.

They had opened the Gaunt family's door.

They had found the truth about the seventh point.

And they had proven that the resonance could separate a curse imprint without creating another vessel.

The next step belonged to Anne.

Samira stood between Sebastian and Ominis.

Whatever came next, she would not walk into it alone.

And for the first time since Anne's curse had entered their lives, hope did not feel like a fantasy.

It felt like a plan.`,[
      ['Continue when Samira is ready to speak with Anne.','end',{anne:1}],
      ['Review the research once more before continuing.','end',{anne:1}],
      ['Take a quiet moment with the people beside her.','end',{sebastian:1,ominis:1}]
    ])
  };

  function scoreText() {
    return `Sebastian · ${state.sebastian} | Ominis · ${state.ominis} | Anne · ${state.anne}`;
  }

  function episodeNumber(ep) {
    const m = String(ep).match(/Episode\s+([IVXLCDM]+)/i);
    return m ? m[1] : '';
  }

  function render() {
    const scene = nodes[state.node] || nodes.morning;
    $('#chapterLabel').textContent = scene.episode;
    $('#location').textContent = scene.loc;
    $('#progress').textContent = `Scene ${state.history.length + 1} · ${episodeNumber(scene.episode)}`;
    $('#story').innerHTML = scene.text.trim().split(/\n\s*\n/).map(p => `<p>${esc(p).replace(/\n/g,'<br>')}</p>`).join('');
    $('#choices').innerHTML = '';
    scene.choices.forEach(([label, target, delta], i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'choice';
      b.innerHTML = `<span class="choice-num">${i + 1}</span><span>${esc(label)}</span>`;
      b.addEventListener('click', () => choose(label, target, delta));
      $('#choices').appendChild(b);
    });
    $('#relationshipState').textContent = scoreText();
    save();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function choose(label, target, delta) {
    state.history.push({ from: state.node, label, to: target, at: Date.now() });
    Object.entries(delta || {}).forEach(([k,v]) => { state[k] = (state[k] || 0) + v; });
    state.node = target;
    render();
  }

  $('#customForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = $('#customChoice');
    const value = input.value.trim();
    if (!value) return;
    state.custom.push({ node: state.node, text: value, at: Date.now() });
    state.history.push({ from: state.node, label: `Custom action: ${value}`, to: state.node, at: Date.now() });
    input.value = '';
    save();
    render();
  });

  $('#restart')?.addEventListener('click', () => {
    if (!confirm('Restart this continuation from the beginning?')) return;
    state = structuredClone(blank);
    save();
    render();
  });

  render();
})();
