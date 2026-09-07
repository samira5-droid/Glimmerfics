(() => {
  'use strict';

  const $ = (s) => document.querySelector(s);
  const KEY = 'glimmerfics-hogwarts-v10';
  const blank = { node: 'start', sebastian: 0, ominis: 0, anne: 0, history: [], custom: [] };
  let state;
  try { state = JSON.parse(localStorage.getItem(KEY) || 'null') || structuredClone(blank); } catch (_) { state = structuredClone(blank); }

  const save = () => localStorage.setItem(KEY, JSON.stringify(state));
  const esc = (s) => { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; };
  const N = (id, loc, episode, text, choices) => ({ id, loc, episode, text, choices });

  // The story now uses a close third-person narrator: the camera stays with Samira,
  // but the prose can move naturally through atmosphere, action and other characters' reactions.
  const nodes = {
    start: N('start','Hogwarts Library · After Midnight','Episode III · The First Resonance',`
The library had crossed the invisible line between late and impossibly late. Beyond the tall windows, the grounds had disappeared into blackness, and the rain had become so fine that it looked less like water than silver dust against the glass.

Samira Wellington sat at the centre of it all with her father's research spread before her.

The pages were covered in cramped handwriting, diagrams that seemed to contradict one another, and tiny annotations she had begun to recognise as his habits: a double underline when something mattered, a question mark when he distrusted his own conclusion, and a small star whenever he believed he had found the beginning of something rather than the end.

Tonight there were stars everywhere.

Sebastian stood on the opposite side of the table, sleeves rolled back, one hand braced against a parchment covered in concentric circles. Ominis sat nearer the window, listening rather than looking, his wand resting loosely between his fingers.

Anne had not been mentioned for several minutes.

That did not mean she had left the room.

She was in every silence.

Then one of Samira's father's pages moved.

Not from the draught. Not from a spell. The parchment simply lifted at one corner and settled again.

A thread of silver appeared in the ink.

It travelled slowly across the page, cutting through her father's handwriting without smudging a single letter. It crossed the table, continued onto Sebastian's diagram, and stopped exactly at its centre.

Sebastian straightened.

“Tell me you did that.”

Samira shook her head.

Ominis was already on his feet.

“Don't touch it.”

The silver line pulsed once.

Something beneath Samira's ribs answered.

For one breathless second, the entire library seemed to listen with them.`,[
      ['Ask Ominis what he can hear.','ominis',{ominis:1}],
      ['Move beside Sebastian and examine the diagram with him.','sebastian',{sebastian:1}],
      ['Reach for the silver line before it disappears.','resonance',{anne:1}],
      ['Tell them what her father wrote about resonance before anyone touches anything.','research',{anne:1,ominis:1}]
    ]),

    ominis: N('ominis','Hogwarts Library · What Ominis Hears','Episode III · The First Resonance',`
Samira turned away from the silver line and faced Ominis.

“What can you hear?”

For several seconds he did not answer. His head tilted slightly, the way it did whenever he was separating ordinary sounds from the layers of magic beneath them.

“A vibration,” he said.

Sebastian glanced at him. “From the parchment?”

“No.” Ominis's fingers tightened around his wand. “That is the strange part. It isn't travelling through the parchment. The parchment is responding to it.”

Samira felt the pulse beneath her ribs again.

“Where is it coming from?”

Ominis turned his face towards her.

“I don't know.”

The admission sounded more serious than any warning could have.

He took one careful step closer.

“But it is old. Older than the work on these pages. And whatever is causing it has noticed you.”

Samira looked back at the silver line.

“Can you tell whether it's dangerous?”

Ominis hesitated.

“I can tell you that it is not indifferent.”

Sebastian gave a quiet, humourless laugh. “That's reassuring.”

“It wasn't meant to be.”`,[
      ['Ask Ominis to keep listening while Samira studies the page.','resonance',{ominis:1}],
      ['Ask Sebastian whether his diagram predicted anything like this.','diagram',{sebastian:1}],
      ['Ignore both warnings and touch the silver line.','resonance',{anne:1}]
    ]),

    sebastian: N('diagram','Hogwarts Library · Seven Marks','Episode III · The First Resonance',`
Samira moved to Sebastian's side.

He shifted without being asked, making room for her.

The diagram was more complicated up close. Seven circles surrounded a larger central mark, but the lines between them were not straight. They curved as though the whole thing had been designed to imitate a path rather than a machine.

“You drew this?” Samira asked.

“Most of it.” Sebastian tapped the lower corner. “That section is copied from a book in the Restricted Section.”

“And this?”

“That part is mine.”

The silver line reached the centre of the diagram and stopped.

Sebastian stared at it.

“I've tried activating the pattern three times,” he said. “Nothing happened.”

“Why didn't you tell me?”

His eyes flicked towards her.

“Because I wasn't sure it meant anything.”

Samira studied the seven marks. One of them was almost identical to a symbol she had seen in her father's notes.

Almost.

The difference was a tiny break in the outer circle.

Her father's symbol had the break on the left.

Sebastian's had it on the right.

“You changed it.”

“I corrected it.”

“Or you guessed.”

His mouth curved faintly.

“Perhaps that's why I like you. You don't let me get away with pretending those are the same thing.”`,[
      ['Ask Sebastian to explain all seven marks.','seven',{sebastian:1}],
      ['Ask why he kept the diagram from Samira.','confession',{sebastian:2}],
      ['Call Ominis over and compare what he hears with the seven marks.','seven',{ominis:1}]
    ]),

    resonance: N('resonance','Hogwarts Library · The First Resonance','Episode III · The First Resonance',`
Samira reached for the silver line.

There was no time to decide whether it was sensible.

Her fingertip touched the parchment.

Cold rushed through her hand.

Sebastian caught her wrist before she could fall.

For the briefest instant, she noticed the warmth of his fingers against her skin. Then the library vanished.

She was standing somewhere made of pale stone.

There were no windows. No torches. No portraits. The corridor seemed to continue in both directions, but only one thing mattered: a black door at the far end.

Her father's symbol had been carved into it.

Seven marks surrounded the symbol.

The seventh was broken.

A sound came from behind the door.

Not a voice.

A breath.

Samira stepped forward.

The door opened a fraction.

Something on the other side moved towards the gap.

Then the vision shattered.

She was back in the library, gasping hard enough to hurt.

Ominis was standing.

Sebastian was still holding her wrist.

“What did you see?” Ominis asked.

Samira looked at the silver line.

“It wasn't a memory.”

Sebastian's grip loosened, but he did not move away.

“What was it?”

“A door.”

Her voice came out quieter than she intended.

“And I think my father wanted me to find it.”`,[
      ['Tell Sebastian every detail of the vision.','visionSeb',{sebastian:1}],
      ['Tell Ominis about the sound behind the door.','visionOm',{ominis:1}],
      ['Describe the broken seventh mark and search the research together.','seven',{anne:1}]
    ]),

    research: N('research','Hogwarts Library · Her Father’s Theory','Episode III · The First Resonance',`
Samira gathered the loose pages before either boy could touch the silver line again.

“My father believed resonance was more than sound,” she said. “He thought magical energy could be amplified, redirected, even interrupted if the right frequency was found.”

Sebastian leaned closer.

“And the places on these maps?”

“Anchors.”

Ominis ran a finger along the edge of one page without disturbing the writing.

“Places where the magic is already unusually strong.”

Samira nodded.

Her father's handwriting changed whenever he wrote about the final part. The letters became smaller. More hurried.

She turned the page.

There, in the margin, was Anne's name.

Not once.

Six times.

Samira's throat tightened.

“He was researching whether resonance could interrupt a curse.”

Sebastian went very still.

“Anne's curse?”

“I don't know.”

She hated the uncertainty.

“But if he found a way to make a curse lose its hold, then we need to know what he found.”

Ominis's expression hardened.

“And what it cost him.”

No one answered.

The rain whispered against the windows.

Then Sebastian turned the page over.

A seven-pointed symbol stared back at them.`,[
      ['Ask Sebastian to compare the symbol with his diagram.','seven',{sebastian:1}],
      ['Ask Ominis whether the symbol resembles anything in Gaunt records.','family',{ominis:1}],
      ['Insist that they continue, but only after identifying the risks.','risk',{anne:1}]
    ]),

    seven: N('seven','The Undercroft · The Theory','Episode III · The First Resonance',`
They moved to the Undercroft because the library had become too quiet.

Sebastian spread both diagrams across the stone table and weighed their corners with old books. Ominis stood beside him, listening to the faint magical hum still clinging to Samira's father's parchment.

“The seven marks aren't measurements,” Sebastian said after a long silence. “They're locations.”

He drew a line between two points.

“This one corresponds to the castle.”

Another line.

“This one is somewhere near the old forest.”

Then his finger stopped.

“The last one isn't on any map I can find.”

Samira looked at the broken seventh mark.

“Maybe it isn't supposed to be found on a normal map.”

Sebastian met her eyes.

“That is exactly what I was afraid you'd say.”

He turned the parchment around.

“If the seven locations form a circuit, the central point could be used to stabilise a curse.”

“Could,” Ominis repeated.

Sebastian sighed.

“Yes. Could.”

Samira looked at Anne's name again.

There was hope in the theory.

That was what made it dangerous.`,[
      ['Ask Sebastian to show the page he has been hiding.','confession',{sebastian:1}],
      ['Ask Ominis what could happen if resonance is amplified too far.','risk',{ominis:1}],
      ['Tell them a possible way to help Anne is worth investigating.','anne',{anne:2}],
      ['Insist on understanding every danger before they experiment.','risk',{anne:1}]
    ]),

    confession: N('confession','The Undercroft · Sebastian’s Secret','Episode III · The First Resonance',`
Sebastian was quiet for so long that Samira knew there was something else.

Finally, he reached into his coat and unfolded a page that had been worn soft along the edges.

“I found this before we started working together.”

Samira read the first line.

Her father's handwriting stared back at her.

Not a copy.

An original.

Her breath caught.

“Where did you get this?”

“I didn't steal it.”

“That wasn't my question.”

Sebastian looked away.

“Professor Sharp had a box of confiscated research. I saw your father's name. I took the page because I thought it might help.”

Samira read the stabilisation pattern.

It was elegant. Frighteningly so.

“Could this cure Anne?”

Sebastian shook his head.

“No. But it might slow the curse.”

The bravado had gone from his voice.

“I keep thinking if I just find the missing piece, she'll have more time. And then I find another missing piece.”

He looked at the page rather than at Samira.

“I don't know how to stop.”

For once, there was no clever answer waiting behind his smile.

Samira reached across the table.

Her hand covered his.

“You don't have to carry it alone.”

Sebastian looked up.

The silence between them was no longer comfortable, but neither of them seemed willing to break it.`,[
      ['Promise to help, then make Sebastian rest.','pinky',{sebastian:2,anne:1}],
      ['Tell him Anne’s fate cannot rest on his shoulders alone.','pinky',{sebastian:1,anne:1}],
      ['Ask Ominis to help keep both of them grounded.','pinky',{ominis:1,sebastian:1}]
    ]),

    family: N('family','Hogwarts Library · The Gaunt Records','Episode III · The First Resonance',`
Ominis changed when the conversation turned to his family.

His shoulders became rigid. His voice lost the dry amusement he sometimes used to hide discomfort.

“There are records,” he said. “Not the sort anyone in my family would willingly share.”

“Where?” Sebastian asked.

“The mausoleum.”

Samira waited.

Ominis continued reluctantly.

“The family vault is beneath it. There are catacombs older than the house itself. If the old magic you found has a connection to blood wards, there may be maps there.”

“Could there be something about resonance?”

“Yes.”

The word was immediate.

Too immediate.

Samira noticed.

“So you've heard of it.”

Ominis's jaw tightened.

“I've heard stories.”

He finally admitted that the Gaunts had collected records of places where ancient magic behaved strangely. Some were considered useful. Others had been sealed.

“One journal is supposed to contain a map of the lower catacombs.”

“When do we go?” Sebastian asked.

Ominis gave a humourless smile.

“Hogsmeade weekend.”

He lifted his wand.

“I handle the blood wards. We find the journal. We leave.”

Samira raised an eyebrow.

“That sounds suspiciously simple.”

“I said the plan was simple.”

His expression softened.

“I never said it was safe.”`,[
      ['Ask exactly how the blood wards work.','vaultPrep',{ominis:1}],
      ['Tell Ominis he will not enter the mausoleum alone.','vaultPrep',{ominis:2,anne:1}],
      ['Ask Sebastian what they should prepare before leaving Hogwarts.','pinky',{sebastian:1}]
    ]),

    risk: N('risk','The Undercroft · The Cost of Resonance','Episode III · The First Resonance',`
Ominis placed both hands on the stone table.

“Resonance does not simply make magic stronger.”

Samira waited.

“It can make boundaries weaker.”

Sebastian frowned.

“Between what?”

“Between a curse and the person carrying it.”

The words settled over the room.

Samira understood at once.

“If we amplify Anne's curse…”

“We could make it easier to reach,” Ominis said. “Or harder to control.”

Sebastian's face had gone pale.

“Then we need a stabiliser.”

“Yes.”

“And if we don't have one?”

Ominis looked towards Samira.

“Then we do not experiment on Anne.”

Samira hated the answer because it was sensible.

Doing nothing felt like standing still while a clock counted down.

But she had promised herself that hope would not become an excuse for recklessness.

She looked at the seven marks.

“Then we find the missing piece first.”`,[
      ['Stop all experiments until they understand the resonance.','family',{anne:1}],
      ['Continue researching because Anne cannot wait forever.','anne',{anne:2}],
      ['Ask Sebastian to design a safer stabilisation pattern.','confession',{sebastian:1}]
    ]),

    anne: N('anne','The Undercroft · For Anne','Episode III · The First Resonance',`
Samira rested her palm over Anne's name.

“If there is a chance, we investigate it.”

Sebastian nodded.

Ominis remained silent, but he did not argue.

Samira looked at both of them.

“Not because we think we are clever enough to fix everything. Because doing nothing is also a choice.”

Sebastian folded the diagram.

“Then tomorrow we find the chamber.”

“And the journal,” Ominis added.

Samira looked towards the dark windows of the Undercroft.

For the first time, the mystery had begun to feel less like a collection of impossible clues and more like a road.

It was simply a road she was not certain she wanted to walk.`,[
      ['Make Sebastian promise he will sleep before tomorrow.','pinky',{sebastian:2}],
      ['Ask Ominis what the Gaunt records might reveal.','family',{ominis:1}]
    ]),

    visionSeb: N('visionSeb','The Undercroft · The Door','Episode III · The First Resonance',`
Samira told Sebastian everything.

The pale corridor.

The black door.

Her father's symbol.

The broken seventh mark.

And the breath behind the door.

Sebastian listened without interrupting.

When she finished, he placed one finger on the matching symbol in his diagram.

“That isn't a normal door.”

“How do you know?”

“Because the seventh mark is broken.”

Samira stared at him.

Sebastian explained that a complete seven-point circuit would contain energy. A broken point would release it somewhere else.

“Which means the door wasn't locking something in.”

He looked up.

“It may have been locking something out.”

A chill moved through Samira.

Ominis, listening nearby, went very still.`,[
      ['Ask Sebastian to keep working while Samira rests.','pinky',{sebastian:1}],
      ['Ask Ominis whether his family records could identify the door.','family',{ominis:1}]
    ]),

    visionOm: N('visionOm','The Undercroft · The Sound Behind the Door','Episode III · The First Resonance',`
Samira told Ominis about the sound behind the door.

He did not dismiss it.

Instead, he became very quiet.

“That isn't a sound I recognise from Hogwarts.”

“What about your family?”

A pause.

“I have heard descriptions of something similar.”

He explained that some old Gaunt records described magic as a presence that could answer when called. The family had never treated such things as harmless.

“There may be a journal in the mausoleum,” he said. “If the door in your vision is connected to the old sites, the journal could tell us where.”

Samira studied his expression.

“You don't want to go there.”

“No.”

He was honest.

“But I think we need to.”

Samira nodded.

“Then we go together.”

Ominis's expression softened for a moment.

“I know.”`,[
      ['Tell Ominis he will not face the vault alone.','family',{ominis:2}],
      ['Ask Sebastian what they need before Hogsmeade weekend.','pinky',{sebastian:1}]
    ]),

    pinky: N('pinky','Hogwarts Library · A Small Promise','Episode III · The First Resonance',`
By the time they returned to the library, the candles had burned almost to their holders.

Sebastian was still studying the diagram.

“Tomorrow,” he said.

Samira folded her arms.

“You said that yesterday.”

“I was going to say tomorrow yesterday as well.”

“That is not helping your case.”

A tired smile appeared.

Samira held out her little finger.

Sebastian stared at it.

“What are you doing?”

“Making sure you actually sleep.”

He laughed under his breath, but after a moment he hooked his little finger around hers.

“Fine,” he murmured. “Pinky promise.”

It should have been ridiculous.

Instead, the moment lingered.

Sebastian's eyes met hers, and for a second the diagrams, the curse, and the impossible door seemed very far away.

Then Ominis cleared his throat.

“Are we finished being sentimental?”

Sebastian released Samira's hand.

“Jealous?”

“Exhausted.”

Samira laughed despite herself.

The tension broke.

But the plan remained.

The vault.

The journal.

The seventh door.

Anne.`,[
      ['Ask Ominis to explain everything they need for the vault.','vaultPrep',{ominis:1}],
      ['Tell Sebastian she trusts his diagram.','vaultPrep',{sebastian:1}],
      ['Write down the plan and finally sleep.','vaultPrep',{anne:1}]
    ]),

    vaultPrep: N('vaultPrep','Hogsmeade Weekend · The Last Preparations','Episode IV · The Gaunt Mausoleum',`
Hogsmeade weekend arrived beneath a sky the colour of old pewter.

The three of them met away from the crowds, carrying only what they could plausibly explain if a professor stopped them.

Ominis had memorised the route.

Sebastian had copied the resonance diagram twice in case one was damaged.

Samira carried her father's original notes beneath her cloak.

They walked beyond the village, leaving the sound of students behind.

For a while, nobody spoke.

Then Sebastian broke the silence.

“If we find nothing…”

“We will have learned something,” Samira said.

“And if we find something?”

She looked towards the trees.

“Then we decide what to do with it.”

Ominis stopped.

Ahead, the mausoleum rose from the mist.

He did not need to describe it.

The family crest was carved above the iron gate.

The wards beneath it were already awake.`,[
      ['Stay close to Ominis and let him guide them through the blood wards.','wards',{ominis:2}],
      ['Ask Sebastian to keep the stabilisation diagram ready.','wards',{sebastian:1}],
      ['Follow the strange pull in the magic and step towards the gate.','wards',{anne:1}]
    ]),

    wards: N('wards','Gaunt Mausoleum · The Blood Wards','Episode IV · The Gaunt Mausoleum',`
Ominis raised his wand.

The gate answered.

A dark red glow crawled across the iron like veins beneath skin.

“Do not touch the bars,” he said.

Sebastian took one step back.

“That was already my plan.”

Ominis began to speak in a language Samira did not know.

The wards reacted immediately.

One pulse.

Then another.

The air grew heavier.

Samira felt the magic pressing against her chest, searching rather than attacking.

“Samira,” Ominis said quietly, “when I tell you to move, move.”

She nodded.

The final word left his lips.

The gate opened.

Something whispered from inside the mausoleum.

Not a voice.

A sound like someone breathing through stone.

Sebastian looked at Samira.

“You heard that.”

She nodded.

The three stepped through.

Behind them, the gate closed by itself.`,[
      ['Let Ominis locate the source of the whisper.','echo',{ominis:2}],
      ['Open Sebastian’s diagram and compare it with the floor.','echo',{sebastian:2}],
      ['Answer the whisper and ask who is there.','signal',{anne:2}]
    ]),

    echo: N('echo','Gaunt Mausoleum · The Listening Hall','Episode IV · The Gaunt Mausoleum',`
Inside, the mausoleum seemed much larger than it had from outside.

Their footsteps returned a heartbeat too late.

Then two heartbeats.

Then three.

Samira stopped.

The echo did not.

Her own footsteps continued down the corridor after she had become still.

Ominis lifted his wand.

“Don't move.”

Sebastian whispered, “Why?”

“Because something is copying us.”

A faint light appeared beneath the floor.

Seven points.

One beneath each of them, one in front, and one hidden beneath a slab of black stone.

Samira's father's symbol began to glow on the wall.

The broken seventh mark was there too.

Only now it was not broken.

It was waiting for something.

Samira felt the same pull she had felt in the library.

The magic knew her.

And it seemed to be asking her to choose.`,[
      ['Let Ominis trace the source of the copied footsteps.','door',{ominis:2}],
      ['Let Sebastian match the seven points to his diagram.','door',{sebastian:2}],
      ['Answer the presence before it can speak again.','signal',{anne:2}]
    ]),

    signal: N('signal','Gaunt Mausoleum · Anne’s Voice','Episode IV · The Gaunt Mausoleum',`
Samira stepped towards the seventh point.

The room changed.

For an instant she could see the stone as if it were transparent. Beneath it lay a circular chamber, impossibly deep, filled with pale light.

Then someone spoke.

“Samira?”

She froze.

Sebastian's face changed.

Ominis turned sharply.

The voice came again.

“Samira, can you hear me?”

It sounded like Anne.

Not a memory.

Not an echo.

Anne.

Samira's heart lurched.

“Anne?”

The answer came faintly.

“Don't open the seventh door.”

Then silence.

Sebastian stepped forward.

“What did she say?”

Samira looked at the sealed stone.

“Not to open it.”

Ominis swallowed.

“And yet something brought us here.”

The seventh point went dark.

A hidden lock clicked somewhere beneath the floor.`,[
      ['Trust Anne’s warning and search for another way in.','journal',{anne:2}],
      ['Ask Sebastian to determine what the lock is protecting.','door',{sebastian:2}],
      ['Ask Ominis whether the voice could have come through the blood wards.','journal',{ominis:2}]
    ]),

    door: N('door','Gaunt Mausoleum · The Seventh Door','Episode IV · The Gaunt Mausoleum',`
Sebastian knelt beside the black stone.

He traced the seven marks without touching them.

“This isn't a door in the normal sense.”

Ominis tilted his head.

“There is a mechanism beneath it.”

Samira unfolded her father's notes.

A sentence caught her eye.

Seven anchors. One refusal.

She read it twice.

“The seventh isn't an anchor,” she said.

Sebastian looked up.

“It is a choice.”

The three of them stared at the stone.

Seven marks illuminated one after another.

Six burned steadily.

The seventh remained dark.

Then the floor shifted.

A narrow seam appeared in the wall.

Beyond it was a staircase descending into darkness.

No blood ward blocked it.

No lock.

No warning.

That was somehow worse.`,[
      ['Take the staircase carefully and keep the door unopened.','journal',{anne:1}],
      ['Have Sebastian lead with the stabilisation diagram ready.','journal',{sebastian:1}],
      ['Ask Ominis to listen before anyone takes another step.','journal',{ominis:1}]
    ]),

    journal: N('journal','Gaunt Mausoleum · The Hidden Journal','Episode IV · The Gaunt Mausoleum',`
The staircase ended beneath the mausoleum.

A single desk stood in the centre of the chamber.

On it rested a journal sealed with black wax.

Ominis stopped at the threshold.

“I know that seal.”

His voice had gone flat.

“It's older than my family line.”

Samira approached the desk.

The moment she touched the journal, the wax cracked by itself.

Inside, the handwriting changed between pages. Different generations had added warnings, maps, and corrections.

Near the back was a map of the seven resonance sites.

The seventh point was not a place.

It was beneath Hogwarts.

Beneath the castle.

Beneath the Undercroft.

Samira's stomach dropped.

Her father's work had never been pointing away from Hogwarts.

It had been pointing down.

Sebastian read the next line aloud.

“Resonance can interrupt the curse only when the bearer willingly answers.”

Ominis went silent.

Samira thought of Anne's voice.

Don't open the seventh door.

Perhaps the warning was not about the door itself.

Perhaps it was about what was behind it.`,[
      ['Take the journal and return to Hogwarts before opening anything else.','return',{anne:2}],
      ['Study the journal for a way to reach the resonance chamber safely.','chamber',{sebastian:1}],
      ['Ask Ominis what his family knew about a willing bearer.','return',{ominis:2}]
    ]),

    return: N('return','Hogwarts · Beneath the Undercroft','Episode V · The Resonance Chamber',`
They returned before dawn.

The castle was waking when the three slipped back into the Undercroft, carrying the journal between them.

Nobody spoke until the door closed.

Then Sebastian placed the journal beside Samira's father's notes.

The two sources matched.

Not perfectly.

But enough.

The resonance chamber was real.

It had been built beneath Hogwarts long before the school understood what it was.

The seventh door had never been the final destination.

It was the entrance to a mechanism designed to separate a curse from its source.

Samira stared at the diagram.

“If this works…”

Sebastian finished the thought.

“Anne could be given a choice.”

Ominis corrected him quietly.

“Anne would have to make it.”

That changed everything.

Because it meant the three of them could not simply rescue her.

They could only create the chance.

And somewhere beneath their feet, the chamber was already beginning to wake.`,[
      ['Ask Sebastian to build the stabiliser before they descend.','stabiliser',{sebastian:2}],
      ['Ask Ominis to decipher the ritual in the Gaunt journal.','ritual',{ominis:2}],
      ['Focus first on finding Anne and understanding what she can hear.','anneChamber',{anne:2}]
    ]),

    stabiliser: N('stabiliser','The Undercroft · Sebastian’s Pattern','Episode V · The Resonance Chamber',`
Sebastian worked until the candles guttered.

This time, Samira stayed beside him.

He redrew the stabilisation pattern three times. Each version looked cleaner than the last.

“Your father understood the geometry,” he said. “But he never solved the final transition.”

“Can you?”

Sebastian smiled without humour.

“I can try.”

He looked at her.

“That is all any of us can promise.”

Together they compared his work with the Gaunt journal.

The missing transition was not a spell.

It was a sequence of choices.

The stabiliser would respond differently depending on who stood closest to the central point.

Samira understood immediately.

“The chamber will know what we want.”

“And it may use that against us,” Ominis said.

Sebastian folded the finished diagram.

“Then we don't give it anything we aren't willing to lose.”

Samira looked at him.

She wondered whether he understood how much that sentence included.`,[
      ['Ask Sebastian what he is afraid of losing.','ritual',{sebastian:2}],
      ['Ask Ominis to test the stabiliser for hidden blood magic.','ritual',{ominis:1}],
      ['Keep the focus on Anne and prepare to descend.','ritual',{anne:2}]
    ]),

    ritual: N('ritual','The Undercroft · The Ritual','Episode V · The Resonance Chamber',`
Ominis deciphered the final pages while Sebastian prepared the stabiliser.

The ritual was not an attack.

It was an invitation.

The chamber would amplify the curse, isolate its pattern, and then offer the bearer a way to reject it.

But there was a condition.

Someone had to remain connected to the resonance while the bearer chose.

Samira looked at the other two.

“That person could be hurt.”

“Yes,” Ominis said.

Sebastian immediately looked at her.

“No.”

She frowned.

“You don't get to decide that.”

“I know.”

His voice softened.

“That's why I'm asking you not to volunteer before we know what it does.”

Ominis turned a page.

“There is another complication.”

Neither of them moved.

“The connection is strongest when the person entering the resonance trusts the person anchoring it.”

Silence.

Samira understood why both boys had suddenly stopped speaking.`,[
      ['Choose Sebastian as the anchor.','choice',{sebastian:3}],
      ['Choose Ominis as the anchor.','choice',{ominis:3}],
      ['Refuse to choose yet and insist they find another solution.','choice',{anne:2}]
    ]),

    choice: N('choice','The Undercroft · Before the Descent','Episode V · The Resonance Chamber',`
The choice stayed between them.

Samira could feel the weight of it even before she spoke.

Sebastian looked ready to argue until morning if that was what it took to keep her safe.

Ominis stood quieter, but his hand had tightened around his wand.

Neither wanted to say what the ritual had made obvious.

Trust mattered here.

Not affection alone.

Not loyalty in the abstract.

Trust under pressure.

The sort that remained when something went wrong.

Samira finally lifted her father's notes.

“Whatever happens below, nobody goes in alone.”

Sebastian nodded.

Ominis did too.

It was not an answer to the ritual.

But it was an answer to one another.`,[
      ['Take the descent together and keep Sebastian closest.','descent',{sebastian:2}],
      ['Take the descent together and keep Ominis closest.','descent',{ominis:2}],
      ['Take the descent together with Anne’s warning as the rule: no seventh door.','descent',{anne:2}]
    ]),

    descent: N('descent','Beneath Hogwarts · The Resonance Chamber','Episode V · The Resonance Chamber',`
The staircase beneath the Undercroft had not been there the night before.

At least, none of them had seen it.

They descended anyway.

The air changed first.

Then the sound.

Every breath became enormous.

Every heartbeat echoed through the stone.

At the bottom stood the chamber from Samira's vision.

Pale stone.

No torches.

Seven marks.

And the black door.

Only now Samira could see what lay around it: hundreds of names carved into the walls.

Some were crossed out.

Some were incomplete.

One name had been written recently.

Anne Sallow.

Sebastian stopped breathing for a second.

Ominis whispered, “It knew she was coming.”

The chamber woke.

The seven marks ignited one after another.

The seventh remained dark.

Samira stepped forward.

From behind the door came Anne's voice.

“Samira.”

This time there was no mistaking it.

She was there.

And she was afraid.`,[
      ['Speak to Anne without opening the seventh door.','finale',{anne:3}],
      ['Use Sebastian’s stabiliser to make contact safely.','finale',{sebastian:2}],
      ['Let Ominis listen for the safest way to answer.','finale',{ominis:2}]
    ]),

    finale: N('finale','Beneath Hogwarts · The Seventh Door','Episode VI · The Choice',`
The chamber fell silent after Samira spoke.

For several seconds there was only the sound of breathing on the other side of the door.

Then Anne answered.

“I can feel it.”

Sebastian closed his eyes.

“Feel what?”

“The curse.”

Her voice trembled.

“It isn't only inside me anymore.”

Samira looked at the seven marks.

The seventh had begun to glow.

Her father's final note made sense now.

The resonance was not a cure waiting to be activated.

It was a door between a person and the thing feeding on them.

The chamber could separate them.

But only if Anne chose to let go.

Samira placed one hand against the black stone.

“We're here.”

A long pause.

“I know.”

The seventh mark brightened.

Behind the door, Anne drew a shaky breath.

And somewhere deep beneath Hogwarts, something ancient finally noticed that the three people standing before it were not going to run.`,[
      ['Continue into Episode VII.','episode7',{anne:2}]
    ]),

    episode7: N('episode7','Beneath Hogwarts · The Door Opens','Episode VII · What Answers',`
The seventh mark flared.

The door did not open.

It breathed.

Once.

Twice.

Then the entire chamber shuddered.

Sebastian's stabiliser cracked down the centre.

Ominis grabbed Samira's arm.

“Something is wrong.”

She already knew.

The resonance had found Anne.

But it had also found Samira.

Her father's work had never been about observing the phenomenon.

He had been part of it.

The missing piece was not hidden in the Gaunt journal.

It was hidden in Samira's own magic.

The door began to open.

Beyond it was not a room.

It was a sky full of stars.

And somewhere among them, a man's voice whispered her name.`,[
      ['Step towards the opening and face whatever is calling her.','awakening',{anne:2}],
      ['Hold Sebastian’s stabiliser together and protect Anne first.','awakening',{sebastian:2}],
      ['Let Ominis guide Samira through the resonance before she crosses the threshold.','awakening',{ominis:2}]
    ]),

    awakening: N('awakening','Beneath Hogwarts · Beyond the Threshold','Episode VII · What Answers',`
Samira stepped forward.

The chamber disappeared.

For one impossible moment, she was standing beneath a night sky that did not belong to Hogwarts.

Stars moved overhead.

Below her feet there was no floor, only pale light arranged in the shape of her father's seven-pointed symbol.

Behind her, Sebastian called her name.

Ominis called it too.

Their voices anchored her to the real world.

Ahead, the figure in the distance turned.

Samira could not see his face.

But she knew the voice.

Her father.

“You finally found the seventh door.”

She wanted to run towards him.

She wanted to run away.

Instead, she stayed where she was.

Because behind the figure, something far larger was moving between the stars.

And if her father had spent years trying to keep it from crossing the threshold, then opening the door had never been the end of the story.

It had been the beginning.`,[
      ['Reach for her father’s voice.','endgame',{anne:1}],
      ['Turn back and return to Sebastian and Ominis.','endgame',{sebastian:1,ominis:1}],
      ['Ask what happened to Anne before taking another step.','endgame',{anne:2}]
    ]),

    endgame: N('endgame','The Seventh Threshold','Episode VII · What Answers',`
The answer did not come immediately.

The stars continued to move.

Somewhere behind the threshold, Hogwarts waited.

Somewhere beyond it, Samira's father had left a truth he had never been able to bring home.

And somewhere between those two worlds stood Anne, Sebastian, Ominis, and Samira herself.

The choice was no longer simply whether to open a door.

It was who would be willing to walk through it.

The resonance pulsed once.

Samira heard three heartbeats behind her.

Then the fourth.

Anne.

Alive.

Waiting.

The next decision would change all of them.`,[
      ['Continue the story.','episode8',{anne:2}]
    ]),

    episode8: N('episode8','Hogwarts · The Morning After','Episode VIII · The Weight of a Choice',`
Morning arrived as though nothing had happened.

Students hurried through the corridors. Professors complained about late homework. Somewhere above them, a suit of armour had apparently fallen down a staircase.

The ordinary world had no idea what had happened beneath it.

Samira stood in the Undercroft with the journal open before her.

Sebastian was asleep against the wall, finally defeated by exhaustion.

Ominis sat nearby, quiet and awake.

Anne's name was still carved into the chamber wall.

But beneath it, another line had appeared.

Not a warning.

A question.

WHO WILL YOU TRUST WHEN THE DOOR OPENS AGAIN?

Samira looked at Sebastian.

Then at Ominis.

Then at the journal.

The answer would not be simple.

It would not be safe.

But for the first time, she understood that the story was no longer only about finding a cure for Anne.

It was about discovering what her father had found, why he had disappeared from the research, and why the resonance had chosen Samira as its bearer.

The next chapter would begin with a secret Hogwarts had been keeping for generations.`,[
      ['Continue.','finale',{anne:1}]
    ])
  };

  function apply(delta = {}) {
    Object.entries(delta).forEach(([k,v]) => { state[k] = (state[k] || 0) + v; });
  }

  function render() {
    const n = nodes[state.node] || nodes.start;
    $('#chapterLabel').textContent = n.episode;
    $('#location').textContent = n.loc;
    $('#progress').textContent = `Scene ${state.history.length + 1}`;
    $('#story').innerHTML = n.text.trim().split(/\n\n+/).map(p => `<p>${esc(p)}</p>`).join('');
    $('#choices').innerHTML = '';

    n.choices.forEach(([label, next, delta], i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'choice';
      b.innerHTML = `<span class="choice-number">${i + 1}</span><span>${esc(label)}</span>`;
      b.addEventListener('click', () => {
        apply(delta);
        state.history.push({ from: state.node, to: next, label });
        state.node = next;
        save();
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      $('#choices').appendChild(b);
    });

    $('#relationshipState').textContent = `Sebastian · ${state.sebastian} | Ominis · ${state.ominis} | Anne · ${state.anne}`;
  }

  $('#customForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = $('#customChoice');
    const value = input.value.trim();
    if (!value) return;
    state.custom.push({ at: state.node, text: value, time: Date.now() });
    // Custom actions are treated as reflective choices rather than silently rewriting canon.
    state.history.push({ from: state.node, to: state.node, label: `Custom action: ${value}` });
    save();
    input.value = '';
    render();
  });

  $('#restart').addEventListener('click', () => {
    if (!confirm('Restart the story from the current published beginning?')) return;
    state = structuredClone(blank);
    save();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  render();
})();
