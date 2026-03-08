"use client"

import Link from "next/link"
import { useState } from "react"

export default function Consultation(){

const [submitted,setSubmitted]=useState(false)
const [policy,setPolicy]=useState("")

const handleSubmit=(e)=>{
e.preventDefault()
setSubmitted(true)
}

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

<h1>Book a Consultation</h1>

<p>
If you or a loved one is going through cancer treatment,
our team is here to support you with compassionate
oncology nutrition guidance.
</p>

</section>



{/* FORM */}

<section className="formSection">

<form className="form" onSubmit={handleSubmit}>

<input placeholder="Full Name" required />

<div className="phoneRow">

<select>
<option>+91</option>
<option>+1</option>
<option>+44</option>
<option>+61</option>
<option>+971</option>
</select>

<input placeholder="Phone Number" type="tel" required />

</div>

<input placeholder="Email Address" type="email" required />


<select>

<option>Select Cancer Type</option>
<option>Breast Cancer</option>
<option>Lung Cancer</option>
<option>Colon Cancer</option>
<option>Blood Cancer</option>
<option>Other</option>

</select>


<select required>

<option>Current Treatment</option>
<option>Chemotherapy</option>
<option>Radiation Therapy</option>
<option>Surgery Recovery</option>
<option>Immunotherapy</option>
<option>Targeted Therapy</option>
<option>No Treatment Currently</option>
<option>Other</option>

</select>


<input placeholder="Cancer Stage (if known)" />

<input placeholder="Doctor Name" />

<input placeholder="Hospital Name" />

<input placeholder="City" />


<select required>

<option>Select Lead Source</option>
<option>Instagram</option>
<option>Google Search</option>
<option>YouTube</option>
<option>LinkedIn</option>
<option>Doctor Referral</option>
<option>Hospital Referral</option>
<option>Friend / Family</option>
<option>Website</option>
<option>Other</option>

</select>


<input type="date" />


<select>

<option>Select Time Slot</option>
<option>09:00 AM</option>
<option>09:30 AM</option>
<option>10:00 AM</option>
<option>10:30 AM</option>
<option>11:00 AM</option>
<option>11:30 AM</option>
<option>12:00 PM</option>
<option>12:30 PM</option>
<option>01:00 PM</option>
<option>01:30 PM</option>
<option>02:00 PM</option>
<option>02:30 PM</option>
<option>03:00 PM</option>
<option>03:30 PM</option>
<option>04:00 PM</option>
<option>04:30 PM</option>
<option>05:00 PM</option>
<option>05:30 PM</option>
<option>06:00 PM</option>
<option>06:30 PM</option>
<option>07:00 PM</option>
<option>07:30 PM</option>
<option>08:00 PM</option>
<option>08:30 PM</option>
<option>09:00 PM</option>

</select>



<button className="bookBtn">Request Consultation</button>


<p className="note">

We understand that this journey can feel overwhelming.
Our team respects your time and space, and we promise
we will never spam you with calls.

</p>

</form>

</section>



{/* THANK YOU POPUP */}

{submitted && (

<div className="popup">

<div className="popupBox">

<h3>Thank You</h3>

<p>
We understand that reaching out for support during a cancer
journey can feel overwhelming.
</p>

<p>
Our team has received your consultation request and
will connect with you shortly to guide you with
compassionate oncology nutrition support.
</p>

<p>
Please take care and remember that you are not alone
in this journey.
</p>

<button className="closeBtn" onClick={()=>setSubmitted(false)}>
Close
</button>

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
NutriWise is committed to supporting cancer patients
through compassionate oncology nutrition care.
</p>

</footer>



{/* POLICY POPUP */}

{policy && (

<div className="popup">

<div className="popupBox">

<button className="close" onClick={()=>setPolicy("")}>✕</button>

{policy==="privacy" && (
<p>
NutriWise respects and protects the privacy of all individuals
who interact with our platform. Any personal information shared
with NutriWise including name, contact details or consultation
requests is used strictly for providing nutrition consultation
and support services.
</p>
)}

{policy==="refund" && (
<p>
Refund requests may be considered within 10 calendar days from
the date of payment provided consultation services have not
already been delivered.
</p>
)}

{policy==="legal" && (
<p>
NutriWise provides evidence-based nutritional guidance intended
to support individuals undergoing cancer treatment or recovery.
These services do not replace medical diagnosis or treatment
provided by licensed healthcare professionals.
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
margin-bottom:50px;
}

.formSection{
display:flex;
justify-content:center;
}

.form{
background:white;
padding:40px;
border-radius:15px;
box-shadow:0 5px 20px rgba(0,0,0,0.05);
max-width:500px;
width:100%;
display:flex;
flex-direction:column;
gap:15px;
}

input,select{
padding:12px;
border-radius:8px;
border:1px solid #ddd;
font-size:14px;
}

.phoneRow{
display:flex;
gap:10px;
}

.phoneRow select{
width:30%;
}

.phoneRow input{
width:70%;
}

.bookBtn{
margin-top:10px;
background:#5e3ed6;
color:white;
padding:14px;
border:none;
border-radius:10px;
font-weight:600;
cursor:pointer;
}

.note{
font-size:13px;
text-align:center;
margin-top:10px;
opacity:0.8;
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
font-size:14px;
}

.policies button:hover{
text-decoration:underline;
color:#7b5cff;
}

.popup{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.5);
display:flex;
align-items:center;
justify-content:center;
}

.popupBox{
background:white;
padding:30px;
max-width:450px;
border-radius:10px;
text-align:center;
}

.closeBtn{
margin-top:15px;
background:#7b5cff;
color:white;
border:none;
padding:10px 22px;
border-radius:20px;
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

.phoneRow{
flex-direction:column;
}

.phoneRow select,
.phoneRow input{
width:100%;
}

}

`}</style>

</main>

)

}
