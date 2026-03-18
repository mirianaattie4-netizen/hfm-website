/* ============================================================
   HFM Tarifs Section — Grille Tarifaire V2 complète
   Design: Dark Luxury Performance
   ============================================================ */
import { useEffect, useState } from "react";

type TabKey = "collectifs" | "prive" | "entreprise";

const tabs: { key: TabKey; label: string; icon: string }[] = [
  { key: "collectifs", label: "Cours Collectifs", icon: "👥" },
  { key: "prive", label: "Coaching Privé", icon: "⭐" },
  { key: "entreprise", label: "Entreprise", icon: "🏢" },
];

export default function TarifsSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("collectifs");

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
            Grille <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Tarifaire</em>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{ fontSize: "14px", color: "#8A7E70", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}
          >
            Tarifs transparents, sans surprise. Paiement en Mobile Money (Orange Money, MTN MoMo, Wave), espèces ou virement bancaire.
          </p>
        </div>

        {/* Tabs */}
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "50px",
            flexWrap: "wrap",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                padding: "12px 28px",
                background: activeTab === tab.key ? "#C9A96E" : "rgba(201,169,110,0.06)",
                border: activeTab === tab.key ? "1px solid #C9A96E" : "1px solid rgba(201,169,110,0.15)",
                borderRadius: "8px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: activeTab === tab.key ? "#0A0806" : "#C9A96E",
                cursor: "pointer",
                transition: "all 0.3s",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "collectifs" && (
          <div>
            <p style={{ textAlign: "center", fontSize: "13px", color: "#8A7E70", marginBottom: "40px" }}>
              HIIT • Yoga • Mobility • Cardio Fonctionnel — Maximum 10 personnes par cours
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "50px" }} className="tarifs-two-col">

              {/* Séances & Packs */}
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#FAF6EE", marginBottom: "20px" }}>
                  Séances & <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Packs</em>
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { label: "Séance unique", seances: "1", total: "10 000", per: "10 000 / séance" },
                    { label: "Pack Semaine", seances: "2", total: "40 000", per: "20 000 / séance" },
                    { label: "Pack 10 séances", seances: "10", total: "65 000", per: "6 500 / séance", highlight: true },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "16px 20px",
                        background: item.highlight ? "rgba(201,169,110,0.06)" : "#1A1714",
                        border: item.highlight ? "1px solid rgba(201,169,110,0.2)" : "1px solid rgba(201,169,110,0.06)",
                        borderRadius: "12px",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: "14px", color: "#FAF6EE", fontWeight: 600 }}>{item.label}</div>
                        <div style={{ fontSize: "11px", color: "#8A7E70", marginTop: "2px" }}>{item.seances} séance{parseInt(item.seances) > 1 ? "s" : ""} · {item.per}</div>
                      </div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#C9A96E" }}>
                        {item.total} <span style={{ fontSize: "11px", color: "#6B5B4E" }}>F</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Abonnements */}
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#FAF6EE", marginBottom: "20px" }}>
                  <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Abonnements</em>
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { label: "Mensuel", seances: "8/mois", total: "65 000", per: "8 125 F/séance" },
                    { label: "Trimestriel (3 mois)", seances: "24", total: "165 000", per: "6 875 F/séance — éco. 75 000 F", highlight: true },
                    { label: "Semestriel (6 mois)", seances: "48", total: "350 000", per: "58 300 F/mois" },
                    { label: "Annuel (12 mois)", seances: "96", total: "624 000", per: "6 500 F/séance — éco. 336 000 F" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "16px 20px",
                        background: item.highlight ? "rgba(201,169,110,0.06)" : "#1A1714",
                        border: item.highlight ? "1px solid rgba(201,169,110,0.2)" : "1px solid rgba(201,169,110,0.06)",
                        borderRadius: "12px",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: "14px", color: "#FAF6EE", fontWeight: 600 }}>{item.label}</div>
                        <div style={{ fontSize: "11px", color: "#8A7E70", marginTop: "2px" }}>{item.seances} · {item.per}</div>
                      </div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#C9A96E", textAlign: "right" }}>
                        {item.total} <span style={{ fontSize: "11px", color: "#6B5B4E" }}>F</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Avantages abonnés */}
            <div
              style={{
                padding: "25px 30px",
                background: "rgba(201,169,110,0.04)",
                border: "1px solid rgba(201,169,110,0.1)",
                borderRadius: "14px",
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "15px",
              }}
              className="avantages-grid"
            >
              {[
                { icon: "📅", text: "2 cours/semaine (8/mois)" },
                { icon: "⚡", text: "Réservation prioritaire" },
                { icon: "🎁", text: "1 invité gratuit/mois" },
                { icon: "💎", text: "-15% coaching privé" },
              ].map((a) => (
                <div key={a.text} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "18px" }}>{a.icon}</span>
                  <span style={{ fontSize: "12px", color: "#C9A96E" }}>{a.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "prive" && (
          <div>
            <p style={{ textAlign: "center", fontSize: "13px", color: "#8A7E70", marginBottom: "40px" }}>
              Sessions personnalisées avec Coach Mimi — Programme sur mesure · Bilan initial · Suivi nutrition · Accès WhatsApp
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }} className="tarifs-two-col">

              {/* Séances individuelles */}
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#FAF6EE", marginBottom: "20px" }}>
                  Séances <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Individuelles</em>
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { label: "Séance Privée 1-on-1", detail: "1 heure · Programme personnalisé", price: "25 000" },
                    { label: "Séance Duo", detail: "1 heure · 2 personnes", price: "40 000" },
                    { label: "Séance Trio", detail: "1 heure · 3 personnes", price: "50 000" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "18px 22px",
                        background: "#1A1714",
                        border: "1px solid rgba(201,169,110,0.08)",
                        borderRadius: "12px",
                        transition: "all 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.2)";
                        (e.currentTarget as HTMLElement).style.transform = "translateX(5px)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.08)";
                        (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                      }}
                    >
                      <div>
                        <div style={{ fontSize: "14px", color: "#FAF6EE", fontWeight: 600 }}>{item.label}</div>
                        <div style={{ fontSize: "11px", color: "#8A7E70", marginTop: "2px" }}>{item.detail}</div>
                      </div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: "#C9A96E" }}>
                        {item.price} <span style={{ fontSize: "11px", color: "#6B5B4E" }}>F</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Packs */}
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#FAF6EE", marginBottom: "20px" }}>
                  Packs <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Coaching</em>
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    { label: "Pack 5 Privées", detail: "5 séances", price: "110 000", eco: "-15 000 F" },
                    { label: "Pack 10 Privées", detail: "10 séances", price: "200 000", eco: "-50 000 F", highlight: true },
                    { label: "Suivi Mensuel", detail: "8 séances/mois", price: "180 000", eco: "-20 000 F" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "18px 22px",
                        background: item.highlight ? "rgba(201,169,110,0.06)" : "#1A1714",
                        border: item.highlight ? "1px solid rgba(201,169,110,0.25)" : "1px solid rgba(201,169,110,0.08)",
                        borderRadius: "12px",
                        transition: "all 0.3s",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: "14px", color: "#FAF6EE", fontWeight: 600 }}>{item.label}</div>
                        <div style={{ fontSize: "11px", color: "#8A7E70", marginTop: "2px" }}>{item.detail}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: "#C9A96E" }}>
                          {item.price} <span style={{ fontSize: "11px", color: "#6B5B4E" }}>F</span>
                        </div>
                        <div style={{ fontSize: "11px", color: "#6B9E78", fontWeight: 600 }}>{item.eco}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inclus */}
            <div
              style={{
                marginTop: "30px",
                padding: "20px 25px",
                background: "rgba(201,169,110,0.04)",
                border: "1px solid rgba(201,169,110,0.1)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#C9A96E" }}>Inclus dans le coaching privé :</span>
              {["Bilan initial", "Programme personnalisé", "Suivi nutrition", "Accès WhatsApp Coach Mimi"].map((item) => (
                <span key={item} style={{ fontSize: "12px", color: "#8A7E70" }}>✓ {item}</span>
              ))}
            </div>
          </div>
        )}

        {activeTab === "entreprise" && (
          <div>
            <p style={{ textAlign: "center", fontSize: "13px", color: "#8A7E70", marginBottom: "40px" }}>
              Programmes wellness sur site — Abidjan & environs · Jusqu'à 15 participants
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", maxWidth: "700px", margin: "0 auto 40px" }} className="tarifs-two-col">
              {[
                {
                  label: "Séance Team Building",
                  detail: "Jusqu'à 15 participants · Séance unique",
                  price: "100 000",
                  icon: "🤝",
                  highlight: false,
                },
                {
                  label: "Programme Mensuel",
                  detail: "4 séances/mois · Jusqu'à 15 participants",
                  price: "350 000",
                  icon: "📅",
                  highlight: true,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: "30px 25px",
                    background: item.highlight ? "rgba(201,169,110,0.06)" : "#1A1714",
                    border: item.highlight ? "1px solid rgba(201,169,110,0.25)" : "1px solid rgba(201,169,110,0.08)",
                    borderRadius: "16px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "36px", marginBottom: "12px" }}>{item.icon}</div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#FAF6EE", marginBottom: "6px" }}>{item.label}</div>
                  <div style={{ fontSize: "12px", color: "#8A7E70", marginBottom: "20px" }}>{item.detail}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: "#C9A96E" }}>
                    {item.price} <span style={{ fontSize: "12px", color: "#6B5B4E" }}>FCFA</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center" }}>
              <a
                href="https://wa.me/2250715151408?text=Bonjour%20Coach%20Mimi%20!%20Je%20souhaite%20un%20devis%20pour%20un%20programme%20entreprise."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 36px",
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
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#C9A96E";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                📱 Demander un Devis
              </a>
            </div>
          </div>
        )}

        {/* Conditions */}
        <div
          style={{
            marginTop: "60px",
            padding: "25px 30px",
            background: "#1A1714",
            border: "1px solid rgba(201,169,110,0.08)",
            borderRadius: "16px",
          }}
        >
          <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#C9A96E", textTransform: "uppercase", marginBottom: "20px" }}>
            Conditions Générales
          </h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="conditions-grid">
            {[
              { icon: "📋", title: "Abonnements", desc: "Nominatifs et non transférables · Packs valables 3 mois après achat" },
              { icon: "❌", title: "Annulation", desc: "24h à l'avance minimum · Certificat médical requis à l'inscription" },
              { icon: "👗", title: "Tenue", desc: "Tenue de sport propre exigée · Matériel fourni par HFM" },
            ].map((c) => (
              <div key={c.title} style={{ display: "flex", gap: "12px" }}>
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
        @media (max-width: 768px) {
          .tarifs-two-col { grid-template-columns: 1fr !important; }
          .avantages-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .conditions-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
