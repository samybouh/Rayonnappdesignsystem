import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { AgendaItem } from './AgendaItem';
import { ScheduleDialog } from './ScheduleDialog';

interface ScheduleItem {
  title: string;
  timeRange: string;
  color: string;
}

interface AgendaCardProps {
  items?: ScheduleItem[];
}

export function AgendaCard({ items = [] }: AgendaCardProps) {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-white/50"
      >
        <button 
          onClick={() => setIsScheduleOpen(true)}
          className="flex items-center justify-between mb-5 w-full text-left hover:opacity-80 transition-opacity group"
        >
          <h2 className="font-semibold text-[var(--color-text-primary)]">Ma journée</h2>
          <ChevronRight className="w-3.5 h-3.5 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary-mid)] transition-colors" />
        </button>

        <div className="space-y-2">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ x: 4, scale: 1.01 }}
            >
              <AgendaItem 
                title={item.title}
                timeRange={item.timeRange}
                color={item.color}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Schedule Dialog */}
      <ScheduleDialog 
        open={isScheduleOpen} 
        onOpenChange={setIsScheduleOpen} 
      />
    </>
  );
}
