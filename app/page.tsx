"use client";

import Image from "next/image";
import { FaLeaf, FaHandsHelping, FaHeart } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Home() {

const testimonials = [
{ name:"Priya Mehta", city:"Mumbai", text:"Nutrition guidance helped me regain strength during chemotherapy." },
{ name:"Ramesh Shah", city:"Delhi", text:"Nutrition support helped me maintain energy levels during treatment." },
{ name:"Anjali Iyer", city:"Chennai", text:"Dietary support helped me tolerate treatment better." },
{ name:"Arjun Nair", city:"Bangalore", text:"Nutrition guidance supported my recovery journey." },
{ name:"Kavita Desai", city:"Ahmedabad", text:"Nutrition planning made treatment easier." },
{ name:"Sneha Joshi", city:"Pune", text:"Compassionate guidance throughout therapy." }
];

return (

<main className="page">

{/* NAVIGATION */}

<nav className="nav">
<a>About Us</a>
<a>Our Nutritionists</a>
<a>Stories of Strength</a>
<a>Book Consultation</a>
<a>Login</a>
</nav>


{/* LOGO */}

<div className="logoWrap">

<Image
src="/logo.png"
alt="NutriWise Logo"
width={230}
height={230}
/>

</div>


{/* HERO */}

<section className="hero">

<h1>Medicine treats cancer, but nutrition strengthens your body</h1>

<p>
Compassionate oncology nutrition guidance supporting strength,
healing and dignity throughout the cancer journey.
</p>

</section>


{/* WHY NUTRITION */}

<section className="section">

<h2>Why Right Nutrition Matters</h2>

<p>
Cancer treatment places immense stress on the body. Chemotherapy,
radiation therapy and surgeries often cause fatigue, appetite loss,
digestive challenges and muscle weakness.
</p>

<p>
Oncology nutrition helps support immune function, preserve strength
and improve treatment tolerance. NutriWise focuses on compassionate,
evidence-based nutritional guidance that helps patients through
recovery and healing.
</p>

</section>


{/* WHAT WE PROVIDE */}

<section className="section">

<h2>What We Provide</h2>

<div className="cards">

<div className="card">
<FaLeaf size={40}/>
<h3>Personalized Oncology Nutrition</h3>
<p>Nutrition plans tailored to cancer type and treatment stage.</p>
</div>

<div className="card">
<MdHealthAndSafety size={40}/>
<h3>Managing Treatment Side Effects</h3>
<p>Guidance for nausea, fatigue and appetite loss.</p>
</div>

<div className="card">
<FaHandsHelping size={40}/>
<h3>Continuous Support</h3>
<p>Compassionate nutrition guidance during treatment.</p>
</div>

</div>

</section>


{/* PATIENT EXPERIENCES */}

<section className="section">

<h2>Patient Experiences</h2>

<div className="carousel">

<div className="track">

{testimonials.map((t,i)=>(
<div className="testimonial" key={i}>

<Image
src={`https://randomuser.me/api/portraits/${i%2?"women":"men"}/${40+i}.jpg`}
alt="patient"
width={70}
height={70}
/>

<p>"{t.text}"</p>

<strong>{t.name}</strong>
<span>{t.city}</span>

</div>
))}

{testimonials.map((t,i)=>(
<div className="testimonial" key={"copy"+i}>

<Image
src={`https://randomuser.me/api/portraits/${i%2?"women":"men"}/${40+i}.jpg`}
alt="patient"
width={70}
height={70}
/>

<p>"{t.text}"</p>

<strong>{t.name}</strong>
<span>{t.city}</span>

</div>
))}

</div>

</div>

</section>


{/* SUPPORT A PATIENT */}

<section className="section support">

<h2 className="supportTitle">

<FaHeart style={{marginRight:"10px"}}/>

Support a Patient

</h2>

<p>
Cancer journeys can be overwhelming. Your support helps provide
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

<Image
src="/lotus.png"
alt="Lotus"
width={70}
height={70}
/>

<p className="tagline">

NutriWise – Supporting patients with compassionate oncology nutrition guidance

</p>

<div className="policies">

<a>Privacy Policy</a>
<a>Refund Policy</a>
<a>Legal Disclaimer</a>

</div>

</footer>


{/* FLOATING SOCIAL ICONS */}

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
font-family:Poppins;
padding:40px;
color:#333;
background:
radial-gradient(circle at top right,#ffd6f0,transparent 40%),
radial-gradient(circle at bottom left,#e0c6ff,transparent 40%),
linear-gradient(180deg,#f8edff,#fde2f3);
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

.hero{
text-align:center;
max-width:850px;
margin:auto;
}

.section{
max-width:1100px;
margin:80px auto;
}

.section h2{
color:#4a2c6d;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;
}

.card{
background:rgba(255,255,255,0.8);
backdrop-filter:blur(10px);
padding:30px;
border-radius:18px;
box-shadow:0 10px 25px rgba(0,0,0,0.08);
text-align:center;
}

.carousel{
overflow:hidden;
}

.track{
display:flex;
gap:25px;
animation:scroll 35s linear infinite;
}

@keyframes scroll{
0%{transform:translateX(0)}
100%{transform:translateX(-50%)}
}

.testimonial{
min-width:260px;
background:white;
padding:20px;
border-radius:15px;
text-align:center;
box-shadow:0 10px 20px rgba(0,0,0,0.08);
}

.support{
text-align:center;
}

.supportBtn{
background:#c79cff;
border:none;
padding:14px 30px;
border-radius:25px;
color:white;
font-weight:600;
cursor:pointer;
}

.footer{
text-align:center;
margin-top:80px;
}

.policies{
margin-top:20px;
display:flex;
justify-content:center;
gap:20px;
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
padding:12px;
border-radius:50%;
box-shadow:0 5px 15px rgba(0,0,0,0.15);
}

`}</style>

</main>

);

}
