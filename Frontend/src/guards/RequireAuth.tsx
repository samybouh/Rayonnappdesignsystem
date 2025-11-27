// Frontend/src/guards/RequireAuth.tsx
import { Navigate, Outlet } from 'react-router-dom';

export default function RequireAuth() {
  const token = localStorage.getItem('rayonn:token');
  return token ? <Outlet /> : <Navigate to="/auth/login" replace />;
}
