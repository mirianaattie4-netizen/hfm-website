import { useEffect, useRef } from "react";

const keyframes = `
  @keyframes drift {
    0%, 100% { transform: translate(0,0) rotate(0deg); }
    50% { transform: translate(0,-10px) rotate(3deg); }
  }
`;

export default function ShizfitFlyersSection() {
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = keyframes;
    document.head.appendChild(style);
    styleRef.current = style;
    return () => { style.remove(); };
  }, []);

  return (
    <section style={{ background: "#0A0806", padding: "80px 24px" }}>
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", letterSpacing: "4px", textTransform: "uppercase", color: "#C9A96E", marginBottom: "12px" }}>
          Événement à venir
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 52px)", color: "#FAF6EE", fontWeight: 700, lineHeight: 1.1, marginBottom: "24px" }}>
          Summer Fitness Social
        </h2>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/flyers"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "12px",
              letterSpacing: "2px", textTransform: "uppercase", textDecoration: "none",
              background: "#C9A96E", color: "#0A0806",
              padding: "12px 24px", borderRadius: "8px",
              transition: "background .2s",
            }}
          >
            ✏️ Modifier & Télécharger PDF
          </a>
        </div>
      </div>

      {/* Flyers wrapper — scroll horizontally on small screens */}
      <div style={{ overflowX: "auto", paddingBottom: "16px" }}>
        <div style={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          minWidth: "max-content",
          padding: "0 24px",
        }}>

          {/* ───── FLYER 1 — EVENT ───── */}
          <div style={{ flex: "none" }}>
            <div style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#a6968a",
              marginBottom: "10px",
            }}>Flyer Événement</div>
            <div style={{
              position: "relative",
              width: "360px",
              height: "450px",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 22px 60px rgba(0,0,0,.6)",
              background: `
                radial-gradient(130% 80% at 78% 8%, #ffd9a8 0%, rgba(255,217,168,0) 48%),
                linear-gradient(155deg, #ff8a4c 0%, #f3683a 40%, #d94f2c 100%)
              `,
            }}>
              {/* blobs */}
              <div style={{ position: "absolute", width: "260px", height: "260px", right: "-100px", top: "-80px", borderRadius: "50%", background: "radial-gradient(circle at 40% 40%, rgba(255,225,180,.9), rgba(255,225,180,0) 68%)", animation: "drift 9s ease-in-out infinite" }} />
              <div style={{ position: "absolute", width: "180px", height: "180px", left: "-70px", bottom: "-60px", borderRadius: "50%", background: "radial-gradient(circle at 50% 50%, rgba(120,40,20,.5), rgba(120,40,20,0) 70%)", animation: "drift 11s ease-in-out infinite reverse" }} />

              {/* slash band */}
              <div style={{ position: "absolute", left: "-40px", right: "-40px", top: "188px", height: "80px", background: "#1c140d", transform: "rotate(-9deg)", boxShadow: "0 20px 50px rgba(0,0,0,.35)" }} />
              <div style={{ position: "absolute", left: "-40px", right: "-40px", top: "188px", height: "80px", transform: "rotate(-9deg)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                <div style={{ whiteSpace: "nowrap", font: "900 30px/1 'Archivo Black','Archivo',sans-serif", letterSpacing: "6px", color: "rgba(255,138,76,.16)", textTransform: "uppercase" }}>
                  MOVE · SWEAT · GLOW · MOVE · SWEAT · GLOW ·
                </div>
              </div>

              <div style={{ position: "absolute", inset: 0, padding: "24px 24px 22px", display: "flex", flexDirection: "column", zIndex: 2 }}>
                {/* brand */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ font: "700 10px/1 'Cormorant Garamond',serif", letterSpacing: "4px", color: "#1c140d", fontSize: "14px", fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>SHIZ'FIT</div>
                  <div style={{ font: "700 8px/1 'Archivo',sans-serif", letterSpacing: "2px", color: "rgba(28,20,13,.6)", border: "1.5px solid rgba(28,20,13,.5)", borderRadius: "100px", padding: "4px 8px", fontSize: "8px", fontFamily: "'Archivo', sans-serif" }}>PRÉSENTE</div>
                </div>

                {/* headline */}
                <div style={{ marginTop: "10px" }}>
                  <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: "10px", letterSpacing: "6px", color: "#fff3e6", textTransform: "uppercase", marginLeft: "2px" }}>SUMMER</div>
                  <div style={{ fontFamily: "'Archivo Black', 'Archivo', sans-serif", fontWeight: 900, fontSize: "56px", lineHeight: ".82", letterSpacing: "-2px", color: "#1c140d", textTransform: "uppercase", marginTop: "2px" }}>FITNESS</div>
                  <div style={{ display: "inline-block", background: "#1c140d", color: "#ff8a4c", fontFamily: "'Archivo Black', sans-serif", fontWeight: 900, fontSize: "24px", letterSpacing: "2px", textTransform: "uppercase", padding: "4px 10px", transform: "rotate(-3deg)", marginTop: "4px", boxShadow: "0 14px 30px rgba(0,0,0,.3)" }}>SOCIAL</div>
                </div>

                {/* date pill */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "auto" }}>
                  <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: "12px", letterSpacing: "1px", color: "#fff3e6", background: "rgba(28,20,13,.92)", padding: "6px 12px", borderRadius: "100px" }}>SAM. 4 JUILLET</div>
                  <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: "11px", color: "#1c140d" }}>09:30 — 11:30</div>
                </div>

                {/* classes */}
                <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
                  <div style={{ flex: 1, background: "rgba(255,243,230,.92)", borderRadius: "10px", padding: "10px 12px", transform: "rotate(-1.5deg)", boxShadow: "0 8px 16px rgba(0,0,0,.2)" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                      <span style={{ fontFamily: "'Archivo Black', sans-serif", fontWeight: 900, fontSize: "18px", color: "#f3683a" }}>10:00</span>
                      <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: "10px", color: "#1c140d" }}>SCULPT</span>
                    </div>
                    <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 600, fontSize: "7px", color: "rgba(28,20,13,.66)", textTransform: "uppercase", letterSpacing: ".5px", marginTop: "4px" }}>Tonifier et sculpter l'ensemble du corps</p>
                  </div>
                  <div style={{ flex: 1, background: "rgba(255,243,230,.92)", borderRadius: "10px", padding: "10px 12px", transform: "rotate(1.5deg)", boxShadow: "0 8px 16px rgba(0,0,0,.2)" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                      <span style={{ fontFamily: "'Archivo Black', sans-serif", fontWeight: 900, fontSize: "18px", color: "#f3683a" }}>11:00</span>
                      <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: "10px", color: "#1c140d" }}>PILATES</span>
                    </div>
                    <p style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 600, fontSize: "7px", color: "rgba(28,20,13,.66)", textTransform: "uppercase", letterSpacing: ".5px", marginTop: "4px" }}>Renforcer le tronc et améliorer la posture</p>
                  </div>
                </div>

                {/* location */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginTop: "10px" }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#1c140d", flexShrink: 0 }} />
                  <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: "8px", letterSpacing: "1.5px", color: "#1c140d" }}>VILLA DU BIEN-ÊTRE</div>
                  <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 600, fontSize: "7px", letterSpacing: "1px", color: "rgba(28,20,13,.6)" }}>· ANGRÉ 7ÈME TRANCHE</span>
                </div>
              </div>
            </div>
          </div>

          {/* ───── FLYER 2 — COACHES ───── */}
          <div style={{ flex: "none" }}>
            <div style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#a6968a",
              marginBottom: "10px",
            }}>Flyer Coaches</div>
            <div style={{
              position: "relative",
              width: "360px",
              height: "450px",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 22px 60px rgba(0,0,0,.6)",
              background: `
                radial-gradient(130% 75% at 22% 6%, #ffd9a8 0%, rgba(255,217,168,0) 46%),
                linear-gradient(155deg, #ff8a4c 0%, #f3683a 42%, #d94f2c 100%)
              `,
            }}>
              <div style={{ position: "absolute", width: "220px", height: "220px", left: "-80px", top: "-70px", borderRadius: "50%", background: "radial-gradient(circle at 50% 50%, rgba(255,225,180,.85), rgba(255,225,180,0) 68%)", animation: "drift 10s ease-in-out infinite" }} />
              <div style={{ position: "absolute", width: "180px", height: "180px", right: "-60px", bottom: "-60px", borderRadius: "50%", background: "radial-gradient(circle at 50% 50%, rgba(120,40,20,.45), rgba(120,40,20,0) 70%)", animation: "drift 12s ease-in-out infinite reverse" }} />

              <div style={{ position: "absolute", inset: 0, padding: "22px 20px 18px", display: "flex", flexDirection: "column", zIndex: 2 }}>
                {/* brand */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                  <span style={{ width: "20px", height: "1.5px", background: "rgba(28,20,13,.5)" }} />
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "16px", letterSpacing: "4px", color: "#1c140d" }}>SHIZ'FIT</div>
                  <span style={{ width: "20px", height: "1.5px", background: "rgba(28,20,13,.5)" }} />
                </div>

                <div style={{ textAlign: "center", marginTop: "8px" }}>
                  <span style={{ display: "block", fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: "10px", letterSpacing: "3px", color: "#fff3e6", textTransform: "uppercase" }}>À LA RENCONTRE DE</span>
                  <span style={{ display: "inline-block", fontFamily: "'Archivo Black', sans-serif", fontWeight: 900, fontSize: "28px", lineHeight: 1, letterSpacing: "-0.5px", color: "#1c140d", textTransform: "uppercase", background: "#fff3e6", padding: "3px 10px", transform: "rotate(-2deg)", marginTop: "6px", boxShadow: "0 8px 20px rgba(0,0,0,.22)" }}>TES COACH</span>
                </div>

                {/* coach cards */}
                <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
                  {/* SHIZ */}
                  <div style={{ flex: 1, background: "#fffaf3", borderRadius: "14px", overflow: "hidden", boxShadow: "0 12px 24px rgba(0,0,0,.28)", transform: "rotate(-2deg)" }}>
                    <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
                      <img src="/shiz.jpg" alt="Coach Shiz" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 28%", display: "block" }} />
                      <div style={{ position: "absolute", left: "8px", top: "8px", background: "#1c140d", color: "#ff8a4c", fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: "9px", letterSpacing: "1px", padding: "4px 8px", borderRadius: "100px" }}>SCULPT</div>
                    </div>
                    <div style={{ padding: "10px 12px 12px" }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "6px", flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "'Archivo Black', sans-serif", fontWeight: 900, fontSize: "18px", color: "#1c140d" }}>SHIZ</span>
                        <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 600, fontSize: "8px", color: "rgba(28,20,13,.5)" }}>@shizfit_</span>
                      </div>
                      <div style={{ fontFamily: "'Archivo Black', sans-serif", fontWeight: 900, fontSize: "13px", color: "#f3683a", marginTop: "4px" }}>10:00 — 10:45</div>
                    </div>
                  </div>

                  {/* MIMI */}
                  <div style={{ flex: 1, background: "#fffaf3", borderRadius: "14px", overflow: "hidden", boxShadow: "0 12px 24px rgba(0,0,0,.28)", transform: "rotate(2deg)" }}>
                    <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
                      <img src="/mimi.jpg" alt="Coach Mimi" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 60%", display: "block" }} />
                      <div style={{ position: "absolute", left: "8px", top: "8px", background: "#1c140d", color: "#ff8a4c", fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: "9px", letterSpacing: "1px", padding: "4px 8px", borderRadius: "100px" }}>PILATES</div>
                    </div>
                    <div style={{ padding: "10px 12px 12px" }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "6px", flexWrap: "wrap" }}>
                        <span style={{ fontFamily: "'Archivo Black', sans-serif", fontWeight: 900, fontSize: "18px", color: "#1c140d" }}>MIMI</span>
                        <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 600, fontSize: "8px", color: "rgba(28,20,13,.5)" }}>@coachmimi87</span>
                      </div>
                      <div style={{ fontFamily: "'Archivo Black', sans-serif", fontWeight: 900, fontSize: "13px", color: "#f3683a", marginTop: "4px" }}>11:00 — 11:35</div>
                    </div>
                  </div>
                </div>

                {/* footer */}
                <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                  <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: "11px", letterSpacing: "1px", color: "#1c140d", background: "#fff3e6", padding: "6px 14px", borderRadius: "100px", transform: "rotate(-1.5deg)", boxShadow: "0 8px 18px rgba(0,0,0,.2)" }}>SAM. 4 JUILLET · 10:00 — 11:35</div>
                  <div style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 600, fontSize: "8px", letterSpacing: "1.5px", color: "rgba(28,20,13,.7)" }}>VILLA DU BIEN-ÊTRE · ANGRÉ 7ÈME TRANCHE</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
