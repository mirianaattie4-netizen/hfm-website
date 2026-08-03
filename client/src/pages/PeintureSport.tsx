/* ============================================================
   HFM × Coach Mimi — Peinture & Sport
   Concept weekend proposé aux hôtels partenaires d'Assinie
   Design: Dark Luxury Performance (aligné sur la charte HFM)
   ============================================================ */
import { useEffect } from "react";

const WHATSAPP = "https://wa.me/2250715151408?text=Bonjour%20Coach%20Mimi%20!%20Je%20repr%C3%A9sente%20un%20h%C3%B4tel%20d%27Assinie%20et%20le%20concept%20Peinture%20%26%20Sport%20m%27int%C3%A9resse.";
const MAILTO = "mailto:hfm2026@outlook.fr?subject=Partenariat%20Peinture%20%26%20Sport";

const apercu = [
  { label: "Pour qui", value: "Hôtes des hôtels d'Assinie" },
  { label: "Quand", value: "Chaque weekend (samedi + dimanche)" },
  { label: "Public", value: "Familles — petits et grands" },
  { label: "Lieu", value: "Espace hôtel (plage / terrasse / salle)" },
];

const peintureTimeline = [
  { time: "18h30 – 19h00", text: "Accueil, installation du matériel, présentation du thème du jour" },
  { time: "19h00 – 20h15", text: "Séance peinture libre / guidée — animée par Coach Mimi, adaptée aux enfants et aux adultes" },
  { time: "20h15 – 20h30", text: "Exposition des œuvres, photo souvenir, ambiance musicale" },
];

const methode = [
  { num: "01", title: "Accueil", text: "Installation du matériel, présentation du thème du jour" },
  { num: "02", title: "Inspiration", text: "Démonstration technique courte, sans jargon, accessible à tous" },
  { num: "03", title: "Création guidée", text: "Peinture libre accompagnée par Coach Mimi, ambiance conviviale" },
  { num: "04", title: "Partage", text: "Exposition des œuvres, photo souvenir, moment de fierté en famille" },
];

const themes = ["Paysage marin", "Portrait express", "Abstrait libre", "Nature morte tropicale"];

const sportTimeline = [
  { time: "09h00 – 09h20", text: "Réveil musculaire & mobilité — échauffement en douceur" },
  { time: "09h20 – 10h00", text: "Circuit fonctionnel & cardio léger — adapté vacanciers, tous niveaux" },
  { time: "10h00 – 10h20", text: "Étirements, respiration, retour au calme face à la mer" },
];

const valeurs = [
  { title: "Séjour en famille valorisé", text: "Une activité commune parents-enfants qui différencie votre offre pour la clientèle familiale." },
  { title: "Occupation & fidélisation", text: "Des animations premium qui augmentent la durée de séjour et le taux de satisfaction." },
  { title: "Image bien-être", text: "Positionnement lifestyle / wellness aligné avec les attentes de la clientèle haut de gamme." },
  { title: "Zéro contrainte logistique", text: "HFM gère coaching, matériel et animation — votre équipe reste disponible pour vos hôtes." },
];

const credentials = [
  "Master Functional Trainer — PT Academy",
  "Coach Les Mills — Physiologie de l'entraînement",
  "Certification Pilates, Modules 1 à 4 (Upskillist)",
  "Formation Inspire Academy",
];

const tarifs = [
  { activite: "Atelier de peinture (samedi soir)", public: "Adulte", prix: "10 000" },
  { activite: "Atelier de peinture (samedi soir)", public: "Enfant", prix: "5 000" },
  { activite: "Session sport (dimanche)", public: "Adulte uniquement", prix: "15 000" },
  { activite: "Pack peinture + sport (les deux activités)", public: "Adulte uniquement", prix: "20 000", highlight: true },
];

const partenariat = [
  { title: "Forfait fixe", text: "Tarif par session négocié avec l'hôtel, facturé mensuellement. Simplicité de gestion pour votre équipe." },
  { title: "Revenue share", text: "Session incluse ou en supplément proposée aux hôtes. Répartition des revenus à définir ensemble (ex. 60/40)." },
  { title: "Pack saisonnier", text: "Engagement sur la saison haute avec calendrier fixe. Tarif préférentiel et visibilité garantie." },
];

function Kicker({ children, gold = true }: { children: React.ReactNode; gold?: boolean }) {
  return (
    <div
      className="section-label reveal"
      style={{ color: gold ? "#C9A96E" : "#8A7E70" }}
    >
      {children}
    </div>
  );
}

export default function PeintureSport() {
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
    <div style={{ background: "#0A0806", minHeight: "100vh" }}>
      {/* Top bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(10,8,6,0.9)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(201,169,110,0.1)",
          padding: "18px 0",
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
            gap: "16px",
          }}
        >
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                background: "linear-gradient(135deg, #A8883F, #C9A96E)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "15px",
                color: "#0A0806",
              }}
            >
              H
            </div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: "13px", letterSpacing: "2px", color: "#FAF6EE" }}>
              HFM <span style={{ color: "#8A7E70", fontWeight: 500 }}>× Coach Mimi</span>
            </div>
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 22px",
              background: "#C9A96E",
              color: "#0A0806",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "6px",
              whiteSpace: "nowrap",
            }}
          >
            Parlons-en
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          minHeight: "88vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          padding: "80px 0",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 20% 20%, rgba(201,169,110,0.08), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative", width: "100%" }}>
          <Kicker>Un nouveau concept weekend</Kicker>
          <h1
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(44px, 8vw, 92px)",
              fontWeight: 500,
              color: "#FAF6EE",
              lineHeight: 1.02,
              margin: "20px 0 0",
            }}
          >
            Peinture
            <br />
            <em style={{ color: "#C9A96E", fontStyle: "italic" }}>& Sport</em>
          </h1>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(18px, 2.4vw, 26px)",
              color: "#8A7E70",
              maxWidth: "680px",
              lineHeight: 1.5,
              margin: "32px 0 0",
            }}
          >
            Une expérience bien-être et créative pour vos hôtes, en partenariat avec les hôtels d'Assinie.
          </p>
          <div
            className="reveal reveal-delay-3"
            style={{
              display: "flex",
              gap: "60px",
              marginTop: "56px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(201,169,110,0.12)",
              maxWidth: "600px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#C9A96E", textTransform: "uppercase" }}>
                Samedi soir
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#FAF6EE", marginTop: "6px" }}>
                Atelier de peinture
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#C9A96E", textTransform: "uppercase" }}>
                Dimanche
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#FAF6EE", marginTop: "6px" }}>
                Session sport
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* En un coup d'œil */}
      <section style={{ padding: "90px 0", background: "#12100C" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <Kicker>Le concept</Kicker>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 500, color: "#FAF6EE", margin: "16px 0 44px" }}
          >
            En un <em style={{ color: "#C9A96E", fontStyle: "italic" }}>coup d'œil</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "30px", marginBottom: "48px" }} className="grid-4">
            {apercu.map((item, i) => (
              <div key={item.label} className={`reveal reveal-delay-${i + 1}`} style={{ borderTop: "2px solid #C9A96E", paddingTop: "18px" }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", color: "#8A7E70", textTransform: "uppercase" }}>
                  {item.label}
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "19px", color: "#FAF6EE", marginTop: "10px", lineHeight: 1.35 }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
          <p className="reveal" style={{ fontSize: "16px", lineHeight: 1.8, color: "#8A7E70", maxWidth: "820px" }}>
            Une soirée créative en famille suivie d'une matinée sportive : deux temps forts qui enrichissent le séjour de vos clients et valorisent l'image bien-être de votre établissement.
          </p>
        </div>
      </section>

      {/* Atelier de peinture — Samedi soir */}
      <section style={{ padding: "90px 0", background: "#0A0806" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <Kicker>Samedi soir</Kicker>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4.5vw, 48px)", fontWeight: 500, color: "#FAF6EE", margin: "16px 0 36px" }}
          >
            Atelier de <em style={{ color: "#C9A96E", fontStyle: "italic" }}>peinture</em>
          </h2>

          <div
            className="reveal reveal-delay-2"
            style={{
              background: "#1A1714",
              borderLeft: "3px solid #C9A96E",
              padding: "30px 36px",
              maxWidth: "900px",
              marginBottom: "32px",
              borderRadius: "0 12px 12px 0",
            }}
          >
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "2px", color: "#C9A96E", textTransform: "uppercase", marginBottom: "12px" }}>
              Le constat
            </div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "20px", lineHeight: 1.55, color: "#FAF6EE", margin: 0 }}>
              « Le soir, les vacanciers n'ont souvent rien à faire : ils restent assis, sans activité. L'atelier peinture leur offre un moment qui détend et occupe l'esprit, sans effort physique. »
            </p>
          </div>

          <p className="reveal reveal-delay-3" style={{ fontSize: "15px", lineHeight: 1.7, color: "#8A7E70", maxWidth: "780px", marginBottom: "40px" }}>
            Grands &amp; Petits — un moment créatif en famille, sur la terrasse ou face à la mer, pour clôturer la journée en douceur.
          </p>

          <div style={{ display: "flex", borderTop: "1px solid rgba(201,169,110,0.12)" }} className="timeline-row">
            {peintureTimeline.map((step, i) => (
              <div
                key={step.time}
                style={{
                  flex: 1,
                  padding: "24px 24px 0 0",
                  borderLeft: i > 0 ? "1px solid rgba(201,169,110,0.12)" : "none",
                  paddingLeft: i > 0 ? "24px" : 0,
                }}
              >
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 700, color: "#C9A96E" }}>{step.time}</div>
                <div style={{ fontSize: "14px", color: "#FAF6EE", marginTop: "10px", lineHeight: 1.5 }}>{step.text}</div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "16px", color: "#8A7E70", marginTop: "32px" }}>
            Format art-thérapie : aucune compétence requise, encadrement bienveillant, matériel premium fourni.
          </p>
        </div>
      </section>

      {/* Comment ça se déroule */}
      <section style={{ padding: "90px 0", background: "#12100C" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <Kicker>Notre méthode</Kicker>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 500, color: "#FAF6EE", margin: "16px 0 44px" }}
          >
            Comment ça se <em style={{ color: "#C9A96E", fontStyle: "italic" }}>déroule</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "28px", marginBottom: "56px" }} className="grid-4">
            {methode.map((step, i) => (
              <div key={step.num} className={`reveal reveal-delay-${i + 1}`} style={{ borderTop: "2px solid #C9A96E", paddingTop: "18px" }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 700, color: "#C9A96E", letterSpacing: "1px" }}>
                  {step.num} — {step.title}
                </div>
                <div style={{ fontSize: "14px", color: "#8A7E70", marginTop: "10px", lineHeight: 1.5 }}>{step.text}</div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", color: "#8A7E70", textTransform: "uppercase" }}>
              Un aperçu de l'univers artistique
            </div>
            <p style={{ fontSize: "14px", color: "#6B5B4E", marginTop: "8px" }}>
              Exemples de thèmes proposés selon les séances — peinture libre ou guidée, adaptée au niveau de chacun.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }} className="grid-4">
            {themes.map((theme, i) => (
              <div
                key={theme}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  background: "#1A1714",
                  border: "1px solid rgba(201,169,110,0.08)",
                  borderRadius: "12px",
                  padding: "22px 16px",
                  textAlign: "center",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "16px",
                  color: "#FAF6EE",
                }}
              >
                {theme}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session sport — Dimanche */}
      <section style={{ padding: "90px 0", background: "#0A0806" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <Kicker>Dimanche</Kicker>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4.5vw, 48px)", fontWeight: 500, color: "#FAF6EE", margin: "16px 0 20px" }}
          >
            Session <em style={{ color: "#C9A96E", fontStyle: "italic" }}>sport</em>
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontSize: "16px", lineHeight: 1.7, color: "#8A7E70", maxWidth: "700px", marginBottom: "48px" }}>
            Une matinée dynamique pour se reconnecter à son corps — accessible à tous les niveaux, en extérieur.
          </p>

          <div style={{ display: "flex", borderTop: "1px solid rgba(201,169,110,0.12)" }} className="timeline-row">
            {sportTimeline.map((step, i) => (
              <div
                key={step.time}
                style={{
                  flex: 1,
                  padding: "24px 24px 0 0",
                  borderLeft: i > 0 ? "1px solid rgba(201,169,110,0.12)" : "none",
                  paddingLeft: i > 0 ? "24px" : 0,
                }}
              >
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 700, color: "#C9A96E" }}>{step.time}</div>
                <div style={{ fontSize: "14px", color: "#FAF6EE", marginTop: "10px", lineHeight: 1.5 }}>{step.text}</div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "16px", color: "#8A7E70", marginTop: "32px" }}>
            Méthode HFM : Mobilité, Gainage, Cardio, Pilates — encadrée par une coach certifiée (Master Functional Trainer, Les Mills).
          </p>
        </div>
      </section>

      {/* Valeur ajoutée */}
      <section style={{ padding: "90px 0", background: "#12100C" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <Kicker>Valeur ajoutée</Kicker>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 500, color: "#FAF6EE", margin: "16px 0 48px", maxWidth: "800px" }}
          >
            Pourquoi ce concept, <em style={{ color: "#C9A96E", fontStyle: "italic" }}>pour votre hôtel</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px" }} className="grid-2">
            {valeurs.map((v, i) => (
              <div key={v.title} className={`reveal reveal-delay-${i + 1}`} style={{ borderLeft: "3px solid #C9A96E", paddingLeft: "24px" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "19px", fontWeight: 600, color: "#FAF6EE" }}>{v.title}</div>
                <p style={{ fontSize: "14px", color: "#8A7E70", marginTop: "10px", lineHeight: 1.6 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coach Mimi */}
      <section style={{ padding: "90px 0", background: "#0A0806" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <Kicker>Votre intervenante</Kicker>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(34px, 5vw, 56px)", fontWeight: 500, color: "#FAF6EE", margin: "16px 0 20px" }}
          >
            Coach <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Mimi</em>
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontSize: "17px", color: "#8A7E70", maxWidth: "700px", marginBottom: "40px" }}>
            Fondatrice de HFM (Holistique Fonctionnelle Méthode) — Abidjan
          </p>
          <div style={{ display: "flex", borderTop: "1px solid rgba(201,169,110,0.12)", marginBottom: "36px" }} className="credentials-row">
            {credentials.map((c, i) => (
              <div
                key={c}
                style={{
                  flex: 1,
                  padding: "20px 20px 0 0",
                  borderLeft: i > 0 ? "1px solid rgba(201,169,110,0.12)" : "none",
                  paddingLeft: i > 0 ? "20px" : 0,
                  fontSize: "13px",
                  color: "#FAF6EE",
                  lineHeight: 1.5,
                }}
              >
                {c}
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "18px", color: "#8A7E70", maxWidth: "900px", lineHeight: 1.6 }}>
            Athlète d'endurance (finisher Backyard Ultra Abidjan), artiste peintre et créatrice d'ateliers art &amp; mouvement — Coach Mimi porte ce concept avec une double expertise sport et créativité.
          </p>
        </div>
      </section>

      {/* Grille tarifaire */}
      <section style={{ padding: "90px 0", background: "#12100C" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <Kicker>Investissement</Kicker>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 500, color: "#FAF6EE", margin: "16px 0 8px" }}
          >
            Grille tarifaire <em style={{ color: "#C9A96E", fontStyle: "italic" }}>suggérée</em>
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontSize: "14px", color: "#6B5B4E", fontStyle: "italic", marginBottom: "40px" }}>
            Tarifs indicatifs en FCFA, par participant — matériel et coaching inclus.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {tarifs.map((t, i) => (
              <div
                key={`${t.activite}-${t.public}`}
                className={`reveal reveal-delay-${(i % 4) + 1}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "22px 26px",
                  background: t.highlight ? "rgba(201,169,110,0.06)" : "#1A1714",
                  border: t.highlight ? "1px solid rgba(201,169,110,0.25)" : "1px solid rgba(201,169,110,0.08)",
                  borderRadius: "12px",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: "2 1 240px" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", color: "#FAF6EE" }}>{t.activite}</div>
                  <div style={{ fontSize: "12px", color: "#8A7E70", marginTop: "4px" }}>{t.public}</div>
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: "#C9A96E" }}>
                  {t.prix} <span style={{ fontSize: "12px", fontWeight: 400, color: "#6B5B4E" }}>FCFA</span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "15px", color: "#6B5B4E", marginTop: "24px" }}>
            Le sport n'est pas proposé aux enfants : la session sport et le pack weekend complet sont réservés aux adultes. Les enfants peuvent participer à l'atelier de peinture uniquement.
          </p>
        </div>
      </section>

      {/* Partenariat */}
      <section style={{ padding: "90px 0", background: "#0A0806" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <Kicker>Partenariat</Kicker>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 500, color: "#FAF6EE", margin: "16px 0 48px", maxWidth: "800px" }}
          >
            Un modèle simple et <em style={{ color: "#C9A96E", fontStyle: "italic" }}>flexible</em> avec l'hôtel
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }} className="grid-3">
            {partenariat.map((p, i) => (
              <div key={p.title} className={`reveal reveal-delay-${i + 1}`} style={{ borderTop: "2px solid #C9A96E", paddingTop: "20px" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600, color: "#FAF6EE" }}>{p.title}</div>
                <p style={{ fontSize: "14px", color: "#8A7E70", marginTop: "12px", lineHeight: 1.6 }}>{p.text}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "16px", color: "#6B5B4E", marginTop: "44px" }}>
            Les modalités précises (fréquence, capacité, tarifs) seront ajustées ensemble selon les besoins de chaque établissement.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: "120px 0", background: "#12100C", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem" }}>
          <Kicker>Parlons-en</Kicker>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 5vw, 50px)", fontWeight: 500, color: "#FAF6EE", margin: "24px 0", lineHeight: 1.2 }}
          >
            Construisons ensemble l'expérience de vos hôtes.
          </h2>
          <div
            className="reveal reveal-delay-2"
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "36px",
            }}
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 36px",
                background: "#C9A96E",
                color: "#0A0806",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "8px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#D4BC8B";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#C9A96E";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              +225 07 15 15 14 08
            </a>
            <a
              href={MAILTO}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 36px",
                background: "transparent",
                border: "1px solid rgba(201,169,110,0.3)",
                color: "#C9A96E",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "8px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(201,169,110,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              Nous écrire
            </a>
          </div>
          <div
            className="reveal reveal-delay-3"
            style={{
              marginTop: "48px",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              letterSpacing: "2px",
              color: "#6B5B4E",
              textTransform: "uppercase",
            }}
          >
            HFM — Holistique Fonctionnelle Méthode · Coach Mimi · Abidjan
          </div>
        </div>
      </section>

      {/* Slim footer */}
      <footer style={{ padding: "30px 0", background: "#060503", borderTop: "1px solid rgba(201,169,110,0.08)" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "12px", color: "#6B5B4E", margin: 0 }}>
            © 2026 HFM — Holistique Fonctionnelle Méthode · Coach Mimi · Abidjan, Côte d'Ivoire
          </p>
          <a href="/" style={{ fontSize: "12px", color: "#8A7E70", textDecoration: "none" }}>
            ← Retour au site HFM
          </a>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "56px",
          height: "56px",
          background: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "26px",
          boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
          zIndex: 999,
          textDecoration: "none",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        }}
        title="Contacter Coach Mimi sur WhatsApp"
      >
        📱
      </a>

      <style>{`
        @media (max-width: 900px) {
          .grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
          .timeline-row { flex-direction: column !important; }
          .timeline-row > div { border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(201,169,110,0.12); padding-top: 20px !important; }
          .timeline-row > div:first-child { border-top: none; }
          .credentials-row { flex-direction: column !important; }
          .credentials-row > div { border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(201,169,110,0.12); padding-top: 16px !important; }
          .credentials-row > div:first-child { border-top: none; }
        }
        @media (max-width: 560px) {
          .grid-4 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
