(() => {
  'use strict';
  const KEY='glimmerfics-hogwarts-v12';
  const $=s=>document.querySelector(s);
  const esc=s=>{const d=document.createElement('div');d.textContent=s;return d.innerHTML};
  const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch(_){return null}};
  const save=s=>localStorage.setItem(KEY,JSON.stringify(s));
  const scenes={
    ominisTalk:{chapter:'Episode XIV · What the Gaunts Buried',loc:'Gaunt Mausoleum · Between the Pillars',text:`Ominis was quiet for a while.

Samira did not rush him.

The basin sat a few feet away, the dark surface perfectly still.

“What would an ordinary weekend look like for you?” she asked.

He smiled faintly.

“You really want to know?”

“Yes.”

He thought about it.

“Tea first.”

“Of course.”

“And somewhere quiet. No family. No arguments. No ancient magical objects trying to kill us.”

Sebastian looked over.

“That last part sounds unrealistic.”

Ominis sighed.

“I knew you'd say that.”

Samira smiled.

“And after tea?”

“Reading.”

“What kind?”

“Something completely useless.”

“That sounds wonderful.”

“It is.”

He hesitated.

“Sometimes I think we spend so much time trying to become useful that we forget we're allowed to be young.”

Samira looked at him.

The words were simple, but they stayed with her.

Sebastian leaned back against the wall.

“I'd probably spend the day outside.”

Ominis raised an eyebrow.

“You? Outside voluntarily?”

“I am capable of surprises.”

“You are capable of complaints.”

Samira laughed.

They started arguing about which Hogsmeade shop had the best sweets.

Sebastian insisted on Honeydukes.

Ominis said that was obvious.

Samira chose a chocolate shop simply because neither of them had expected it.

For several minutes, the mausoleum disappeared.

They were just three teenagers making ridiculous plans for a weekend none of them actually had.

Then the basin gave a soft click.

Samira looked over.

The ordinary moment was over.

But it had mattered.`,choices:[['Return to the basin together.','basin',{anne:1}],['Ask Sebastian what his perfect ordinary day would be.','sebTalk',{sebastian:1}],['Stay with Ominis and listen for another minute.','basinOm',{ominis:1}]]},
    sebTalk:{chapter:'Episode XIV · What the Gaunts Buried',loc:'Gaunt Mausoleum · Between the Pillars',text:`Sebastian considered the question seriously.

“My perfect day?”

Samira nodded.

“No studying.”

“Impossible.”

“Very possible.”

Ominis made a skeptical noise.

“I would sleep until noon.”

“You already attempt that every Sunday,” Samira said.

“Exactly. I have experience.”

She laughed.

“Then?”

“Breakfast somewhere that isn't Hogwarts.”

“Expensive.”

“Worth it.”

“And after breakfast?”

Sebastian shrugged.

“Walk around. Find something interesting. Get into trouble.”

“You cannot go one day without trouble?”

“I could. I simply wouldn't enjoy it.”

Ominis smiled.

Samira watched Sebastian for a moment.

There was something strangely easy about seeing him like this.

Not as someone carrying a plan, a secret, or a fear.

Just Sebastian.

A boy who wanted to sleep late, eat something good, wander around Hogsmeade and make questionable decisions.

She smiled.

“That actually sounds nice.”

“It does, doesn't it?”

“Except the trouble.”

“No promises.”

Ominis stood.

“We should probably return to the reason we're here before Sebastian plans our entire future around breakfast.”

Sebastian looked offended.

“I had only planned the morning.”

Samira laughed.

Then she stood too.

The basin was waiting.`,choices:[['Go back to the basin.','basin',{sebastian:1}],['Ask Ominis to choose what they investigate next.','basinOm',{ominis:1}],['Search the chamber together.','basinSearch',{anne:1}]]}
  };
  function render(scene){const story=$('#story'),choices=$('#choices');if(!story||!choices)return;const s=read()||{};$('#chapterLabel').textContent=scene.chapter;$('#location').textContent=scene.loc;$('#progress').textContent=`Scene ${(s.history||[]).length+1} · ${scene.chapter.split('·')[0].trim()}`;story.innerHTML=scene.text.trim().split(/\n\s*\n/).map(p=>`<p>${esc(p)}</p>`).join('');choices.innerHTML='';scene.choices.forEach(([label,target,delta],i)=>{const b=document.createElement('button');b.type='button';b.className='choice';b.innerHTML=`<span class="choice-num">${i+1}</span><span>${esc(label)}</span>`;b.dataset.teenTarget=target;b.dataset.delta=JSON.stringify(delta||{});choices.appendChild(b)});$('#relationshipState').textContent=`Sebastian · ${s.sebastian||0} | Ominis · ${s.ominis||0} | Anne · ${s.anne||0}`;window.scrollTo({top:0,behavior:'smooth'})}
  function go(target,delta,label){const s=read();if(!s)return;s.history=Array.isArray(s.history)?s.history:[];s.history.push({from:s.node,label,to:target,at:Date.now()});s.sebastian=(s.sebastian||0)+(delta.sebastian||0);s.ominis=(s.ominis||0)+(delta.ominis||0);s.anne=(s.anne||0)+(delta.anne||0);s.node=target;save(s);location.reload()}
  document.addEventListener('pointerdown',e=>{const b=e.target.closest('#choices button[data-teen-target]');if(!b)return;e.preventDefault();e.stopImmediatePropagation();let d={};try{d=JSON.parse(b.dataset.delta||'{}')}catch(_){}go(b.dataset.teenTarget,d,b.innerText.replace(/^\s*\d+\s*/,'').trim())},true);
  function boot(){const s=read();if(s&&scenes[s.node])render(scenes[s.node])}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else setTimeout(boot,0);
})();
