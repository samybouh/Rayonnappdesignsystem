import { LayoutDashboard, FolderOpen, BookOpen, BookMarked, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/app/dashboard' },
  { icon: FolderOpen, label: 'Mes dossiers', path: '/app/folders' },
  { icon: BookOpen, label: 'Mes méthodes', path: '/app/methods' },
  { icon: BookMarked, label: 'Journal de bord', path: '/app/journal' },
];

export function LeftNav() {
  const location = useLocation();

  return (
    <motion.nav 
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-[260px] bg-gradient-to-b from-[#E8F0FE]/40 via-[#E8F8F5]/40 to-[#FEF3C7]/40 backdrop-blur-md border-r border-white/30 p-6 flex flex-col gap-1"
    >
      {/* White card container for navigation */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 shadow-sm">
        {/* Section Header */}
        <div className="px-3 py-2 mb-2">
          <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
            Navigation
          </p>
        </div>

        {/* Nav Items */}
        <div className="space-y-1">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');

            return (
              <Link
                key={item.path}
                to={item.path}
              >
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
                    ${isActive
                      ? 'bg-[#F59E0B] text-white shadow-md'
                      : 'text-[var(--color-text-secondary)] hover:bg-gray-50'
                    }
                  `}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{item.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
