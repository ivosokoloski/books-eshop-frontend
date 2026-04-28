
import { useState, useEffect, useCallback } from 'react';
import type { AuthorDetails } from '../../api/types/author';
import authorApi from '../../api/authorsApi.ts';

const useAuthorsDetails = (id?: string) => {
  const [authorDetails, setAuthorDetails] = useState<AuthorDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetch = useCallback(async () => {
    if (!id) {
      return;
    }

    setLoading(true); 

    try {
      const response = await authorApi.findWithDetailsById(id);
      setAuthorDetails(response.data);
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

  return { authorDetails, loading, error };
};

export default useAuthorsDetails;