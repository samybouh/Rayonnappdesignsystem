import { Outlet } from 'react-router-dom';
import { LeftNav } from '../../components/patterns/LeftNav';
import { RightRail } from '../../components/patterns/RightRail';
import { AppHeader } from '../../components/patterns/AppHeader';

export default function AppLayout() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gradient-to-br from-[#E8F0FE] via-[#E8F8F5] to-[#FEF3C7]">
      <AppHeader />
      
      <div className="flex-1 flex overflow-hidden">
        <LeftNav />
        
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
        
        <RightRail />
      </div>
    </div>
  );
}
