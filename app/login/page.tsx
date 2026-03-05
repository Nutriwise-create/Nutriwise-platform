"use client"

import Link from "next/link"

export default function Login(){

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

<p className="tagline">
Supporting strength, healing and nourishment through
every step of your journey.
</p>

</div>



{/* LOGIN FORM */}

<section className="loginSection">

<div className="loginCard">

<h2>Welcome Back</h2>

<input type="email" placeholder="Email Address" required />

<input type="password" placeholder="Password" required />

<button className="loginBtn">Login</button>

<p className="signup">
New here? <a href="#">Create an account</a>
</p>

</div>

</section>



{/* FOOTER */}

<footer className="footer">

<img src="/lotus.png" className="lotus"/>

<p>
NutriWise stands beside patients and families with
compassionate oncology nutrition guidance.
</p>

</footer>



{/* FLOATERS */}

<div className="floaters">

<a href="https://wa.me/918320867088" target="_blank">
<img src="https://cdn-icons-png.flaticon.com/512/733/733585.png"/>
</a>

<a href="https://instagram.com/nutriwise_26" target="_blank">
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

<a href="mailto:join.nutriwise@outlook.com" target="_blank">
<img src="https://cdn-icons-png.flaticon.com/512/732/732200.png"/>
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
flex-direction:column;
align-items:center;
margin:40px 0;
text-align:center;
}

.logo{
width:260px;
margin-bottom:10px;
}

.tagline{
max-width:400px;
font-size:14px;
opacity:0.8;
}



.loginSection{
display:flex;
justify-content:center;
}



.loginCard{

background:white;
padding:40px;
border-radius:15px;
box-shadow:0 5px 20px rgba(0,0,0,0.05);

max-width:400px;
width:100%;

display:flex;
flex-direction:column;
gap:15px;

}



.loginCard input{

padding:12px;
border-radius:8px;
border:1px solid #ddd;

}



.loginBtn{

background:#5e3ed6;
color:white;
padding:14px;
border:none;
border-radius:10px;
font-weight:600;
cursor:pointer;

}



.signup{
text-align:center;
font-size:14px;
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



/* MOBILE */

@media(max-width:768px){

.page{
padding:20px;
}

.logo{
width:200px;
}

.loginCard{
padding:30px;
}

}

`}</style>

</main>

)

}
