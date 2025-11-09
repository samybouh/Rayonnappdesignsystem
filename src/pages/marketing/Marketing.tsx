import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import svgPaths from '../../imports/svg-8r60mkjuoi';

// Decorative floating bubbles
function FloatingBubbles() {
  const bubbles = [
    { size: 64.41, left: 1386.81, top: 715.1, opacity: 0.186, width: 68.315 },
    { size: 63.932, left: 1369.38, top: 400.56, opacity: 0.274, width: 90.676 },
    { size: 105.578, left: 1056.7, top: 108.24, opacity: 0.297, width: 72.95 },
    { size: 64.505, left: 1391.57, top: 336.9, opacity: 0.269, width: 69.983 },
    { size: 48.049, left: 1589.45, top: 768.98, opacity: 0.1, width: 68.773 },
    { size: 85.526, left: 752.74, top: 957.3, opacity: 0.212, width: 90.064 },
    { size: 84.195, left: 306.38, top: 127.04, opacity: 0.265, width: 53.605 },
    { size: 64.773, left: 1785.16, top: 921.92, opacity: 0.123, width: 97.514 },
    { size: 72.048, left: 1239.28, top: 745.56, opacity: 0.127, width: 88.75 },
    { size: 51.173, left: 2288.83, top: 403.56, opacity: 0.245, width: 50.372 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: bubble.opacity, 
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 3 + index * 0.5,
            repeat: Infinity,
            delay: index * 0.2,
          }}
          className="absolute bg-white/10 rounded-full"
          style={{
            height: `${bubble.size}px`,
            left: `${(bubble.left / 2304) * 100}%`,
            top: `${(bubble.top / 993.6) * 100}%`,
            width: `${bubble.width}px`,
          }}
        />
      ))}
    </div>
  );
}

// Feature Card Icon Components
function AIIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <g>
        <path d="M13.9969 20.9953V5.83203" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33281" />
        <path d={svgPaths.p9836080} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33281" />
        <path d={svgPaths.p56d6720} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33281" />
        <path d={svgPaths.p31a3b5c0} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33281" />
        <path d={svgPaths.p2a8a1100} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33281" />
        <path d={svgPaths.p2e282b60} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33281" />
        <path d={svgPaths.p65b6900} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33281" />
        <path d={svgPaths.p659bd60} stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33281" />
      </g>
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <g>
        <path d={svgPaths.p1a395600} stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33281" />
        <path d={svgPaths.p392d2600} stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33281" />
        <path d={svgPaths.p186a980} stroke="#9810FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33281" />
      </g>
    </svg>
  );
}

function ProgressIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
      <g>
        <path d={svgPaths.p15a1280} stroke="#D08700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33281" />
        <path d={svgPaths.p3b2fffc0} stroke="#D08700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33281" />
        <path d={svgPaths.p49bab00} stroke="#D08700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33281" />
        <path d="M4.66562 25.6609H23.3281" stroke="#D08700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33281" />
        <path d={svgPaths.p14f0f780} stroke="#D08700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33281" />
        <path d={svgPaths.p36e4ae03} stroke="#D08700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33281" />
      </g>
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg className="w-9 h-9" fill="none" viewBox="0 0 35 35">
      <g>
        <path d={svgPaths.p18346e80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91562" />
        <path d="M29.1562 2.91562V8.74687" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91562" />
        <path d="M32.0719 5.83125H26.2406" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91562" />
        <path d={svgPaths.p39d11800} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91562" />
      </g>
    </svg>
  );
}

function SmallSparkleIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
      <g>
        <path d={svgPaths.p8e18800} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16562" />
        <path d="M11.6562 1.16562V3.49687" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16562" />
        <path d="M12.8219 2.33125H10.4906" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16562" />
        <path d={svgPaths.p1357f780} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16562" />
      </g>
    </svg>
  );
}

export default function Marketing() {
  const features = [
    {
      icon: <AIIcon />,
      title: 'IA Personnalisée',
      description: "Ray s'adapte à ton style d'apprentissage",
      bgColor: 'bg-[#E8F4FF]',
      borderColor: 'border-[#BEDBFF]',
      titleColor: 'text-[#193CB8]',
      descColor: 'text-[#1447E6]',
    },
    {
      icon: <TargetIcon />,
      title: 'Objectifs Clairs',
      description: 'Méthodes basées sur la science',
      bgColor: 'bg-[#F5E8FF]',
      borderColor: 'border-[#E9D4FF]',
      titleColor: 'text-[#6E11B0]',
      descColor: 'text-[#8200DB]',
    },
    {
      icon: <ProgressIcon />,
      title: 'Progression',
      description: 'Gamification motivante',
      bgColor: 'bg-[#FFF8E0]',
      borderColor: 'border-[#FFF085]',
      titleColor: 'text-[#894B00]',
      descColor: 'text-[#A65F00]',
    },
  ];

  // Radial gradient background matching Figma exactly
  const backgroundStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 2304 993' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'%3E%3Crect x='0' y='0' height='100%25' width='100%25' fill='url(%23grad)' opacity='1'/%3E%3Cdefs%3E%3CradialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0 -250.76 -250.91 0 0 0)'%3E%3Cstop stop-color='rgba(247,250,255,1)' offset='0'/%3E%3Cstop stop-color='rgba(235,251,245,1)' offset='1'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={backgroundStyle}>
      <FloatingBubbles />

      {/* Header with "Créer mon compte" link */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-white/20 backdrop-blur-sm border-b border-white/30 px-5 py-4"
      >
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/30 rounded-full p-2 hover:bg-white/40 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
              <path d="M8.74219 10.4906L5.24531 6.99375L8.74219 3.49687" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16562" />
            </svg>
          </motion.button>
          
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#AD46FF]" />
            <Link to="/onboarding">
              <motion.h1 
                whileHover={{ scale: 1.02 }}
                className="font-bold text-[#9810FA] text-[17.5px] tracking-tight cursor-pointer"
              >
                Créer mon compte
              </motion.h1>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Main Card */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-72px)] px-4 py-12">
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/95 backdrop-blur-sm rounded-[56px] shadow-[0px_32px_64px_0px_rgba(0,0,0,0.12)] p-12 max-w-[784px] w-full"
        >
          {/* Ray Icon */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
            className="flex justify-center mb-8"
          >
            <div className="w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#9810FA] to-[#155DFC] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] flex items-center justify-center">
              <SparkleIcon />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center font-black text-[#1E2939] text-[42px] leading-[42px] tracking-[-0.84px] mb-6"
          >
            Optimise ton apprentissage
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center text-[#364153] text-[21px] leading-[34.125px] mb-12 max-w-[648px] mx-auto"
          >
            Rejoins des milliers d'étudiants qui révolutionnent leur façon d'étudier avec Ray !
          </motion.p>

          {/* Feature Cards */}
          <div className="grid grid-cols-3 gap-5 mb-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`${feature.bgColor} rounded-[14px] border ${feature.borderColor} p-5 text-center cursor-pointer transition-all`}
              >
                <div className="flex justify-center mb-3">
                  {feature.icon}
                </div>
                <h3 className={`${feature.titleColor} font-bold text-[19.25px] leading-[24.5px] mb-2`}>
                  {feature.title}
                </h3>
                <p className={`${feature.descColor} text-[12.25px] leading-[17.5px]`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex gap-5 justify-center mb-7"
          >
            <Link to="/onboarding">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#9810FA] to-[#155DFC] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] px-6 py-2 flex items-center gap-2.5 text-white font-bold text-[17.5px]"
              >
                <SmallSparkleIcon />
                Créer mon compte
              </motion.button>
            </Link>

            <Link to="/auth/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 rounded-[14px] border border-[#D1D5DC] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] px-7 py-2 text-[#1E2939] font-semibold text-[17.5px]"
              >
                J'ai déjà un compte
              </motion.button>
            </Link>
          </motion.div>

          {/* Footer Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="text-center text-[#6A7282] text-[12.25px] leading-[17.5px]"
          >
            🔒 Tes données sont sécurisées • ✨ Essai gratuit sans engagement
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
