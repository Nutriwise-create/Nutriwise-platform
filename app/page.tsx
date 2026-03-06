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

</section>



{/* TESTIMONIALS */}

<section className="testimonials">

<h2>Patient Experiences</h2>

<div className="scroll">

{/* row duplicated for continuous scroll */}

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

{/* duplicated cards */}

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

</div>

</section>



{/* SUPPORT PATIENT */}

<section className="support">

<h2>💜 Support a Patient 💜</h2>

<p>
Many patients undergoing cancer treatment struggle
to access structured nutritional guidance.
Your support can help someone receive the care and
guidance they deserve during a difficult journey.
</p>

<button className="supportBtn">Support Now</button>

<div className="counter">
<h3>10+</h3>
<p>Patients Supported Till Now</p>
</div>

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
We respect your privacy and protect all personal information
shared with NutriWise. Any data collected such as name,
contact details or health information is used strictly to
provide consultation and nutritional support services.
Your information will never be sold or shared with third
parties without consent.
</p>
)}

{policy==="refund" && (
<p>
Refund requests raised within 10 days of payment are eligible
for a full refund provided consultation services have not been
completed. NutriWise reserves the right to review refund
requests in cases of repeated or suspicious refund activity
to prevent misuse of services.
</p>
)}

{policy==="legal" && (
<p>
NutriWise provides nutritional guidance intended to support
patients undergoing cancer treatment. Our services do not
replace medical advice, diagnosis or treatment provided by
oncologists or licensed healthcare professionals.
</p>
)}

</div>

</div>

)}



{/* FLOATERS */}

<div className="floaters">

<a href="https://wa.me/918320867088" target="_blank" rel="noopener noreferrer">
<img src="https://cdn-icons-png.flaticon.com/512/733/733585.png"/>
</a>

<a href="https://instagram.com/nutriwise_26" target="_blank">
<img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"/>
</a>

<a href="https://linkedin.com" target="_blank">
<img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"/>
</a>

<a href="https://youtube.com" target="_blank">
<img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"/>
</a>

<a href="https://x.com" target="_blank">
<img src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png"/>
</a>

<a href="mailto:join.nutriwise@outlook.com" target="_blank">
<img src="https://cdn-icons-png.flaticon.com/512/561/561127.png"/>
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
display:flex;
gap:20px;
overflow:hidden;
padding:20px;
animation:scroll 35s linear infinite;
}

@keyframes scroll{
0%{transform:translateX(0)}
100%{transform:translateX(-50%)}
}

.card{
min-width:240px;
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
background:#5e3ed6;
width:46px;
height:46px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
}

.floaters img{
width:22px;
height:22px;
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
