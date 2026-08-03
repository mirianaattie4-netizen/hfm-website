/* ============================================================
   Atelier Peinture — Dossier de présentation (Coach Paul)
   Design: éditorial clair, dérivé du deck Claude Design
   Palette: crème #F4EDE1 · encre #16130F · brique #A3161A
   Typographie: Cormorant Garamond (serif) + Montserrat (labels)
   ============================================================ */
const INK = "#16130F";
const CREAM = "#F4EDE1";
const RUST = "#A3161A";
const MUTED = "#726C61";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "Montserrat, sans-serif",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: RUST,
      }}
    >
      {children}
    </div>
  );
}

function Slide({ children }: { children: React.ReactNode }) {
  return (
    <section
      style={{ background: CREAM, color: INK }}
      className="w-full rounded-2xl px-6 py-14 sm:px-12 sm:py-20 lg:px-20 lg:py-24"
    >
      <div className="mx-auto max-w-3xl">{children}</div>
    </section>
  );
}

export default function AtelierPeinture() {
  return (
    <div className="min-h-screen w-full bg-white py-8 sm:py-14">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 sm:gap-10 sm:px-6">
        {/* 1 — Couverture */}
        <Slide>
          <Eyebrow>Proposition d'activité — Hôtellerie</Eyebrow>
          <h1
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            className="mt-6 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            L'Atelier Peinture
          </h1>
          <p
            style={{ fontFamily: "'Cormorant Garamond', serif", color: INK }}
            className="mt-8 max-w-xl text-xl leading-relaxed sm:text-2xl"
          >
            Une activité de soirée clé en main, pensée pour occuper — et
            enchanter — vos vacanciers.
          </p>

          <div
            className="mt-16 flex items-center justify-between border-t pt-4 sm:mt-24"
            style={{ borderColor: "rgba(22,19,15,0.15)" }}
          >
            <span
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: MUTED,
              }}
            >
              Dossier de présentation — Coach Paul
            </span>
            <span
              className="flex items-center gap-2"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: MUTED,
              }}
            >
              <span style={{ width: 1, height: 12, background: RUST }} />
              2026
            </span>
          </div>
        </Slide>

        {/* 2 — Déroulé de la séance */}
        <Slide>
          <Eyebrow>Déroulé de la séance</Eyebrow>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            className="mt-6 text-3xl leading-tight sm:text-4xl lg:text-5xl"
          >
            Deux heures, sans pression — rien à organiser côté hôtel.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                text: "Accueil et installation — matériel fourni, toile et couleurs prêtes.",
              },
              {
                n: "02",
                text: "Démonstration guidée, un thème simple, aucune technique à maîtriser.",
              },
              {
                n: "03",
                text: "Peinture libre, en musique, verre à la main.",
              },
              {
                n: "04",
                text: "Chacun repart avec son œuvre — un souvenir signé de sa main.",
              },
            ].map((step) => (
              <div key={step.n}>
                <div
                  style={{ borderTop: `2px solid ${RUST}` }}
                  className="pt-3"
                >
                  <span
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: 12,
                      fontWeight: 700,
                      color: RUST,
                    }}
                  >
                    {step.n}
                  </span>
                  <p
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="mt-3 text-lg leading-snug sm:text-xl"
                  >
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              "Occupe une plage horaire souvent vide, sans effort logistique pour vos équipes.",
              "Un souvenir tangible — l'œuvre emportée prolonge le séjour dans l'avis client.",
            ].map((line) => (
              <div key={line} className="flex gap-3">
                <span style={{ width: 2, background: RUST, flexShrink: 0 }} />
                <p
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-lg leading-relaxed sm:text-xl"
                >
                  {line}
                </p>
              </div>
            ))}
          </div>
        </Slide>

        {/* 3 — Détails pratiques */}
        <Slide>
          <Eyebrow>Détails pratiques</Eyebrow>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            className="mt-6 text-3xl leading-tight sm:text-4xl lg:text-5xl"
          >
            Un format qui s'adapte à votre établissement.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            {[
              { label: "Format", value: "Terrasse, salon, plage aménagée" },
              {
                label: "Langue",
                value: "Français, anglais, arabe ou bilingue",
              },
              { label: "Groupe", value: "De 8 à 30 participants" },
              {
                label: "Matériel",
                value:
                  "Toiles, peintures, pinceaux, protections — fournis par l'atelier. L'hôtel n'a rien à fournir.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border-l pl-5"
                style={{ borderColor: "rgba(22,19,15,0.15)" }}
              >
                <span
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: MUTED,
                  }}
                >
                  {item.label}
                </span>
                <p
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="mt-2 text-lg leading-snug sm:text-xl"
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-10 rounded-xl px-6 py-8 sm:px-10 sm:py-10"
            style={{ border: `1px solid ${RUST}`, background: "rgba(163,22,26,0.04)" }}
          >
            <Eyebrow>Tarif</Eyebrow>
            <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                className="text-4xl sm:text-5xl"
              >
                150 000 FCFA
              </span>
              <span
                style={{ fontFamily: "'Cormorant Garamond', serif", color: MUTED }}
                className="text-lg sm:text-xl"
              >
                / séance de 2h, jusqu'à 15 participants
              </span>
            </div>
            <p
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="mt-3 text-lg leading-relaxed sm:text-xl"
            >
              + 8 000 FCFA par participant supplémentaire, au-delà de 15 (30
              max). Animation et matériel inclus — aucun coût caché pour
              l'hôtel.
            </p>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: MUTED,
              }}
              className="mt-4"
            >
              Tarif indicatif 2026 — devis personnalisé sur demande.
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
}
