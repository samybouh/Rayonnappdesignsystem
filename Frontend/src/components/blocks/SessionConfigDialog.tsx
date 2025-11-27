import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Settings2, Target, Clock, Music, Check, Sparkles } from 'lucide-react';

interface SessionConfigDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStartSession: (config: SessionConfig) => void;
}

export interface SessionConfig {
  objective: string;
  duration: number;
  ambiance: string;
}

const durations = [
  { value: 15, label: '15', subtitle: 'min' },
  { value: 20, label: '20', subtitle: 'min' },
  { value: 25, label: '25', subtitle: 'min' },
  { value: 30, label: '30', subtitle: 'min' },
];

const ambiances = [
  { 
    value: 'focus-deep', 
    label: 'Focus Deep', 
    subtitle: "Sons d'ambiance",
    icon: '🎵',
    gradient: 'from-emerald-500 to-teal-500'
  },
  { 
    value: 'nature', 
    label: 'Nature Sounds', 
    subtitle: 'Bruits de la nature',
    icon: '🌿',
    gradient: 'from-green-500 to-emerald-500'
  },
  { 
    value: 'classical', 
    label: 'Classical', 
    subtitle: 'Musique classique',
    icon: '🎻',
    gradient: 'from-purple-500 to-pink-500'
  },
  { 
    value: 'lofi', 
    label: 'Lo-fi Beats', 
    subtitle: 'Beats relaxants',
    icon: '🎧',
    gradient: 'from-blue-500 to-purple-500'
  },
];

export function SessionConfigDialog({ open, onOpenChange, onStartSession }: SessionConfigDialogProps) {
  const [objective, setObjective] = useState('');
  const [duration, setDuration] = useState(25);
  const [ambiance, setAmbiance] = useState('focus-deep');

  const handleStart = () => {
    onStartSession({
      objective,
      duration,
      ambiance,
    });
    onOpenChange(false);
  };

  const charCount = objective.length;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-xl border-purple-200 p-6" aria-describedby={undefined}>
        <DialogHeader className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-sm">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <DialogTitle className="text-xl text-purple-900">Configuration de session</DialogTitle>
              <DialogDescription className="text-xs text-purple-600 mt-1">
                Paramètre ta session de travail idéale
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Left Column - Objectif et Durée */}
          <div className="space-y-4">
            {/* Objectif */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-4 border border-purple-100">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-purple-600" />
                <h3 className="font-semibold text-purple-900">Objectif</h3>
              </div>
              <p className="text-xs text-purple-700 mb-3">Que veux-tu accomplir ?</p>
              <Textarea
                placeholder="Ex: Terminer les exercices 5 à 10 de maths..."
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                maxLength={200}
                className="bg-white border-purple-200 focus:border-purple-400 focus:ring-purple-400/20 min-h-[120px] text-sm"
              />
              <p className="text-xs text-purple-600 mt-2">
                {charCount}/200 caractères
              </p>
            </div>

            {/* Durée */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-blue-600" />
                <h3 className="font-semibold text-blue-900">Durée</h3>
              </div>
              <p className="text-xs text-blue-700 mb-3">Temps de concentration</p>
              <div className="grid grid-cols-4 gap-2">
                {durations.map((dur) => (
                  <button
                    key={dur.value}
                    onClick={() => setDuration(dur.value)}
                    className={`
                      relative rounded-xl p-2.5 text-center transition-all
                      ${duration === dur.value 
                        ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md scale-105' 
                        : 'bg-white text-blue-900 hover:bg-blue-100 border border-blue-200'
                      }
                    `}
                  >
                    <div className="text-xl font-bold">{dur.label}</div>
                    <div className="text-xs opacity-80">{dur.subtitle}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Ambiance */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-100">
            <div className="flex items-center gap-2 mb-3">
              <Music className="w-4 h-4 text-green-600" />
              <h3 className="font-semibold text-green-900">Ambiance</h3>
            </div>
            <p className="text-xs text-green-700 mb-4">Musique de fond</p>
            
            <div className="space-y-2">
              {ambiances.map((amb) => (
                <button
                  key={amb.value}
                  onClick={() => setAmbiance(amb.value)}
                  className={`
                    w-full rounded-xl p-3 text-left transition-all relative
                    ${ambiance === amb.value 
                      ? `bg-gradient-to-r ${amb.gradient} text-white shadow-md` 
                      : 'bg-white text-gray-900 hover:bg-green-100/50 border border-green-200'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div className={`
                      w-9 h-9 rounded-lg flex items-center justify-center text-lg
                      ${ambiance === amb.value ? 'bg-white/20' : 'bg-gray-100'}
                    `}>
                      {amb.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm">{amb.label}</div>
                      <div className={`text-xs ${ambiance === amb.value ? 'text-white/80' : 'text-gray-600'}`}>
                        {amb.subtitle}
                      </div>
                    </div>
                    {ambiance === amb.value && (
                      <Check className="w-5 h-5 text-white flex-shrink-0" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="mt-4 flex justify-end">
          <Button
            onClick={handleStart}
            size="default"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 shadow-md transition-all"
          >
            Démarrer la session
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
