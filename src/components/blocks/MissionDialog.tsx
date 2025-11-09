import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Clock, BookOpen, Target } from 'lucide-react';

interface MissionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MissionDialog({ open, onOpenChange }: MissionDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="!max-w-[500px] sm:!max-w-[500px] bg-white border-2 border-purple-100/50 shadow-2xl p-0"
      >
        <DialogHeader className="p-6 pb-4 border-b border-purple-100/50">
          <DialogTitle className="text-2xl font-semibold text-purple-900 flex items-center gap-3">
            <span className="text-3xl">⏰</span>
            Mission
          </DialogTitle>
          <DialogDescription className="sr-only">
            Détails de la mission quotidienne avec description, matière et récompense
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-6 space-y-6">
          {/* Badge et durée */}
          <div className="flex items-center gap-3">
            <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-amber-200">
              Moyen
            </Badge>
            <div className="flex items-center gap-1.5 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>30 min</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Fais 3 exercices de maths en moins de 30 minutes
            </p>
          </div>

          {/* Détails */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Détails</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-sm">
                <BookOpen className="w-4 h-4 text-purple-500" />
                <span className="text-gray-500 w-20">Matière</span>
                <span className="text-gray-900 font-medium">Mathématiques</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Target className="w-4 h-4 text-purple-500" />
                <span className="text-gray-500 w-20">Type</span>
                <span className="text-gray-900 font-medium">Exercices</span>
              </div>
            </div>
          </div>

          {/* Récompense */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-100">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Récompense</span>
              <span className="font-semibold text-purple-600">+10 XP</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <Button 
              variant="outline" 
              className="flex-1 border-gray-200 hover:bg-gray-50"
              onClick={() => onOpenChange(false)}
            >
              Plus tard
            </Button>
            <Button 
              className="flex-1 bg-gradient-to-r from-[#6F3DFF] to-[#2E8BFF] hover:opacity-90 text-white shadow-sm"
              onClick={() => {
                onOpenChange(false);
                // TODO: Logique pour démarrer la mission
              }}
            >
              Commencer
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
