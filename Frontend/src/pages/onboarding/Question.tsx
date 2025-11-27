import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, TrendingUp, Target, Zap, Clock, ChevronRight } from "lucide-react";

const LS_KEY = "rayonn:onboardingDraft";

const options = [
  { id: "improve",   title: "Améliorer mes résultats", icon: TrendingUp, image: "/onboarding/improve.jpg",
    color: "from-[var(--color-primary-start)] to-[var(--color-primary-mid)]" },
  { id: "organize",  title: "Mieux m'organiser",       icon: Target,     image: "/onboarding/organize.jpg",
    color: "from-[var(--color-info)] to-[var(--color-primary-mid)]" },
  { id: "motivated", title: "Rester motivé",           icon: Zap,        image: "/onboarding/motivated.jpg",
    color: "from-[var(--color-warning)] to-[var(--color-primary-end)]" },
  { id: "efficient", title: "Être plus efficace",      icon: Clock,      image: "/onboarding/efficient.jpg",
    color: "from-[var(--color-primary-end)] to-[var(--color-success)]" },
];

export default function Question() {
  const nav = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);
  const [hero, setHero] = useState(0);

  const handleSelect = (id: string, idx: number) => {
    setSelected(id);
    setHero(idx);

    // merge dans le draft
    const prev = JSON.parse(localStorage.getItem(LS_KEY) || "{}");
    localStorage.setItem(LS_KEY, JSON.stringify({ ...prev, main_goal: id }));

    // petite pause d’anim puis wizard
    setTimeout(() => nav("/onboarding/wizard"), 350);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        {/* HERO */}
        <div className="relative h-52 sm:h-64 md:h-72 mb-10 overflow-hidden rounded-3xl border border-white/40 shadow-xl">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={hero}
              src={options[hero].image}
              className="w-full h-full object-cover"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onError={(e)=>((e.target as HTMLImageElement).style.display="none")}
            />
          </AnimatePresence>
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-white bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-mid)]/80">
            <GraduationCap className="w-4 h-4" /> Onboarding
          </div>
        </div>

        {/* Titre */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
            Quel est ton objectif principal ?
          </h1>
          <p className="text-[var(--color-text-muted)]">Choisis l'option qui te correspond le mieux</p>
        </div>

        {/* Cartes */}
        <div className="grid sm:grid-cols-2 gap-4">
          {options.map((o, idx) => {
            const Icon = o.icon;
            const isSelected = selected === o.id;
            return (
              <motion.button
                key={o.id}
                onClick={() => handleSelect(o.id, idx)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all text-left
                  ${isSelected ? "border-[var(--color-primary-mid)]" : "border-white/50 hover:border-[var(--color-primary-mid)]/30"}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${o.color} grid place-items-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-semibold text-[var(--color-text-primary)]">{o.title}</div>
                  <ChevronRight className={`ml-auto w-5 h-5 transition-opacity ${isSelected ? "opacity-100 text-[var(--color-primary-mid)]" : "opacity-0"}`} />
                </div>
              </motion.button>
            );
          })}
        </div>

        <p className="text-center mt-8 text-sm text-[var(--color-text-muted)]">
          Ne t'inquiète pas, tu pourras ajuster cela plus tard
        </p>
      </div>
    </div>
  );
}
