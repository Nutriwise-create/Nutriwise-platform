"use client"

import Link from "next/link"

export default function Nutritionists(){

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



{/* HEADER */}

<section className="header">

<h1>Meet Our Oncology Nutrition Experts</h1>

<p>
Compassionate professionals dedicated to supporting patients through evidence-based oncology nutrition guidance.
</p>

</section>



{/* NUTRITIONISTS */}

<section className="cards">


<div className="card">

<img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2"/>

<h3>Dr. Aditi Sharma</h3>

<p className="title">Oncology Nutritionist</p>

<p>
10+ years experience supporting patients through chemotherapy and recovery nutrition.
</p>

<p className="tags">
Chemotherapy Nutrition • Gut Recovery • Strength Building
</p>

</div>



<div className="card">

<img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f"/>

<h3>Dr. Neha Mehta</h3>

<p className="title">Clinical Oncology Dietitian</p>

<p>
Specializes in nutrition planning during radiation therapy and treatment recovery.
</p>

<p className="tags">
Radiation Nutrition • Weight Management • Immune Support
</p>

</div>



<div className="card">

<img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"/>

<h3>Dr. Kavita Iyer</h3>

<p className="title">Cancer Recovery Nutrition Expert</p>

<p>
Focused on post-treatment recovery and long-term strength rebuilding through nutrition.
</p>

<p className="tags">
Recovery Nutrition • Muscle Strength • Energy Restoration
</p>

</div>



</section>



{/* TRUST SECTION */}

<section className="trust">

<h2>Why NutriWise Nutritionists</h2>

<div className="trustGrid">

<div>✔ Specialized in Oncology Nutrition</div>
<div>✔ Evidence-Based Nutrition Guidance</div>
<div>✔ Personalized Patient Care</div>
<div>✔ Continuous Support During Treatment</div>

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

<a href="https://wa.me/" target="_blank">
<img src="https://cdn-icons-png.flaticon.com/512/733/733585.png"/>
</a>

<a href="https://instagram.com" target="_blank">
<img src="https://cdn-icons-png.flaticon.com/512/733/733558.png"/>
</a>

<a href="https://linkedin.com" target="_blank">
<img src="https://cdn-icons-png.flaticon.com/512/733/733561.png"/>
</a>

<a href="https://youtube.com" target="_blank">
<img src="https://cdn-icons-png.flaticon.com/512/733/733646.png"/>
</a>

<a href="https://x.com" target="_blank">
<img src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png"/>
</a>

<a href="mailto:join.nutriwise@outlook.com">
<img src="https://cdn-icons-png.flaticon.com/512/732/732200.png"/>
</a>

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

.logoWrap{
display:flex;
justify-content:center;
margin-bottom:40px;
}

.logo{
width:280px;
filter:drop-shadow(0 0 30px rgba(180,120,255,0.6));
}

.header{
text-align:center;
max-width:800px;
margin:60px auto;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:40px;
max-width:1000px;
margin:80px auto;
}

.card{
background:white;
padding:30px;
border-radius:20px;
text-align:center;
box-shadow:0 10px 25px rgba(0,0,0,0.08);
}

.card img{
width:120px;
height:120px;
border-radius:50%;
object-fit:cover;
margin-bottom:15px;
}

.title{
font-weight:600;
margin-bottom:10px;
}

.tags{
font-size:14px;
}

.trust{
text-align:center;
margin:100px auto;
max-width:900px;
}

.trustGrid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:20px;
margin-top:30px;
}

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

`}</style>

</main>

)

}
