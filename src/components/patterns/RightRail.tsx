import { useState } from 'react';
import { Sparkles, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'motion/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { TodoList } from '../blocks/TodoList';
import { MissionDialog } from '../blocks/MissionDialog';

export function RightRail() {
  const [isTodoOpen, setIsTodoOpen] = useState(false);
  const [isMissionOpen, setIsMissionOpen] = useState(false);
  
  const todayTasks = [
    { id: '1', label: 'Salut! Comment va ta journée ?', icon: '👋' },
  ];

  return (
    <>
    <motion.aside 
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-[280px] pt-6 px-4 pb-4 flex flex-col gap-4"
    >
      {/* Ray Assistant Card */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm"
      >
        {/* Ray Avatar */}
        <motion.div 
          className="flex items-center gap-3 mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FCD34D] to-[#F59E0B] flex items-center justify-center shadow-md">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-[var(--color-text-primary)]">Ray</h3>
            <p className="text-xs text-[var(--color-text-muted)]">Assistant</p>
          </div>
        </motion.div>
        
        {/* Message */}
        <p className="text-sm text-[var(--color-text-secondary)] mb-4">
          {todayTasks[0].label}
        </p>
        
        {/* Button */}
        <Button 
          className="w-full bg-gradient-to-r from-[#6F3DFF] to-[#2E8BFF] hover:opacity-90 text-white shadow-sm flex items-center gap-2"
          size="sm"
        >
          <MessageSquare className="w-4 h-4" />
          Discuter avec Ray
        </Button>
      </motion.div>

      {/* Daily Objective Card */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsTodoOpen(true)}
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
      >
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-[var(--color-text-primary)] text-sm">
            Objectif quotidien
          </h4>
          <span className="text-lg">🎯</span>
        </div>
        
        {/* Progress */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-bold text-[var(--color-primary-mid)]">2/5</span>
            <span className="text-xs text-[var(--color-text-muted)]">tâches</span>
          </div>
          
          {/* Progress Bar */}
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '40%' }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#6F3DFF] to-[#2E8BFF] rounded-full"
            />
          </div>
        </div>

        {/* Tasks */}
        <div className="space-y-2">
          <motion.div 
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]"
          >
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>✅ Révision maths</span>
          </motion.div>
          <motion.div 
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]"
          >
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>✅ Chapitre phys géné</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Session Card */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsMissionOpen(true)}
        className="bg-gradient-to-br from-[#FCA5A5] to-[#FCA5A5]/50 rounded-2xl p-5 shadow-sm text-white cursor-pointer hover:shadow-md transition-shadow"
      >
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="font-semibold text-sm mb-1">⏰ Session</h4>
            <p className="text-xs opacity-90">
              Fais 3 exercices de maths en moins de 30 minutes
            </p>
          </div>
        </div>

        <div className="text-xs opacity-80 mt-2">
          + 25 XP
        </div>
      </motion.div>
    </motion.aside>

    {/* Todo List Dialog */}
    <Dialog open={isTodoOpen} onOpenChange={setIsTodoOpen}>
      <DialogContent className="!max-w-[1400px] sm:!max-w-[1400px] w-[95vw] max-h-[90vh] p-0 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 border-2 border-white/50 shadow-2xl" aria-describedby={undefined}>
        <DialogHeader className="p-8 pb-6 border-b border-purple-100/50">
          <DialogTitle className="text-3xl font-semibold text-purple-900 flex items-center gap-4">
            <span className="text-4xl">🎯</span>
            Objectif quotidien
          </DialogTitle>
        </DialogHeader>
        <div className="overflow-y-auto max-h-[calc(90vh-120px)] px-8 py-6">
          <TodoList />
        </div>
      </DialogContent>
    </Dialog>

    {/* Mission Dialog */}
    <MissionDialog open={isMissionOpen} onOpenChange={setIsMissionOpen} />
    </>
  );
}
