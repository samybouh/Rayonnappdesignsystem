import { Button } from '../../components/ui/button';
import { Sparkles, Target, TrendingUp, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Marketing() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-white/50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-mid)] bg-clip-text text-transparent">
            RayOnn
          </h1>
          <Link to="/auth/login">
            <Button variant="ghost">
              J'ai déjà un compte
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[var(--color-text-primary)] mb-6">
              Optimise ton apprentissage
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
              L'outil intelligent qui t'accompagne dans ta réussite scolaire grâce à l'IA, 
              des objectifs clairs et un suivi personnalisé.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link to="/onboarding">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-mid)] hover:opacity-90 text-lg px-8"
                >
                  Créer mon compte
                </Button>
              </Link>
              <Link to="/auth/login">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Se connecter
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-[var(--color-text-muted)]">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[var(--color-success)]" />
                <span>Données sécurisées</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[var(--color-info)]" />
                <span>14 jours d'essai gratuit</span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary-start)]/20 to-[var(--color-primary-start)]/10 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-[var(--color-primary-start)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                IA personnalisée
              </h3>
              <p className="text-[var(--color-text-muted)]">
                Ray, ton assistant IA, t'accompagne et s'adapte à ton rythme d'apprentissage 
                pour te proposer des conseils sur mesure.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary-mid)]/20 to-[var(--color-primary-mid)]/10 flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-[var(--color-primary-mid)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Objectifs clairs
              </h3>
              <p className="text-[var(--color-text-muted)]">
                Définis tes objectifs, organise tes sessions de travail et suis ta progression 
                grâce à des outils simples et intuitifs.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary-end)]/20 to-[var(--color-primary-end)]/10 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-[var(--color-primary-end)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Progression
              </h3>
              <p className="text-[var(--color-text-muted)]">
                Visualise tes progrès, gagne de l'XP et débloque des niveaux pour 
                rester motivé dans ton parcours d'apprentissage.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-white/50 px-6 py-8">
        <div className="max-w-6xl mx-auto text-center text-sm text-[var(--color-text-muted)]">
          <p>© 2025 RayOnn. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
