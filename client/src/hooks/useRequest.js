import { useCallback, useState } from "react";

const callService = (fn, args) => async ({ setIsLoading, setIsError, setError, setData }) => {
  setIsLoading(true);
  setError(null);
  setIsError(false);

  try {
    const response = await fn(...args);
    setData(response);
  } catch (e) {
    setError(e);
    setIsError(true);
  } finally {
    setIsLoading(false);
  }
};

const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const sendRequest = useCallback((fn, ...args) => {
    const setFns = { setIsLoading, setIsError, setError, setData };
    callService(fn, args)(setFns);
  }, []);

  return { isLoading, isError, error, data, sendRequest };
};

export default useRequest;
