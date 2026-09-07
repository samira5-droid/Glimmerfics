const KEY='glimmerfics-hogwarts-v7';
const $=s=>document.querySelector(s);
const blank={node:'start',sebastian:0,ominis:0,anne:0,flags:{},history:[],custom:[]};
let state=JSON.parse(localStorage.getItem(KEY)||'null')||blank;
const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}
const effect=(e={})=>{for(const k of ['sebastian','ominis','anne']) state[k]+=(e[k]||0);Object.assign(state.flags,e.flags||{});save()};
const N=(id,loc,text,choices)=>({id,loc,text,choices});
const nodes={
start:N('start','Hogwarts Library · After Midnight',`The library had gone so quiet that I could hear the wind worrying at the tall windows. My father's notes covered half the table, Sebastian's diagram lay open beside them, and Ominis sat near the window with his wand resting between his fingers.

We had been working for hours. None of us had said Anne's name in a while, but she was there in every calculation, every crossed-out theory, every silence.

Then a thin silver line appeared across one of my father's pages.

I froze.

It travelled through the ink as if the words themselves had become liquid, crossed the table, and stopped at the centre of Sebastian's diagram.

“Did you do that?” Sebastian asked.

“No.”

“Don't touch it,” Ominis said immediately.

The line pulsed again.

I felt something beneath my ribs answer it.

The parchment was waiting for me.`,[
['Ask Ominis what he can sense.','ask_ominis',{ominis:1,flags:{askedOminis:true}}],
['Move closer to Sebastian and study the diagram with him.','ask_sebastian',{sebastian:1,flags:{choseSebastian:true}}],
['Reach out and touch the silver line.','touch_resonance',{anne:1,flags:{touchedResonance:true}}],
['Tell them everything my father wrote about resonance.','tell_notes',{anne:1,ominis:1,flags:{sharedNotes:true}}]
]),
ask_ominis:N('ask_ominis','Hogwarts Library · Ominis Listens',`I turned toward Ominis instead of the parchment.

“What can you sense?”

His expression tightened. He angled his head, listening.

“A vibration,” he said at last. “Very low. It isn't coming from the room. It's coming from whatever your father was studying.”

Sebastian glanced between us. “And?”

“It feels old.” Ominis paused. “Older than Hogwarts, perhaps. And it is reacting to Samira.”

My stomach tightened.

“To me?”

“Yes.” His voice softened. “That is what worries me.”

I looked down at the silver line. It was still moving, slowly, toward the centre of the diagram.`,[
['Ask Ominis to keep listening while I examine the page.','listen_page',{ominis:1,flags:{ominisGuided:true}}],
['Ask Sebastian whether his diagram predicted this.','ask_sebastian',{sebastian:1,flags:{choseSebastian:true}}],
['Ignore the warning and touch the silver line anyway.','touch_resonance',{anne:1,flags:{touchedResonance:true}}]
]),
ask_sebastian:N('ask_sebastian','Hogwarts Library · Sebastian’s Diagram',`I moved beside Sebastian and bent over the diagram.

“You drew this?”

“Most of it.” He pointed to a cluster of circles. “But this part never behaved like this before.”

The silver line had found the exact centre of his work.

“You knew something like this could happen?” I asked.

“I suspected the locations mattered. I didn't know they would answer you.”

He sounded annoyed with himself for not knowing more.

I recognised that look now: the one he wore whenever Anne was involved and the answer refused to come quickly enough.

“Show me what you were hiding.”

He hesitated, then reached beneath the diagram and pulled out a folded page.

Seven marks surrounded a central circle.

My breath caught.

It was almost identical to the symbol from my father's notes.`,[
['Ask Sebastian to explain the seven marks.','seven_marks',{sebastian:1,flags:{knowsSymbol:true}}],
['Ask why he kept this page from me.','sebastian_confession',{sebastian:2,flags:{trustSebastian:true}}],
['Call Ominis over and show him the symbol.','seven_marks',{ominis:1,flags:{knowsSymbol:true}}]
]),
touch_resonance:N('touch_resonance','Hogwarts Library · The First Resonance',`I reached out before I could talk myself out of it.

My fingertip touched the silver line.

Cold shot through my hand. Sebastian caught my wrist when I swayed, and for one absurd second I noticed the warmth of his fingers before the magic swallowed my attention.

The library vanished.

I stood in a pale stone corridor with no torches and no windows. A low vibration filled the air. At the far end was a door bearing my father's symbol.

I stepped toward it.

The door opened a fraction.

Something moved behind it.

Then I was back at the table, gasping.

Ominis was standing. Sebastian had not let go of my wrist.

“You saw something,” he said.

“Yes.”

My voice shook.

“I saw a door. And my father's symbol was on it.”`,[
['Tell Sebastian exactly what I saw.','vision_sebastian',{sebastian:1,flags:{sharedVision:true}}],
['Tell Ominis first about the vibration.','vision_ominis',{ominis:1,flags:{sharedVision:true}}],
['Describe the symbol to both of them and search the notes.','seven_marks',{anne:1,flags:{sharedVision:true,knowsSymbol:true}}]
]),
tell_notes:N('tell_notes','Hogwarts Library · My Father’s Research',`I pulled the nearest pages toward us.

“My father believed resonance wasn't simply sound,” I said. “He thought magic could be strengthened or disrupted by certain frequencies. Certain places could amplify it.”

Sebastian read quickly, his eyes moving over the equations.

“And you never told me this?”

“I didn't know it mattered.”

Ominis touched the edge of the parchment without taking it.

“If your father was mapping places where magic becomes stronger, there may be a reason this symbol appeared now.”

I looked at Anne's name in the margin.

“Then we find that reason.”

Neither of them argued.`,[
['Ask Sebastian to compare the notes with his diagram.','seven_marks',{sebastian:1,flags:{knowsSymbol:true}}],
['Ask Ominis whether the old magic resembles anything in his family history.','family_memory',{ominis:1,flags:{familyLead:true}}],
['Insist that we investigate together, but understand the risks first.','risk_theory',{anne:1,flags:{careful:true}}]
]),
listen_page:N('listen_page','Hogwarts Library · Beneath the Ink',`Ominis leaned closer to the page without touching it.

“The vibration changes when you move the parchment,” he murmured.

I shifted it slightly.

He immediately turned his head.

“There.”

A tiny mark sat beneath my father's handwriting, almost invisible.

Sebastian scraped away a layer of dried ink with the tip of his quill.

A map reference appeared.

Not a location in the castle.

A family crest.

Ominis went completely still.

“I know that mark.”

I looked at him.

“Where?”

“My family mausoleum.”`,[
['Ask Ominis what is hidden there.','family_memory',{ominis:2,flags:{familyLead:true}}],
['Ask Sebastian whether the map matches his diagram.','seven_marks',{sebastian:1,flags:{knowsSymbol:true}}]
]),
seven_marks:N('seven_marks','The Undercroft · The Theory',`We moved to the Undercroft with the important pages.

Sebastian spread the diagram across the table.

“These aren't measurements,” he said. “They're positions. Places where resonance can be amplified.”

I placed my father's page beside it.

The seven marks aligned.

My heart began to pound.

“If we can control the resonance,” Sebastian said carefully, “it might interrupt the way Anne's curse feeds itself.”

“Might,” I repeated.

“I won't promise you a cure I can't prove.”

I appreciated the honesty. I hated the uncertainty.

Ominis's fingers tightened around his wand.

“And the cost?”

Sebastian did not answer immediately.

That frightened me more than an answer would have.`,[
['Ask Sebastian to show me the page he has been hiding.','sebastian_confession',{sebastian:1,flags:{trustSebastian:true}}],
['Ask Ominis what worries him about resonance magic.','ominis_risk',{ominis:1}],
['Say that if there is a chance to help Anne, we have to investigate.','anne_choice',{anne:2}],
['Insist that we understand every risk before trying anything.','risk_theory',{anne:1,flags:{careful:true}}]
]),
sebastian_confession:N('sebastian_confession','The Undercroft · Sebastian',`Sebastian finally unfolded the page.

“I wasn't ready to show you this.”

The stabilisation pattern was beautiful and frightening: seven marks around a central point, all connected by fine lines.

“Could it cure her?” I asked.

“No.” He looked directly at me. “But it might give her time.”

He swallowed.

“I can't stop looking for something that works. Every time I find another problem, I think of Anne still suffering.”

The confidence slipped from his voice.

“I don't know how to do this, Samira.”

I reached across the table and took his hand.

His fingers closed around mine.

“You don't have to do it alone.”

For once, Sebastian had no clever answer.`,[
['Promise to help, but make Sebastian rest tonight.','pinky',{sebastian:2,anne:1,flags:{promisedSebastian:true}}],
['Tell him he does not have to carry Anne’s fate alone.','pinky',{sebastian:1,anne:1,flags:{promisedSebastian:true}}],
['Ask Ominis to help keep Sebastian grounded.','pinky',{ominis:1,sebastian:1,flags:{promisedSebastian:true}}]
]),
vision_sebastian:N('vision_sebastian','The Undercroft · What I Saw',`I told Sebastian everything: the corridor, the pale stone, the vibration, and the door bearing my father's symbol.

He listened without interrupting.

When I finished, he looked at the diagram again.

“The door is probably one of the resonance chambers.”

“Probably?”

“I am trying very hard not to lie to you.”

I almost smiled.

Ominis turned toward us.

“If it is a chamber, the question is where.”

Sebastian tapped the seven marks.

“And now we have somewhere to look.”`,[
['Ask Sebastian to keep working while I rest.','pinky',{sebastian:1,flags:{promisedSebastian:true}}],
['Ask Ominis whether his family records could identify the chamber.','family_memory',{ominis:1,flags:{familyLead:true}}]
]),
vision_ominis:N('vision_ominis','The Undercroft · The Sound',`I told Ominis about the vibration before I told either of them anything else.

He listened to my description with unusual stillness.

“That sound,” he said, “is similar to something I have heard in old Gaunt records.”

Sebastian looked up.

“You never mentioned that.”

“Because I never had a reason to.” Ominis turned toward me. “I do now.”

He hesitated before continuing.

“There may be records in my family's mausoleum. A journal. Maps of the catacombs.”

The thought of asking him to return there made my chest tighten.

“We would go together,” I said.

Ominis was quiet.

Then: “I know.”`,[
['Tell Ominis he will not face his family’s vault alone.','family_memory',{ominis:2,flags:{familyLead:true}}],
['Ask Sebastian what we need before Hogsmeade weekend.','pinky',{sebastian:1,flags:{promisedSebastian:true}}]
]),
family_memory:N('family_memory','Hogwarts Library · The Gaunt Vault',`Ominis became quieter when he began talking about his family.

“The vault is in the family mausoleum,” he said. “About a mile from the main house.”

“Blood wards?” Sebastian asked.

“Yes. Old ones. If they are still active, they will recognise me.”

“And that's good?” I asked.

“Not necessarily.”

He explained that a journal might contain records of the catacombs and older magical sites connected to the family.

“The plan is simple,” he said. “Hogsmeade weekend, we slip out, I handle the blood wards, we're in and out before anyone notices.”

I stared at him.

“That is your definition of simple?”

A faint smile appeared.

“I said the plan was simple. I didn't say it was safe.”

“Are you afraid?” I asked.

“Yes.”

The honesty of it stayed with me.

“You won't be alone.”

His expression softened.

“You shouldn't make promises like that lightly, Samira.”

“I don't.”`,[
['Ask exactly how the blood wards work.','vault_details',{ominis:1}],
['Tell Ominis I will be beside him in the vault.','vault_details',{ominis:2,anne:1,flags:{vaultPromise:true}}],
['Ask Sebastian what we should prepare.','vault_details',{sebastian:1}]
]),
om inis_risk:N('ominis_risk','The Undercroft · Ominis’s Warning',`Ominis lowered his voice.

“Resonance does not only strengthen magic. It can strip away the boundaries around it.”

I looked at Sebastian.

“Meaning?”

“Meaning a curse could become louder before it becomes weaker.”

The room seemed colder.

“So we could make Anne worse.”

“Yes.”

I hated hearing it, but I needed the truth.`,[
['Say we stop until we understand how to control it.','risk_theory',{anne:1,flags:{careful:true}}],
['Say we continue researching because Anne cannot wait forever.','anne_choice',{anne:2}]
]),
risk_theory:N('risk_theory','The Undercroft · No Reckless Magic',`I folded my father's notes carefully.

“We do not experiment on Anne blindly.”

Sebastian looked ready to argue, then stopped.

Ominis nodded.

“We find the chamber first. We understand the resonance. Then we decide.”

For the first time that night, the three of us were completely agreed.

It did not make the problem smaller.

But it made the path ahead feel less impossible.`,[
['Return to the library and organise everything before dawn.','pinky',{anne:1}],
['Ask Ominis whether his family records can give us the missing piece.','family_memory',{ominis:1}]
]),
anne_choice:N('anne_choice','The Undercroft · For Anne',`I looked down at Anne's name.

“If there is even a chance,” I said, “we have to understand it. Not because we are reckless. Because doing nothing is a choice too.”

Sebastian nodded slowly.

Ominis did not disagree.

Then Sebastian pushed the diagram toward me.

“Tomorrow,” he said. “We start with the chamber.”

I knew that tomorrow would change everything.`,[
['Make Sebastian promise he will sleep before tomorrow.','pinky',{sebastian:2,flags:{promisedSebastian:true}}],
['Ask Ominis what the Gaunt records might reveal.','family_memory',{ominis:1}]
]),
pinky:N('pinky','Hogwarts Library · The Pinky Promise',`By the time we returned to the library, the candles had burned almost to their holders.

Sebastian was still holding the diagram.

“Tomorrow,” he said. “I'll finish it.”

“You said that yesterday.”

He sighed.

I held out my little finger.

He stared at it.

“What are you doing?”

“Making sure you actually sleep.”

“That is absurd.”

“Then you have nothing to lose.”

A reluctant smile appeared.

Slowly, he hooked his little finger around mine.

“Fine,” he murmured. “Pinky promise.”

For one quiet second, neither of us moved.

Then Ominis cleared his throat.

“I feel I should be charging admission.”

I laughed.

Sebastian groaned.

The tension broke. For a few minutes, there was no curse, no resonance, no vault. Just us.

I wished I could keep that moment somewhere safe.`,[
['Keep the promise between Sebastian and me to myself.','vault_plan',{sebastian:1}],
['Tease Ominis about being jealous.','vault_plan',{ominis:1}],
['Ask Ominis what he has been thinking about all night.','vault_plan',{ominis:1}],
['Return to the notes and focus on what comes next.','vault_plan',{anne:1}]
]),
vault_details:N('vault_details','Hogwarts Library · The Plan',`We spread the map across the table.

Ominis explained the blood wards as carefully as he could. Sebastian marked possible escape routes. I copied my father's symbol beside the map reference.

The three pieces finally began to fit together: resonance, the hidden chamber, and the Gaunt catacombs.

“We go during Hogsmeade weekend,” Ominis said.

No one pretended it would be safe.

But now we had a plan.`,[
['Ask Sebastian to finish the stabilisation diagram.','vault_plan',{sebastian:1}],
['Ask Ominis to show me where the journal should be.','vault_plan',{ominis:1}],
['Tell them both that we are going to get that journal.','vault_plan',{sebastian:1,ominis:1,anne:1}]
]),
vault_plan:N('vault_plan','Hogwarts Library · Before Dawn',`The first pale light of dawn appeared beyond the windows.

I looked at everything on the table: my father's notes, Sebastian's diagram, the symbol from my vision, and the map leading toward the Gaunt mausoleum.

We had started tonight with a silver line we did not understand.

We were leaving with a destination.

It was not enough.

But it was something.

Sebastian gathered the papers.

Ominis reached for his wand.

I looked at both of them and felt the weight of what came next.

Hogsmeade weekend.

The vault.

The journal.

And, if my father's research was right, the first real chance we had found to help Anne.`,[])
};
// Fix the intentionally split identifier without changing the readable story data.
nodes.ominis_risk=nodes['ominis_risk']||nodes['ominis_risk'];
function applyCustom(text){state.custom.push(text);state.history.push({id:state.node,choice:'Custom action: '+text});state.node='pinky';save();render()}
function render(){const n=nodes[state.node]||nodes.start;$('#chapterLabel').textContent='Episode III · The First Resonance';$('#location').textContent=n.loc;$('#progress').textContent=state.node==='vault_plan'?'Episode ending':'Continue the story';
$('#story').innerHTML=n.text.split(/\n\n/).map(p=>'<p>'+esc(p)+'</p>').join('');
$('#choices').innerHTML=n.choices.map((c,i)=>'<button type="button" data-i="'+i+'">'+(i+1)+'. '+esc(c[0])+'</button>').join('');
$('#choices').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>choose(+b.dataset.i)));
$('#relationshipState').textContent='Sebastian · '+state.sebastian+' | Ominis · '+state.ominis+' | Anne · '+state.anne;
}
function choose(i){const n=nodes[state.node],c=n.choices[i];if(!c)return;state.history.push({id:n.id,choice:c[0]});effect(c[2]);state.node=c[1];save();render()}
$('#customForm').addEventListener('submit',e=>{e.preventDefault();const v=$('#customChoice').value.trim();if(v) {$('#customChoice').value='';applyCustom(v)}});
$('#restart').addEventListener('click',()=>{if(confirm('Restart this story from the beginning?')){state={...blank,flags:{},history:[],custom:[]};save();render()}});
render();
