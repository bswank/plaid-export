import { useMutation } from 'react-query';
import api from '../api';
import { User } from '../types/user';

// export const somethingQueryKey = 'something';

// export function useGetSomething(
//   { token }: { token: string },
//   options: QueryOptions,
// ) {
//   return useQuery(
//     authWithGoogleQueryKey,
//     async () => {
//       return api.post('/auth/oauth/google', { token });
//     },
//     {
//       staleTime: 0,
//       ...options,
//     },
//   );
// }

export function useAuthWithGoogle() {
  return useMutation(
    async ({ credential }: { credential: string }): Promise<User> => {
      return api.post('/auth/oauth/google', { credential });
    },
    {
      onError: console.log,
    },
  );
}
