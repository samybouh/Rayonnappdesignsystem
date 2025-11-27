import { Checkbox } from '../ui/checkbox';
import { Calendar, Zap } from 'lucide-react';

interface TaskItemProps {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: string;
  xp?: number;
  onToggle: (id: string) => void;
}

export function TaskItem({ id, title, completed, dueDate, xp, onToggle }: TaskItemProps) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/50 transition-colors group">
      <Checkbox
        id={id}
        checked={completed}
        onCheckedChange={() => onToggle(id)}
        className="border-2"
      />
      <div className="flex-1 min-w-0">
        <label
          htmlFor={id}
          className={`block text-sm cursor-pointer ${
            completed ? 'line-through text-[var(--color-text-muted)]' : 'text-[var(--color-text-primary)]'
          }`}
        >
          {title}
        </label>
        {(dueDate || xp) && (
          <div className="flex items-center gap-3 mt-1">
            {dueDate && (
              <div className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
                <Calendar className="w-3 h-3" />
                <span>{dueDate}</span>
              </div>
            )}
            {xp && (
              <div className="flex items-center gap-1 text-xs font-medium text-[var(--color-warning)]">
                <Zap className="w-3 h-3 fill-current" />
                <span>+{xp} XP</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
