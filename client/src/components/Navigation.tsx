/* ============================================================
   HFM Navigation — Dark Luxury Performance
   Fixed top nav with gold accents, mobile hamburger menu
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#methode", label: "La Méthode" },
  { href: "#histoire", label: "Mon Histoire" },
  { href: "#galerie", label: "Galerie" },
  { href: "#programmes", label: "Programmes" },
  { href: "#entreprises", label: "Entreprises" },
  { href: "#bootcamp", label: "Bootcamp" },
  { href: "#inscription", label: "S'inscrire" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "10px 0" : "20px 0",
          background: scrolled ? "rgba(10,8,6,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,169,110,0.12)" : "none",
          transition: "all 0.4s cubic-bezier(0.25,0.8,0.25,1)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#accueil"
            onClick={(e) => { e.preventDefault(); handleNavClick("#accueil"); }}
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/hfm-logo_55986daa.png" alt="HFM Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  fontSize: "14px",
                  letterSpacing: "3px",
                  color: "#FAF6EE",
                  lineHeight: 1.2,
                }}
              >
                HFM
              </div>
              <div
                style={{
                  fontSize: "8px",
                  fontWeight: 500,
                  letterSpacing: "2px",
                  color: "#9E8E7E",
                  textTransform: "uppercase",
                }}
              >
                Coach Mimi · Abidjan
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
            className="hidden lg:flex"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: link.href === `#${activeSection}` ? "#C9A96E" : "#9E8E7E",
                    textDecoration: "none",
                    transition: "color 0.3s",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = link.href === `#${activeSection}` ? "#C9A96E" : "#9E8E7E")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="https://wa.me/2250715151408"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex"
            style={{
              padding: "10px 24px",
              background: "rgba(201,169,110,0.1)",
              border: "1px solid rgba(201,169,110,0.35)",
              borderRadius: "6px",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#C9A96E",
              textDecoration: "none",
              transition: "all 0.3s",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(201,169,110,0.2)";
              (e.currentTarget as HTMLElement).style.borderColor = "#C9A96E";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(201,169,110,0.1)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.35)";
            }}
          >
            📱 WhatsApp
          </a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#C9A96E",
              cursor: "pointer",
              padding: "5px",
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(10,8,6,0.98)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "none",
              border: "none",
              color: "#C9A96E",
              cursor: "pointer",
            }}
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "28px",
                fontWeight: 400,
                color: "#FAF6EE",
                textDecoration: "none",
                letterSpacing: "2px",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#FAF6EE")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/2250715151408"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "20px",
              padding: "14px 36px",
              background: "#C9A96E",
              borderRadius: "6px",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#0A0806",
              textDecoration: "none",
            }}
          >
            Nous Contacter
          </a>
        </div>
      )}
    </>
  );
}
