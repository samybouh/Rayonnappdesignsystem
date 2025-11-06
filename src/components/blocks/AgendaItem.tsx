interface AgendaItemProps {
  title: string;
  timeRange: string;
  color?: string;
  subtitle?: string;
}

export function AgendaItem({ title, timeRange, color = '#6F3DFF', subtitle }: AgendaItemProps) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/50 transition-colors group">
      <div 
        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
        style={{ backgroundColor: color }}
      ></div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2 mb-1">
          <h4 className="font-medium text-[var(--color-text-primary)]">
            {title}
          </h4>
          <span className="text-xs text-[var(--color-text-muted)] whitespace-nowrap">
            {timeRange}
          </span>
        </div>
        
        {subtitle && (
          <p className="text-sm text-[var(--color-text-muted)]">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
