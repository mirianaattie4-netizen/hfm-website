/* ============================================================
   HFM Bootcamp Weekend — Partenariat Les Jardins d'Eden, Grand-Bassam
   Design: Dark Luxury Performance
   ============================================================ */
import { useEffect } from "react";

const BOOTCAMP_IMG = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80";

const schedule = [
  { day: "SAMEDI", events: ["17h00 — Check-in aux Jardins d'Eden", "18h00 — Pilates Sunset face à la lagune", "Soirée — Dîner libre"] },
  { day: "DIMANCHE", events: ["07h00 — Active Muscle", "09h00 — HIIT intense", "10h30 — Mobility Recovery", "12h00 — Brunch Les Jardins d'Eden", "14h00 — Départ"] },
];

const packs = [
  {
    name: "Pass Dimanche",
    subtitle: "Journée complète",
    includes: ["Pilates au sol + HIIT + Mobility", "3 cours collectifs"],
    price: "30 000",
    highlight: false,
  },
  {
    name: "Pass Dimanche + Brunch",
    subtitle: "Expérience complète",
    includes: ["3 cours collectifs", "Brunch inclus"],
    price: "40 000",
    highlight: true,
  },
  {
    name: "Retreat Solo",
    subtitle: "Weekend immersif",
    includes: ["Chambre individuelle", "3 cours + Brunch"],
    price: "95 000",
    highlight: false,
  },
  {
    name: "Retreat Duo",
    subtitle: "Weekend en couple / amies",
    includes: ["Chambre 2 personnes", "3 cours + Brunch"],
    price: "150 000",
    highlight: false,
  },
];

export default function BootcampSection() {
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
      id="bootcamp"
      style={{
        padding: "100px 0",
        background: "#0D0B08",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image with overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${BOOTCAMP_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 70% 50%, rgba(201,169,110,0.04), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <div className="section-label reveal" style={{ color: "#C9A96E" }}>Événement Exclusif</div>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 500,
              color: "#FAF6EE",
              marginBottom: "15px",
              lineHeight: 1.1,
            }}
          >
            Bootcamp <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Weekend</em>
          </h2>
          <div
            className="reveal reveal-delay-2"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 24px",
              background: "rgba(201,169,110,0.08)",
              border: "1px solid rgba(201,169,110,0.2)",
              borderRadius: "50px",
              marginBottom: "20px",
            }}
          >
            <span style={{ fontSize: "14px" }}>🌊</span>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "2px", color: "#C9A96E", textTransform: "uppercase" }}>
              Les Jardins d'Eden — Grand-Bassam
            </span>
          </div>
          <p
            className="reveal reveal-delay-3"
            style={{ fontSize: "15px", color: "#8A7E70", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto" }}
          >
            Un weekend fitness immersif dans un cadre luxueux face à la lagune à Grand-Bassam. Yoga au lever du soleil, HIIT intense, Mobility recovery et Brunch healthy. <strong style={{ color: "#C9A96E" }}>1 weekend par mois</strong>, de mars à décembre.
          </p>
        </div>

        {/* Main content grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", marginBottom: "70px" }}
          className="bootcamp-main-grid"
        >
          {/* Programme */}
          <div className="reveal">
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "24px",
                color: "#FAF6EE",
                marginBottom: "30px",
              }}
            >
              Programme <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Type</em>
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {schedule.map((day) => (
                <div
                  key={day.day}
                  style={{
                    background: "#1A1714",
                    border: "1px solid rgba(201,169,110,0.1)",
                    borderRadius: "16px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      padding: "12px 20px",
                      background: "rgba(201,169,110,0.08)",
                      borderBottom: "1px solid rgba(201,169,110,0.08)",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "11px",
                      fontWeight: 800,
                      letterSpacing: "2px",
                      color: "#C9A96E",
                    }}
                  >
                    {day.day}
                  </div>
                  <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {day.events.map((event) => (
                      <div key={event} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9A96E", flexShrink: 0 }} />
                        <span style={{ fontSize: "13px", color: "#D4C4A8" }}>{event}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Location highlight */}
            <div
              style={{
                marginTop: "25px",
                padding: "20px",
                background: "linear-gradient(135deg, rgba(201,169,110,0.08), rgba(201,169,110,0.03))",
                border: "1px solid rgba(201,169,110,0.15)",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <span style={{ fontSize: "32px" }}>🌴</span>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#FAF6EE", marginBottom: "4px" }}>
                  Les Jardins d'Eden
                </div>
                <div style={{ fontSize: "12px", color: "#8A7E70" }}>
                  Grand-Bassam, Côte d'Ivoire · Face à la lagune · Cadre luxueux et exclusif
                </div>
              </div>
            </div>
          </div>

          {/* Packs */}
          <div>
            <h3
              className="reveal"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "24px",
                color: "#FAF6EE",
                marginBottom: "30px",
              }}
            >
              Formules & <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Tarifs</em>
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {packs.map((pack, i) => (
                <div
                  key={pack.name}
                  className={`reveal reveal-delay-${i + 1}`}
                  style={{
                    background: pack.highlight ? "rgba(201,169,110,0.08)" : "#1A1714",
                    border: pack.highlight ? "1px solid rgba(201,169,110,0.3)" : "1px solid rgba(201,169,110,0.08)",
                    borderRadius: "14px",
                    padding: "18px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "15px",
                    transition: "all 0.3s",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(201,169,110,0.3)";
                    el.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = pack.highlight ? "rgba(201,169,110,0.3)" : "rgba(201,169,110,0.08)";
                    el.style.transform = "translateX(0)";
                  }}
                >
                  {pack.highlight && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-10px",
                        right: "15px",
                        background: "#C9A96E",
                        color: "#0A0806",
                        padding: "3px 10px",
                        borderRadius: "20px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "9px",
                        fontWeight: 800,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                      }}
                    >
                      Populaire
                    </div>
                  )}
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#FAF6EE", marginBottom: "3px" }}>
                      {pack.name}
                    </div>
                    <div style={{ fontSize: "11px", color: "#8A7E70", marginBottom: "6px" }}>{pack.subtitle}</div>
                    <div style={{ display: "flex", gap: "12px" }}>
                      {pack.includes.map((item) => (
                        <span key={item} style={{ fontSize: "11px", color: "#C9A96E" }}>✓ {item}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "22px",
                        fontWeight: 700,
                        color: "#C9A96E",
                      }}
                    >
                      {pack.price}
                    </div>
                    <div style={{ fontSize: "10px", color: "#6B5B4E" }}>FCFA</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="reveal"
          style={{
            textAlign: "center",
            padding: "50px 40px",
            background: "linear-gradient(135deg, rgba(201,169,110,0.06), rgba(201,169,110,0.02))",
            border: "1px solid rgba(201,169,110,0.12)",
            borderRadius: "24px",
          }}
        >
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(22px, 3vw, 34px)",
              color: "#FAF6EE",
              marginBottom: "12px",
            }}
          >
            Réservez votre place au prochain Bootcamp 🌊
          </h3>
          <p style={{ fontSize: "14px", color: "#8A7E70", marginBottom: "30px" }}>
            Places limitées — 1 weekend par mois · Mars à Décembre 2026
          </p>
          <a
            href="https://wa.me/2250715151408?text=Bonjour%20Coach%20Mimi%20!%20Je%20souhaite%20r%C3%A9server%20une%20place%20au%20Bootcamp%20Weekend%20Bassam."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 44px",
              background: "#C9A96E",
              color: "#0A0806",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "8px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#D4BC8B";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 40px rgba(201,169,110,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#C9A96E";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            📱 Réserver via WhatsApp
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .bootcamp-main-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
