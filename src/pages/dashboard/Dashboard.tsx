import { useState } from 'react';
import { motion } from 'motion/react';
import { AgendaCard } from '../../components/blocks/AgendaCard';
import { SessionStartCard } from '../../components/blocks/SessionStartCard';
import { StatsDialog } from '../../components/blocks/StatsDialog';

export default function Dashboard() {
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const scheduleItems = [
    { 
      title: 'Cours de Mathématiques', 
      timeRange: '08:00 - 10:00', 
      color: '#00bc7d'
    },
    { 
      title: 'Pause déjeuner', 
      timeRange: '12:00 - 13:00', 
      color: '#2b7fff'
    },
    { 
      title: 'Travail Personnel', 
      timeRange: '14:00 - 16:00', 
      color: '#ad46ff'
    },
    { 
      title: 'Sport', 
      timeRange: '18:00 - 19:30', 
      color: '#fb2c36'
    },
    { 
      title: 'Temps libre', 
      timeRange: '20:00 - 21:30', 
      color: '#f0b100'
    },
  ];

  const weeklyStats = [
    { value: '12.5h', label: 'Temps étudié', color: '#155dfc' },
    { value: '8', label: 'Sessions', color: '#00a63e' },
    { value: '5', label: 'Jours consécutifs', color: '#9810fa' },
    { value: '245', label: 'XP Total', color: '#d08700' },
  ];

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-[1500px] mx-auto p-6 space-y-4">
        {/* Two separate cards side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <AgendaCard items={scheduleItems} />
          <SessionStartCard />
        </div>

        {/* Weekly Stats */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-white/50"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-[var(--color-text-primary)]">Cette semaine</h3>
            <button 
              onClick={() => setIsStatsOpen(true)}
              className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary-mid)] flex items-center gap-1 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Clique pour voir plus de statistiques</span>
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {weeklyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="text-center p-4 rounded-xl hover:bg-white/60 transition-all cursor-pointer"
              >
                <motion.p 
                  className="font-bold mb-1"
                  style={{ color: stat.color, fontSize: '1.5rem' }}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05, type: "spring" }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats Dialog */}
      <StatsDialog open={isStatsOpen} onOpenChange={setIsStatsOpen} />
    </div>
  );
}
