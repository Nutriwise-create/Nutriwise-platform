"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLeaf, FaHandsHelping } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

export default function Home(){

const testimonials = [
{name:"Priya Mehta",city:"Mumbai",text:"Nutrition guidance helped me regain strength during chemotherapy."},
{name:"Ramesh Shah",city:"Delhi",text:"Nutrition support helped me maintain my energy levels during treatment."},
{name:"Anjali Iyer",city:"Chennai",text:"Small dietary changes made my treatment days easier."},
{name:"Arjun Nair",city:"Bangalore",text:"Nutrition support helped me slowly regain strength."},
{name:"Kavita Desai",city:"Ahmedabad",text:"Food guidance helped me tolerate treatment better."},
{name:"Sneha Joshi",city:"Pune",text:"Compassionate and supportive nutritional guidance."}
];

const [index,setIndex] = useState(0);

useEffect(()=>{
const timer=setInterval(()=>{
setIndex((prev)=>(prev+1)%testimonials.length)
},3000);
return ()=>clearInterval(timer)
},[]);

return(

<main className="page">

{/* NAV */}

<nav className="nav">

<a href="#">About Us</a>
<a href="#">Our Nutritionists</a>
<a href="#">Stories of Strength</a>
<a href="#">Book Consultation</a>
<a href="#">Login</a>

</nav>


{/* LOGO */}

<div className="logoWrap">

<img src="/logo.png" className="logo"/>

</div>


{/* HERO */}

<section className="hero">

<h1>Medicine treats cancer, but nutrition strengthens your body</h1>

<p>
Compassionate oncology nutrition guidance supporting strength, healing
and dignity throughout the cancer journey.
</p>

</section>


{/* WHY NUTRITION */}

<section className="section">

<h2>Why Right Nutrition Matters</h2>

<p>
Cancer treatment places immense stress on the body. Chemotherapy,
radiation therapy and surgeries often bring side effects like
fatigue, nausea, appetite loss and muscle weakness.
</p>

<p>
Proper oncology nutrition helps maintain strength, support immune
function and improve tolerance to treatment. NutriWise focuses on
compassionate, evidence-based nutrition guidance that supports
patients through recovery and healing.
</p>

</section>


{/* WHAT WE PROVIDE */}

<section className="section">

<h2>What We Provide</h2>

<div className="cards">

<div className="card">
<FaLeaf size={42}/>
<h3>Personalized Oncology Nutrition</h3>
<p>Nutrition plans tailored to cancer type and treatment stage.</p>
</div>

<div className="card">
<MdHealthAndSafety size={42}/>
<h3>Managing Treatment Side Effects</h3>
<p>Guidance to support nausea, fatigue and appetite loss.</p>
</div>

<div className="card">
<FaHandsHelping size={42}/>
<h3>Continuous Support</h3>
<p>Compassionate nutrition guidance through treatment.</p>
</div>

</div>

</section>


{/* TESTIMONIALS */}

<section className="section">

<h2>Patient Experiences</h2>

<div className="testimonialRow">

{[0,1,2].map((i)=>{

const t=testimonials[(index+i)%testimonials.length];

return(

<div className="testimonial" key={i}>

<img src={`https://randomuser.me/api/portraits/${i%2?"women":"men"}/${40+i}.jpg`} />

<p>"{t.text}"</p>

<strong>{t.name}</strong>

<span>{t.city}</span>

</div>

)

})}

</div>

</section>


{/* SUPPORT */}

<section className="section support">

<h2>Support a Patient</h2>

<p>
Cancer journeys can be overwhelming. Your support can help provide
nutrition guidance to patients who may not otherwise access care.
</p>

<button className="supportBtn">
Support Now
</button>

<p className="counter">
Patients Supported: 124
</p>

</section>


{/* FOOTER */}

<footer className="footer">

<img src="/lotus.jpeg" className="lotus"/>

<div className="policies">

<button>Privacy Policy</button>

<button>Refund Policy</button>

<button>Legal Disclaimer</button>

</div>

</footer>


{/* FLOATING SOCIAL */}

<div className="floater">

<a href="https://wa.me/918320867088" target="_blank"><FaWhatsapp/></a>

<a href="https://instagram.com/nutriwise_26" target="_blank"><FaInstagram/></a>

<a href="https://linkedin.com/company/nutriwise26" target="_blank"><FaLinkedin/></a>

<a href="https://youtube.com/@NutriWise_26" target="_blank"><FaYoutube/></a>

<a href="https://x.com/NutriWise26" target="_blank"><FaXTwitter/></a>

<a href="mailto:join.nutriwise@outlook.com"><MdEmail/></a>

</div>


<style jsx>{`

.page{
background:linear-gradient(180deg,#f8edff,#fde2f3);
font-family:Poppins;
padding:40px;
color:#333;
}

.nav{
display:flex;
justify-content:flex-end;
gap:30px;
font-weight:500;
}

.logoWrap{
text-align:center;
margin:40px 0;
}

.logo{
height:120px;
}

.hero{
text-align:center;
max-width:800px;
margin:auto;
}

.section{
max-width:1000px;
margin:80px auto;
}

.section h2{
color:#4A2C6D;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;
}

.card{
background:white;
padding:30px;
border-radius:16px;
box-shadow:0 10px 25px rgba(0,0,0,0.08);
text-align:center;
}

.testimonialRow{
display:flex;
gap:25px;
}

.testimonial{
background:white;
padding:20px;
border-radius:15px;
width:280px;
text-align:center;
box-shadow:0 10px 20px rgba(0,0,0,0.08);
}

.testimonial img{
width:70px;
height:70px;
border-radius:50%;
}

.support{
text-align:center;
}

.supportBtn{
background:#c79cff;
border:none;
padding:14px 28px;
border-radius:25px;
color:white;
font-weight:600;
cursor:pointer;
}

.footer{
text-align:center;
margin-top:60px;
}

.lotus{
height:60px;
}

.policies button{
margin:10px;
}

.floater{
position:fixed;
right:20px;
top:40%;
display:flex;
flex-direction:column;
gap:15px;
font-size:26px;
}

.floater a{
background:white;
padding:10px;
border-radius:50%;
box-shadow:0 5px 15px rgba(0,0,0,0.15);
}

`}</style>

</main>

);

}
