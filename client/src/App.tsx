import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import AppLayout from '@/components/layout/AppLayout';
import LandingPage from '@/pages/landing/LandingPage';
import LoginPage from '@/pages/auth/LoginPage';
import RegisterPage from '@/pages/auth/RegisterPage';
import ForgotPasswordPage from '@/pages/auth/ForgotPasswordPage';
import VerifyEmailPage from '@/pages/auth/VerifyEmailPage';
import AcceptInvitePage from '@/pages/invite/AcceptInvitePage';
import OAuthCallbackPage from '@/pages/auth/OAuthCallbackPage';
import DashboardPage from '@/pages/dashboard/DashboardPage';
import ChildrenPage from '@/pages/children/ChildrenPage';
import ChildProfilePage from '@/pages/children/ChildProfilePage';
import AddChildPage from '@/pages/children/AddChildPage';
import MilestonesPage from '@/pages/milestones/MilestonesPage';
import ActivitiesPage from '@/pages/activities/ActivitiesPage';
import ToysPage from '@/pages/toys/ToysPage';
import SyllabusPage from '@/pages/syllabus/SyllabusPage';
import RoadmapPage from '@/pages/roadmap/RoadmapPage';
import VaccinationsPage from '@/pages/vaccinations/VaccinationsPage';
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

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
}

export default function App() {
  return (
    <Routes>
      {/* Public landing page */}
      <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />

      {/* Auth routes */}
      <Route path="/login" element={<GuestRoute><LoginPage /></GuestRoute>} />
      <Route path="/register" element={<GuestRoute><RegisterPage /></GuestRoute>} />
      <Route path="/forgot-password" element={<GuestRoute><ForgotPasswordPage /></GuestRoute>} />
      {/* Email verification — accessible to all (GuestRoute blocks after login) */}
      <Route path="/verify-email" element={<VerifyEmailPage />} />
      {/* OAuth callback — no guard, processes tokens then redirects */}
      <Route path="/auth/callback" element={<OAuthCallbackPage />} />
      {/* Accept invite — accessible to authenticated users only */}
      <Route path="/accept-invite" element={<ProtectedRoute><AcceptInvitePage /></ProtectedRoute>} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="children" element={<ChildrenPage />} />
        <Route path="children/add" element={<AddChildPage />} />
        <Route path="children/:childId" element={<ChildProfilePage />} />
        <Route path="milestones" element={<MilestonesPage />} />
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="toys" element={<ToysPage />} />
        <Route path="syllabus" element={<SyllabusPage />} />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="vaccinations" element={<VaccinationsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
