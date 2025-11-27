import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { onboardingApi, type OBQuestion } from "../../api/onboarding";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LS_KEY = "rayonn:onboardingDraft";

const heroByKey: Record<string, string> = {
  main_goal: "/onboarding/improve.jpg",
  class_level: "/onboarding/organize.jpg",
  subjects: "/onboarding/motivated.jpg",
  weekly_target_min: "/onboarding/improve.jpg",
  work_min: "/onboarding/efficient.jpg",
  break_min: "/onboarding/efficient.jpg",
  rounds: "/onboarding/efficient.jpg",
};

export default function Wizard() {
  const nav = useNavigate();
  const [questions, setQuestions] = useState<OBQuestion[]>([]);
  const [i, setI] = useState(0);
  const [draft, setDraft] = useState<Record<string, unknown>>(
    () => JSON.parse(localStorage.getItem(LS_KEY) || "{}")
  );

  // autosave local
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(draft));
  }, [draft]);

  // charge depuis la BDD et masque "main_goal" (déjà répondu sur l’écran d’entrée)
  useEffect(() => {
    (async () => {
      const qs = await onboardingApi.listQuestions();
      setQuestions(qs.filter(q => q.key !== "main_goal").sort((a, b) => a.order - b.order));
    })();
  }, []);

  const q = questions[i];
  const total = questions.length;

  const canNext = useMemo(() => {
    if (!q) return false;
    const v = (draft as any)[q.key];
    if (!q.required) return true;
    if (q.type === "single_choice") return !!v;
    if (q.type === "multi_choice") return Array.isArray(v) && v.length > 0;
    if (q.type === "slider" || q.type === "number") return typeof v === "number";
    return !!v;
  }, [q, draft]);

  const onChange = (val: unknown) => {
    if (!q) return;
    setDraft(d => ({ ...d, [q.key]: val }));

    // n’écrire côté serveur que si un token existe
    if (localStorage.getItem("rayonn:token")) {
      onboardingApi.answer(q.key, val).catch(() => {});
    }
  };
  const next = () => {
    if (i < total - 1) setI(i + 1);
    else nav("/onboarding/billing"); // fin du wizard -> Billing
  };
  const prev = () => setI(Math.max(0, i - 1));

  if (!q) return <div className="p-8 text-center">Chargement…</div>;
  const hero = heroByKey[q.key] || "/onboarding/efficient.jpg";

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-3xl">
        {/* HERO */}
        <div className="relative h-56 mb-10 overflow-hidden rounded-3xl border border-white/40 shadow-xl">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={q.key}
              src={hero}
              className="w-full h-full object-cover"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
            />
          </AnimatePresence>
          <div className="absolute left-4 top-4 text-xs px-2 py-1 rounded-full bg-black/40 text-white">
            Étape {i + 1}/{total}
          </div>
        </div>

        {/* Question */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">{q.label}</h1>
          {!!q.help && <p className="text-[var(--color-text-muted)] mt-1">{q.help}</p>}
        </div>

        <QuestionInput q={q} value={(draft as any)[q.key]} onChange={onChange} />

        {/* Nav */}
        <div className="flex items-center justify-between mt-10">
          <button
            onClick={prev}
            disabled={i === 0}
            className="inline-flex items-center gap-2 px-4 h-11 rounded-xl border border-white/50 disabled:opacity-40"
          >
            <ChevronLeft className="w-4 h-4" /> Précédent
          </button>
          <button
            onClick={next}
            disabled={!canNext}
            className="inline-flex items-center gap-2 px-5 h-11 rounded-xl text-white bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-mid)] disabled:opacity-40"
          >
            {i < total - 1 ? (
              <>
                Suivant <ChevronRight className="w-4 h-4" />
              </>
            ) : (
              "Continuer"
            )}
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-[var(--color-text-muted)]">
          Tes réponses sont enregistrées automatiquement.
        </p>
      </div>
    </div>
  );
}

function QuestionInput({
  q,
  value,
  onChange,
}: {
  q: OBQuestion;
  value: any;
  onChange: (v: any) => void;
}) {
  const opts = q.options || [];

  if (q.type === "single_choice") {
    return (
      <div className="grid sm:grid-cols-2 gap-3">
        {opts.map((o) => (
          <button
            key={o.value}
            onClick={() => onChange(o.value)}
            className={`p-4 rounded-2xl border-2 text-left ${
              value === o.value
                ? "border-[var(--color-primary-mid)]"
                : "border-white/50 hover:border-[var(--color-primary-mid)]/30"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    );
  }

  if (q.type === "multi_choice") {
    const arr: string[] = Array.isArray(value) ? value : [];
    const toggle = (v: string) =>
      arr.includes(v) ? onChange(arr.filter((x) => x !== v)) : onChange([...arr, v]);
    return (
      <div className="grid sm:grid-cols-2 gap-3">
        {opts.map((o) => (
          <button
            key={o.value}
            onClick={() => toggle(o.value)}
            className={`p-4 rounded-2xl border-2 text-left ${
              arr.includes(o.value)
                ? "border-[var(--color-primary-mid)]"
                : "border-white/50 hover:border-[var(--color-primary-mid)]/30"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    );
  }

  if (q.type === "slider") {
    const min = q.min ?? 60,
      max = q.max ?? 1200,
      step = q.step ?? 5;
    const v = typeof value === "number" ? value : min;
    return (
      <div className="space-y-3">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={v}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full"
        />
        <div className="text-sm text-[var(--color-text-secondary)]">{v} minutes / semaine</div>
      </div>
    );
  }

  // number (simple)
  return (
    <input
      type="number"
      value={value ?? ""}
      onChange={(e) => onChange(e.target.value === "" ? "" : Number(e.target.value))}
      className="w-full h-12 rounded-xl border px-3 bg-white"
      placeholder="Saisir un nombre"
    />
  );
}
