"use client"

import Link from "next/link"
import { useState } from "react"

export default function Stories(){

const [policy,setPolicy]=useState("")

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



{/* STORIES */}

<section className="stories">


{/* STORY */}

<div className="story">

<img src="https://tse1.mm.bing.net/th/id/OIP.AMcpSZilcUiZZjBqjPBygQHaFS?rs=1&pid=ImgDetMain&o=7&rm=3"/>

<div>

<h3>Hina Khan</h3>

<p className="subtitle">Actor • Story of Courage</p>
<p> Your diagnosis does not define your destiny.</p>
  
<p>
Hina Khan has spoken openly about her health challenges,
showing the world that vulnerability and strength can
coexist. Her courage inspired thousands of people who
were silently fighting their own battles.
</p>


</div>

</div>



<div className="story">

<img src="https://images.mubicdn.net/images/cast_member/28424/cache-159661-1469083532/image-w856.jpg?size=800x"/>

<div>

<h3>Sonali Bendre</h3>

<p className="subtitle">Actor • Metastatic Cancer Survivor</p>

<p>
"Strength isn't about never feeling afraid — it's about moving forward despite the fear."
</p>

<p>
When Sonali Bendre shared her diagnosis publicly,
millions were shocked. Yet she faced treatment
with grace and honesty.Through hospital updates, 
reflections and courage, she reminded people that 
vulnerability can inspire strength and community.
</p>


</div>

</div>



<div className="story">

<img src="https://tse3.mm.bing.net/th/id/OIP.ndZYNyOqk1q-I1C8PVbxFwAAAA?w=220&h=227&rs=1&pid=ImgDetMain&o=7&rm=3"/>

<div>

<h3>Anurag Basu</h3>

<p className="subtitle">Director • Leukemia Survivor</p>
<p> Hope can be stronger than even the most frightening diagnosis. </p>
  
<p>
At 34, Anurag Basu was diagnosed with acute leukemia 
and given very little chance of survival. Even during 
treatment he kept imagining stories he still wanted to tell.
That hope became his strength and after recovery he went 
on to create some of India’s most loved films
</p>


</div>

</div>



<div className="story">

<img src="https://cdn-wp.thesportsrush.com/2016/08/Yuvraj-Singh-hd-picture.jpg?w=3840&q=60"/>

<div>

<h3>Yuvraj Singh</h3>

<p className="subtitle">Cricket Champion • Lung Cancer Survivor</p>
<p> Cancer may challenge your body, but it cannot defeat your spirit.</p>

  
<p>
Champions are not made only on the field. After the 
2011 Cricket World Cup, Yuvraj Singh was diagnosed with
a rare form of cancer. Chemotherapy left him exhausted
and far from the sport he loved. But he refused to 
surrender. With courage, discipline and hope, he returned
stronger.
</p>

</div>

</div>



<div className="story">

<img src="https://tse1.mm.bing.net/th/id/OIP.TjU56N86yfjnkKp1ej95HQHaLG?rs=1&pid=ImgDetMain&o=7&rm=3"/>

<div>

<h3>Lisa Ray</h3>

<p className="subtitle">Actor • Multiple Myeloma Survivor</p>
<p>Every day you wake up is a victory worth celebrating.</p>
<p>
Lisa Ray was diagnosed with multiple myeloma, a rare blood cancer. 
Through stem-cell transplant, meditation and resilience she 
entered remission and became an advocate for 
living life fully despite illness.
</p>

</div>

</div>



  <div className="story">

<img src="https://www.masala.com/cloud/2025/01/15/Rakesh-Roshan-1568x882.jpg"/>

<div>

<h3>Rakesh Roshan</h3>

<p className="subtitle">Director • Throat Cancer Survivor</p>
<p> Early action can turn fear into survival. </p>
<p>
A routine medical checkup revealed throat cancer for filmmaker 
Rakesh Roshan. Early detection and timely treatment saved his 
life, turning his story into a powerful reminder about
preventive care
</p>

</div>

</div>

</section>

  {/* SHARE STORY */}

<section className="shareStory">

<h2>Share Your Story</h2>

<p>
Your journey could inspire someone who is currently fighting
their own battle. If you would like your story to give hope
to others, we would be honored to share it.
</p>

<button
className="shareBtn"
onClick={()=>setPolicy("share")}
> 
ShareYour Story to Inspire Others
</button>

</section>

  



{/* FOOTER */}

<footer className="footer">

<img src="/lotus.png" className="lotus"/>

<div className="policies">

<button onClick={()=>setPolicy("privacy")}>Privacy Policy</button>
<button onClick={()=>setPolicy("refund")}>Refund Policy</button>
<button onClick={()=>setPolicy("legal")}>Legal Disclaimer</button>

</div>

<p>
NutriWise is committed to supporting cancer patients
through compassionate oncology nutrition guidance.
</p>

</footer>



{/* POLICY POPUPS */}

{policy && (

<div className="popup">

<div className="popupBox">

<button className="close" onClick={()=>setPolicy("")}>✕</button>



{policy==="share" && (

<div>

<h3>Share Your Story</h3>

<p>
If you would like your journey to inspire others,
please send your story to:
</p>

<p><b>join.nutriwise@outlook.com</b></p>

</div>

)}



{policy==="privacy" && (

<p>
NutriWise respects and protects the privacy of all individuals
who interact with our platform. Any personal information shared
with NutriWise including name, contact details, medical
information or consultation requests is used strictly for the
purpose of providing nutritional consultation and support
services.

NutriWise does not sell, rent or distribute personal data to
third parties. Information may only be used internally for
consultation coordination, service improvement or compliance
with applicable regulations.

All reasonable security measures are implemented to protect
user data. By using this platform you consent to the collection
and use of information in accordance with this privacy policy.
</p>

)}



{policy==="refund" && (

<p>
NutriWise aims to provide transparent and fair service policies.

Refund requests may be considered if submitted within
10 calendar days from the date of payment, provided that
consultation services have not already been completed or
substantially delivered.

Refund requests will be reviewed by the NutriWise team to
prevent misuse of services. If consultation has already been
provided, scheduled sessions have been attended, or customized
nutrition plans have been delivered, refunds may not be
eligible.

Approved refunds will be processed through the original payment
method within a reasonable processing period.

NutriWise reserves the right to decline refund requests that do
not meet the stated conditions.
</p>

)}



{policy==="legal" && (

<p>
NutriWise provides evidence-based nutritional guidance intended
to support individuals undergoing cancer treatment or recovery.

The information and consultation services provided by NutriWise
are for supportive care purposes only and do not replace medical
diagnosis, treatment or professional advice provided by
oncologists, physicians or licensed healthcare providers.

Patients should always follow the guidance of their treating
medical professionals regarding treatment decisions.

NutriWise shall not be held liable for medical outcomes resulting
from the use or interpretation of nutritional guidance provided
through the platform.
</p>

)}

</div>

</div>

)}



{/* FLOATERS */}

<div className="floaters">

<a href="https://wa.me/918320867088" target="_blank" rel="noopener noreferrer">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"/>
</a>

<a href="https://instagram.com/nutriwise_26" target="_blank" rel="noopener noreferrer">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"/>
</a>

<a href="https://www.linkedin.com/company/nutriwise26/" target="_blank" rel="noopener noreferrer">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"/>
</a>

<a href="https://www.youtube.com/@NutriWise_26" target="_blank" rel="noopener noreferrer">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"/>
</a>

<a href="https://x.com/NutriWise26" target="_blank" rel="noopener noreferrer">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg"/>
</a>

<a href="mailto:join.nutriwise@outlook.com" target="_blank" rel="noopener noreferrer">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"/>
</a>

</div>



<style jsx>{`

.page{
font-family:Poppins;
padding:40px;
background:linear-gradient(180deg,#fff7fb,#f3ecff,#efe8ff,#fdf4ff);
color:#4a3ca6;
}

.nav{
display:flex;
justify-content:space-between;
}

.links{
display:flex;
gap:25px;
flex-wrap:wrap;
}

.logoWrap{
display:flex;
justify-content:center;
margin:40px 0;
}

.logo{
width:260px;
filter:drop-shadow(0 0 30px rgba(200,150,255,0.6));
}

.header{
text-align:center;
max-width:700px;
margin:auto;
margin-bottom:60px;
}

.team{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:30px;
max-width:1000px;
margin:auto;
}

.card{
background:white;
padding:25px;
border-radius:15px;
text-align:center;
box-shadow:0 5px 20px rgba(0,0,0,0.05);
}

.card img{
width:90px;
height:90px;
border-radius:50%;
margin-bottom:10px;
}

.title{
font-weight:600;
margin-bottom:10px;
}

.join{
text-align:center;
max-width:700px;
margin:80px auto;
}

.joinBtn{
background:#7b5cff;
color:white;
padding:14px 32px;
border:none;
border-radius:25px;
font-size:16px;
cursor:pointer;
margin-top:20px;
}

.footer{
margin-top:80px;
text-align:center;
padding:30px;
background:linear-gradient(180deg,#f3ecff,#efe8ff);
border-radius:20px;
}

.policies{
display:flex;
justify-content:center;
gap:10px;
margin-bottom:10px;
flex-wrap:wrap;
}

.lotus{
width:70px;
margin-bottom:10px;
}

.popup{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.5);
display:flex;
align-items:center;
justify-content:center;
}

.popupBox{
background:white;
padding:30px;
max-width:500px;
border-radius:10px;
}

.close{
float:right;
background:none;
border:none;
font-size:18px;
cursor:pointer;
}

.floaters{
position:fixed;
right:20px;
top:40%;
display:flex;
flex-direction:column;
gap:16px;
}

.floaters a{
background:linear-gradient(135deg,#7b5cff,#ff9bd2);
width:48px;
height:48px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
}

.floaters img{
width:20px;
height:20px;
filter:brightness(0) invert(1);
}

@media(max-width:900px){
.team{
grid-template-columns:repeat(2,1fr);
}
}

@media(max-width:600px){
.team{
grid-template-columns:1fr;
}
}

`}</style>

</main>

)

}
