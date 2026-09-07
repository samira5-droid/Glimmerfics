(() => {
  'use strict';
  const $ = (s) => document.querySelector(s);
  const KEY = 'glimmerfics-hogwarts-v8';
  const blank = { node: 'start', sebastian: 0, ominis: 0, anne: 0, history: [], custom: [] };
  let state;
  try { state = JSON.parse(localStorage.getItem(KEY) || 'null') || structuredClone(blank); } catch (_) { state = structuredClone(blank); }
  const save = () => localStorage.setItem(KEY, JSON.stringify(state));
  const esc = (s) => { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; };
  const N = (id, loc, text, choices) => ({ id, loc, text, choices });
  const nodes = {
    start: N('start','Hogwarts Library · After Midnight',`The library had gone so quiet that I could hear the wind worrying at the tall windows. My father's notes covered half the table, Sebastian's diagram lay open beside them, and Ominis sat near the window with his wand resting between his fingers.\n\nWe had been working for hours. None of us had said Anne's name in a while, but she was there in every calculation, every crossed-out theory, every silence.\n\nThen a thin silver line appeared across one of my father's pages. It travelled through the ink and stopped at the centre of Sebastian's diagram.\n\nI froze.\n\n“Did you do that?” Sebastian asked.\n\n“No.”\n\n“Don't touch it,” Ominis said immediately.\n\nThe line pulsed again. I felt something beneath my ribs answer it.\n\nThe parchment was waiting for me.`,[
      ['Ask Ominis what he can sense.','ominis',{ominis:1}],
      ['Move closer to Sebastian and study the diagram.','sebastian',{sebastian:1}],
      ['Reach out and touch the silver line.','resonance',{anne:1}],
      ['Tell them everything my father wrote about resonance.','notes',{anne:1,ominis:1}]
    ]),
    ominis: N('ominis','Hogwarts Library · Ominis Listens',`I turned toward Ominis instead of the parchment.\n\n“What can you sense?”\n\nHis expression tightened.\n\n“A vibration,” he said at last. “Very low. It isn't coming from the room. It's coming from whatever your father was studying.”\n\nHe paused.\n\n“It feels old. And it is reacting to you.”\n\nMy stomach tightened.\n\n“To me?”\n\n“Yes. That is what worries me.”`,[
      ['Ask Ominis to keep listening while I examine the page.','resonance',{ominis:1}],
      ['Ask Sebastian whether his diagram predicted this.','sebastian',{sebastian:1}],
      ['Ignore the warning and touch the silver line.','resonance',{anne:1}]
    ]),
    sebastian: N('sebastian','Hogwarts Library · Sebastian’s Diagram',`I moved beside Sebastian and bent over the diagram.\n\n“You drew this?”\n\n“Most of it.” He pointed to a cluster of circles. “But this part never behaved like this before.”\n\nThe silver line had found the exact centre of his work.\n\nHe pulled a folded page from beneath the diagram. Seven marks surrounded a central circle.\n\nMy breath caught.\n\nIt was almost identical to the symbol from my father's notes.`,[
      ['Ask Sebastian to explain the seven marks.','seven',{sebastian:1}],
      ['Ask why he kept this page from me.','confession',{sebastian:2}],
      ['Call Ominis over and show him the symbol.','seven',{ominis:1}]
    ]),
    resonance: N('resonance','Hogwarts Library · The First Resonance',`I reached out before I could talk myself out of it.\n\nMy fingertip touched the silver line.\n\nCold shot through my hand. Sebastian caught my wrist when I swayed, and for one absurd second I noticed the warmth of his fingers before the magic swallowed my attention.\n\nThe library vanished.\n\nI stood in a pale stone corridor with no torches and no windows. At the far end was a door bearing my father's symbol.\n\nThe door opened a fraction. Something moved behind it.\n\nThen I was back at the table, gasping.\n\nOminis was standing. Sebastian had not let go of my wrist.\n\n“You saw something,” he said.\n\n“Yes. A door. And my father's symbol was on it.”`,[
      ['Tell Sebastian exactly what I saw.','visionSeb',{sebastian:1}],
      ['Tell Ominis first about the vibration.','visionOm',{ominis:1}],
      ['Describe the symbol to both of them and search the notes.','seven',{anne:1}]
    ]),
    notes: N('notes','Hogwarts Library · My Father’s Research',`I pulled the nearest pages toward us.\n\n“My father believed resonance wasn't simply sound,” I said. “He thought magic could be strengthened or disrupted by certain frequencies. Certain places could amplify it.”\n\nOminis touched the edge of the parchment.\n\n“If your father was mapping places where magic becomes stronger, there may be a reason this symbol appeared now.”\n\nI looked at Anne's name in the margin.\n\n“Then we find that reason.”\n\nNeither of them argued.`,[
      ['Ask Sebastian to compare the notes with his diagram.','seven',{sebastian:1}],
      ['Ask Ominis whether the old magic resembles anything in his family history.','family',{ominis:1}],
      ['Insist that we investigate together, but understand the risks first.','risk',{anne:1}]
    ]),
    seven: N('seven','The Undercroft · The Theory',`We moved to the Undercroft with the important pages.\n\nSebastian spread the diagram across the table.\n\n“These aren't measurements,” he said. “They're positions. Places where resonance can be amplified.”\n\nThe seven marks aligned with my father's page.\n\n“If we can control the resonance,” Sebastian said carefully, “it might interrupt the way Anne's curse feeds itself.”\n\n“Might,” I repeated.\n\n“I won't promise you a cure I can't prove.”\n\nI appreciated the honesty. I hated the uncertainty.`,[
      ['Ask Sebastian to show me the page he has been hiding.','confession',{sebastian:1}],
      ['Ask Ominis what worries him about resonance magic.','risk',{ominis:1}],
      ['Say that if there is a chance to help Anne, we have to investigate.','anne',{anne:2}],
      ['Insist that we understand every risk before trying anything.','risk',{anne:1}]
    ]),
    confession: N('confession','The Undercroft · Sebastian',`Sebastian finally unfolded the page.\n\n“I wasn't ready to show you this.”\n\nThe stabilisation pattern was beautiful and frightening.\n\n“Could it cure her?” I asked.\n\n“No. But it might give her time.”\n\nHis confidence slipped.\n\n“I can't stop looking for something that works. Every time I find another problem, I think of Anne still suffering.”\n\n“I don't know how to do this, Samira.”\n\nI reached across the table and took his hand.\n\n“You don't have to do it alone.”\n\nFor once, Sebastian had no clever answer.`,[
      ['Promise to help, but make Sebastian rest tonight.','pinky',{sebastian:2,anne:1}],
      ['Tell him he does not have to carry Anne’s fate alone.','pinky',{sebastian:1,anne:1}],
      ['Ask Ominis to help keep Sebastian grounded.','pinky',{ominis:1,sebastian:1}]
    ]),
    family: N('family','Hogwarts Library · The Gaunt Vault',`Ominis became quieter when he began talking about his family.\n\n“The vault is in the family mausoleum,” he said. “About a mile from the main house.”\n\n“Blood wards?” Sebastian asked.\n\n“Yes. Old ones.”\n\nA journal might contain records of the catacombs and older magical sites connected to the family.\n\n“The plan is simple,” he said. “Hogsmeade weekend, we slip out, I handle the blood wards, we're in and out before anyone notices.”\n\nI stared at him.\n\n“That is your definition of simple?”\n\nA faint smile appeared.\n\n“I said the plan was simple. I didn't say it was safe.”\n\n“You won't be alone,” I said.\n\nHis expression softened. “You shouldn't make promises like that lightly, Samira.”\n\n“I don't.”`,[
      ['Ask exactly how the blood wards work.','vault',{ominis:1}],
      ['Tell Ominis I will be beside him in the vault.','vault',{ominis:2,anne:1}],
      ['Ask Sebastian what we should prepare.','pinky',{sebastian:1}]
    ]),
    risk: N('risk','The Undercroft · No Reckless Magic',`Ominis lowered his voice.\n\n“Resonance does not only strengthen magic. It can strip away the boundaries around it.”\n\n“Meaning?” I asked.\n\n“A curse could become louder before it becomes weaker.”\n\nThe room seemed colder.\n\n“So we could make Anne worse.”\n\n“Yes.”\n\nI hated hearing it, but I needed the truth.`,[
      ['Stop until we understand how to control it.','family',{anne:1}],
      ['Continue researching because Anne cannot wait forever.','anne',{anne:2}],
      ['Ask Sebastian to design a safer stabilisation pattern.','confession',{sebastian:1}]
    ]),
    anne: N('anne','The Undercroft · For Anne',`I looked down at Anne's name.\n\n“If there is even a chance,” I said, “we have to understand it. Not because we are reckless. Because doing nothing is a choice too.”\n\nSebastian nodded slowly.\n\nOminis did not disagree.\n\n“Tomorrow,” Sebastian said. “We start with the chamber.”\n\nI knew that tomorrow would change everything.`,[
      ['Make Sebastian promise he will sleep before tomorrow.','pinky',{sebastian:2}],
      ['Ask Ominis what the Gaunt records might reveal.','family',{ominis:1}]
    ]),
    visionSeb: N('visionSeb','The Undercroft · What I Saw',`I told Sebastian everything: the corridor, the pale stone, the vibration, and the door bearing my father's symbol.\n\nHe listened without interrupting.\n\n“The door is probably one of the resonance chambers.”\n\n“And now we have somewhere to look,” he said, tapping the seven marks.`,[
      ['Ask Sebastian to keep working while I rest.','pinky',{sebastian:1}],
      ['Ask Ominis whether his family records could identify the chamber.','family',{ominis:1}]
    ]),
    visionOm: N('visionOm','The Undercroft · The Sound',`I told Ominis about the vibration before I told either of them anything else.\n\n“That sound,” he said, “is similar to something I have heard in old Gaunt records.”\n\n“There may be records in my family's mausoleum. A journal. Maps of the catacombs.”\n\n“We would go together,” I said.\n\nOminis was quiet.\n\nThen: “I know.”`,[
      ['Tell Ominis he will not face his family’s vault alone.','family',{ominis:2}],
      ['Ask Sebastian what we need before Hogsmeade weekend.','pinky',{sebastian:1}]
    ]),
    pinky: N('pinky','Hogwarts Library · The Pinky Promise',`By the time we returned to the library, the candles had burned almost to their holders.\n\nSebastian was still holding the diagram.\n\n“Tomorrow,” he said.\n\n“You said that yesterday.”\n\nI held out my little finger.\n\nHe stared at it.\n\n“What are you doing?”\n\n“Making sure you actually sleep.”\n\nA reluctant smile appeared. Slowly, he hooked his little finger around mine.\n\n“Fine,” he murmured. “Pinky promise.”\n\nFor one quiet second, neither of us moved.\n\nThen Ominis cleared his throat.\n\nThe vault. The chamber. Anne. Tomorrow had become real.`,[
      ['Ask Ominis to tell us everything we need for the vault.','vault',{ominis:1}],
      ['Tell Sebastian I trust his diagram.','vault',{sebastian:1}],
      ['Write down the plan and finally go to sleep.','end',{anne:1}]
    ]),
    vault: N('vault','Hogsmeade Weekend · The Plan',`We gathered the notes into one careful stack.\n\nOminis described the blood wards. Sebastian checked every line of his diagram twice. I wrote the final sequence in the margin of my father's research.\n\nNo one called it a cure. Not yet.\n\nBut for the first time, the three of us had a direction: the Gaunt mausoleum, the hidden journal, and whatever resonance chamber my father's work had been pointing toward.\n\nI looked from Sebastian to Ominis.\n\n“We go together.”\n\nNeither argued.`,[
      ['Take Sebastian’s hand before we leave.','end',{sebastian:2}],
      ['Stand beside Ominis and reassure him.','end',{ominis:2}],
      ['Keep the moment focused on Anne and the plan.','end',{anne:2}]
    ]),
    end: N('end','Hogwarts · Before Dawn',`The castle was beginning to wake when we finally left the library.\n\nNothing was solved. Anne was still cursed. The resonance was still dangerous. The Gaunt vault was waiting for us.\n\nBut the uncertainty no longer felt empty.\n\nIt had a shape now. A map. A door. Seven marks.\n\nAnd two people walking beside me into whatever came next.\n\nI tightened my grip on my notes.\n\nTomorrow, we would find the chamber.`,[
      ['Continue into the next episode.','start',{anne:1}]
    ])
  };
  function apply(e){ ['sebastian','ominis','anne'].forEach(k => state[k] += e?.[k] || 0); save(); }
  function render(){
    const n = nodes[state.node] || nodes.start;
    $('#chapterLabel').textContent = 'Episode III · The First Resonance';
    $('#location').textContent = n.loc;
    $('#progress').textContent = n.id === 'end' ? 'Episode ending' : 'Continue the story';
    $('#story').innerHTML = n.text.split(/\n\n/).map(p => `<p>${esc(p)}</p>`).join('');
    $('#choices').innerHTML = n.choices.map((c,i) => `<button type="button" data-i="${i}">${i+1}. ${esc(c[0])}</button>`).join('');
    $('#choices').querySelectorAll('button').forEach(b => b.addEventListener('click', () => choose(+b.dataset.i)));
    $('#relationshipState').textContent = `Sebastian · ${state.sebastian} | Ominis · ${state.ominis} | Anne · ${state.anne}`;
  }
  function choose(i){ const n=nodes[state.node], c=n.choices[i]; if(!c) return; state.history.push({id:n.id,choice:c[0]}); apply(c[2]); state.node=c[1]; save(); render(); window.scrollTo({top:0,behavior:'smooth'}); }
  $('#customForm').addEventListener('submit', e => { e.preventDefault(); const v=$('#customChoice').value.trim(); if(!v)return; $('#customChoice').value=''; state.custom.push(v); state.history.push({id:state.node,choice:'Custom action: '+v}); state.node='pinky'; save(); render(); });
  $('#restart').addEventListener('click', () => { if(confirm('Restart this story from the beginning?')) { state=structuredClone(blank); save(); render(); } });
  save(); render();
})();