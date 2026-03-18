/* ============================================================
   HFM Tarifs Section — Vue d'ensemble complète des tarifs
   ============================================================ */
import { useEffect } from "react";

const tarifsData = [
  {
    category: "Séances à Domicile",
    icon: "🏠",
    items: [
      { label: "1-2 personnes", price: "25 000 F", per: "/pers/séance" },
      { label: "3-4 personnes", price: "22 000 F", per: "/pers/séance" },
      { label: "5-6 personnes", price: "20 000 F", per: "/pers/séance" },
    ],
  },
  {
    category: "Coaching Privé VIP",
    icon: "⭐",
    items: [
      { label: "Séance individuelle (60 min)", price: "30 000 F", per: "/séance" },
      { label: "Séance duo (60 min)", price: "25 000 F", per: "/pers/séance" },
      { label: "Pack 8 séances VIP", price: "220 000 F", per: "/mois" },
      { label: "Pack 12 séances VIP", price: "300 000 F", per: "/mois" },
    ],
  },
  {
    category: "Programmes Digitaux",
    icon: "📱",
    items: [
      { label: "Programme Corps Complet (4 sem.)", price: "55 000 F", per: "" },
      { label: "Challenge 21 Jours", price: "35 000 F", per: "" },
      { label: "Yoga & Mobilité (4 sem.)", price: "35 000 F", per: "" },
    ],
  },
  {
    category: "Kids World",
    icon: "🎮",
    items: [
      { label: "Abonnement mensuel enfant", price: "10 000 F", per: "/mois" },
      { label: "3 cours offerts", price: "GRATUIT", per: "à l'inscription" },
    ],
  },
];

const packsMensuels = [
  {
    name: "STARTER",
    seances: "4 séances",
    "1-2": "90 000",
    "3-4": "80 000",
    "5-6": "72 000",
    eco: "-10%",
    highlight: false,
  },
  {
    name: "CLASSIQUE",
    seances: "8 séances",
    "1-2": "170 000",
    "3-4": "150 000",
    "5-6": "136 000",
    eco: "-15%",
    highlight: true,
  },
  {
    name: "PREMIUM",
    seances: "12 séances",
    "1-2": "240 000",
    "3-4": "212 000",
    "5-6": "192 000",
    eco: "-20%",
    highlight: false,
  },
];

export default function TarifsSection() {
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
      id="tarifs"
      style={{ padding: "100px 0", background: "#0A0806", position: "relative" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="section-label reveal">Transparence</div>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 500,
              color: "#FAF6EE",
              marginBottom: "15px",
            }}
          >
            Tous nos <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Tarifs</em>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{ fontSize: "14px", color: "#8A7E70", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}
          >
            Tarifs transparents, sans surprise. Paiement en espèces, virement ou Mobile Money (Wave, Orange Money).
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "70px" }}
          className="tarifs-cards-grid"
        >
          {tarifsData.map((cat, i) => (
            <div
              key={cat.category}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: "#1A1714",
                border: "1px solid rgba(201,169,110,0.08)",
                borderRadius: "18px",
                padding: "28px 22px",
                transition: "all 0.4s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201,169,110,0.2)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 15px 40px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201,169,110,0.08)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "30px", marginBottom: "12px" }}>{cat.icon}</div>
              <h3
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#C9A96E",
                  marginBottom: "20px",
                }}
              >
                {cat.category}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {cat.items.map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "3px",
                      paddingBottom: "12px",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    <span style={{ fontSize: "12px", color: "#9E8E7E" }}>{item.label}</span>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                      <span
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "20px",
                          fontWeight: 700,
                          color: item.price === "GRATUIT" ? "#6B9E78" : "#C9A96E",
                        }}
                      >
                        {item.price}
                      </span>
                      {item.per && (
                        <span style={{ fontSize: "10px", color: "#6B5B4E" }}>{item.per}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Packs Mensuels Table */}
        <div>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div className="section-label reveal">Abonnements</div>
            <h3
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 500,
                color: "#FAF6EE",
              }}
            >
              Packs <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Mensuels</em>
            </h3>
          </div>

          <div className="reveal" style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["Pack", "Séances/mois", "1–2 personnes", "3–4 personnes", "5–6 personnes", "Économie"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "16px 20px",
                        background: "rgba(201,169,110,0.06)",
                        color: "#C9A96E",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "10px",
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
                {packsMensuels.map((pack, i) => (
                  <tr
                    key={pack.name}
                    style={{
                      background: pack.highlight ? "rgba(201,169,110,0.04)" : i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent",
                    }}
                  >
                    <td
                      style={{
                        padding: "18px 20px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "13px",
                        fontWeight: 800,
                        color: pack.highlight ? "#C9A96E" : "#FAF6EE",
                        letterSpacing: "1px",
                        borderLeft: pack.highlight ? "3px solid #C9A96E" : "3px solid transparent",
                      }}
                    >
                      {pack.name}
                    </td>
                    <td style={{ padding: "18px 20px", fontSize: "13px", color: "#9E8E7E" }}>{pack.seances}</td>
                    <td style={{ padding: "18px 20px", fontSize: "14px", color: "#C9A96E", fontWeight: 700 }}>{pack["1-2"]} F</td>
                    <td style={{ padding: "18px 20px", fontSize: "14px", color: "#C9A96E", fontWeight: 700 }}>{pack["3-4"]} F</td>
                    <td style={{ padding: "18px 20px", fontSize: "14px", color: "#C9A96E", fontWeight: 700 }}>{pack["5-6"]} F</td>
                    <td style={{ padding: "18px 20px", fontSize: "13px", color: "#6B9E78", fontWeight: 700 }}>{pack.eco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Conditions */}
          <div
            className="conditions-grid reveal"
            style={{
              marginTop: "30px",
              padding: "20px 24px",
              background: "rgba(201,169,110,0.04)",
              border: "1px solid rgba(201,169,110,0.1)",
              borderRadius: "12px",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {[
              { icon: "📅", title: "Paiement", desc: "Début de mois · Espèces, virement ou Mobile Money" },
              { icon: "❌", title: "Annulation", desc: "24h avant = séance reportée · Moins de 24h = séance perdue" },
              { icon: "🎒", title: "Matériel", desc: "Tapis, bandes, accessoires fournis par Coach Mimi" },
            ].map((c) => (
              <div key={c.title} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "20px" }}>{c.icon}</span>
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#FAF6EE", marginBottom: "4px" }}>{c.title}</div>
                  <div style={{ fontSize: "12px", color: "#8A7E70", lineHeight: 1.5 }}>{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .tarifs-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .conditions-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .tarifs-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
