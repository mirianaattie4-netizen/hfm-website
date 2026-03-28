/* ============================================================
   HFM DigitalSection — Programmes Numériques
   Tri : popularité · prix ↑↓ · date de publication
   Design: Dark Luxury Performance
   Palette: #0A0806 (bg) + #C9A96E (gold) + #FAF6EE (cream)
   ============================================================ */
import { useState, useMemo } from "react";

const VIDEO_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/hfm-video-1_00d2c3f6.mp4";
const VIDEO_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663442254125/DMEvWf4AdGktbnpQDKsJSQ/hfm-video-2_17bbceab.mp4";

type FilterKey = "tous" | "pdf" | "video" | "pack";
type SortKey = "popularite" | "prix-asc" | "prix-desc" | "date-desc" | "date-asc";

const trailers = [
  { id: "trailer-1", src: VIDEO_1, title: "Séance HIIT Express — Coach Mimi", subtitle: "Aperçu · Programme HIIT 30 Jours", tag: "HIIT", tagColor: "#C9A96E" },
  { id: "trailer-2", src: VIDEO_2, title: "Pilates au Sol — Méthode HFM", subtitle: "Aperçu · Guide Pilates Complet", tag: "PILATES", tagColor: "#6B9E78" },
];

const allProducts = [
  {
    id: "video-hiit",
    filter: "video" as FilterKey,
    icon: "🎬",
    badge: "POPULAIRE",
    badgeColor: "#5B8DEF",
    title: "Séance HIIT Express — 20 min",
    subtitle: "Vidéo HD · Coaching avec Coach Mimi",
    description: "Une séance HIIT complète de 20 minutes filmée par Coach Mimi. Échauffement, circuit intense et retour au calme. Accessible partout, sans matériel.",
    includes: ["Vidéo HD 20 minutes", "Coaching vocal Coach Mimi", "Fiche exercices PDF incluse", "Accès illimité"],
    price: 8000,
    priceLabel: "8 000 F",
    priceEur: "≈ 12 €",
    format: "MP4 · HD 1080p",
    color: "#5B8DEF",
    trailerId: "trailer-1",
    popularity: 95,
    publishedAt: new Date("2026-01-10"),
  },
  {
    id: "plan-hiit",
    filter: "pdf" as FilterKey,
    icon: "📄",
    badge: "BESTSELLER",
    badgeColor: "#C9A96E",
    title: "Plan HIIT 30 Jours",
    subtitle: "Programme complet bodyweight",
    description: "30 jours de séances HIIT progressives, 100% poids du corps. Inclut le calendrier hebdomadaire, les fiches d'exercices illustrées et le suivi de progression.",
    includes: ["30 séances détaillées", "Fiches exercices illustrées", "Calendrier hebdomadaire", "Suivi de progression"],
    price: 15000,
    priceLabel: "15 000 F",
    priceEur: "≈ 23 €",
    format: "PDF · 42 pages",
    color: "#C9A96E",
    trailerId: "trailer-1",
    popularity: 88,
    publishedAt: new Date("2026-01-15"),
  },
  {
    id: "plan-pilates",
    filter: "pdf" as FilterKey,
    icon: "📄",
    badge: "NOUVEAU",
    badgeColor: "#6B9E78",
    title: "Guide Pilates au Sol",
    subtitle: "Méthode HFM — Niveau débutant à avancé",
    description: "Le guide complet de la méthode Pilates au sol de Coach Mimi. Postures, respirations, enchaînements et conseils pour progresser à votre rythme.",
    includes: ["50 exercices Pilates", "3 niveaux de difficulté", "Conseils nutrition", "Programme 8 semaines"],
    price: 12000,
    priceLabel: "12 000 F",
    priceEur: "≈ 18 €",
    format: "PDF · 58 pages",
    color: "#6B9E78",
    trailerId: "trailer-2",
    popularity: 76,
    publishedAt: new Date("2026-02-20"),
  },
  {
    id: "video-pilates",
    filter: "video" as FilterKey,
    icon: "🎬",
    badge: null,
    badgeColor: "",
    title: "Pilates Sunset — 45 min",
    subtitle: "Séance complète · Niveau intermédiaire",
    description: "La séance Pilates au sol signature de Coach Mimi. 45 minutes de fluidité, gainage profond et mobilité. Idéale en fin de journée pour décompresser.",
    includes: ["Vidéo HD 45 minutes", "Coaching vocal Coach Mimi", "Programme 4 semaines PDF", "Accès illimité"],
    price: 10000,
    priceLabel: "10 000 F",
    priceEur: "≈ 15 €",
    format: "MP4 · HD 1080p",
    color: "#C45B4A",
    trailerId: "trailer-2",
    popularity: 70,
    publishedAt: new Date("2026-02-28"),
  },
  {
    id: "plan-nutrition",
    filter: "pdf" as FilterKey,
    icon: "🥗",
    badge: null,
    badgeColor: "",
    title: "Guide Nutrition Fonctionnelle",
    subtitle: "Alimentation saine · Côte d'Ivoire",
    description: "Un guide nutritionnel adapté aux produits locaux ivoiriens. Recettes équilibrées, plan alimentaire sur 4 semaines et conseils anti-inflammation.",
    includes: ["Plan alimentaire 4 semaines", "30 recettes locales", "Liste de courses", "Conseils hydratation"],
    price: 10000,
    priceLabel: "10 000 F",
    priceEur: "≈ 15 €",
    format: "PDF · 36 pages",
    color: "#D4A017",
    trailerId: null,
    popularity: 62,
    publishedAt: new Date("2026-03-05"),
  },
  {
    id: "pack-complet",
    filter: "pack" as FilterKey,
    icon: "💎",
    badge: "MEILLEURE VALEUR",
    badgeColor: "#C9A96E",
    title: "Pack Digital Complet HFM",
    subtitle: "Tous les programmes + 1 mois de suivi WhatsApp",
    description: "L'intégralité des programmes digitaux HFM en un seul pack premium. Inclut tous les PDF, toutes les vidéos et 1 mois de suivi personnalisé par WhatsApp avec Coach Mimi.",
    includes: ["5 programmes PDF + vidéos", "1 mois suivi WhatsApp Coach Mimi", "Bilan initial personnalisé", "Mises à jour gratuites à vie"],
    price: 45000,
    priceLabel: "45 000 F",
    priceEur: "≈ 69 €",
    format: "Accès immédiat · Tout inclus",
    color: "#C9A96E",
    featured: true,
    trailerId: null,
    popularity: 99,
    publishedAt: new Date("2026-01-01"),
  },
];

const sortOptions: { key: SortKey; label: string; icon: string }[] = [
  { key: "popularite", label: "Popularité", icon: "🔥" },
  { key: "prix-asc", label: "Prix ↑", icon: "💰" },
  { key: "prix-desc", label: "Prix ↓", icon: "💎" },
  { key: "date-desc", label: "Plus récent", icon: "🆕" },
  { key: "date-asc", label: "Plus ancien", icon: "📅" },
];

const filterOptions: { key: FilterKey; label: string; icon: string }[] = [
  { key: "tous", label: "Tous", icon: "✨" },
  { key: "pdf", label: "PDF", icon: "📄" },
  { key: "video", label: "Vidéos", icon: "🎬" },
  { key: "pack", label: "Pack", icon: "💎" },
];

export default function DigitalSection() {
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterKey>("tous");
  const [activeSort, setActiveSort] = useState<SortKey>("popularite");

  const sortedFiltered = useMemo(() => {
    let list = activeFilter === "tous" ? [...allProducts] : allProducts.filter((p) => p.filter === activeFilter);
    switch (activeSort) {
      case "popularite":   list.sort((a, b) => b.popularity - a.popularity); break;
      case "prix-asc":     list.sort((a, b) => a.price - b.price); break;
      case "prix-desc":    list.sort((a, b) => b.price - a.price); break;
      case "date-desc":    list.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()); break;
      case "date-asc":     list.sort((a, b) => a.publishedAt.getTime() - b.publishedAt.getTime()); break;
    }
    return list;
  }, [activeFilter, activeSort]);

  const handleOrder = (product: typeof allProducts[0]) => {
    const msg = encodeURIComponent(
      `Bonjour Coach Mimi ! Je souhaite commander le programme digital "${product.title}" (${product.priceLabel}). Pouvez-vous m'envoyer les détails de paiement ?`
    );
    window.open(`https://wa.me/2250715151408?text=${msg}`, "_blank");
  };

  const getTrailer = (id: string | null) => id ? trailers.find((t) => t.id === id) ?? null : null;

  const formatDate = (d: Date) =>
    d.toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });

  return (
    <section
      id="digital"
      style={{ background: "linear-gradient(180deg, #0A0806 0%, #0F0D0A 50%, #0A0806 100%)", padding: "120px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Background glows */}
      <div style={{ position: "absolute", top: "10%", right: "-200px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "-200px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(91,141,239,0.03) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Video Modal */}
      {modalVideo && (
        <div onClick={() => setModalVideo(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", backdropFilter: "blur(8px)" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: "900px", position: "relative", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(201,169,110,0.2)", boxShadow: "0 40px 100px rgba(0,0,0,0.8)" }}>
            <video src={modalVideo} controls autoPlay playsInline style={{ width: "100%", display: "block", background: "#000", maxHeight: "80vh" }} />
            <button onClick={() => setModalVideo(null)} style={{ position: "absolute", top: "12px", right: "12px", width: "36px", height: "36px", borderRadius: "50%", background: "rgba(10,8,6,0.85)", border: "1px solid rgba(201,169,110,0.3)", color: "#FAF6EE", fontSize: "16px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>✕</button>
          </div>
        </div>
      )}

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "40px", background: "rgba(201,169,110,0.4)" }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "3px", color: "#C9A96E", textTransform: "uppercase" }}>Accès Immédiat · Partout dans le Monde</span>
            <div style={{ height: "1px", width: "40px", background: "rgba(201,169,110,0.4)" }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400, color: "#FAF6EE", lineHeight: 1.1, marginBottom: "24px" }}>
            Programmes <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Digitaux</em>
          </h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#9E8E7E", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
            La méthode HFM accessible depuis chez vous. PDF téléchargeables, vidéos HD et plans d'entraînement conçus par Coach Mimi.
          </p>
        </div>

        {/* ── BANDES-ANNONCES ── */}
        <div style={{ marginBottom: "72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
            <div style={{ height: "1px", flex: 1, background: "rgba(201,169,110,0.1)" }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", color: "#C9A96E", textTransform: "uppercase", whiteSpace: "nowrap" }}>🎬 Bandes-Annonces</span>
            <div style={{ height: "1px", flex: 1, background: "rgba(201,169,110,0.1)" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="trailers-grid">
            {trailers.map((trailer) => (
              <div key={trailer.id} style={{ position: "relative", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(201,169,110,0.12)", background: "#0D0B08", cursor: "pointer" }} onClick={() => setModalVideo(trailer.src)}>
                <video src={trailer.src + "#t=0.5"} muted playsInline preload="metadata" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }} onMouseEnter={(e) => { (e.currentTarget as HTMLVideoElement).play(); }} onMouseLeave={(e) => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0.5; }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,8,6,0.85) 0%, rgba(10,8,6,0.1) 50%, transparent 100%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "64px", height: "64px", borderRadius: "50%", background: "rgba(201,169,110,0.15)", border: "2px solid rgba(201,169,110,0.6)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)", pointerEvents: "none" }}>
                  <div style={{ width: 0, height: 0, borderTop: "12px solid transparent", borderBottom: "12px solid transparent", borderLeft: "20px solid #C9A96E", marginLeft: "4px" }} />
                </div>
                <div style={{ position: "absolute", top: "14px", left: "14px", padding: "4px 12px", background: `${trailer.tagColor}22`, border: `1px solid ${trailer.tagColor}60`, borderRadius: "20px", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 800, letterSpacing: "1.5px", color: trailer.tagColor, textTransform: "uppercase", backdropFilter: "blur(4px)" }}>{trailer.tag}</div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 18px" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", color: "#FAF6EE", marginBottom: "3px" }}>{trailer.title}</div>
                  <div style={{ fontSize: "11px", color: "#9E8E7E", fontFamily: "'Montserrat', sans-serif" }}>{trailer.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FILTRES + TRI ── */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "20px", marginBottom: "36px", flexWrap: "wrap" }}>

          {/* Filtres par catégorie */}
          <div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: "#6B5B4E", textTransform: "uppercase", marginBottom: "10px" }}>Catégorie</div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {filterOptions.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  style={{
                    padding: "9px 18px",
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
                    gap: "6px",
                    transition: "all 0.2s",
                  }}
                >
                  {f.icon} {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tri */}
          <div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: "#6B5B4E", textTransform: "uppercase", marginBottom: "10px" }}>Trier par</div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {sortOptions.map((s) => (
                <button
                  key={s.key}
                  onClick={() => setActiveSort(s.key)}
                  style={{
                    padding: "9px 16px",
                    background: activeSort === s.key ? "rgba(201,169,110,0.15)" : "transparent",
                    border: activeSort === s.key ? "1px solid rgba(201,169,110,0.5)" : "1px solid rgba(201,169,110,0.12)",
                    borderRadius: "8px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "10px",
                    fontWeight: activeSort === s.key ? 700 : 500,
                    color: activeSort === s.key ? "#C9A96E" : "#6B5B4E",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "all 0.2s",
                  }}
                >
                  {s.icon} {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Résultat count */}
        <div style={{ marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: "#6B5B4E" }}>
            {sortedFiltered.length} programme{sortedFiltered.length > 1 ? "s" : ""} — trié par{" "}
            <span style={{ color: "#C9A96E", fontWeight: 700 }}>{sortOptions.find(s => s.key === activeSort)?.label}</span>
          </span>
        </div>

        {/* ── PRODUCTS GRID ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="digital-grid">
          {sortedFiltered.map((product) => {
            const trailer = getTrailer(product.trailerId ?? null);
            return (
              <div
                key={product.id}
                style={{
                  background: (product as any).featured ? "linear-gradient(135deg, rgba(201,169,110,0.12), rgba(201,169,110,0.04))" : "#111009",
                  border: (product as any).featured ? "1px solid rgba(201,169,110,0.4)" : "1px solid rgba(201,169,110,0.08)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = (product as any).featured ? "0 20px 60px rgba(201,169,110,0.15)" : "0 20px 40px rgba(0,0,0,0.4)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                {/* Inline video preview */}
                {trailer && (
                  <div style={{ position: "relative", cursor: "pointer" }} onClick={() => setModalVideo(trailer.src)}>
                    <video src={trailer.src + "#t=0.5"} muted playsInline preload="metadata" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }} onMouseEnter={(e) => { (e.currentTarget as HTMLVideoElement).play(); }} onMouseLeave={(e) => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0.5; }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,8,6,0.6) 0%, transparent 60%)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "44px", height: "44px", borderRadius: "50%", background: "rgba(201,169,110,0.2)", border: "1.5px solid rgba(201,169,110,0.7)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)", pointerEvents: "none" }}>
                      <div style={{ width: 0, height: 0, borderTop: "8px solid transparent", borderBottom: "8px solid transparent", borderLeft: "14px solid #C9A96E", marginLeft: "3px" }} />
                    </div>
                    <div style={{ position: "absolute", bottom: "10px", left: "12px", padding: "3px 10px", background: `${product.color}22`, border: `1px solid ${product.color}50`, borderRadius: "20px", fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 800, letterSpacing: "1px", color: product.color, textTransform: "uppercase" }}>▶ Aperçu</div>
                  </div>
                )}
                {!trailer && <div style={{ height: "2px", background: `linear-gradient(90deg, transparent, ${product.color}, transparent)` }} />}

                <div style={{ padding: "22px" }}>
                  {/* Badge */}
                  {product.badge ? (
                    <div style={{ display: "inline-flex", alignItems: "center", padding: "4px 12px", background: `${product.badgeColor}18`, border: `1px solid ${product.badgeColor}40`, borderRadius: "20px", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 800, letterSpacing: "1.5px", color: product.badgeColor, textTransform: "uppercase", marginBottom: "14px" }}>{product.badge}</div>
                  ) : (
                    <div style={{ height: "29px", marginBottom: "14px" }} />
                  )}

                  {/* Type + Icon */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                    <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: `${product.color}15`, border: `1px solid ${product.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>{product.icon}</div>
                    <div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: product.color, textTransform: "uppercase", marginBottom: "2px" }}>{product.filter.toUpperCase()}</div>
                      <div style={{ fontSize: "10px", color: "#6B5B4E" }}>{product.format}</div>
                    </div>
                    {/* Popularité badge */}
                    <div style={{ marginLeft: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "3px" }}>
                      <div style={{ display: "flex", gap: "2px" }}>
                        {[1,2,3,4,5].map((i) => (
                          <div key={i} style={{ width: "6px", height: "6px", borderRadius: "1px", background: i <= Math.round(product.popularity / 20) ? product.color : "rgba(201,169,110,0.12)" }} />
                        ))}
                      </div>
                      <div style={{ fontSize: "9px", color: "#6B5B4E", fontFamily: "'Montserrat', sans-serif" }}>{product.popularity}% pop.</div>
                    </div>
                  </div>

                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "19px", fontWeight: 500, color: "#FAF6EE", marginBottom: "5px", lineHeight: 1.2 }}>{product.title}</h3>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", color: product.color, fontWeight: 600, letterSpacing: "0.5px", marginBottom: "10px" }}>{product.subtitle}</p>
                  <p style={{ fontSize: "12px", color: "#8A7E70", lineHeight: 1.7, marginBottom: "16px" }}>{product.description}</p>

                  {/* Includes */}
                  <div style={{ marginBottom: "16px" }}>
                    {product.includes.map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                        <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: `${product.color}20`, border: `1px solid ${product.color}50`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: product.color }} />
                        </div>
                        <span style={{ fontSize: "11px", color: "#9E8E7E" }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Date publiée */}
                  <div style={{ fontSize: "10px", color: "#4A3E35", marginBottom: "14px", fontFamily: "'Montserrat', sans-serif" }}>
                    Publié le {formatDate(product.publishedAt)}
                  </div>

                  <div style={{ height: "1px", background: "rgba(201,169,110,0.08)", marginBottom: "16px" }} />

                  {/* Price + CTA */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                    <div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: product.color, lineHeight: 1 }}>{product.priceLabel}</div>
                      <div style={{ fontSize: "11px", color: "#6B5B4E", marginTop: "2px" }}>{product.priceEur}</div>
                    </div>
                    <button
                      onClick={() => handleOrder(product)}
                      style={{ padding: "11px 16px", background: (product as any).featured ? "#C9A96E" : `${product.color}18`, border: `1px solid ${product.color}50`, borderRadius: "10px", fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", color: (product as any).featured ? "#0A0806" : product.color, cursor: "pointer", transition: "all 0.3s", whiteSpace: "nowrap" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = (product as any).featured ? "#D4B87A" : `${product.color}30`; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = (product as any).featured ? "#C9A96E" : `${product.color}18`; }}
                    >
                      Commander →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div style={{ marginTop: "60px", padding: "32px 40px", background: "rgba(201,169,110,0.04)", border: "1px solid rgba(201,169,110,0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "30px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
            {[
              { icon: "⚡", text: "Livraison immédiate par WhatsApp" },
              { icon: "🔒", text: "Paiement sécurisé — Wave / Orange Money" },
              { icon: "♾️", text: "Accès illimité à vie" },
              { icon: "🌍", text: "Disponible partout dans le monde" },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "18px" }}>{item.icon}</span>
                <span style={{ fontSize: "12px", color: "#8A7E70" }}>{item.text}</span>
              </div>
            ))}
          </div>
          <a href="https://wa.me/2250715151408?text=Bonjour%20Coach%20Mimi%20!%20Je%20souhaite%20en%20savoir%20plus%20sur%20vos%20programmes%20digitaux." target="_blank" rel="noopener noreferrer" style={{ padding: "14px 28px", background: "#C9A96E", borderRadius: "8px", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", color: "#0A0806", textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}>
            📱 Nous Contacter
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .digital-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .trailers-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .digital-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
