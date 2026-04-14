/* ============================================================
   HFM PWA — Onglet Programmes Digitaux
   Tri : popularité · date de publication
   Design: Dark Luxury Performance · Mobile First
   ============================================================ */
import { useState, useMemo } from "react";

type FilterKey = "tous" | "pdf" | "video" | "pack";
type SortKey = "popularite" | "date-desc" | "date-asc";

const allProducts = [
  {
    id: "plan-hiit",
    filter: "pdf" as FilterKey,
    icon: "📄",
    badge: "BESTSELLER",
    badgeColor: "#C9A96E",
    title: "Plan HIIT 30 Jours",
    subtitle: "Programme complet bodyweight",
    format: "PDF · 42 pages",
    color: "#C9A96E",
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
    color: "#6B9E78",
    popularity: 76,
    publishedAt: new Date("2026-02-20"),
    includes: ["50 exercices Pilates", "3 niveaux de difficulté", "Conseils nutrition", "Programme 8 semaines"],
  },
  {
    id: "video-hiit",
    filter: "video" as FilterKey,
    icon: "🎬",
    badge: "POPULAIRE",
    badgeColor: "#5B8DEF",
    title: "Séance HIIT Express",
    subtitle: "20 min · Coaching Coach Mimi",
    format: "MP4 · HD 1080p",
    color: "#5B8DEF",
    popularity: 95,
    publishedAt: new Date("2026-01-10"),
    includes: ["Vidéo HD 20 minutes", "Coaching vocal Coach Mimi", "Fiche exercices PDF incluse", "Accès illimité"],
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
    color: "#C45B4A",
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
    color: "#D4A017",
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
    color: "#C9A96E",
    featured: true,
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

  const handleContact = (product: typeof allProducts[0]) => {
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

      {/* Sort dropdown overlay */}
      {showSort && (
        <div onClick={() => setShowSort(false)} style={{ position: "fixed", inset: 0, zIndex: 8888 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ position: "absolute", bottom: "80px", left: "16px", right: "16px", background: "#1A1714", border: "1px solid rgba(201,169,110,0.2)", borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.7)" }}>
            <div style={{ padding: "14px 16px 10px", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "2px", color: "#6B5B4E", textTransform: "uppercase", borderBottom: "1px solid rgba(201,169,110,0.08)" }}>
              Trier par
            </div>
            {sortOptions.map((s) => (
              <button
                key={s.key}
                onClick={() => { setActiveSort(s.key); setShowSort(false); }}
                style={{ width: "100%", padding: "14px 16px", background: activeSort === s.key ? "rgba(201,169,110,0.1)" : "transparent", border: "none", borderBottom: "1px solid rgba(201,169,110,0.05)", display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}
              >
                <span style={{ fontSize: "16px" }}>{s.icon}</span>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: activeSort === s.key ? 700 : 500, color: activeSort === s.key ? "#C9A96E" : "#9E8E7E" }}>{s.label}</span>
                {activeSort === s.key && <span style={{ marginLeft: "auto", width: "8px", height: "8px", borderRadius: "50%", background: "#C9A96E", flexShrink: 0 }} />}
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

      {/* Filtres */}
      <div style={{ padding: "12px 16px", display: "flex", gap: "8px", overflowX: "auto", borderBottom: "1px solid rgba(201,169,110,0.08)" }}>
        {filterOptions.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            style={{
              padding: "8px 14px",
              background: activeFilter === f.key ? "#C9A96E" : "rgba(201,169,110,0.06)",
              border: activeFilter === f.key ? "1px solid #C9A96E" : "1px solid rgba(201,169,110,0.15)",
              borderRadius: "20px",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              color: activeFilter === f.key ? "#0A0806" : "#C9A96E",
              cursor: "pointer",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            {f.icon} {f.label}
          </button>
        ))}
      </div>

      {/* Tri + count */}
      <div style={{ padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
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

      {/* Products list */}
      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: "14px" }}>
        {sortedFiltered.map((product) => (
          <div
            key={product.id}
            style={{
              background: (product as any).featured ? "linear-gradient(135deg, rgba(201,169,110,0.1), rgba(201,169,110,0.03))" : "#1A1714",
              border: (product as any).featured ? "1px solid rgba(201,169,110,0.35)" : "1px solid rgba(201,169,110,0.08)",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            {/* Top color bar */}
            <div style={{ height: "2px", background: `linear-gradient(90deg, transparent, ${product.color}, transparent)` }} />

            <div style={{ padding: "16px" }}>
              {/* Badge */}
              {product.badge && (
                <div style={{ display: "inline-flex", alignItems: "center", padding: "3px 10px", background: `${product.badgeColor}18`, border: `1px solid ${product.badgeColor}40`, borderRadius: "20px", fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 800, letterSpacing: "1px", color: product.badgeColor, textTransform: "uppercase", marginBottom: "10px" }}>
                  {product.badge}
                </div>
              )}

              {/* Icon + Title + Popularity */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: `${product.color}15`, border: `1px solid ${product.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>{product.icon}</div>
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

              {/* Format */}
              <div style={{ fontSize: "10px", color: "#6B5B4E", marginBottom: "10px", fontFamily: "'Montserrat', sans-serif" }}>{product.format}</div>

              {/* Includes */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px", marginBottom: "14px" }}>
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
                  onClick={() => handleContact(product)}
                  style={{ width: "100%", padding: "12px 16px", background: (product as any).featured ? "#C9A96E" : `${product.color}18`, border: `1px solid ${product.color}50`, borderRadius: "10px", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", color: (product as any).featured ? "#0A0806" : product.color, cursor: "pointer" }}
                >
                  📱 Nous Contacter
                </button>
              </div>
            </div>
          </div>
        ))}
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
