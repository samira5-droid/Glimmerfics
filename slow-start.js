(() => {
  'use strict';
  const KEY='glimmerfics-hogwarts-v12';
  const $=s=>document.querySelector(s);
  const esc=s=>{const d=document.createElement('div');d.textContent=s;return d.innerHTML};
  const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch(_){return null}};
  const scenes={
    morning:{chapter:'Episode XII · The Morning After',loc:'Ravenclaw Tower · Samira’s Room',text:`The morning came too early.

Samira knew it before she opened her eyes.

There was a particular quality to Hogwarts mornings after a night when something important had happened. The castle did not acknowledge it. The staircases still shifted when they pleased. Portraits still complained about draughts. Somewhere below, students were already arguing about breakfast as though the world had never contained a curse, a secret family, or a single dangerous question.

But Samira lay perfectly still beneath the blankets and remembered everything.

The library.

The old pages spread across the table.

Her father's handwriting, faded in places where the ink had nearly surrendered to time.

Sebastian's diagram.

Ominis's voice when he spoke about the Gaunts.

The plan they had made.

Hogsmeade first. The mausoleum after. The journal. The catacomb maps.

And beneath all of it, the reason none of them could simply walk away.

Anne.

Samira opened her eyes.

Grey winter light rested against the curtains. A thin line of frost had formed along the window. Beyond the glass, the grounds looked almost peaceful: bare branches, pale grass, distant roofs, and the faint movement of students crossing the courtyard below.

For a few breaths she allowed herself to watch them.

A girl ran after a friend.

Two boys were carrying books between them.

Someone nearly slipped on the frost and immediately pretended it had been deliberate.

Normal.

The word felt almost cruel.

Samira sat up.

Her room was quiet enough that she could hear the small sounds of getting ready: the click of a clasp, the rustle of parchment, the scrape of a drawer opening. She dressed slowly, not because she was indecisive, but because rushing suddenly seemed like the wrong way to begin a day that might change everything.

She placed her father's notes on the desk.

She did not open them.

She already knew what they contained.

Seven points.

Six meaningful connections.

One absence that had become impossible to ignore.

The temptation was to solve it.

To force the missing piece into place and hope the shape became complete.

But last night had taught her something she did not want to forget: a diagram could be elegant and still be wrong. A theory could sound convincing and still hurt someone. And desperation could make the most dangerous answer look like the kindest one.

Samira touched the edge of the parchment.

Anne deserved better than desperation.

That thought settled something inside her.

She put the notes away.

Then came a soft knock.

Samira looked towards the door.

The knock came again.

Not impatient.

Almost careful.

She opened it.

No one stood there.

A folded piece of parchment lay on the floor.

She picked it up and recognised Sebastian's handwriting immediately.

Breakfast. Don't vanish.

Samira stared at the three words.

A laugh escaped her before she could stop it.

Of all the things Sebastian could have written after a night spent discussing dangerous magic, that was what he had chosen.

She folded the note and slipped it into her pocket.

When she turned, she noticed another figure at the far end of the corridor.

Ominis.

He had apparently been waiting without wanting to announce that he was waiting.

“You're awake,” he said.

“So are you.”

“I have been awake for some time.”

Samira smiled.

“That sounds suspiciously like you are avoiding admitting you didn't sleep.”

A pause.

“I could say the same about you.”

“I slept.”

“How long?”

She hesitated.

Ominis smiled faintly.

“I see.”

Samira stepped into the corridor and closed her door.

For a moment they simply stood there.

The tower was slowly becoming louder around them.

A door opened below. Someone called a name. Footsteps hurried down the spiral staircase.

The ordinary world was beginning its day.

“Are you ready?” Samira asked.

Ominis considered the question seriously.

“No.”

She waited.

Then he added, “But I think there is a difference between being ready and deciding to go anyway.”

Samira looked at him.

“That sounds like something you have been thinking about all night.”

“Perhaps.”

“The mausoleum?”

“The mausoleum. My family. What we might find. What we might not find.”

His voice lowered.

“And what we might find that I wish we hadn't.”

Samira did not answer immediately.

She understood that there were moments when reassurance could become another way of refusing to listen.

So she simply said, “You don't have to face it alone.”

Ominis turned his face towards her.

“No,” he said quietly. “I suppose I don't.”

They began walking.

Neither of them mentioned the mausoleum again until the stairs brought the first warmth of the Great Hall within reach.

By then, Samira had made a decision.

She would not rush today.

Not because the danger was small.

Because it was large enough to deserve their full attention.

Whatever waited beneath the Gaunt estate could wait a few more minutes.

Anne's future could not be treated like a race.

And if there was an answer somewhere ahead, Samira wanted to reach it as herself—not as someone driven forward by fear.

Together, she and Ominis descended the final staircase.

The doors to the Great Hall opened.

Warmth spilled into the corridor.

So did voices, laughter, the smell of breakfast, and somewhere in the crowd, Sebastian's unmistakable laugh.

For one brief moment, the day looked almost ordinary.

Samira stepped forward anyway.` ,choices:[['Go down with Ominis and talk before breakfast.','towerWalk',{ominis:1}],['Find Sebastian first and make him explain the “don’t vanish” note.','sebMorning',{sebastian:1}],['Take a few quiet minutes alone in the Ravenclaw common room.','commonRoom',{anne:1}]]}
  };
  function render(s){const story=$('#story'),choices=$('#choices');if(!story||!choices)return;$('#chapterLabel').textContent=s.chapter;$('#location').textContent=s.loc;const st=read()||{};$('#progress').textContent=`Scene ${(st.history||[]).length+1} · Episode XII`;story.innerHTML=s.text.trim().split(/\n\s*\n/).map(p=>`<p>${esc(p).replace(/\n/g,'<br>')}</p>`).join('');choices.innerHTML='';s.choices.forEach(([label,target,delta],i)=>{const b=document.createElement('button');b.type='button';b.className='choice';b.innerHTML=`<span class="choice-num">${i+1}</span><span>${esc(label)}</span>`;b.onclick=()=>{const st=read();st.history=Array.isArray(st.history)?st.history:[];st.history.push({from:st.node,label,to:target,at:Date.now()});st.sebastian=(st.sebastian||0)+(delta.sebastian||0);st.ominis=(st.ominis||0)+(delta.ominis||0);st.anne=(st.anne||0)+(delta.anne||0);st.node=target;localStorage.setItem(KEY,JSON.stringify(st));location.reload()};choices.appendChild(b)});$('#relationshipState').textContent=`Sebastian · ${st.sebastian||0} | Ominis · ${st.ominis||0} | Anne · ${st.anne||0}`}
  function start(){const st=read();if(st?.node==='morning')render(scenes.morning)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else setTimeout(start,0);
})();
