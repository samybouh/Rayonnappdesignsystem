import { useState } from 'react';
import { ChevronRight, GraduationCap, Target, Clock, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const options = [
  {
    id: 'improve',
    icon: TrendingUp,
    title: 'Améliorer mes résultats',
    color: 'from-[var(--color-primary-start)] to-[var(--color-primary-mid)]',
  },
  {
    id: 'organize',
    icon: Target,
    title: 'Mieux m\'organiser',
    color: 'from-[var(--color-info)] to-[var(--color-primary-mid)]',
  },
  {
    id: 'motivated',
    icon: Zap,
    title: 'Rester motivé',
    color: 'from-[var(--color-warning)] to-[var(--color-primary-end)]',
  },
  {
    id: 'efficient',
    icon: Clock,
    title: 'Être plus efficace',
    color: 'from-[var(--color-primary-end)] to-[var(--color-success)]',
  },
];

import { TrendingUp } from 'lucide-react';

export default function Question() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelected(id);
    // Navigate after a short delay for visual feedback
    setTimeout(() => {
      navigate('/onboarding/billing');
    }, 300);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary-start)] to-[var(--color-primary-mid)] mb-6">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-3">
            Quel est ton objectif principal ?
          </h1>
          <p className="text-[var(--color-text-muted)]">
            Choisis l'option qui te correspond le mieux
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {options.map((option) => {
            const Icon = option.icon;
            const isSelected = selected === option.id;
            
            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all ${
                  isSelected
                    ? 'border-[var(--color-primary-mid)] scale-95'
                    : 'border-white/50 hover:border-[var(--color-primary-mid)]/30 hover:scale-102'
                }`}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="font-semibold text-[var(--color-text-primary)]">
                    {option.title}
                  </h3>
                  
                  <div className="absolute top-4 right-4">
                    <ChevronRight className={`w-5 h-5 transition-opacity ${
                      isSelected ? 'opacity-100 text-[var(--color-primary-mid)]' : 'opacity-0'
                    }`} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-[var(--color-text-muted)]">
            Ne t'inquiète pas, tu pourras ajuster cela plus tard
          </p>
        </div>
      </div>
    </div>
  );
}
