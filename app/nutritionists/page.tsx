"use client"

import Link from "next/link"
import { useState } from "react"

export default function Nutritionists(){

const [policy,setPolicy]=useState("")

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



{/* PAGE HEADER */}

<section className="header">

<h1>Our Nutritionists</h1>

<p>
Our team of oncology nutrition specialists is committed
to supporting patients with compassionate, evidence-based
nutritional guidance throughout their treatment journey.
</p>

</section>



{/* TEAM GRID */}

<section className="team">

<div className="card">

<img src="https://randomuser.me/api/portraits/women/44.jpg"/>

<h3>Dr. Ananya Mehta</h3>

<p className="title">Oncology Nutrition Specialist</p>

<p>
Dr. Ananya has spent years guiding cancer patients through
nutrition strategies that support strength and resilience
during treatment and recovery.
</p>

</div>



<div className="card">

<img src="https://randomuser.me/api/portraits/men/32.jpg"/>

<h3>Rohit Kapoor</h3>

<p className="title">Clinical Nutritionist</p>

<p>
Rohit focuses on helping patients maintain energy and
nutritional balance during chemotherapy and radiation therapy.
</p>

</div>



<div className="card">

<img src="https://randomuser.me/api/portraits/women/65.jpg"/>

<h3>Dr. Sneha Jos
