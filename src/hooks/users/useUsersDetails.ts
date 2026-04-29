import { useState, useEffect, useCallback } from 'react';
import type { UserDetails } from '../../api/types/user';
import userApi from '../../api/usersApi.ts';

const useUsersDetails = (id?: string) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetch = useCallback(async () => {
    if (!id) {
      return;
    }

    setLoading(true); 

    try {
      const response = await userApi.findWithDetailsById(id);
      setUserDetails(response.data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred.'));
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    void fetch();
  }, [fetch]);

  return { userDetails, loading, error };
};

export default useUsersDetails;