import { ChevronRight, Sparkles, Settings } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { motion } from 'motion/react';

export default function Dashboard() {
  const scheduleItems = [
    { 
      title: 'Cours de Mathématiques', 
      timeRange: '08:00 - 10:00', 
      color: '#6F3DFF',
      dotColor: '#6F3DFF'
    },
    { 
      title: 'Pause déjeuner', 
      timeRange: '12:00 - 13:00', 
      color: '#10B981',
      dotColor: '#F59E0B'
    },
    { 
      title: 'Travail Personnel', 
      timeRange: '14:00 - 16:00', 
      color: '#2E8BFF',
      dotColor: '#2E8BFF'
    },
    { 
      title: 'Sport', 
      timeRange: '15:00 - 16:30', 
      color: '#F59E0B',
      dotColor: '#EF4444'
    },
    { 
      title: 'Temps libre', 
      timeRange: '20:00 - 21:30', 
      color: '#56E3C2',
      dotColor: '#F59E0B'
    },
  ];

  const weeklyStats = [
    { value: '12.5h', label: 'Temps étudié', color: '#2E8BFF' },
    { value: '8', label: 'Séances', color: '#10B981' },
    { value: '5', label: 'Méthodes utilisées', color: '#6F3DFF' },
    { value: '245', label: 'Points XP', color: '#F59E0B' },
  ];

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-[1000px] mx-auto p-6 space-y-4">
        {/* My Day Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-white/50"
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold text-[var(--color-text-primary)]">Ma journée</h2>
            <button className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary-mid)] flex items-center gap-1 transition-colors">
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Schedule Items */}
          <div className="space-y-3">
            {scheduleItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ x: 4, scale: 1.01 }}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/60 transition-all cursor-pointer group"
              >
                <div 
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.dotColor }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-mid)] transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                    {item.timeRange}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Start Session Card */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-white/50 flex flex-col items-center justify-center"
          style={{ minHeight: '300px' }}
        >
          {/* Ray Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ rotate: 360 }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FCD34D] to-[#F59E0B] flex items-center justify-center shadow-lg mb-6"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          {/* Title */}
          <motion.h2 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="font-semibold text-[var(--color-text-primary)] mb-2"
          >
            Commencer ma session de travail
          </motion.h2>

          {/* Subtitle */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="flex items-center gap-2 mb-6 text-xs text-[var(--color-text-muted)]"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Configuration personnalisée</span>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-gradient-to-r from-[#6F3DFF] to-[#2E8BFF] hover:opacity-90 text-white shadow-md px-8"
              size="lg"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Configurer
            </Button>
          </motion.div>
        </motion.div>

        {/* Weekly Stats */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-white/50"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-[var(--color-text-primary)]">Cette semaine</h3>
            <button className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary-mid)] flex items-center gap-1 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Clique pour voir plus de statistiques</span>
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4">
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
    </div>
  );
}
