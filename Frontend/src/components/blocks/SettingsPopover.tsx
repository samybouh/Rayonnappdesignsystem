import { User, Palette, Bell, LogOut, Settings as SettingsIcon, Shield, Globe } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ProfileDialog } from './ProfileDialog';

interface SettingItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  description?: string;
  type: 'link' | 'toggle' | 'action';
  value?: boolean;
  action?: () => void;
}

export function SettingsPopover() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [settings, setSettings] = useState({
    notifications: true,
    emailDigest: false,
    soundEffects: true,
    darkMode: false,
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleLogout = () => {
    console.log('Déconnexion...');
    // Logique de déconnexion
  };

  const handleProfileClick = () => {
    setProfileOpen(true);
    setOpen(false);
  };

  const settingsSections = [
    {
      title: 'Compte',
      items: [
        {
          id: 'profile',
          icon: <User className="w-4 h-4" />,
          label: 'Mon profil',
          type: 'link' as const,
          action: handleProfileClick,
        },
        {
          id: 'privacy',
          icon: <Shield className="w-4 h-4" />,
          label: 'Confidentialité',
          type: 'link' as const,
        },
      ],
    },
    {
      title: 'Préférences',
      items: [
        {
          id: 'notifications',
          icon: <Bell className="w-4 h-4" />,
          label: 'Notifications',
          description: 'Recevoir des alertes',
          type: 'toggle' as const,
          value: settings.notifications,
        },
        {
          id: 'emailDigest',
          icon: <Globe className="w-4 h-4" />,
          label: 'Résumé par email',
          description: 'Rapport hebdomadaire',
          type: 'toggle' as const,
          value: settings.emailDigest,
        },
        {
          id: 'soundEffects',
          icon: <SettingsIcon className="w-4 h-4" />,
          label: 'Effets sonores',
          description: 'Sons dans l\'app',
          type: 'toggle' as const,
          value: settings.soundEffects,
        },
      ],
    },
    {
      title: 'Apparence',
      items: [
        {
          id: 'theme',
          icon: <Palette className="w-4 h-4" />,
          label: 'Thème',
          type: 'link' as const,
        },
      ],
    },
  ];

  return (
    <>
      <ProfileDialog open={profileOpen} onOpenChange={setProfileOpen} />
      
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        align="end" 
        className="w-[340px] p-0 bg-white/95 backdrop-blur-md border border-white/50 shadow-lg rounded-3xl overflow-hidden"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#E8F0FE]/40 via-[#E8F8F5]/40 to-[#FEF3C7]/40">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#6F3DFF]" />
            <h3 className="text-[var(--color-text-primary)]">
              Paramètres
            </h3>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="max-h-[480px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-gray-300">
          <div className="py-2">
            {settingsSections.map((section, sectionIndex) => (
              <div key={section.title}>
                {sectionIndex > 0 && <Separator className="my-2" />}
                
                <div className="px-6 py-2">
                  <p className="text-xs text-[var(--color-text-muted)] mb-2">
                    {section.title}
                  </p>
                  
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.05 }}
                    >
                      {item.type === 'toggle' ? (
                        <div className="flex items-center justify-between py-3 px-3 -mx-3 rounded-xl hover:bg-gradient-to-r hover:from-[#E8F0FE]/30 hover:to-[#E8F8F5]/30 transition-colors">
                          <div className="flex items-start gap-3 flex-1">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E8F0FE] to-[#E8F8F5] flex items-center justify-center text-[var(--color-primary-mid)] flex-shrink-0 mt-0.5">
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[var(--color-text-primary)]">
                                {item.label}
                              </p>
                              {item.description && (
                                <p className="text-xs text-[var(--color-text-muted)]">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>
                          <Switch
                            checked={item.value}
                            onCheckedChange={() => handleToggle(item.id as keyof typeof settings)}
                          />
                        </div>
                      ) : (
                        <button
                          className="w-full flex items-center gap-3 py-3 px-3 -mx-3 rounded-xl hover:bg-gradient-to-r hover:from-[#E8F0FE]/30 hover:to-[#E8F8F5]/30 transition-colors text-left"
                          onClick={item.action}
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E8F0FE] to-[#E8F8F5] flex items-center justify-center text-[var(--color-primary-mid)] flex-shrink-0">
                            {item.icon}
                          </div>
                          <p className="text-[var(--color-text-primary)] flex-1">
                            {item.label}
                          </p>
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer - Logout */}
        <div className="px-6 py-3 border-t border-gray-100 bg-gradient-to-r from-[#FEE2E2]/30 to-[#FECACA]/30">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl hover:bg-[#FEE2E2]/50 transition-colors text-[var(--color-danger)]"
          >
            <LogOut className="w-4 h-4" />
            <span>Déconnexion</span>
          </button>
        </div>
      </PopoverContent>
    </Popover>
    </>
  );
}
