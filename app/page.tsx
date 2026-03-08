"use client"

import Link from "next/link"
import { useState } from "react"

export default function Home(){

const [policy,setPolicy]=useState("")

return(

<main className="page">

{/* NAVBAR */}

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


{/* HERO */}

<section className="hero">

<h1>Medicine treats cancer, but nutrition strengthens your body.</h1>

<p>
Compassionate oncology nutrition guidance designed to support
patients during treatment, recovery and healing.
</p>

</section>


{/* WHY NUTRITION */}

<section className="nutrition">

<h2>Why Right Nutrition Matters</h2>

<p>
Cancer treatment places enormous stress on the body. Chemotherapy,
radiation therapy and surgeries often affect appetite, digestion,
immunity and overall strength.
</p>

<p>
Without structured nutritional support, patients may experience
fatigue, weight loss, muscle weakness and slower recovery.
Evidence-based oncology nutrition helps maintain energy levels,
supports immunity and improves tolerance to treatment.
</p>

<p>
Nutrition does not replace medical treatment. It strengthens the body
so treatment can work more effectively and helps patients maintain
quality of life during the healing journey.
</p>


</section>



{/* WHAT WE PROVIDE */}

<section className="services">

<h2>What We Provide</h2>

<div className="serviceGrid">

<div className="service">
<div className="icon">🥗</div>
<h3>Personalized Nutrition Plans</h3>
<p>
Tailored nutrition strategies designed around the patient's
treatment stage and nutritional needs.
</p>
</div>

<div className="service">
<div className="icon">📊</div>
<h3>Side-Effect Nutrition Support</h3>
<p>
Guidance to help manage fatigue, nausea,
loss of appetite and treatment related symptoms.
</p>
</div>

<div className="service">
<div className="icon">🤝</div>
<h3>Continuous Nutritional Guidance</h3>
<p>
Ongoing support to adjust nutrition plans during treatment
and recovery.
</p>
</div>

</div>

  
<div className="consultCTA">

<Link href="/consultation">
<button className="consultBtn">Book Consultation</button>
</Link>

<Link href="/login">
<button className="accountBtn">Create Free Account</button>
</Link>

</div>
  
</section>



{/* TESTIMONIALS */}

<section className="testimonials">

<h2>Patient Experiences</h2>

<div className="scroll">

<div className="track">

{/* FIRST SET */}

<div className="card">
<img src="https://randomuser.me/api/portraits/women/65.jpg"/>
<h4>Kavita Sharma</h4>
<p>Mumbai</p>
<p>The nutrition guidance helped me regain strength during chemotherapy.</p>
</div>

<div className="card">
<img src="https://randomuser.me/api/portraits/men/45.jpg"/>
<h4>Anil Patel</h4>
<p>Ahmedabad</p>
<p>Small nutritional changes made treatment much easier to handle.</p>
</div>

<div className="card">
<img src="https://randomuser.me/api/portraits/women/50.jpg"/>
<h4>Sneha Joshi</h4>
<p>Bangalore</p>
<p>I felt supported and guided throughout my recovery journey.</p>
</div>

<div className="card">
<img src="https://randomuser.me/api/portraits/men/40.jpg"/>
<h4>Rahul Shah</h4>
<p>Delhi</p>
<p>The diet guidance helped me maintain energy levels during treatment.</p>
</div>


{/* DUPLICATE SET */}

<div className="card">
<img src="https://randomuser.me/api/portraits/women/65.jpg"/>
<h4>Kavita Sharma</h4>
<p>Mumbai</p>
<p>The nutrition guidance helped me regain strength during chemotherapy.</p>
</div>

<div className="card">
<img src="https://randomuser.me/api/portraits/men/45.jpg"/>
<h4>Anil Patel</h4>
<p>Ahmedabad</p>
<p>Small nutritional changes made treatment much easier to handle.</p>
</div>

<div className="card">
<img src="https://randomuser.me/api/portraits/women/50.jpg"/>
<h4>Sneha Joshi</h4>
<p>Bangalore</p>
<p>I felt supported and guided throughout my recovery journey.</p>
</div>

<div className="card">
<img src="https://randomuser.me/api/portraits/men/40.jpg"/>
<h4>Rahul Shah</h4>
<p>Delhi</p>
<p>The diet guidance helped me maintain energy levels during treatment.</p>
</div>

</div>

</div>

</section>



{/* DONATION */}

<section className="support">

<h2>💜 Donate Now 💜</h2>

<p>
Let us take a pledge together to reach every cancer patient
who needs compassionate nutritional guidance during treatment
and recovery.
</p>

<p>
Your support helps NutriWise extend structured nutrition care,
strength and hope to patients who may otherwise struggle
to access the right guidance during their healing journey.
</p>


<button className="supportBtn" onClick={()=>setPolicy("donate")}>
Donate Now
</button>
</Link>

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
NutriWise is committed to supporting cancer patients through
compassionate oncology nutrition guidance and education.
</p>

</footer>



{/* POLICY POPUP */}

{policy && (

<div className="popup">

<div className="popupBox">

<button className="close" onClick={()=>setPolicy("")}>✕</button>

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

{policy==="donate" && (
<div>

<h3>Support Cancer Nutrition Care</h3>

<p>
Your support helps NutriWise provide compassionate nutrition guidance
to cancer patients who may not have access to structured nutritional
support during treatment and recovery.
</p>

<p>
Every contribution helps extend strength, guidance and hope
to patients navigating one of the most challenging journeys
of their lives.
</p>

<button className="donateBtn">
Donate Coming Soon
</button>

</div>
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

.donateBtn{
background:#7b5cff;
color:white;
padding:12px 28px;
border:none;
border-radius:20px;
margin-top:15px;
cursor:pointer;
font-size:15px;
box-shadow:0 6px 18px rgba(120,90,255,0.3);
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
width:280px;
filter:drop-shadow(0 0 30px rgba(200,150,255,0.6));
}

.hero{
text-align:center;
max-width:700px;
margin:auto;
}

.hero h1{
font-size:32px;
}

.nutrition{
max-width:800px;
margin:80px auto;
line-height:1.8;
}

.consultCTA{
display:flex;
justify-content:center;
gap:20px;
margin-top:35px;
flex-wrap:wrap;
}

.consultBtn{
background:#7b5cff;
color:white;
padding:14px 32px;
border:none;
border-radius:25px;
font-size:16px;
cursor:pointer;
box-shadow:0 6px 20px rgba(120,90,255,0.3);
transition:0.3s;
}

.consultBtn:hover{
transform:scale(1.05);
}

.accountBtn{
background:#7b5cff;
color:white;
padding:14px 32px;
border:none;
border-radius:25px;
font-size:16px;
cursor:pointer;
box-shadow:0 6px 20px rgba(120,90,255,0.3);
transition:0.3s;
}

.accountBtn:hover{
transform:scale(1.05);
}

.services{
text-align:center;
margin:80px 0;
}

.serviceGrid{
display:flex;
gap:30px;
flex-wrap:wrap;
justify-content:center;
}

.service{
background:white;
padding:25px;
border-radius:15px;
width:260px;
box-shadow:0 5px 20px rgba(0,0,0,0.05);
}

.icon{
font-size:30px;
margin-bottom:10px;
}

.testimonials{
margin:80px 0;
text-align:center;
}

.scroll{
overflow:hidden;
width:100%;
}

.track{
display:flex;
gap:25px;
width:max-content;
animation:scrollLoop 40s linear infinite;
}

.scroll::-webkit-scrollbar{
display:none;
}

@keyframes scroll{
0%{transform:translateX(0)}
100%{transform:translateX(-50%)}
}

@keyframes scrollLoop{
0%{
transform:translateX(0);
}
100%{
transform:translateX(-50%);
}
}

.card{
width:260px;
flex-shrink:0;
background:white;
padding:20px;
border-radius:15px;
box-shadow:0 5px 20px rgba(0,0,0,0.05);
}

.card img{
width:60px;
height:60px;
border-radius:50%;
}

.support{
text-align:center;
margin:80px auto;
max-width:700px;
}

.supportBtn{
background:#6d4df5;
color:white;
padding:12px 30px;
border:none;
border-radius:20px;
margin-top:20px;
cursor:pointer;
}

.counter{
margin-top:25px;
}

.footer{
margin-top:80px;
text-align:center;
padding:30px;
}

.lotus{
width:70px;
margin-bottom:10px;
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
box-shadow:0 6px 20px rgba(120,90,255,0.35);
transition:0.3s;
}

.floaters a:hover{
transform:scale(1.1);
}

.floaters img{
width:20px;
height:20px;
filter:brightness(0) invert(1);
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

@media(max-width:768px){

.serviceGrid{
flex-direction:column;
align-items:center;
}

.logo{
width:200px;
}

.hero h1{
font-size:24px;
}

}

`}</style>

</main>

)
}
