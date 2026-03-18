/* ============================================================
   HFM Méthode Section — Les 5 Piliers + Présentation Coach Mimi
   ============================================================ */
import { useEffect } from "react";

const COACHING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/hfm-coaching-group-4CZXAPGTHNYc3LbCFym23B.webp";

const pillars = [
  {
    icon: "🔥",
    name: "HIIT",
    desc: "Cardio haute intensité pour brûler, tonifier et performer. Résultats visibles dès les premières séances.",
    color: "#C45B4A",
  },
  {
    icon: "🤸",
    name: "Mobilité",
    desc: "Travail de la souplesse fonctionnelle et de l'amplitude articulaire. Prévention des blessures.",
    color: "#C9A96E",
  },
  {
    icon: "💪",
    name: "Gainage / Core",
    desc: "Renforcement profond du centre du corps — la base de tout. Posture et stabilité.",
    color: "#D4A017",
  },
  {
    icon: "💓",
    name: "Cardio",
    desc: "Endurance et condition physique générale adaptées à chaque niveau. Santé cardiovasculaire optimale.",
    color: "#5B8DEF",
  },
  {
    icon: "🧘",
    name: "Pilates",
    desc: "Contrôle, respiration, posture et conscience corporelle. Méthode certifiée Upskillist.",
    color: "#6B9E78",
  },
];

export default function MethodeSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="methode"
      style={{
        padding: "100px 0",
        background: "#12100C",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "-200px",
          width: "600px",
          height: "600px",
          border: "1px solid rgba(201,169,110,0.04)",
          borderRadius: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="section-label reveal">La Méthode</div>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 500,
              lineHeight: 1.15,
              color: "#FAF6EE",
              marginBottom: "20px",
            }}
          >
            Les 5 Piliers <em style={{ color: "#C9A96E", fontStyle: "italic" }}>HFM</em>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: "15px",
              color: "#8A7E70",
              lineHeight: 1.7,
              maxWidth: "550px",
              margin: "0 auto",
            }}
          >
            Une approche holistique unique : 100% poids de corps et haltères libres — zéro machine. Chaque pilier renforce les autres pour une transformation complète.
          </p>
        </div>

        {/* Pillars Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "15px",
            marginBottom: "80px",
          }}
          className="pillars-grid"
        >
          {pillars.map((pillar, i) => (
            <div
              key={pillar.name}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: "#1A1714",
                border: "1px solid rgba(201,169,110,0.08)",
                borderRadius: "16px",
                padding: "35px 20px",
                textAlign: "center",
                transition: "all 0.5s cubic-bezier(0.25,0.8,0.25,1)",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-8px)";
                el.style.borderColor = "rgba(201,169,110,0.2)";
                el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(201,169,110,0.08)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Top accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: pillar.color,
                }}
              />
              <span style={{ fontSize: "36px", marginBottom: "18px", display: "block" }}>
                {pillar.icon}
              </span>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: pillar.color,
                  marginBottom: "12px",
                }}
              >
                {pillar.name}
              </div>
              <p
                style={{
                  fontSize: "12px",
                  color: "#8A7E70",
                  lineHeight: 1.6,
                }}
              >
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* About Coach Mimi */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Image */}
          <div className="reveal" style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                aspectRatio: "4/5",
              }}
            >
              <img
                src={COACHING_IMG}
                alt="Coach Mimi — Séance de groupe HFM"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Overlay gradient */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40%",
                  background: "linear-gradient(to top, rgba(10,8,6,0.8), transparent)",
                }}
              />
            </div>
            {/* Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                background: "#C9A96E",
                color: "#0A0806",
                padding: "8px 16px",
                borderRadius: "6px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "10px",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Coach Certifiée Internationale
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="section-label reveal">À Propos</div>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 500,
                color: "#FAF6EE",
                marginBottom: "20px",
                lineHeight: 1.15,
              }}
            >
              Coach <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Mimi</em>
            </h2>

            <div
              className="reveal reveal-delay-2"
              style={{ width: "50px", height: "1px", background: "#C9A96E", margin: "0 0 25px" }}
            />

            <blockquote
              className="reveal reveal-delay-2"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "18px",
                fontStyle: "italic",
                color: "#D4BC8B",
                borderLeft: "3px solid #C9A96E",
                paddingLeft: "20px",
                marginBottom: "25px",
                lineHeight: 1.6,
              }}
            >
              "Le fitness ne devrait jamais être une punition. C'est une célébration de ce que ton corps peut faire."
            </blockquote>

            <p
              className="reveal reveal-delay-3"
              style={{
                fontSize: "14px",
                color: "#8A7E70",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              Miriana Attie — surnommée <strong style={{ color: "#FAF6EE" }}>Coach Mimi</strong> — est une coach fitness certifiée internationale, née en 1997 à Abidjan. Fondatrice de HFM, elle allie rigueur scientifique, approche fonctionnelle et accompagnement haut de gamme pour transformer durablement le corps et le mindset de ses clientes.
            </p>

            <p
              className="reveal reveal-delay-3"
              style={{
                fontSize: "14px",
                color: "#8A7E70",
                lineHeight: 1.8,
                marginBottom: "30px",
              }}
            >
              Sa méthode est entièrement sans machines — uniquement poids du corps et poids libres. Elle intervient à domicile, en hôtel, en plein air et dans les entreprises partenaires à Abidjan.
            </p>

            {/* Certifications */}
            <div className="reveal reveal-delay-4" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { icon: "⭐", label: "Master Functional Trainer", sub: "PT Academy · Certification internationale avancée" },
                { icon: "🏋️", label: "Les Mills Coach — Physiologie de l'Entraînement", sub: "Planet Fitness Afrique · Reconnue mondialement" },
                { icon: "🧘", label: "Pilates Modules 1 & 2", sub: "Upskillist · Certifiée mars 2026" },
                { icon: "📚", label: "Formation Fitness", sub: "Inspire Academy · Certification en ligne" },
              ].map((cert) => (
                <div
                  key={cert.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                    background: "rgba(201,169,110,0.04)",
                    border: "1px solid rgba(201,169,110,0.08)",
                    borderRadius: "10px",
                  }}
                >
                  <span style={{ fontSize: "20px" }}>{cert.icon}</span>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#FAF6EE" }}>{cert.label}</div>
                    <div style={{ fontSize: "11px", color: "#8A7E70", marginTop: "2px" }}>{cert.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .pillars-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .pillars-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
