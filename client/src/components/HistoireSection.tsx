/* ============================================================
   HFM — Section Mon Histoire (Coach Mimi)
   Design: Dark Luxury Performance · Noir #0A0806 + Or #C9A96E
   ============================================================ */
import { useEffect } from "react";

const timeline = [
  {
    year: "1987",
    age: "",
    title: "Naissance",
    text: "Miriana naît le 20 septembre 1987 à Abidjan, dans une famille profondément religieuse. Une enfance structurée par des règles strictes, loin de la liberté qu'elle cherchera toute sa vie.",
    icon: "🌟",
  },
  {
    year: "2000",
    age: "13 ans",
    title: "L'école, c'est fini",
    text: "À 13 ans, elle quitte l'école. Pas par manque d'intelligence — mais parce que la vie l'appelle autrement. Elle apprendra tout ce qui compte dans la vraie vie.",
    icon: "📚",
  },
  {
    year: "2005",
    age: "18 ans",
    title: "Premier mariage. Première fille.",
    text: "Elle se marie à 18 ans. Une fille naît. Mais le bonheur qu'on lui a promis ne ressemble pas à ce qu'elle ressent. Le mariage se termine. Elle se retrouve seule, mère, à 18 ans.",
    icon: "👶",
  },
  {
    year: "2006",
    age: "19 ans",
    title: "La rupture avec la famille",
    text: "À 19 ans, elle prend la décision la plus difficile de sa vie : quitter sa famille. Ils n'acceptent pas ses choix. Elle part seule, sans filet, sans diplôme. Juste sa volonté.",
    icon: "🚪",
  },
  {
    year: "2007",
    age: "20 ans",
    title: "Barmaid — et elle adore ça",
    text: "Elle devient barmaid. Ce n'est pas un pis-aller — c'est sa passion. Le contact humain, l'énergie de la nuit, la liberté. Elle s'épanouit là où personne ne l'attendait.",
    icon: "🍹",
  },
  {
    year: "2017",
    age: "30 ans",
    title: "Deuxième mariage. Deux autres filles.",
    text: "Elle se remarie. Deux autres filles naissent. Trois enfants, une famille reconstituée. Elle essaie encore de trouver sa place dans le schéma qu'on lui a toujours proposé.",
    icon: "👨‍👩‍👧‍👧",
  },
  {
    year: "2022",
    age: "35 ans",
    title: "Deuxième divorce. Le vrai départ.",
    text: "Le deuxième mariage prend fin. Trois filles, zéro diplôme, zéro plan B. C'est là que tout commence vraiment. Elle décide que sa joie ne viendra pas d'un homme — elle viendra d'elle-même.",
    icon: "💔",
    highlight: true,
  },
  {
    year: "2022–2024",
    age: "35–37 ans",
    title: "Le sport comme révélation",
    text: "Elle se jette dans le fitness. Pas pour un corps parfait, pas pour des abdos. Pour le bien-être, pour vieillir en force, pour se sentir vivante. Elle passe ses certifications internationales une à une — Master Functional Trainer, Les Mills, Pilates.",
    icon: "💪",
    highlight: true,
  },
  {
    year: "2024",
    age: "37 ans",
    title: "HFM est né",
    text: "Holistique Fonctionnelle Méthode. Sa méthode, ses règles, son nom. Zéro machine, maximum 6 personnes par séance, 100% poids du corps. HFM, c'est elle — et elle n'a jamais été aussi libre.",
    icon: "🔥",
    highlight: true,
  },
];

export default function HistoireSection() {
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

  return (
    <section
      id="histoire"
      style={{
        background: "#0D0B08",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,169,110,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 40px", position: "relative" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div className="section-label reveal">Coach Mimi · Née le 20 septembre 1987</div>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 500,
              color: "#FAF6EE",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Mon <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Histoire</em>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(16px, 2vw, 22px)",
              fontStyle: "italic",
              color: "#D4BC8B",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            "Je n'ai pas commencé le sport pour avoir un beau corps. J'ai commencé pour survivre. Et j'ai trouvé ma joie."
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.3) 10%, rgba(201,169,110,0.3) 90%, transparent)",
              transform: "translateX(-50%)",
            }}
          />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={item.year}
                className={`reveal reveal-delay-${(i % 4) + 1}`}
                style={{
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  marginBottom: "48px",
                  position: "relative",
                }}
              >
                {/* Center dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "20px",
                    transform: "translate(-50%, -50%)",
                    width: item.highlight ? "16px" : "10px",
                    height: item.highlight ? "16px" : "10px",
                    borderRadius: "50%",
                    background: item.highlight ? "#C9A96E" : "rgba(201,169,110,0.4)",
                    boxShadow: item.highlight ? "0 0 20px rgba(201,169,110,0.5)" : "none",
                    zIndex: 2,
                  }}
                />

                {/* Card */}
                <div
                  style={{
                    width: "44%",
                    background: item.highlight
                      ? "linear-gradient(135deg, rgba(201,169,110,0.1), rgba(201,169,110,0.04))"
                      : "#1A1714",
                    border: `1px solid ${item.highlight ? "rgba(201,169,110,0.25)" : "rgba(201,169,110,0.08)"}`,
                    borderRadius: "16px",
                    padding: "24px 22px",
                    marginLeft: isLeft ? "0" : "auto",
                    marginRight: isLeft ? "auto" : "0",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <span style={{ fontSize: "20px" }}>{item.icon}</span>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "9px",
                          fontWeight: 700,
                          letterSpacing: "2px",
                          color: "#C9A96E",
                          textTransform: "uppercase",
                        }}
                      >
                        {item.year}{item.age ? ` · ${item.age}` : ""}
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "18px",
                          fontWeight: 600,
                          color: "#FAF6EE",
                          marginTop: "2px",
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "15px",
                      color: "#9E8E7E",
                      lineHeight: 1.75,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Conclusion */}
        <div
          className="reveal"
          style={{
            marginTop: "60px",
            padding: "40px",
            background: "linear-gradient(135deg, rgba(201,169,110,0.08), rgba(201,169,110,0.03))",
            border: "1px solid rgba(201,169,110,0.2)",
            borderRadius: "24px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "32px", marginBottom: "16px" }}>👩‍👧‍👧</div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(18px, 2.5vw, 26px)",
              fontStyle: "italic",
              color: "#FAF6EE",
              lineHeight: 1.7,
              marginBottom: "16px",
            }}
          >
            "Trois filles, deux divorces, zéro diplôme, zéro machine.<br />
            Et la femme la plus libre que j'aie jamais été."
          </p>
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "2px",
              color: "#C9A96E",
              textTransform: "uppercase",
            }}
          >
            — Miriana Attie, Coach Mimi · Fondatrice HFM
          </div>
        </div>

      </div>
    </section>
  );
}
