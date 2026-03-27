/* ============================================================
   HFM Testimonials Section — Témoignages clients
   ============================================================ */
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Aminata K.",
    role: "Cadre bancaire, Cocody",
    text: "Coach Mimi a complètement transformé mon rapport au sport. En 3 mois, j'ai perdu 8 kg et je me sens plus énergique que jamais. Ses séances sont intenses mais tellement motivantes !",
    rating: 5,
    avatar: "A",
    color: "#C9A96E",
  },
  {
    name: "Nathalie D.",
    role: "Directrice RH, Plateau",
    text: "Le programme entreprise qu'elle a mis en place dans notre société a vraiment changé l'ambiance. Nos équipes sont plus soudées et moins stressées. Un investissement qui en vaut vraiment la peine.",
    rating: 5,
    avatar: "N",
    color: "#7C5CFC",
  },
  {
    name: "Fatoumata B.",
    role: "Maman de 3 enfants, Marcory",
    text: "Les séances de Pilates au sol avec Coach Mimi ont transformé ma posture et réduit mes douleurs de dos. En 6 semaines, je me sens plus forte et plus équilibrée. Je recommande à toutes les mamans !",
    rating: 5,
    avatar: "F",
    color: "#FF6B9D",
  },
  {
    name: "Isabelle M.",
    role: "Entrepreneur, Bingerville",
    text: "J'ai suivi le programme Corps Complet en ligne. La qualité des vidéos, les explications claires... C'est du coaching premium accessible depuis chez soi. Je recommande à 100% !",
    rating: 5,
    avatar: "I",
    color: "#6B9E78",
  },
  {
    name: "Sandrine A.",
    role: "Professeure, Yopougon",
    text: "Grâce au pack mensuel en groupe, on est 5 amies à faire du sport ensemble. C'est devenu notre moment de la semaine. Coach Mimi nous pousse à nous dépasser tout en restant bienveillante.",
    rating: 5,
    avatar: "S",
    color: "#45E3FF",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        padding: "100px 0",
        background: "#0A0806",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background quote mark */}
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'Playfair Display', serif",
          fontSize: "300px",
          color: "rgba(201,169,110,0.03)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        "
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="section-label reveal">Témoignages</div>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 500,
              color: "#FAF6EE",
            }}
          >
            Ce que disent nos <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Clientes</em>
          </h2>
        </div>

        {/* Main testimonial */}
        <div
          className="reveal"
          style={{
            background: "#1A1714",
            border: "1px solid rgba(201,169,110,0.12)",
            borderRadius: "24px",
            padding: "50px 50px",
            textAlign: "center",
            position: "relative",
            minHeight: "250px",
            transition: "all 0.5s",
          }}
        >
          {/* Stars */}
          <div style={{ marginBottom: "25px", display: "flex", justifyContent: "center", gap: "5px" }}>
            {Array.from({ length: testimonials[active].rating }).map((_, i) => (
              <span key={i} style={{ color: "#C9A96E", fontSize: "18px" }}>★</span>
            ))}
          </div>

          <blockquote
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(18px, 2.5vw, 22px)",
              fontStyle: "italic",
              color: "#D4C4A8",
              lineHeight: 1.7,
              margin: "0 0 30px",
            }}
          >
            "{testimonials[active].text}"
          </blockquote>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: testimonials[active].color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Playfair Display', serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#0A0806",
              }}
            >
              {testimonials[active].avatar}
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#FAF6EE" }}>
                {testimonials[active].name}
              </div>
              <div style={{ fontSize: "12px", color: "#8A7E70" }}>
                {testimonials[active].role}
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "30px",
          }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? "30px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === active ? "#C9A96E" : "rgba(201,169,110,0.25)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
