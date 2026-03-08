"use client"

import Link from "next/link"
import { useState } from "react"

export default function Login(){

const [signup,setSignup]=useState(false)
const [policy,setPolicy]=useState("")

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
New here? 
<button className="signupBtn" onClick={()=>setSignup(true)}>
Create an account
</button>
</p>

</div>

</section>



{/* SIGNUP POPUP */}

{signup && (

<div className="popup">

<div className="popupBox">

<button className="close" onClick={()=>setSignup(false)}>✕</button>

<img src="/lotus.png" className="popupLotus"/>

<p className="popupText">
Welcome to NutriWise
</p>

<h3>Create Your Account</h3>

<div className="signupFields">

<input placeholder="Full Name" />

<input placeholder="Phone Number" />

<input placeholder="Email Address" />

<input type="password" placeholder="Create Password" />

</div>

<button className="createBtn">Create Account</button>

</div>

</div>

)}



{/* FOOTER */}

<footer className="footer">

<img src="/lotus.png" className="lotus"/>

<div className="policies">

<button onClick={()=>setPolicy("privacy")}>Privacy Policy</button>
<button onClick={()=>setPolicy("refund")}>Refund Policy</button>
<button onClick={()=>setPolicy("legal")}>Legal Disclaimer</button>

</div>

<p>
NutriWise stands beside patients and families with
compassionate oncology nutrition guidance.
</p>

</footer>



{/* POLICY POPUPS */}

{policy && (

<div className="popup">

<div className="popupBox">

<button className="close" onClick={()=>setPolicy("")}>✕</button>

{policy==="privacy" && (
<p>
NutriWise respects and protects the privacy of all individuals who interact with our platform.
Personal information shared with NutriWise including name, contact details and consultation
information is used strictly for providing nutritional support services.
</p>
)}

{policy==="refund" && (
<p>
Refund requests may be considered within 10 days of payment provided consultation services
have not already been delivered or substantially completed.
</p>
)}

{policy==="legal" && (
<p>
NutriWise provides evidence-based nutrition guidance to support patients undergoing treatment.
Our services do not replace medical advice from oncologists or healthcare professionals.
</p>
)}

</div>

</div>

)}



{/* FLOATERS */}

<div className="floaters">

<a href="https://wa.me/918320867088" target="_blank">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"/>
</a>

<a href="https://instagram.com/nutriwise_26" target="_blank">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"/>
</a>

<a href="https://www.linkedin.com/company/nutriwise26/" target="_blank">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"/>
</a>

<a href="https://www.youtube.com/@NutriWise_26" target="_blank">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"/>
</a>

<a href="https://x.com/NutriWise26" target="_blank">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg"/>
</a>

<a href="mailto:join.nutriwise@outlook.com">
<img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"/>
</a>

</div>



<style jsx>{`

.page{
font-family:Poppins;
padding:40px;
background:linear-gradient(180deg,#fff7fb,#f3ecff,#efe8ff,#fdf4ff);
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

.signupBtn{
background:none;
border:none;
color:#5e3ed6;
cursor:pointer;
font-weight:600;
}

.popup{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.6);
display:flex;
align-items:center;
justify-content:center;
}

.popupBox{
background:white;
padding:35px;
max-width:420px;
width:90%;
border-radius:14px;
text-align:center;
box-shadow:0 10px 35px rgba(0,0,0,0.15);
}

.popupLotus{
width:60px;
margin:0 auto 10px auto;
display:block;
}

.popupText{
font-size:16px;
font-weight:600;
margin-bottom:15px;
color:#4a3ca6;
}

.signupFields{
display:flex;
flex-direction:column;
gap:12px;
margin-top:15px;
}

.signupFields input{
width:100%;
padding:12px;
border-radius:8px;
border:1px solid #ddd;
}

.createBtn{
margin-top:15px;
width:100%;
background:#5e3ed6;
color:white;
padding:14px;
border:none;
border-radius:10px;
font-weight:600;
cursor:pointer;
}

.close{
position:absolute;
right:20px;
top:15px;
background:none;
border:none;
font-size:18px;
cursor:pointer;
}

.footer{
margin-top:80px;
text-align:center;
padding:40px;
background:linear-gradient(180deg,#f3ecff,#efe8ff);
}

.lotus{
width:70px;
margin-bottom:10px;
}

.policies{
display:flex;
justify-content:center;
gap:15px;
margin-bottom:10px;
flex-wrap:wrap;
}

.policies button{
background:none;
border:none;
color:#4a3ca6;
cursor:pointer;
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
}

.floaters img{
width:20px;
height:20px;
filter:brightness(0) invert(1);
}

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
