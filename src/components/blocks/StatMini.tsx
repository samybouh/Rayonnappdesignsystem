import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface StatMiniProps {
  value: string | number;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  icon?: React.ReactNode;
}

export function StatMini({ value, label, trend, trendValue, icon }: StatMiniProps) {
  const getTrendIcon = () => {
    if (!trend) return null;
    
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-3 h-3 text-[var(--color-success)]" />;
      case 'down':
        return <TrendingDown className="w-3 h-3 text-[var(--color-danger)]" />;
      case 'neutral':
        return <Minus className="w-3 h-3 text-[var(--color-text-muted)]" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        {icon && <div className="text-[var(--color-primary-mid)]">{icon}</div>}
        <div className="text-2xl font-semibold text-[var(--color-text-primary)]">
          {value}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-[var(--color-text-muted)]">{label}</span>
        {trend && (
          <div className="flex items-center gap-1">
            {getTrendIcon()}
            {trendValue && (
              <span className="text-xs text-[var(--color-text-muted)]">
                {trendValue}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
