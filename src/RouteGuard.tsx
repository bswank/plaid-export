import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './stores/user';

interface Props {
  children: JSX.Element;
}

export default function RouteGuard({ children }: Props): JSX.Element | null {
  const [redirectsChecked, setRedirectsChecked] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }

    if (!user) {
      navigate('/login');
    }

    setRedirectsChecked(true);
  }, [user, navigate]);

  if (redirectsChecked) {
    return children;
  }

  return null;
}
