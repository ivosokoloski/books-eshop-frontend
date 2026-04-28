import { useState, useEffect, useCallback } from "react";
import type { CountryDetails } from "../../api/types/country";
import countriesApi from "../../api/countriesApi.ts";

const useCountriesDetails = (id?: string) => {
  const [countryDetails, setCountryDetails] = useState<CountryDetails | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetch = useCallback(async () => {
    if (!id) {
      return;
    }

    setLoading(true);

    try {
      const response = await countriesApi.findWithDetailsById(id);
      setCountryDetails(response.data);
      setError(null);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("An unknown error occurred."),
      );
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    void fetch();
  }, [fetch]);

  return { countryDetails, loading, error };
};

export default useCountriesDetails;
