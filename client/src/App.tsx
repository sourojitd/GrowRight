import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import AppLayout from '@/components/layout/AppLayout';
import LoginPage from '@/pages/auth/LoginPage';
import RegisterPage from '@/pages/auth/RegisterPage';
import DashboardPage from '@/pages/dashboard/DashboardPage';
import ChildrenPage from '@/pages/children/ChildrenPage';
import ChildProfilePage from '@/pages/children/ChildProfilePage';
import AddChildPage from '@/pages/children/AddChildPage';
import MilestonesPage from '@/pages/milestones/MilestonesPage';
import ActivitiesPage from '@/pages/activities/ActivitiesPage';
import SyllabusPage from '@/pages/syllabus/SyllabusPage';
import RoadmapPage from '@/pages/roadmap/RoadmapPage';
import SettingsPage from '@/pages/settings/SettingsPage';
import AdminDashboard from '@/pages/admin/AdminDashboard';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

function AdminRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isAdmin } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!isAdmin) return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
}

function GuestRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
}

export default function App() {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path="/login" element={<GuestRoute><LoginPage /></GuestRoute>} />
      <Route path="/register" element={<GuestRoute><RegisterPage /></GuestRoute>} />

      {/* Protected routes */}
      <Route path="/" element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="children" element={<ChildrenPage />} />
        <Route path="children/add" element={<AddChildPage />} />
        <Route path="children/:childId" element={<ChildProfilePage />} />
        <Route path="milestones" element={<MilestonesPage />} />
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="syllabus" element={<SyllabusPage />} />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
