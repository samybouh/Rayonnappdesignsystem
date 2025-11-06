import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { StatMini } from '../../components/blocks/StatMini';
import { Clock, Target, Flame, Zap } from 'lucide-react';

export default function Stats() {
  const weeklyData = [
    { day: 'Lun', hours: 2.5 },
    { day: 'Mar', hours: 3.0 },
    { day: 'Mer', hours: 1.5 },
    { day: 'Jeu', hours: 2.0 },
    { day: 'Ven', hours: 3.5 },
    { day: 'Sam', hours: 1.0 },
    { day: 'Dim', hours: 0.0 },
  ];

  const subjectData = [
    { name: 'Mathématiques', value: 35, color: '#6F3DFF' },
    { name: 'Physique', value: 25, color: '#2E8BFF' },
    { name: 'Histoire', value: 20, color: '#56E3C2' },
    { name: 'Français', value: 15, color: '#F59E0B' },
    { name: 'Autre', value: 5, color: '#10B981' },
  ];

  const monthlyTrend = [
    { month: 'Oct', xp: 180 },
    { month: 'Nov', xp: 245 },
  ];

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
            Statistiques
          </h1>
          <p className="text-[var(--color-text-muted)]">
            Visualise tes progrès et ton évolution
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
            <StatMini
              value="12,5h"
              label="Temps étudié"
              icon={<Clock className="w-5 h-5" />}
              trend="up"
              trendValue="+2h"
            />
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
            <StatMini
              value="8"
              label="Sessions"
              icon={<Target className="w-5 h-5" />}
              trend="neutral"
            />
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
            <StatMini
              value="5"
              label="Jours consécutifs"
              icon={<Flame className="w-5 h-5 text-[var(--color-warning)]" />}
              trend="up"
            />
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
            <StatMini
              value="245"
              label="XP total"
              icon={<Zap className="w-5 h-5 text-[var(--color-warning)]" />}
              trend="up"
              trendValue="+45"
            />
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Weekly Study Time */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6">
              Temps étudié cette semaine
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(15, 23, 42, 0.1)" />
                <XAxis dataKey="day" stroke="var(--color-text-muted)" />
                <YAxis stroke="var(--color-text-muted)" />
                <Tooltip 
                  contentStyle={{ 
                    background: 'white', 
                    border: '1px solid rgba(15, 23, 42, 0.1)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 16px rgba(15, 23, 42, 0.1)'
                  }}
                />
                <Bar dataKey="hours" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6F3DFF" />
                    <stop offset="100%" stopColor="#2E8BFF" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Subject Distribution */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6">
              Répartition par matière
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={subjectData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                  label={(entry) => `${entry.value}%`}
                >
                  {subjectData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    background: 'white', 
                    border: '1px solid rgba(15, 23, 42, 0.1)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 16px rgba(15, 23, 42, 0.1)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {subjectData.map((subject) => (
                <div key={subject.name} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: subject.color }}
                  ></div>
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    {subject.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* XP Trend */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 lg:col-span-2">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6">
              Évolution de l'XP
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(15, 23, 42, 0.1)" />
                <XAxis dataKey="month" stroke="var(--color-text-muted)" />
                <YAxis stroke="var(--color-text-muted)" />
                <Tooltip 
                  contentStyle={{ 
                    background: 'white', 
                    border: '1px solid rgba(15, 23, 42, 0.1)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 16px rgba(15, 23, 42, 0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="xp" 
                  stroke="#F59E0B"
                  strokeWidth={3}
                  dot={{ fill: '#F59E0B', r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
