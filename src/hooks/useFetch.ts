import { useState, useEffect} from 'react';
import {  AxiosRequestConfig } from 'axios';

import api from '../services/api';

// Função auxiliar para acessar propriedades aninhadas de um objeto usando um caminho de string
function getNestedObjectValue<T>(obj: Record<string, any>, path: string): T {
  return path.split('.').reduce((currentObject: any, key: string) => currentObject[key], obj) as T;
}

function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig, responsePath: string = '', deps: any[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api
      .get(url, options)
      .then((response) => {
        // Utiliza a função auxiliar para acessar os dados dinamicamente
        const resultData = responsePath ? getNestedObjectValue(response.data, responsePath) : response.data;
        
        setData(resultData);
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setIsFetching(false)
      });
  }, [url, responsePath, ...deps,]);

  return { data, error, isFetching }
}
export default useFetch;
