/* ============================================================
   HFM PWA — Onglet Accueil (Home Tab)
   Design: Dark Luxury Performance · Mobile First
   ============================================================ */

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/mimi-pro-photo_291349d0.jpeg";

const stats = [
  { num: "5", label: "Piliers" },
  { num: "3+", label: "Ans d'exp." },
  { num: "6", label: "Max/séance" },
  { num: "100%", label: "Sans machine" },
];

const pillars = [
  { icon: "🔥", name: "HIIT", color: "#C45B4A" },
  { icon: "🤸", name: "Mobilité", color: "#C9A96E" },
  { icon: "💪", name: "Gainage", color: "#D4A017" },
  { icon: "💓", name: "Cardio", color: "#5B8DEF" },
  { icon: "🧘", name: "Pilates", color: "#6B9E78" },
];

export default function HomeTab() {
  return (
    <div style={{ paddingBottom: "20px" }}>

      {/* Hero */}
      <div
        style={{
          position: "relative",
          height: "420px",
          overflow: "hidden",
          borderRadius: "0 0 28px 28px",
        }}
      >
        <img
          src={HERO_IMG}
          alt="HFM Hero"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(10,8,6,0.3) 0%, rgba(10,8,6,0.7) 60%, rgba(10,8,6,0.95) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            left: "20px",
            right: "20px",
          }}
        >
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "3px",
              color: "#C9A96E",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            Abidjan · Côte d'Ivoire · 2026
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "38px",
              fontWeight: 500,
              color: "#FAF6EE",
              lineHeight: 1.1,
              marginBottom: "10px",
            }}
          >
            Holistique<br />
            <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Fonctionnelle</em><br />
            Méthode
          </h1>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "14px",
              fontStyle: "italic",
              color: "#D4BC8B",
              marginBottom: "20px",
            }}
          >
            "Le meilleur investissement que tu feras jamais, c'est toi."
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            <a
              href="https://wa.me/2250715151408?text=Bonjour%20Coach%20Mimi%20!%20Je%20souhaite%20r%C3%A9server%20une%20s%C3%A9ance."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                padding: "13px",
                background: "#C9A96E",
                borderRadius: "12px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#0A0806",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              📱 Réserver
            </a>
            <a
              href="https://wa.me/2250715151408"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                padding: "13px",
                background: "rgba(201,169,110,0.1)",
                border: "1px solid rgba(201,169,110,0.3)",
                borderRadius: "12px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#C9A96E",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "8px",
          padding: "20px 16px",
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              background: "#1A1714",
              border: "1px solid rgba(201,169,110,0.1)",
              borderRadius: "14px",
              padding: "14px 8px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "22px",
                fontWeight: 700,
                color: "#C9A96E",
                lineHeight: 1,
              }}
            >
              {s.num}
            </div>
            <div style={{ fontSize: "9px", color: "#8A7E70", marginTop: "4px", fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.5px" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* 5 Piliers */}
      <div style={{ padding: "0 16px 20px" }}>
        <div
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "2.5px",
            color: "#C9A96E",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          La Méthode
        </div>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "26px",
            fontWeight: 500,
            color: "#FAF6EE",
            marginBottom: "16px",
          }}
        >
          Les 5 Piliers <em style={{ color: "#C9A96E", fontStyle: "italic" }}>HFM</em>
        </h2>
        <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "8px" }}>
          {pillars.map((p) => (
            <div
              key={p.name}
              style={{
                flexShrink: 0,
                width: "90px",
                background: "#1A1714",
                border: "1px solid rgba(201,169,110,0.08)",
                borderRadius: "14px",
                padding: "16px 10px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: p.color,
                }}
              />
              <div style={{ fontSize: "24px", marginBottom: "8px" }}>{p.icon}</div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "9px",
                  fontWeight: 800,
                  letterSpacing: "1px",
                  color: p.color,
                  textTransform: "uppercase",
                }}
              >
                {p.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coach Mimi Card */}
      <div style={{ padding: "0 16px 20px" }}>
        <div
          style={{
            background: "linear-gradient(135deg, rgba(201,169,110,0.08), rgba(201,169,110,0.03))",
            border: "1px solid rgba(201,169,110,0.15)",
            borderRadius: "20px",
            padding: "24px 20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                border: "2px solid #C9A96E",
              }}
            >
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/mimi-pro-photo_291349d0.jpeg" alt="Coach Mimi" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "#FAF6EE" }}>
                Coach <em style={{ color: "#C9A96E" }}>Mimi</em>
              </div>
              <div style={{ fontSize: "11px", color: "#8A7E70", fontFamily: "'Montserrat', sans-serif" }}>
                Miriana Attie · Fondatrice HFM
              </div>
            </div>
          </div>
          <p style={{ fontSize: "13px", color: "#9E8E7E", lineHeight: 1.7, marginBottom: "16px" }}>
            Coach fitness certifiée internationale, née le 20 septembre 1987 à Abidjan. Commencé à 35 ans, après deux mariages et trois filles. Sa méthode : 100% poids du corps, zéro machine.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["Master Functional Trainer", "Les Mills Coach", "Pilates Certifiée", "Inspire Academy"].map((cert) => (
              <span
                key={cert}
                style={{
                  padding: "4px 10px",
                  background: "rgba(201,169,110,0.08)",
                  border: "1px solid rgba(201,169,110,0.15)",
                  borderRadius: "20px",
                  fontSize: "10px",
                  color: "#C9A96E",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div style={{ padding: "0 16px" }}>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "20px",
            color: "#FAF6EE",
            marginBottom: "12px",
          }}
        >
          Accès <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Rapide</em>
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {[
            { icon: "📅", title: "Bootcamp Weekend", sub: "Bassam · Les Jardins d'Eden", color: "#C9A96E" },
            { icon: "🏢", title: "Programme Entreprise", sub: "Jusqu'à 15 participants", color: "#5B8DEF" },
            { icon: "💎", title: "Coaching Privé", sub: "Sessions 1-on-1 sur mesure", color: "#D4A017" },
            { icon: "👥", title: "Cours Collectifs", sub: "Max 10 pers · 3 disciplines", color: "#6B9E78" },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "#1A1714",
                border: "1px solid rgba(201,169,110,0.08)",
                borderRadius: "14px",
                padding: "16px 14px",
              }}
            >
              <div style={{ fontSize: "24px", marginBottom: "8px" }}>{item.icon}</div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#FAF6EE", marginBottom: "3px" }}>{item.title}</div>
              <div style={{ fontSize: "10px", color: "#8A7E70" }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
