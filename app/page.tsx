"use client";

import { FaLeaf, FaHandsHelping, FaHeart } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Home(){

const testimonials = [
{name:"Priya Mehta",city:"Mumbai",text:"Nutrition guidance helped me regain strength during chemotherapy."},
{name:"Ramesh Shah",city:"Delhi",text:"Nutrition support helped me maintain my energy levels during treatment."},
{name:"Anjali Iyer",city:"Chennai",text:"Small dietary changes made my treatment days easier."},
{name:"Arjun Nair",city:"Bangalore",text:"Nutrition support helped me slowly regain strength."},
{name:"Kavita Desai",city:"Ahmedabad",text:"Food guidance helped me tolerate treatment better."},
{name:"Sneha Joshi",city:"Pune",text:"Compassionate and supportive nutritional guidance."},
{name:"Rahul Verma",city:"Indore",text:"Nutrition support gave me strength during recovery."},
{name:"Deepa Nair",city:"Kochi",text:"I learned how nutrition can support healing."}
];

return(

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

<img src="/logo.png" className="logo"/>

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
radiation therapy and surgeries often bring side effects such as
fatigue, nausea, appetite loss and muscle weakness.
</p>

<p>
Oncology nutrition helps preserve strength, support immunity
and improve tolerance to treatment. NutriWise focuses on
compassionate nutritional guidance designed to support
patients during treatment and recovery.
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
<p>Compassionate nutrition guidance throughout treatment.</p>

</div>

</div>

</section>


{/* PATIENT EXPERIENCE */}

<section className="section">

<h2>Patient Experiences</h2>

<div className="carousel">

<div className="carouselTrack">

{testimonials.map((t,i)=>(
<div className="testimonial" key={i}>

<img src={`https://randomuser.me/api/portraits/${i%2?"women":"men"}/${40+i}.jpg`} />

<p>"{t.text}"</p>

<strong>{t.name}</strong>

<span>{t.city}</span>

</div>
))}

{testimonials.map((t,i)=>(
<div className="testimonial" key={"copy"+i}>

<img src={`https://randomuser.me/api/portraits/${i%2?"women":"men"}/${40+i}.jpg`} />

<p>"{t.text}"</p>

<strong>{t.name}</strong>

<span>{t.city}</span>

</div>
))}

</div>

</div>

</section>


{/* SUPPORT PATIENT */}

<section className="section support">

<h2><FaHeart/> Support a Patient</h2>

<p>
Cancer journeys can be overwhelming. Your support helps provide
nutrition guidance to patients who may not otherwise access care.
</p>

<button className="supportBtn">

Support Now

</button>

<p className="counter">Patients Supported: 124</p>

</section>


{/* FOOTER */}

<footer className="footer">

<img src="/lotus.png" className="lotus"/>

<p className="tagline">

NutriWise – Supporting patients with compassionate oncology nutrition guidance

</p>

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
height:130px;
}

.hero{
text-align:center;
max-width:800px;
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
background:white;
padding:30px;
border-radius:16px;
box-shadow:0 10px 25px rgba(0,0,0,0.08);
text-align:center;
}

.carousel{
overflow:hidden;
}

.carouselTrack{
display:flex;
gap:25px;
animation:scroll 35s linear infinite;
}

.testimonial{
min-width:260px;
background:white;
padding:20px;
border-radius:15px;
text-align:center;
box-shadow:0 10px 20px rgba(0,0,0,0.08);
}

.testimonial img{
width:70px;
height:70px;
border-radius:50%;
}

@keyframes scroll{
0%{transform:translateX(0)}
100%{transform:translateX(-50%)}
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

.lotus{
height:70px;
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

)

}
