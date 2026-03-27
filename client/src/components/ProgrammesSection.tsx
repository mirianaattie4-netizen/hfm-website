/* ============================================================
   HFM Programmes Section — Boutique & Tarifs Coaching
   ============================================================ */
import { useEffect } from "react";

const PILATES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/hfm-yoga-8dxZXvcgkZibNsEyQNkYvf.webp";

const programmes = [
  {
    badge: "BEST-SELLER",
    badgeColor: "#C9A96E",
    icon: "💎",
    name: "Programme Corps Complet",
    desc: "4 semaines de transformation. 14 séances progressives combinant les 5 piliers HFM.",
    features: ["14 séances", "Guide nutrition", "Tous niveaux", "PDF premium"],
    price: "55 000",
    currency: "FCFA",
  },
  {
    badge: "POPULAIRE",
    badgeColor: "#C45B4A",
    icon: "🔥",
    name: "Challenge 21 Jours",
    desc: "3 semaines intenses pour créer une habitude fitness durable. Résultats visibles garantis.",
    features: ["21 jours", "HIIT focus", "Suivi quotidien", "Communauté"],
    price: "35 000",
    currency: "FCFA",
  },
  {
    badge: "NOUVEAU",
    badgeColor: "#6B9E78",
    icon: "🧘",
    name: "Pilates & Mobilité",
    desc: "Programme dédié souplesse et récupération. Idéal en complément ou en solo.",
    features: ["4 semaines", "Pilates au sol", "Mobilité", "Anti-stress"],
    price: "35 000",
    currency: "FCFA",
  },
];

const tarifsDomicile = [
  { group: "Séance 1-on-1", price: "25 000 F", per: "/séance", highlight: false },
  { group: "Séance Duo (2 pers)", price: "40 000 F", per: "/séance", highlight: true, badge: "POPULAIRE" },
  { group: "Séance Trio (3 pers)", price: "50 000 F", per: "/séance", highlight: false },
];

const packsMenuels = [
  { name: "PACK 5", seances: "5 séances privées", p12: "110 000 F", p34: "éco. 15 000 F", p56: "22 000 F/séance", eco: "-15 000 F" },
  { name: "PACK 10", seances: "10 séances privées", p12: "200 000 F", p34: "éco. 50 000 F", p56: "20 000 F/séance", eco: "-50 000 F" },
  { name: "SUIVI MENSUEL", seances: "8 séances/mois", p12: "180 000 F", p34: "éco. 20 000 F", p56: "22 500 F/séance", eco: "-20 000 F" },
];

export default function ProgrammesSection() {
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
      id="programmes"
      style={{ padding: "100px 0", background: "#0A0806", position: "relative" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>

        {/* ===== BOUTIQUE PROGRAMMES ===== */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="section-label reveal">Boutique</div>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 500,
              color: "#FAF6EE",
              marginBottom: "20px",
            }}
          >
            Nos <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Programmes</em>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{ fontSize: "15px", color: "#8A7E70", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}
          >
            Choisis le programme qui correspond à tes objectifs. Accès immédiat après paiement.
          </p>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "25px", marginBottom: "50px" }}
          className="prog-grid"
        >
          {programmes.map((prog, i) => (
            <div
              key={prog.name}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: "#1A1714",
                border: "1px solid rgba(201,169,110,0.08)",
                borderRadius: "18px",
                overflow: "hidden",
                transition: "all 0.4s",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-6px)";
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
              {/* Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  padding: "4px 12px",
                  background: prog.badgeColor,
                  borderRadius: "20px",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "9px",
                  fontWeight: 800,
                  letterSpacing: "1.5px",
                  color: "#0A0806",
                  zIndex: 1,
                }}
              >
                {prog.badge}
              </div>

              {/* Thumb */}
              <div
                style={{
                  height: "120px",
                  background: "linear-gradient(135deg, #1A1714, #2A2520)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "50px",
                }}
              >
                {prog.icon}
              </div>

              {/* Body */}
              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#FAF6EE",
                    marginBottom: "10px",
                  }}
                >
                  {prog.name}
                </h3>
                <p style={{ fontSize: "13px", color: "#8A7E70", lineHeight: 1.6, marginBottom: "18px" }}>
                  {prog.desc}
                </p>

                {/* Features */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                  {prog.features.map((f) => (
                    <span
                      key={f}
                      style={{
                        padding: "4px 10px",
                        background: "rgba(201,169,110,0.06)",
                        borderRadius: "6px",
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#9E8E7E",
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "18px",
                    borderTop: "1px solid rgba(201,169,110,0.08)",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "26px",
                        fontWeight: 700,
                        color: "#C9A96E",
                      }}
                    >
                      {prog.price}
                    </span>
                    <span style={{ fontSize: "12px", color: "#8A7E70", marginLeft: "4px" }}>
                      {prog.currency}
                    </span>
                  </div>
                  <a
                    href="https://wa.me/2250715151408"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: "10px 20px",
                      background: "#C9A96E",
                      borderRadius: "8px",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "10px",
                      fontWeight: 800,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "#0A0806",
                      textDecoration: "none",
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
                    Commander
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "100px",
          }}
        >
          {["🟢 Wave", "🟠 Orange Money", "💳 Carte bancaire", "🅿️ PayPal", "💵 Espèces"].map((m) => (
            <div
              key={m}
              style={{
                padding: "10px 20px",
                background: "rgba(201,169,110,0.05)",
                border: "1px solid rgba(201,169,110,0.1)",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#9E8E7E",
              }}
            >
              {m}
            </div>
          ))}
        </div>

        {/* ===== TARIFS COACHING À DOMICILE ===== */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "start",
          }}
          className="tarifs-grid"
        >
          {/* Left: Image + tarifs par séance */}
          <div>
            <div className="section-label reveal">Coaching à Domicile</div>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 500,
                color: "#FAF6EE",
                marginBottom: "10px",
              }}
            >
              Tarifs <em style={{ color: "#C9A96E", fontStyle: "italic" }}>par Séance</em>
            </h2>
            <p
              className="reveal reveal-delay-2"
              style={{ fontSize: "13px", color: "#8A7E70", marginBottom: "30px", lineHeight: 1.7 }}
            >
              Plus vous êtes nombreuses, moins c'est cher. Matériel fourni par Coach Mimi.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "30px" }}>
              {tarifsDomicile.map((t) => (
                <div
                  key={t.group}
                  className="reveal"
                  style={{
                    padding: "20px 24px",
                    background: t.highlight ? "rgba(201,169,110,0.08)" : "#1A1714",
                    border: `1px solid ${t.highlight ? "#C9A96E" : "rgba(201,169,110,0.08)"}`,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                >
                  {t.badge && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-10px",
                        left: "20px",
                        padding: "2px 10px",
                        background: "#C9A96E",
                        borderRadius: "10px",
                        fontSize: "8px",
                        fontWeight: 800,
                        letterSpacing: "1px",
                        color: "#0A0806",
                      }}
                    >
                      {t.badge}
                    </div>
                  )}
                  <div>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "22px",
                        fontWeight: 600,
                        color: t.highlight ? "#C9A96E" : "#FAF6EE",
                      }}
                    >
                      {t.group}
                    </div>
                    <div style={{ fontSize: "11px", color: "#8A7E70", marginTop: "2px" }}>personnes</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "26px",
                        fontWeight: 700,
                        color: "#C9A96E",
                      }}
                    >
                      {t.price}
                    </div>
                    <div style={{ fontSize: "11px", color: "#8A7E70" }}>{t.per}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* VIP Coaching */}
            <div
              className="reveal"
              style={{
                padding: "25px",
                background: "linear-gradient(135deg, rgba(201,169,110,0.08), rgba(201,169,110,0.04))",
                border: "1px solid rgba(201,169,110,0.2)",
                borderRadius: "16px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  color: "#C9A96E",
                  marginBottom: "15px",
                  textTransform: "uppercase",
                }}
              >
                Coaching Privé VIP
              </div>
              {[
                { label: "Séance individuelle (60 min)", price: "30 000 F" },
                { label: "Séance duo (60 min)", price: "25 000 F/pers" },
                { label: "Pack VIP 8 séances", price: "220 000 F" },
                { label: "Pack VIP 12 séances", price: "300 000 F" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    fontSize: "13px",
                  }}
                >
                  <span style={{ color: "#9E8E7E" }}>{item.label}</span>
                  <span style={{ color: "#C9A96E", fontWeight: 700 }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Packs mensuels */}
          <div>
            <div className="section-label reveal">Packs Mensuels</div>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 500,
                color: "#FAF6EE",
                marginBottom: "10px",
              }}
            >
              Économisez avec <em style={{ color: "#C9A96E", fontStyle: "italic" }}>l'Abonnement</em>
            </h2>
            <p
              className="reveal reveal-delay-2"
              style={{ fontSize: "13px", color: "#8A7E70", marginBottom: "30px", lineHeight: 1.7 }}
            >
              Engagement mensuel. Paiement début de mois — espèces, virement ou Mobile Money.
            </p>

            {/* Table */}
            <div className="reveal" style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: "12px",
                }}
              >
                <thead>
                  <tr>
                    {["Pack", "Séances", "1-2 pers", "3-4 pers", "5-6 pers", "Éco"].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: "12px 10px",
                          background: "rgba(201,169,110,0.08)",
                          color: "#C9A96E",
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "9px",
                          fontWeight: 700,
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          textAlign: "left",
                          borderBottom: "1px solid rgba(201,169,110,0.12)",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {packsMenuels.map((pack, i) => (
                    <tr
                      key={pack.name}
                      style={{
                        background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                      }}
                    >
                      <td style={{ padding: "14px 10px", color: "#FAF6EE", fontWeight: 700 }}>{pack.name}</td>
                      <td style={{ padding: "14px 10px", color: "#9E8E7E" }}>{pack.seances}</td>
                      <td style={{ padding: "14px 10px", color: "#C9A96E" }}>{pack.p12}</td>
                      <td style={{ padding: "14px 10px", color: "#C9A96E" }}>{pack.p34}</td>
                      <td style={{ padding: "14px 10px", color: "#C9A96E" }}>{pack.p56}</td>
                      <td style={{ padding: "14px 10px", color: "#6B9E78", fontWeight: 700 }}>{pack.eco}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pilates image */}
            <div
              className="reveal"
              style={{
                marginTop: "30px",
                borderRadius: "16px",
                overflow: "hidden",
                height: "250px",
              }}
            >
              <img
                src={PILATES_IMG}
                alt="Pilates & Mobilité HFM"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Conditions */}
            <div
              className="reveal"
              style={{
                marginTop: "20px",
                padding: "16px",
                background: "rgba(201,169,110,0.04)",
                border: "1px solid rgba(201,169,110,0.08)",
                borderRadius: "10px",
                fontSize: "11px",
                color: "#8A7E70",
                lineHeight: 1.7,
              }}
            >
              <strong style={{ color: "#C9A96E" }}>Conditions :</strong> Max 6 personnes par cours · Annulation 24h avant = reportée · Moins de 24h = séance perdue · Coach Mimi apporte tapis, bandes et accessoires
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .prog-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .tarifs-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .prog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
