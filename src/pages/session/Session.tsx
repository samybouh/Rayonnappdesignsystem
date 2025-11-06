import { useState, useEffect } from 'react';
import { Button } from '../../components/ui/button';
import { Play, Pause, RotateCcw, Settings, Volume2 } from 'lucide-react';
import { Slider } from '../../components/ui/slider';
import { ChatBubble } from '../../components/blocks/ChatBubble';

export default function Session() {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [volume, setVolume] = useState([50]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const toggleTimer = () => setIsRunning(!isRunning);
  
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
  };

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Timer Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
                Session de travail
              </h1>
              <p className="text-[var(--color-text-muted)]">
                Concentre-toi et progresse à ton rythme
              </p>
            </div>

            {/* Timer Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-white/50 text-center">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-[var(--color-primary-start)]/10 to-[var(--color-primary-mid)]/10 mb-6">
                  <div className="text-6xl font-bold bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-mid)] bg-clip-text text-transparent">
                    {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                  </div>
                </div>
                
                <p className="text-[var(--color-text-muted)]">
                  Session Pomodoro • 25 min
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={resetTimer}
                  className="rounded-full w-14 h-14 p-0"
                >
                  <RotateCcw className="w-5 h-5" />
                </Button>
                
                <Button
                  size="lg"
                  onClick={toggleTimer}
                  className="rounded-full w-20 h-20 p-0 bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-mid)] hover:opacity-90"
                >
                  {isRunning ? (
                    <Pause className="w-8 h-8" />
                  ) : (
                    <Play className="w-8 h-8 ml-1" />
                  )}
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full w-14 h-14 p-0"
                >
                  <Settings className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Ambiance Control */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <div className="flex items-center gap-4">
                <Volume2 className="w-5 h-5 text-[var(--color-text-muted)]" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[var(--color-text-primary)]">
                      Ambiance sonore
                    </span>
                    <span className="text-sm text-[var(--color-text-muted)]">
                      {volume[0]}%
                    </span>
                  </div>
                  <Slider
                    value={volume}
                    onValueChange={setVolume}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                {['Pluie', 'Café', 'Forêt', 'Silence'].map((ambiance) => (
                  <Button
                    key={ambiance}
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                  >
                    {ambiance}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Ray Chat */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">
                Ray Assistant
              </h3>
              
              <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
                <ChatBubble
                  message="Salut ! Prêt pour cette session ? 💪"
                  sender="ray"
                />
                <ChatBubble
                  message="Oui, je vais réviser les maths !"
                  sender="user"
                />
                <ChatBubble
                  message="Super ! N'oublie pas de faire des pauses régulières. Je suis là si tu as besoin d'aide ! 🌟"
                  sender="ray"
                />
              </div>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Écris un message..."
                  className="flex-1 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-mid)]"
                />
                <Button size="sm" className="bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-mid)]">
                  →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
