import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';
import { useChildStore } from '@/stores/childStore';
import { api } from '@/lib/api';
import Spinner from '@/components/ui/Spinner';

export default function OAuthCallbackPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { fetchProfile } = useAuthStore();

  useEffect(() => {
    const error = searchParams.get('error');
    const code = searchParams.get('code');

    if (error || !code) {
      navigate('/login?error=oauth_failed', { replace: true });
      return;
    }

    // Exchange the one-time code for tokens via a secure POST request
    api
      .post('/auth/oauth/exchange', { code })
      .then(({ data }) => {
        const { accessToken, refreshToken } = data.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.removeItem('selectedChild');
        useChildStore.setState((s) => ({
          children: [],
          selectedChild: null,
          fetchedForUserId: null,
          isLoading: false,
          _fetchGen: s._fetchGen + 1,
        }));

        return fetchProfile();
      })
      .then(() => {
        navigate('/dashboard', { replace: true });
      })
      .catch(() => {
        navigate('/login?error=oauth_failed', { replace: true });
      });
  }, []);

  return (
    <div className="min-h-screen bg-surface-primary flex items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
}
