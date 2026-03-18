/* ============================================================
   HFM PWA — Application Mobile Principale
   Navigation par onglets en bas (iOS/Android style)
   Design: Dark Luxury Performance · Noir #0A0806 + Or #C9A96E
   ============================================================ */
import { useState, useEffect } from "react";
import HomeTab from "./mobile/HomeTab";
import ProgrammesTab from "./mobile/ProgrammesTab";
import EntrepriseTab from "./mobile/EntrepriseTab";
import ContactTab from "./mobile/ContactTab";

type Tab = "home" | "programmes" | "entreprise" | "contact";

const tabs: { key: Tab; icon: string; label: string }[] = [
  { key: "home", icon: "🏠", label: "Accueil" },
  { key: "programmes", icon: "💪", label: "Programmes" },
  { key: "entreprise", icon: "🏢", label: "Entreprise" },
  { key: "contact", icon: "📱", label: "Contact" },
];

export default function MobileApp() {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShowInstallBanner(false);
      setDeferredPrompt(null);
    }
  };

  const renderTab = () => {
    switch (activeTab) {
      case "home": return <HomeTab />;
      case "programmes": return <ProgrammesTab />;
      case "entreprise": return <EntrepriseTab />;
      case "contact": return <ContactTab />;
    }
  };

  return (
    <div
      style={{
        background: "#0A0806",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        maxWidth: "480px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Install Banner */}
      {showInstallBanner && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "480px",
            zIndex: 2000,
            padding: "12px 16px",
            background: "rgba(10,8,6,0.97)",
            borderBottom: "1px solid rgba(201,169,110,0.2)",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            backdropFilter: "blur(20px)",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              background: "linear-gradient(135deg, #A8883F, #C9A96E)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "14px",
              color: "#0A0806",
              flexShrink: 0,
            }}
          >
            H
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "#FAF6EE" }}>Installer HFM</div>
            <div style={{ fontSize: "10px", color: "#8A7E70" }}>Ajouter à l'écran d'accueil</div>
          </div>
          <button
            onClick={handleInstall}
            style={{
              padding: "8px 14px",
              background: "#C9A96E",
              borderRadius: "8px",
              border: "none",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "10px",
              fontWeight: 800,
              color: "#0A0806",
              cursor: "pointer",
            }}
          >
            Installer
          </button>
          <button
            onClick={() => setShowInstallBanner(false)}
            style={{
              background: "none",
              border: "none",
              color: "#8A7E70",
              fontSize: "16px",
              cursor: "pointer",
              padding: "4px",
            }}
          >
            ✕
          </button>
        </div>
      )}

      {/* Top Bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          padding: "env(safe-area-inset-top, 12px) 16px 12px",
          background: "rgba(10,8,6,0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(201,169,110,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "linear-gradient(135deg, #A8883F, #C9A96E)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "13px",
              color: "#0A0806",
            }}
          >
            H
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: "13px",
                letterSpacing: "2px",
                color: "#FAF6EE",
                lineHeight: 1.2,
              }}
            >
              HFM
            </div>
            <div style={{ fontSize: "8px", color: "#9E8E7E", letterSpacing: "1px" }}>
              Coach Mimi · Abidjan
            </div>
          </div>
        </div>
        <a
          href="https://wa.me/2250715151408"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "8px 14px",
            background: "#25D366",
            borderRadius: "20px",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "10px",
            fontWeight: 700,
            color: "#fff",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          📱 WhatsApp
        </a>
      </div>

      {/* Scrollable Content */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          WebkitOverflowScrolling: "touch",
        } as React.CSSProperties}
      >
        {renderTab()}
      </div>

      {/* Bottom Tab Bar */}
      <div
        style={{
          position: "sticky",
          bottom: 0,
          background: "rgba(10,8,6,0.97)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(201,169,110,0.1)",
          paddingBottom: "env(safe-area-inset-bottom, 8px)",
          display: "flex",
          zIndex: 100,
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              flex: 1,
              padding: "10px 4px 8px",
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "3px",
              position: "relative",
            }}
          >
            {activeTab === tab.key && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "20%",
                  right: "20%",
                  height: "2px",
                  background: "#C9A96E",
                  borderRadius: "0 0 2px 2px",
                }}
              />
            )}
            <span
              style={{
                fontSize: "20px",
                filter: activeTab === tab.key ? "none" : "grayscale(1) opacity(0.5)",
                transition: "filter 0.2s",
              }}
            >
              {tab.icon}
            </span>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "9px",
                fontWeight: activeTab === tab.key ? 700 : 500,
                color: activeTab === tab.key ? "#C9A96E" : "#6B5B4E",
                letterSpacing: "0.5px",
                transition: "color 0.2s",
              }}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
