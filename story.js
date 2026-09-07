(() => {
  'use strict';

  const $ = (s) => document.querySelector(s);
  const KEY = 'glimmerfics-hogwarts-v11';
  const blank = { node: 'library', sebastian: 0, ominis: 0, anne: 0, history: [], custom: [] };
  let state;
  try { state = JSON.parse(localStorage.getItem(KEY) || 'null') || structuredClone(blank); } catch (_) { state = structuredClone(blank); }
  const save = () => localStorage.setItem(KEY, JSON.stringify(state));
  const esc = (s) => { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; };
  const S = (id, loc, episode, text, choices) => ({ id, loc, episode, text, choices });

  /*
   * Glimmerfics V11
   * Close third-person narration. The camera stays very close to Samira,
   * but the prose is written like a novel rather than a first-person game log.
   * Each scene is deliberately longer so choices feel like decisions inside
   * a continuous chapter instead of isolated prompts.
   */
  const nodes = {
    library: S('library','Hogwarts Library · After Midnight','Episode III · The First Resonance',`
The library had crossed the invisible line between late and impossibly late.

Beyond the tall windows, the grounds had vanished into darkness. Rain whispered against the glass, soft enough that it might have been mistaken for the sound of pages turning. Every now and then the wind pushed against the old stone of the castle, and the windows answered with a low shiver.

Samira Wellington sat at the centre of the largest table with her father's research spread around her.

The pages were a mess by now. Some had been copied. Some were covered in Sebastian's notes. Others had been turned over and turned back so many times that the corners had begun to curl. Her father's handwriting was everywhere: cramped observations, half-finished theories, arrows pointing to things that had apparently made sense to him at three in the morning.

Tonight, those pages felt less like research and more like a conversation with someone who was no longer there to answer her questions.

Sebastian stood opposite her, sleeves rolled to his elbows, bent over the diagram he had been refusing to explain properly for the better part of an hour. Ominis sat near the window, his wand resting across his palm. He had said little recently. He did not need to. Ominis had a way of making silence feel like an active decision.

Anne had not been mentioned in several minutes.

That did not mean she had left the room.

She was there in every calculation.

Then one of Samira's father's pages moved.

Not from the draught.

The parchment lifted at one corner, settled, and then seemed to flatten itself deliberately beneath her hand.

A thin silver line appeared in the ink.

It travelled slowly across the page, cutting through her father's handwriting without smudging a single letter. It crossed the table, slipped over the edge of the parchment and continued onto Sebastian's diagram.

It stopped exactly at the centre.

Sebastian straightened.

“Tell me you did that.”

Samira shook her head.

Ominis was already standing.

“Don't touch it.”

The silver line pulsed.

Something beneath Samira's ribs answered.

For one breathless second, the whole library seemed to listen with them.`,[
      ['Ask Ominis what he can hear.','hear',{ominis:1}],
      ['Move beside Sebastian and examine the diagram with him.','diagram',{sebastian:1}],
      ['Reach for the silver line before it disappears.','resonance',{anne:1}],
      ['Tell them everything her father wrote about resonance first.','research',{anne:1,ominis:1}]
    ]),

    hear: S('hear','Hogwarts Library · What Ominis Hears','Episode III · The First Resonance',`
Samira turned away from the silver line and faced Ominis.

“What can you hear?”

He did not answer immediately.

His head tilted a fraction. His eyes remained fixed on nothing in particular, but Samira had learned that this was when Ominis was most attentive. He was separating the ordinary sounds of the library from everything hidden beneath them.

Rain.

The faint crackle of the candles.

Sebastian's fingers against parchment.

Samira's breathing.

And beneath all of it, something else.

“A vibration,” Ominis said at last.

Sebastian looked up. “From the parchment?”

“No.”

Ominis's grip tightened around his wand.

“That is the strange part. The parchment isn't producing it. It is responding to it.”

Samira felt the pulse beneath her ribs again.

“Where is it coming from?”

Ominis turned towards her.

“I don't know.”

The admission sounded more serious than any warning could have.

He took one careful step closer.

“But it is old. Older than the work on these pages. And whatever is causing it has noticed you.”

Samira glanced at her father's notes.

“Can you tell whether it's dangerous?”

A pause.

“I can tell you it is not indifferent.”

Sebastian gave a quiet, humourless laugh.

“That is reassuring.”

“It wasn't meant to be.”

The silver line pulsed again.

This time Ominis flinched.

Samira noticed.

“What?”

“There was something inside the vibration.”

“What kind of something?”

He hesitated.

“A pattern.”

His face tightened.

“Seven beats.”`,[
      ['Ask Ominis to keep listening while Samira studies the page.','resonance',{ominis:1}],
      ['Ask Sebastian whether his diagram contains seven points.','diagram',{sebastian:1}],
      ['Ignore both warnings and touch the silver line.','resonance',{anne:1}]
    ]),

    diagram: S('diagram','Hogwarts Library · Seven Marks','Episode III · The First Resonance',`
Samira moved to Sebastian's side.

He shifted without being asked, making room for her. Up close, the diagram was even stranger than it had looked from across the table.

Seven circles surrounded a central mark. The lines between them curved rather than running straight, giving the whole thing the appearance of a constellation drawn by someone who had decided the stars should be connected by force.

“You drew this?” Samira asked.

“Most of it.” Sebastian tapped the lower corner. “That section is copied from a book in the Restricted Section.”

“And the rest?”

“That part is mine.”

The silver line reached the central circle.

Sebastian stopped breathing for a moment.

“I've tried activating the pattern three times,” he admitted. “Nothing happened.”

“Why didn't you tell me?”

His eyes flicked towards her.

“Because I wasn't sure it meant anything.”

Samira studied the seven marks.

One of them was almost identical to a symbol from her father's notes.

Almost.

The difference was tiny: a break in the outer ring.

Her father's symbol had the break on the left.

Sebastian's had it on the right.

“You changed it.”

“I corrected it.”

“Or you guessed.”

A faint smile appeared.

“Perhaps that's why I like working with you. You don't let me get away with pretending those are the same thing.”

The smile disappeared as quickly as it had come.

He pointed at the central circle.

“The seven points aren't measurements. I think they're anchors.”

“For what?”

“That is what I haven't worked out.”

Samira looked again at the symbol from her father.

She had the uncomfortable feeling that she already knew.`,[
      ['Ask Sebastian to explain what the seven anchors could do.','seven',{sebastian:1}],
      ['Ask why he kept the diagram from Samira.','confession',{sebastian:2}],
      ['Call Ominis over and compare his seven-beat pattern with the diagram.','seven',{ominis:1}]
    ]),

    resonance: S('resonance','Hogwarts Library · The First Resonance','Episode III · The First Resonance',`
Samira reached for the silver line.

There was no sensible reason to do it.

There was also no sensible reason to believe that waiting would make the moment safer.

Her fingertip touched the parchment.

Cold rushed through her hand.

Sebastian caught her wrist before she could fall.

For the briefest instant she noticed the warmth of his fingers against her skin. Then the library vanished.

She stood in a corridor made of pale stone.

There were no torches.

No windows.

No portraits.

The silence was so complete that Samira could hear her own heartbeat.

At the far end stood a black door.

Her father's symbol had been carved into it.

Seven marks surrounded the symbol.

Six were complete.

The seventh was broken.

Samira took one step forward.

A sound came from behind the door.

Not a voice.

A breath.

She froze.

The door opened a fraction.

Something moved in the darkness beyond it.

Then a whisper reached her.

Not words.

Her name.

Samira.

She turned—

—and the vision shattered.

She was back in the library, gasping hard enough to hurt.

Ominis was standing.

Sebastian still had hold of her wrist.

“What did you see?” Ominis asked.

Samira looked at the silver line.

“It wasn't a memory.”

Sebastian's grip loosened, but he did not immediately move away.

“What was it?”

“A door.”

Her voice came out quieter than she intended.

“And my father's symbol was on it.”

Ominis's expression changed.

“What else?”

Samira swallowed.

“A seventh mark.”

Then, after a pause:

“And someone said my name.”`,[
      ['Tell Sebastian every detail of the vision.','visionSeb',{sebastian:1}],
      ['Tell Ominis about the voice and the seven beats.','visionOm',{ominis:1}],
      ['Describe the broken seventh mark and search the notes together.','seven',{anne:1}]
    ]),

    research: S('research','Hogwarts Library · Her Father’s Theory','Episode III · The First Resonance',`
Samira gathered the loose pages before either boy could touch the silver line again.

“My father believed resonance was more than sound,” she said. “He thought magical energy could be amplified, redirected, even interrupted if the right frequency was found.”

Sebastian leaned closer.

“And the places on these maps?”

“Anchors.”

Ominis ran a finger along the edge of one page without disturbing the writing.

“Places where the magic is already unusually strong.”

Samira nodded.

Her father's handwriting changed whenever he reached the final part of the theory. The letters became smaller. More hurried.

She turned another page.

There, in the margin, was Anne's name.

Not once.

Six times.

Samira's throat tightened.

“He was researching whether resonance could interrupt a curse.”

Sebastian went very still.

“Anne's curse?”

“I don't know.”

She hated those three words.

They had become the boundary around everything she wanted.

I don't know where her father went.

I don't know what he found.

I don't know whether Anne can be helped.

But she knew one thing.

She was done accepting uncertainty as an answer.

“If he found a way to make a curse lose its hold,” she said, “we need to know what he found.”

Ominis's voice was quiet.

“And what it cost him.”

No one answered.

The rain continued beyond the windows.

Sebastian turned the page over.

A seven-pointed symbol stared back at them.

Underneath it, in her father's handwriting, were four words:

Do not open seven.`,[
      ['Ask Sebastian to compare the symbol with his diagram.','seven',{sebastian:1}],
      ['Ask Ominis whether the warning resembles old Gaunt records.','family',{ominis:1}],
      ['Insist they continue, but only after identifying the risks.','risk',{anne:1}]
    ]),

    seven: S('seven','The Undercroft · The Theory','Episode III · The First Resonance',`
They moved to the Undercroft because the library had become too quiet.

Sebastian spread both diagrams across the stone table and weighed their corners with old books. Ominis stood beside him, listening to the faint magical hum still clinging to Samira's father's parchment.

“The seven marks aren't measurements,” Sebastian said. “They're locations.”

He drew a line between two points.

“This one corresponds to Hogwarts.”

Another line.

“This one is somewhere near the forest.”

A third.

“This one is older. The records don't agree on where it was.”

Samira leaned over the table.

“And the seventh?”

Sebastian stopped.

“The seventh isn't on any map I can find.”

Ominis spoke softly.

“Perhaps it isn't a place that can be found on an ordinary map.”

Samira looked at the broken mark.

Her father's warning suddenly felt less like an instruction and more like a plea.

“What happens if the circuit is completed?” she asked.

Sebastian hesitated.

“If my theory is right, the anchors would focus magical energy on the centre.”

“For what purpose?”

“To isolate something.”

Ominis turned towards him.

“A curse?”

“Possibly.”

Samira's pulse quickened.

Sebastian continued, more carefully now.

“If we could isolate the pattern of Anne's curse, we might be able to interrupt the connection that keeps feeding it.”

“Might.”

“I won't promise you a cure I can't prove.”

She appreciated the honesty.

She hated the uncertainty.

That was when Sebastian reached into his coat.

“I should show you something.”`,[
      ['Ask Sebastian to show the hidden page.','confession',{sebastian:1}],
      ['Ask Ominis what could happen if resonance is amplified too far.','risk',{ominis:1}],
      ['Say that even a chance to help Anne is worth investigating.','anne',{anne:2}],
      ['Insist on understanding every danger before they experiment.','risk',{anne:1}]
    ]),

    confession: S('confession','The Undercroft · Sebastian’s Secret','Episode III · The First Resonance',`
Sebastian was quiet for so long that Samira knew there was something else.

Finally, he unfolded a page that had been worn soft along the edges.

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

It was elegant.

Frighteningly so.

“Could this cure Anne?”

Sebastian shook his head.

“No. But it might slow the curse.”

The bravado had gone from his voice.

“I keep thinking that if I find the missing piece, she'll have more time. And then I find another missing piece.”

He stared at the page.

“I don't know how to stop.”

For once, there was no clever answer waiting behind his smile.

Samira reached across the table.

Her hand covered his.

“You don't have to carry it alone.”

Sebastian looked up.

The moment was quiet enough that Samira became aware of everything: the candle flame trembling between them, the old stone beneath her elbow, the fact that Sebastian had not pulled his hand away.

Then Ominis spoke from across the table.

“We should probably remember that we're attempting dangerous experimental magic.”

Sebastian sighed.

“Thank you, Ominis.”

“I am trying to keep you alive.”

Samira almost smiled.

Almost.

Because the page was still between them.

And Anne was still waiting.`,[
      ['Promise to help, then make Sebastian rest.','pinky',{sebastian:2,anne:1}],
      ['Tell Sebastian Anne’s fate cannot rest on his shoulders alone.','pinky',{sebastian:1,anne:1}],
      ['Ask Ominis to help keep both of them grounded.','pinky',{ominis:1,sebastian:1}]
    ]),

    family: S('family','Hogwarts Library · The Gaunt Records','Episode III · The First Resonance',`
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

The word came too quickly.

Samira noticed.

“So you've heard of it.”

Ominis's jaw tightened.

“I've heard stories.”

He explained that the Gaunts had kept records of places where ancient magic behaved strangely. Some were considered useful. Others had been sealed so thoroughly that even the family no longer remembered exactly why.

“One journal is supposed to contain a map of the lower catacombs,” he said. “And references to a chamber beneath Hogwarts.”

Sebastian looked at Samira.

“That can't be a coincidence.”

“No,” Ominis said quietly. “It isn't.”

The silence that followed was different from the others.

This time, all three of them understood that the investigation had become a path.

And that path led somewhere Ominis had spent years trying not to think about.

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
      ['Ask exactly how the blood wards work.','prep',{ominis:1}],
      ['Tell Ominis he will not enter the mausoleum alone.','prep',{ominis:2,anne:1}],
      ['Ask Sebastian what they should prepare before leaving Hogwarts.','pinky',{sebastian:1}]
    ]),

    risk: S('risk','The Undercroft · The Cost of Resonance','Episode III · The First Resonance',`
Ominis placed both hands on the stone table.

“Resonance does not simply make magic stronger.”

Samira waited.

“It can make boundaries weaker.”

Sebastian frowned.

“Between what?”

“Between a curse and the person carrying it.”

The words settled over the room.

Samira understood immediately.

“If we amplify Anne's curse…”

“We could make it easier to reach,” Ominis said. “Or harder to control.”

Sebastian's face had gone pale.

“Then we need a stabiliser.”

“Yes.”

“And if we don't have one?”

Ominis looked towards Samira.

“Then we do not experiment on Anne.”

She hated the answer because it was sensible.

Doing nothing felt like standing still while a clock counted down.

But she had promised herself that hope would not become an excuse for recklessness.

She looked at the seven marks.

“Then we find the missing piece first.”

Sebastian nodded.

“For once, I agree with the cautious approach.”

Samira gave him a look.

“For once?”

He smiled faintly.

“Don't ruin the moment.”

The tension eased, but only slightly.

They had a direction now.

And a danger they could finally name.`,[
      ['Stop all experiments until they understand the resonance.','family',{anne:1}],
      ['Continue researching because Anne cannot wait forever.','anne',{anne:2}],
      ['Ask Sebastian to design a safer stabilisation pattern.','confession',{sebastian:1}]
    ]),

    anne: S('anne','The Undercroft · For Anne','Episode III · The First Resonance',`
Samira rested her palm over Anne's name.

“If there is a chance, we investigate it.”

Sebastian nodded.

Ominis remained silent, but he did not argue.

“Not because we think we're clever enough to fix everything,” Samira continued. “Because doing nothing is also a choice.”

Sebastian folded the diagram.

“Then tomorrow we find the chamber.”

“And the journal,” Ominis added.

Samira looked towards the dark arches of the Undercroft.

For the first time, the mystery had begun to feel less like a collection of impossible clues and more like a road.

It was simply a road she was not certain she wanted to walk.

The three stayed there for another few minutes, saying very little.

Eventually Sebastian began gathering the papers.

Ominis listened to the castle above them.

Samira watched both of them and wondered when exactly this had stopped being her father's mystery and become theirs.

She suspected it had happened much earlier than any of them had noticed.`,[
      ['Make Sebastian promise he will sleep before tomorrow.','pinky',{sebastian:2}],
      ['Ask Ominis what the Gaunt records might reveal.','family',{ominis:1}]
    ]),

    visionSeb: S('visionSeb','The Undercroft · The Door','Episode III · The First Resonance',`
Samira told Sebastian everything.

The pale corridor.

The black door.

Her father's symbol.

The six complete marks and the broken seventh.

The breath behind the door.

And the whisper that had spoken her name.

Sebastian listened without interrupting.

When she finished, he placed one finger on the matching symbol in his diagram.

“That isn't a normal door.”

“How do you know?”

“Because the seventh mark is broken.”

He explained that a complete seven-point circuit would contain energy. A broken point would release it somewhere else.

“Which means the door wasn't locking something in,” Samira said.

Sebastian looked up.

“It may have been locking something out.”

A chill moved through her.

Ominis, listening nearby, went very still.

“Does that change our plan?” Samira asked.

“It changes how careful we have to be.”

Sebastian tapped the diagram.

“We don't open anything just because it asks us to.”

Samira thought of the breath behind the door.

Something about that promise made her feel safer.

And something about the way Sebastian said it made her wonder what he would do if she ignored it.`,[
      ['Ask Sebastian to keep working while Samira rests.','pinky',{sebastian:1}],
      ['Ask Ominis whether his family records could identify the door.','family',{ominis:1}]
    ]),

    visionOm: S('visionOm','The Undercroft · The Sound Behind the Door','Episode III · The First Resonance',`
Samira told Ominis about the sound behind the door.

He did not dismiss it.

Instead, he became very quiet.

“That isn't a sound I recognise from Hogwarts.”

“What about your family?”

A pause.

“I have heard descriptions of something similar.”

Ominis explained that some old Gaunt records described ancient magic as a presence that could answer when called. The family had never treated such things as harmless.

“There may be a journal in the mausoleum,” he said. “If the door in your vision is connected to the old sites, the journal could tell us where.”

Samira studied his expression.

“You don't want to go there.”

“No.”

He was honest.

“But I think we need to.”

She nodded.

“Then we go together.”

Ominis's expression softened for a moment.

“I know.”

Samira looked at him.

There was something in those two words she could not quite place.

Not gratitude.

Not fear.

Something quieter.

Trust, perhaps.

The kind that did not need to announce itself.`,[
      ['Tell Ominis he will not face the vault alone.','family',{ominis:2}],
      ['Ask Sebastian what they need before Hogsmeade weekend.','pinky',{sebastian:1}]
    ]),

    pinky: S('pinky','Hogwarts Library · A Small Promise','Episode III · The First Resonance',`
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

Anne.

And the uncomfortable feeling that they were already standing at the beginning of something none of them could easily walk away from.`,[
      ['Ask Ominis to explain everything they need for the vault.','prep',{ominis:1}],
      ['Tell Sebastian she trusts his diagram.','prep',{sebastian:1}],
      ['Write down the plan and finally sleep.','prep',{anne:1}]
    ]),

    prep: S('prep','Hogsmeade Weekend · The Last Preparations','Episode IV · The Gaunt Mausoleum',`
Hogsmeade weekend arrived beneath a sky the colour of old pewter.

They met away from the busiest streets, carrying only what they could plausibly explain if a professor happened to stop them.

Ominis had memorised the route.

Sebastian had copied the resonance diagram twice in case one was damaged.

Samira carried her father's original notes beneath her cloak, wrapped in oilskin against the weather.

They left the village behind.

For a while nobody spoke.

The path narrowed between bare trees, and the ordinary sounds of Hogsmeade disappeared one by one.

Then Sebastian broke the silence.

“If we find nothing…”

“We will have learned something,” Samira said.

“And if we find something?”

She looked towards the trees.

“Then we decide what to do with it.”

Ominis stopped.

Ahead, the mausoleum rose from the mist.

It was larger than Samira had imagined.

Black stone climbed towards the grey sky, carved with a crest she recognised only because Ominis had described it. Iron gates stood beneath an archway, and thin red lines moved across the metal like veins beneath skin.

Ominis did not speak.

He did not need to.

Samira could feel how much this place meant to him simply by the way he held himself.

Sebastian looked between them.

“We can still turn around.”

Ominis gave a quiet laugh.

“No.”

Samira stepped closer.

“Together?”

Ominis nodded.

“Together.”`,[
      ['Stay close to Ominis and let him guide them through the blood wards.','wards',{ominis:2}],
      ['Ask Sebastian to keep the stabilisation diagram ready.','wards',{sebastian:1}],
      ['Follow the strange pull in the magic and step towards the gate.','wards',{anne:1}]
    ]),

    wards: S('wards','Gaunt Mausoleum · The Blood Wards','Episode IV · The Gaunt Mausoleum',`
Ominis raised his wand.

The gate answered.

A dark red glow crawled across the iron.

“Do not touch the bars,” he said.

Sebastian took one step back.

“That was already my plan.”

Ominis began to speak in a language Samira did not know.

The wards reacted immediately.

One pulse.

Then another.

The air grew heavier.

Samira felt the magic pressing against her chest, searching rather than attacking. It moved across her like invisible fingers, testing the edges of her presence.

“Samira,” Ominis said quietly, “when I tell you to move, move.”

She nodded.

The red glow reached the seventh iron bar.

It stopped.

For one terrible moment nothing happened.

Then the bar brightened with silver instead of red.

Ominis froze.

“What?” Sebastian whispered.

“I didn't do that.”

Samira's father's symbol appeared briefly in the gate.

Then it vanished.

The lock opened.

The three stared at the entrance.

Samira's heart was beating too quickly.

Something inside had recognised her.

The gate swung inward.

No one moved.

Then Ominis said, very quietly:

“We should leave.”

Sebastian looked at him.

“You don't mean that.”

“No.”

Ominis swallowed.

“I don't.”

They stepped through.

Behind them, the gate closed by itself.`,[
      ['Let Ominis locate the source of the magic.','echo',{ominis:2}],
      ['Open Sebastian’s diagram and compare it with the floor.','echo',{sebastian:2}],
      ['Follow the pull in the magic without touching anything.','echo',{anne:1}]
    ]),

    echo: S('echo','Gaunt Mausoleum · The Listening Hall','Episode IV · The Gaunt Mausoleum',`
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

The echo took another step.

Then another.

Closer.

Samira felt Sebastian move nearer to her.

Ominis extended one hand until his fingers found the wall.

“There are carvings here.”

“What do they say?” Samira asked.

He traced them slowly.

“Names.”

A faint light appeared beneath the floor.

Seven points.

One beneath each of them, one ahead, and one hidden beneath a slab of black stone.

Samira's father's symbol began to glow on the wall.

The broken seventh mark was there too.

Only now it was not broken.

It was waiting.

A voice drifted through the corridor.

Not a ghost.

Not an echo.

A girl.

“Samira?”

Sebastian went rigid.

Ominis turned sharply.

Samira's heart lurched.

The voice came again.

“Samira, can you hear me?”

It sounded like Anne.`,[
      ['Answer Anne.','signal',{anne:2}],
      ['Let Ominis trace the source without answering.','door',{ominis:2}],
      ['Let Sebastian use the diagram to identify the seven points.','door',{sebastian:2}]
    ]),

    signal: S('signal','Gaunt Mausoleum · Anne’s Voice','Episode IV · The Gaunt Mausoleum',`
Samira stepped towards the seventh point.

The room changed.

For an instant the stone around her became transparent. Beneath the floor lay a circular chamber, impossibly deep, filled with pale light.

Then Anne spoke again.

“Samira?”

“I'm here.”

A shaky breath answered her.

“You shouldn't be.”

Samira closed her eyes.

“Where are you?”

“I don't know.”

The voice sounded close enough to touch and impossibly far away at the same time.

Sebastian moved beside Samira.

“Anne?”

There was silence.

Then:

“Sebastian?”

He went pale.

Samira had never seen him look so frightened.

“I'm here,” he said.

Anne's voice softened.

“Don't open the seventh door.”

The seventh point went dark.

A hidden lock clicked somewhere beneath the floor.

Ominis raised his wand.

“That wasn't the door.”

“What was it?” Samira asked.

“A mechanism.”

The stone shifted.

A narrow seam appeared in the wall.

Anne spoke one last time.

“Find the journal.”

Then she was gone.

Samira stared at the opening.

Her father's warning.

The Gaunt records.

Anne's voice.

Everything was finally pointing in the same direction.

And Samira had the terrible feeling that whatever they found next would explain why.`,[
      ['Trust Anne’s warning and search for the journal without opening the seventh door.','journal',{anne:2}],
      ['Ask Sebastian to determine what the hidden mechanism is protecting.','door',{sebastian:2}],
      ['Ask Ominis whether Anne could have reached them through the blood wards.','journal',{ominis:2}]
    ]),

    door: S('door','Gaunt Mausoleum · The Seventh Door','Episode IV · The Gaunt Mausoleum',`
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

Six marks illuminated one after another.

The seventh remained dark.

Then the floor shifted.

A narrow seam appeared in the wall.

Beyond it was a staircase descending into darkness.

No blood ward blocked it.

No lock.

No warning.

That was somehow worse.

Samira looked at Sebastian.

He understood immediately.

“We don't open the door.”

Ominis nodded.

“We find the journal first.”

They entered the passage.

Behind them, the black stone gave a single slow pulse.

Samira did not look back.

She was afraid that if she did, she would see something standing behind the door.`,[
      ['Take the staircase carefully and keep the seventh door closed.','journal',{anne:1}],
      ['Have Sebastian lead with the stabilisation diagram ready.','journal',{sebastian:1}],
      ['Ask Ominis to listen before anyone takes another step.','journal',{ominis:1}]
    ]),

    journal: S('journal','Gaunt Mausoleum · The Hidden Journal','Episode IV · The Gaunt Mausoleum',`
The staircase ended beneath the mausoleum.

A single desk stood in the centre of a circular chamber.

On it rested a journal sealed with black wax.

Ominis stopped at the threshold.

“I know that seal.”

His voice had gone flat.

“It's older than my family line.”

Samira approached the desk.

The moment she touched the journal, the wax cracked by itself.

Nobody spoke.

The first pages contained genealogies.

The next held maps.

Then came warnings.

Different generations had added to them, sometimes correcting one another, sometimes crossing out entire paragraphs.

Near the back was a map of seven resonance sites.

Samira recognised six immediately.

The seventh point was not a place on the surface.

It was beneath Hogwarts.

Beneath the castle.

Beneath the Undercroft.

Her stomach dropped.

Her father's work had never been pointing away from Hogwarts.

It had been pointing down.

Sebastian read the next passage aloud.

“Resonance may separate curse from bearer only when the bearer willingly answers.”

Ominis went silent.

Samira thought of Anne's voice.

Don't open the seventh door.

Perhaps the warning was not about the door itself.

Perhaps it was about what waited behind it.

She turned another page.

There was a drawing of the chamber she had seen in the vision.

Beneath it, one final sentence:

The seventh door must never be opened by force.

It opens only for the person who has already been invited.

Samira looked at Sebastian.

Then Ominis.

Neither of them said what all three were thinking.

The invitation had been meant for her.`,[
      ['Take the journal and return to Hogwarts before opening anything else.','return',{anne:2}],
      ['Study the journal for a safe way to reach the resonance chamber.','return',{sebastian:1}],
      ['Ask Ominis what his family knew about the invited bearer.','return',{ominis:2}]
    ]),

    return: S('return','Hogwarts · Beneath the Undercroft','Episode V · The Resonance Chamber',`
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

They could not simply rescue her.

They could not force the curse away.

They could only create the conditions in which Anne might choose to let it go.

And someone would have to anchor the resonance from the outside.

Sebastian immediately began sketching possibilities.

Ominis began translating the ritual pages.

Samira watched them work.

The room slowly filled with parchment, ink, candlelight and the sound of three people refusing to give up.

For the first time, she allowed herself to imagine Anne without the curse.

The image was so fragile she almost pushed it away.

Hope had teeth.

She knew that now.`,[
      ['Ask Sebastian to build the stabiliser before they descend.','stabiliser',{sebastian:2}],
      ['Ask Ominis to decipher the ritual completely.','ritual',{ominis:2}],
      ['Focus first on finding Anne and understanding what she can hear.','anneChamber',{anne:2}]
    ]),

    stabiliser: S('stabiliser','The Undercroft · Sebastian’s Pattern','Episode V · The Resonance Chamber',`
Sebastian worked until the candles guttered.

This time Samira stayed beside him.

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

She wondered whether he understood how much that sentence included.

Sebastian met her eyes for a moment longer than necessary.

Then he looked away.

“Don't make that face.”

“What face?”

“The one where you're deciding whether to argue with me.”

“I was deciding whether you need sleep.”

“That too.”

For a moment, the room felt almost normal.

Then the stabiliser pulsed in Sebastian's hand.

All three went quiet.

The chamber beneath them had answered.`,[
      ['Ask Sebastian what he is afraid of losing.','ritual',{sebastian:2}],
      ['Ask Ominis to test the stabiliser for hidden blood magic.','ritual',{ominis:1}],
      ['Keep the focus on Anne and prepare to descend.','ritual',{anne:2}]
    ]),

    anneChamber: S('anneChamber','The Undercroft · Listening for Anne','Episode V · The Resonance Chamber',`
Samira sat alone for a few minutes after the others had fallen silent.

She placed her father's notes in front of her and closed her eyes.

The library had felt like a beginning.

The mausoleum had felt like a warning.

This room felt like a decision.

She listened.

At first there was only Hogwarts: distant footsteps, pipes shifting inside the walls, the faint movement of students beginning another ordinary morning.

Then, beneath it all, she heard something else.

A heartbeat.

Not hers.

“Anne?”

The sound stopped.

Samira held her breath.

A whisper answered.

“I'm here.”

Her eyes opened.

The voice was not coming through the walls.

It was coming through the resonance itself.

“Are you safe?” Samira asked.

A pause.

“No.”

The honesty hurt.

“Can you see us?”

“No. But I can feel when you are close.”

Samira looked at the journal.

“Can you feel the door?”

“Yes.”

Another pause.

“Samira, whatever is behind it doesn't want me to leave.”

Her blood ran cold.

“Then we'll find another way.”

Anne's voice softened.

“You always say that.”

Samira swallowed.

“And I always mean it.”

For the first time, Anne laughed faintly.

Then the connection broke.

Samira sat very still.

She had expected fear.

She had expected desperation.

She had not expected Anne to sound relieved.`,[
      ['Tell Sebastian and Ominis exactly what Anne said.','ritual',{anne:2}],
      ['Keep Anne’s message private until they understand it.','ritual',{anne:1}],
      ['Ask Ominis whether the chamber could be holding Anne in place.','ritual',{ominis:1}]
    ]),

    ritual: S('ritual','The Undercroft · The Ritual','Episode V · The Resonance Chamber',`
Ominis deciphered the final pages while Sebastian prepared the stabiliser.

The ritual was not an attack.

It was an invitation.

The chamber would amplify the curse, isolate its pattern, and then offer the bearer a way to reject it.

But there was a condition.

Someone had to remain connected to the resonance while the bearer chose.

Samira looked at the two boys.

“That person could be hurt.”

“Yes,” Ominis said.

Sebastian immediately looked at her.

“No.”

She frowned.

“You don't get to decide that.”

“I know.”

His voice softened.

“That's why I'm asking you not to volunteer before we know what it does.”

Ominis turned another page.

“There is another complication.”

Neither of them moved.

“The connection is strongest when the person entering the resonance trusts the person anchoring it.”

Silence.

Samira understood why both boys had suddenly stopped speaking.

This was no longer only about magical theory.

The chamber would test the relationships between them.

Trust under pressure.

Trust when someone was afraid.

Trust when there was no guarantee of coming back unchanged.

Samira closed the journal.

“Then we decide before we go down.”

Sebastian nodded.

Ominis did too.

Neither looked away.`,[
      ['Choose Sebastian as the person Samira trusts to anchor the resonance.','descent',{sebastian:3}],
      ['Choose Ominis as the person Samira trusts to anchor the resonance.','descent',{ominis:3}],
      ['Refuse to choose until they find another solution.','descent',{anne:2}]
    ]),

    descent: S('descent','Beneath Hogwarts · The Resonance Chamber','Episode V · The Resonance Chamber',`
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

Only now Samira could see what surrounded it: hundreds of names carved into the walls.

Some were crossed out.

Some were incomplete.

One name had been written recently.

Anne Sallow.

Sebastian stopped breathing for a second.

Ominis whispered, “It knew she was coming.”

The chamber woke.

Six marks ignited.

The seventh remained dark.

Samira stepped forward.

From behind the door came Anne's voice.

“Samira.”

This time there was no mistaking it.

She was there.

And she was afraid.

Samira placed her hand against the black stone.

The chamber answered.

Pain flashed through her palm.

Sebastian caught her shoulder.

Ominis raised his wand.

“Don't break the connection,” Ominis said.

Samira looked at the seventh mark.

Her father's warning returned to her.

Do not open seven.

Anne's warning followed.

Don't open the seventh door.

Then the black stone whispered her name.

Not from behind it.

From inside it.`,[
      ['Speak to Anne without opening the seventh door.','finale',{anne:3}],
      ['Use Sebastian’s stabiliser to make contact safely.','finale',{sebastian:2}],
      ['Let Ominis listen for the safest way to answer.','finale',{ominis:2}]
    ]),

    finale: S('finale','Beneath Hogwarts · The Seventh Door','Episode VI · The Choice',`
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

Then another voice spoke.

Not Anne.

A man's voice.

Soft.

Familiar.

“Samira.”

Her father's voice.

Sebastian's expression changed.

Ominis went completely still.

Samira could not breathe.

The voice came again.

“You finally found the seventh door.”

The chamber shuddered.

And the door began to open.`,[
      ['Step forward and answer her father’s voice.','threshold',{anne:2}],
      ['Turn away from the voice and protect Anne first.','threshold',{anne:3}],
      ['Ask Sebastian and Ominis to keep the connection anchored while Samira listens.','threshold',{sebastian:1,ominis:1}]
    ]),

    threshold: S('threshold','Beyond the Seventh Door','Episode VI · The Choice',`
The door opened onto a sky that did not belong beneath Hogwarts.

There were stars everywhere.

Not the familiar stars seen from the Astronomy Tower, but thousands of points of light moving slowly through a darkness that seemed to have depth.

Samira stood at the threshold.

Behind her, Sebastian and Ominis were still in the chamber.

Their voices reached her from far away.

“Samira.”

She could feel Sebastian's hand around the stabiliser.

She could feel Ominis holding the resonance steady.

That was what kept her from stepping completely through.

Ahead, a figure stood beneath the impossible sky.

She could not see his face.

But she knew his voice.

Her father.

“You shouldn't have found this.”

Samira's throat tightened.

“You left the trail.”

A pause.

“I left a warning.”

“About the seventh door?”

“No.”

The figure looked past her, towards the chamber.

“About what is on the other side of it.”

A second presence moved behind him.

Something vast crossed between the stars.

Samira stepped back.

Her father raised his voice.

“Do not let it learn your name.”

Then the stars went dark.

Anne screamed.

The connection snapped.

Samira fell backwards into the chamber.

Sebastian caught her.

Ominis dropped to one knee, breathing hard.

The door slammed shut.

For several seconds none of them moved.

Then the seventh mark went black again.

On the wall, beneath Anne's name, new words appeared:

THE BEARER HAS BEEN SEEN.

Samira stared at them.

She understood at last.

They had not discovered the secret.

The secret had discovered them.`,[
      ['Stay in the chamber and investigate the new inscription.','aftermath',{anne:2}],
      ['Get Anne out of the resonance and leave immediately.','aftermath',{anne:3}],
      ['Ask Ominis to tell them exactly what he sensed behind the door.','aftermath',{ominis:2}]
    ]),

    aftermath: S('aftermath','The Undercroft · Before Dawn','Episode VII · What Answers',`
Morning arrived as though nothing had happened.

Students hurried through the corridors. Professors complained about late homework. Somewhere above them, a suit of armour had apparently fallen down a staircase.

The ordinary world had no idea what had happened beneath it.

Samira sat in the Undercroft with the Gaunt journal open before her.

Sebastian had fallen asleep against the wall despite insisting that he was perfectly awake.

Ominis remained beside the table, quiet and exhausted.

Anne's voice was gone.

But the chamber had left something behind.

A new page had appeared in her father's journal.

Samira stared at it for a long time before touching it.

The handwriting was unmistakable.

If you are reading this, then the seventh door has already seen you.

Do not trust the voice that answers from beyond it.

Samira's fingers tightened around the page.

Below the warning was a second sentence.

But trust the people who brought you here.

She looked at Sebastian.

Then Ominis.

For once, neither of them had an answer.

The story had changed shape again.

Anne was still trapped.

Samira's father might still be alive somewhere beyond the threshold.

Something ancient had learned her name.

And the next step would require more than finding another spell.

It would require deciding who Samira could trust when the truth finally demanded a price.`,[
      ['Continue into Episode VIII.','episode8',{anne:1}],
      ['Stay with Sebastian and ask what he would do next.','sebastianScene',{sebastian:2}],
      ['Stay with Ominis and ask what he believes the warning means.','ominisScene',{ominis:2}]
    ]),

    sebastianScene: S('sebastianScene','The Undercroft · Sebastian Awake','Episode VIII · The Weight of a Choice',`
Sebastian woke when Samira sat beside him.

For a moment he looked confused.

Then the memory returned.

“The door.”

Samira nodded.

“And my father.”

Sebastian studied her face.

“You're thinking about going back.”

She did not answer.

That was answer enough.

He sighed.

“I knew you were going to say that.”

“You don't know what I'm going to do.”

“I know you.”

The words were quiet.

Not teasing.

Not flirtatious.

Just certain.

Sebastian looked down at the cracked stabiliser in his hand.

“I don't think your father wanted you to follow him.”

“Why?”

“Because he left warnings.”

Samira looked at the journal.

“And he also left a trail.”

Sebastian nodded reluctantly.

“Then we follow it.”

He looked at her.

“But next time, we do it with a plan that doesn't involve nearly dying.”

A small smile escaped her.

“I thought you liked dangerous plans.”

“I do.”

His eyes stayed on hers.

“I just like you alive more.”

The silence that followed was longer than either of them expected.

Then footsteps sounded in the corridor.

Ominis.

Reality returned.

There would be time to understand the moment later.

For now, there was a mystery beneath Hogwarts waiting for them.`,[
      ['Return to Ominis and continue the investigation.','episode8',{ominis:1}],
      ['Tell Sebastian she is not leaving him behind next time.','episode8',{sebastian:2}],
      ['Open the journal and begin tracing the next clue.','episode8',{anne:1}]
    ]),

    ominisScene: S('ominisScene','The Undercroft · Ominis Remembers','Episode VIII · The Weight of a Choice',`
Ominis remained beside the table long after Sebastian had fallen asleep.

Samira sat opposite him.

“What did you sense?” she asked.

He was silent for a while.

“Something I hoped never to hear.”

“From your family?”

“Older.”

His fingers moved across the edge of the journal.

“My family kept records because they were afraid of things they could not control. They convinced themselves that knowledge made them powerful.”

Samira waited.

“What was behind the door?”

Ominis shook his head.

“I don't know.”

It was the same answer her father had left her.

The same answer she hated.

“But I know one thing,” Ominis continued. “It noticed you before we reached the mausoleum.”

Samira's stomach tightened.

“The silver line?”

“Yes.”

“The gate?”

“Yes.”

“The door?”

Ominis's expression darkened.

“Yes.”

He reached across the table and placed his hand over the journal.

“Whatever this is, Samira, it has been waiting for someone who could answer it.”

She looked down at his hand.

“Then we'll make sure it doesn't get to decide what happens next.”

Ominis smiled faintly.

“That sounds like you.”

For a moment the exhaustion lifted.

Then he added quietly:

“Just don't make me regret trusting you.”

Samira met his gaze.

“I won't.”`,[
      ['Return to Sebastian and continue the investigation.','episode8',{sebastian:1}],
      ['Tell Ominis he does not have to face this alone.','episode8',{ominis:2}],
      ['Open the journal and trace the next clue.','episode8',{anne:1}]
    ]),

    episode8: S('episode8','Hogwarts · The Morning After','Episode VIII · The Weight of a Choice',`
The next morning, Hogwarts carried on as though nothing had happened.

That was the strangest part.

Students laughed in the corridors. Owls swept through the Great Hall. Professors assigned essays as if essays were the most important problem in the world.

Samira sat through breakfast with the sensation that she was carrying an entire second reality beneath her skin.

A door beneath Hogwarts.

A voice wearing her father's words.

Anne somewhere beyond the resonance.

And two people beside her who had now become part of the danger.

Later, in the library, the three spread the journal across a table.

There was no silver line this time.

No magical pulse.

Only a fresh mark on the final page.

A location.

Not beneath the castle.

Not in the forest.

In Hogwarts itself.

The Astronomy Tower.

Beside it, her father's handwriting contained only one sentence:

When the stars move, follow the shadow they cast.

Sebastian stared at the page.

Ominis slowly tilted his head.

Samira looked towards the windows.

The sky above Hogwarts was beginning to darken.

Another night was coming.

And somewhere above them, the stars were already moving.`,[
      ['Go to the Astronomy Tower with Sebastian.','astronomy',{sebastian:2}],
      ['Go to the Astronomy Tower with Ominis.','astronomy',{ominis:2}],
      ['Bring both of them and follow the clue together.','astronomy',{anne:2}]
    ]),

    astronomy: S('astronomy','Astronomy Tower · When the Stars Move','Episode IX · The Shadow Map',`
Night settled over Hogwarts slowly.

By the time Samira reached the Astronomy Tower, the castle below had become a field of warm windows and distant candlelight.

The journal lay open in her hands.

When the stars move, follow the shadow they cast.

At first she saw nothing.

Then a cloud moved across the moon.

The tower's ancient brass instruments shifted with the wind.

One shadow crossed the stone floor.

Then another.

They formed a shape.

Seven points.

A broken circle.

The same symbol.

Samira stepped closer.

Sebastian or Ominis stood beside her, depending on the path she had chosen, while the other watched from a few steps away.

The shadow moved again.

This time it pointed towards the castle.

Not down.

Up.

The Astronomy Tower itself was part of the resonance map.

A hidden compartment clicked open beneath one of the instruments.

Inside was a small piece of parchment.

Samira unfolded it.

Her father's handwriting appeared once more.

If the seventh door has seen you, the eighth will test you.

The next line had been written later, in darker ink.

Do not go alone.

Samira looked at the people beside her.

For once, the instruction did not frighten her.

It made sense.

Whatever came next, she would not face it alone.`,[
      ['Follow the shadow into the hidden passage.','passage',{anne:2}],
      ['Stop and decipher the entire map before moving.','passage',{ominis:1}],
      ['Promise that none of them will cross the next threshold alone.','passage',{sebastian:1,ominis:1}]
    ]),

    passage: S('passage','Hogwarts · The Hidden Passage','Episode IX · The Shadow Map',`
The passage opened behind the astronomy mechanism with a sound like stone remembering how to move.

Cold air rose from below.

Samira held the parchment close.

The writing had faded further, but one final symbol remained visible.

A circle.

Seven points.

And a small mark in the centre that looked almost like an eye.

They descended.

The staircase was narrow and old. Dust covered the steps, but not evenly. Someone had walked here recently.

Samira noticed the footprints first.

Three sets.

No.

Four.

The fourth set stopped halfway down.

There were no footprints beyond it.

Sebastian whispered, “That's impossible.”

Ominis lifted his wand.

“No,” he said.

“It isn't.”

Samira looked ahead.

The corridor ended at a mirror.

Not an ordinary mirror.

Its surface showed the room behind them—but there were four figures reflected in it.

Samira.

Sebastian.

Ominis.

And someone standing directly behind Samira.

She turned.

Nobody was there.

When she looked back at the mirror, the fourth figure had moved closer.

It raised one hand.

The mirror cracked.

A voice whispered from the other side.

“Choose carefully.”

The crack spread across the glass.

Then the mirror shattered without making a sound.`,[
      ['Step through the broken mirror before the passage closes.','mirror',{anne:2}],
      ['Destroy the mirror and refuse its invitation.','mirror',{ominis:2}],
      ['Have Sebastian stabilise the mirror while Samira studies the reflection.','mirror',{sebastian:2}]
    ]),

    mirror: S('mirror','The Hidden Passage · The Reflection','Episode X · The Choice',`
The broken mirror did not fall.

Its pieces remained suspended in the air.

Each fragment reflected a different version of the same moment.

In one, Anne stood beside Samira, smiling without pain.

In another, Sebastian was older, exhausted, and alone.

In a third, Ominis stood beneath the Gaunt crest with his wand lowered.

And in the largest fragment, Samira stood somewhere beneath a sky full of stars.

Every reflection looked real.

That was the danger.

The voice returned.

“You may have what you want.”

Samira's stomach turned.

It knew exactly what to offer.

Anne without the curse.

Her father alive.

A future in which nobody had to pay for the choices they had made.

All it wanted was an answer.

One step.

One yes.

Samira looked at the fragments.

Then at Sebastian.

Then Ominis.

Neither tried to tell her what to choose.

They simply stayed.

That mattered more than the voice understood.

Samira reached for the journal.

Her father's final instruction was written beneath the broken mirror symbol.

The thing that promises everything has already taken something.

She closed the journal.

“No.”

The fragments trembled.

The voice became louder.

“Then you will lose her.”

Samira's heart broke at the threat.

But she did not move.

Because this time she understood the difference between hope and surrender.`,[
      ['Refuse the bargain and protect Anne’s choice.','newdawn',{anne:3}],
      ['Ask Sebastian to help break the resonance without accepting its offer.','newdawn',{sebastian:2}],
      ['Ask Ominis to seal the passage before the voice can answer again.','newdawn',{ominis:2}]
    ]),

    newdawn: S('newdawn','Hogwarts · Before Sunrise','Episode XI · The Next Secret',`
The mirror went dark.

Not shattered.

Not destroyed.

Simply dark.

The passage fell silent.

For several seconds Samira could hear only the three of them breathing.

Then, somewhere far above, the first bell of morning rang.

Hogwarts was waking.

They had not solved Anne's curse.

They had not found Samira's father.

They had not destroyed the thing behind the seventh door.

But they had learned something more important.

It could bargain.

It could lie.

And, most importantly, it could be refused.

Samira looked at the journal.

A new sentence had appeared on the final page.

The eighth door is not beneath Hogwarts.

It is within it.

Sebastian read the line twice.

Ominis went pale.

Samira looked towards the staircase.

Above them, Hogwarts continued its ordinary morning.

Somewhere in the castle was another door.

Somewhere, Anne was still waiting.

And somewhere beyond the resonance, her father was waiting too.

This time, however, Samira knew the rules.

The next chapter would not begin with a mysterious voice.

It would begin with a choice she made herself.`,[
      ['Continue the story.','newdawn',{anne:1}]
    ])
  };

  function apply(delta = {}) {
    Object.entries(delta).forEach(([k, v]) => { state[k] = (state[k] || 0) + v; });
  }

  function render() {
    const n = nodes[state.node] || nodes.library;
    $('#chapterLabel').textContent = n.episode;
    $('#location').textContent = n.loc;
    $('#progress').textContent = `Scene ${state.history.length + 1}`;
    $('#story').innerHTML = n.text.trim().split(/\n\n+/).map(p => `<p>${esc(p.trim())}</p>`).join('');
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
