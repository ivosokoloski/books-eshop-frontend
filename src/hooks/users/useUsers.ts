import { useState, useEffect, useCallback } from 'react';
import type { User } from '../../api/types/user';
import userApi from '../../api/usersApi.ts';    

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetch = useCallback(async () => {
    setLoading(true);

    try {
      const response = await userApi.findAll();
      setUsers(response.data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred.'));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetch();
  }, [fetch]);

  return { users, loading, error, fetch };
};

export default useUsers;