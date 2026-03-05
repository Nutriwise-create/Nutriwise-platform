"use client"

import { useState } from "react"

import { FaLeaf, FaHandsHelping, FaHeart } from "react-icons/fa"
import { MdHealthAndSafety, MdEmail } from "react-icons/md"

import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function Home(){

const [policy,setPolicy]=useState("")

const testimonials=[

{
name:"Priya Mehta",
city:"Mumbai",
image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
text:"Nutrition guidance helped me regain strength during chemotherapy."
},

{
name:"Ramesh Shah",
city:"Delhi",
image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
text:"Nutrition support helped me maintain energy during treatment."
},

{
name:"Anjali Iyer",
city:"Chennai",
image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
text:"Dietary guidance helped me manage treatment side effects."
},

{
name:"Arjun Nair",
city:"Bangalore",
image:"https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200",
text:"Nutrition support improved my recovery journey."
}

]

return(

<main className="page">

{/* NAVBAR */}

<nav className="nav">

<div></div>

<div className="navLinks">
<a>About Us</a>
<a>Our Nutritionists</a>
<a>Stories of Strength</a>
<a>Book Consultation</a>
<a>Login</a>
</div>

</nav>


{/* LOGO */}

<div className="logoWrap">

<img
src="/Logo.png"
alt="NutriWise"
className="logo"
/>

</div>


{/* HERO */}

<section className="hero">

<h1>
Medicine treats cancer, but nutrition strengthens your body
</h1>

<p>
Compassionate oncology nutrition guidance designed to support
strength, healing and dignity throughout the cancer journey.
</p>

</section>


{/* WHY NUTRITION */}

<section className="section">

<h2>Why Right Nutrition Matters</h2>

<p>
Cancer treatment places enormous stress on the body.
Chemotherapy, radiation therapy and surgery often cause fatigue,
appetite loss and digestive discomfort.
</p>

<p>
Balanced oncology nutrition helps maintain strength,
improve immunity and support recovery during treatment.
</p>

</section>


{/* SERVICES */}

<section className="section">

<h2>What We Provide</h2>

<div className="cards">

<div className="card">
<FaLeaf size={36}/>
<h3>Personalized Oncology Nutrition</h3>
<p>Nutrition plans tailored to cancer type and treatment stage.</p>
</div>

<div className="card">
<MdHealthAndSafety size={36}/>
<h3>Managing Treatment Side Effects</h3>
<p>Support for appetite loss, fatigue and digestive discomfort.</p>
</div>

<div className="card">
<FaHandsHelping size={36}/>
<h3>Continuous Nutrition Support</h3>
<p>Compassionate guidance throughout the healing journey.</p>
</div>

</div>

</section>


{/* TESTIMONIALS */}

<section className="section">

<h2>Patient Experiences</h2>

<div className="carousel">

<div className="track">

{testimonials.map((t,i)=>(
<div className="testimonial" key={i}>

<img src={t.image}/>

<p>"{t.text}"</p>

<strong>{t.name}</strong>
<span>{t.city}</span>

</div>
))}

{testimonials.map((t,i)=>(
<div className="testimonial" key={"copy"+i}>

<img src={t.image}/>

<p>"{t.text}"</p>

<strong>{t.name}</strong>
<span>{t.city}</span>

</div>
))}

</div>

</div>

</section>


{/* SUPPORT */}

<section className="support">

<h2>
<FaHeart className="heart"/>
Support a Patient
<FaHeart className="heart"/>
</h2>

<p>
Your support helps provide oncology nutrition guidance
to patients who cannot access professional nutrition care.
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

<img src="/lotus.png" className="lotus"/>

<p className="tagline">

NutriWise – Supporting patients with compassionate oncology nutrition guidance

</p>

<div className="policies">

<a onClick={()=>setPolicy("privacy")}>Privacy Policy</a>
<a onClick={()=>setPolicy("refund")}>Refund Policy</a>
<a onClick={()=>setPolicy("legal")}>Legal Disclaimer</a>

</div>

</footer>


{/* POLICY MODALS */}

{policy &&(

<div className="modal">

<div className="modalBox">

<button onClick={()=>setPolicy("")}>Close</button>

{policy==="privacy" &&(
<p>
NutriWise respects your privacy and collects only necessary
information required to provide nutrition guidance.
</p>
)}

{policy==="refund" &&(
<p>
Refunds are available if requested within 10 days of purchase.
Refunds may not be granted if consultations are completed
or services delivered.
</p>
)}

{policy==="legal" &&(
<p>
NutriWise provides nutritional guidance and educational support.
Our services do not replace professional medical advice.
</p>
)}

</div>

</div>

)}


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
font-family:Poppins;
padding:30px;

background:linear-gradient(
180deg,
#ffe6f3,
#e9dcff,
#c7b2ff
);

color:#4b2ca3;
}

.nav{
display:flex;
justify-content:space-between;
}

.navLinks{
display:flex;
gap:28px;
font-weight:500;
}

.logoWrap{
display:flex;
justify-content:center;
margin-top:10px;
margin-bottom:10px;
position:relative;
}

.logo{
width:260px;
filter:drop-shadow(0 0 40px rgba(180,120,255,0.6));
}

.hero{
text-align:center;
max-width:850px;
margin:30px auto;
}

.section{
max-width:1100px;
margin:80px auto;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;
}

.card{
background:white;
padding:30px;
border-radius:20px;
box-shadow:0 15px 30px rgba(0,0,0,0.08);
text-align:center;
}

.carousel{
overflow:hidden;
}

.track{
display:flex;
gap:30px;
animation:scroll 28s linear infinite;
}

@keyframes scroll{
0%{transform:translateX(0)}
100%{transform:translateX(-50%)}
}

.testimonial{
min-width:260px;
background:white;
padding:25px;
border-radius:20px;
box-shadow:0 10px 20px rgba(0,0,0,0.1);
text-align:center;
}

.testimonial img{
width:70px;
height:70px;
border-radius:50%;
margin-bottom:10px;
}

.support{
text-align:center;
padding:70px 20px;
}

.heart{
color:#7b3fff;
margin:0 8px;
}

.supportBtn{
margin-top:20px;
padding:14px 36px;
background:#6d39ff;
color:white;
border:none;
border-radius:30px;
font-size:16px;
cursor:pointer;
}

.footer{
margin-top:80px;
text-align:center;
padding:50px;
background:linear-gradient(180deg,#d7c4ff,#b79aff);
border-radius:25px;
}

.lotus{
width:70px;
margin-bottom:10px;
filter:drop-shadow(0 0 25px rgba(180,120,255,0.6));
}

.policies{
margin-top:15px;
display:flex;
justify-content:center;
gap:20px;
}

.modal{
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.6);
display:flex;
justify-content:center;
align-items:center;
}

.modalBox{
background:white;
padding:30px;
border-radius:15px;
max-width:500px;
}

.floater{
position:fixed;
right:20px;
top:40%;
display:flex;
flex-direction:column;
gap:15px;
}

.floater a{
background:#5b34d6;
color:white;
padding:12px;
border-radius:50%;
font-size:20px;
}

`}</style>

</main>

)
}
