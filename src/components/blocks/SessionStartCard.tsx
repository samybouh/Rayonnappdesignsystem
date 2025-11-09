import { useState } from 'react';
import { Sparkles, Settings } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'motion/react';
import { SessionConfigDialog, SessionConfig } from './SessionConfigDialog';
import { useNavigate } from 'react-router-dom';

export function SessionStartCard() {
  const [configOpen, setConfigOpen] = useState(false);
  const navigate = useNavigate();

  const handleStartSession = (config: SessionConfig) => {
    sessionStorage.setItem('sessionConfig', JSON.stringify(config));
    navigate('/session');
  };

  return (
    <>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-white/50 flex flex-col items-center justify-center"
        style={{ minHeight: '300px' }}
      >
        {/* Ray Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ rotate: 360 }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FCD34D] to-[#F59E0B] flex items-center justify-center shadow-lg mb-6"
        >
          <Sparkles className="w-8 h-8 text-white" />
        </motion.div>

        {/* Title */}
        <motion.h2 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="font-semibold text-[var(--color-text-primary)] mb-2 text-center"
        >
          Commencer ma session de travail
        </motion.h2>

        {/* Subtitle */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="flex items-center gap-2 mb-6 text-xs text-[var(--color-text-muted)]"
        >
          <Settings className="w-3.5 h-3.5" />
          <span>Configuration personnalisée</span>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            onClick={() => setConfigOpen(true)}
            className="bg-gradient-to-r from-[#6F3DFF] to-[#2E8BFF] hover:opacity-90 text-white shadow-md px-8"
            size="lg"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Configurer
          </Button>
        </motion.div>
      </motion.div>

      <SessionConfigDialog
        open={configOpen}
        onOpenChange={setConfigOpen}
        onStartSession={handleStartSession}
      />
    </>
  );
}
