/* ============================================================
   HFM PWA — Onglet Inscription Bootcamp Pilates
   Design: Dark Luxury Gold — Mobile First
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
  prenom: "", nom: "", telephone: "", email: "", age: "",
  niveau: "", formule: "", weekend: "", hebergement: "",
  urgence_nom: "", urgence_tel: "", problemes_sante: "",
  objectif: "", comment: "", rgpd: false,
};

const niveaux = [
  { value: "debutant", label: "Débutante" },
  { value: "intermediaire", label: "Intermédiaire" },
  { value: "avance", label: "Avancée" },
];

const formules = [
  { value: "pass_dimanche", label: "Pass Dimanche", desc: "Pilates + HIIT (1 jour)", prix: "25 000 F" },
  { value: "pass_brunch", label: "Pass + Brunch", desc: "Pilates + HIIT + Brunch", prix: "35 000 F" },
  { value: "retreat_solo", label: "Retreat Solo", desc: "Weekend complet (1 pers.)", prix: "75 000 F" },
  { value: "retreat_duo", label: "Retreat Duo", desc: "Weekend complet (2 pers.)", prix: "130 000 F" },
];

const weekends = [
  { value: "avril_2026", label: "Avril 2026" },
  { value: "juin_2026", label: "Juin 2026" },
  { value: "septembre_2026", label: "Septembre 2026" },
];

const objectifs = [
  "Renforcement", "Souplesse", "Anti-stress",
  "Perte de poids", "Récupération", "Découverte",
];

export default function InscriptionTab() {
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
    const e: Partial<Record<keyof FormData, string>> = {};
    if (s === 1) {
      if (!form.prenom.trim()) e.prenom = "Requis";
      if (!form.nom.trim()) e.nom = "Requis";
      if (!form.telephone.trim()) e.telephone = "Requis";
      if (!form.age.trim()) e.age = "Requis";
      if (!form.niveau) e.niveau = "Requis";
    }
    if (s === 2) {
      if (!form.formule) e.formule = "Choisissez une formule";
      if (!form.weekend) e.weekend = "Choisissez un weekend";
    }
    if (s === 3) {
      if (!form.urgence_nom.trim()) e.urgence_nom = "Requis";
      if (!form.urgence_tel.trim()) e.urgence_tel = "Requis";
      if (!form.rgpd) e.rgpd = "Acceptation requise";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const nextStep = () => { if (validateStep(step)) setStep((s) => Math.min(s + 1, totalSteps)); };
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = () => {
    if (!validateStep(3)) return;
    const formuleLabel = formules.find((f) => f.value === form.formule)?.label || form.formule;
    const weekendLabel = weekends.find((w) => w.value === form.weekend)?.label || form.weekend;
    const niveauLabel = niveaux.find((n) => n.value === form.niveau)?.label || form.niveau;
    const msg = encodeURIComponent(
      `🌿 *INSCRIPTION BOOTCAMP PILATES — HFM*\n\n` +
      `👤 ${form.prenom} ${form.nom} | ${form.age} ans | ${niveauLabel}\n` +
      `📱 ${form.telephone}\n` +
      `📧 ${form.email || "—"}\n\n` +
      `📋 Formule : ${formuleLabel}\n` +
      `📅 Weekend : ${weekendLabel}\n` +
      `🏨 Hébergement : ${form.hebergement || "Non précisé"}\n\n` +
      `🏥 Urgence : ${form.urgence_nom} — ${form.urgence_tel}\n` +
      `Santé : ${form.problemes_sante || "Aucun problème"}\n\n` +
      `🎯 Objectif : ${form.objectif || "Non précisé"}\n` +
      `💬 ${form.comment || ""}`
    );
    window.open(`https://wa.me/2250715151408?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const gold = "#C9A96E";
  const bg = "#0A0806";
  const card = "#1A1714";

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "13px 16px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(201,169,110,0.15)",
    borderRadius: "10px", color: "#FAF6EE",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "14px", outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "10px", fontWeight: 700,
    letterSpacing: "1.5px", color: "#9E8E7E",
    marginBottom: "7px", textTransform: "uppercase",
  };

  const errStyle: React.CSSProperties = {
    color: "#C45B4A", fontSize: "10px",
    marginTop: "4px", fontFamily: "'Montserrat', sans-serif",
  };

  if (submitted) {
    return (
      <div style={{ padding: "40px 20px", textAlign: "center", background: bg, minHeight: "100vh" }}>
        <div style={{
          width: "70px", height: "70px", borderRadius: "50%",
          background: `linear-gradient(135deg, ${gold}, #E8D5A3)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "30px", margin: "0 auto 24px",
        }}>✓</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", color: "#FAF6EE", marginBottom: "16px" }}>
          Inscription <em style={{ color: gold }}>envoyée !</em>
        </h2>
        <p style={{ color: "#8A7E70", lineHeight: 1.8, marginBottom: "24px", fontSize: "14px" }}>
          Coach Mimi vous contactera sur WhatsApp dans les 24h pour confirmer votre place et les modalités de paiement.
        </p>
        <div style={{
          padding: "16px", background: "rgba(201,169,110,0.05)",
          border: "1px solid rgba(201,169,110,0.12)",
          borderRadius: "12px", marginBottom: "24px",
        }}>
          <p style={{ color: gold, fontSize: "10px", fontWeight: 700, letterSpacing: "1.5px", fontFamily: "'Montserrat', sans-serif", marginBottom: "6px" }}>MODES DE PAIEMENT</p>
          <p style={{ color: "#8A7E70", fontSize: "13px", lineHeight: 1.7, fontFamily: "'Montserrat', sans-serif" }}>
            Wave · Orange Money · Virement · Espèces
          </p>
        </div>
        <button
          onClick={() => { setSubmitted(false); setForm(initialForm); setStep(1); }}
          style={{
            padding: "12px 28px", background: "transparent",
            border: `1px solid rgba(201,169,110,0.3)`,
            borderRadius: "8px", color: gold,
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px",
            cursor: "pointer",
          }}
        >
          NOUVELLE INSCRIPTION
        </button>
      </div>
    );
  }

  return (
    <div style={{ background: bg, minHeight: "100vh", paddingBottom: "100px" }}>
      {/* Header */}
      <div style={{
        padding: "28px 20px 20px",
        borderBottom: "1px solid rgba(201,169,110,0.08)",
      }}>
        <p style={{ color: gold, fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", marginBottom: "8px" }}>
          BOOTCAMP PILATES
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", color: "#FAF6EE", lineHeight: 1.2, marginBottom: "6px" }}>
          Formulaire d'<em style={{ color: gold }}>Inscription</em>
        </h1>
        <p style={{ color: "#8A7E70", fontSize: "12px", fontFamily: "'Montserrat', sans-serif", lineHeight: 1.6 }}>
          Les Jardins d'Eden — Grand-Bassam
        </p>
      </div>

      {/* Progress steps */}
      <div style={{ padding: "16px 20px" }}>
        <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
          {["Profil", "Formule", "Santé"].map((label, i) => (
            <div key={label} style={{ flex: 1, textAlign: "center" }}>
              <div style={{
                height: "3px", borderRadius: "3px",
                background: step > i ? gold : step === i + 1 ? `linear-gradient(90deg, ${gold}, #E8D5A3)` : "rgba(201,169,110,0.1)",
                marginBottom: "6px",
                transition: "background 0.3s",
              }} />
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "9px", fontWeight: 700,
                letterSpacing: "1px",
                color: step === i + 1 ? gold : step > i + 1 ? "#5A4E42" : "#3A3028",
              }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form content */}
      <div style={{ padding: "0 20px" }}>

        {/* ===== STEP 1 ===== */}
        {step === 1 && (
          <div>
            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Prénom *</label>
              <input type="text" value={form.prenom} onChange={(e) => update("prenom", e.target.value)}
                placeholder="Votre prénom" style={{ ...inputStyle, borderColor: errors.prenom ? "#C45B4A" : "rgba(201,169,110,0.15)" }} />
              {errors.prenom && <p style={errStyle}>{errors.prenom}</p>}
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Nom *</label>
              <input type="text" value={form.nom} onChange={(e) => update("nom", e.target.value)}
                placeholder="Votre nom" style={{ ...inputStyle, borderColor: errors.nom ? "#C45B4A" : "rgba(201,169,110,0.15)" }} />
              {errors.nom && <p style={errStyle}>{errors.nom}</p>}
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Téléphone WhatsApp *</label>
              <input type="tel" value={form.telephone} onChange={(e) => update("telephone", e.target.value)}
                placeholder="+225 07 XX XX XX XX" style={{ ...inputStyle, borderColor: errors.telephone ? "#C45B4A" : "rgba(201,169,110,0.15)" }} />
              {errors.telephone && <p style={errStyle}>{errors.telephone}</p>}
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Email</label>
              <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)}
                placeholder="votre@email.com" style={inputStyle} />
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Âge *</label>
              <input type="number" value={form.age} onChange={(e) => update("age", e.target.value)}
                placeholder="35" min="16" max="80" style={{ ...inputStyle, borderColor: errors.age ? "#C45B4A" : "rgba(201,169,110,0.15)" }} />
              {errors.age && <p style={errStyle}>{errors.age}</p>}
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Niveau en Pilates *</label>
              <select value={form.niveau} onChange={(e) => update("niveau", e.target.value)}
                style={{ ...inputStyle, borderColor: errors.niveau ? "#C45B4A" : "rgba(201,169,110,0.15)", appearance: "none" }}>
                <option value="" style={{ background: card }}>Choisir votre niveau</option>
                {niveaux.map((n) => <option key={n.value} value={n.value} style={{ background: card }}>{n.label}</option>)}
              </select>
              {errors.niveau && <p style={errStyle}>{errors.niveau}</p>}
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Comment avez-vous entendu parler de HFM ?</label>
              <select value={form.comment} onChange={(e) => update("comment", e.target.value)}
                style={{ ...inputStyle, appearance: "none" }}>
                <option value="" style={{ background: card }}>Sélectionner</option>
                <option value="instagram" style={{ background: card }}>Instagram @coachmimi87</option>
                <option value="bouche_a_oreille" style={{ background: card }}>Bouche à oreille</option>
                <option value="whatsapp" style={{ background: card }}>Groupe WhatsApp</option>
                <option value="ami" style={{ background: card }}>Recommandation d'une amie</option>
                <option value="autre" style={{ background: card }}>Autre</option>
              </select>
            </div>
          </div>
        )}

        {/* ===== STEP 2 ===== */}
        {step === 2 && (
          <div>
            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>Choisissez votre formule *</label>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {formules.map((f) => (
                  <label key={f.value} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "14px 16px",
                    background: form.formule === f.value ? "rgba(201,169,110,0.08)" : "rgba(255,255,255,0.02)",
                    border: `1px solid ${form.formule === f.value ? "rgba(201,169,110,0.4)" : "rgba(201,169,110,0.1)"}`,
                    borderRadius: "12px", cursor: "pointer",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{
                        width: "16px", height: "16px", borderRadius: "50%",
                        border: `2px solid ${form.formule === f.value ? gold : "rgba(201,169,110,0.3)"}`,
                        background: form.formule === f.value ? gold : "transparent",
                        flexShrink: 0,
                      }} />
                      <div>
                        <p style={{ color: "#FAF6EE", fontSize: "13px", fontWeight: 600, fontFamily: "'Montserrat', sans-serif", marginBottom: "2px" }}>{f.label}</p>
                        <p style={{ color: "#8A7E70", fontSize: "11px", fontFamily: "'Montserrat', sans-serif" }}>{f.desc}</p>
                      </div>
                    </div>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", fontWeight: 700, color: gold, flexShrink: 0 }}>{f.prix}</span>
                    <input type="radio" name="formule" value={f.value} checked={form.formule === f.value}
                      onChange={(e) => update("formule", e.target.value)} style={{ display: "none" }} />
                  </label>
                ))}
              </div>
              {errors.formule && <p style={errStyle}>{errors.formule}</p>}
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Weekend souhaité *</label>
              <select value={form.weekend} onChange={(e) => update("weekend", e.target.value)}
                style={{ ...inputStyle, borderColor: errors.weekend ? "#C45B4A" : "rgba(201,169,110,0.15)", appearance: "none" }}>
                <option value="" style={{ background: card }}>Choisir un weekend</option>
                {weekends.map((w) => <option key={w.value} value={w.value} style={{ background: card }}>{w.label} — Les Jardins d'Eden</option>)}
              </select>
              {errors.weekend && <p style={errStyle}>{errors.weekend}</p>}
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Hébergement</label>
              <select value={form.hebergement} onChange={(e) => update("hebergement", e.target.value)}
                style={{ ...inputStyle, appearance: "none" }}>
                <option value="" style={{ background: card }}>Non précisé</option>
                <option value="sur_place" style={{ background: card }}>Sur place — Les Jardins d'Eden</option>
                <option value="propre" style={{ background: card }}>Hébergement personnel</option>
                <option value="navette" style={{ background: card }}>Navette Abidjan ↔ Bassam</option>
              </select>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Objectif principal</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {objectifs.map((obj) => (
                  <button key={obj} type="button" onClick={() => update("objectif", form.objectif === obj ? "" : obj)}
                    style={{
                      padding: "9px 14px",
                      background: form.objectif === obj ? "rgba(201,169,110,0.15)" : "rgba(255,255,255,0.02)",
                      border: `1px solid ${form.objectif === obj ? "rgba(201,169,110,0.5)" : "rgba(201,169,110,0.1)"}`,
                      borderRadius: "8px",
                      color: form.objectif === obj ? gold : "#8A7E70",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "11px", fontWeight: 600, cursor: "pointer",
                    }}>
                    {obj}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== STEP 3 ===== */}
        {step === 3 && (
          <div>
            {/* Récap */}
            <div style={{
              padding: "16px", background: "rgba(201,169,110,0.04)",
              border: "1px solid rgba(201,169,110,0.1)",
              borderRadius: "12px", marginBottom: "20px",
            }}>
              <p style={{ color: gold, fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "2px", marginBottom: "12px" }}>RÉCAPITULATIF</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {[
                  ["Participant", `${form.prenom} ${form.nom}`],
                  ["Formule", formules.find((f) => f.value === form.formule)?.label || "—"],
                  ["Weekend", weekends.find((w) => w.value === form.weekend)?.label || "—"],
                  ["Prix", formules.find((f) => f.value === form.formule)?.prix || "—"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p style={{ color: "#5A4E42", fontSize: "9px", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, letterSpacing: "1px" }}>{k}</p>
                    <p style={{ color: "#FAF6EE", fontSize: "12px", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>{v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Contact d'urgence — Nom *</label>
              <input type="text" value={form.urgence_nom} onChange={(e) => update("urgence_nom", e.target.value)}
                placeholder="Nom & Prénom" style={{ ...inputStyle, borderColor: errors.urgence_nom ? "#C45B4A" : "rgba(201,169,110,0.15)" }} />
              {errors.urgence_nom && <p style={errStyle}>{errors.urgence_nom}</p>}
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle}>Contact d'urgence — Téléphone *</label>
              <input type="tel" value={form.urgence_tel} onChange={(e) => update("urgence_tel", e.target.value)}
                placeholder="+225 07 XX XX XX XX" style={{ ...inputStyle, borderColor: errors.urgence_tel ? "#C45B4A" : "rgba(201,169,110,0.15)" }} />
              {errors.urgence_tel && <p style={errStyle}>{errors.urgence_tel}</p>}
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>Problèmes de santé / blessures</label>
              <textarea value={form.problemes_sante} onChange={(e) => update("problemes_sante", e.target.value)}
                placeholder="Douleurs, blessures, grossesse... (ou 'Aucun')" rows={3}
                style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }} />
            </div>

            {/* RGPD */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", cursor: "pointer" }}>
                <div onClick={() => update("rgpd", !form.rgpd)} style={{
                  width: "20px", height: "20px", borderRadius: "5px",
                  border: `2px solid ${errors.rgpd ? "#C45B4A" : form.rgpd ? gold : "rgba(201,169,110,0.3)"}`,
                  background: form.rgpd ? gold : "transparent",
                  flexShrink: 0, marginTop: "2px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {form.rgpd && <span style={{ color: "#0A0806", fontSize: "11px", fontWeight: 900 }}>✓</span>}
                </div>
                <span style={{ color: "#8A7E70", fontSize: "12px", lineHeight: 1.7, fontFamily: "'Montserrat', sans-serif" }}>
                  J'accepte que mes informations soient utilisées par Coach Mimi / HFM pour la gestion de mon inscription. *
                </span>
              </label>
              {errors.rgpd && <p style={{ ...errStyle, marginTop: "6px" }}>{errors.rgpd}</p>}
            </div>

            <div style={{
              padding: "14px 16px",
              background: "rgba(201,169,110,0.04)",
              border: "1px solid rgba(201,169,110,0.1)",
              borderRadius: "10px", marginBottom: "10px",
            }}>
              <p style={{ color: gold, fontSize: "9px", fontWeight: 700, letterSpacing: "1.5px", fontFamily: "'Montserrat', sans-serif", marginBottom: "5px" }}>PAIEMENT APRÈS CONFIRMATION</p>
              <p style={{ color: "#8A7E70", fontSize: "12px", lineHeight: 1.7, fontFamily: "'Montserrat', sans-serif" }}>
                Wave · Orange Money · Virement · Espèces
              </p>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div style={{
          display: "flex",
          gap: "12px",
          marginTop: "28px",
          paddingTop: "20px",
          borderTop: "1px solid rgba(201,169,110,0.08)",
        }}>
          {step > 1 && (
            <button onClick={prevStep} style={{
              flex: 1, padding: "14px",
              background: "transparent",
              border: "1px solid rgba(201,169,110,0.2)",
              borderRadius: "10px", color: "#9E8E7E",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px",
              cursor: "pointer",
            }}>
              ← RETOUR
            </button>
          )}
          {step < totalSteps ? (
            <button onClick={nextStep} style={{
              flex: 2, padding: "14px",
              background: `linear-gradient(135deg, ${gold}, #E8D5A3)`,
              border: "none", borderRadius: "10px",
              color: "#0A0806",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px", fontWeight: 800, letterSpacing: "2px",
              cursor: "pointer",
            }}>
              ÉTAPE SUIVANTE →
            </button>
          ) : (
            <button onClick={handleSubmit} style={{
              flex: 2, padding: "14px",
              background: `linear-gradient(135deg, ${gold}, #E8D5A3)`,
              border: "none", borderRadius: "10px",
              color: "#0A0806",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "11px", fontWeight: 800, letterSpacing: "2px",
              cursor: "pointer",
            }}>
              ✓ ENVOYER MON INSCRIPTION
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
