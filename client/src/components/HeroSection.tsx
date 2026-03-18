/* ============================================================
   HFM Hero Section — Dark Luxury Performance
   Full-screen hero with generated image background, gold accents
   ============================================================ */
import { useEffect, useRef } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/hfm-hero-bg-52jJoZpdHHTvQyXfynWHkE.webp";

export default function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="accueil"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#0A0806",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          opacity: 0.35,
        }}
      />

      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, rgba(10,8,6,0.95) 45%, rgba(10,8,6,0.4) 100%)",
        }}
      />

      {/* Decorative Lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "repeating-linear-gradient(90deg, transparent, transparent 120px, rgba(201,169,110,0.025) 120px, rgba(201,169,110,0.025) 121px)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative Circle */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "-5%",
          width: "500px",
          height: "500px",
          border: "1px solid rgba(201,169,110,0.06)",
          borderRadius: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          paddingTop: "100px",
          paddingBottom: "60px",
          width: "100%",
        }}
      >
        {/* Label */}
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginBottom: "30px",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "#C9A96E",
          }}
        >
          <span style={{ width: "40px", height: "1px", background: "#C9A96E", display: "block" }} />
          Abidjan · Côte d'Ivoire · 2026
        </div>

        {/* Main Title */}
        <h1
          className="reveal reveal-delay-1"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(48px, 8vw, 90px)",
            fontWeight: 400,
            lineHeight: 1.05,
            marginBottom: "10px",
            color: "#FAF6EE",
          }}
        >
          Holistique
          <br />
          <span style={{ color: "#C9A96E", fontStyle: "italic" }}>Fonctionnelle</span>
          <br />
          <span style={{ color: "#9E8E7E" }}>Méthode</span>
        </h1>

        {/* Subtitle */}
        <p
          className="reveal reveal-delay-2"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(18px, 2.5vw, 24px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "#8A7E70",
            margin: "25px 0 40px",
            maxWidth: "500px",
          }}
        >
          « Le meilleur investissement que tu feras jamais, c'est toi. »
        </p>

        {/* CTA Buttons */}
        <div
          className="reveal reveal-delay-3"
          style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}
        >
          <a
            href="#programmes"
            onClick={(e) => { e.preventDefault(); handleScroll("#programmes"); }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 36px",
              background: "#C9A96E",
              color: "#0A0806",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.4s",
              borderRadius: "4px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#D4BC8B";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 40px rgba(201,169,110,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#C9A96E";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Découvrir les Programmes →
          </a>
          <a
            href="https://wa.me/2250715151408"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 36px",
              background: "transparent",
              color: "#C9A96E",
              border: "1px solid rgba(201,169,110,0.4)",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.4s",
              borderRadius: "4px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#C9A96E";
              (e.currentTarget as HTMLElement).style.background = "rgba(201,169,110,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.4)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            📱 Réserver une Séance
          </a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="reveal reveal-delay-4"
          style={{
            display: "flex",
            gap: "50px",
            marginTop: "60px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(201,169,110,0.1)",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "5", label: "Piliers HFM" },
            { num: "3+", label: "Certifications" },
            { num: "6", label: "Lieux à Abidjan" },
            { num: "100%", label: "Poids de Corps" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "36px",
                  fontWeight: 600,
                  color: "#C9A96E",
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  color: "#8A7E70",
                  marginTop: "6px",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          animation: "bounce 2s infinite",
          cursor: "pointer",
          zIndex: 2,
        }}
        onClick={() => handleScroll("#methode")}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "8px",
            letterSpacing: "3px",
            color: "#8A7E70",
            textTransform: "uppercase",
          }}
        >
          Défiler
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, #C9A96E, transparent)",
          }}
        />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}
