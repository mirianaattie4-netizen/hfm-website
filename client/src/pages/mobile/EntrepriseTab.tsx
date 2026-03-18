/* ============================================================
   HFM PWA — Onglet Entreprises
   ============================================================ */

const stats = [
  { num: "+25%", label: "Productivité", icon: "📈" },
  { num: "-35%", label: "Absentéisme", icon: "🍃" },
  { num: "+40%", label: "Fidélisation", icon: "⭐" },
  { num: "×3", label: "Cohésion", icon: "✅" },
];

const disciplines = [
  { icon: "🔥", name: "HIIT" },
  { icon: "🤸", name: "Mobilité" },
  { icon: "💪", name: "Gainage" },
  { icon: "💓", name: "Cardio" },
  { icon: "🧘", name: "Pilates" },
  { icon: "🌿", name: "Mobilité+" },
];

export default function EntrepriseTab() {
  return (
    <div style={{ paddingBottom: "20px" }}>
      {/* Header */}
      <div
        style={{
          padding: "24px 16px 20px",
          background: "linear-gradient(180deg, #12100C 0%, #0A0806 100%)",
        }}
      >
        <div
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "2.5px",
            color: "#C9A96E",
            textTransform: "uppercase",
            marginBottom: "4px",
          }}
        >
          Banque Bien-Être
        </div>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "28px",
            fontWeight: 500,
            color: "#FAF6EE",
            marginBottom: "10px",
          }}
        >
          Programme <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Entreprise</em>
        </h2>
        <p style={{ fontSize: "13px", color: "#8A7E70", lineHeight: 1.6 }}>
          Investissez dans le bien-être de vos équipes. Séances sur site à Abidjan et environs — jusqu'à 15 participants.
        </p>
      </div>

      {/* Stats */}
      <div style={{ padding: "0 16px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                background: "#1A1714",
                border: "1px solid rgba(201,169,110,0.1)",
                borderRadius: "14px",
                padding: "18px 14px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "24px", marginBottom: "6px" }}>{s.icon}</div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#C9A96E",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {s.num}
              </div>
              <div style={{ fontSize: "11px", color: "#8A7E70", fontFamily: "'Montserrat', sans-serif" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "10px", color: "#6B5B4E", textAlign: "center", marginTop: "8px", fontStyle: "italic" }}>
          Sources : OMS · Harvard Business Review · Gallup
        </p>
      </div>

      {/* Disciplines */}
      <div style={{ padding: "0 16px 20px" }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "#FAF6EE", marginBottom: "12px" }}>
          6 <em style={{ color: "#C9A96E" }}>Disciplines</em>
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
          {disciplines.map((d) => (
            <div
              key={d.name}
              style={{
                background: "#1A1714",
                border: "1px solid rgba(201,169,110,0.06)",
                borderRadius: "12px",
                padding: "14px 10px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "22px", marginBottom: "6px" }}>{d.icon}</div>
              <div style={{ fontSize: "11px", color: "#C9A96E", fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>{d.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Formules */}
      <div style={{ padding: "0 16px" }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "#FAF6EE", marginBottom: "12px" }}>
          Formules & <em style={{ color: "#C9A96E" }}>Tarifs</em>
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            {
              name: "SÉANCE UNIQUE",
              sub: "Team Building",
              price: "100 000 F",
              features: ["Jusqu'à 15 participants", "Cours collectif sur site", "Matériel fourni par HFM"],
              highlight: false,
            },
            {
              name: "PROGRAMME MENSUEL",
              sub: "Le plus populaire",
              price: "350 000 F",
              features: ["Jusqu'à 15 participants", "4 cours collectifs/mois", "Planning flexible", "Rapport mensuel bien-être"],
              highlight: true,
            },
            {
              name: "DEVIS SUR MESURE",
              sub: "Grandes entreprises",
              price: "Sur devis",
              features: ["Programme personnalisé", "Nombre de participants libre", "Contrat annuel possible"],
              highlight: false,
            },
          ].map((f) => (
            <div
              key={f.name}
              style={{
                background: f.highlight ? "rgba(201,169,110,0.06)" : "#1A1714",
                border: f.highlight ? "1px solid rgba(201,169,110,0.25)" : "1px solid rgba(201,169,110,0.08)",
                borderRadius: "16px",
                padding: "20px 16px",
                position: "relative",
              }}
            >
              {f.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "14px",
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
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: "#C9A96E", textTransform: "uppercase", marginBottom: "3px" }}>
                    {f.sub}
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "#FAF6EE" }}>{f.name}</div>
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#C9A96E", textAlign: "right" }}>
                  {f.price}
                </div>
              </div>
              {f.features.map((feat) => (
                <div key={feat} style={{ fontSize: "12px", color: "#9E8E7E", marginBottom: "5px" }}>✓ {feat}</div>
              ))}
            </div>
          ))}
        </div>

        <a
          href="https://wa.me/2250715151408?text=Bonjour%20Coach%20Mimi%20!%20Je%20souhaite%20un%20devis%20pour%20un%20programme%20bien-%C3%AAtre%20en%20entreprise."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            marginTop: "20px",
            padding: "16px",
            background: "#C9A96E",
            borderRadius: "14px",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#0A0806",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          🏢 Demander un Devis
        </a>
      </div>
    </div>
  );
}
