import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from './constants';
import { useAuthWithGoogle } from './hooks/useAuth';
import { useUser } from './stores/user';

export default function GoogleLoginButton(): JSX.Element {
  const { mutateAsync: authWithGoogle } = useAuthWithGoogle();
  const { setUser } = useUser();

  const onSuccess = async ({ credential }: CredentialResponse) => {
    if (!credential) {
      throw new Error('No credential.');
    }

    setUser(await authWithGoogle({ credential }));
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <GoogleLogin onSuccess={onSuccess} />
    </GoogleOAuthProvider>
  );
}
