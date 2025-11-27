import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Play, Pause, RotateCcw, Volume2, Sparkles, X } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface SessionHeaderProps {
  isRunning: boolean;
  timeLeft: number;
  totalTime: number;
  onToggle: () => void;
  onReset: () => void;
  ambiance: string;
  onAmbianceChange: (value: string) => void;
  onQuit: () => void;
}

export function SessionHeader({ 
  isRunning, 
  timeLeft, 
  totalTime,
  onToggle, 
  onReset,
  ambiance,
  onAmbianceChange,
  onQuit
}: SessionHeaderProps) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const [hearts, setHearts] = useState(3);
  const [xp, setXp] = useState(245);

  return (
    <div className="bg-gradient-to-r from-purple-200/85 via-purple-100/85 to-purple-50/85 backdrop-blur-xl border-b-2 border-purple-300/60 px-4 py-3 shadow-md shadow-purple-200/50">
      <div className="flex items-center justify-between gap-4 max-w-full mx-auto">
        {/* Left - Hearts and Timer */}
        <div className="flex items-center gap-3">
          {/* Hearts */}
          <div className="hidden sm:flex items-center gap-1">
            {[...Array(hearts)].map((_, i) => (
              <div key={i} className="w-6 h-6 flex items-center justify-center">
                <span className="text-xl">❤️</span>
              </div>
            ))}
          </div>

          {/* Timer */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl px-4 py-2 border border-purple-100/50">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F3DFF] to-[#2E8BFF] text-2xl sm:text-3xl font-bold tabular-nums">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <Button
              onClick={onToggle}
              size="sm"
              className={`${isRunning ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600' : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600'} text-white px-3 sm:px-4 shadow-sm transition-all`}
            >
              {isRunning ? (
                <>
                  <Pause className="w-4 h-4 sm:mr-1.5" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 sm:mr-1.5" />
                  <span className="hidden sm:inline">Play</span>
                </>
              )}
            </Button>

            <Button
              onClick={onReset}
              size="sm"
              variant="outline"
              className="bg-white/60 hover:bg-white border-purple-200 text-purple-700 hover:text-purple-900 w-9 h-9 p-0"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Right - Ambiance, XP, Quit */}
        <div className="flex items-center gap-2">
          {/* Ambiance Selector - Hidden on small screens */}
          <div className="hidden lg:block">
            <Select value={ambiance} onValueChange={onAmbianceChange}>
              <SelectTrigger className="w-[140px] bg-white/60 border-purple-200 text-purple-900 text-sm hover:bg-white transition-colors">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-3.5 h-3.5" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="focus-deep">🎵 Focus Deep</SelectItem>
                <SelectItem value="nature">🌿 Nature Sounds</SelectItem>
                <SelectItem value="classical">🎻 Classical</SelectItem>
                <SelectItem value="lofi">🎧 Lo-fi Beats</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Volume Icon - Visible on mobile */}
          <Button
            size="sm"
            variant="outline"
            className="lg:hidden bg-white/60 hover:bg-white border-purple-200 text-purple-700 w-9 h-9 p-0"
          >
            <Volume2 className="w-4 h-4" />
          </Button>

          {/* XP Badge */}
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full px-3 py-1.5 border border-amber-400/50 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-semibold text-sm">{xp}</span>
          </div>

          {/* Quit Button */}
          <Button
            onClick={onQuit}
            size="sm"
            variant="outline"
            className="bg-white/60 hover:bg-red-50 border-red-200 text-red-600 hover:text-red-700 px-2 sm:px-3 transition-all"
          >
            <X className="w-4 h-4 sm:mr-1.5" />
            <span className="hidden sm:inline">Quit</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
