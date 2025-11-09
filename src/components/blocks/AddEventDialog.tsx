import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Checkbox } from '../ui/checkbox';
import type { ScheduleEventData } from './ScheduleEvent';

const DAYS_FULL = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

interface AddEventDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddEvent: (event: Omit<ScheduleEventData, 'id'>) => void;
  currentView?: 'day' | 'week';
}

export function AddEventDialog({ open, onOpenChange, onAddEvent, currentView = 'day' }: AddEventDialogProps) {
  const [formData, setFormData] = useState({
    title: '',
    startTime: '',
    endTime: '',
    type: 'scolaire' as 'scolaire' | 'personnel' | 'sport' | 'sortie',
    isRecurring: false,
    dayOfWeek: 0,
  });

  const handleSubmit = () => {
    if (formData.title.trim() && formData.startTime && formData.endTime) {
      onAddEvent({
        ...formData,
        dayOfWeek: currentView === 'week' ? formData.dayOfWeek : 0,
      });
      
      // Reset form
      setFormData({
        title: '',
        startTime: '',
        endTime: '',
        type: 'scolaire',
        isRecurring: false,
        dayOfWeek: 0,
      });
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white/95 backdrop-blur-xl border-2 border-purple-200/50" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-purple-900 flex items-center gap-2">
            Nouvel Événement
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Titre */}
          <div className="space-y-2">
            <Label htmlFor="event-title" className="text-purple-900 font-medium">
              Titre
            </Label>
            <Input
              id="event-title"
              placeholder="Ex: Cours de Physique"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="bg-white/60 border-purple-200 text-purple-900 placeholder:text-purple-400"
            />
          </div>

          {/* Jour de la semaine (seulement en vue semaine) */}
          {currentView === 'week' && (
            <div className="space-y-2">
              <Label htmlFor="event-day" className="text-purple-900 font-medium">
                Jour
              </Label>
              <Select 
                value={formData.dayOfWeek.toString()} 
                onValueChange={(value) => 
                  setFormData({ ...formData, dayOfWeek: parseInt(value) })
                }
              >
                <SelectTrigger className="bg-white/60 border-purple-200 text-purple-900">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {DAYS_FULL.map((day, index) => (
                    <SelectItem key={index} value={index.toString()}>
                      {day}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Début et Fin */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="event-start" className="text-purple-900 font-medium">
                Début
              </Label>
              <Input
                id="event-start"
                type="time"
                value={formData.startTime}
                onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                className="bg-white/60 border-purple-200 text-purple-900"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="event-end" className="text-purple-900 font-medium">
                Fin
              </Label>
              <Input
                id="event-end"
                type="time"
                value={formData.endTime}
                onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                className="bg-white/60 border-purple-200 text-purple-900"
              />
            </div>
          </div>

          {/* Type */}
          <div className="space-y-2">
            <Label htmlFor="event-type" className="text-purple-900 font-medium">
              Type
            </Label>
            <Select 
              value={formData.type} 
              onValueChange={(value: 'scolaire' | 'personnel' | 'sport' | 'sortie') => 
                setFormData({ ...formData, type: value })
              }
            >
              <SelectTrigger className="bg-white/60 border-purple-200 text-purple-900">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="scolaire">📚 Scolaire</SelectItem>
                <SelectItem value="personnel">💭 Personnel</SelectItem>
                <SelectItem value="sport">⚽ Sport</SelectItem>
                <SelectItem value="sortie">🎉 Sortie</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Récurrence */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="recurring"
              checked={formData.isRecurring}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, isRecurring: checked as boolean })
              }
            />
            <Label
              htmlFor="recurring"
              className="text-sm text-purple-900 cursor-pointer"
            >
              Répéter chaque semaine
            </Label>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-purple-200 text-purple-700 hover:bg-purple-50"
          >
            Annuler
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            className="bg-gradient-to-r from-[#6F3DFF] to-[#2E8BFF] hover:opacity-90 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Ajouter
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
