"use client"

import Link from "next/link"

export default function About() {
  return (
    <main style={{fontFamily:"Poppins", padding:"40px"}}>

      {/* NAVBAR */}

      <nav style={{display:"flex",justifyContent:"space-between",marginBottom:"40px"}}>

        <div></div>

        <div style={{display:"flex",gap:"28px"}}>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/nutritionists">Our Nutritionists</Link>
          <Link href="/stories">Stories of Strength</Link>
          <Link href="/consultation">Book Consultation</Link>
          <Link href="/login">Login</Link>
        </div>

      </nav>



      {/* LOGO */}

      <div style={{display:"flex",justifyContent:"center",marginBottom:"40px"}}>
        <img src="/Logo.png" width="260"/>
      </div>



      {/* STORY */}

      <section style={{maxWidth:"900px",margin:"auto",textAlign:"center",lineHeight:"1.8"}}>

        <h1>How NutriWise Was Born</h1>

        <p>
        NutriWise was born from a simple realization —
        while medicine fights cancer, nutrition strengthens
        the body through one of the toughest battles of life.
        </p>

        <p>
        During treatment, patients face fatigue, appetite loss,
        digestive discomfort and emotional stress. Families try
        their best to support but often feel confused about what
        nutrition truly helps during treatment.
        </p>

        <p>
        NutriWise was created to bring clarity, compassion and
        evidence-based oncology nutrition guidance to patients
        and families so healing can happen with strength
        and dignity.
        </p>

      </section>



      {/* FOUNDER */}

      <section style={{maxWidth:"1000px",margin:"80px auto"}}>

        <h2 style={{textAlign:"center"}}>Message From The Founder</h2>

        <div style={{display:"flex",gap:"40px",alignItems:"center",marginTop:"30px"}}>

          <img
            src="/founder.jpeg"
            style={{
              width:"180px",
              height:"180px",
              borderRadius:"50%",
              objectFit:"cover"
            }}
          />

          <div>

            <p>
            When I started NutriWise my vision was simple —
            no cancer patient should feel confused about
            nutrition during treatment.
            </p>

            <p>
            Nutrition becomes strength, hope and resilience
            during illness. NutriWise exists so every patient
            receives compassionate and science-based guidance.
            </p>

            <p style={{marginTop:"20px",fontWeight:"600"}}>
            — Manali Chandan  
            Founder, NutriWise
            </p>

          </div>

        </div>

      </section>



      {/* MISSION */}

      <section style={{maxWidth:"800px",margin:"80px auto",textAlign:"center"}}>

        <h2>Our Mission</h2>

        <p>
        To provide compassionate oncology nutrition guidance
        that empowers patients and families to navigate cancer
        treatment with strength, clarity and dignity.
        </p>

      </section>



      {/* VISION */}

      <section style={{maxWidth:"800px",margin:"80px auto",textAlign:"center"}}>

        <h2>Our Vision</h2>

        <p>
        To ensure every cancer patient has access to trusted
        nutrition support that improves quality of life during
        treatment and recovery.
        </p>

      </section>



      {/* FOOTER */}

      <footer style={{
        textAlign:"center",
        marginTop:"100px",
        padding:"40px",
        background:"#dcd3ff",
        borderRadius:"20px"
      }}>

        <img src="/lotus.png" width="60"/>

        <p style={{marginTop:"10px"}}>
        NutriWise – Supporting patients with compassionate
        oncology nutrition guidance
        </p>

      </footer>

    </main>
  )
}
