import { Button } from '../ui/button';
import { Eye, Star } from 'lucide-react';

interface MethodCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  suggestedPercent: number;
  description: string;
  bgColor: string;
  iconBgColor: string;
  iconColor: string;
  buttonColor: string;
  onClick?: () => void;
  isLocked?: boolean;
}

export function MethodCard({
  icon,
  title,
  subtitle,
  suggestedPercent,
  description,
  bgColor,
  iconBgColor,
  iconColor,
  buttonColor,
  onClick,
  isLocked = false,
}: MethodCardProps) {
  return (
    <div
      className="rounded-3xl p-6 border border-white/50 hover:shadow-lg transition-all h-full flex flex-col"
      style={{ backgroundColor: bgColor }}
    >
      {/* Icon + Title */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: iconBgColor }}
        >
          <div style={{ color: iconColor }} className="w-7 h-7">
            {icon}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl mb-1 leading-tight" style={{ color: iconColor }}>
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-snug line-clamp-2">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Suggested for you */}
      <div className="flex items-center gap-1.5 mb-4">
        <span className="text-sm text-gray-600">Suggérée pour toi</span>
        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <span className="text-sm">{suggestedPercent}%</span>
      </div>

      {/* Description */}
      <div className="mb-5 flex-1">
        <h4 className="text-sm text-gray-700 mb-2">Description de la méthode</h4>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
          {description}
        </p>
      </div>

      {/* CTA Button */}
      <Button
        onClick={onClick}
        disabled={isLocked}
        className="w-full gap-2 text-white hover:opacity-90 transition-opacity"
        style={{ backgroundColor: buttonColor }}
      >
        <Eye className="w-5 h-5" />
        Découvrir
      </Button>
    </div>
  );
}
