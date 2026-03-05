"use client"

import Link from "next/link"

export default function Stories(){

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

<h1>Stories of Strength</h1>

<p>
Inspiration from individuals who faced cancer with courage,
resilience and hope. Their journeys remind us that strength
is possible even during the most difficult battles.
</p>

</section>



{/* STORIES */}

<section className="stories">


{/* Story */}

<div className="storyCard">

<h3>Yuvraj Singh</h3>

<p className="subtitle">Cricket Legend • Cancer Survivor</p>

<p>
In 2011, at the peak of his cricket career, Yuvraj Singh was diagnosed with a rare form of cancer called mediastinal seminoma.
Despite battling severe fatigue and breathing issues during the World Cup, he continued to perform for India.
</p>

<p>
After the tournament, he underwent chemotherapy in the United States. The journey was physically and emotionally exhausting, but his determination remained strong.
</p>

<p>
Yuvraj returned to professional cricket after recovery and later founded the YouWeCan Foundation to support cancer patients across India.
His story continues to inspire millions around the world.
</p>

</div>



{/* Story */}

<div className="storyCard">

<h3>Sonali Bendre</h3>

<p className="subtitle">Actor • Cancer Survivor</p>

<p>
In 2018, Bollywood actor Sonali Bendre publicly revealed that she had been diagnosed with metastatic cancer.
She chose to share her journey openly, documenting both the emotional and physical challenges of treatment.
</p>

<p>
Her courage in speaking about vulnerability, fear and hope created a powerful support system for many others facing similar diagnoses.
</p>

<p>
Through her journey, Sonali reminded the world that strength often comes from acceptance and community support.
</p>

</div>



{/* Story */}

<div className="storyCard">

<h3>Lisa Ray</h3>

<p className="subtitle">Actor • Multiple Myeloma Survivor</p>

<p>
Lisa Ray was diagnosed with multiple myeloma, a rare form of blood cancer, in 2009.
The diagnosis came unexpectedly during a time when her career was thriving.
</p>

<p>
After undergoing a stem cell transplant and intensive treatment, Lisa chose to openly share her journey and raise awareness about cancer and mental resilience.
</p>

<p>
Her message emphasizes living with courage and embracing life fully even after facing serious illness.
</p>

</div>



{/* Story */}

<div className="storyCard">

<h3>Anonymous Patient Story</h3>

<p className="subtitle">Breast Cancer Survivor</p>

<p>
When Meera (name changed) was diagnosed with breast cancer at the age of 42, the news was overwhelming for her and her family.
The treatment journey brought fatigue, loss of appetite and emotional stress.
</p>

<p>
Through medical care, family support and guided nutrition, she slowly regained her strength during treatment.
</p>

<p>
Today, she shares her story to remind others that recovery is possible and that support during treatment can make a powerful difference.
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

.stories{
max-width:900px;
margin:80px auto;
display:flex;
flex-direction:column;
gap:40px;
}

.storyCard{
background:white;
padding:35px;
border-radius:20px;
box-shadow:0 10px 25px rgba(0,0,0,0.08);
line-height:1.8;
}

.subtitle{
font-weight:600;
margin-bottom:15px;
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
