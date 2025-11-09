import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Search, BookOpen, Brain, Sparkles, Target, Clock, Zap } from 'lucide-react';

interface MethodBankDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectMethod: (method: BankMethod) => void;
}

interface BankMethod {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
}

const availableMethods: BankMethod[] = [
  {
    id: 'feynman',
    name: 'Technique Feynman',
    description: 'Expliquer un concept simplement pour mieux le comprendre',
    category: 'Compréhension',
    icon: <Brain className="w-5 h-5" />,
  },
  {
    id: 'pomodoro',
    name: 'Méthode Pomodoro',
    description: 'Travailler par intervalles de 25 min avec des pauses',
    category: 'Productivité',
    icon: <Clock className="w-5 h-5" />,
  },
  {
    id: 'mindmap',
    name: 'Mind Mapping',
    description: 'Organiser visuellement les concepts et leurs liens',
    category: 'Organisation',
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    id: 'active-recall',
    name: 'Rappel actif',
    description: 'Tester ses connaissances plutôt que relire passivement',
    category: 'Mémorisation',
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: 'sq3r',
    name: 'Méthode SQ3R',
    description: 'Survey, Question, Read, Recite, Review - lecture active',
    category: 'Lecture',
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    id: 'smart-goals',
    name: 'Objectifs SMART',
    description: 'Définir des objectifs Spécifiques, Mesurables, Atteignables',
    category: 'Organisation',
    icon: <Target className="w-5 h-5" />,
  },
];

export function MethodBankDialog({ open, onOpenChange, onSelectMethod }: MethodBankDialogProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMethods = availableMethods.filter(
    (method) =>
      method.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      method.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      method.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[85vh] overflow-y-auto bg-white/95 backdrop-blur-sm border-white/50">
        <DialogHeader>
          <DialogTitle>Explorer les méthodes</DialogTitle>
          <DialogDescription>
            Choisis une méthode de travail adaptée à tes besoins
          </DialogDescription>
        </DialogHeader>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Rechercher une méthode..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Methods List */}
        <div className="space-y-3 py-2">
          {filteredMethods.length > 0 ? (
            filteredMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => {
                  onSelectMethod(method);
                  onOpenChange(false);
                }}
                className="w-full flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-[var(--color-primary-mid)] hover:bg-[var(--color-primary-mid)]/5 transition-all text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--color-primary-start)] to-[var(--color-primary-mid)] flex items-center justify-center text-white flex-shrink-0">
                  {method.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="group-hover:text-[var(--color-primary-mid)] transition-colors">
                      {method.name}
                    </h4>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                      {method.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </button>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>Aucune méthode trouvée</p>
            </div>
          )}
        </div>

        <div className="flex justify-end pt-2 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Fermer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
