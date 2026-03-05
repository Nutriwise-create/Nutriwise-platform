"use client"

import { useState } from "react"
import Link from "next/link"

export default function Consultation(){

const [form,setForm]=useState({
name:"",
age:"",
gender:"",
email:"",
countryCode:"+91",
phone:"",
cancerType:"",
doctor:"",
hospital:"",
date:"",
time:""
})

function handleChange(e:any){
setForm({
...form,
[e.target.name]:e.target.value
})
}

function handleSubmit(e:any){
e.preventDefault()

if(form.phone.length < 8){
alert("Please enter a valid phone number")
return
}

alert("Consultation request submitted successfully")

console.log(form)
}

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



{/* PAGE TITLE */}

<section className="header">

<h1>Book a Consultation</h1>

<p>
Every cancer journey is deeply personal.
Our oncology nutrition team is here to listen, guide and support you
with compassion, care and understanding.
</p>

</section>



{/* FORM */}

<section className="formSection">

<form onSubmit={handleSubmit} className="form">


<input
name="name"
placeholder="Full Name"
required
onChange={handleChange}
/>


<input
name="age"
type="number"
placeholder="Age"
required
onChange={handleChange}
/>


<select name="gender" required onChange={handleChange}>
<option value="">Gender</option>
<option>Male</option>
<option>Female</option>
<option>Prefer not to say</option>
</select>


<input
name="email"
type="email"
placeholder="Email Address"
required
onChange={handleChange}
/>



{/* PHONE */}

<div className="phone">

<select name="countryCode" onChange={handleChange}>
<option value="+91">🇮🇳 +91</option>
<option value="+1">🇺🇸 +1</option>
<option value="+44">🇬🇧 +44</option>
<option value="+61">🇦🇺 +61</option>
</select>

<input
name="phone"
placeholder="Phone Number"
required
onChange={handleChange}
/>

</div>



<p className="note">

We understand that reaching out during a health journey can take courage.
Please know that you are not alone.  
Our team is here to support you with kindness, patience and respect for
your time and space.

</p>



{/* CANCER TYPE */}

<select name="cancerType" required onChange={handleChange}>

<option value="">Select Cancer Type</option>

<option>Breast Cancer</option>
<option>Lung Cancer</option>
<option>Colon Cancer</option>
<option>Leukemia</option>
<option>Lymphoma</option>
<option>Prostate Cancer</option>
<option>Ovarian Cancer</option>
<option>Pancreatic Cancer</option>
<option>Other</option>

</select>



<input
name="doctor"
placeholder="Doctor Name (optional)"
onChange={handleChange}
/>



<input
name="hospital"
placeholder="Hospital Name (optional)"
onChange={handleChange}
/>



{/* DATE */}

<input
type="date"
name="date"
required
onChange={handleChange}
/>



{/* TIME */}

<select name="time" required onChange={handleChange}>

<option value="">Select Time Slot</option>

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



<button type="submit">
Submit Consultation Request
</button>

</form>

</section>



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
margin-bottom:30px;
}

.logo{
width:280px;
filter:drop-shadow(0 0 25px rgba(180,120,255,0.5));
}

.header{
text-align:center;
max-width:700px;
margin:auto;
margin-bottom:40px;
}

.formSection{
max-width:600px;
margin:auto;
}

.form{
display:flex;
flex-direction:column;
gap:16px;
}

input,select{
padding:12px;
border-radius:10px;
border:1px solid #ddd;
font-size:14px;
}

.phone{
display:flex;
gap:10px;
}

button{
background:#6d4df5;
color:white;
padding:14px;
border:none;
border-radius:20px;
cursor:pointer;
font-weight:500;
margin-top:10px;
}

.note{
font-size:13px;
color:#6b6b6b;
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
