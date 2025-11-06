import { Button } from '../../components/ui/button';
import { Plus, Target, TrendingUp } from 'lucide-react';
import { Progress } from '../../components/ui/progress';

export default function Methods() {
  const methods = [
    {
      id: 1,
      name: 'Pomodoro',
      objective: 'Améliorer ma concentration',
      description: 'Technique de travail par intervalles de 25 minutes avec des pauses courtes',
      progress: 75,
      sessions: 12,
      color: '#6F3DFF',
    },
    {
      id: 2,
      name: 'Fiche de révision',
      objective: 'Mieux mémoriser',
      description: 'Créer des fiches synthétiques pour chaque chapitre',
      progress: 45,
      sessions: 8,
      color: '#2E8BFF',
    },
    {
      id: 3,
      name: 'Mind Mapping',
      objective: 'Organiser mes idées',
      description: 'Cartographier visuellement les concepts et leurs liens',
      progress: 30,
      sessions: 5,
      color: '#56E3C2',
    },
    {
      id: 4,
      name: 'Répétition espacée',
      objective: 'Ancrer les connaissances',
      description: 'Réviser à intervalles croissants pour une mémorisation durable',
      progress: 60,
      sessions: 15,
      color: '#F59E0B',
    },
  ];

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
              Mes méthodes
            </h1>
            <p className="text-[var(--color-text-muted)]">
              Découvre et maîtrise différentes techniques d'apprentissage
            </p>
          </div>
          
          <Button className="bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-mid)] hover:opacity-90 gap-2">
            <Plus className="w-5 h-5" />
            Nouvelle méthode
          </Button>
        </div>

        {/* Methods Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {methods.map((method) => (
            <div
              key={method.id}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-white/50 hover:shadow-lg transition-all cursor-pointer group relative overflow-hidden"
            >
              {/* Color accent */}
              <div 
                className="absolute top-0 left-0 w-1.5 h-full"
                style={{ backgroundColor: method.color }}
              ></div>
              
              <div className="pl-3">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-primary-mid)] transition-colors">
                      {method.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                      <Target className="w-4 h-4" />
                      <span>{method.objective}</span>
                    </div>
                  </div>
                  
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${method.color}20` }}
                  >
                    <TrendingUp className="w-6 h-6" style={{ color: method.color }} />
                  </div>
                </div>

                {/* Description */}
                <p className="text-[var(--color-text-secondary)] mb-4">
                  {method.description}
                </p>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--color-text-muted)]">Progression</span>
                    <span className="font-medium text-[var(--color-text-primary)]">
                      {method.progress}%
                    </span>
                  </div>
                  <Progress value={method.progress} className="h-2" />
                  
                  <div className="text-xs text-[var(--color-text-muted)]">
                    {method.sessions} sessions complétées
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
