import { Bell, BookOpen, Trophy, Clock, Sparkles } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { motion } from 'motion/react';
import { useState } from 'react';

interface Notification {
  id: string;
  type: 'achievement' | 'reminder' | 'method' | 'ray';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'achievement',
    title: 'Nouveau Rayon !',
    message: 'Vous avez atteint le Rayon 3 - Lumière Croissante',
    time: 'Il y a 2h',
    read: false,
  },
  {
    id: '2',
    type: 'ray',
    title: 'Ray a une suggestion',
    message: 'Votre prochaine session de révision approche',
    time: 'Il y a 3h',
    read: false,
  },
  {
    id: '3',
    type: 'reminder',
    title: 'Session programmée',
    message: 'Mathématiques - Révision dans 30 min',
    time: 'Il y a 5h',
    read: true,
  },
  {
    id: '4',
    type: 'method',
    title: 'Nouvelle méthode',
    message: 'La méthode Pomodoro est maintenant disponible',
    time: 'Hier',
    read: true,
  },
];

export function NotificationsPopover() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [open, setOpen] = useState(false);
  
  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'achievement':
        return <Trophy className="w-4 h-4 text-[var(--color-warning)]" />;
      case 'reminder':
        return <Clock className="w-4 h-4 text-[var(--color-info)]" />;
      case 'method':
        return <BookOpen className="w-4 h-4 text-[var(--color-primary-mid)]" />;
      case 'ray':
        return <Sparkles className="w-4 h-4 text-[var(--color-primary-start)]" />;
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-9 w-9">
          <Bell className="w-4 h-4" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--color-danger)] rounded-full border border-white" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        align="end" 
        className="w-[380px] p-0 bg-white/95 backdrop-blur-md border border-white/50 shadow-lg rounded-3xl overflow-hidden"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#E8F0FE]/40 via-[#E8F8F5]/40 to-[#FEF3C7]/40">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#6F3DFF]" />
              <h3 className="text-[var(--color-text-primary)]">
                Notifications
              </h3>
            </div>
            {unreadCount > 0 && (
              <button 
                onClick={markAllAsRead}
                className="text-[var(--color-primary-mid)] hover:text-[var(--color-primary-start)] transition-colors text-sm"
              >
                Tout marquer comme lu
              </button>
            )}
          </div>
        </div>

        {/* Notifications List */}
        <div className="max-h-[420px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-gray-300">
          {notifications.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <Bell className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p className="text-[var(--color-text-muted)]">
                Aucune notification
              </p>
            </div>
          ) : (
            <div className="py-2">
              {notifications.map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`px-6 py-3 hover:bg-gradient-to-r hover:from-[#E8F0FE]/30 hover:to-[#E8F8F5]/30 transition-colors cursor-pointer border-l-4 ${
                    !notification.read 
                      ? 'border-l-[var(--color-primary-mid)] bg-[#E8F0FE]/20' 
                      : 'border-l-transparent'
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E8F0FE] to-[#E8F8F5] flex items-center justify-center">
                        {getIcon(notification.type)}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className={`${!notification.read ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-text-secondary)]'}`}>
                          {notification.title}
                        </p>
                        {!notification.read && (
                          <div className="w-2 h-2 rounded-full bg-[var(--color-primary-mid)] flex-shrink-0 mt-1" />
                        )}
                      </div>
                      <p className="text-[var(--color-text-muted)] text-sm mb-1">
                        {notification.message}
                      </p>
                      <p className="text-[var(--color-text-muted)] text-xs">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {notifications.length > 0 && (
          <div className="px-6 py-3 border-t border-gray-100 bg-gradient-to-r from-[#E8F0FE]/20 to-[#E8F8F5]/20">
            <button className="w-full text-center text-[var(--color-primary-mid)] hover:text-[var(--color-primary-start)] transition-colors text-sm">
              Voir toutes les notifications
            </button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
