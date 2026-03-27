/* ============================================================
   HFM PWA — Onglet Contact & Profil Coach Mimi
   ============================================================ */

const certifications = [
  { icon: "⭐", label: "Master Functional Trainer", sub: "PT Academy · Certification internationale avancée" },
  { icon: "🏋️", label: "Les Mills Coach", sub: "Planet Fitness Afrique · Reconnue mondialement" },
  { icon: "🧘", label: "Pilates Modules 1 & 2", sub: "Upskillist · Certifiée mars 2026" },
  { icon: "📚", label: "Formation Fitness", sub: "Inspire Academy · Certification en ligne" },
];

const lieux = [
  { icon: "🎨", name: "Art en Ciel", detail: "Marcory, Abidjan" },
  { icon: "✨", name: "Noor Concept", detail: "Zone 4, Abidjan" },
  { icon: "🏢", name: "Entreprises & Hôtels", detail: "Sur site, Abidjan & environs" },
  { icon: "🌊", name: "Les Jardins d'Eden", detail: "Grand-Bassam · Bootcamp Weekend" },
];

export default function ContactTab() {
  return (
    <div style={{ paddingBottom: "20px" }}>
      {/* Header Coach Mimi */}
      <div
        style={{
          padding: "30px 16px 24px",
          background: "linear-gradient(180deg, #12100C 0%, #0A0806 100%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            background: "linear-gradient(135deg, #A8883F, #C9A96E)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Playfair Display', serif",
            fontSize: "32px",
            fontWeight: 700,
            color: "#0A0806",
            margin: "0 auto 14px",
          }}
        >
          M
        </div>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "28px",
            fontWeight: 500,
            color: "#FAF6EE",
            marginBottom: "4px",
          }}
        >
          Coach <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Mimi</em>
        </h2>
        <p style={{ fontSize: "12px", color: "#8A7E70", marginBottom: "6px" }}>
          Miriana Attie · Fondatrice HFM · Née en 1997, Abidjan
        </p>
        <blockquote
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "14px",
            fontStyle: "italic",
            color: "#C9A96E",
            margin: "12px 0 0",
            padding: "0 20px",
          }}
        >
          "Le meilleur investissement que tu feras jamais, c'est toi."
        </blockquote>
      </div>

      {/* Contact rapide */}
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <a
          href="https://wa.me/2250715151408"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "16px",
            background: "#25D366",
            borderRadius: "14px",
            textDecoration: "none",
          }}
        >
          <span style={{ fontSize: "24px" }}>📱</span>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>WhatsApp</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.8)" }}>+225 07 15 15 14 08</div>
          </div>
        </a>

        <a
          href="mailto:hfm.coachmimi@gmail.com"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "16px",
            background: "#1A1714",
            border: "1px solid rgba(201,169,110,0.1)",
            borderRadius: "14px",
            textDecoration: "none",
          }}
        >
          <span style={{ fontSize: "24px" }}>📧</span>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#FAF6EE" }}>Email</div>
            <div style={{ fontSize: "11px", color: "#8A7E70" }}>hfm.coachmimi@gmail.com</div>
          </div>
        </a>

        <a
          href="https://instagram.com/hfm_abidjan"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "16px",
            background: "linear-gradient(135deg, rgba(131,58,180,0.15), rgba(253,29,29,0.1))",
            border: "1px solid rgba(201,169,110,0.1)",
            borderRadius: "14px",
            textDecoration: "none",
          }}
        >
          <span style={{ fontSize: "24px" }}>📸</span>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#FAF6EE" }}>Instagram</div>
            <div style={{ fontSize: "11px", color: "#8A7E70" }}>@hfm_abidjan · @coachmimi_hfm</div>
          </div>
        </a>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "16px",
            background: "#1A1714",
            border: "1px solid rgba(201,169,110,0.1)",
            borderRadius: "14px",
          }}
        >
          <span style={{ fontSize: "24px" }}>📍</span>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#FAF6EE" }}>Localisation</div>
            <div style={{ fontSize: "11px", color: "#8A7E70" }}>Abidjan, Côte d'Ivoire</div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div style={{ padding: "0 16px 20px" }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "#FAF6EE", marginBottom: "12px" }}>
          <em style={{ color: "#C9A96E" }}>Certifications</em>
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {certifications.map((cert) => (
            <div
              key={cert.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 16px",
                background: "rgba(201,169,110,0.04)",
                border: "1px solid rgba(201,169,110,0.08)",
                borderRadius: "12px",
              }}
            >
              <span style={{ fontSize: "22px" }}>{cert.icon}</span>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#FAF6EE" }}>{cert.label}</div>
                <div style={{ fontSize: "11px", color: "#8A7E70", marginTop: "2px" }}>{cert.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lieux */}
      <div style={{ padding: "0 16px 20px" }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "#FAF6EE", marginBottom: "12px" }}>
          Lieux <em style={{ color: "#C9A96E" }}>d'Intervention</em>
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          {lieux.map((l) => (
            <div
              key={l.name}
              style={{
                background: "#1A1714",
                border: "1px solid rgba(201,169,110,0.06)",
                borderRadius: "12px",
                padding: "14px 12px",
              }}
            >
              <div style={{ fontSize: "22px", marginBottom: "6px" }}>{l.icon}</div>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#FAF6EE", marginBottom: "3px" }}>{l.name}</div>
              <div style={{ fontSize: "10px", color: "#8A7E70" }}>{l.detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Cadre des cours */}
      <div style={{ padding: "0 16px" }}>
        <div
          style={{
            padding: "20px 16px",
            background: "rgba(201,169,110,0.04)",
            border: "1px solid rgba(201,169,110,0.1)",
            borderRadius: "14px",
          }}
        >
          <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: "#C9A96E", textTransform: "uppercase", marginBottom: "12px" }}>
            Cadre des Cours HFM
          </h4>
          {[
            "Maximum 6 participants par session",
            "2 sessions max/jour · 3 jours/semaine",
            "Durée : 45-60 minutes",
            "Matériel fourni par HFM",
            "Tenue de sport propre exigée",
            "Certificat médical requis à l'inscription",
          ].map((item) => (
            <div key={item} style={{ fontSize: "12px", color: "#9E8E7E", marginBottom: "6px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#C9A96E", fontSize: "10px" }}>✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
