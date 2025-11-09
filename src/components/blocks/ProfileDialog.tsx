import { useState } from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface ProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProfileDialog({ open, onOpenChange }: ProfileDialogProps) {
  const [profile, setProfile] = useState({
    name: 'Emma Dupont',
    email: 'emma.dupont@example.com',
    password: '',
    avatar: '',
  });

  const handleSave = () => {
    console.log('Profil sauvegardé:', profile);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-white border-none shadow-none p-0 gap-0">
        <div className="flex flex-col items-center py-12 px-8">
          {/* Avatar */}
          <Avatar className="w-20 h-20 mb-6">
            <AvatarImage src={profile.avatar} />
            <AvatarFallback className="bg-gradient-to-br from-[#6F3DFF] to-[#2E8BFF] text-white">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>

          {/* Title */}
          <h2 className="text-center mb-2">
            Mon profil
          </h2>
          <p className="text-center text-[var(--color-text-muted)] text-sm mb-8">
            Gérer mes informations personnelles
          </p>

          {/* Form */}
          <div className="w-full space-y-6">
            <div className="space-y-1.5">
              <label className="text-sm text-[var(--color-text-secondary)]">
                Nom
              </label>
              <Input
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="bg-white border-gray-300"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-[var(--color-text-secondary)]">
                Email
              </label>
              <Input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="bg-white border-gray-300"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm text-[var(--color-text-secondary)]">
                Mot de passe
              </label>
              <Input
                type="password"
                value={profile.password}
                onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                placeholder="••••••••"
                className="bg-white border-gray-300"
              />
            </div>

            <div className="pt-2">
              <Button
                onClick={handleSave}
                className="w-full bg-[var(--color-text-primary)] hover:bg-[var(--color-text-secondary)] text-white"
              >
                Enregistrer
              </Button>
            </div>

            <div className="text-center">
              <button
                onClick={() => onOpenChange(false)}
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
              >
                ← Retour
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
