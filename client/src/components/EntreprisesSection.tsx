/* ============================================================
   HFM Entreprises Section — Programme Bien-Être pour Collaborateurs
   ============================================================ */
import { useEffect } from "react";

const ENTERPRISE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/hfm-enterprise-9zM2sPFFfDNpLUCxtYCPEH.webp";

const stats = [
  { num: "+25%", label: "Productivité", icon: "📈", desc: "Des employés actifs sont plus concentrés et performants au quotidien." },
  { num: "-35%", label: "Absentéisme", icon: "🍃", desc: "L'activité physique régulière réduit le stress et les arrêts maladie." },
  { num: "+40%", label: "Fidélisation", icon: "⭐", desc: "Les avantages bien-être renforcent l'attractivité et la loyauté des talents." },
  { num: "×3", label: "Cohésion d'équipe", icon: "✅", desc: "Les séances en groupe créent du lien et améliorent la collaboration." },
];

const disciplines = [
  { icon: "🔥", name: "HIIT", desc: "Haute intensité fonctionnelle" },
  { icon: "🤸", name: "Mobilité", desc: "Récupération active" },
  { icon: "💪", name: "Gainage", desc: "Renforcement du core" },
  { icon: "💓", name: "Cardio", desc: "Cardio fonctionnel" },
  { icon: "🧘", name: "Pilates", desc: "Posture & équilibre" },
  { icon: "🌿", name: "Mobilité+", desc: "Matelas au sol" },
];

const formules = [
  {
    name: "ESSENTIEL",
    subtitle: "Démarrer",
    price: "100 000",
    seances: "4 séances/mois",
    features: ["2 séances groupe (6 pers)", "2 séances privées VIP", "Bilan initial inclus", "Planning mensuel"],
    highlight: false,
  },
  {
    name: "PREMIUM",
    subtitle: "Le plus populaire",
    price: "180 000",
    seances: "8 séances/mois",
    features: ["4 séances groupe (6 pers)", "4 séances privées VIP", "Bilan & suivi personnalisé", "Flexibilité horaire", "Rapport mensuel"],
    highlight: true,
  },
  {
    name: "EXCELLENCE",
    subtitle: "L'expérience totale",
    price: "240 000",
    seances: "12+ séances/mois",
    features: ["Séances groupe illimitées", "Coaching VIP prioritaire", "Programme sur-mesure", "Disponibilité exclusive", "Reporting trimestriel"],
    highlight: false,
  },
];

export default function EntreprisesSection() {
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
      id="entreprises"
      style={{
        padding: "100px 0",
        background: "#12100C",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
            marginBottom: "80px",
          }}
          className="ent-header-grid"
        >
          <div>
            <div className="section-label reveal">Programme Entreprise</div>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 500,
                color: "#FAF6EE",
                marginBottom: "20px",
                lineHeight: 1.15,
              }}
            >
              Banque <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Bien-Être</em>
              <br />
              pour vos Équipes
            </h2>
            <div style={{ width: "50px", height: "1px", background: "#C9A96E", margin: "0 0 25px" }} />
            <p
              className="reveal reveal-delay-2"
              style={{ fontSize: "15px", color: "#8A7E70", lineHeight: 1.8, marginBottom: "20px" }}
            >
              Offrez à vos collaborateurs le programme bien-être qu'ils méritent. HFM intervient dans vos locaux ou dans nos espaces partenaires.
            </p>
            <p
              className="reveal reveal-delay-3"
              style={{ fontSize: "14px", color: "#8A7E70", lineHeight: 1.8, marginBottom: "30px" }}
            >
              Matériel fourni par HFM — zéro contrainte logistique pour vous. Séances de 6 participants maximum pour un suivi personnalisé optimal.
            </p>
            <a
              href="mailto:mirianaattie4@gmail.com"
              className="reveal reveal-delay-4"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 32px",
                background: "#C9A96E",
                color: "#0A0806",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "4px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#D4BC8B";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#C9A96E";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Demander un Devis →
            </a>
          </div>

          <div className="reveal" style={{ borderRadius: "20px", overflow: "hidden", height: "450px" }}>
            <img
              src={ENTERPRISE_IMG}
              alt="Programme bien-être entreprise HFM Abidjan"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Stats */}
        <div style={{ marginBottom: "80px" }}>
          <h3
            className="reveal"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 500,
              color: "#FAF6EE",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Pourquoi Investir dans le <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Bien-Être</em> de vos Équipes ?
          </h3>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}
            className="stats-grid"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  background: "#1A1714",
                  border: "1px solid rgba(201,169,110,0.1)",
                  borderRadius: "16px",
                  padding: "30px 20px",
                  textAlign: "center",
                  transition: "all 0.4s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-5px)";
                  el.style.borderColor = "rgba(201,169,110,0.25)";
                  el.style.boxShadow = "0 15px 40px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = "rgba(201,169,110,0.1)";
                  el.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: "36px", marginBottom: "10px" }}>{stat.icon}</div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "42px",
                    fontWeight: 700,
                    color: "#C9A96E",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#FAF6EE",
                    marginBottom: "10px",
                    letterSpacing: "1px",
                  }}
                >
                  {stat.label}
                </div>
                <p style={{ fontSize: "12px", color: "#8A7E70", lineHeight: 1.5 }}>{stat.desc}</p>
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "11px",
              color: "#6B5B4E",
              marginTop: "20px",
              fontStyle: "italic",
            }}
          >
            Sources : OMS · Harvard Business Review · Gallup Workplace Report
          </p>
        </div>

        {/* Disciplines */}
        <div style={{ marginBottom: "80px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div className="section-label reveal">Séances Groupe</div>
            <h3
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(24px, 3.5vw, 38px)",
                fontWeight: 500,
                color: "#FAF6EE",
              }}
            >
              Disciplines <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Proposées</em>
            </h3>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "12px" }}
            className="disc-grid"
          >
            {disciplines.map((d, i) => (
              <div
                key={d.name}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  background: "#1A1714",
                  border: "1px solid rgba(201,169,110,0.08)",
                  borderRadius: "12px",
                  padding: "20px 12px",
                  textAlign: "center",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(201,169,110,0.25)";
                  el.style.background = "rgba(201,169,110,0.05)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(201,169,110,0.08)";
                  el.style.background = "#1A1714";
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>{d.icon}</div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "#C9A96E", marginBottom: "4px" }}>{d.name}</div>
                <div style={{ fontSize: "10px", color: "#8A7E70" }}>{d.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Formules Entreprise */}
        <div>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <div className="section-label reveal">Tarification</div>
            <h3
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 500,
                color: "#FAF6EE",
                marginBottom: "15px",
              }}
            >
              Formules <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Entreprise</em>
            </h3>
            <p style={{ fontSize: "14px", color: "#8A7E70", fontStyle: "italic" }}>
              Formules adaptées à la taille de votre organisation · Tarifs sur devis personnalisé
            </p>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}
            className="formules-grid"
          >
            {formules.map((f, i) => (
              <div
                key={f.name}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  background: f.highlight ? "linear-gradient(135deg, rgba(201,169,110,0.12), rgba(201,169,110,0.06))" : "#1A1714",
                  border: `1px solid ${f.highlight ? "#C9A96E" : "rgba(201,169,110,0.1)"}`,
                  borderRadius: "18px",
                  padding: "35px 28px",
                  position: "relative",
                  transition: "all 0.4s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {f.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-12px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      padding: "4px 16px",
                      background: "#C9A96E",
                      borderRadius: "20px",
                      fontSize: "9px",
                      fontWeight: 800,
                      letterSpacing: "2px",
                      color: "#0A0806",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    LE PLUS POPULAIRE
                  </div>
                )}
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    color: "#C9A96E",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  {f.subtitle}
                </div>
                <h4
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "28px",
                    fontWeight: 600,
                    color: "#FAF6EE",
                    marginBottom: "5px",
                  }}
                >
                  {f.name}
                </h4>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "36px",
                    fontWeight: 700,
                    color: "#C9A96E",
                    marginBottom: "5px",
                  }}
                >
                  {f.price}
                  <span style={{ fontSize: "14px", fontWeight: 400, color: "#8A7E70" }}> FCFA/mois</span>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#C9A96E",
                    fontWeight: 600,
                    marginBottom: "25px",
                    paddingBottom: "20px",
                    borderBottom: "1px solid rgba(201,169,110,0.12)",
                  }}
                >
                  {f.seances}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 25px" }}>
                  {f.features.map((feat) => (
                    <li
                      key={feat}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "8px 0",
                        fontSize: "13px",
                        color: "#9E8E7E",
                        borderBottom: "1px solid rgba(255,255,255,0.03)",
                      }}
                    >
                      <span style={{ color: "#C9A96E", fontSize: "16px" }}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:mirianaattie4@gmail.com"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "14px",
                    background: f.highlight ? "#C9A96E" : "transparent",
                    border: `1px solid ${f.highlight ? "#C9A96E" : "rgba(201,169,110,0.3)"}`,
                    borderRadius: "8px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: f.highlight ? "#0A0806" : "#C9A96E",
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "#C9A96E";
                    el.style.color = "#0A0806";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = f.highlight ? "#C9A96E" : "transparent";
                    el.style.color = f.highlight ? "#0A0806" : "#C9A96E";
                  }}
                >
                  Choisir ce Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .ent-header-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .disc-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .formules-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: 1fr !important; }
          .disc-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
