import { useState, useEffect, useCallback } from "react";
import type { User, UserFormData } from "../../api/types/user";
import userApi from "../../api/userApi.ts";



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
      setError(
        err instanceof Error ? err : new Error("An unknown error occurred."),
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const onEdit = useCallback(
    async (id: number, data: UserFormData) => {
      await userApi.edit(id.toString(), data);
      await fetch();
    },
    [fetch],
  );

  const onDelete = useCallback(
    async (id: number) => {
      await userApi.delete(id.toString());
      await fetch();
    },
    [fetch],
  );

  useEffect(() => {
    void fetch();
  }, [fetch]);

  return { users, loading, error, fetch, onEdit, onDelete };
};

export default useUsers;
