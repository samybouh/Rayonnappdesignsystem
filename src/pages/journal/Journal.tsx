import { Button } from '../../components/ui/button';
import { Plus, Calendar, Tag } from 'lucide-react';
import { Badge } from '../../components/ui/badge';

export default function Journal() {
  const entries = [
    {
      id: 1,
      date: '6 nov. 2025',
      time: '14:30',
      duration: '45 min',
      title: 'Révision mathématiques',
      note: 'Super session ! J\'ai enfin compris les dérivées. Ray m\'a aidé avec des exemples concrets.',
      tags: ['Maths', 'Révision'],
      xp: 25,
    },
    {
      id: 2,
      date: '5 nov. 2025',
      time: '16:00',
      duration: '30 min',
      title: 'Exercices de physique',
      note: 'Chapitre sur la mécanique. Quelques difficultés mais j\'ai bien avancé.',
      tags: ['Physique', 'Exercices'],
      xp: 15,
    },
    {
      id: 3,
      date: '5 nov. 2025',
      time: '10:00',
      duration: '60 min',
      title: 'Fiche de révision histoire',
      note: 'Création de fiches sur la Révolution française. Méthode efficace !',
      tags: ['Histoire', 'Fiches'],
      xp: 30,
    },
    {
      id: 4,
      date: '4 nov. 2025',
      time: '15:30',
      duration: '40 min',
      title: 'Lecture anglais',
      note: 'Lu 3 chapitres. Vocabulaire noté dans le carnet.',
      tags: ['Anglais', 'Lecture'],
      xp: 20,
    },
  ];

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
              Journal de bord
            </h1>
            <p className="text-[var(--color-text-muted)]">
              Retrace ton parcours et tes progrès
            </p>
          </div>
          
          <Button className="bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-mid)] hover:opacity-90 gap-2">
            <Plus className="w-5 h-5" />
            Nouvelle entrée
          </Button>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary-start)] via-[var(--color-primary-mid)] to-[var(--color-primary-end)]"></div>

          {/* Entries */}
          <div className="space-y-8">
            {entries.map((entry, index) => (
              <div key={entry.id} className="relative pl-16">
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-[var(--color-primary-start)] to-[var(--color-primary-mid)] border-4 border-[var(--color-bg-start)]"></div>

                {/* Entry card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <Calendar className="w-4 h-4 text-[var(--color-text-muted)]" />
                        <span className="text-sm text-[var(--color-text-muted)]">
                          {entry.date} • {entry.time}
                        </span>
                        <span className="text-sm text-[var(--color-text-muted)]">•</span>
                        <span className="text-sm font-medium text-[var(--color-primary-mid)]">
                          {entry.duration}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                        {entry.title}
                      </h3>
                    </div>
                    
                    <div className="bg-gradient-to-r from-[var(--color-warning)]/20 to-[var(--color-warning)]/10 px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-[var(--color-warning)]">
                        +{entry.xp} XP
                      </span>
                    </div>
                  </div>

                  {/* Note */}
                  <p className="text-[var(--color-text-secondary)] mb-4">
                    {entry.note}
                  </p>

                  {/* Tags */}
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-[var(--color-text-muted)]" />
                    <div className="flex gap-2">
                      {entry.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-[var(--color-primary-mid)]/10 text-[var(--color-primary-mid)] hover:bg-[var(--color-primary-mid)]/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
