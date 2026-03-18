/* ============================================================
   HFM Footer — Dark luxury avec liens et informations légales
   ============================================================ */

export default function Footer() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#060503",
        borderTop: "1px solid rgba(201,169,110,0.08)",
        padding: "60px 0 30px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Top section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "50px",
            marginBottom: "50px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  background: "linear-gradient(135deg, #A8883F, #C9A96E)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#0A0806",
                }}
              >
                H
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    fontSize: "16px",
                    letterSpacing: "3px",
                    color: "#FAF6EE",
                  }}
                >
                  HFM
                </div>
                <div style={{ fontSize: "9px", color: "#8A7E70", letterSpacing: "1.5px" }}>
                  Holistique Fonctionnelle Méthode
                </div>
              </div>
            </div>
            <p style={{ fontSize: "13px", color: "#8A7E70", lineHeight: 1.8, marginBottom: "20px", maxWidth: "280px" }}>
              La méthode fitness premium par Coach Mimi. Transformez votre corps et votre esprit à Abidjan.
            </p>
            <blockquote
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "15px",
                fontStyle: "italic",
                color: "#C9A96E",
                borderLeft: "2px solid #C9A96E",
                paddingLeft: "15px",
                margin: 0,
              }}
            >
              "Le meilleur investissement que tu feras jamais, c'est toi."
            </blockquote>
          </div>

          {/* Navigation */}
          <div>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#C9A96E",
                marginBottom: "20px",
              }}
            >
              Navigation
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { href: "#accueil", label: "Accueil" },
                { href: "#methode", label: "La Méthode" },
                { href: "#programmes", label: "Programmes" },
                { href: "#entreprises", label: "Entreprises" },
                { href: "#kids", label: "Kids World" },
                { href: "#tarifs", label: "Tarifs" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleScroll(link.href); }}
                    style={{
                      fontSize: "13px",
                      color: "#8A7E70",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#8A7E70")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#C9A96E",
                marginBottom: "20px",
              }}
            >
              Services
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Coaching à Domicile",
                "Coaching VIP Privé",
                "Programmes Digitaux",
                "Programme Entreprise",
                "HFM Kids World",
                "Yoga & Mobilité",
                "HIIT & Cardio",
              ].map((s) => (
                <li key={s} style={{ fontSize: "13px", color: "#8A7E70" }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#C9A96E",
                marginBottom: "20px",
              }}
            >
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { icon: "📍", text: "Abidjan, Côte d'Ivoire" },
                { icon: "📱", text: "+225 07 15 15 14 08", link: "https://wa.me/2250715151408" },
                { icon: "📧", text: "mirianaattie4@gmail.com", link: "mailto:mirianaattie4@gmail.com" },
                { icon: "📸", text: "@hfm_coachmimi", link: "https://instagram.com/hfm_coachmimi" },
              ].map((c) => (
                <div key={c.text} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "14px" }}>{c.icon}</span>
                  {c.link ? (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "13px",
                        color: "#8A7E70",
                        textDecoration: "none",
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#8A7E70")}
                    >
                      {c.text}
                    </a>
                  ) : (
                    <span style={{ fontSize: "13px", color: "#8A7E70" }}>{c.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(201,169,110,0.08)", marginBottom: "25px" }} />

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <p style={{ fontSize: "12px", color: "#6B5B4E" }}>
            © 2026 HFM — Holistique Fonctionnelle Méthode · Coach Mimi · Abidjan, Côte d'Ivoire
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Wave", "Orange Money", "PayPal", "Carte bancaire"].map((p) => (
              <span key={p} style={{ fontSize: "11px", color: "#6B5B4E" }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
