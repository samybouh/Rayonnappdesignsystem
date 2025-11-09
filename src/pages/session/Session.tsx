import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SessionHeader } from '../../components/blocks/SessionHeader';
import { SessionObjectiveCard } from '../../components/blocks/SessionObjectiveCard';
import { SessionRayChat } from '../../components/blocks/SessionRayChat';
import { SessionWorkspace } from '../../components/blocks/SessionWorkspace';
import { HelpCircle } from 'lucide-react';

interface SessionConfig {
  objective: string;
  duration: number;
  ambiance: string;
}

export default function Session() {
  const navigate = useNavigate();
  const [config, setConfig] = useState<SessionConfig | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [totalTime, setTotalTime] = useState(25 * 60);
  const [ambiance, setAmbiance] = useState('focus-deep');

  // Load config from sessionStorage
  useEffect(() => {
    const savedConfig = sessionStorage.getItem('sessionConfig');
    if (savedConfig) {
      const parsedConfig = JSON.parse(savedConfig);
      setConfig(parsedConfig);
      const seconds = parsedConfig.duration * 60;
      setTimeLeft(seconds);
      setTotalTime(seconds);
      setAmbiance(parsedConfig.ambiance);
    } else {
      // If no config, redirect to dashboard
      navigate('/dashboard');
    }
  }, [navigate]);

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      // Session completed - could show celebration modal
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };
  
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(totalTime);
  };

  const handleQuit = () => {
    sessionStorage.removeItem('sessionConfig');
    navigate('/dashboard');
  };

  if (!config) {
    return null;
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-teal-100">
      {/* Header */}
      <SessionHeader
        isRunning={isRunning}
        timeLeft={timeLeft}
        totalTime={totalTime}
        onToggle={toggleTimer}
        onReset={resetTimer}
        ambiance={ambiance}
        onAmbianceChange={setAmbiance}
        onQuit={handleQuit}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-hidden relative">
        <div className="h-full w-full px-3 sm:px-4 lg:px-6 py-4 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4">
          {/* Left Sidebar */}
          <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-140px)]">
            <SessionObjectiveCard objective={config.objective} />
            <SessionRayChat />
          </div>

          {/* Main Workspace */}
          <SessionWorkspace />
        </div>

        {/* Help Button */}
        <button className="fixed bottom-4 right-4 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg flex items-center justify-center transition-all hover:scale-110">
          <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
}
