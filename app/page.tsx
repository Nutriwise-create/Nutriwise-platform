'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

export default function Home() {

const [patients,setPatients] = useState(0)

useEffect(()=>{
let target = 124
let interval = setInterval(()=>{
setPatients(prev=>{
if(prev>=target){
clearInterval(interval)
return target
}
return prev+1
})
},20)

return ()=>clearInterval(interval)
},[])

return(

<div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-500 to-pink-500 text-white font-light">

{/* NAVBAR */}

<div className="flex justify-between items-center px-10 py-6">

<Image
src="/logo.png"
alt="NutriWise"
width={140}
height={60}
/>

<div className="flex gap-8 text-sm">

<a href="/about">About</a>
<a href="/nutritionists">Our Nutritionists</a>
<a href="/stories">Stories of Strength</a>
<a href="/consultation">Book Consultation</a>
<a href="/login">Login</a>

</div>

</div>

{/* HERO */}

<section className="text-center py-24 px-6">

<div className="flex justify-center mb-6">

<Image
src="/logo.png"
alt="NutriWise"
width={200}
height={120}
/>

</div>

<h1 className="text-4xl md:text-5xl font-serif max-w-3xl mx-auto leading-snug">

Medicine treats cancer,  
but nutrition strengthens your body.

</h1>

</section>

{/* WHY NUTRITION MATTERS */}

<section className="bg-white text-gray-800 rounded-t-3xl px-10 py-20">

<h2 className="text-3xl text-center font-serif mb-10">
Why Right Nutrition Matters
</h2>

<div className="max-w-3xl mx-auto text-center leading-relaxed">

<p>
Cancer treatment places immense stress on the body. Many patients experience fatigue, appetite loss, weight changes, and difficulty maintaining strength during therapy.
</p>

<br/>

<p>
The right nutritional support helps patients maintain energy, protect muscle mass, strengthen immunity, and tolerate treatments better.
</p>

<br/>

<p>
NutriWise was created to ensure that no patient walks through treatment without the guidance, compassion, and nutritional care they deserve.
</p>

</div>

</section>

{/* WHAT WE PROVIDE */}

<section className="bg-white text-gray-800 px-10 py-20">

<h2 className="text-3xl font-serif text-center mb-12">
What We Provide
</h2>

<div className="grid md:grid-cols-3 gap-10">

{[
{
title:"Personalised Oncology Nutrition",
text:"Nutrition plans designed according to cancer type, stage, and treatment."
},

{
title:"Managing Treatment Side Effects",
text:"Support for nausea, appetite loss, fatigue, and treatment related symptoms."
},

{
title:"Continuous Nutrition Monitoring",
text:"Guidance throughout the treatment journey to maintain strength."
}

].map((card,i)=>(

<div key={i} className="bg-white shadow-xl rounded-xl p-8 hover:scale-105 transition">

<h3 className="font-semibold text-purple-700 mb-3">
{card.title}
</h3>

<p className="text-sm text-gray-600">
{card.text}
</p>

</div>

))}

</div>

</section>

{/* SUPPORT A PATIENT */}

<section className="bg-purple-700 text-center py-20 px-8">

<h2 className="text-3xl font-serif mb-6">
Support a Patient
</h2>

<p className="max-w-xl mx-auto mb-8">

Many patients cannot access nutritional guidance during treatment due to financial constraints. Supporting a patient means helping someone maintain strength, dignity, and hope during one of the most difficult journeys of their life.

</p>

<button className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">

Support Now

</button>

</section>

{/* PATIENT COUNTER */}

<section className="bg-white text-center text-gray-800 py-20">

<h2 className="text-3xl font-serif mb-6">
Patients Supported Till Now
</h2>

<p className="text-5xl font-bold text-purple-600">

{patients}

</p>

</section>

{/* TESTIMONIALS */}

<section className="bg-white px-10 py-20">

<h2 className="text-3xl font-serif text-center mb-12 text-gray-800">
Patient Experiences
</h2>

<div className="grid md:grid-cols-3 gap-8">

{[
"Kavita Sharma","Rahul Mehta","Anita Kapoor","Vijay Patel",
"Sunita Iyer","Arjun Singh","Pooja Khanna","Neha Desai",
"Manish Shah","Deepa Rao","Rajesh Nair","Ritu Bansal"

].map((name,i)=>(

<div key={i} className="bg-gray-50 p-6 rounded-xl shadow text-center">

<div className="w-16 h-16 bg-purple-400 rounded-full mx-auto mb-4"></div>

<p className="text-sm text-gray-600 mb-3">

Nutrition guidance helped me maintain strength during treatment and feel more supported.

</p>

<p className="font-semibold text-purple-700">

{name}

</p>

</div>

))}

</div>

</section>

{/* STORIES */}

<section className="bg-purple-600 text-white text-center px-10 py-20">

<h2 className="text-3xl font-serif mb-6">
Stories of Strength
</h2>

<p className="max-w-xl mx-auto">

Stories of resilience from individuals such as Hina Khan, Sonali Bendre, and Anurag Basu remind us that courage and hope can guide people through the most difficult journeys.

</p>

</section>

{/* NUTRITIONISTS */}

<section className="bg-white px-10 py-20">

<h2 className="text-3xl font-serif text-center mb-12 text-gray-800">

Our Nutritionists

</h2>

<div className="grid md:grid-cols-5 gap-6">

{["Dr Riya Sharma","Arjun Mehta","Dr Naina Kapoor","Dr Aman Verma","Sonal Gupta"].map((name,i)=>(

<div key={i} className="text-center">

<div className="w-20 h-20 rounded-full bg-purple-400 mx-auto mb-3"></div>

<p className="font-semibold text-purple-700">

{name}

</p>

</div>

))}

</div>

</section>

{/* SOCIAL MEDIA */}

<section className="bg-purple-700 text-center py-12">

<div className="flex justify-center gap-10 text-sm">

<a href="https://wa.me/918320867088">WhatsApp</a>
<a href="https://instagram.com/nutriwise_26">Instagram</a>
<a href="https://x.com/NutriWise26">X</a>
<a href="https://www.linkedin.com/company/nutriwise26">LinkedIn</a>
<a href="https://www.youtube.com/@NutriWise_26">YouTube</a>

</div>

</section>

{/* FOOTER */}

<footer className="bg-black text-white text-center py-6 text-sm">

<p className="mb-2">
Privacy Policy • Refund Policy • Legal Disclaimer
</p>

<p>
© NutriWise
</p>

</footer>

{/* FLOATING WHATSAPP */}

<a
href="https://wa.me/918320867088"
className="fixed bottom-6 right-6 bg-green-500 px-4 py-3 rounded-full shadow-lg"
>

WhatsApp

</a>

</div>

)

}
