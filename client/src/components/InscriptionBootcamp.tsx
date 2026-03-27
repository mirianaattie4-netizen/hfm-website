/* ============================================================
   HFM — Formulaire d'inscription Bootcamp Pilates
   Design : Dark Luxury Gold — Playfair Display + Montserrat
   ============================================================ */
import { useState } from "react";

type FormData = {
  prenom: string;
  nom: string;
  telephone: string;
  email: string;
  age: string;
  niveau: string;
  formule: string;
  weekend: string;
  hebergement: string;
  urgence_nom: string;
  urgence_tel: string;
  problemes_sante: string;
  objectif: string;
  comment: string;
  rgpd: boolean;
};

const initialForm: FormData = {
  prenom: "",
  nom: "",
  telephone: "",
  email: "",
  age: "",
  niveau: "",
  formule: "",
  weekend: "",
  hebergement: "",
  urgence_nom: "",
  urgence_tel: "",
  problemes_sante: "",
  objectif: "",
  comment: "",
  rgpd: false,
};

const niveaux = [
  { value: "debutant", label: "Débutante — jamais pratiqué le Pilates" },
  { value: "intermediaire", label: "Intermédiaire — quelques cours déjà suivis" },
  { value: "avance", label: "Avancée — pratique régulière" },
];

const formules = [
  { value: "pass_dimanche", label: "Pass Dimanche — Pilates + HIIT (1 jour)", prix: "25 000 F" },
  { value: "pass_brunch", label: "Pass + Brunch — Pilates + HIIT + Brunch", prix: "35 000 F" },
  { value: "retreat_solo", label: "Retreat Solo — Weekend complet (1 pers.)", prix: "75 000 F" },
  { value: "retreat_duo", label: "Retreat Duo — Weekend complet (2 pers.)", prix: "130 000 F" },
];

const weekends = [
  { value: "avril_2026", label: "Avril 2026 — Les Jardins d'Eden, Grand-Bassam" },
  { value: "juin_2026", label: "Juin 2026 — Les Jardins d'Eden, Grand-Bassam" },
  { value: "septembre_2026", label: "Septembre 2026 — Les Jardins d'Eden, Grand-Bassam" },
];

const objectifs = [
  "Renforcement musculaire",
  "Souplesse & mobilité",
  "Gestion du stress",
  "Perte de poids",
  "Récupération physique",
  "Découverte du Pilates",
];

export default function InscriptionBootcamp() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  const totalSteps = 3;

  const update = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateStep = (s: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (s === 1) {
      if (!form.prenom.trim()) newErrors.prenom = "Prénom requis";
      if (!form.nom.trim()) newErrors.nom = "Nom requis";
      if (!form.telephone.trim()) newErrors.telephone = "Téléphone requis";
      if (!form.age.trim()) newErrors.age = "Âge requis";
      if (!form.niveau) newErrors.niveau = "Niveau requis";
    }
    if (s === 2) {
      if (!form.formule) newErrors.formule = "Choisissez une formule";
      if (!form.weekend) newErrors.weekend = "Choisissez un weekend";
    }
    if (s === 3) {
      if (!form.urgence_nom.trim()) newErrors.urgence_nom = "Contact d'urgence requis";
      if (!form.urgence_tel.trim()) newErrors.urgence_tel = "Téléphone d'urgence requis";
      if (!form.rgpd) newErrors.rgpd = "Vous devez accepter les conditions";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, totalSteps));
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = () => {
    if (!validateStep(3)) return;

    const formuleLabel = formules.find((f) => f.value === form.formule)?.label || form.formule;
    const weekendLabel = weekends.find((w) => w.value === form.weekend)?.label || form.weekend;
    const niveauLabel = niveaux.find((n) => n.value === form.niveau)?.label || form.niveau;

    const msg = encodeURIComponent(
      `🌿 *INSCRIPTION BOOTCAMP PILATES — HFM*\n\n` +
      `👤 *Identité*\n` +
      `Prénom : ${form.prenom}\n` +
      `Nom : ${form.nom}\n` +
      `Téléphone : ${form.telephone}\n` +
      `Email : ${form.email || "Non renseigné"}\n` +
      `Âge : ${form.age} ans\n` +
      `Niveau : ${niveauLabel}\n\n` +
      `📋 *Inscription*\n` +
      `Formule : ${formuleLabel}\n` +
      `Weekend : ${weekendLabel}\n` +
      `Hébergement : ${form.hebergement || "Non précisé"}\n\n` +
      `🏥 *Santé & Sécurité*\n` +
      `Contact d'urgence : ${form.urgence_nom} — ${form.urgence_tel}\n` +
      `Problèmes de santé : ${form.problemes_sante || "Aucun"}\n\n` +
      `🎯 *Objectif*\n${form.objectif || "Non précisé"}\n\n` +
      `💬 *Message*\n${form.comment || "Aucun"}`
    );

    window.open(`https://wa.me/2250715151408?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="inscription" style={{ padding: "100px 0", background: "#0D0B09" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
          <div style={{
            width: "80px", height: "80px", borderRadius: "50%",
            background: "linear-gradient(135deg, #C9A96E, #E8D5A3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "36px", margin: "0 auto 30px",
          }}>✓</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 4vw, 42px)",
            color: "#FAF6EE",
            marginBottom: "20px",
          }}>
            Inscription <em style={{ color: "#C9A96E" }}>envoyée !</em>
          </h2>
          <p style={{ color: "#8A7E70", lineHeight: 1.8, marginBottom: "30px", fontSize: "15px" }}>
            Votre demande d'inscription a été transmise à Coach Mimi via WhatsApp.
            Elle vous confirmera votre place et les modalités de paiement dans les 24h.
          </p>
          <div style={{
            padding: "20px 30px",
            background: "rgba(201,169,110,0.06)",
            border: "1px solid rgba(201,169,110,0.15)",
            borderRadius: "14px",
            marginBottom: "30px",
          }}>
            <p style={{ color: "#C9A96E", fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "1.5px", marginBottom: "8px" }}>PROCHAINE ÉTAPE</p>
            <p style={{ color: "#FAF6EE", fontSize: "14px", lineHeight: 1.7 }}>
              Vérifiez WhatsApp — Coach Mimi vous contactera pour confirmer votre inscription et vous envoyer les instructions de paiement (Wave / Orange Money / Virement).
            </p>
          </div>
          <button
            onClick={() => { setSubmitted(false); setForm(initialForm); setStep(1); }}
            style={{
              padding: "14px 32px",
              background: "transparent",
              border: "1px solid rgba(201,169,110,0.3)",
              borderRadius: "8px",
              color: "#C9A96E",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              cursor: "pointer",
            }}
          >
            NOUVELLE INSCRIPTION
          </button>
        </div>
      </section>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(201,169,110,0.15)",
    borderRadius: "10px",
    color: "#FAF6EE",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.3s",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "1.5px",
    color: "#9E8E7E",
    marginBottom: "8px",
    textTransform: "uppercase",
  };

  const errorStyle: React.CSSProperties = {
    color: "#C45B4A",
    fontSize: "11px",
    marginTop: "5px",
    fontFamily: "'Montserrat', sans-serif",
  };

  const fieldStyle: React.CSSProperties = { marginBottom: "22px" };

  return (
    <section id="inscription" style={{ padding: "100px 0", background: "#0D0B09", position: "relative" }}>
      {/* Background subtle pattern */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 20% 50%, rgba(201,169,110,0.03) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(201,169,110,0.02) 0%, transparent 50%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 2rem", position: "relative" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{
            display: "inline-block",
            padding: "6px 20px",
            border: "1px solid rgba(201,169,110,0.3)",
            borderRadius: "30px",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "3px",
            color: "#C9A96E",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}>
            Bootcamp — Les Jardins d'Eden
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(30px, 5vw, 50px)",
            fontWeight: 500,
            color: "#FAF6EE",
            marginBottom: "16px",
            lineHeight: 1.2,
          }}>
            Formulaire d'<em style={{ color: "#C9A96E", fontStyle: "italic" }}>Inscription</em>
          </h2>
          <p style={{ color: "#8A7E70", fontSize: "15px", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto" }}>
            Remplissez ce formulaire pour réserver votre place au Bootcamp Pilates à Grand-Bassam.
            Coach Mimi vous confirmera votre inscription sous 24h.
          </p>
        </div>

        {/* Progress bar */}
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
            {["Votre profil", "Votre inscription", "Santé & Confirmation"].map((label, i) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: step > i + 1 ? "#C9A96E" : step === i + 1 ? "linear-gradient(135deg, #C9A96E, #E8D5A3)" : "rgba(201,169,110,0.1)",
                  border: step === i + 1 ? "none" : step > i + 1 ? "none" : "1px solid rgba(201,169,110,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px", fontWeight: 800,
                  color: step >= i + 1 ? "#0A0806" : "#5A4E42",
                  flexShrink: 0,
                }}>
                  {step > i + 1 ? "✓" : i + 1}
                </div>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "11px", fontWeight: 600,
                  color: step === i + 1 ? "#C9A96E" : "#5A4E42",
                  display: window.innerWidth < 480 ? "none" : "block",
                }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div style={{ height: "3px", background: "rgba(201,169,110,0.1)", borderRadius: "3px" }}>
            <div style={{
              height: "100%",
              width: `${((step - 1) / (totalSteps - 1)) * 100}%`,
              background: "linear-gradient(90deg, #C9A96E, #E8D5A3)",
              borderRadius: "3px",
              transition: "width 0.4s ease",
            }} />
          </div>
        </div>

        {/* Form card */}
        <div style={{
          background: "#1A1714",
          border: "1px solid rgba(201,169,110,0.1)",
          borderRadius: "20px",
          padding: "clamp(24px, 5vw, 48px)",
        }}>

          {/* ===== STEP 1 : Profil ===== */}
          {step === 1 && (
            <div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "22px",
                color: "#FAF6EE",
                marginBottom: "30px",
                paddingBottom: "16px",
                borderBottom: "1px solid rgba(201,169,110,0.08)",
              }}>
                Votre profil
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }} className="form-grid">
                <div style={fieldStyle}>
                  <label style={labelStyle}>Prénom *</label>
                  <input
                    type="text"
                    value={form.prenom}
                    onChange={(e) => update("prenom", e.target.value)}
                    placeholder="Miriana"
                    style={{ ...inputStyle, borderColor: errors.prenom ? "#C45B4A" : "rgba(201,169,110,0.15)" }}
                  />
                  {errors.prenom && <p style={errorStyle}>{errors.prenom}</p>}
                </div>

                <div style={fieldStyle}>
                  <label style={labelStyle}>Nom *</label>
                  <input
                    type="text"
                    value={form.nom}
                    onChange={(e) => update("nom", e.target.value)}
                    placeholder="Attie"
                    style={{ ...inputStyle, borderColor: errors.nom ? "#C45B4A" : "rgba(201,169,110,0.15)" }}
                  />
                  {errors.nom && <p style={errorStyle}>{errors.nom}</p>}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }} className="form-grid">
                <div style={fieldStyle}>
                  <label style={labelStyle}>Téléphone (WhatsApp) *</label>
                  <input
                    type="tel"
                    value={form.telephone}
                    onChange={(e) => update("telephone", e.target.value)}
                    placeholder="+225 07 XX XX XX XX"
                    style={{ ...inputStyle, borderColor: errors.telephone ? "#C45B4A" : "rgba(201,169,110,0.15)" }}
                  />
                  {errors.telephone && <p style={errorStyle}>{errors.telephone}</p>}
                </div>

                <div style={fieldStyle}>
                  <label style={labelStyle}>Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="votre@email.com"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }} className="form-grid">
                <div style={fieldStyle}>
                  <label style={labelStyle}>Âge *</label>
                  <input
                    type="number"
                    value={form.age}
                    onChange={(e) => update("age", e.target.value)}
                    placeholder="35"
                    min="16"
                    max="80"
                    style={{ ...inputStyle, borderColor: errors.age ? "#C45B4A" : "rgba(201,169,110,0.15)" }}
                  />
                  {errors.age && <p style={errorStyle}>{errors.age}</p>}
                </div>

                <div style={fieldStyle}>
                  <label style={labelStyle}>Niveau en Pilates *</label>
                  <select
                    value={form.niveau}
                    onChange={(e) => update("niveau", e.target.value)}
                    style={{ ...inputStyle, borderColor: errors.niveau ? "#C45B4A" : "rgba(201,169,110,0.15)", appearance: "none" }}
                  >
                    <option value="" style={{ background: "#1A1714" }}>Choisir votre niveau</option>
                    {niveaux.map((n) => (
                      <option key={n.value} value={n.value} style={{ background: "#1A1714" }}>{n.label}</option>
                    ))}
                  </select>
                  {errors.niveau && <p style={errorStyle}>{errors.niveau}</p>}
                </div>
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Comment avez-vous entendu parler de HFM ?</label>
                <select
                  value={form.comment}
                  onChange={(e) => update("comment", e.target.value)}
                  style={{ ...inputStyle, appearance: "none" }}
                >
                  <option value="" style={{ background: "#1A1714" }}>Sélectionner</option>
                  <option value="instagram" style={{ background: "#1A1714" }}>Instagram @coachmimi87</option>
                  <option value="bouche_a_oreille" style={{ background: "#1A1714" }}>Bouche à oreille</option>
                  <option value="whatsapp" style={{ background: "#1A1714" }}>Groupe WhatsApp</option>
                  <option value="ami" style={{ background: "#1A1714" }}>Recommandation d'une amie</option>
                  <option value="autre" style={{ background: "#1A1714" }}>Autre</option>
                </select>
              </div>
            </div>
          )}

          {/* ===== STEP 2 : Inscription ===== */}
          {step === 2 && (
            <div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "22px",
                color: "#FAF6EE",
                marginBottom: "30px",
                paddingBottom: "16px",
                borderBottom: "1px solid rgba(201,169,110,0.08)",
              }}>
                Votre inscription
              </h3>

              <div style={fieldStyle}>
                <label style={labelStyle}>Choisissez votre formule *</label>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {formules.map((f) => (
                    <label
                      key={f.value}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "16px 20px",
                        background: form.formule === f.value ? "rgba(201,169,110,0.08)" : "rgba(255,255,255,0.02)",
                        border: `1px solid ${form.formule === f.value ? "rgba(201,169,110,0.4)" : "rgba(201,169,110,0.1)"}`,
                        borderRadius: "12px",
                        cursor: "pointer",
                        transition: "all 0.3s",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                        <div style={{
                          width: "18px", height: "18px", borderRadius: "50%",
                          border: `2px solid ${form.formule === f.value ? "#C9A96E" : "rgba(201,169,110,0.3)"}`,
                          background: form.formule === f.value ? "#C9A96E" : "transparent",
                          flexShrink: 0,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          {form.formule === f.value && (
                            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0A0806" }} />
                          )}
                        </div>
                        <div>
                          <p style={{ color: "#FAF6EE", fontSize: "14px", fontWeight: 600, fontFamily: "'Montserrat', sans-serif", marginBottom: "2px" }}>
                            {f.label.split(" — ")[0]}
                          </p>
                          <p style={{ color: "#8A7E70", fontSize: "12px", fontFamily: "'Montserrat', sans-serif" }}>
                            {f.label.split(" — ")[1]}
                          </p>
                        </div>
                      </div>
                      <span style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#C9A96E",
                        flexShrink: 0,
                      }}>
                        {f.prix}
                      </span>
                      <input
                        type="radio"
                        name="formule"
                        value={f.value}
                        checked={form.formule === f.value}
                        onChange={(e) => update("formule", e.target.value)}
                        style={{ display: "none" }}
                      />
                    </label>
                  ))}
                </div>
                {errors.formule && <p style={errorStyle}>{errors.formule}</p>}
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Weekend souhaité *</label>
                <select
                  value={form.weekend}
                  onChange={(e) => update("weekend", e.target.value)}
                  style={{ ...inputStyle, borderColor: errors.weekend ? "#C45B4A" : "rgba(201,169,110,0.15)", appearance: "none" }}
                >
                  <option value="" style={{ background: "#1A1714" }}>Choisir un weekend</option>
                  {weekends.map((w) => (
                    <option key={w.value} value={w.value} style={{ background: "#1A1714" }}>{w.label}</option>
                  ))}
                </select>
                {errors.weekend && <p style={errorStyle}>{errors.weekend}</p>}
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Hébergement souhaité</label>
                <select
                  value={form.hebergement}
                  onChange={(e) => update("hebergement", e.target.value)}
                  style={{ ...inputStyle, appearance: "none" }}
                >
                  <option value="" style={{ background: "#1A1714" }}>Non précisé</option>
                  <option value="sur_place" style={{ background: "#1A1714" }}>Sur place — Les Jardins d'Eden</option>
                  <option value="propre" style={{ background: "#1A1714" }}>Hébergement personnel</option>
                  <option value="navette" style={{ background: "#1A1714" }}>Navette Abidjan ↔ Bassam</option>
                </select>
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Votre objectif principal</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {objectifs.map((obj) => (
                    <button
                      key={obj}
                      type="button"
                      onClick={() => update("objectif", form.objectif === obj ? "" : obj)}
                      style={{
                        padding: "10px 18px",
                        background: form.objectif === obj ? "rgba(201,169,110,0.15)" : "rgba(255,255,255,0.02)",
                        border: `1px solid ${form.objectif === obj ? "rgba(201,169,110,0.5)" : "rgba(201,169,110,0.1)"}`,
                        borderRadius: "8px",
                        color: form.objectif === obj ? "#C9A96E" : "#8A7E70",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "12px",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.3s",
                      }}
                    >
                      {obj}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ===== STEP 3 : Santé & Confirmation ===== */}
          {step === 3 && (
            <div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "22px",
                color: "#FAF6EE",
                marginBottom: "30px",
                paddingBottom: "16px",
                borderBottom: "1px solid rgba(201,169,110,0.08)",
              }}>
                Santé & Confirmation
              </h3>

              {/* Récapitulatif */}
              <div style={{
                padding: "20px",
                background: "rgba(201,169,110,0.04)",
                border: "1px solid rgba(201,169,110,0.1)",
                borderRadius: "14px",
                marginBottom: "30px",
              }}>
                <p style={{ color: "#C9A96E", fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "2px", marginBottom: "14px" }}>
                  RÉCAPITULATIF
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  {[
                    ["Participant", `${form.prenom} ${form.nom}`],
                    ["Formule", formules.find((f) => f.value === form.formule)?.label.split(" — ")[0] || "—"],
                    ["Weekend", weekends.find((w) => w.value === form.weekend)?.label.split(" — ")[0] || "—"],
                    ["Niveau", niveaux.find((n) => n.value === form.niveau)?.label.split(" — ")[0] || "—"],
                    ["Prix", formules.find((f) => f.value === form.formule)?.prix || "—"],
                    ["Objectif", form.objectif || "Non précisé"],
                  ].map(([key, val]) => (
                    <div key={key}>
                      <p style={{ color: "#5A4E42", fontSize: "10px", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, letterSpacing: "1px" }}>{key}</p>
                      <p style={{ color: "#FAF6EE", fontSize: "13px", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>{val}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }} className="form-grid">
                <div style={fieldStyle}>
                  <label style={labelStyle}>Contact d'urgence — Nom *</label>
                  <input
                    type="text"
                    value={form.urgence_nom}
                    onChange={(e) => update("urgence_nom", e.target.value)}
                    placeholder="Nom & Prénom"
                    style={{ ...inputStyle, borderColor: errors.urgence_nom ? "#C45B4A" : "rgba(201,169,110,0.15)" }}
                  />
                  {errors.urgence_nom && <p style={errorStyle}>{errors.urgence_nom}</p>}
                </div>

                <div style={fieldStyle}>
                  <label style={labelStyle}>Contact d'urgence — Téléphone *</label>
                  <input
                    type="tel"
                    value={form.urgence_tel}
                    onChange={(e) => update("urgence_tel", e.target.value)}
                    placeholder="+225 07 XX XX XX XX"
                    style={{ ...inputStyle, borderColor: errors.urgence_tel ? "#C45B4A" : "rgba(201,169,110,0.15)" }}
                  />
                  {errors.urgence_tel && <p style={errorStyle}>{errors.urgence_tel}</p>}
                </div>
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Problèmes de santé / blessures à signaler</label>
                <textarea
                  value={form.problemes_sante}
                  onChange={(e) => update("problemes_sante", e.target.value)}
                  placeholder="Douleurs lombaires, genoux fragiles, grossesse, opération récente... (ou 'Aucun')"
                  rows={3}
                  style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
                />
              </div>

              {/* RGPD */}
              <div style={{ marginBottom: "30px" }}>
                <label style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  cursor: "pointer",
                }}>
                  <div
                    onClick={() => update("rgpd", !form.rgpd)}
                    style={{
                      width: "20px", height: "20px",
                      borderRadius: "5px",
                      border: `2px solid ${errors.rgpd ? "#C45B4A" : form.rgpd ? "#C9A96E" : "rgba(201,169,110,0.3)"}`,
                      background: form.rgpd ? "#C9A96E" : "transparent",
                      flexShrink: 0,
                      marginTop: "2px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.3s",
                    }}
                  >
                    {form.rgpd && <span style={{ color: "#0A0806", fontSize: "12px", fontWeight: 900 }}>✓</span>}
                  </div>
                  <span style={{ color: "#8A7E70", fontSize: "13px", lineHeight: 1.7, fontFamily: "'Montserrat', sans-serif" }}>
                    J'accepte que mes informations soient utilisées par Coach Mimi / HFM pour la gestion de mon inscription au Bootcamp Pilates. Aucune donnée ne sera partagée avec des tiers. *
                  </span>
                </label>
                {errors.rgpd && <p style={{ ...errorStyle, marginTop: "8px" }}>{errors.rgpd}</p>}
              </div>

              {/* Info paiement */}
              <div style={{
                padding: "16px 20px",
                background: "rgba(201,169,110,0.04)",
                border: "1px solid rgba(201,169,110,0.1)",
                borderRadius: "10px",
                marginBottom: "10px",
              }}>
                <p style={{ color: "#C9A96E", fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", marginBottom: "6px" }}>
                  PAIEMENT
                </p>
                <p style={{ color: "#8A7E70", fontSize: "12px", lineHeight: 1.7, fontFamily: "'Montserrat', sans-serif" }}>
                  Le paiement s'effectue après confirmation par Coach Mimi via WhatsApp. Modes acceptés : Wave · Orange Money · Virement bancaire · Espèces.
                </p>
              </div>
            </div>
          )}

          {/* Navigation boutons */}
          <div style={{
            display: "flex",
            justifyContent: step === 1 ? "flex-end" : "space-between",
            marginTop: "36px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(201,169,110,0.08)",
            gap: "16px",
          }}>
            {step > 1 && (
              <button
                onClick={prevStep}
                style={{
                  padding: "14px 28px",
                  background: "transparent",
                  border: "1px solid rgba(201,169,110,0.2)",
                  borderRadius: "10px",
                  color: "#9E8E7E",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.4)"; (e.currentTarget as HTMLElement).style.color = "#C9A96E"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.2)"; (e.currentTarget as HTMLElement).style.color = "#9E8E7E"; }}
              >
                ← RETOUR
              </button>
            )}

            {step < totalSteps ? (
              <button
                onClick={nextStep}
                style={{
                  padding: "14px 36px",
                  background: "linear-gradient(135deg, #C9A96E, #E8D5A3)",
                  border: "none",
                  borderRadius: "10px",
                  color: "#0A0806",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  boxShadow: "0 4px 20px rgba(201,169,110,0.3)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(201,169,110,0.4)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(201,169,110,0.3)"; }}
              >
                ÉTAPE SUIVANTE →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                style={{
                  padding: "14px 36px",
                  background: "linear-gradient(135deg, #C9A96E, #E8D5A3)",
                  border: "none",
                  borderRadius: "10px",
                  color: "#0A0806",
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  boxShadow: "0 4px 20px rgba(201,169,110,0.3)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                ✓ ENVOYER MON INSCRIPTION
              </button>
            )}
          </div>
        </div>

        {/* Garanties */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "clamp(16px, 4vw, 40px)",
          flexWrap: "wrap",
          marginTop: "40px",
        }}>
          {[
            { icon: "🔒", text: "Données sécurisées" },
            { icon: "✅", text: "Confirmation sous 24h" },
            { icon: "💛", text: "Annulation flexible" },
          ].map((g) => (
            <div key={g.text} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "16px" }}>{g.icon}</span>
              <span style={{ color: "#5A4E42", fontSize: "12px", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>{g.text}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
