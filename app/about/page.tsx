"use client"

import Link from "next/link"

export default function About() {
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



{/* STORY */}

<section className="story">

<h1>How NutriWise Was Born</h1>

<p>
NutriWise began with a simple but powerful realization — while medicine fights cancer, nutrition strengthens the body through one of the toughest battles of life.
</p>

<p>
During cancer treatment, patients often struggle with fatigue, appetite loss, nausea, digestive discomfort, and emotional exhaustion. Families desperately try to help but often feel lost when it comes to nutrition — unsure what helps and what harms.
</p>

<p>
Many patients are told what treatments to take, but very few receive clear guidance on how to nourish their bodies during those treatments. Yet nutrition can play a vital role in maintaining strength, supporting immunity, and improving tolerance to therapy.
</p>

<p>
NutriWise was created to bridge this gap — to provide compassionate, evidence-based oncology nutrition guidance so that patients and their families never feel alone or confused during their journey.
</p>

<p>
At NutriWise, our goal is not just nutrition advice. Our goal is strength, dignity, and hope for every patient navigating cancer.
</p>

</section>



{/* FOUNDER MESSAGE */}

<section className="founder">

<h2>Message From The Founder</h2>

<div className="founderBox">

<img src="/founder.jpeg" className="founderImg"/>

<div className="founderText">

<p>
When I started NutriWise, it came from a deep realization that cancer care is not only about medicine — it is about supporting the entire human being going through the journey.
</p>

<p>
Patients undergoing treatment often experience physical weakness, emotional uncertainty, and overwhelming confusion about nutrition. Families try their best to help, but reliable guidance is often missing.
</p>

<p>
NutriWise was created with a heartfelt mission — to ensure that no patient feels lost when it comes to nutrition during treatment.
</p>

<p>
Nutrition has the power to restore strength, support healing, and bring comfort during difficult days. Through NutriWise, we aim to bring compassionate, science-based nutrition support to every patient and family who needs it.
</p>

<p>
Every patient deserves not just treatment, but strength, clarity, and hope throughout their journey.
</p>

<p className="founderName">
— Manali Chandan  
Founder, NutriWise
</p>

</div>

</div>

</section>



{/* MISSION & VISION */}

<section className="missionVision">

<div className="box">

<h2>Our Mission</h2>

<p>
To provide compassionate oncology nutrition guidance that empowers patients and families to navigate cancer treatment with strength, clarity, and dignity.
</p>

</div>


<div className="box">

<h2>Our Vision</h2>

<p>
To build a world where every cancer patient has access to trusted nutrition guidance that supports treatment, improves quality of life, and strengthens recovery.
</p>

</div>

</section>



{/* FOOTER */}

<footer className="footer">

<img src="/lotus.png" className="lotus"/>

<p>
NutriWise – Supporting patients with compassionate oncology nutrition guidance
</p>

</footer>



{/* FLOATERS */}

<div className="floaters">

<a href="https://wa.me/" target="_blank">W</a>
<a href="https://instagram.com" target="_blank">I</a>
<a href="https://linkedin.com" target="_blank">L</a>
<a href="https://youtube.com" target="_blank">Y</a>
<a href="https://x.com" target="_blank">X</a>
<a href="mailto:join.nutriwise@outlook.com">M</a>

</div>



<style jsx>{`


.page{

font-family:Poppins;
padding:40px;

background:linear-gradient(
180deg,
#fff7fb 0%,
#f3ecff 35%,
#efe8ff 65%,
#fdf4ff 100%
);

color:#4a3ca6;

}



/* NAV */

.nav{
display:flex;
justify-content:space-between;
margin-bottom:20px;
}

.links{
display:flex;
gap:28px;
font-weight:500;
}



/* LOGO */

.logoWrap{
display:flex;
justify-content:center;
margin-bottom:40px;
}

.logo{
width:280px;
filter:drop-shadow(0 0 30px rgba(180,120,255,0.6));
}



/* STORY */

.story{
max-width:900px;
margin:80px auto;
text-align:center;
line-height:1.9;
}

.story h1{
margin-bottom:30px;
}

.story p{
margin-bottom:20px;
}



/* FOUNDER */

.founder{
max-width:1000px;
margin:100px auto;
}

.founder h2{
text-align:center;
margin-bottom:40px;
}

.founderBox{
display:flex;
gap:40px;
align-items:center;
}

.founderImg{
width:200px;
height:200px;
border-radius:50%;
object-fit:cover;
box-shadow:0 10px 30px rgba(0,0,0,0.15);
}

.founderText p{
margin-bottom:18px;
line-height:1.8;
}

.founderName{
margin-top:20px;
font-weight:600;
}



/* MISSION VISION */

.missionVision{
display:flex;
gap:40px;
max-width:900px;
margin:100px auto;
}

.box{
flex:1;
background:white;
padding:30px;
border-radius:20px;
box-shadow:0 10px 25px rgba(0,0,0,0.08);
text-align:center;
}



/* FOOTER */

.footer{
margin-top:100px;
padding:50px;
text-align:center;
background:linear-gradient(180deg,#d8c8ff,#b9a2ff);
border-radius:25px;
}

.lotus{
width:70px;
margin-bottom:10px;
}



/* FLOATERS */

.floaters{

position:fixed;
right:20px;
top:40%;
display:flex;
flex-direction:column;
gap:14px;

}

.floaters a{

background:#5e3ed6;
color:white;
width:42px;
height:42px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
text-decoration:none;
font-weight:bold;

}


`}</style>

</main>

)
}
