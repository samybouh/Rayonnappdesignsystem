import { motion } from 'motion/react';
import { ArrowLeft, Zap, Award, Trophy, Star, Crown, Target, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { Badge } from '../../components/ui/badge';

export default function Progression() {
  const navigate = useNavigate();

  // Mock data
  const currentLevel = 3;
  const currentXP = 450;
  const xpToNextLevel = 600;
  const totalXP = 1250;
  const progress = (currentXP / xpToNextLevel) * 100;

  const levels = [
    { 
      level: 1, 
      name: 'Rayon Naissant', 
      xpRequired: 0, 
      icon: Star, 
      unlocked: true,
      rewards: [
        { title: 'Bienvenue dans RayOnn', icon: '🌱' },
        { title: 'Badge débutant', icon: '⭐' },
      ]
    },
    { 
      level: 2, 
      name: 'Rayon Montant', 
      xpRequired: 200, 
      icon: TrendingUp, 
      unlocked: true,
      rewards: [
        { title: 'Avatar soleil débloqué', icon: '☀️' },
        { title: 'Thème clair/sombre', icon: '🌓' },
      ]
    },
    { 
      level: 3, 
      name: 'Rayon Brillant', 
      xpRequired: 600, 
      icon: Zap, 
      unlocked: true,
      rewards: [
        { title: 'Badge Étudiant assidu', icon: '🎯' },
        { title: 'Thème doré disponible', icon: '✨' },
        { title: 'Statistiques détaillées', icon: '📈' },
      ]
    },
    { 
      level: 4, 
      name: 'Rayon Éclatant', 
      xpRequired: 1200, 
      icon: Award, 
      unlocked: false,
      rewards: [
        { title: 'Accès analyses avancées', icon: '📊' },
        { title: 'Export PDF des notes', icon: '📄' },
        { title: 'Badge Expert', icon: '🏆' },
      ]
    },
    { 
      level: 5, 
      name: 'Rayon Rayonnant', 
      xpRequired: 2000, 
      icon: Trophy, 
      unlocked: false,
      rewards: [
        { title: 'Badge Maître du temps', icon: '⏰' },
        { title: 'Mode focus avancé', icon: '🎧' },
        { title: 'Objectifs personnalisés', icon: '🎯' },
      ]
    },
    { 
      level: 6, 
      name: 'Rayon Solaire', 
      xpRequired: 3000, 
      icon: Crown, 
      unlocked: false,
      rewards: [
        { title: 'Rayon personnalisable', icon: '🎨' },
        { title: 'Badge Maître RayOnn', icon: '👑' },
        { title: 'Fonctions exclusives', icon: '✨' },
        { title: 'Certificat de réussite', icon: '🎓' },
      ]
    },
  ];

  const achievements = [
    { name: '5 jours consécutifs', date: 'Il y a 2 jours', icon: '🔥' },
    { name: '10 sessions complétées', date: 'Il y a 5 jours', icon: '✅' },
    { name: 'Premier cours ajouté', date: 'Il y a 1 semaine', icon: '📚' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-yellow-50 overflow-auto">
      {/* Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white/70 backdrop-blur-sm border-b border-white/50 sticky top-0 z-10"
      >
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
              <Zap className="w-6 h-6 text-white fill-current" />
            </div>
            <div>
              <h1 className="font-semibold text-gray-900">Ma Progression</h1>
              <p className="text-xs text-gray-500">Niveau {currentLevel} · {totalXP} XP total</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-[1200px] mx-auto p-6 space-y-6">
        {/* Current Level Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="relative bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 rounded-3xl p-8 text-white shadow-2xl overflow-hidden"
        >
          {/* Decorative sun rays */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-1 h-32 bg-white origin-bottom"
                  style={{
                    transform: `rotate(${i * 30}deg) translateY(-50%)`,
                  }}
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-8 h-8 fill-current" />
                  <h2 className="text-3xl font-bold">Rayon {currentLevel}</h2>
                </div>
                <p className="text-white/90 text-sm">Rayon Brillant</p>
              </div>
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                En progression
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{currentXP} XP</span>
                <span className="font-medium">{xpToNextLevel} XP</span>
              </div>
              <div className="h-4 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  className="h-full bg-white rounded-full shadow-lg"
                />
              </div>
              <p className="text-white/90 text-sm text-center">
                Plus que {xpToNextLevel - currentXP} XP pour atteindre le Rayon {currentLevel + 1} !
              </p>
            </div>
          </div>
        </motion.div>

        {/* Levels & Rewards Timeline */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-white/50"
        >
          <div className="flex items-center gap-2 mb-6">
            <Target className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-gray-900">Niveaux et récompenses</h3>
          </div>

          <div className="space-y-6">
            {levels.map((level, index) => {
              const LevelIcon = level.icon;
              const isActive = level.level === currentLevel;
              
              return (
                <motion.div
                  key={level.level}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="space-y-3"
                >
                  {/* Level Header */}
                  <div className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                    level.unlocked 
                      ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200' 
                      : 'bg-gray-50 border border-gray-200 opacity-60'
                  } ${isActive ? 'ring-2 ring-yellow-400 shadow-lg' : ''}`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      level.unlocked 
                        ? 'bg-gradient-to-br from-yellow-400 to-orange-500' 
                        : 'bg-gray-300'
                    }`}>
                      <LevelIcon className={`w-6 h-6 ${
                        level.unlocked ? 'text-white' : 'text-gray-500'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900">Rayon {level.level}</p>
                        {isActive && (
                          <Badge className="bg-yellow-100 text-yellow-700 text-xs">Actuel</Badge>
                        )}
                        {level.unlocked && !isActive && (
                          <Badge className="bg-green-100 text-green-700 text-xs">✓ Débloqué</Badge>
                        )}
                      </div>
                      <p className="text-xs text-gray-600">{level.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">{level.xpRequired} XP</p>
                    </div>
                  </div>

                  {/* Level Rewards */}
                  <div className="pl-8 space-y-2">
                    {level.rewards.map((reward, rewardIndex) => (
                      <motion.div
                        key={rewardIndex}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.35 + index * 0.05 + rewardIndex * 0.02 }}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                          level.unlocked 
                            ? 'bg-white/60 border border-green-200' 
                            : 'bg-white/30 border border-gray-200'
                        }`}
                      >
                        <div className="text-xl">{reward.icon}</div>
                        <div className="flex-1">
                          <p className={`text-sm ${
                            level.unlocked ? 'text-gray-900 font-medium' : 'text-gray-500'
                          }`}>
                            {reward.title}
                          </p>
                        </div>
                        {level.unlocked && (
                          <Badge className="bg-green-100 text-green-700 text-xs">✓</Badge>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Recent Achievements */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-white/50"
        >
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-gray-900">Succès récents</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-center"
              >
                <div className="text-3xl">{achievement.icon}</div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{achievement.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
