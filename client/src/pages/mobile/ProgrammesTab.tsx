/* ============================================================
   HFM PWA — Onglet Programmes
   ============================================================ */
import { useState } from "react";

type TabKey = "collectifs" | "prive" | "bootcamp";

export default function ProgrammesTab() {
  const [tab, setTab] = useState<TabKey>("collectifs");

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
          Offres HFM
        </div>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "28px",
            fontWeight: 500,
            color: "#FAF6EE",
          }}
        >
          Nos <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Programmes</em>
        </h2>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          padding: "0 16px 16px",
          overflowX: "auto",
        }}
      >
        {([
          { key: "collectifs" as TabKey, label: "Collectifs", icon: "👥" },
          { key: "prive" as TabKey, label: "Privé", icon: "⭐" },
          { key: "bootcamp" as TabKey, label: "Bootcamp", icon: "🌊" },
        ] as const).map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            style={{
              flexShrink: 0,
              padding: "10px 18px",
              background: tab === t.key ? "#C9A96E" : "rgba(201,169,110,0.06)",
              border: tab === t.key ? "1px solid #C9A96E" : "1px solid rgba(201,169,110,0.15)",
              borderRadius: "10px",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              color: tab === t.key ? "#0A0806" : "#C9A96E",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "0 16px" }}>

        {tab === "collectifs" && (
          <div>
            <p style={{ fontSize: "12px", color: "#8A7E70", marginBottom: "16px" }}>
              HIIT • Yoga • Mobility • Cardio — Max 10 personnes
            </p>

            {/* Séances */}
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "#FAF6EE", marginBottom: "12px" }}>
              Séances & <em style={{ color: "#C9A96E" }}>Packs</em>
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
              {[
                { label: "Séance unique", detail: "1 séance", price: "10 000 F" },
                { label: "Pack Semaine", detail: "2 séances", price: "40 000 F" },
                { label: "Pack 10 séances", detail: "10 séances · 6 500 F/séance", price: "65 000 F", highlight: true },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 16px",
                    background: item.highlight ? "rgba(201,169,110,0.06)" : "#1A1714",
                    border: item.highlight ? "1px solid rgba(201,169,110,0.2)" : "1px solid rgba(201,169,110,0.06)",
                    borderRadius: "12px",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "14px", color: "#FAF6EE", fontWeight: 600 }}>{item.label}</div>
                    <div style={{ fontSize: "11px", color: "#8A7E70", marginTop: "2px" }}>{item.detail}</div>
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 700, color: "#C9A96E" }}>
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            {/* Abonnements */}
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "#FAF6EE", marginBottom: "12px" }}>
              <em style={{ color: "#C9A96E" }}>Abonnements</em>
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "Mensuel", detail: "8 séances/mois", price: "65 000 F" },
                { label: "Trimestriel", detail: "24 séances · éco. 75 000 F", price: "165 000 F", highlight: true },
                { label: "Semestriel", detail: "48 séances · 58 300 F/mois", price: "350 000 F" },
                { label: "Annuel", detail: "96 séances · éco. 336 000 F", price: "624 000 F" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 16px",
                    background: item.highlight ? "rgba(201,169,110,0.06)" : "#1A1714",
                    border: item.highlight ? "1px solid rgba(201,169,110,0.2)" : "1px solid rgba(201,169,110,0.06)",
                    borderRadius: "12px",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "14px", color: "#FAF6EE", fontWeight: 600 }}>{item.label}</div>
                    <div style={{ fontSize: "11px", color: "#8A7E70", marginTop: "2px" }}>{item.detail}</div>
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 700, color: "#C9A96E", textAlign: "right" }}>
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            {/* Avantages */}
            <div
              style={{
                marginTop: "16px",
                padding: "16px",
                background: "rgba(201,169,110,0.04)",
                border: "1px solid rgba(201,169,110,0.1)",
                borderRadius: "12px",
              }}
            >
              <div style={{ fontSize: "11px", fontWeight: 700, color: "#C9A96E", marginBottom: "10px", fontFamily: "'Montserrat', sans-serif" }}>
                Avantages abonnés
              </div>
              {["2 cours/semaine (8/mois)", "Réservation prioritaire", "1 invité gratuit/mois", "-15% coaching privé"].map((a) => (
                <div key={a} style={{ fontSize: "12px", color: "#9E8E7E", marginBottom: "5px" }}>✓ {a}</div>
              ))}
            </div>
          </div>
        )}

        {tab === "prive" && (
          <div>
            <p style={{ fontSize: "12px", color: "#8A7E70", marginBottom: "16px" }}>
              Programme sur mesure · Bilan initial · Suivi nutrition · Accès WhatsApp Coach Mimi
            </p>

            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "#FAF6EE", marginBottom: "12px" }}>
              Séances <em style={{ color: "#C9A96E" }}>Individuelles</em>
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
              {[
                { label: "Séance 1-on-1", detail: "1 heure · Programme personnalisé", price: "25 000 F" },
                { label: "Séance Duo", detail: "1 heure · 2 personnes", price: "40 000 F" },
                { label: "Séance Trio", detail: "1 heure · 3 personnes", price: "50 000 F" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 16px",
                    background: "#1A1714",
                    border: "1px solid rgba(201,169,110,0.08)",
                    borderRadius: "12px",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "14px", color: "#FAF6EE", fontWeight: 600 }}>{item.label}</div>
                    <div style={{ fontSize: "11px", color: "#8A7E70", marginTop: "2px" }}>{item.detail}</div>
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 700, color: "#C9A96E" }}>
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "#FAF6EE", marginBottom: "12px" }}>
              Packs <em style={{ color: "#C9A96E" }}>Coaching</em>
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "Pack 5 Privées", detail: "5 séances · éco. 15 000 F", price: "110 000 F" },
                { label: "Pack 10 Privées", detail: "10 séances · éco. 50 000 F", price: "200 000 F", highlight: true },
                { label: "Suivi Mensuel", detail: "8 séances/mois · éco. 20 000 F", price: "180 000 F" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 16px",
                    background: item.highlight ? "rgba(201,169,110,0.06)" : "#1A1714",
                    border: item.highlight ? "1px solid rgba(201,169,110,0.25)" : "1px solid rgba(201,169,110,0.08)",
                    borderRadius: "12px",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "14px", color: "#FAF6EE", fontWeight: 600 }}>{item.label}</div>
                    <div style={{ fontSize: "11px", color: "#8A7E70", marginTop: "2px" }}>{item.detail}</div>
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 700, color: "#C9A96E" }}>
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/2250715151408?text=Bonjour%20Coach%20Mimi%20!%20Je%20souhaite%20r%C3%A9server%20une%20s%C3%A9ance%20de%20coaching%20priv%C3%A9."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                marginTop: "20px",
                padding: "16px",
                background: "#C9A96E",
                borderRadius: "14px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#0A0806",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              📱 Réserver mon coaching privé
            </a>
          </div>
        )}

        {tab === "bootcamp" && (
          <div>
            <div
              style={{
                padding: "16px",
                background: "rgba(201,169,110,0.06)",
                border: "1px solid rgba(201,169,110,0.15)",
                borderRadius: "14px",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ fontSize: "28px" }}>🌊</span>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#FAF6EE" }}>La Maison d'Akoula — Assinie</div>
                <div style={{ fontSize: "11px", color: "#8A7E70" }}>1 weekend/mois · Mars à Décembre 2026</div>
              </div>
            </div>

            {/* Programme */}
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "#FAF6EE", marginBottom: "12px" }}>
              Programme <em style={{ color: "#C9A96E" }}>Type</em>
            </h3>
            {[
              { day: "SAMEDI", events: ["17h00 — Check-in", "18h00 — Pilates Sunset", "Soirée — Dîner libre"] },
              { day: "DIMANCHE", events: ["07h00 — Active Muscle", "09h00 — HIIT intense", "10h30 — Mobility Recovery", "12h00 — Brunch Les Jardins d'Eden", "14h00 — Départ"] },
            ].map((d) => (
              <div key={d.day} style={{ marginBottom: "12px", background: "#1A1714", border: "1px solid rgba(201,169,110,0.08)", borderRadius: "12px", overflow: "hidden" }}>
                <div style={{ padding: "8px 14px", background: "rgba(201,169,110,0.08)", fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "2px", color: "#C9A96E" }}>
                  {d.day}
                </div>
                <div style={{ padding: "10px 14px" }}>
                  {d.events.map((e) => (
                    <div key={e} style={{ fontSize: "12px", color: "#D4C4A8", marginBottom: "5px", display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C9A96E", flexShrink: 0 }} />
                      {e}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Tarifs */}
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "#FAF6EE", marginBottom: "12px", marginTop: "20px" }}>
              Formules & <em style={{ color: "#C9A96E" }}>Tarifs</em>
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { label: "Pass Dimanche", detail: "Pilates au sol + HIIT + Mobility", price: "30 000 F" },
                { label: "Pass Dimanche + Brunch", detail: "3 cours + Brunch Jardins d'Eden", price: "40 000 F", highlight: true },
                { label: "Retreat Solo", detail: "Chambre + 3 cours + Brunch", price: "95 000 F" },
                { label: "Retreat Duo", detail: "Chambre 2 pers + 3 cours + Brunch", price: "150 000 F" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 16px",
                    background: item.highlight ? "rgba(201,169,110,0.06)" : "#1A1714",
                    border: item.highlight ? "1px solid rgba(201,169,110,0.25)" : "1px solid rgba(201,169,110,0.08)",
                    borderRadius: "12px",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "13px", color: "#FAF6EE", fontWeight: 600 }}>{item.label}</div>
                    <div style={{ fontSize: "11px", color: "#8A7E70", marginTop: "2px" }}>{item.detail}</div>
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 700, color: "#C9A96E" }}>
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/2250715151408?text=Bonjour%20Coach%20Mimi%20!%20Je%20souhaite%20r%C3%A9server%20une%20place%20au%20Bootcamp%20Weekend%20Assinie."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                marginTop: "20px",
                padding: "16px",
                background: "#C9A96E",
                borderRadius: "14px",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#0A0806",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              🌊 Réserver le Bootcamp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
