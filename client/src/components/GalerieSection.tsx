/* ============================================================
   HFM — Section Galerie & Diplômes (Vraies Photos + Certifications)
   Design: Dark Luxury Performance · Noir #0A0806 + Or #C9A96E
   ============================================================ */
import { useEffect, useState } from "react";

const PHOTOS = [
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/mimi-trail-run_b86039e1.jpeg",
    caption: "Trail Run — Côte d'Ivoire",
    category: "performance",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/mimi-podium-coupe_60bacd92.jpeg",
    caption: "Podium — Compétition Nationale",
    category: "performance",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/mimi-podium-challenger_f5aaf68e.jpeg",
    caption: "Challenger Race — Remise des trophées",
    category: "performance",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/mimi-groupe-assinie_a51c3fbc.png",
    caption: "Bootcamp Assinie — Séance de groupe",
    category: "coaching",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/mimi-portrait_bdf9b2f0.jpeg",
    caption: "Coach Mimi — Portrait",
    category: "portrait",
  },

];

const DIPLOMES = [
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/cert-master-functional_eb325481.jpeg",
    title: "Master Functional Trainer",
    org: "PT Academy",
    date: "Janvier 2026",
    color: "#C9A96E",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/cert-lesmills_98f29720.jpeg",
    title: "Les Mills — Physiologie de l'Entraînement",
    org: "Planet Fitness Afrique",
    date: "Avril 2025",
    color: "#5B8DEF",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/cert-pilates-module1_ad1720a4.jpeg",
    title: "Pilates — Module 1 of 4",
    org: "Upskillist",
    date: "Mars 2026",
    color: "#6B9E78",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/cert-pilates-module2_685d77a5.jpeg",
    title: "Pilates — Module 2 of 4",
    org: "Upskillist",
    date: "Mars 2026",
    color: "#6B9E78",
  },
];

export default function GalerieSection() {
  const [activeTab, setActiveTab] = useState<"photos" | "diplomes">("photos");
  const [lightbox, setLightbox] = useState<string | null>(null);

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
      id="galerie"
      style={{
        padding: "100px 0",
        background: "#0A0806",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div className="section-label reveal">Galerie</div>
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
            Photos & <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Diplômes</em>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: "14px",
              color: "#8A7E70",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Vraies photos de Coach Mimi en action, sur les podiums, et ses certifications internationales obtenues avec passion.
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "4px",
            marginBottom: "40px",
            background: "#1A1714",
            borderRadius: "12px",
            padding: "4px",
            width: "fit-content",
            margin: "0 auto 40px",
          }}
        >
          {[
            { key: "photos" as const, label: "📸 Photos" },
            { key: "diplomes" as const, label: "🎓 Diplômes & Certifications" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                padding: "10px 24px",
                borderRadius: "8px",
                border: "none",
                background: activeTab === tab.key ? "#C9A96E" : "transparent",
                color: activeTab === tab.key ? "#0A0806" : "#8A7E70",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        {activeTab === "photos" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
            className="galerie-grid"
          >
            {PHOTOS.map((photo, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 3) + 1}`}
                onClick={() => setLightbox(photo.url)}
                style={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  aspectRatio: i === 3 ? "16/9" : "4/5",
                  cursor: "pointer",
                  border: "1px solid rgba(201,169,110,0.08)",
                  transition: "all 0.4s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "scale(1.02)";
                  el.style.borderColor = "rgba(201,169,110,0.3)";
                  el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "scale(1)";
                  el.style.borderColor = "rgba(201,169,110,0.08)";
                  el.style.boxShadow = "none";
                }}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(10,8,6,0.85) 0%, transparent 50%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    right: "16px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "14px",
                      fontStyle: "italic",
                      color: "#FAF6EE",
                      margin: 0,
                    }}
                  >
                    {photo.caption}
                  </p>
                </div>
                {/* Zoom icon */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    width: "32px",
                    height: "32px",
                    background: "rgba(201,169,110,0.8)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                  }}
                >
                  🔍
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Diplômes Grid */}
        {activeTab === "diplomes" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
            }}
            className="diplomes-grid"
          >
            {DIPLOMES.map((diplome, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1}`}
                onClick={() => setLightbox(diplome.url)}
                style={{
                  background: "#1A1714",
                  border: `1px solid ${diplome.color}22`,
                  borderRadius: "20px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.4s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.borderColor = `${diplome.color}55`;
                  el.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = `${diplome.color}22`;
                  el.style.boxShadow = "none";
                }}
              >
                {/* Certificate image */}
                <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
                  <img
                    src={diplome.url}
                    alt={diplome.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                {/* Info */}
                <div style={{ padding: "20px" }}>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      color: diplome.color,
                      textTransform: "uppercase",
                      marginBottom: "6px",
                    }}
                  >
                    {diplome.org} · {diplome.date}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "#FAF6EE",
                      margin: 0,
                    }}
                  >
                    {diplome.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            cursor: "pointer",
          }}
        >
          <img
            src={lightbox}
            alt="Plein écran"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: "12px",
              boxShadow: "0 0 80px rgba(201,169,110,0.2)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "44px",
              height: "44px",
              background: "rgba(201,169,110,0.9)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            ✕
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .galerie-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .diplomes-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .galerie-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
