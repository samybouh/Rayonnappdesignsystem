import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { UserCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app would authenticate
    navigate('/app/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary-start)] to-[var(--color-primary-mid)] flex items-center justify-center">
              <UserCircle className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-center text-[var(--color-text-primary)] mb-2">
            Connexion
          </h2>
          <p className="text-center text-[var(--color-text-muted)] mb-8">
            Retrouve ton espace personnalisé
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="nom@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 rounded-xl bg-white border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 rounded-xl bg-white border-gray-200"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-mid)] hover:opacity-90 rounded-xl"
            >
              Se connecter
            </Button>
          </form>

          {/* Links */}
          <div className="text-center mt-6 space-y-3">
            <div>
              <Link 
                to="/auth/forgot-password" 
                className="text-sm text-[var(--color-primary-mid)] hover:underline"
              >
                Mot de passe oublié ?
              </Link>
            </div>
            
            <div className="text-sm text-[var(--color-text-muted)]">
              Pas encore de compte ?{' '}
              <Link 
                to="/onboarding" 
                className="text-[var(--color-primary-mid)] hover:underline font-medium"
              >
                Créer un compte
              </Link>
            </div>

            <div className="pt-4">
              <Link 
                to="/" 
                className="text-sm text-[var(--color-text-muted)] hover:underline"
              >
                ← Retour
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
