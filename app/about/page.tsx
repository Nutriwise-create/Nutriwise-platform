"use client"

import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

export default function About(){

return(

<main className="page">

{/* NAVBAR */}

<nav className="nav">
<div></div>

<div className="navLinks">
<a href="/">Home</a>
<a>Our Nutritionists</a>
<a>Stories of Strength</a>
<a>Book Consultation</a>
<a>Login</a>
</div>
</nav>


{/* LOGO */}

<div className="logoWrap">
<img src="/Logo.png" alt="NutriWise" className="logo"/>
</div>



{/* HOW NUTRIWISE WAS BORN */}

<section className="section">

<h2>How NutriWise Was Born</h2>

<p>
NutriWise was born from witnessing something deeply human that often
goes unnoticed during cancer treatment journeys. While medical teams
work tirelessly to treat the disease, many patients quietly struggle
with fatigue, appetite loss, weakness and confusion about what they
should eat during treatment.
</p>

<p>
Families often search for answers while trying to support their loved
ones. Simple questions about food, strength and recovery can become
overwhelming when reliable guidance is missing.
</p>

<p>
NutriWise was created to bring clarity, compassion and structured
oncology nutrition guidance into that space. The goal is simple —
to ensure that patients feel supported, informed and stronger during
their treatment journey.
</p>

<p>
At its heart, NutriWise exists to remind patients that nourishment is
not just about food — it is about strength, dignity and hope.
</p>

</section>



{/* FOUNDER MESSAGE */}

<section className="section founder">

<img src="/founder.jpg" className="founderImg"/>

<div>

<h2>Message from the Founder</h2>

<p>
Cancer treatment is not only a medical journey — it is an emotional
and deeply personal experience for patients and families.
</p>

<p>
Through the years I have seen how bravely patients endure treatment
while quietly struggling with fatigue, appetite loss and uncertainty
about how to nourish their bodies.
</p>

<p>
NutriWise was created with the hope that no patient should feel
alone when it comes to understanding nutrition during treatment.
Our goal is to provide guidance that is compassionate, structured
and rooted in evidence-based oncology nutrition.
</p>

<p>
Every patient deserves support, dignity and care throughout their
healing journey.
</p>

<strong>— Manali Chandan</strong>

</div>

</section>



{/* MISSION AND VISION */}

<section className="section">

<h2>Our Mission & Vision</h2>

<div className="missionGrid">

<div className="missionCard">
<h3>Our Mission</h3>

<p>
Our mission is to provide compassionate oncology nutrition guidance
that supports patients during every stage of cancer treatment.
</p>

</div>

<div className="missionCard">

<h3>Our Vision</h3>

<p>
Our vision is to make oncology nutrition an essential part of cancer
care so patients everywhere have access to nutritional support that
strengthens their body and improves quality of life.
</p>

</div>

</div>

</section>



{/* FOOTER */}

<footer className="footer">

<img src="/lotus.png" className="lotus"/>

<p>
NutriWise – Supporting patients with compassionate oncology nutrition
guidance
</p>

</footer>



{/* FLOATERS */}

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
#fff7fb 0%,
#f6efff 40%,
#efe9ff 70%,
#fdf4ff 100%
);

color:#5b3dbf;
}

.page::before{
content:"";
position:fixed;
top:-200px;
right:-200px;
width:500px;
height:500px;
background:radial-gradient(circle,rgba(210,170,255,0.35),transparent);
filter:blur(80px);
z-index:-1;
}

.page::after{
content:"";
position:fixed;
bottom:-200px;
left:-200px;
width:500px;
height:500px;
background:radial-gradient(circle,rgba(255,180,220,0.35),transparent);
filter:blur(80px);
z-index:-1;
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
margin-top:5px;
margin-bottom:25px;
position:relative;
}

.logo{
width:300px;
filter:drop-shadow(0 0 40px rgba(180,120,255,0.6));
}

.section{
max-width:1000px;
margin:80px auto;
line-height:1.8;
}

.founder{
display:grid;
grid-template-columns:250px 1fr;
gap:40px;
align-items:center;
}

.founderImg{
width:220px;
height:220px;
border-radius:50%;
object-fit:cover;
box-shadow:0 15px 35px rgba(0,0,0,0.15);
}

.missionGrid{
display:grid;
grid-template-columns:1fr 1fr;
gap:30px;
margin-top:30px;
}

.missionCard{
background:white;
padding:30px;
border-radius:20px;
box-shadow:0 15px 30px rgba(0,0,0,0.08);
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
