// Frontend/src/pages/auth/Login.tsx
import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { UserCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { authApi } from '../../api/client'; 

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { access_token } = await authApi.login(email, password); 
      localStorage.setItem('rayonn:token', access_token);
      navigate('/app/dashboard'); 
    } catch (err: any) {
      setError('Email ou mot de passe invalide');
    } finally {
      setLoading(false);
    }
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

          <h2 className="text-2xl font-semibold text-center text-[var(--color-text-primary)] mb-2">
            Connexion
          </h2>
          <p className="text-center text-[var(--color-text-muted)] mb-4">
            Retrouve ton espace personnalisé
          </p>

          {error && (
            <p className="mb-4 text-sm text-red-600 text-center">{error}</p>
          )}

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
              disabled={loading}
              className="w-full h-12 bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-mid)] hover:opacity-90 rounded-xl"
            >
              {loading ? 'Connexion…' : 'Se connecter'}
            </Button>
          </form>

          <div className="text-center mt-6 space-y-3">
            <div>
              <Link to="/auth/forgot-password" className="text-sm text-[var(--color-primary-mid)] hover:underline">
                Mot de passe oublié ?
              </Link>
            </div>
            <div className="text-sm text-[var(--color-text-muted)]">
              Pas encore de compte ?{' '}
              <Link to="/onboarding" className="text-[var(--color-primary-mid)] hover:underline font-medium">
                Créer un compte
              </Link>
            </div>
            <div className="pt-4">
              <Link to="/" className="text-sm text-[var(--color-text-muted)] hover:underline">
                ← Retour
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
