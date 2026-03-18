/* ============================================================
   HFM Home Page — Assemblage de toutes les sections
   Design: Dark Luxury Performance
   Palette: #0A0806 (bg) + #C9A96E (gold) + #FAF6EE (cream)
   Typography: Playfair Display + Montserrat
   ============================================================ */
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MethodeSection from "@/components/MethodeSection";
import ProgrammesSection from "@/components/ProgrammesSection";
import EntreprisesSection from "@/components/EntreprisesSection";
import KidsSection from "@/components/KidsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TarifsSection from "@/components/TarifsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ background: "#0A0806", minHeight: "100vh" }}>
      <Navigation />
      <HeroSection />
      <MethodeSection />
      <ProgrammesSection />
      <EntreprisesSection />
      <KidsSection />
      <TestimonialsSection />
      <TarifsSection />
      <ContactSection />
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/2250715151408"
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
          animation: "pulse-wa 2s infinite",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 30px rgba(37,211,102,0.5)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.4)";
        }}
        title="Contacter Coach Mimi sur WhatsApp"
      >
        📱
      </a>

      <style>{`
        @keyframes pulse-wa {
          0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.4); }
          50% { box-shadow: 0 4px 35px rgba(37,211,102,0.6); }
        }
      `}</style>
    </div>
  );
}
