/* ============================================================
   HFM PWA — Onglet Galerie (Photos & Diplômes)
   ============================================================ */
import { useState } from "react";

const PHOTOS = [
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/mimi-trail-run_b86039e1.jpeg",
    caption: "Trail Run — Côte d'Ivoire",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/mimi-podium-coupe_60bacd92.jpeg",
    caption: "Podium — Compétition Nationale",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/mimi-podium-challenger_f5aaf68e.jpeg",
    caption: "Challenger Race — Trophée",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/mimi-groupe-assinie_a51c3fbc.png",
    caption: "Bootcamp Assinie — Groupe",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/mimi-portrait_bdf9b2f0.jpeg",
    caption: "Coach Mimi — Portrait",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/mimi-piscine_731b8244.png",
    caption: "Coach Mimi — Détente",
  },
];

const DIPLOMES = [
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/cert-master-functional_eb325481.jpeg",
    title: "Master Functional Trainer",
    org: "PT Academy · Janv. 2026",
    color: "#C9A96E",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/cert-lesmills_98f29720.jpeg",
    title: "Les Mills — Physiologie",
    org: "Planet Fitness Afrique · Avr. 2025",
    color: "#5B8DEF",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/cert-pilates-module1_ad1720a4.jpeg",
    title: "Pilates Module 1",
    org: "Upskillist · Mars 2026",
    color: "#6B9E78",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/cert-pilates-module2_685d77a5.jpeg",
    title: "Pilates Module 2",
    org: "Upskillist · Mars 2026",
    color: "#6B9E78",
  },
];

export default function GalerieTab() {
  const [activeTab, setActiveTab] = useState<"photos" | "diplomes">("photos");
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div style={{ paddingBottom: "20px" }}>
      {/* Header */}
      <div
        style={{
          padding: "24px 16px 16px",
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
          Coach Mimi
        </div>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "28px",
            fontWeight: 500,
            color: "#FAF6EE",
          }}
        >
          Photos & <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Diplômes</em>
        </h2>
      </div>

      {/* Tab Switcher */}
      <div style={{ padding: "0 16px 16px" }}>
        <div
          style={{
            display: "flex",
            background: "#1A1714",
            borderRadius: "12px",
            padding: "4px",
            gap: "4px",
          }}
        >
          {[
            { key: "photos" as const, label: "📸 Photos" },
            { key: "diplomes" as const, label: "🎓 Diplômes" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "8px",
                border: "none",
                background: activeTab === tab.key ? "#C9A96E" : "transparent",
                color: activeTab === tab.key ? "#0A0806" : "#8A7E70",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Photos Grid */}
      {activeTab === "photos" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            padding: "0 16px",
          }}
        >
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              onClick={() => setLightbox(photo.url)}
              style={{
                position: "relative",
                borderRadius: "14px",
                overflow: "hidden",
                aspectRatio: "3/4",
                cursor: "pointer",
                border: "1px solid rgba(201,169,110,0.1)",
              }}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(10,8,6,0.8) 0%, transparent 50%)",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  right: "10px",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "12px",
                  fontStyle: "italic",
                  color: "#FAF6EE",
                  margin: 0,
                }}
              >
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Diplômes List */}
      {activeTab === "diplomes" && (
        <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: "16px" }}>
          {DIPLOMES.map((diplome, i) => (
            <div
              key={i}
              onClick={() => setLightbox(diplome.url)}
              style={{
                background: "#1A1714",
                border: `1px solid ${diplome.color}22`,
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
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
              <div style={{ padding: "14px 16px" }}>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    color: diplome.color,
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}
                >
                  {diplome.org}
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#FAF6EE",
                  }}
                >
                  {diplome.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.95)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          <img
            src={lightbox}
            alt="Plein écran"
            style={{
              maxWidth: "100%",
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: "12px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              width: "40px",
              height: "40px",
              background: "rgba(201,169,110,0.9)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              cursor: "pointer",
              fontWeight: 700,
              color: "#0A0806",
            }}
          >
            ✕
          </div>
        </div>
      )}
    </div>
  );
}
