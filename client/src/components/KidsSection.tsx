/* ============================================================
   HFM Kids World Section — Fitness gamifié pour enfants
   ============================================================ */
import { useEffect } from "react";

const KIDS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/hfm-kids-KuqEyQqSKw6hjspjyvDyeL.webp";

const features = [
  {
    icon: "📹",
    name: "Cours Vidéo",
    desc: "Séances filmées avec Coach Mimi adaptées par âge. Mini Warriors (4-7 ans) & Young Champions (8-12 ans).",
    color: "#7C5CFC",
  },
  {
    icon: "🧬",
    name: "Avatar Évolutif",
    desc: "Crée ton héros, gagne des XP, débloque tenues et pouvoirs. 6 niveaux de progression.",
    color: "#FF6B9D",
  },
  {
    icon: "🎮",
    name: "Jeux Fitness",
    desc: "Jeux interactifs avec détection de mouvements. L'enfant bouge, le jeu réagit !",
    color: "#45E3FF",
  },
  {
    icon: "🏆",
    name: "Défis & Classement",
    desc: "Défis hebdomadaires, badges à collectionner et classement entre amis.",
    color: "#FFD700",
  },
];

export default function KidsSection() {
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
      id="kids"
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #0A0806 0%, #0F0A1F 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radials */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 20% 30%, rgba(124,92,252,0.06), transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,107,157,0.04), transparent 40%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div
            className="section-label reveal"
            style={{ color: "#7C5CFC" }}
          >
            Pour Les Enfants
          </div>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 500,
              color: "#E8E0F0",
              marginBottom: "20px",
            }}
          >
            HFM <em style={{ color: "#45E3FF", fontStyle: "italic" }}>Kids World</em>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: "15px",
              color: "#7B6F95",
              lineHeight: 1.7,
              maxWidth: "550px",
              margin: "0 auto",
            }}
          >
            La 1ère plateforme fitness gamifié pour enfants en Afrique. Le fitness devient un jeu vidéo !
          </p>
        </div>

        {/* Content Grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", marginBottom: "60px" }}
          className="kids-content-grid"
        >
          {/* Image */}
          <div className="reveal" style={{ borderRadius: "20px", overflow: "hidden", height: "400px" }}>
            <img
              src={KIDS_IMG}
              alt="HFM Kids World — Fitness pour enfants Abidjan"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Features */}
          <div>
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
            >
              {features.map((feat, i) => (
                <div
                  key={feat.name}
                  className={`reveal reveal-delay-${i + 1}`}
                  style={{
                    background: "rgba(34,26,58,0.6)",
                    border: "1px solid rgba(124,92,252,0.1)",
                    borderRadius: "18px",
                    padding: "25px 18px",
                    textAlign: "center",
                    transition: "all 0.4s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(-5px)";
                    el.style.borderColor = "rgba(124,92,252,0.3)";
                    el.style.boxShadow = "0 15px 50px rgba(124,92,252,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateY(0)";
                    el.style.borderColor = "rgba(124,92,252,0.1)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontSize: "36px", marginBottom: "12px" }}>{feat.icon}</div>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: feat.color,
                      marginBottom: "8px",
                    }}
                  >
                    {feat.name}
                  </div>
                  <p style={{ fontSize: "11px", color: "#7B6F95", lineHeight: 1.5 }}>{feat.desc}</p>
                </div>
              ))}
            </div>

            {/* Age groups */}
            <div
              className="reveal"
              style={{
                marginTop: "20px",
                display: "flex",
                gap: "12px",
              }}
            >
              <div
                style={{
                  flex: 1,
                  padding: "16px",
                  background: "rgba(124,92,252,0.1)",
                  border: "1px solid rgba(124,92,252,0.2)",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "6px" }}>🦁</div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#7C5CFC" }}>Mini Warriors</div>
                <div style={{ fontSize: "11px", color: "#7B6F95" }}>4 – 7 ans</div>
              </div>
              <div
                style={{
                  flex: 1,
                  padding: "16px",
                  background: "rgba(255,107,157,0.1)",
                  border: "1px solid rgba(255,107,157,0.2)",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "6px" }}>🏆</div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#FF6B9D" }}>Young Champions</div>
                <div style={{ fontSize: "11px", color: "#7B6F95" }}>8 – 12 ans</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Block */}
        <div
          className="reveal"
          style={{
            textAlign: "center",
            padding: "50px 40px",
            background: "linear-gradient(135deg, rgba(124,92,252,0.1), rgba(255,107,157,0.06))",
            border: "1px solid rgba(124,92,252,0.15)",
            borderRadius: "24px",
          }}
        >
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(22px, 3vw, 32px)",
              color: "#E8E0F0",
              marginBottom: "12px",
            }}
          >
            Prêt à devenir un héros ? 🌟
          </h3>
          <p style={{ fontSize: "14px", color: "#7B6F95", marginBottom: "30px" }}>
            Offre de lancement : accès gratuit aux 3 premiers cours. Abonnement dès{" "}
            <strong style={{ color: "#45E3FF" }}>10 000 FCFA/mois</strong>.
          </p>
          <a
            href="https://wa.me/2250715151408"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 40px",
              background: "linear-gradient(135deg, #7C5CFC, #FF6B9D)",
              color: "white",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "8px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 40px rgba(124,92,252,0.35)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Inscrire mon Enfant →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .kids-content-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
