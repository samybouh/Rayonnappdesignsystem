import { BarChart3, Clock, Target, Zap, TrendingUp } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const weekData = [
  { day: 'Lun', hours: 2.5 },
  { day: 'Mar', hours: 1.8 },
  { day: 'Mer', hours: 3.2 },
  { day: 'Jeu', hours: 2.0 },
  { day: 'Ven', hours: 2.0 },
  { day: 'Sam', hours: 0.8 },
  { day: 'Dim', hours: 0.2 },
];

const statsCards = [
  {
    icon: Clock,
    value: '12.5h',
    label: 'Temps étudié',
    trend: '+2.3h',
    color: 'from-purple-500 to-blue-500',
  },
  {
    icon: Target,
    value: '8',
    label: 'Sessions complétées',
    trend: '+3',
    color: 'from-blue-500 to-teal-500',
  },
  {
    icon: Zap,
    value: '5',
    label: 'Jours consécutifs',
    trend: 'Record !',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: TrendingUp,
    value: '245',
    label: 'XP Total',
    trend: '+85 XP',
    color: 'from-emerald-500 to-green-500',
  },
];

interface StatsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function StatsDialog({ open, onOpenChange }: StatsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="!max-w-[1200px] sm:!max-w-[1200px] w-[95vw] max-h-[90vh] overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 border-2 border-white/50 shadow-2xl p-0"
        aria-describedby={undefined}
      >
        <DialogHeader className="p-6 pb-4 border-b border-purple-100/50">
          <DialogTitle className="text-2xl font-semibold text-purple-900 flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-purple-600" />
            Statistiques de la semaine
          </DialogTitle>
          <p className="text-sm text-purple-600 mt-1">
            Du 4 au 10 novembre 2025
          </p>
        </DialogHeader>

        <div className="overflow-y-auto max-h-[calc(90vh-100px)] p-6 space-y-6">
          {/* Cartes de statistiques */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {statsCards.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-white/50 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded-full">
                      {stat.trend}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-purple-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-purple-600">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Graphique */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-sm"
          >
            <div className="mb-6">
              <h3 className="font-semibold text-purple-900 mb-1">Temps d'étude quotidien</h3>
              <p className="text-sm text-purple-600">Heures de travail par jour</p>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weekData}>
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6F3DFF" stopOpacity={0.8} />
                    <stop offset="50%" stopColor="#2E8BFF" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#56E3C2" stopOpacity={0.4} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E9D5FF" opacity={0.3} />
                <XAxis 
                  dataKey="day" 
                  stroke="#9333EA"
                  tick={{ fill: '#7C3AED', fontSize: 12 }}
                />
                <YAxis 
                  stroke="#9333EA"
                  tick={{ fill: '#7C3AED', fontSize: 12 }}
                  label={{ value: 'Heures', angle: -90, position: 'insideLeft', fill: '#7C3AED' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #E9D5FF',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                  labelStyle={{ color: '#581C87', fontWeight: 600 }}
                  formatter={(value: number) => [`${value}h`, 'Temps étudié']}
                />
                <Bar 
                  dataKey="hours" 
                  fill="url(#barGradient)" 
                  radius={[8, 8, 0, 0]}
                  maxBarSize={60}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Objectifs de la semaine */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-white/50 shadow-sm"
          >
            <h3 className="font-semibold text-purple-900 mb-4">Objectifs de la semaine</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-purple-900 font-medium">Temps d'étude hebdomadaire</span>
                    <span className="text-sm text-purple-600">12.5h / 15h</span>
                  </div>
                  <div className="w-full bg-purple-100 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all"
                      style={{ width: '83%' }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-purple-900 font-medium">Sessions complétées</span>
                    <span className="text-sm text-purple-600">8 / 10</span>
                  </div>
                  <div className="w-full bg-purple-100 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all"
                      style={{ width: '80%' }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-purple-900 font-medium">Objectif XP</span>
                    <span className="text-sm text-purple-600">245 / 300</span>
                  </div>
                  <div className="w-full bg-purple-100 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-teal-500 to-emerald-500 h-2 rounded-full transition-all"
                      style={{ width: '82%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
