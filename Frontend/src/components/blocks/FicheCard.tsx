import { FileText, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

export interface Fiche {
  id: string;
  name: string;
  size: string;
  lastModified: string;
  folder: string;
}

interface FicheCardProps {
  fiche: Fiche;
  onOpen: (fiche: Fiche) => void;
}

export function FicheCard({ fiche, onOpen }: FicheCardProps) {
  return (
    <div className="bg-white/70 backdrop-blur-xl rounded-xl p-3 border border-purple-100/50 hover:border-purple-300/50 hover:shadow-md transition-all group">
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center flex-shrink-0 border border-purple-200/30">
          <FileText className="w-5 h-5 text-purple-600" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-purple-900 text-sm truncate">{fiche.name}</h4>
          <p className="text-xs text-purple-500 mt-0.5">
            {fiche.size} • {fiche.lastModified}
          </p>
        </div>

        {/* Button */}
        <Button
          onClick={() => onOpen(fiche)}
          size="sm"
          className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white opacity-0 group-hover:opacity-100 transition-opacity px-3 shadow-sm"
        >
          <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
          Ouvrir
        </Button>
      </div>
    </div>
  );
}
