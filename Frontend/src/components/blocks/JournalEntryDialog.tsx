import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

interface JournalEntry {
  id: number;
  date: string;
  time: string;
  duration: string;
  title: string;
  note: string;
  tags: string[];
  xp: number;
  mood: string;
}

interface JournalEntryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (entry: Omit<JournalEntry, 'id'>) => void;
  entry?: JournalEntry | null;
}

const moodOptions = [
  { emoji: '😊', label: 'Heureux' },
  { emoji: '🔥', label: 'Motivé' },
  { emoji: '😌', label: 'Serein' },
  { emoji: '😤', label: 'Déterminé' },
  { emoji: '😕', label: 'Mitigé' },
  { emoji: '😴', label: 'Fatigué' },
  { emoji: '😰', label: 'Stressé' },
  { emoji: '😢', label: 'Triste' },
];

export function JournalEntryDialog({ open, onOpenChange, onSave, entry }: JournalEntryDialogProps) {
  const [title, setTitle] = useState(entry?.title || '');
  const [note, setNote] = useState(entry?.note || '');
  const [duration, setDuration] = useState(entry?.duration || '');
  const [selectedMood, setSelectedMood] = useState(entry?.mood || '😊');

  const handleSave = () => {
    if (!title.trim() || !note.trim()) return;

    const now = new Date();
    const dateStr = now.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
    const timeStr = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

    onSave({
      date: dateStr,
      time: timeStr,
      duration: duration || '30 min',
      title,
      note,
      tags: [],
      xp: 20,
      mood: selectedMood,
    });

    // Reset form
    setTitle('');
    setNote('');
    setDuration('');
    setSelectedMood('😊');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] max-h-[85vh] overflow-y-auto bg-white/95 backdrop-blur-sm border-white/50">
        <DialogHeader>
          <DialogTitle>Nouvelle entrée de journal</DialogTitle>
          <DialogDescription>
            Documente ta session d'étude et ton ressenti
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-3">
          {/* Mood Selector */}
          <div className="space-y-2">
            <Label className="text-sm">Comment te sens-tu ? 🌟</Label>
            <div className="grid grid-cols-4 gap-1.5">
              {moodOptions.map((mood) => (
                <button
                  key={mood.emoji}
                  type="button"
                  onClick={() => setSelectedMood(mood.emoji)}
                  className={`flex flex-col items-center gap-0.5 p-2 rounded-lg border-2 transition-all ${
                    selectedMood === mood.emoji
                      ? 'border-[var(--color-primary-mid)] bg-[var(--color-primary-mid)]/10'
                      : 'border-gray-200 hover:border-[var(--color-primary-mid)]/50 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xl">{mood.emoji}</span>
                  <span className="text-[10px] text-gray-600">{mood.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm">Titre de la session</Label>
            <Input
              id="title"
              placeholder="Ex: Révision mathématiques"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-sm"
            />
          </div>

          {/* Duration */}
          <div className="space-y-2">
            <Label htmlFor="duration" className="text-sm">Durée (optionnel)</Label>
            <Input
              id="duration"
              placeholder="Ex: 45 min"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="text-sm"
            />
          </div>

          {/* Note */}
          <div className="space-y-2">
            <Label htmlFor="note" className="text-sm">Notes</Label>
            <Textarea
              id="note"
              placeholder="Décris ta session, ce que tu as appris, tes difficultés..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              className="resize-none text-sm"
            />
          </div>
        </div>

        <div className="flex gap-2 justify-end pt-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} size="sm">
            Annuler
          </Button>
          <Button
            onClick={handleSave}
            disabled={!title.trim() || !note.trim()}
            className="bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-mid)] hover:opacity-90"
            size="sm"
          >
            Enregistrer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
