import { Trophy, Zap } from 'lucide-react';

interface MissionCardProps {
  title: string;
  description: string;
  xpReward: number;
  progress?: number;
  total?: number;
}

export function MissionCard({ title, description, xpReward, progress, total }: MissionCardProps) {
  const progressPercentage = progress && total ? (progress / total) * 100 : 0;

  return (
    <div className="relative p-4 rounded-2xl bg-gradient-to-br from-[var(--color-warning)]/10 to-[var(--color-warning)]/5 border border-[var(--color-warning)]/20 overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--color-warning)]/10 rounded-full blur-2xl"></div>
      
      <div className="relative">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--color-warning)]/20 flex items-center justify-center flex-shrink-0">
            <Trophy className="w-5 h-5 text-[var(--color-warning)]" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">
              {title}
            </h4>
            <p className="text-sm text-[var(--color-text-muted)] mb-3">
              {description}
            </p>
            
            {progress !== undefined && total !== undefined && (
              <div className="mb-3">
                <div className="w-full h-2 bg-white/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[var(--color-warning)] to-[var(--color-warning)]/80 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <div className="text-xs text-[var(--color-text-muted)] mt-1">
                  {progress} / {total}
                </div>
              </div>
            )}
            
            <div className="flex items-center gap-1 text-[var(--color-warning)]">
              <Zap className="w-4 h-4 fill-current" />
              <span className="font-semibold">+{xpReward} XP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
