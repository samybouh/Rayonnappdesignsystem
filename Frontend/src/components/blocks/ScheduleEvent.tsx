import { X } from 'lucide-react';
import { motion } from 'motion/react';

export interface ScheduleEventData {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  type: 'scolaire' | 'personnel' | 'sport' | 'sortie';
  isRecurring?: boolean;
  dayOfWeek?: number; // 0 = Lundi, 1 = Mardi, ..., 6 = Dimanche
}

interface ScheduleEventProps {
  event: ScheduleEventData;
  onDelete?: (id: string) => void;
}

const EVENT_COLORS = {
  scolaire: 'bg-emerald-400 hover:bg-emerald-500',
  personnel: 'bg-purple-400 hover:bg-purple-500',
  sport: 'bg-teal-400 hover:bg-teal-500',
  sortie: 'bg-blue-400 hover:bg-blue-500',
};

export function ScheduleEvent({ event, onDelete }: ScheduleEventProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`relative ${EVENT_COLORS[event.type]} text-white rounded-xl p-3 shadow-md cursor-pointer transition-colors group`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm truncate">{event.title}</h4>
          <p className="text-xs opacity-90 mt-1">
            {event.startTime} - {event.endTime}
          </p>
        </div>
        
        {onDelete && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(event.id);
            }}
            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-white/20 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      
      {event.isRecurring && (
        <div className="mt-2 text-xs opacity-75">
          🔁 Se répète chaque semaine
        </div>
      )}
    </motion.div>
  );
}
