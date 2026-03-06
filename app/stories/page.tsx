"use client"

import Link from "next/link"
import {useState,useEffect} from "react"

export default function Stories(){

/* STORIES DATA */

const stories = [

{
name:"Yuvraj Singh",
role:"Cricket Champion • Lung Cancer Survivor",
img:"https://upload.wikimedia.org/wikipedia/commons/2/23/Yuvraj_Singh_2011.jpg",
text:"Champions are not made only on the field. After the 2011 Cricket World Cup, Yuvraj Singh was diagnosed with a rare form of cancer. Chemotherapy left him exhausted and far from the sport he loved. But he refused to surrender. With courage, discipline and hope, he returned stronger and later created the YouWeCan foundation to support thousands of patients across India.",
tag:"Cancer may challenge your body, but it cannot defeat your spirit."
},

{
name:"Sonali Bendre",
role:"Actor • Metastatic Cancer Survivor",
img:"https://upload.wikimedia.org/wikipedia/commons/6/6e/Sonali_Bendre_2018.jpg",
text:"When Sonali Bendre shared her diagnosis publicly, millions were shocked. Yet she faced treatment with grace and honesty. Through hospital updates, reflections and courage, she reminded people that vulnerability can inspire strength and community.",
tag:"Strength isn't about never feeling afraid — it's about moving forward despite the fear."
},

{
name:"Anurag Basu",
role:"Director • Leukemia Survivor",
img:"https://upload.wikimedia.org/wikipedia/commons/f/f6/Anurag_Basu_2019.jpg",
text:"At 34, Anurag Basu was diagnosed with acute leukemia and given very little chance of survival. Even during treatment he kept imagining stories he still wanted to tell. That hope became his strength and after recovery he went on to create some of India’s most loved films.",
tag:"Hope can be stronger than even the most frightening diagnosis."
},

{
name:"Manisha Koirala",
role:"Actor • Ovarian Cancer Survivor",
img:"https://upload.wikimedia.org/wikipedia/commons/b/b0/Manisha_Koirala_2018.jpg",
text:"Diagnosed with stage-4 ovarian cancer, Manisha Koirala travelled far from home for treatment. The journey was long and uncertain. But her belief in healing and life’s second chances helped her recover and inspire millions.",
tag:"Sometimes the hardest battles give us the most beautiful second chances."
},

{
name:"Lisa Ray",
role:"Actor • Multiple Myeloma Survivor",
img:"https://upload.wikimedia.org/wikipedia/commons/5/5a/Lisa_Ray_2011.jpg",
text:"Lisa Ray was diagnosed with multiple myeloma, a rare blood cancer. Through stem-cell transplant, meditation and resilience she entered remission and became an advocate for living life fully despite illness.",
tag:"Every day you wake up is a victory worth celebrating."
},

{
name:"Sanjay Dutt",
role:"Actor • Lung Cancer Survivor",
img:"https://upload.wikimedia.org/wikipedia/commons/3/3c/Sanjay_Dutt_2022.jpg",
text:"When Sanjay Dutt was diagnosed with lung cancer the news shook his fans and family. Through treatment and determination he fought his way back, reminding everyone that courage and medical care together can rebuild life.",
tag:"The greatest comeback is reclaiming your life."
},

{
name:"Chhavi Mittal",
role:"Actor • Breast Cancer Survivor",
img:"https://upload.wikimedia.org/wikipedia/commons/8/8e/Chhavi_Mittal.jpg",
text:"Chhavi Mittal documented her entire breast cancer journey openly — from diagnosis to surgery and recovery. Her honesty helped thousands of women feel less alone in their own battles.",
tag:"You are stronger than the diagnosis you receive."
},

{
name:"Rakesh Roshan",
role:"Director • Throat Cancer Survivor",
img:"https://upload.wikimedia.org/wikipedia/commons/1/10/Rakesh_Roshan.jpg",
text:"A routine medical checkup revealed throat cancer for filmmaker Rakesh Roshan. Early detection and timely treatment saved his life, turning his story into a powerful reminder about preventive care.",
tag:"Early action can turn fear into survival."
},

{
name:"Tahira Kashyap",
role:"Author • Breast Cancer Survivor",
img:"https://upload.wikimedia.org/wikipedia/commons/c/c7/Tahira_Kashyap.jpg",
text:"Tahira Kashyap chose openness during her breast cancer journey. By sharing her bald head and surgical scars she challenged the stigma around cancer and body image.",
tag:"Your scars are proof that you fought and survived."
},

{
name:"Gautami",
role:"Actor • Breast Cancer Survivor",
img:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Gautami_Tadimalla.jpg",
text:"Gautami faced breast cancer while balancing life and motherhood. Her determination and faith helped her move through treatment with strength.",
tag:"Courage grows stronger when love gives you a reason to fight."
},

{
name:"Nafisa Ali",
role:"Actor • Cancer Survivor",
img:"https://upload.wikimedia.org/wikipedia/commons/2/2b/Nafisa_Ali.jpg",
text:"Actor and activist Nafisa Ali faced cancer with remarkable positivity. Her openness about treatment encouraged others to seek timely medical help.",
tag:"Optimism can be a powerful medicine."
},

{
name:"Arunima Sinha",
role:"Mountaineer • Survivor",
img:"https://upload.wikimedia.org/wikipedia/commons/5/5d/Arunima_sinha.png",
text:"Already known for conquering Mount Everest with a prosthetic leg, Arunima later faced cancer with the same fearless determination that defined her life.",
tag:"The human spirit can climb mountains even in its darkest hours."
},

{
name:"Dr Vishal Rao",
role:"Cancer Surgeon • Survivor",
img:"https://upload.wikimedia.org/wikipedia/commons/e/e1/Vishal_Rao.jpg",
text:"A cancer surgeon himself, Dr Vishal Rao experienced the disease from the other side as a patient. His recovery strengthened his commitment to helping others fight cancer.",
tag:"Sometimes the healer must first become the fighter."
},

{
name:"Asha",
role:"Breast Cancer Survivor",
img:"https://randomuser.me/api/portraits/women/32.jpg",
text:"A school teacher from Pune, Asha discovered a lump early and immediately sought medical care. With treatment and family support she recovered and now encourages women to prioritize screening.",
tag:"Early detection can save a lifetime."
},

{
name:"Rahul",
role:"Leukemia Survivor",
img:"https://randomuser.me/api/portraits/men/41.jpg",
text:"At just 18 Rahul was diagnosed with leukemia. Months of treatment kept him away from school but his dream of becoming an engineer kept him fighting.",
tag:"Dreams can become the strongest medicine."
},

{
name:"Meera",
role:"Colon Cancer Survivor",
img:"https://randomuser.me/api/portraits/women/22.jpg",
text:"Meera’s journey through colon cancer taught her the importance of nutrition and resilience. Today she mentors other patients through recovery.",
tag:"Healing begins when hope meets courage."
},

{
name:"Vikram",
role:"Lymphoma Survivor",
img:"https://randomuser.me/api/portraits/men/36.jpg",
text:"Vikram was diagnosed with lymphoma at 30. Through treatment he held onto the belief that his life still had many chapters ahead.",
tag:"Your story is not over yet."
},

{
name:"Priya",
role:"Ovarian Cancer Survivor",
img:"https://randomuser.me/api/portraits/women/47.jpg",
text:"Priya’s battle with ovarian cancer was long and exhausting. Her support system of family and doctors helped her rediscover strength.",
tag:"No one fights alone."
},

{
name:"Aman",
role:"Bone Cancer Survivor",
img:"https://randomuser.me/api/portraits/men/53.jpg",
text:"Diagnosed with bone cancer as a teenager, Aman endured surgeries and rehabilitation. Today he inspires others through sports.",
tag:"Strength grows when you refuse to give up."
},

{
name:"Neha",
role:"Thyroid Cancer Survivor",
img:"https://randomuser.me/api/portraits/women/55.jpg",
text:"Neha discovered thyroid cancer during a routine checkup. Her recovery journey showed how awareness and timely care can change outcomes.",
tag:"Awareness today can protect tomorrow."
}

]

const [index,setIndex]=useState(0)

useEffect(()=>{
const timer=setInterval(()=>{
setIndex((prev)=> (prev+1)%stories.length)
},7000)
return()=>clearInterval(timer)
},[])

return(

<main className="page">

{/* NAVIGATION */}

<nav className="nav">

<div></div>

<div className="links">
<Link href="/">Home</Link>
<Link href="/about">About Us</Link>
<Link href="/nutritionists">Our Nutritionists</Link>
<Link href="/stories">Stories of Strength</Link>
<Link href="/consultation">Book Consultation</Link>
<Link href="/login">Login</Link>
</div>

</nav>



{/* LOGO */}

<div className="logoWrap">
<img src="/Logo.png" className="logo"/>
</div>



{/* HEADER */}

<section className="header">

<h1>Stories of Strength</h1>

<p>
Every cancer journey is unique. Behind every diagnosis lies a
story of courage, resilience and hope. These stories remind us
that strength often reveals itself in the most difficult moments
of life.
</p>

</section>



{/* TAGLINE */}

<div className="storiesHeadline">
<h2>Every Survivor’s Story Becomes a Light for Someone Still Fighting</h2>
<p>These journeys remind us that no one walks the cancer path alone.</p>
</div>



{/* PROGRESS BAR */}

<div className="progressWrap">
{stories.map((_,i)=>(
<div key={i} className={`progress ${i===index?"active":""}`}></div>
))}
</div>



{/* STORY */}

<section className="stories">

<div className="story fade">

<img src={stories[index].img}/>

<div>

<h3>{stories[index].name}</h3>

<p className="subtitle">{stories[index].role}</p>

<p><b>{stories[index].tag}</b><br/><br/>{stories[index].text}</p>

<div className="timeline">

<span>Diagnosis</span>
<div className="line"></div>
<span>Treatment</span>
<div className="line"></div>
<span>Recovery</span>

</div>

</div>

</div>

</section>



{/* FOOTER */}

<footer className="footer">

<img src="/lotus.png" className="lotus"/>

<p>
NutriWise stands beside patients and families, offering
compassionate oncology nutrition support through every
stage of their journey.
</p>

</footer>



<style jsx>{`

.progressWrap{
display:flex;
gap:6px;
margin-bottom:20px;
}

.progress{
flex:1;
height:4px;
background:#e5dcff;
border-radius:5px;
overflow:hidden;
}

.progress.active{
background:#6d4df5;
animation:progress 7s linear;
}

@keyframes progress{
0%{width:0}
100%{width:100%}
}

.fade{
animation:fade 0.6s ease;
}

@keyframes fade{
from{opacity:0}
to{opacity:1}
}

.storiesHeadline{
text-align:center;
max-width:700px;
margin:0 auto 30px auto;
}

`}</style>

</main>

)

}
