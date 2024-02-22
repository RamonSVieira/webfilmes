import { useState, useEffect, useMemo, useRef } from 'react';
import { AxiosError, AxiosRequestConfig } from 'axios';

import api from '../services/api';

function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const data = useRef<T>();

  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    (async () => {
      try {
        const { data: response } = await api.get<T>(url, options);

        data.current = response;
      } catch (err) {
        setError(err as AxiosError);
      } finally {
        setIsFetching(false);
      }
    })();
  }, [url, options]);

  const response = useMemo(
    () => ({ data: data.current, error, isFetching }),
    [data, error, isFetching]
  );

  return response;
}
export default useFetch;
