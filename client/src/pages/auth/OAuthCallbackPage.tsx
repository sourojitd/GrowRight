import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import { useChildStore } from '@/stores/childStore';
import Spinner from '@/components/ui/Spinner';

export default function OAuthCallbackPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { fetchProfile } = useAuthStore();

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    const error = searchParams.get('error');

    if (error || !accessToken || !refreshToken) {
      navigate('/login?error=oauth_failed', { replace: true });
      return;
    }

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.removeItem('selectedChild');
    useChildStore.setState({ children: [], selectedChild: null, hasFetched: false, isLoading: false });

    fetchProfile().then(() => {
      navigate('/dashboard', { replace: true });
    });
  }, []);

  return (
    <div className="min-h-screen bg-surface-primary flex items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
}
