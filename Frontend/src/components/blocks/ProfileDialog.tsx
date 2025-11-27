import { useState } from 'react';
import { User, Mail, Calendar, GraduationCap, MapPin, Camera } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { motion } from 'motion/react';

interface ProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProfileDialog({ open, onOpenChange }: ProfileDialogProps) {
  const [profile, setProfile] = useState({
    name: 'Emma Dupont',
    email: 'emma.dupont@example.com',
    bio: 'Étudiante passionnée par l\'apprentissage efficace et l\'optimisation de mes révisions.',
    education: 'licence',
    location: 'Paris, France',
    avatar: '',
  });

  const handleSave = () => {
    console.log('Profil sauvegardé:', profile);
    onOpenChange(false);
  };

  const handleAvatarClick = () => {
    console.log('Upload avatar');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-md border border-white/50 rounded-3xl p-0 overflow-hidden">
        {/* Header */}
        <div className="px-8 pt-6 pb-4 bg-gradient-to-r from-[#E8F0FE]/60 via-[#E8F8F5]/60 to-[#FEF3C7]/60 border-b border-gray-100">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#6F3DFF]" />
              <DialogTitle className="text-[var(--color-text-primary)]">
                Mon Profil
              </DialogTitle>
            </div>
          </DialogHeader>
        </div>

        {/* Content */}
        <div className="px-8 py-6 max-h-[70vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full">
          <div className="space-y-6">
            {/* Avatar Section */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="relative group">
                <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
                  <AvatarImage src={profile.avatar} />
                  <AvatarFallback className="bg-gradient-to-br from-[#6F3DFF] to-[#2E8BFF] text-white text-2xl">
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <button
                  onClick={handleAvatarClick}
                  className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  <Camera className="w-6 h-6 text-white" />
                </button>
              </div>
              <p className="text-sm text-[var(--color-text-muted)]">
                Cliquez pour changer votre photo
              </p>
            </motion.div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-2"
              >
                <Label className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                  <User className="w-4 h-4" />
                  Nom complet
                </Label>
                <Input
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="bg-white border-gray-200 rounded-2xl focus:ring-2 focus:ring-[var(--color-primary-mid)] focus:border-transparent"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="space-y-2"
              >
                <Label className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                  <Mail className="w-4 h-4" />
                  Email
                </Label>
                <Input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="bg-white border-gray-200 rounded-2xl focus:ring-2 focus:ring-[var(--color-primary-mid)] focus:border-transparent"
                />
              </motion.div>

              {/* Education Level */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <Label className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                  <GraduationCap className="w-4 h-4" />
                  Niveau d'études
                </Label>
                <Select value={profile.education} onValueChange={(value) => setProfile({ ...profile, education: value })}>
                  <SelectTrigger className="bg-white border-gray-200 rounded-2xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lycee">Lycée</SelectItem>
                    <SelectItem value="licence">Licence</SelectItem>
                    <SelectItem value="master">Master</SelectItem>
                    <SelectItem value="doctorat">Doctorat</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="space-y-2"
              >
                <Label className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                  <MapPin className="w-4 h-4" />
                  Localisation
                </Label>
                <Input
                  value={profile.location}
                  onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                  className="bg-white border-gray-200 rounded-2xl focus:ring-2 focus:ring-[var(--color-primary-mid)] focus:border-transparent"
                />
              </motion.div>
            </div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <Label className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                <Calendar className="w-4 h-4" />
                Bio
              </Label>
              <Textarea
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                rows={4}
                className="bg-white border-gray-200 rounded-2xl focus:ring-2 focus:ring-[var(--color-primary-mid)] focus:border-transparent resize-none"
                placeholder="Parlez-nous un peu de vous..."
              />
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              <div className="bg-gradient-to-br from-[#E8F0FE]/60 to-[#E8F8F5]/60 rounded-2xl p-4 text-center">
                <p className="text-2xl text-[var(--color-primary-start)] mb-1">127</p>
                <p className="text-xs text-[var(--color-text-muted)]">Sessions</p>
              </div>
              <div className="bg-gradient-to-br from-[#E8F8F5]/60 to-[#FEF3C7]/60 rounded-2xl p-4 text-center">
                <p className="text-2xl text-[var(--color-primary-mid)] mb-1">42h</p>
                <p className="text-xs text-[var(--color-text-muted)]">Temps total</p>
              </div>
              <div className="bg-gradient-to-br from-[#FEF3C7]/60 to-[#E8F0FE]/60 rounded-2xl p-4 text-center">
                <p className="text-2xl text-[var(--color-primary-end)] mb-1">Rayon 3</p>
                <p className="text-xs text-[var(--color-text-muted)]">Niveau actuel</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-gradient-to-r from-[#E8F0FE]/20 to-[#E8F8F5]/20 border-t border-gray-100 flex justify-end gap-3">
          <Button
            variant="ghost"
            onClick={() => onOpenChange(false)}
            className="rounded-xl"
          >
            Annuler
          </Button>
          <Button
            onClick={handleSave}
            className="bg-gradient-to-r from-[#6F3DFF] to-[#2E8BFF] hover:from-[#5F2DEF] hover:to-[#1E7BEF] text-white rounded-xl px-6"
          >
            Enregistrer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
