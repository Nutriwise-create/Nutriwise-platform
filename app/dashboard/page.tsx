"use client"

import Link from "next/link"

export default function Dashboard(){

return(

<main className="page">


{/* NAVBAR */}

<nav className="nav">

<div></div>

<div className="links">
<Link href="/dashboard">Home</Link>
<Link href="/dashboard/profile">Profile</Link>
</div>

</nav>


{/* LOGO */}

<div className="logoWrap">
<img src="/Logo.png" className="logo"/>
</div>


{/* QUOTE */}

<section className="quote">

<p>
<strong><i>
"Even on difficult days your strength is quietly working within you.
Healing is not always visible — but it is happening."
</i></strong>
</p>

</section>


{/* CARE CUDDLE */}

<section className="tip">

<h3>⚗️ Care Cuddle</h3>

<p>
A gentle nutrition nudge to support your body today.
Small nourishment choices often make the biggest difference.
</p>

</section>


{/* ANNOUNCEMENT + ARTICLES */}

<section className="infoSection">

<div className="box">

<h3>Announcements</h3>

<div className="scrollBox">

<p>Upcoming webinar on nutrition during chemotherapy</p>
<p>Online support group session this Sunday</p>
<p>Nutrition awareness event by cancer support NGO</p>
<p>Live Q&A with oncology nutrition expert</p>

</div>

</div>


<div className="box">

<h3>Helpful Articles</h3>

<div className="scrollBox">

<p>Nutrition during chemotherapy</p>
<p>Managing appetite loss during treatment</p>
<p>Protein intake for recovery</p>
<p>Foods that support healing</p>

</div>

</div>

</section>


{/* NGO CONNECT */}

<section className="ngo">

<button onClick={()=>window.open("/dashboard/ngo","_blank")}>
Click to Reach NGOs
</button>

</section>



{/* FEATURES GRID */}

<section className="features">


<div className="feature">

<h3>What You Should Eat Next</h3>

<p>
Personalized diet suggestions based on treatment stage,
nutritional needs and recovery support.
</p>

</div>


<div className="feature">

<h3>Nutrition Counter</h3>

<p>
Track daily calories, hydration, protein intake and
important nutrients required for recovery.
</p>

</div>


<div className="feature">

<h3>Today's Healing Recipe Idea</h3>

<p>
Carefully designed recipes that are easy to digest,
nutrient rich and supportive during treatment.
</p>

</div>


<div className="feature">

<h3>Medicine Tracker</h3>

<p>
Track medicines, doses and schedules so treatment
remains organized and consistent.
</p>

</div>


</section>



{/* MESSAGE NUTRITIONIST */}

<section className="nutritionist">

<button>
Message Your Nutritionist
</button>

</section>



{/* LOTUS */}

<footer className="footer">

<img src="/lotus.png" className="lotus"/>

<p>
NutriWise is dedicated to supporting cancer patients
with compassionate nutritional guidance.
</p>

</footer>



{/* WHATSAPP FLOATER */}

<a
href="https://wa.me/918320867088"
target="_blank"
className="whatsapp"
>
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"/>
</a>



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
}



.logoWrap{
display:flex;
justify-content:center;
margin:30px 0;
}



.logo{
width:220px;
filter:drop-shadow(0 0 25px rgba(200,150,255,0.6));
}



.quote{
text-align:center;
max-width:650px;
margin:auto;
margin-bottom:40px;
font-size:18px;
}



.tip{
background:white;
padding:20px;
border-radius:15px;
max-width:650px;
margin:auto;
text-align:center;

box-shadow:0 5px 20px rgba(0,0,0,0.05);
}



.infoSection{
display:flex;
gap:30px;
justify-content:center;
margin-top:50px;
flex-wrap:wrap;
}



.box{
background:white;
padding:20px;
border-radius:15px;
width:300px;

box-shadow:0 5px 20px rgba(0,0,0,0.05);
}



.scrollBox{
height:120px;
overflow:hidden;
display:flex;
flex-direction:column;
gap:10px;

animation:scrollUp 10s linear infinite;
}



@keyframes scrollUp{
0%{transform:translateY(0)}
100%{transform:translateY(-50%)}
}



.ngo{
text-align:center;
margin-top:40px;
}



.ngo button{
background:#7b5cff;
color:white;
padding:12px 25px;
border:none;
border-radius:20px;
cursor:pointer;
}



.features{
margin-top:60px;

display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:25px;
}



.feature{
background:white;
padding:25px;
border-radius:15px;

box-shadow:0 5px 20px rgba(0,0,0,0.05);
}



.nutritionist{
text-align:center;
margin-top:50px;
}



.nutritionist button{
background:#6d4df5;
color:white;
padding:14px 30px;
border:none;
border-radius:25px;
cursor:pointer;
}



.footer{
text-align:center;
margin-top:80px;
}



.lotus{
width:70px;
margin-bottom:10px;
}



.whatsapp{
position:fixed;
right:20px;
bottom:30px;

width:50px;
height:50px;

background:#25D366;
border-radius:50%;

display:flex;
align-items:center;
justify-content:center;
}



.whatsapp img{
width:24px;
height:24px;
filter:brightness(0) invert(1);
}



@media(max-width:768px){

.page{
padding:20px;
}

.logo{
width:180px;
}

.infoSection{
flex-direction:column;
align-items:center;
}

}

`}</style>

</main>

)
}
