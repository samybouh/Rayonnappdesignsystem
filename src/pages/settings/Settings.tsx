import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Switch } from '../../components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { User, CreditCard, Bell, Palette, Shield } from 'lucide-react';

export default function Settings() {
  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
            Paramètres
          </h1>
          <p className="text-[var(--color-text-muted)]">
            Personnalise ton expérience RayOnn
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-white/80 backdrop-blur-sm p-1 rounded-2xl">
            <TabsTrigger value="profile" className="rounded-xl">
              <User className="w-4 h-4 mr-2" />
              Profil
            </TabsTrigger>
            <TabsTrigger value="billing" className="rounded-xl">
              <CreditCard className="w-4 h-4 mr-2" />
              Facturation
            </TabsTrigger>
            <TabsTrigger value="notifications" className="rounded-xl">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="appearance" className="rounded-xl">
              <Palette className="w-4 h-4 mr-2" />
              Apparence
            </TabsTrigger>
            <TabsTrigger value="security" className="rounded-xl">
              <Shield className="w-4 h-4 mr-2" />
              Sécurité
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="mt-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 space-y-6">
              <div>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">
                  Informations personnelles
                </h3>
                
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input id="firstName" defaultValue="Alex" className="rounded-xl bg-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom</Label>
                      <Input id="lastName" defaultValue="Martin" className="rounded-xl bg-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="alex.martin@email.com" className="rounded-xl bg-white" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="grade">Classe / Niveau</Label>
                    <Select defaultValue="terminale">
                      <SelectTrigger className="rounded-xl bg-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="seconde">Seconde</SelectItem>
                        <SelectItem value="premiere">Première</SelectItem>
                        <SelectItem value="terminale">Terminale</SelectItem>
                        <SelectItem value="superieur">Supérieur</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-mid)] hover:opacity-90">
                Enregistrer les modifications
              </Button>
            </div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="mt-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Rappels de session</Label>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Reçois des notifications pour tes sessions planifiées
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Missions quotidiennes</Label>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Sois notifié de tes nouvelles missions
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Progression et XP</Label>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Reçois des notifications pour tes accomplissements
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Conseils de Ray</Label>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Ray peut t'envoyer des conseils personnalisés
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Newsletter hebdomadaire</Label>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Résumé de ta semaine et conseils d'apprentissage
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Appearance Tab */}
          <TabsContent value="appearance" className="mt-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="theme">Thème</Label>
                  <Select defaultValue="light">
                    <SelectTrigger id="theme" className="rounded-xl bg-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Clair</SelectItem>
                      <SelectItem value="dark">Sombre</SelectItem>
                      <SelectItem value="auto">Automatique</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Animations réduites</Label>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Diminue les animations pour une meilleure performance
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="mt-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 space-y-6">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[var(--color-success)]/10 to-[var(--color-success)]/5 border border-[var(--color-success)]/20 rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-[var(--color-text-primary)]">Abonnement Premium</h4>
                      <p className="text-sm text-[var(--color-text-muted)]">Période d'essai jusqu'au 20 nov. 2025</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[var(--color-text-primary)]">9,99€</div>
                      <div className="text-sm text-[var(--color-text-muted)]">/mois</div>
                    </div>
                  </div>
                </div>

                <Button variant="outline">
                  Gérer mon abonnement
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="mt-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Mot de passe actuel</Label>
                  <Input id="currentPassword" type="password" className="rounded-xl bg-white" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">Nouveau mot de passe</Label>
                  <Input id="newPassword" type="password" className="rounded-xl bg-white" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                  <Input id="confirmPassword" type="password" className="rounded-xl bg-white" />
                </div>

                <Button className="bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-mid)] hover:opacity-90">
                  Changer le mot de passe
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
