import { Button } from '../ui/button';
import { Settings, Plus } from 'lucide-react';

interface CustomMethodCardProps {
  customMethod: {
    name: string;
    description: string;
  } | null;
  onExploreClick: () => void;
}

export function CustomMethodCard({ customMethod, onExploreClick }: CustomMethodCardProps) {
  return (
    <div className="rounded-3xl p-6 border border-white/50 hover:shadow-lg transition-all bg-gray-50 h-full flex flex-row items-center gap-6">
      {/* Icon + Title Section */}
      <div className="flex items-center gap-4 min-w-[280px]">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gray-600">
          <Settings className="w-7 h-7 text-white" />
        </div>
        <div>
          <h3 className="text-xl text-gray-700 mb-1 leading-tight">
            Méthode personnalisée
          </h3>
          <p className="text-sm text-gray-600 leading-snug">
            {customMethod 
              ? customMethod.name
              : 'Teste une méthode de ton choix en plus'}
          </p>
        </div>
      </div>

      {customMethod ? (
        <>
          {/* Description */}
          <div className="flex-1 min-w-0">
            <h4 className="text-sm text-gray-700 mb-2">Description de la méthode</h4>
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
              {customMethod.description}
            </p>
          </div>
          
          {/* Change Button */}
          <Button
            onClick={onExploreClick}
            variant="outline"
            className="gap-2 flex-shrink-0"
          >
            <Settings className="w-5 h-5" />
            Changer de méthode
          </Button>
        </>
      ) : (
        <>
          {/* Empty State */}
          <div className="flex items-center justify-center flex-1">
            <div className="text-center">
              <Plus className="w-16 h-16 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-500">
                Clique pour explorer plus de méthodes
              </p>
            </div>
          </div>
          
          {/* Explore Button */}
          <Button
            onClick={onExploreClick}
            className="gap-2 bg-gray-600 hover:bg-gray-700 text-white flex-shrink-0"
          >
            Explorer les méthodes
          </Button>
        </>
      )}
    </div>
  );
}
