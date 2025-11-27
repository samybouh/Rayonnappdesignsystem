import { useState } from 'react';
import { Calendar, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { ScheduleEvent, type ScheduleEventData } from './ScheduleEvent';
import { AddEventDialog } from './AddEventDialog';
import { motion } from 'motion/react';

const HOURS = Array.from({ length: 14 }, (_, i) => i + 7); // 7h à 20h
const DAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

const defaultEvents: ScheduleEventData[] = [
  {
    id: '1',
    title: 'Cours de Mathématiques',
    startTime: '08:00',
    endTime: '10:00',
    type: 'scolaire',
    isRecurring: true,
    dayOfWeek: 0, // Lundi
  },
  {
    id: '2',
    title: 'Cours de Physique',
    startTime: '10:30',
    endTime: '12:00',
    type: 'scolaire',
    dayOfWeek: 0, // Lundi
  },
  {
    id: '3',
    title: 'Pause déjeuner',
    startTime: '12:00',
    endTime: '13:30',
    type: 'personnel',
    dayOfWeek: 1, // Mardi
  },
  {
    id: '4',
    title: 'Sport',
    startTime: '17:00',
    endTime: '18:30',
    type: 'sport',
    isRecurring: true,
    dayOfWeek: 2, // Mercredi
  },
  {
    id: '5',
    title: 'Cours d\'Anglais',
    startTime: '14:00',
    endTime: '16:00',
    type: 'scolaire',
    dayOfWeek: 3, // Jeudi
  },
  {
    id: '6',
    title: 'Cinéma',
    startTime: '19:00',
    endTime: '21:00',
    type: 'sortie',
    dayOfWeek: 5, // Samedi
  },
];

interface ScheduleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ScheduleDialog({ open, onOpenChange }: ScheduleDialogProps) {
  const [events, setEvents] = useState<ScheduleEventData[]>(defaultEvents);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [view, setView] = useState<'day' | 'week'>('day');
  const [currentDate] = useState(new Date());

  const handleAddEvent = (eventData: Omit<ScheduleEventData, 'id'>) => {
    const newEvent: ScheduleEventData = {
      id: Date.now().toString(),
      ...eventData,
    };
    setEvents([...events, newEvent]);
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const getEventStyle = (startTime: string, endTime: string) => {
    const [startHour, startMin] = startTime.split(':').map(Number);
    const [endHour, endMin] = endTime.split(':').map(Number);
    
    const startOffset = startHour + startMin / 60;
    const endOffset = endHour + endMin / 60;
    const duration = endOffset - startOffset;
    
    const top = ((startOffset - 7) * 80);
    const height = duration * 80;
    
    return { top, height };
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const getEventsForDay = (dayIndex: number) => {
    return events.filter(event => event.dayOfWeek === dayIndex);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent 
          className="!max-w-[1400px] sm:!max-w-[1400px] w-[95vw] max-h-[90vh] overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 border-2 border-white/50 shadow-2xl p-0"
          aria-describedby={undefined}
        >
          <DialogHeader className="p-6 pb-4 border-b border-purple-100/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-purple-700 hover:bg-white/50 h-8 w-8"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                
                <div>
                  <DialogTitle className="text-2xl font-semibold text-purple-900 flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-purple-600" />
                    {view === 'day' ? 'Ma Journée' : 'Ma Semaine'}
                  </DialogTitle>
                  <p className="text-sm text-purple-600 mt-1">{formatDate(currentDate)}</p>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-purple-700 hover:bg-white/50 h-8 w-8"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex bg-white/50 rounded-lg p-1 border border-purple-200/50">
                  <Button
                    variant={view === 'day' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setView('day')}
                    className={view === 'day' 
                      ? 'bg-gradient-to-r from-[#6F3DFF] to-[#2E8BFF] text-white h-7' 
                      : 'text-purple-700 h-7'
                    }
                  >
                    Jour
                  </Button>
                  <Button
                    variant={view === 'week' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setView('week')}
                    className={view === 'week' 
                      ? 'bg-gradient-to-r from-[#6F3DFF] to-[#2E8BFF] text-white h-7' 
                      : 'text-purple-700 h-7'
                    }
                  >
                    Semaine
                  </Button>
                </div>

                <Button
                  onClick={() => setIsAddDialogOpen(true)}
                  size="sm"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-md h-7"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Ajouter
                </Button>
              </div>
            </div>
          </DialogHeader>

          <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-6">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border-2 border-white/50 overflow-hidden">
              {view === 'day' ? (
                // Vue Jour (existante)
                <div className="relative">
                  <div className="flex">
                    {/* Colonne des heures */}
                    <div className="w-20 flex-shrink-0 border-r border-purple-100/50 bg-white/30">
                      {HOURS.map((hour) => (
                        <div
                          key={hour}
                          className="h-20 border-b border-purple-100/30 flex items-start justify-center pt-2"
                        >
                          <span className="text-xs text-purple-600 font-medium">
                            {hour.toString().padStart(2, '0')}:00
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Zone des événements */}
                    <div className="flex-1 relative min-h-[1120px]">
                      {/* Lignes horizontales */}
                      {HOURS.map((hour) => (
                        <div
                          key={hour}
                          className="absolute left-0 right-0 h-20 border-b border-purple-100/30"
                          style={{ top: (hour - 7) * 80 }}
                        />
                      ))}

                      {/* Événements */}
                      <div className="absolute inset-0 p-2">
                        {events
                          .filter(event => event.dayOfWeek === undefined || event.dayOfWeek === 0)
                          .map((event) => {
                            const { top, height } = getEventStyle(event.startTime, event.endTime);
                            return (
                              <div
                                key={event.id}
                                className="absolute left-2 right-2"
                                style={{
                                  top: `${top}px`,
                                  height: `${height}px`,
                                }}
                              >
                                <ScheduleEvent event={event} onDelete={handleDeleteEvent} />
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Vue Semaine
                <div className="relative">
                  <div className="flex">
                    {/* Colonne des heures */}
                    <div className="w-16 flex-shrink-0 border-r border-purple-100/50 bg-white/30">
                      <div className="h-12 border-b border-purple-100/50" />
                      {HOURS.map((hour) => (
                        <div
                          key={hour}
                          className="h-16 border-b border-purple-100/30 flex items-start justify-center pt-1"
                        >
                          <span className="text-xs text-purple-600 font-medium">
                            {hour.toString().padStart(2, '0')}h
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Zone des 7 jours */}
                    <div className="flex-1 flex">
                      {DAYS.map((day, dayIndex) => (
                        <div key={day} className="flex-1 border-r border-purple-100/50 last:border-r-0">
                          {/* En-tête du jour */}
                          <div className="h-12 border-b border-purple-100/50 bg-gradient-to-br from-purple-100/40 to-blue-100/40 flex items-center justify-center">
                            <span className="text-sm font-semibold text-purple-700">
                              {day}
                            </span>
                          </div>

                          {/* Zone des événements pour ce jour */}
                          <div className="relative" style={{ height: '1120px' }}>
                            {/* Lignes horizontales */}
                            {HOURS.map((hour) => (
                              <div
                                key={hour}
                                className="absolute left-0 right-0 h-16 border-b border-purple-100/30"
                                style={{ top: (hour - 7) * 64 }}
                              />
                            ))}

                            {/* Événements de ce jour */}
                            <div className="absolute inset-0 px-1 py-0">
                              {getEventsForDay(dayIndex).map((event) => {
                                const [startHour, startMin] = event.startTime.split(':').map(Number);
                                const [endHour, endMin] = event.endTime.split(':').map(Number);
                                
                                const startOffset = startHour + startMin / 60;
                                const endOffset = endHour + endMin / 60;
                                const duration = endOffset - startOffset;
                                
                                const top = ((startOffset - 7) * 64);
                                const height = duration * 64;

                                return (
                                  <div
                                    key={event.id}
                                    className="absolute left-1 right-1"
                                    style={{
                                      top: `${top}px`,
                                      height: `${height}px`,
                                    }}
                                  >
                                    <ScheduleEvent event={event} onDelete={handleDeleteEvent} />
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog d'ajout d'événement */}
      <AddEventDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onAddEvent={handleAddEvent}
        currentView={view}
      />
    </>
  );
}
