(() => {
  'use strict';
  const KEY='glimmerfics-hogwarts-v12';
  const $=s=>document.querySelector(s);
  const get=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch(_){return null}};
  const set=s=>localStorage.setItem(KEY,JSON.stringify(s));
  const scenes={
    breakfast:{chapter:'Episode XII · Hogsmeade Weekend',loc:'Great Hall · Saturday Morning',text:`Breakfast lasted longer than Samira expected.

That was precisely why she let it.

The Great Hall was full of the small noises that made Hogwarts feel alive: cutlery against plates, chairs scraping stone, owls passing overhead, conversations colliding and separating again. Winter light came through the high windows in long pale bands, catching on goblets and turning them briefly silver.

For once, nobody asked Samira to solve anything.

Amit was arguing about Quidditch statistics. Samantha had decided that his argument was mathematically impressive and emotionally ridiculous. Samira found herself laughing before she even realised she had joined the conversation.

Then the laughter faded naturally.

Her eyes drifted towards the doors.

Sebastian and Ominis had not arrived yet.

Amit noticed.

“You're waiting for someone.”

Samira gave him a look.

“I am not.”

Samantha smiled into her tea.

“You absolutely are.”

Samira opened her mouth to deny it again, but footsteps sounded beyond the doors.

Sebastian entered first.

Ominis followed.

They did not come directly to her. They paused to speak with another student, and for a moment Samira simply watched them.

Two very different people.

Two very different kinds of danger.

And somehow, both had become part of the small circle of people she trusted.

Amit leaned closer.

“Whatever you're walking into today, come back for dinner.”

Samira looked at him.

“That's your condition?”

“That's my very serious Ravenclaw demand.”

Samantha lifted her cup.

“I second it.”

Something in Samira's chest loosened.

“Deal.”

Only then did she stand.

She crossed the Hall slowly. Sebastian noticed her first. Ominis turned a moment later.

No one said that the day was dangerous.

They did not need to.

The three of them knew.

They left the warmth of the Hall together and walked towards the doors.

Behind them, Ravenclaw voices continued.

Ahead waited Hogsmeade, the cold road beyond it, and eventually the mausoleum.

But they did not leap from breakfast to danger.

They took the long way through the castle.

Past portraits.

Past suits of armour.

Past windows full of winter light.

And for several minutes, they were simply three students walking through Hogwarts together.`,choices:[['Stay with Amit and Samantha a little longer before leaving.','friendsMoment',{anne:1}],['Walk beside Sebastian and ask what he changed in the diagram.','sebWalk',{sebastian:1}],['Walk beside Ominis and ask what he expects the mausoleum to feel like.','omWalk',{ominis:1}]]},
    friendsMoment:{chapter:'Episode XII · Hogsmeade Weekend',loc:'Ravenclaw Table · A Few Minutes More',text:`Samira stayed.

It was only another ten minutes.

But ten minutes at Hogwarts could feel strangely important.

Amit told her about a theory he had been developing regarding ancient magical resonance. Samantha immediately pointed out three flaws. Amit pretended to be offended. Samira laughed again.

Eventually the conversation turned to classes, then to Professor Sharp, then to a ridiculous rumour about a hidden corridor near the greenhouses.

Nothing about it was urgent.

That was exactly what Samira needed.

When she finally rose, Samantha caught her sleeve.

“Whatever happens,” she said, “don't forget that you're still you afterwards.”

Samira held her gaze.

“I won't.”

Amit nodded towards the doors.

“And if you discover an ancient magical conspiracy, please remember that Ravenclaw would like the notes.”

Samira smiled.

“I'll consider it.”

She left the table feeling steadier.

Not fearless.

Steadier.

That distinction mattered.`,choices:[['Find Sebastian and Ominis at the entrance.','sebWalk',{sebastian:1}],['Take the quieter route and find Ominis first.','omWalk',{ominis:1}]]},
    sebWalk:{chapter:'Episode XII · Hogsmeade Weekend',loc:'Hogwarts · The Long Way Down',text:`Sebastian did not speak immediately.

They walked beneath the moving staircases, then along a corridor where the windows looked out over the frozen grounds.

“You wanted to ask about the diagram,” he said eventually.

“I did.”

He unfolded it carefully.

“The seventh point is no longer something I think we should activate.”

Samira studied the new lines.

“So what is it?”

“A boundary. A point that tells the circuit where to stop.”

She looked up.

“That could be why my father's notes never finished it.”

“Exactly.”

He folded the page again.

For a while they walked in silence.

Then Sebastian said, “I keep thinking about Anne.”

Samira glanced at him.

“So do I.”

“I don't want our desperation to turn her into an experiment.”

The words surprised her.

He noticed.

“I can be reckless,” he said. “I'm not blind.”

Samira smiled faintly.

“I know.”

They reached the Entrance Hall.

The great doors were open.

Cold air moved through the castle.

Sebastian stopped before the threshold.

“Whatever happens in that mausoleum, we stop if it asks too much.”

Samira nodded.

“Even if it looks like the answer?”

“Especially then.”

He looked at her for a long moment.

Then he stepped aside and let her choose when to go outside.

It was a small gesture.

But Samira noticed it.`,choices:[['Step outside beside Sebastian.','road',{sebastian:1}],['Wait for Ominis and leave together.','road',{ominis:1}],['Tell Sebastian that Anne deserves an answer, not another sacrifice.','road',{anne:2}]]},
    omWalk:{chapter:'Episode XII · Hogsmeade Weekend',loc:'Hogwarts · Quiet Corridor',text:`Ominis walked beside Samira without asking where she was looking.

“You're listening to the castle,” she said.

“I always am.”

“Does it sound different today?”

He considered that.

“No. That is what worries me.”

Samira frowned.

“The castle sounds ordinary.”

“Yes.”

They passed a window. Snow moved across the grounds like fine ash.

“When something dangerous is coming,” Ominis said, “we expect the world to announce it. Usually it doesn't.”

Samira thought about that.

“Are you afraid?”

“Yes.”

The honesty caught her off guard.

Ominis continued before she could answer.

“But fear is useful when it makes us careful. It becomes dangerous when it makes us obedient.”

Samira smiled.

“You've thought about this.”

“For years.”

They reached the Entrance Hall.

Ominis turned towards her.

“I need you to promise me something.”

“What?”

“If I tell you something feels wrong, listen to me.”

“I will.”

“And if Sebastian tells you something feels wrong?”

Samira laughed softly.

“I'll listen to him too.”

“Good.”

He offered his arm.

Not possessively.

Simply as an invitation to walk beside him.

Samira accepted.

Together they waited for Sebastian.`,choices:[['Keep talking with Ominis while they wait.','road',{ominis:1}],['When Sebastian arrives, suggest they all walk together.','road',{anne:1}],['Tell Ominis she trusts his judgement.','road',{ominis:2}]]},
    road:{chapter:'Episode XII · Hogsmeade Weekend',loc:'Road to Hogsmeade · Winter Morning',text:`The castle disappeared behind them slowly.

That was what made the walk feel real.

First came the gates. Then the familiar path through the grounds. Then the last glimpse of Hogwarts between the trees.

Only after several minutes did Samira realise that none of them had spoken about the mausoleum.

They didn't need to.

The cold filled the silence instead.

Snow compressed beneath their boots. Bare branches shifted overhead. Somewhere in the distance, a bird called once and went quiet.

Sebastian walked on Samira's left.

Ominis on her right.

For once, neither tried to lead.

At the rise of the hill, Hogsmeade appeared below them.

Warm chimneys. Shop signs. Students in winter coats.

Normal life.

Samira stopped.

“We could still turn around.”

Sebastian looked at her.

“Yes.”

Ominis nodded.

“Yes.”

Neither pressured her.

That mattered more than if they had insisted.

Samira looked back towards the castle.

Then towards the village.

Anne's face came to mind.

Not the curse.

Anne herself.

That was the difference.

“We go,” Samira said.

Sebastian nodded.

Ominis smiled faintly.

They continued downhill.

But this time, Samira did not feel as though she were being pulled towards an answer.

She felt as though she were choosing the road herself.`,choices:[['Enter Hogsmeade and take a brief break before leaving the village.','village',{anne:1}],['Ask Ominis to explain the route to the mausoleum.','village',{ominis:1}],['Let Sebastian choose the first stop while Samira gets her bearings.','village',{sebastian:1}]]},
    village:{chapter:'Episode XII · Hogsmeade Weekend',loc:'Hogsmeade · Late Morning',text:`Hogsmeade was warmer than the road.

Not physically, perhaps. The wind still found every gap in Samira's coat. But the village carried a different kind of warmth.

Shop windows glowed. Students crowded the street. Someone was laughing outside a sweet shop. A pair of second-years hurried past carrying parcels nearly as large as they were.

For several minutes, the mausoleum seemed far away.

Samira let herself enjoy that.

They stopped near the edge of the village where the road divided.

Ominis unfolded the map.

Sebastian checked the compass.

Samira looked back at the shops.

“We should remember this,” she said.

Sebastian frowned.

“Remember what?”

“What ordinary looks like.”

Ominis was quiet.

Then he nodded.

“That's worth remembering.”

They started walking again.

The last houses disappeared behind them.

The sounds of Hogsmeade faded.

The wind grew stronger.

And the path towards the Gaunt estate began.`,choices:[['Keep the three of them together on the road beyond Hogsmeade.','estateRoad',{anne:1}],['Ask Ominis to tell Samira what lies ahead.','estateRoad',{ominis:2}],['Ask Sebastian to stay close as the village disappears behind them.','estateRoad',{sebastian:2}]]},
    estateRoad:{chapter:'Episode XII · Hogsmeade Weekend',loc:'Beyond Hogsmeade · The Road to the Estate',text:`The walk beyond Hogsmeade took longer than Samira expected.

There was no dramatic change in the landscape. No sudden wall of darkness. No sign announcing that they had crossed into dangerous territory.

The world simply became quieter.

Fewer footprints.

Fewer voices.

More trees.

The road narrowed until the three of them had to walk almost shoulder to shoulder.

At one point Sebastian slipped slightly on the frozen ground. Samira caught his sleeve before he could fall.

“I had that,” he said.

“You absolutely did not.”

Ominis laughed.

It was a small sound, but it broke the tension.

Later, when the trees thickened, Ominis stopped.

“We're close.”

Samira looked ahead.

Nothing.

Then she noticed the stone markers half-buried beneath snow.

One.

Then another.

The Gaunt crest had been carved into each.

The estate was not visible yet.

But it was there.

Waiting.

Samira tightened her gloves.

Sebastian drew his wand.

Ominis did the same.

No one moved until all three were ready.

Then, together, they left the road and followed the markers into the trees.`,choices:[['Follow the markers carefully.','estateGate',{anne:1}],['Ask Ominis to check for blood wards before proceeding.','estateGate',{ominis:2}],['Ask Sebastian to watch the rear while Samira follows Ominis.','estateGate',{sebastian:2}]]}
  };
  function apply(){const s=get();const scene=s&&scenes[s.node];if(!scene)return;const story=$('#story'),choices=$('#choices');if(!story||!choices)return;$('#chapterLabel').textContent=scene.chapter;$('#location').textContent=scene.loc;$('#progress').textContent=`Scene ${(s.history||[]).length+1} · ${scene.chapter.split('·')[0].trim()}`;story.innerHTML=scene.text.split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');choices.innerHTML='';scene.choices.forEach((c,i)=>{const b=document.createElement('button');b.type='button';b.className='choice';b.innerHTML=`<span class="choice-num">${i+1}</span><span>${esc(c[0])}</span>`;b.onclick=()=>{const n=get();n.history=n.history||[];n.history.push({from:n.node,label:c[0],to:c[1],at:Date.now()});n.sebastian=(n.sebastian||0)+(c[2].sebastian||0);n.ominis=(n.ominis||0)+(c[2].ominis||0);n.anne=(n.anne||0)+(c[2].anne||0);n.node=c[1];set(n);apply()};choices.appendChild(b)})}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply);else setTimeout(apply,50);
})();
