import { RayonBadge } from '../blocks/RayonBadge';
import { Button } from '../ui/button';
import { motion } from 'motion/react';
import { NotificationsPopover } from '../blocks/NotificationsPopover';
import { SettingsPopover } from '../blocks/SettingsPopover';

export function AppHeader() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="h-14 bg-gradient-to-r from-[#E8F0FE]/40 via-[#E8F8F5]/40 to-[#FEF3C7]/40 backdrop-blur-md border-b border-white/30 px-6 flex items-center justify-between"
    >
      {/* Title with Icon */}
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#6F3DFF]" />
        <h1 className="font-semibold text-[var(--color-primary-start)]">
          Mon Quotidien
        </h1>
      </div>

      {/* Right Actions */}
      <div className="bg-gradient-to-br from-[#D1FAE5]/60 to-[#FEF3C7]/60 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-sm">
        <div className="flex items-center gap-3">
          {/* Rayon Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RayonBadge level={3} xp={450} xpToNext={500} compact />
          </motion.div>
          
          {/* Notifications */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <NotificationsPopover />
          </motion.div>

          {/* Settings */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <SettingsPopover />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
