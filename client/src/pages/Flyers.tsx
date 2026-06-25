import { useEffect, useRef, useState } from "react";

const INIT = {
  date: "SAM. 4 JUILLET",
  hours: "09:30 — 11:30",
  lieu: "VILLA DU BIEN-ÊTRE",
  quartier: "ANGRÉ 7ÈME TRANCHE",
  c1name: "SCULPT",
  c1time: "10:00",
  c1end: "10:45",
  c1desc: "Tonifier et sculpter l'ensemble du corps",
  c2name: "PILATES",
  c2time: "11:00",
  c2end: "11:35",
  c2desc: "Renforcer le tronc et améliorer la posture",
  p1name: "SHIZ",
  p1handle: "@shizfit_",
  p2name: "MIMI",
  p2handle: "@coachmimi87",
  col1: "#ff8a4c",
  col2: "#d94f2c",
  dark: "#1c140d",
  light: "#fff3e6",
};

type Config = typeof INIT;

function Field({ label, id, value, type = "text", onChange }: {
  label: string; id: keyof Config; value: string; type?: string;
  onChange: (id: keyof Config, val: string) => void;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px", minWidth: "150px" }}>
      <label style={{ fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", color: "#C9A96E" }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        style={{
          background: "rgba(255,255,255,.07)", border: "1px solid rgba(201,169,110,.25)",
          borderRadius: "6px", color: "#FAF6EE", fontFamily: "'Montserrat',sans-serif",
          fontSize: "12px", padding: type === "color" ? "2px 4px" : "7px 9px",
          outline: "none", width: "100%", height: type === "color" ? "34px" : "auto",
          cursor: type === "color" ? "pointer" : "text",
        }}
      />
    </div>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <div style={{
      width: "100%", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase",
      color: "rgba(201,169,110,.45)", paddingTop: "12px",
      borderTop: "1px solid rgba(201,169,110,.08)",
    }}>{children}</div>
  );
}

function Flyer1({ c, scale = 1 }: { c: Config; scale?: number }) {
  const bg = `radial-gradient(130% 80% at 78% 8%, #ffd9a8 0%, rgba(255,217,168,0) 48%), linear-gradient(155deg, ${c.col1} 0%, ${c.col2} 60%, ${c.col2} 100%)`;
  return (
    <div style={{ position: "relative", width: 1080, height: 1350, borderRadius: 6, overflow: "hidden", background: bg, transform: `scale(${scale})`, transformOrigin: "top left" }}>
      <div style={{ position: "absolute", width: 760, height: 760, right: -280, top: -220, borderRadius: "50%", background: "radial-gradient(circle at 40% 40%,rgba(255,225,180,.9),rgba(255,225,180,0) 68%)", animation: "drift 9s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: 520, height: 520, left: -200, bottom: -160, borderRadius: "50%", background: "radial-gradient(circle at 50% 50%,rgba(120,40,20,.5),rgba(120,40,20,0) 70%)", animation: "drift 11s ease-in-out infinite reverse" }} />
      <div style={{ position: "absolute", left: -120, right: -120, top: 560, height: 240, background: c.dark, transform: "rotate(-9deg)", boxShadow: "0 20px 50px rgba(0,0,0,.35)" }} />
      <div style={{ position: "absolute", left: -120, right: -120, top: 560, height: 240, transform: "rotate(-9deg)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ whiteSpace: "nowrap", font: "900 90px/1 'Archivo Black','Archivo',sans-serif", letterSpacing: 6, color: `${c.col1}29`, textTransform: "uppercase" }}>MOVE · SWEAT · GLOW · MOVE · SWEAT · GLOW ·</div>
      </div>
      <div style={{ position: "absolute", inset: 0, padding: "70px 70px 64px", display: "flex", flexDirection: "column", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ font: "700 30px/1 'Cormorant Garamond',serif", letterSpacing: 4, color: c.dark }}>SHIZ'FIT</div>
          <div style={{ font: "700 12px/1 'Archivo',sans-serif", letterSpacing: 3, color: c.dark + "99", border: `1.5px solid ${c.dark}80`, borderRadius: 100, padding: "8px 16px" }}>PRÉSENTE</div>
        </div>
        <div style={{ marginTop: 30 }}>
          <div style={{ font: "800 30px/1 'Archivo',sans-serif", letterSpacing: 6, color: c.light, textTransform: "uppercase", marginLeft: 6 }}>SUMMER</div>
          <div style={{ font: "900 168px/.82 'Archivo Black','Archivo',sans-serif", letterSpacing: -4, color: c.dark, textTransform: "uppercase", marginTop: 6 }}>FITNESS</div>
          <div style={{ display: "inline-block", background: c.dark, color: c.col1, font: "900 70px/1 'Archivo Black','Archivo',sans-serif", letterSpacing: 2, textTransform: "uppercase", padding: "10px 26px", transform: "rotate(-3deg)", marginTop: 10, boxShadow: "0 14px 30px rgba(0,0,0,.3)" }}>SOCIAL</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: "auto" }}>
          <div style={{ font: "800 34px/1 'Archivo',sans-serif", letterSpacing: 1, color: c.light, background: c.dark + "eb", padding: "16px 28px", borderRadius: 100 }}>{c.date}</div>
          <div style={{ font: "800 26px/1 'Archivo',sans-serif", letterSpacing: 1, color: c.dark }}>{c.hours}</div>
        </div>
        <div style={{ display: "flex", gap: 20, marginTop: 30 }}>
          {[
            { time: c.c1time, name: c.c1name, desc: c.c1desc, rot: "-1.5deg" },
            { time: c.c2time, name: c.c2name, desc: c.c2desc, rot: "1.5deg" },
          ].map((cl, i) => (
            <div key={i} style={{ flex: 1, background: c.light + "eb", borderRadius: 24, padding: "26px 28px", transform: `rotate(${cl.rot})`, boxShadow: "0 16px 34px rgba(0,0,0,.2)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <span style={{ font: "900 50px/1 'Archivo Black','Archivo',sans-serif", color: c.col2 }}>{cl.time}</span>
                <span style={{ font: "800 26px/1 'Archivo',sans-serif", letterSpacing: 1, color: c.dark }}>{cl.name}</span>
              </div>
              <p style={{ font: "600 16px/1.4 'Archivo',sans-serif", color: c.dark + "aa", textTransform: "uppercase", letterSpacing: .5, marginTop: 14 }}>{cl.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 30 }}>
          <span style={{ width: 9, height: 9, borderRadius: "50%", background: c.dark, flexShrink: 0 }} />
          <div style={{ font: "800 20px/1 'Archivo',sans-serif", letterSpacing: 2, color: c.dark }}>{c.lieu}</div>
          <span style={{ font: "600 16px/1 'Archivo',sans-serif", letterSpacing: 2, color: c.dark + "99" }}>· {c.quartier}</span>
        </div>
      </div>
    </div>
  );
}

function Flyer2({ c, scale = 1 }: { c: Config; scale?: number }) {
  const bg = `radial-gradient(130% 75% at 22% 6%, #ffd9a8 0%, rgba(255,217,168,0) 46%), linear-gradient(155deg, ${c.col1} 0%, ${c.col2} 42%, ${c.col2} 100%)`;
  return (
    <div style={{ position: "relative", width: 1080, height: 1350, borderRadius: 6, overflow: "hidden", background: bg, transform: `scale(${scale})`, transformOrigin: "top left" }}>
      <div style={{ position: "absolute", width: 680, height: 680, left: -240, top: -200, borderRadius: "50%", background: "radial-gradient(circle at 50% 50%,rgba(255,225,180,.85),rgba(255,225,180,0) 68%)", animation: "drift 10s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: 520, height: 520, right: -180, bottom: -160, borderRadius: "50%", background: "radial-gradient(circle at 50% 50%,rgba(120,40,20,.45),rgba(120,40,20,0) 70%)", animation: "drift 12s ease-in-out infinite reverse" }} />
      <div style={{ position: "absolute", inset: 0, padding: "64px 60px 56px", display: "flex", flexDirection: "column", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <span style={{ width: 46, height: 2, background: c.dark + "80", flexShrink: 0 }} />
          <div style={{ font: "700 36px/1 'Cormorant Garamond',serif", letterSpacing: 5, color: c.dark }}>SHIZ'FIT</div>
          <span style={{ width: 46, height: 2, background: c.dark + "80", flexShrink: 0 }} />
        </div>
        <div style={{ textAlign: "center", marginTop: 22 }}>
          <span style={{ display: "block", font: "800 30px/1 'Archivo',sans-serif", letterSpacing: 4, color: c.light, textTransform: "uppercase" }}>À LA RENCONTRE DE</span>
          <span style={{ display: "inline-block", font: "900 78px/1 'Archivo Black','Archivo',sans-serif", letterSpacing: -1, color: c.dark, textTransform: "uppercase", background: c.light, padding: "6px 24px", transform: "rotate(-2deg)", marginTop: 12, boxShadow: "0 12px 28px rgba(0,0,0,.22)" }}>TES COACH</span>
        </div>
        <div style={{ display: "flex", gap: 30, marginTop: 48 }}>
          {[
            { img: "/shiz.jpg", pos: "50% 28%", tag: c.c1name, name: c.p1name, handle: c.p1handle, time: `${c.c1time} — ${c.c1end}`, rot: "-2deg" },
            { img: "/mimi.jpg", pos: "50% 60%", tag: c.c2name, name: c.p2name, handle: c.p2handle, time: `${c.c2time} — ${c.c2end}`, rot: "2deg" },
          ].map((coach, i) => (
            <div key={i} style={{ flex: 1, background: "#fffaf3", borderRadius: 28, overflow: "hidden", boxShadow: "0 22px 44px rgba(0,0,0,.28)", transform: `rotate(${coach.rot})` }}>
              <div style={{ position: "relative", height: 540, overflow: "hidden" }}>
                <img src={coach.img} alt={coach.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: coach.pos, display: "block" }} />
                <div style={{ position: "absolute", left: 18, top: 18, background: c.dark, color: c.col1, font: "900 22px/1 'Archivo',sans-serif", letterSpacing: 2, padding: "9px 16px", borderRadius: 100 }}>{coach.tag}</div>
              </div>
              <div style={{ padding: "24px 26px 28px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
                  <span style={{ font: "900 40px/1 'Archivo Black','Archivo',sans-serif", color: c.dark }}>{coach.name}</span>
                  <span style={{ font: "600 16px/1 'Archivo',sans-serif", letterSpacing: .5, color: c.dark + "80" }}>{coach.handle}</span>
                </div>
                <div style={{ font: "900 30px/1 'Archivo Black','Archivo',sans-serif", color: c.col2, marginTop: 12 }}>{coach.time}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <div style={{ font: "900 28px/1 'Archivo',sans-serif", letterSpacing: 1, color: c.dark, background: c.light, padding: "14px 30px", borderRadius: 100, transform: "rotate(-1.5deg)", boxShadow: "0 12px 26px rgba(0,0,0,.2)" }}>{c.date} · {c.c1time} — {c.c2end}</div>
          <div style={{ font: "600 16px/1 'Archivo',sans-serif", letterSpacing: 2, color: c.dark + "b3" }}>{c.lieu} · {c.quartier}</div>
        </div>
      </div>
    </div>
  );
}

// ── FLYER 3 — PLACES LIMITÉES ────────────────────────────────────────────────
function Flyer3({ c, scale = 1 }: { c: Config; scale?: number }) {
  return (
    <div style={{ position: "relative", width: 1080, height: 1350, borderRadius: 6, overflow: "hidden", transform: `scale(${scale})`, transformOrigin: "top left", background: "#0e0a07" }}>
      {/* BG collage: 3 photos */}
      <img src="/villa3.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "70%", objectFit: "cover", objectPosition: "50% 40%", display: "block" }} />
      <img src="/villa1.jpg" alt="" style={{ position: "absolute", bottom: 0, left: 0, width: "50%", height: "32%", objectFit: "cover", objectPosition: "50% 60%", display: "block" }} />
      <img src="/villa2.jpg" alt="" style={{ position: "absolute", bottom: 0, right: 0, width: "50%", height: "32%", objectFit: "cover", objectPosition: "50% 50%", display: "block" }} />
      {/* dark overlays */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,.15) 0%, rgba(0,0,0,.7) 55%, rgba(0,0,0,.85) 100%)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "34%", background: "linear-gradient(to bottom, transparent, rgba(0,0,0,.6))" }} />
      {/* separator line between photos */}
      <div style={{ position: "absolute", bottom: "32%", left: 0, right: 0, height: 4, background: c.col1 }} />
      <div style={{ position: "absolute", bottom: 0, left: "50%", width: 4, height: "32%", background: c.col1 }} />

      {/* content */}
      <div style={{ position: "absolute", inset: 0, padding: "60px 64px 56px", display: "flex", flexDirection: "column", zIndex: 2 }}>
        {/* top brand */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ font: "700 32px/1 'Cormorant Garamond',serif", letterSpacing: 5, color: "#FAF6EE" }}>SHIZ'FIT</div>
          <div style={{ font: "700 13px/1 'Archivo',sans-serif", letterSpacing: 3, color: c.col1, border: `1.5px solid ${c.col1}`, borderRadius: 100, padding: "8px 18px" }}>PRÉSENTE</div>
        </div>

        {/* main message */}
        <div style={{ marginTop: "auto", marginBottom: 40 }}>
          {/* urgency badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: c.col1, borderRadius: 100, padding: "10px 22px", marginBottom: 28 }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#fff", flexShrink: 0 }} />
            <span style={{ font: "800 18px/1 'Archivo',sans-serif", letterSpacing: 3, color: "#0e0a07", textTransform: "uppercase" }}>ATTENTION</span>
          </div>

          <div style={{ font: "900 130px/.85 'Archivo Black','Archivo',sans-serif", letterSpacing: -3, color: "#FAF6EE", textTransform: "uppercase", lineHeight: .85 }}>PLACES</div>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 8 }}>
            <div style={{ font: "900 100px/.85 'Archivo Black','Archivo',sans-serif", letterSpacing: -2, color: c.col1, textTransform: "uppercase" }}>LIMI-</div>
          </div>
          <div style={{ font: "900 100px/.85 'Archivo Black','Archivo',sans-serif", letterSpacing: -2, color: c.col1, textTransform: "uppercase" }}>TÉES</div>

          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 36 }}>
            <div style={{ height: 2, flex: 1, background: "rgba(255,255,255,.2)" }} />
            <div style={{ font: "700 18px/1 'Archivo',sans-serif", letterSpacing: 3, color: "rgba(255,255,255,.7)", textTransform: "uppercase" }}>Réserve ta place maintenant</div>
            <div style={{ height: 2, flex: 1, background: "rgba(255,255,255,.2)" }} />
          </div>
        </div>

        {/* event info bar */}
        <div style={{ background: "rgba(255,255,255,.08)", backdropFilter: "blur(8px)", borderRadius: 20, border: "1px solid rgba(255,255,255,.12)", padding: "24px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ font: "600 12px/1 'Archivo',sans-serif", letterSpacing: 3, color: c.col1, textTransform: "uppercase", marginBottom: 8 }}>Date</div>
            <div style={{ font: "800 26px/1 'Archivo',sans-serif", color: "#FAF6EE" }}>{c.date}</div>
          </div>
          <div style={{ width: 1, height: 40, background: "rgba(255,255,255,.2)" }} />
          <div>
            <div style={{ font: "600 12px/1 'Archivo',sans-serif", letterSpacing: 3, color: c.col1, textTransform: "uppercase", marginBottom: 8 }}>Horaires</div>
            <div style={{ font: "800 26px/1 'Archivo',sans-serif", color: "#FAF6EE" }}>{c.hours}</div>
          </div>
          <div style={{ width: 1, height: 40, background: "rgba(255,255,255,.2)" }} />
          <div>
            <div style={{ font: "600 12px/1 'Archivo',sans-serif", letterSpacing: 3, color: c.col1, textTransform: "uppercase", marginBottom: 8 }}>Lieu</div>
            <div style={{ font: "800 20px/1.2 'Archivo',sans-serif", color: "#FAF6EE" }}>{c.lieu}<br /><span style={{ fontWeight: 500, fontSize: 14, color: "rgba(255,255,255,.6)" }}>{c.quartier}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── FLYER 4 — 1 BAWL ─────────────────────────────────────────────────────────
function Flyer4({ c, scale = 1 }: { c: Config; scale?: number }) {
  return (
    <div style={{ position: "relative", width: 1080, height: 1350, borderRadius: 6, overflow: "hidden", transform: `scale(${scale})`, transformOrigin: "top left", background: "#0e0a07" }}>
      {/* BG: pool photo full */}
      <img src="/villa2.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 40%", display: "block" }} />
      {/* dark gradient overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(0,0,0,.82) 0%, rgba(0,0,0,.45) 50%, rgba(0,0,0,.75) 100%)" }} />

      {/* decorative circle */}
      <div style={{ position: "absolute", right: -160, top: -160, width: 600, height: 600, borderRadius: "50%", border: `3px solid ${c.col1}30` }} />
      <div style={{ position: "absolute", right: -100, top: -100, width: 450, height: 450, borderRadius: "50%", border: `2px solid ${c.col1}20` }} />

      {/* content */}
      <div style={{ position: "absolute", inset: 0, padding: "60px 64px 56px", display: "flex", flexDirection: "column", zIndex: 2 }}>
        {/* top */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ font: "700 32px/1 'Cormorant Garamond',serif", letterSpacing: 5, color: "#FAF6EE" }}>SHIZ'FIT</div>
          <div style={{ background: c.col1, color: "#0e0a07", font: "800 13px/1 'Archivo',sans-serif", letterSpacing: 3, padding: "10px 18px", borderRadius: 100, textTransform: "uppercase" }}>Summer Social</div>
        </div>

        {/* headline */}
        <div style={{ marginTop: 60 }}>
          <div style={{ font: "600 22px/1 'Archivo',sans-serif", letterSpacing: 5, color: "rgba(255,255,255,.6)", textTransform: "uppercase", marginBottom: 16 }}>Participation</div>
          <div style={{ font: "900 260px/.8 'Archivo Black','Archivo',sans-serif", letterSpacing: -8, color: "#FAF6EE", textTransform: "uppercase", lineHeight: .8 }}>1</div>
          <div style={{ display: "inline-block", background: c.col1, color: "#0e0a07", font: "900 110px/1 'Archivo Black','Archivo',sans-serif", letterSpacing: 2, textTransform: "uppercase", padding: "12px 32px", transform: "rotate(-2deg)", marginTop: -10, boxShadow: `0 20px 50px ${c.col1}60` }}>BAWL</div>
          <div style={{ font: "600 20px/1 'Archivo',sans-serif", letterSpacing: 3, color: "rgba(255,255,255,.55)", textTransform: "uppercase", marginTop: 28 }}>= 1 000 FCFA seulement</div>
        </div>

        {/* perks */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 56 }}>
          {[`${c.c1name} avec ${c.p1name}`, `${c.c2name} avec ${c.p2name}`, "Accès piscine & jardin", "Ambiance premium"].map((perk, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: c.col1, flexShrink: 0 }} />
              <span style={{ font: "700 22px/1 'Archivo',sans-serif", color: "rgba(255,255,255,.85)", letterSpacing: 1 }}>{perk}</span>
            </div>
          ))}
        </div>

        {/* footer */}
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ height: 1, background: "rgba(255,255,255,.15)" }} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ font: "800 28px/1 'Archivo',sans-serif", color: "#FAF6EE" }}>{c.date} · {c.hours}</div>
              <div style={{ font: "600 16px/1 'Archivo',sans-serif", color: "rgba(255,255,255,.5)", letterSpacing: 2, marginTop: 8, textTransform: "uppercase" }}>{c.lieu} · {c.quartier}</div>
            </div>
            <div style={{ background: c.col1, color: "#0e0a07", font: "900 18px/1 'Archivo',sans-serif", letterSpacing: 2, padding: "14px 28px", borderRadius: 100, textTransform: "uppercase", boxShadow: `0 10px 30px ${c.col1}50` }}>Places limitées !</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FlyersPage() {
  const [c, setC] = useState<Config>({ ...INIT });
  const [editOpen, setEditOpen] = useState(false);
  const [printFlyer, setPrintFlyer] = useState<number | "all">("all");
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    const s = document.createElement("style");
    s.textContent = `
      @keyframes drift { 0%,100%{ transform:translate(0,0) rotate(0deg); } 50%{ transform:translate(0,-10px) rotate(3deg); } }
      @media print {
        #flyers-toolbar, #flyers-edit, .flyer-label-tag { display:none!important; }
        body { background:#fff!important; }
        .flyer-print-wrap { page-break-after: always; }
        *, *::before, *::after { print-color-adjust:exact!important; -webkit-print-color-adjust:exact!important; animation:none!important; }
      }
    `;
    document.head.appendChild(s);
    styleRef.current = s;
    return () => s.remove();
  }, []);

  function set(id: keyof Config, val: string) {
    setC((prev) => ({ ...prev, [id]: val }));
  }

  function downloadPDF(which: number | "all") {
    setPrintFlyer(which);
    setTimeout(() => window.print(), 150);
  }

  const SCALE = 0.42;

  const flyers = [
    { id: 1, label: "Flyer 1 — Événement", el: <Flyer1 c={c} scale={SCALE} /> },
    { id: 2, label: "Flyer 2 — Coaches",   el: <Flyer2 c={c} scale={SCALE} /> },
    { id: 3, label: "Flyer 3 — Places Limitées", el: <Flyer3 c={c} scale={SCALE} /> },
    { id: 4, label: "Flyer 4 — 1 Bawl",    el: <Flyer4 c={c} scale={SCALE} /> },
  ];

  return (
    <div style={{ background: "#0e0a07", minHeight: "100vh", fontFamily: "'Montserrat',sans-serif", color: "#FAF6EE" }}>

      {/* TOOLBAR */}
      <div id="flyers-toolbar" style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(14,10,7,.96)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(201,169,110,.15)", padding: "12px 24px", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
        <a href="/" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, letterSpacing: 4, color: "#C9A96E", textDecoration: "none", marginRight: "auto" }}>SHIZ'FIT</a>
        <Btn ghost onClick={() => setEditOpen((o) => !o)}>{editOpen ? "✕ Fermer" : "✏️ Modifier"}</Btn>
        <Btn onClick={() => downloadPDF(1)}>⬇ F1</Btn>
        <Btn onClick={() => downloadPDF(2)}>⬇ F2</Btn>
        <Btn onClick={() => downloadPDF(3)}>⬇ F3</Btn>
        <Btn onClick={() => downloadPDF(4)}>⬇ F4</Btn>
        <Btn gold onClick={() => downloadPDF("all")}>⬇ Tous PDF</Btn>
      </div>

      {/* EDIT PANEL */}
      {editOpen && (
        <div id="flyers-edit" style={{ background: "#150f08", borderBottom: "1px solid rgba(201,169,110,.1)", padding: "20px 24px", display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "flex-start" }}>
          <SectionTitle>Événement</SectionTitle>
          <Field label="Date" id="date" value={c.date} onChange={set} />
          <Field label="Horaires" id="hours" value={c.hours} onChange={set} />
          <Field label="Lieu" id="lieu" value={c.lieu} onChange={set} />
          <Field label="Quartier" id="quartier" value={c.quartier} onChange={set} />
          <SectionTitle>Cours 1</SectionTitle>
          <Field label="Nom" id="c1name" value={c.c1name} onChange={set} />
          <Field label="Heure début" id="c1time" value={c.c1time} onChange={set} />
          <Field label="Heure fin" id="c1end" value={c.c1end} onChange={set} />
          <Field label="Description" id="c1desc" value={c.c1desc} onChange={set} />
          <SectionTitle>Cours 2</SectionTitle>
          <Field label="Nom" id="c2name" value={c.c2name} onChange={set} />
          <Field label="Heure début" id="c2time" value={c.c2time} onChange={set} />
          <Field label="Heure fin" id="c2end" value={c.c2end} onChange={set} />
          <Field label="Description" id="c2desc" value={c.c2desc} onChange={set} />
          <SectionTitle>Coaches</SectionTitle>
          <Field label="Coach 1 — Nom" id="p1name" value={c.p1name} onChange={set} />
          <Field label="Coach 1 — @" id="p1handle" value={c.p1handle} onChange={set} />
          <Field label="Coach 2 — Nom" id="p2name" value={c.p2name} onChange={set} />
          <Field label="Coach 2 — @" id="p2handle" value={c.p2handle} onChange={set} />
          <SectionTitle>Couleurs</SectionTitle>
          <Field label="Couleur 1" id="col1" value={c.col1} type="color" onChange={set} />
          <Field label="Couleur 2" id="col2" value={c.col2} type="color" onChange={set} />
          <Field label="Foncé" id="dark" value={c.dark} type="color" onChange={set} />
          <Field label="Clair" id="light" value={c.light} type="color" onChange={set} />
        </div>
      )}

      {/* FLYERS */}
      <div style={{ padding: "48px 24px", display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap" }}>
        {flyers.map((f) => (
          <div
            key={f.id}
            className="flyer-print-wrap"
            style={{ display: printFlyer !== "all" && printFlyer !== f.id ? "none" : "flex", flexDirection: "column", gap: 12 }}
          >
            <div className="flyer-label-tag" style={{ fontSize: 10, letterSpacing: "2.5px", textTransform: "uppercase", color: "rgba(201,169,110,.45)" }}>{f.label}</div>
            <div style={{ width: 1080 * SCALE, height: 1350 * SCALE, position: "relative", overflow: "hidden", borderRadius: 4, boxShadow: "0 20px 60px rgba(0,0,0,.6)" }}>
              {f.el}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Btn({ children, onClick, gold, ghost }: { children: React.ReactNode; onClick?: () => void; gold?: boolean; ghost?: boolean }) {
  return (
    <button onClick={onClick} style={{
      fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: "1.5px",
      textTransform: "uppercase", border: ghost ? "1px solid rgba(201,169,110,.3)" : "none",
      borderRadius: 7, padding: "9px 16px", cursor: "pointer", transition: "all .2s",
      background: gold ? "#C9A96E" : ghost ? "rgba(201,169,110,.1)" : "rgba(255,255,255,.1)",
      color: gold ? "#0e0a07" : "#C9A96E",
    }}>
      {children}
    </button>
  );
}
