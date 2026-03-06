"use client"

import Link from "next/link"

export default function Stories(){

return(

<main className="page">


{/* NAVIGATION */}

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
Every cancer journey is unique. Behind every diagnosis lies a
story of courage, resilience and hope. These stories remind us
that strength often reveals itself in the most difficult moments
of life.
</p>

</section>



{/* STORIES */}

<section className="stories">


{/* STORY */}

<div className="story">

<img src="https://randomuser.me/api/portraits/women/44.jpg"/>

<div>

<h3>Hina Khan</h3>

<p className="subtitle">Actor • Story of Courage</p>

<p>
Hina Khan has spoken openly about her health challenges,
showing the world that vulnerability and strength can
coexist. Her courage inspired thousands of people who
were silently fighting their own battles.
</p>

<div className="timeline">

<span>Diagnosis</span>
<div className="line"></div>
<span>Treatment</span>
<div className="line"></div>
<span>Recovery</span>

</div>

</div>

</div>



<div className="story">

<img src="https://randomuser.me/api/portraits/women/65.jpg"/>

<div>

<h3>Sonali Bendre</h3>

<p className="subtitle">Actor • Cancer Survivor</p>

<p>
Sonali Bendre's journey reminded millions that hope can
exist even in the darkest moments. Her openness about
treatment and recovery created awareness and empathy
across the world.
</p>

<div className="timeline">

<span>Diagnosis</span>
<div className="line"></div>
<span>Treatment</span>
<div className="line"></div>
<span>Recovery</span>

</div>

</div>

</div>



<div className="story">

<img src="https://randomuser.me/api/portraits/men/42.jpg"/>

<div>

<h3>Anurag Basu</h3>

<p className="subtitle">Director • Survivor</p>

<p>
Anurag Basu’s battle with leukemia became a powerful
example of resilience. His recovery journey inspired many
patients to keep believing in recovery.
</p>

<div className="timeline">

<span>Diagnosis</span>
<div className="line"></div>
<span>Treatment</span>
<div className="line"></div>
<span>Recovery</span>

</div>

</div>

</div>



<div className="story">

<img src="https://randomuser.me/api/portraits/men/55.jpg"/>

<div>

<h3>Yuvraj Singh</h3>

<p className="subtitle">Cricket Champion • Survivor</p>

<p>
Yuvraj Singh’s fight against cancer became one of the
most inspiring stories in sports. His determination and
positive outlook helped him overcome tremendous
challenges.
</p>

<div className="timeline">

<span>Diagnosis</span>
<div className="line"></div>
<span>Treatment</span>
<div className="line"></div>
<span>Recovery</span>

</div>

</div>

</div>



<div className="story">

<img src="https://randomuser.me/api/portraits/women/50.jpg"/>

<div>

<h3>A Story of Hope</h3>

<p className="subtitle">Patient Inspiration</p>

<p>
Every patient who walks the path of cancer treatment
shows remarkable courage. With compassionate care,
proper treatment and nutritional support, many people
rediscover strength they never knew they had.
</p>

<div className="timeline">

<span>Diagnosis</span>
<div className="line"></div>
<span>Treatment</span>
<div className="line"></div>
<span>Recovery</span>

</div>

</div>

</div>

</section>



{/* FOOTER */}

<footer className="footer">

<img src="/lotus.png" className="lotus"/>

<p>
NutriWise stands beside patients and families, offering
compassionate oncology nutrition support through every
stage of their journey.
</p>

</footer>



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
background:linear-gradient(
180deg,
#fff7fb,
#f3ecff,
#efe8ff,
#fdf4ff
);
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
width:260px;
}



.header{
text-align:center;
max-width:700px;
margin:auto;
margin-bottom:60px;
}



.story{
display:flex;
gap:25px;
background:white;
padding:25px;
border-radius:15px;
margin-bottom:30px;
box-shadow:0 5px 20px rgba(0,0,0,0.05);
}

.story img{
width:120px;
height:120px;
border-radius:50%;
object-fit:cover;
}



.subtitle{
font-weight:600;
margin-bottom:10px;
}



.timeline{
display:flex;
align-items:center;
gap:10px;
margin-top:15px;
}

.line{
height:2px;
width:40px;
background:#6d4df5;
}



.footer{
margin-top:80px;
text-align:center;
padding:40px;

background:linear-gradient(
180deg,
#f3ecff,
#efe8ff
);
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



/* MOBILE */

@media(max-width:768px){

.page{
padding:20px;
}

.story{
flex-direction:column;
text-align:center;
}

.story img{
margin:auto;
}

}

`}</style>

</main>

)

}
