import { useState, useEffect, useMemo } from 'react';

interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook for fetching data from an API.
 * @param url - The API endpoint URL.
 * @param dependencies -dependencies to refetch data on change.
 * @returns Object containing data, loading, and error states.
 */

const useFetch=<T>(url: string, dependencies: React.DependencyList): FetchResult<T> =>{
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const memoizedDependencies = useMemo(() => [url, ...dependencies], [url,...dependencies]);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
    // Dependencies will trigger the effect
  }, [url, memoizedDependencies]);


  useEffect(() => {
    console.log(data)
  }, [data])
  

  return { data, loading, error };
}

export default useFetch;
