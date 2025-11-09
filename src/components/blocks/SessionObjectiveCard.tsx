import { Target } from 'lucide-react';

interface SessionObjectiveCardProps {
  objective: string;
}

export function SessionObjectiveCard({ objective }: SessionObjectiveCardProps) {
  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 border border-purple-100/50 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-sm">
          <Target className="w-4 h-4 text-white" />
        </div>
        <h3 className="font-semibold text-purple-900 text-sm">Objectif</h3>
      </div>
      
      <div className="bg-gradient-to-br from-purple-50/80 to-blue-50/80 rounded-xl p-3 min-h-[80px] border border-purple-100/30">
        {objective ? (
          <p className="text-purple-800 text-xs sm:text-sm leading-relaxed break-words">{objective}</p>
        ) : (
          <p className="text-purple-400 text-xs sm:text-sm italic">Aucun objectif défini</p>
        )}
      </div>
    </div>
  );
}
