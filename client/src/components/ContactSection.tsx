/* ============================================================
   HFM Contact Section — Formulaire + Informations de contact
   ============================================================ */
import { useEffect, useState } from "react";

const locations = [
  { name: "Cocody", icon: "🏙️", detail: "Riviera, Angré, Deux Plateaux" },
  { name: "Marcory", icon: "🌊", detail: "Zone 4, Marcory Résidentiel" },
  { name: "Plateau", icon: "🏢", detail: "Centre-ville, Entreprises" },
  { name: "Bingerville", icon: "🌿", detail: "Résidentiel, Villas" },
  { name: "Treichville", icon: "🏘️", detail: "Quartiers résidentiels" },
  { name: "Yopougon", icon: "🌆", detail: "Secteurs résidentiels" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Bonjour Coach Mimi ! 👋%0A%0ANom : ${formData.name}%0AEmail : ${formData.email}%0ATéléphone : ${formData.phone}%0AService : ${formData.service}%0AMessage : ${formData.message}`;
    window.open(`https://wa.me/2250715151408?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{ padding: "100px 0", background: "#12100C", position: "relative" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <div className="section-label reveal">Nous Rejoindre</div>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 500,
              color: "#FAF6EE",
              marginBottom: "15px",
            }}
          >
            Commencez votre <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Transformation</em>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{ fontSize: "14px", color: "#8A7E70", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}
          >
            Contactez Coach Mimi pour une consultation gratuite et démarrez votre parcours bien-être dès aujourd'hui.
          </p>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}
          className="contact-grid"
        >
          {/* Form */}
          <div className="reveal">
            {submitted ? (
              <div
                style={{
                  padding: "50px",
                  background: "rgba(107,158,120,0.1)",
                  border: "1px solid rgba(107,158,120,0.3)",
                  borderRadius: "20px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "60px", marginBottom: "20px" }}>✅</div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "28px",
                    color: "#FAF6EE",
                    marginBottom: "15px",
                  }}
                >
                  Message envoyé !
                </h3>
                <p style={{ color: "#8A7E70", lineHeight: 1.7 }}>
                  Coach Mimi vous répondra dans les plus brefs délais via WhatsApp.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: "25px",
                    padding: "12px 28px",
                    background: "#C9A96E",
                    color: "#0A0806",
                    border: "none",
                    borderRadius: "8px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  Nouveau Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "#1A1714",
                  border: "1px solid rgba(201,169,110,0.1)",
                  borderRadius: "20px",
                  padding: "40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "22px",
                    color: "#FAF6EE",
                    marginBottom: "5px",
                  }}
                >
                  Prendre Contact
                </h3>

                {[
                  { key: "name", label: "Votre Nom", type: "text", placeholder: "Fatou Konaté" },
                  { key: "email", label: "Email", type: "email", placeholder: "fatou@email.com" },
                  { key: "phone", label: "Téléphone / WhatsApp", type: "tel", placeholder: "+225 07 XX XX XX XX" },
                ].map((field) => (
                  <div key={field.key}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        color: "#C9A96E",
                        marginBottom: "8px",
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={(formData as any)[field.key]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        background: "rgba(201,169,110,0.04)",
                        border: "1px solid rgba(201,169,110,0.12)",
                        borderRadius: "8px",
                        color: "#FAF6EE",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "13px",
                        outline: "none",
                        transition: "border-color 0.3s",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.12)")}
                    />
                  </div>
                ))}

                {/* Service Select */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: "#C9A96E",
                      marginBottom: "8px",
                    }}
                  >
                    Service Souhaité
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "#1A1714",
                      border: "1px solid rgba(201,169,110,0.12)",
                      borderRadius: "8px",
                      color: formData.service ? "#FAF6EE" : "#8A7E70",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "13px",
                      outline: "none",
                      cursor: "pointer",
                      boxSizing: "border-box",
                    }}
                  >
                    <option value="" style={{ background: "#1A1714" }}>Choisir un service...</option>
                    <option value="Coaching à domicile" style={{ background: "#1A1714" }}>Coaching à domicile</option>
                    <option value="Coaching VIP privé" style={{ background: "#1A1714" }}>Coaching VIP privé</option>
                    <option value="Programme digital" style={{ background: "#1A1714" }}>Programme digital</option>
                    <option value="Programme entreprise" style={{ background: "#1A1714" }}>Programme entreprise</option>
                    <option value="HFM Kids World" style={{ background: "#1A1714" }}>HFM Kids World</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: "#C9A96E",
                      marginBottom: "8px",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Décrivez vos objectifs, disponibilités..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(201,169,110,0.04)",
                      border: "1px solid rgba(201,169,110,0.12)",
                      borderRadius: "8px",
                      color: "#FAF6EE",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "13px",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.3s",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.12)")}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    padding: "16px",
                    background: "#C9A96E",
                    color: "#0A0806",
                    border: "none",
                    borderRadius: "8px",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#D4BC8B";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(201,169,110,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#C9A96E";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  📱 Envoyer via WhatsApp
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            {/* Direct contacts */}
            <div className="reveal" style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "22px",
                  color: "#FAF6EE",
                  marginBottom: "25px",
                }}
              >
                Contactez-nous <em style={{ color: "#C9A96E", fontStyle: "italic" }}>Directement</em>
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {[
                  {
                    icon: "📱",
                    label: "WhatsApp",
                    value: "+225 07 15 15 14 08",
                    link: "https://wa.me/2250715151408",
                    color: "#25D366",
                  },
                  {
                    icon: "📧",
                    label: "Email",
                    value: "mirianaattie4@gmail.com",
                    link: "mailto:mirianaattie4@gmail.com",
                    color: "#C9A96E",
                  },
                  {
                    icon: "📸",
                    label: "Instagram",
                    value: "@hfm_coachmimi",
                    link: "https://instagram.com/hfm_coachmimi",
                    color: "#E1306C",
                  },
                  {
                    icon: "📘",
                    label: "Facebook",
                    value: "HFM Coach Mimi",
                    link: "https://facebook.com",
                    color: "#1877F2",
                  },
                ].map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      padding: "16px 20px",
                      background: "#1A1714",
                      border: "1px solid rgba(201,169,110,0.08)",
                      borderRadius: "12px",
                      textDecoration: "none",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(201,169,110,0.2)";
                      el.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(201,169,110,0.08)";
                      el.style.transform = "translateX(0)";
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        background: `${contact.color}15`,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                        flexShrink: 0,
                      }}
                    >
                      {contact.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "10px", fontWeight: 700, color: "#8A7E70", letterSpacing: "1px", textTransform: "uppercase" }}>
                        {contact.label}
                      </div>
                      <div style={{ fontSize: "14px", color: "#FAF6EE", marginTop: "2px" }}>{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Zones d'intervention */}
            <div className="reveal reveal-delay-2">
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px",
                  color: "#FAF6EE",
                  marginBottom: "20px",
                }}
              >
                Zones <em style={{ color: "#C9A96E", fontStyle: "italic" }}>d'Intervention</em>
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                {locations.map((loc) => (
                  <div
                    key={loc.name}
                    style={{
                      padding: "14px 12px",
                      background: "rgba(201,169,110,0.04)",
                      border: "1px solid rgba(201,169,110,0.08)",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "20px", marginBottom: "5px" }}>{loc.icon}</div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#FAF6EE" }}>{loc.name}</div>
                    <div style={{ fontSize: "10px", color: "#8A7E70", marginTop: "2px" }}>{loc.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
