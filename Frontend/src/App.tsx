import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Marketing from './pages/marketing/Marketing';
import Question from './pages/onboarding/Question';
import BillingTrial from './pages/onboarding/BillingTrial';
import Login from './pages/auth/Login';
import AppLayout from './pages/app/AppLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Folders from './pages/folders/Folders';
import Methods from './pages/methods/Methods';
import Journal from './pages/journal/Journal';
import Session from './pages/session/Session';
import Settings from './pages/settings/Settings';
import Stats from './pages/stats/Stats';
import Progression from './pages/progression/Progression';
import Wizard from './pages/onboarding/Wizard';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Marketing & Auth */}
        <Route path="/" element={<Marketing />} />
        <Route path="/onboarding" element={<Question />} />
        <Route path="/onboarding/wizard" element={<Wizard />} />

        <Route path="/onboarding/billing" element={<BillingTrial />} />
        <Route path="/auth/login" element={<Login />} />
        
        {/* App Routes */}
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate to="/app/dashboard" replace />} />
          <Route path="/app/dashboard" element={<Dashboard />} />
          <Route path="folders" element={<Folders />} />
          <Route path="methods" element={<Methods />} />
          <Route path="journal" element={<Journal />} />
          <Route path="settings" element={<Settings />} />
          <Route path="stats" element={<Stats />} />
          <Route path="progression" element={<Progression />} />
        </Route>

        {/* Session - Full screen mode */}
        <Route path="/session" element={<Session />} />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
