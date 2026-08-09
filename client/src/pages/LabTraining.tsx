import { useEffect, useMemo, useRef, useState } from "react";
import olyCoachCard from "@/assets/lab-training/oly-coach-card.jpg";
import olyPortrait from "@/assets/lab-training/oly-portrait.jpg";
import "./LabTraining.css";

type ClassGroup = "doux" | "intense" | "open";

interface ClassSlot {
  time: string;
  dur: string;
  name: string;
  tag: string;
  group: ClassGroup;
  coach: string;
  cap: number;
}

interface DaySchedule {
  label: string;
  classes: ClassSlot[];
}

type DayKey = "lun" | "mar" | "mer" | "jeu" | "ven" | "sam" | "dim";

interface Booking {
  name: string;
  phone: string;
  payment: string;
  ts: string;
}

type BookingsMap = Record<string, Booking[]>;

const SCHEDULE: Record<DayKey, DaySchedule> = {
  lun: {
    label: "LUNDI",
    classes: [{ time: "08:30", dur: "60 min", name: "Hot Pilate", tag: "PILATES", group: "doux", coach: "Coach Mimi", cap: 6 }],
  },
  mar: {
    label: "MARDI",
    classes: [
      { time: "08:30", dur: "60 min", name: "Hyrox 100% Femmes", tag: "HYROX", group: "intense", coach: "Coach Mimi", cap: 8 },
      { time: "12:30", dur: "60 min", name: "Hyrox Mixte", tag: "HYROX", group: "intense", coach: "Coach Mimi", cap: 8 },
      { time: "18:00", dur: "—", name: "Disponible", tag: "CRÉNEAU LIBRE", group: "open", coach: "Coach Mimi", cap: 1 },
    ],
  },
  mer: {
    label: "MERCREDI",
    classes: [
      { time: "15:30", dur: "45 min", name: "Pilate Kids (8-14 ans)", tag: "PILATES KIDS", group: "doux", coach: "Coach Mimi", cap: 6 },
      { time: "18:30", dur: "45 min", name: "Hot Pilate", tag: "PILATES", group: "doux", coach: "Coach Mimi", cap: 6 },
      { time: "19:30", dur: "30 min", name: "Special Core", tag: "CORE", group: "intense", coach: "Coach Mimi", cap: 6 },
      { time: "18:00–21:00", dur: "—", name: "Disponible", tag: "CRÉNEAU LIBRE", group: "open", coach: "Coach Mimi", cap: 1 },
    ],
  },
  jeu: {
    label: "JEUDI",
    classes: [
      { time: "08:30", dur: "60 min", name: "Glutes & Core Training", tag: "GLUTES & CORE", group: "intense", coach: "Coach Mimi", cap: 8 },
      { time: "12:30", dur: "60 min", name: "Hyrox Mixte", tag: "HYROX", group: "intense", coach: "Coach Mimi", cap: 8 },
      { time: "18:00", dur: "—", name: "Disponible", tag: "CRÉNEAU LIBRE", group: "open", coach: "Coach Mimi", cap: 1 },
    ],
  },
  ven: {
    label: "VENDREDI",
    classes: [
      { time: "08:30", dur: "60 min", name: "Pilate / Mobilité", tag: "PILATES", group: "doux", coach: "Coach Mimi", cap: 6 },
      { time: "18:00", dur: "—", name: "Disponible", tag: "CRÉNEAU LIBRE", group: "open", coach: "Coach Mimi", cap: 1 },
    ],
  },
  sam: {
    label: "SAMEDI",
    classes: [
      { time: "09:00", dur: "60 min", name: "Pilate Adultes", tag: "PILATES", group: "doux", coach: "Coach Mimi", cap: 6 },
      { time: "10:00", dur: "60 min", name: "Pilate Kids (8-14 ans)", tag: "PILATES KIDS", group: "doux", coach: "Coach Mimi", cap: 6 },
      { time: "11:00", dur: "60 min", name: "Pilate Adultes", tag: "PILATES", group: "doux", coach: "Coach Mimi", cap: 6 },
    ],
  },
  dim: { label: "DIMANCHE", classes: [] },
};

const DAY_ORDER: DayKey[] = ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"];
const STORAGE_KEY = "thelab_bookings_v2";
const ADMIN_PIN = "1414";
const PAYMENT_METHODS = ["Orange Money", "Wave", "Carte bancaire"];

function classKey(day: DayKey, cls: ClassSlot): string {
  return `${day}_${cls.time}_${cls.name}`;
}

function loadBookings(): BookingsMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function findClassByKey(key: string): { day: DayKey; cls: ClassSlot } | null {
  for (const day of DAY_ORDER) {
    for (const cls of SCHEDULE[day].classes) {
      if (classKey(day, cls) === key) return { day, cls };
    }
  }
  return null;
}

function todayDayKey(): DayKey {
  const jsDay = new Date().getDay();
  return DAY_ORDER[jsDay === 0 ? 6 : jsDay - 1];
}

function useLabTrainingFonts() {
  useEffect(() => {
    const existing = document.getElementById("lab-training-fonts");
    if (existing) return;
    const preconnect1 = document.createElement("link");
    preconnect1.rel = "preconnect";
    preconnect1.href = "https://fonts.googleapis.com";
    const preconnect2 = document.createElement("link");
    preconnect2.rel = "preconnect";
    preconnect2.href = "https://fonts.gstatic.com";
    preconnect2.crossOrigin = "anonymous";
    const stylesheet = document.createElement("link");
    stylesheet.id = "lab-training-fonts";
    stylesheet.rel = "stylesheet";
    stylesheet.href =
      "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@400;500;600;700&display=swap";
    document.head.append(preconnect1, preconnect2, stylesheet);
    return () => {
      preconnect1.remove();
      preconnect2.remove();
      stylesheet.remove();
    };
  }, []);
}

export default function LabTraining() {
  useLabTrainingFonts();

  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);

  const [currentDay, setCurrentDay] = useState<DayKey>(todayDayKey);
  const [currentFilter, setCurrentFilter] = useState<"tous" | "doux" | "intense">("tous");
  const [bookings, setBookings] = useState<BookingsMap>(loadBookings);
  const [pendingKey, setPendingKey] = useState<string | null>(null);
  const [confirmedInfo, setConfirmedInfo] = useState<{ day: DayKey; cls: ClassSlot; name: string; payment: string } | null>(null);

  const [adminPinOpen, setAdminPinOpen] = useState(false);
  const [adminPanelOpen, setAdminPanelOpen] = useState(false);
  const [pinValue, setPinValue] = useState("");
  const [pinError, setPinError] = useState(false);

  const logoTapCount = useRef(0);
  const logoTapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const persistBookings = (next: BookingsMap) => {
    setBookings(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const passesFilter = (g: ClassGroup) => currentFilter === "tous" || g === currentFilter;

  const sheetOpen = pendingKey !== null || confirmedInfo !== null;

  const closeSheet = () => {
    setPendingKey(null);
    setConfirmedInfo(null);
  };

  const closeAdminPin = () => {
    setAdminPinOpen(false);
    setPinValue("");
    setPinError(false);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (sheetOpen) closeSheet();
      if (adminPinOpen) closeAdminPin();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [sheetOpen, adminPinOpen]);

  const handleLogoTap = () => {
    logoTapCount.current += 1;
    if (logoTapTimer.current) clearTimeout(logoTapTimer.current);
    logoTapTimer.current = setTimeout(() => {
      logoTapCount.current = 0;
    }, 1500);
    if (logoTapCount.current >= 5) {
      logoTapCount.current = 0;
      setAdminPinOpen(true);
    }
  };

  const checkPin = () => {
    if (pinValue.trim() === ADMIN_PIN) {
      closeAdminPin();
      setAdminPanelOpen(true);
    } else {
      setPinError(true);
    }
  };

  const handleConfirmBooking = (name: string, phone: string, payment: string) => {
    if (!pendingKey) return { error: "" };
    const found = findClassByKey(pendingKey);
    if (!found) return { error: "" };
    const { day, cls } = found;
    const digits = phone.replace(/[^0-9]/g, "");
    if (!name.trim() || !phone.trim()) return { error: "Merci de renseigner le nom et le numéro de téléphone." };
    if (digits.length < 8) return { error: "Merci de renseigner un numéro de téléphone valide." };
    if (!payment) return { error: "Merci de choisir une méthode de paiement." };

    const next: BookingsMap = { ...bookings };
    const list = next[pendingKey] ? [...next[pendingKey]] : [];
    if (list.some((b) => b.phone.replace(/[^0-9]/g, "") === digits)) {
      return { error: "Ce numéro a déjà une réservation pour ce créneau." };
    }
    if (list.length >= cls.cap) {
      closeSheet();
      return { error: "Ce créneau est complet." };
    }
    list.push({ name: name.trim(), phone: phone.trim(), payment, ts: new Date().toISOString() });
    next[pendingKey] = list;
    persistBookings(next);
    setPendingKey(null);
    setConfirmedInfo({ day, cls, name: name.trim(), payment });
    return { error: "" };
  };

  const clearAllBookings = () => {
    if (!confirm("Cette action supprimera définitivement toutes les réservations. Continuer ?")) return;
    localStorage.removeItem(STORAGE_KEY);
    setBookings({});
  };

  const exportCSV = () => {
    const rows: string[][] = [["Jour", "Heure", "Cours", "Coach", "Client", "Téléphone", "Paiement", "Horodatage"]];
    DAY_ORDER.forEach((day) => {
      SCHEDULE[day].classes.forEach((cls) => {
        const key = classKey(day, cls);
        (bookings[key] || []).forEach((b) => {
          rows.push([SCHEDULE[day].label, cls.time, cls.name, cls.coach, b.name, b.phone, b.payment || "—", b.ts]);
        });
      });
    });
    const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "thelab_reservations.csv";
    document.body.append(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="lab-training">
      <header>
        <div className="header-row">
          <div>
            <div className="wordmark" onClick={handleLogoTap}>
              THE LAB <span className="x">×</span> TRAINING
            </div>
            <div className="tagline">Cocody Danga · 7j/7</div>
          </div>
          <a href="#planning" className="header-cta">
            Réserver
          </a>
        </div>
      </header>

      <nav className="section-nav">
        <a href="#univers">Cours</a>
        <a href="#coachs">Coachs</a>
        <a href="#histoire">Histoire</a>
        <a href="#planning">Planning</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="hero" id="accueil">
        <div className="hero-inner">
          <span className="eyebrow mono">Cocody Danga · 7j/7</span>
          <h1>The Lab Training</h1>
          <p>
            Un seul studio, deux énergies. Le calme du Pilates et du Yoga — l'intensité du Hyrox et du Circuit Training.
            Réservez votre créneau, du lundi au samedi.
          </p>
          <div className="hero-ctas">
            <a href="#planning" className="btn btn-solid">
              Voir le planning
            </a>
            <a href="#univers" className="btn btn-outline">
              Découvrir nos cours
            </a>
          </div>
        </div>
      </section>

      <section id="univers">
        <div className="section-inner">
          <div className="section-head">
            <span className="eyebrow mono">Deux univers</span>
            <h2>Deux rythmes, deux couleurs</h2>
            <p>Sur le planning, chaque cours porte la couleur de son univers — reconnaissable d'un coup d'œil.</p>
          </div>
          <div className="univers-grid">
            <div className="univers-card doux">
              <span className="badge mono">Pilates</span>
              <h3>Le studio doux</h3>
              <p>Respiration, gainage, longueur. Des cours en petit effectif pour travailler en profondeur, sans jamais forcer.</p>
            </div>
            <div className="univers-card intense">
              <span className="badge mono">Hyrox · Circuit Training</span>
              <h3>Le studio intense</h3>
              <p>Effort, rythme, dépassement. Des séances courtes et denses pour transformer le corps et vider la tête.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="coachs" style={{ background: "var(--sand-deep)" }}>
        <div className="section-inner">
          <div className="section-head">
            <span className="eyebrow mono">L'équipe</span>
            <h2>Nos coachs</h2>
          </div>
          <div className="org-top">
            <div className="coach-card owner">
              <div className="coach-photo" style={{ padding: 0, background: "none" }}>
                <img src={olyCoachCard} alt="Oly « La Machine »" />
              </div>
              <span className="badge mono">Propriétaire · Fondateur · Boxe thaïlandaise</span>
              <h3>Oly « La Machine »</h3>
              <p>
                Propriétaire et fondateur de The Lab Training. Champion d'Afrique WBC des poids lourds et champion du monde
                K1, Oly Yves Roland — dit « Oly la machine » — apporte son expertise du Muay Thaï à la salle.
              </p>
            </div>
          </div>
          <div className="org-trunk" />
          <div className="org-row-wrap">
            <div className="org-row">
              <div className="org-col">
                <div className="coach-card">
                  <div className="coach-photo">
                    Photo
                    <br />
                    Coach Mimi
                  </div>
                  <span className="badge mono">Hyrox · Mobilité · Mat Pilates</span>
                  <h3>Coach Mimi</h3>
                  <p>Hyrox, mobilité et Mat Pilates au sein de l'équipe The Lab Training.</p>
                </div>
              </div>
              <div className="org-col">
                <div className="coach-card">
                  <div className="coach-photo">
                    Photo
                    <br />
                    Coach Tuo
                  </div>
                  <span className="badge mono">Pilates · Yoga · Reformer</span>
                  <h3>Coach Tuo</h3>
                  <p>Pilates, Yoga et Reformer au sein de l'équipe.</p>
                </div>
              </div>
              <div className="org-col">
                <div className="coach-card">
                  <div className="coach-photo">
                    Photo
                    <br />
                    Coach Gaoussou
                  </div>
                  <span className="badge mono">Hyrox · Circuit Training</span>
                  <h3>Coach Gaoussou</h3>
                  <p>Préparation physique intense — Hyrox, circuit training et renforcement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="histoire">
        <div className="section-inner">
          <div className="oly-grid">
            <div className="oly-portrait" style={{ padding: 0 }}>
              <img src={olyPortrait} alt="Oly « La Machine » sur le ring" />
            </div>
            <div className="oly-text">
              <span className="eyebrow mono">L'histoire du propriétaire</span>
              <h2 style={{ marginTop: 10, marginBottom: 20, color: "var(--paper)" }}>Oly « La Machine »</h2>
              <p>
                Né à Soubré en 1989, Oly Yves Roland monte sur son premier ring de Muay Thaï à 12 ans. Bagarreur de nature,
                il trouve dans cet art ancestral le moyen de canaliser son énergie — et n'en redescendra plus.
              </p>
              <p>
                Champion de Côte d'Ivoire en 2013, il devient champion du monde K1, puis décroche en 2021 la ceinture WBC de
                champion d'Afrique des poids lourds au Palais des sports de Treichville — un titre qu'il défendra
                victorieusement, par K.O. au deuxième round.
              </p>
              <p>
                Quatre fois champion d'Afrique, fondateur de la ChangDam Muaythai Team 225, il ouvre aujourd'hui The Lab
                Training pour transmettre : la discipline du ring, au service de tous les corps.
              </p>
              <div className="oly-stats">
                <div className="oly-stat">
                  <div className="num mono">4×</div>
                  <div className="lbl">Champion d'Afrique</div>
                </div>
                <div className="oly-stat">
                  <div className="num mono">K1</div>
                  <div className="lbl">Champion du monde</div>
                </div>
                <div className="oly-stat">
                  <div className="num mono">WBC</div>
                  <div className="lbl">Poids lourds Afrique</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PlanningSection
        currentDay={currentDay}
        setCurrentDay={setCurrentDay}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
        bookings={bookings}
        passesFilter={passesFilter}
        onReserve={setPendingKey}
      />

      <footer id="contact">
        <div className="footer-inner">
          <div className="footer-block" style={{ minWidth: 220 }}>
            <div className="footer-wordmark">
              THE LAB <span className="x">×</span> TRAINING
            </div>
            <div className="footer-value" style={{ color: "var(--ash)", marginTop: 6 }}>
              Cocody Danga
            </div>
          </div>
          <div className="footer-block">
            <div className="footer-label mono">Horaires</div>
            <div className="footer-value">Lundi – Dimanche · 6h00 – 22h00</div>
          </div>
          <div className="footer-block">
            <div className="footer-label mono">Contact</div>
            <div className="footer-value">
              <a href="tel:+2250702243696">07 02 24 36 96</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copy">© 2026 The Lab Training</div>
          <div className="sig">× × ×</div>
        </div>
      </footer>

      {sheetOpen && (
        <div
          className="overlay show"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeSheet();
          }}
        >
          <div className="sheet">
            {pendingKey && !confirmedInfo && (
              <BookingForm pendingKey={pendingKey} onCancel={closeSheet} onConfirm={handleConfirmBooking} />
            )}
            {confirmedInfo && (
              <div className="confirm-msg">
                <div className="mark">× × ×</div>
                <p>
                  <strong>Réservation confirmée</strong>
                  <br />
                  {confirmedInfo.cls.name} — {SCHEDULE[confirmedInfo.day].label} {confirmedInfo.cls.time}
                  <br />
                  Paiement : {confirmedInfo.payment}
                  <br />
                  À bientôt, {confirmedInfo.name}.
                </p>
                <div className="sheet-actions" style={{ marginTop: 22 }}>
                  <button className="btn-confirm" style={{ flex: 1 }} onClick={closeSheet}>
                    Fermer
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {adminPinOpen && (
        <div
          className="admin-overlay show"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeAdminPin();
          }}
        >
          <div className="admin-box">
            <h3>Accès administrateur</h3>
            <div className="field">
              <label>Code PIN</label>
              <input
                type="password"
                inputMode="numeric"
                maxLength={4}
                placeholder="••••"
                autoFocus
                value={pinValue}
                onChange={(e) => {
                  setPinValue(e.target.value);
                  setPinError(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") checkPin();
                }}
              />
            </div>
            <div className="sheet-actions">
              <button className="btn-cancel" onClick={closeAdminPin}>
                Annuler
              </button>
              <button className="btn-confirm" onClick={checkPin}>
                Valider
              </button>
            </div>
            {pinError && (
              <div className="pin-hint" style={{ color: "var(--terracotta)" }}>
                Code incorrect
              </div>
            )}
          </div>
        </div>
      )}

      {adminPanelOpen && (
        <AdminPanel
          bookings={bookings}
          onClose={() => setAdminPanelOpen(false)}
          onExportCSV={exportCSV}
          onClearAll={clearAllBookings}
        />
      )}
    </div>
  );
}

function PlanningSection({
  currentDay,
  setCurrentDay,
  currentFilter,
  setCurrentFilter,
  bookings,
  passesFilter,
  onReserve,
}: {
  currentDay: DayKey;
  setCurrentDay: (d: DayKey) => void;
  currentFilter: "tous" | "doux" | "intense";
  setCurrentFilter: (f: "tous" | "doux" | "intense") => void;
  bookings: BookingsMap;
  passesFilter: (g: ClassGroup) => boolean;
  onReserve: (key: string) => void;
}) {
  const allClasses = SCHEDULE[currentDay].classes;
  const classes = allClasses.filter((c) => passesFilter(c.group));

  return (
    <section id="planning">
      <div className="planning-head">
        <div>
          <span className="eyebrow mono">Planning</span>
          <h2 style={{ marginTop: 10 }}>Réservez votre créneau</h2>
        </div>
        <div className="legend">
          <div className="legend-item">
            <span className="legend-dot doux" />
            Pilates · Yoga · Reformer
          </div>
          <div className="legend-item">
            <span className="legend-dot intense" />
            Cross-Training · HIIT
          </div>
          <div className="legend-item">
            <span className="legend-dot open" />
            Créneau libre
          </div>
        </div>
      </div>

      <div className="planning-head" style={{ marginBottom: 0 }}>
        <div className="filter-row">
          {(["tous", "doux", "intense"] as const).map((f) => (
            <button
              key={f}
              className={"filter-btn" + (currentFilter === f ? " active" : "")}
              onClick={() => setCurrentFilter(f)}
            >
              {f === "tous" ? "Tous" : f === "doux" ? "Doux" : "Intense"}
            </button>
          ))}
        </div>
      </div>

      <div style={{ height: 16 }} />

      <div className="day-tabs">
        {DAY_ORDER.map((d) => {
          const count = SCHEDULE[d].classes.filter((c) => passesFilter(c.group)).length;
          return (
            <div
              key={d}
              className={"day-tab" + (d === currentDay ? " active" : "")}
              onClick={() => setCurrentDay(d)}
            >
              {SCHEDULE[d].label.slice(0, 3)}
              <span className="n">{count}</span>
            </div>
          );
        })}
      </div>
      <div className="planning-main">
        <div className="planning-main-inner">
          <div className="day-heading">{SCHEDULE[currentDay].label} — PLANNING</div>
          <div>
            {allClasses.length === 0 && <div className="empty-day">Fermé ce jour</div>}
            {allClasses.length > 0 && classes.length === 0 && (
              <div className="empty-day">Ouvert · aucun cours dans ce filtre</div>
            )}
            {classes.map((cls) => {
              const key = classKey(currentDay, cls);
              const taken = (bookings[key] || []).length;
              const left = cls.cap - taken;
              const isOpen = cls.group === "open";

              let spotsClass = "";
              let spotsText: string;
              if (isOpen) {
                spotsText = left > 0 ? "CRÉNEAU LIBRE" : "RÉSERVÉ";
                spotsClass = left > 0 ? "free" : "full";
              } else if (left <= 0) {
                spotsText = "COMPLET";
                spotsClass = "full";
              } else if (left <= 3) {
                spotsText = `${left} PLACE${left > 1 ? "S" : ""} RESTANTE${left > 1 ? "S" : ""}`;
                spotsClass = "low";
              } else {
                spotsText = `${left} PLACES DISPONIBLES`;
              }

              return (
                <div className={"class-card " + cls.group} key={key}>
                  <div className="class-time">
                    {cls.time}
                    <span className="dur">{cls.dur}</span>
                  </div>
                  <div className="class-body">
                    <div className="class-top">
                      <div className="class-name">{cls.name}</div>
                      <div className="class-tag">{cls.tag}</div>
                    </div>
                    <div className="class-coach">
                      avec <span>{cls.coach}</span>
                    </div>
                    <div className="class-bottom">
                      <div className={"spots " + spotsClass}>{spotsText}</div>
                      <button className="book-btn" disabled={left <= 0} onClick={() => onReserve(key)}>
                        {left <= 0 ? (isOpen ? "Réservé" : "Complet") : "Réserver"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingForm({
  pendingKey,
  onCancel,
  onConfirm,
}: {
  pendingKey: string;
  onCancel: () => void;
  onConfirm: (name: string, phone: string, payment: string) => { error: string };
}) {
  const found = findClassByKey(pendingKey);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState<string | null>(null);
  const [error, setError] = useState("");

  if (!found) return null;
  const { day, cls } = found;

  const submit = () => {
    const result = onConfirm(name, phone, payment || "");
    if (result.error) setError(result.error);
  };

  return (
    <>
      <div className="sheet-title">Réservation</div>
      <div className="sheet-class">{cls.name}</div>
      <div className="sheet-meta">
        {SCHEDULE[day].label} · {cls.time} · {cls.dur} · {cls.coach}
      </div>
      <div className="field">
        <label>Nom et prénom</label>
        <input type="text" placeholder="Nom complet" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="field">
        <label>Numéro de téléphone</label>
        <input
          type="tel"
          placeholder="+225 07 00 00 00 00"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Méthode de paiement</label>
        <div className="pay-options">
          {PAYMENT_METHODS.map((method) => (
            <div
              key={method}
              className={"pay-opt" + (payment === method ? " active" : "")}
              onClick={() => setPayment(method)}
            >
              {method}
            </div>
          ))}
        </div>
        <div className="pay-note">
          La place est confirmée après paiement. Tu recevras les instructions de paiement par SMS/WhatsApp juste après ta
          réservation.
        </div>
      </div>
      {error && (
        <div className="pin-hint" style={{ color: "var(--terracotta)", textAlign: "left", marginBottom: 12 }}>
          {error}
        </div>
      )}
      <div className="sheet-actions">
        <button className="btn-cancel" onClick={onCancel}>
          Annuler
        </button>
        <button className="btn-confirm" onClick={submit}>
          Confirmer
        </button>
      </div>
    </>
  );
}

function AdminPanel({
  bookings,
  onClose,
  onExportCSV,
  onClearAll,
}: {
  bookings: BookingsMap;
  onClose: () => void;
  onExportCSV: () => void;
  onClearAll: () => void;
}) {
  const rows = useMemo(() => {
    const list: { day: string; time: string; name: string; coach: string; client: string; phone: string; payment: string; ts: string }[] = [];
    DAY_ORDER.forEach((day) => {
      SCHEDULE[day].classes.forEach((cls) => {
        const key = classKey(day, cls);
        (bookings[key] || []).forEach((b) => {
          list.push({
            day: SCHEDULE[day].label,
            time: cls.time,
            name: cls.name,
            coach: cls.coach,
            client: b.name,
            phone: b.phone,
            payment: b.payment || "—",
            ts: b.ts,
          });
        });
      });
    });
    list.sort((a, b) => new Date(a.ts).getTime() - new Date(b.ts).getTime());
    return list;
  }, [bookings]);

  const uniqueClients = new Set(rows.map((r) => r.phone)).size;

  return (
    <div className="admin-panel show">
      <div className="admin-header">
        <h2>Panneau admin</h2>
        <button className="admin-close" onClick={onClose}>
          Fermer
        </button>
      </div>
      <div className="admin-body">
        <div className="admin-stats">
          <div className="stat">
            <div className="num">{rows.length}</div>
            <div className="lbl">Réservations totales</div>
          </div>
          <div className="stat">
            <div className="num">{rows.length ? uniqueClients : 0}</div>
            <div className="lbl">Clients uniques</div>
          </div>
        </div>
        {rows.length === 0 ? (
          <div className="admin-empty">Aucune réservation pour le moment</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Jour</th>
                <th>Heure</th>
                <th>Cours</th>
                <th>Coach</th>
                <th>Client</th>
                <th>Téléphone</th>
                <th>Paiement</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td>{r.day}</td>
                  <td>{r.time}</td>
                  <td>{r.name}</td>
                  <td>{r.coach}</td>
                  <td>{r.client}</td>
                  <td>{r.phone}</td>
                  <td>{r.payment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="admin-actions">
          <button onClick={onExportCSV}>Exporter CSV</button>
          <button className="danger" onClick={onClearAll}>
            Réinitialiser toutes les réservations
          </button>
        </div>
      </div>
    </div>
  );
}
