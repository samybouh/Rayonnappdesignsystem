import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { CreditCard, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { API_URL, authApi, userApi } from "../../api/client";

type FormState = {
  firstName: string;
  lastName: string;
  birthDate: string; // yyyy-mm-dd
  grade: string;
  email: string;
  password: string;
  confirm: string;
  // champs paiement (placeholder)
  cardNumber: string;
  expiryDate: string;
  cvv: string;
};

async function register(email: string, password: string, full_name?: string) {
  // on évite de toucher à client.ts : on fait l'appel ici
  const res = await fetch(`${API_URL}/api/v1/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, full_name }),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export default function BillingTrial() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    birthDate: "",
    grade: "",
    email: "",
    password: "",
    confirm: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setFormData((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr(null);

    // vérifs de base
    if (!formData.email || !formData.password) {
      setErr("Email et mot de passe requis.");
      return;
    }
    if (formData.password !== formData.confirm) {
      setErr("Les mots de passe ne correspondent pas.");
      return;
    }
    if (!formData.birthDate || !formData.grade) {
      setErr("Merci de compléter la date de naissance et le niveau.");
      return;
    }

    setLoading(true);
    try {
      const full_name = `${formData.firstName} ${formData.lastName}`.trim() || undefined;

      // 1) Créer le compte
      await register(formData.email, formData.password, full_name);

      // 2) Se connecter → récupérer le token
      const tok = await authApi.login(formData.email, formData.password);
      localStorage.setItem("rayonn:token", tok.access_token);

      // 3) Fusionner les réponses déjà données dans l’assistant
      const draft = JSON.parse(localStorage.getItem("rayonn:onboardingDraft") || "{}");

      // 4) Finir l’onboarding côté profil
      await userApi.updateOnboarding({
        first_name: formData.firstName,
        last_name: formData.lastName,
        birth_date: formData.birthDate, // modèle backend accepte 'YYYY-MM-DD'
        grade: formData.grade,
        email: formData.email,
        onboarding_done: true,
        answers:draft, // ex: main_goal, subjects, weekly_target_min, etc.
      });

      // 5) Nettoyage et redirection
      localStorage.removeItem("rayonn:onboardingDraft");
      navigate("/app/dashboard");
    } catch (e: any) {
      console.error(e);
      setErr(
        e?.message?.includes("409") || e?.message?.toLowerCase?.().includes("exists")
          ? "Un compte existe déjà avec cet email."
          : "Impossible de créer le profil. Vérifie tes infos et réessaie."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary-start)] to-[var(--color-primary-mid)] mb-4">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Créer mon compte</h2>
            <p className="text-[var(--color-text-muted)]">Commencez votre essai gratuit de 30 jours</p>
          </div>

          {/* Info Banner */}
          <div className="bg-gradient-to-r from-[var(--color-info)]/10 to-[var(--color-info)]/5 border border-[var(--color-info)]/20 rounded-2xl p-4 mb-6 flex items-start gap-3">
            <Shield className="w-5 h-5 text-[var(--color-info)] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[var(--color-text-secondary)]">
              Tu ne seras pas débité avant la fin de la période d'essai. Tu peux annuler à tout moment.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Infos perso */}
            <div className="space-y-4">
              <h3 className="font-semibold text-[var(--color-text-primary)]">Informations personnelles</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input id="firstName" value={formData.firstName} onChange={(e) => set("firstName", e.target.value)} required className="rounded-xl bg-white"/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input id="lastName" value={formData.lastName} onChange={(e) => set("lastName", e.target.value)} required className="rounded-xl bg-white"/>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="birthDate">Date de naissance</Label>
                  <Input id="birthDate" type="date" value={formData.birthDate} onChange={(e) => set("birthDate", e.target.value)} required className="rounded-xl bg-white"/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="grade">Classe / Niveau</Label>
                  <Select value={formData.grade} onValueChange={(v) => set("grade", v)}>
                    <SelectTrigger className="rounded-xl bg-white">
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6eme">6ème</SelectItem>
                      <SelectItem value="5eme">5ème</SelectItem>
                      <SelectItem value="4eme">4ème</SelectItem>
                      <SelectItem value="3eme">3ème</SelectItem>
                      <SelectItem value="seconde">Seconde</SelectItem>
                      <SelectItem value="premiere">Première</SelectItem>
                      <SelectItem value="terminale">Terminale</SelectItem>
                      <SelectItem value="superieur">Supérieur</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={formData.email} onChange={(e) => set("email", e.target.value)} required className="rounded-xl bg-white"/>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input id="password" type="password" value={formData.password} onChange={(e) => set("password", e.target.value)} required className="rounded-xl bg-white"/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm">Confirmer</Label>
                  <Input id="confirm" type="password" value={formData.confirm} onChange={(e) => set("confirm", e.target.value)} required className="rounded-xl bg-white"/>
                </div>
              </div>
            </div>

            {/* Paiement (placeholder) */}
            <div className="space-y-4">
              <h3 className="font-semibold text-[var(--color-text-primary)]">Informations de paiement</h3>
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Numéro de carte</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" value={formData.cardNumber} onChange={(e) => set("cardNumber", e.target.value)} className="rounded-xl bg-white"/>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Date d'expiration</Label>
                  <Input id="expiryDate" placeholder="MM/AA" value={formData.expiryDate} onChange={(e) => set("expiryDate", e.target.value)} className="rounded-xl bg-white"/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" value={formData.cvv} onChange={(e) => set("cvv", e.target.value)} maxLength={3} className="rounded-xl bg-white"/>
                </div>
              </div>
            </div>

            {err && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">{err}</p>}

            <Button type="submit" disabled={loading} className="w-full h-12 bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-mid)] hover:opacity-90 rounded-xl">
              {loading ? "Création du compte…" : "Commencer mon essai gratuit"}
            </Button>
          </form>

          <p className="text-xs text-center text-[var(--color-text-muted)] mt-6">
            En créant un compte, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
          </p>
        </div>
      </div>
    </div>
  );
}