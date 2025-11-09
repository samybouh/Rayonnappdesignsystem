import { Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

interface RayonBadgeProps {
  level: number;
  xp: number;
  xpToNext: number;
  compact?: boolean;
}

export function RayonBadge({ level, xp, xpToNext, compact = false }: RayonBadgeProps) {
  const progress = (xp / xpToNext) * 100;
  const navigate = useNavigate();

  if (compact) {
    return (
      <motion.div 
        whileHover={{ scale: 1.05 }}
        onClick={() => navigate('/app/progression')}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FCD34D] to-[#F59E0B] shadow-sm cursor-pointer"
      >
        <Zap className="w-4 h-4 text-white fill-current" />
        <span className="font-semibold text-white text-sm">
          Rayon {level}
        </span>
      </motion.div>
    );
  }

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      onClick={() => navigate('/app/progression')}
      className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-warning)] to-[var(--color-warning)]/80 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white fill-current" />
          </div>
          <div>
            <div className="text-sm text-[var(--color-text-muted)]">Niveau actuel</div>
            <div className="font-semibold text-[var(--color-text-primary)]">
              Rayon {level}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-[var(--color-text-muted)]">XP</div>
          <div className="font-semibold text-[var(--color-warning)]">
            {xp} / {xpToNext}
          </div>
        </div>
      </div>
      
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[var(--color-warning)] to-[var(--color-warning)]/80 rounded-full"
        />
      </div>
    </motion.div>
  );
}
