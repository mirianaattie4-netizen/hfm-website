/* ============================================================
   HFM PWA — Onglet Programmes Digitaux
   Tri : popularité · prix ↑↓ · date de publication
   Design: Dark Luxury Performance · Mobile First
   ============================================================ */
import { useState, useMemo } from "react";

const VIDEO_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/hfm-video-1_00d2c3f6.mp4";
const VIDEO_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/hfm-video-2_17bbceab.mp4";

type FilterKey = "tous" | "pdf" | "video" | "pack";
type SortKey = "popularite" | "date-desc" | "date-asc";

const trailers = [
  { id: "trailer-1", src: VIDEO_1, title: "Séance HIIT Express", subtitle: "Aperçu · Programme HIIT 30 Jours", tag: "HIIT", tagColor: "#C9A96E" },
  { id: "trailer-2", src: VIDEO_2, title: "Pilates au Sol — Méthode HFM", subtitle: "Aperçu · Guide Pilates Complet", tag: "PILATES", tagColor: "#6B9E78" },
];

const allProducts = [
  {
    id: "video-hiit",
    filter: "video" as FilterKey,
    icon: "🎬",
    badge: "POPULAIRE",
    badgeColor: "#5B8DEF",
    title: "Séance HIIT Express",
    subtitle: "20 min · Coaching Coach Mimi",
    format: "MP4 · HD 1080p",
    price: 8000,
    priceLabel: "8 000 F",
    color: "#5B8DEF",
    trailerId: "trailer-1",
    popularity: 95,
    publishedAt: new Date("2026-01-10"),
    includes: ["Vidéo HD 20 minutes", "Coaching vocal Coach Mimi", "Fiche exercices PDF incluse", "Accès illimité"],
  },
  {
    id: "plan-hiit",
    filter: "pdf" as FilterKey,
    icon: "📄",
    badge: "BESTSELLER",
    badgeColor: "#C9A96E",
    title: "Plan HIIT 30 Jours",
    subtitle: "Programme complet bodyweight",
    format: "PDF · 42 pages",
    price: 15000,
    priceLabel: "15 000 F",
    color: "#C9A96E",
    trailerId: "trailer-1",
    popularity: 88,
    publishedAt: new Date("2026-01-15"),
    includes: ["30 séances détaillées", "Fiches exercices illustrées", "Calendrier hebdomadaire", "Suivi de progression"],
  },
  {
    id: "plan-pilates",
    filter: "pdf" as FilterKey,
    icon: "📄",
    badge: "NOUVEAU",
    badgeColor: "#6B9E78",
    title: "Guide Pilates au Sol",
    subtitle: "Débutant à avancé · Méthode HFM",
    format: "PDF · 58 pages",
    price: 12000,
    priceLabel: "12 000 F",
    color: "#6B9E78",
    trailerId: "trailer-2",
    popularity: 76,
    publishedAt: new Date("2026-02-20"),
    includes: ["50 exercices Pilates", "3 niveaux de difficulté", "Conseils nutrition", "Programme 8 semaines"],
  },
  {
    id: "video-pilates",
    filter: "video" as FilterKey,
    icon: "🎬",
    badge: null,
    badgeColor: "",
    title: "Pilates Sunset — 45 min",
    subtitle: "Séance complète · Niveau intermédiaire",
    format: "MP4 · HD 1080p",
    price: 10000,
    priceLabel: "10 000 F",
    color: "#C45B4A",
    trailerId: "trailer-2",
    popularity: 70,
    publishedAt: new Date("2026-02-28"),
    includes: ["Vidéo HD 45 minutes", "Coaching vocal Coach Mimi", "Programme 4 semaines PDF", "Accès illimité"],
  },
  {
    id: "plan-nutrition",
    filter: "pdf" as FilterKey,
    icon: "🥗",
    badge: null,
    badgeColor: "",
    title: "Guide Nutrition Fonctionnelle",
    subtitle: "Alimentation saine · Produits locaux",
    format: "PDF · 36 pages",
    price: 10000,
    priceLabel: "10 000 F",
    color: "#D4A017",
    trailerId: null,
    popularity: 62,
    publishedAt: new Date("2026-03-05"),
    includes: ["Plan alimentaire 4 semaines", "30 recettes locales", "Liste de courses", "Conseils hydratation"],
  },
  {
    id: "pack-complet",
    filter: "pack" as FilterKey,
    icon: "💎",
    badge: "MEILLEURE VALEUR",
    badgeColor: "#C9A96E",
    title: "Pack Digital Complet HFM",
    subtitle: "Tout inclus + 1 mois suivi WhatsApp",
    format: "Accès immédiat · Tout inclus",
    price: 45000,
    priceLabel: "45 000 F",
    color: "#C9A96E",
    featured: true,
    trailerId: null,
    popularity: 99,
    publishedAt: new Date("2026-01-01"),
    includes: ["5 programmes PDF + vidéos", "1 mois suivi WhatsApp Coach Mimi", "Bilan initial personnalisé", "Mises à jour gratuites à vie"],
  },
];

const filterOptions: { key: FilterKey; label: string; icon: string }[] = [
  { key: "tous", label: "Tous", icon: "✨" },
  { key: "pdf", label: "PDF", icon: "📄" },
  { key: "video", label: "Vidéos", icon: "🎬" },
  { key: "pack", label: "Pack", icon: "💎" },
];

const sortOptions: { key: SortKey; label: string; icon: string }[] = [
  { key: "popularite", label: "Popularité", icon: "🔥" },
  { key: "date-desc", label: "Récent", icon: "🆕" },
  { key: "date-asc", label: "Ancien", icon: "📅" },
];

export default function DigitalTab() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("tous");
  const [activeSort, setActiveSort] = useState<SortKey>("popularite");
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const [showSort, setShowSort] = useState(false);

  const sortedFiltered = useMemo(() => {
    let list = activeFilter === "tous" ? [...allProducts] : allProducts.filter((p) => p.filter === activeFilter);
    switch (activeSort) {
      case "popularite":  list.sort((a, b) => b.popularity - a.popularity); break;
      case "date-desc":   list.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()); break;
      case "date-asc":    list.sort((a, b) => a.publishedAt.getTime() - b.publishedAt.getTime()); break;
    }
    return list;
  }, [activeFilter, activeSort]);

  const getTrailer = (id: string | null) => id ? trailers.find((t) => t.id === id) ?? null : null;

  const handleOrder = (product: typeof allProducts[0]) => {
    const msg = encodeURIComponent(
      `Bonjour Coach Mimi ! Je suis intéressé(e) par le programme digital "${product.title}". Pouvez-vous m'envoyer les informations ?`
    );
    window.open(`https://wa.me/2250715151408?text=${msg}`, "_blank");
  };

  const formatDate = (d: Date) =>
    d.toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });

  const currentSortLabel = sortOptions.find(s => s.key === activeSort)?.label ?? "Popularité";
  const currentSortIcon = sortOptions.find(s => s.key === activeSort)?.icon ?? "🔥";

  return (
    <div style={{ paddingBottom: "20px" }}>

      {/* Full-screen video modal */}
      {modalVideo && (
        <div onClick={() => setModalVideo(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.96)", zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: "480px", position: "relative" }}>
            <video src={modalVideo} controls autoPlay playsInline style={{ width: "100%", display: "block", background: "#000", maxHeight: "80dvh" }} />
          </div>
          <button onClick={() => setModalVideo(null)} style={{ marginTop: "20px", padding: "12px 28px", background: "rgba(201,169,110,0.15)", border: "1px solid rgba(201,169,110,0.3)", borderRadius: "30px", color: "#C9A96E", fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "1px", cursor: "pointer" }}>
            ✕ Fermer
          </button>
        </div>
      )}

      {/* Sort dropdown overlay */}
      {showSort && (
        <div onClick={() => setShowSort(false)} style={{ position: "fixed", inset: 0, zIndex: 8888 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ position: "absolute", top: "auto", bottom: "80px", left: "16px", right: "16px", background: "#1A1714", border: "1px solid rgba(201,169,110,0.2)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.7)" }}>
            <div style={{ padding: "14px 16px 10px", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: "#6B5B4E", textTransform: "uppercase", borderBottom: "1px solid rgba(201,169,110,0.08)" }}>
              Trier par
            </div>
            {sortOptions.map((s) => (
              <button
                key={s.key}
                onClick={() => { setActiveSort(s.key); setShowSort(false); }}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  background: activeSort === s.key ? "rgba(201,169,110,0.1)" : "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(201,169,110,0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span style={{ fontSize: "16px" }}>{s.icon}</span>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: activeSort === s.key ? 700 : 500, color: activeSort === s.key ? "#C9A96E" : "#9E8E7E" }}>
                  {s.label}
                </span>
                {activeSort === s.key && (
                  <span style={{ marginLeft: "auto", width: "8px", height: "8px", borderRadius: "50%", background: "#C9A96E", flexShrink: 0 }} />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Header */}
      <div style={{ padding: "24px 16px 16px", background: "linear-gradient(180deg, #12100C 0%, #0A0806 100%)" }}>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "2.5px", color: "#C9A96E", textTransform: "uppercase", marginBottom: "4px" }}>
          Accès Immédiat · Partout dans le Monde
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 500, color: "#FAF6EE", marginBottom: "8px" }}>
          Programmes <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Digitaux</em>
        </h2>
        <p style={{ fontSize: "12px", color: "#8A7E70", lineHeight: 1.6 }}>
          PDF téléchargeables · Vidéos HD · Plans d'entraînement conçus par Coach Mimi
        </p>
      </div>

      {/* Bandes-annonces */}
      <div style={{ padding: "16px 16px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
          <div style={{ height: "1px", flex: 1, background: "rgba(201,169,110,0.1)" }} />
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: "#C9A96E", textTransform: "uppercase", whiteSpace: "nowrap" }}>🎬 Bandes-Annonces</span>
          <div style={{ height: "1px", flex: 1, background: "rgba(201,169,110,0.1)" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
          {trailers.map((trailer) => (
            <div key={trailer.id} onClick={() => setModalVideo(trailer.src)} style={{ position: "relative", borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(201,169,110,0.12)", cursor: "pointer", background: "#0D0B08" }}>
              <video src={trailer.src + "#t=0.5"} muted playsInline preload="metadata" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,8,6,0.88) 0%, rgba(10,8,6,0.1) 50%, transparent 100%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "52px", height: "52px", borderRadius: "50%", background: "rgba(201,169,110,0.18)", border: "2px solid rgba(201,169,110,0.65)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)", pointerEvents: "none" }}>
                <div style={{ width: 0, height: 0, borderTop: "9px solid transparent", borderBottom: "9px solid transparent", borderLeft: "16px solid #C9A96E", marginLeft: "3px" }} />
              </div>
              <div style={{ position: "absolute", top: "10px", left: "10px", padding: "3px 10px", background: `${trailer.tagColor}22`, border: `1px solid ${trailer.tagColor}60`, borderRadius: "20px", fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 800, letterSpacing: "1.5px", color: trailer.tagColor, textTransform: "uppercase", backdropFilter: "blur(4px)" }}>{trailer.tag}</div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 14px" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", color: "#FAF6EE", marginBottom: "2px" }}>{trailer.title}</div>
                <div style={{ fontSize: "10px", color: "#9E8E7E", fontFamily: "'Montserrat', sans-serif" }}>{trailer.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filtres + Tri */}
      <div style={{ padding: "0 16px 14px" }}>
        {/* Filtres catégorie */}
        <div style={{ display: "flex", gap: "7px", overflowX: "auto", marginBottom: "10px", paddingBottom: "2px" }}>
          {filterOptions.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              style={{
                flexShrink: 0,
                padding: "9px 16px",
                background: activeFilter === f.key ? "#C9A96E" : "rgba(201,169,110,0.06)",
                border: activeFilter === f.key ? "1px solid #C9A96E" : "1px solid rgba(201,169,110,0.15)",
                borderRadius: "8px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                color: activeFilter === f.key ? "#0A0806" : "#C9A96E",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              {f.icon} {f.label}
            </button>
          ))}
        </div>

        {/* Tri + résultat */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", color: "#6B5B4E" }}>
            {sortedFiltered.length} programme{sortedFiltered.length > 1 ? "s" : ""}
          </span>
          <button
            onClick={() => setShowSort(true)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              padding: "8px 14px",
              background: "rgba(201,169,110,0.08)",
              border: "1px solid rgba(201,169,110,0.2)",
              borderRadius: "8px",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              color: "#C9A96E",
              cursor: "pointer",
            }}
          >
            {currentSortIcon} {currentSortLabel}
            <span style={{ fontSize: "9px", opacity: 0.6 }}>▼</span>
          </button>
        </div>
      </div>

      {/* Products list */}
      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: "14px" }}>
        {sortedFiltered.map((product) => {
          const trailer = getTrailer(product.trailerId ?? null);
          return (
            <div
              key={product.id}
              style={{
                background: (product as any).featured ? "linear-gradient(135deg, rgba(201,169,110,0.1), rgba(201,169,110,0.03))" : "#1A1714",
                border: (product as any).featured ? "1px solid rgba(201,169,110,0.35)" : "1px solid rgba(201,169,110,0.08)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              {/* Inline video preview */}
              {trailer && (
                <div onClick={() => setModalVideo(trailer.src)} style={{ position: "relative", cursor: "pointer" }}>
                  <video src={trailer.src + "#t=0.5"} muted playsInline preload="metadata" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,8,6,0.7) 0%, transparent 60%)", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "40px", height: "40px", borderRadius: "50%", background: "rgba(201,169,110,0.2)", border: "1.5px solid rgba(201,169,110,0.7)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)", pointerEvents: "none" }}>
                    <div style={{ width: 0, height: 0, borderTop: "7px solid transparent", borderBottom: "7px solid transparent", borderLeft: "12px solid #C9A96E", marginLeft: "2px" }} />
                  </div>
                  <div style={{ position: "absolute", bottom: "8px", left: "10px", padding: "2px 8px", background: `${product.color}22`, border: `1px solid ${product.color}50`, borderRadius: "20px", fontFamily: "'Montserrat', sans-serif", fontSize: "7px", fontWeight: 800, letterSpacing: "1px", color: product.color, textTransform: "uppercase" }}>▶ Aperçu</div>
                </div>
              )}
              {!trailer && <div style={{ height: "2px", background: `linear-gradient(90deg, transparent, ${product.color}, transparent)` }} />}

              <div style={{ padding: "16px" }}>
                {/* Badge */}
                {product.badge && (
                  <div style={{ display: "inline-flex", alignItems: "center", padding: "3px 10px", background: `${product.badgeColor}18`, border: `1px solid ${product.badgeColor}40`, borderRadius: "20px", fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 800, letterSpacing: "1px", color: product.badgeColor, textTransform: "uppercase", marginBottom: "10px" }}>
                    {product.badge}
                  </div>
                )}

                {/* Icon + Title + Popularity */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `${product.color}15`, border: `1px solid ${product.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", flexShrink: 0 }}>{product.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", color: "#FAF6EE", lineHeight: 1.2, marginBottom: "2px" }}>{product.title}</div>
                    <div style={{ fontSize: "10px", color: product.color, fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>{product.subtitle}</div>
                    <div style={{ fontSize: "9px", color: "#4A3E35", marginTop: "2px" }}>Publié le {formatDate(product.publishedAt)}</div>
                  </div>
                  {/* Popularity mini-bar */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "3px", flexShrink: 0 }}>
                    <div style={{ display: "flex", gap: "2px" }}>
                      {[1,2,3,4,5].map((i) => (
                        <div key={i} style={{ width: "5px", height: "5px", borderRadius: "1px", background: i <= Math.round(product.popularity / 20) ? product.color : "rgba(201,169,110,0.12)" }} />
                      ))}
                    </div>
                    <div style={{ fontSize: "8px", color: "#6B5B4E", fontFamily: "'Montserrat', sans-serif" }}>{product.popularity}%</div>
                  </div>
                </div>

                {/* Includes */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px", marginBottom: "12px" }}>
                  {product.includes.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: product.color, flexShrink: 0 }} />
                      <span style={{ fontSize: "9px", color: "#9E8E7E" }}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div style={{ paddingTop: "12px", borderTop: "1px solid rgba(201,169,110,0.08)" }}>
                  <button
                    onClick={() => handleOrder(product)}
                    style={{ width: "100%", padding: "12px 16px", background: (product as any).featured ? "#C9A96E" : `${product.color}18`, border: `1px solid ${product.color}50`, borderRadius: "10px", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", color: (product as any).featured ? "#0A0806" : product.color, cursor: "pointer" }}
                  >
                    Nous Contacter →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom info */}
      <div style={{ margin: "20px 16px 0", padding: "16px", background: "rgba(201,169,110,0.04)", border: "1px solid rgba(201,169,110,0.1)", borderRadius: "14px" }}>
        <div style={{ fontSize: "11px", fontWeight: 700, color: "#C9A96E", marginBottom: "10px", fontFamily: "'Montserrat', sans-serif" }}>Informations de livraison</div>
        {[
          { icon: "⚡", text: "Livraison immédiate par WhatsApp" },
          { icon: "🔒", text: "Paiement sécurisé — Wave / Orange Money" },
          { icon: "♾️", text: "Accès illimité à vie" },
          { icon: "🌍", text: "Disponible partout dans le monde" },
        ].map((item) => (
          <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "7px" }}>
            <span style={{ fontSize: "14px" }}>{item.icon}</span>
            <span style={{ fontSize: "11px", color: "#8A7E70" }}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
