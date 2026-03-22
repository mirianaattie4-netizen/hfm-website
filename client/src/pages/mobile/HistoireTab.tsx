/* ============================================================
   HFM PWA — Onglet Mon Histoire (Coach Mimi)
   ============================================================ */

const timeline = [
  {
    year: "1987",
    age: "Naissance",
    text: "Miriana naît le 20 septembre 1987 à Abidjan, dans une famille profondément religieuse.",
    icon: "🌟",
  },
  {
    year: "13 ans",
    age: "L'école, c'est fini",
    text: "Elle quitte l'école à 13 ans. Pas par manque d'intelligence — parce que la vie l'appelle autrement.",
    icon: "📚",
  },
  {
    year: "18 ans",
    age: "Premier mariage",
    text: "Mariée à 18 ans. Sa première fille naît. Le mariage ne dure pas. Elle se retrouve seule, mère, à 18 ans.",
    icon: "👶",
  },
  {
    year: "19 ans",
    age: "La rupture",
    text: "Elle quitte sa famille qui n'accepte pas ses choix. Seule, sans diplôme, sans filet. Juste sa volonté.",
    icon: "🚪",
  },
  {
    year: "20 ans",
    age: "Barmaid — sa passion",
    text: "Elle devient barmaid. Le contact humain, l'énergie, la liberté. Elle s'épanouit là où personne ne l'attendait.",
    icon: "🍹",
  },
  {
    year: "30 ans",
    age: "Deuxième mariage",
    text: "Elle se remarie. Deux autres filles naissent. Trois enfants. Elle essaie encore de trouver sa place.",
    icon: "👨‍👩‍👧‍👧",
  },
  {
    year: "35 ans",
    age: "Deuxième divorce. Le vrai départ.",
    text: "Le deuxième mariage prend fin. Trois filles, zéro diplôme. Elle décide que sa joie ne viendra pas d'un homme — elle viendra d'elle-même.",
    icon: "💔",
    highlight: true,
  },
  {
    year: "35–37 ans",
    age: "Le sport comme révélation",
    text: "Elle se jette dans le fitness. Pas pour un corps parfait — pour le bien-être, pour vieillir en force. Elle passe ses certifications internationales une à une.",
    icon: "💪",
    highlight: true,
  },
  {
    year: "2024",
    age: "HFM est né",
    text: "Holistique Fonctionnelle Méthode. Sa méthode, ses règles, son nom. Zéro machine, max 6 personnes, 100% poids du corps.",
    icon: "🔥",
    highlight: true,
  },
];

export default function HistoireTab() {
  return (
    <div style={{ paddingBottom: "20px" }}>
      {/* Header */}
      <div
        style={{
          padding: "24px 16px 20px",
          background: "linear-gradient(180deg, #12100C 0%, #0A0806 100%)",
          textAlign: "center",
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
          Née le 20 septembre 1987
        </div>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "28px",
            fontWeight: 500,
            color: "#FAF6EE",
            marginBottom: "12px",
          }}
        >
          Mon <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Histoire</em>
        </h2>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "15px",
            fontStyle: "italic",
            color: "#D4BC8B",
            lineHeight: 1.6,
            padding: "0 10px",
          }}
        >
          "Je n'ai pas commencé le sport pour avoir un beau corps. J'ai commencé pour survivre. Et j'ai trouvé ma joie."
        </p>
      </div>

      {/* Timeline */}
      <div style={{ padding: "16px" }}>
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "20px",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.3) 5%, rgba(201,169,110,0.3) 95%, transparent)",
            }}
          />

          {timeline.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "16px",
                marginBottom: "16px",
                position: "relative",
              }}
            >
              {/* Dot */}
              <div
                style={{
                  flexShrink: 0,
                  width: "40px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: "14px",
                }}
              >
                <div
                  style={{
                    width: item.highlight ? "14px" : "8px",
                    height: item.highlight ? "14px" : "8px",
                    borderRadius: "50%",
                    background: item.highlight ? "#C9A96E" : "rgba(201,169,110,0.35)",
                    boxShadow: item.highlight ? "0 0 12px rgba(201,169,110,0.5)" : "none",
                    zIndex: 2,
                    position: "relative",
                  }}
                />
              </div>

              {/* Card */}
              <div
                style={{
                  flex: 1,
                  background: item.highlight ? "rgba(201,169,110,0.07)" : "#1A1714",
                  border: item.highlight ? "1px solid rgba(201,169,110,0.2)" : "1px solid rgba(201,169,110,0.06)",
                  borderRadius: "14px",
                  padding: "14px 14px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <span style={{ fontSize: "16px" }}>{item.icon}</span>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "1.5px",
                        color: "#C9A96E",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.year}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#FAF6EE",
                      }}
                    >
                      {item.age}
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "14px",
                    color: "#9E8E7E",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div
          style={{
            marginTop: "8px",
            padding: "20px 16px",
            background: "linear-gradient(135deg, rgba(201,169,110,0.08), rgba(201,169,110,0.03))",
            border: "1px solid rgba(201,169,110,0.2)",
            borderRadius: "16px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "28px", marginBottom: "12px" }}>👩‍👧‍👧</div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "16px",
              fontStyle: "italic",
              color: "#FAF6EE",
              lineHeight: 1.7,
              marginBottom: "12px",
            }}
          >
            "Trois filles, deux divorces, zéro diplôme, zéro machine. Et la femme la plus libre que j'aie jamais été."
          </p>
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              color: "#C9A96E",
              textTransform: "uppercase",
            }}
          >
            — Miriana Attie · Coach Mimi · Fondatrice HFM
          </div>
        </div>
      </div>
    </div>
  );
}
