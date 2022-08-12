import React, { useCallback } from 'react';
import { useState } from 'react';

const useAsyncFn = (fn: any, deps: any) => {
  const [state, setState] = useState({
    value: {},
    error: '',
    isLoading: false,
  });

  const callback = useCallback((...args: any) => {
    return fn(...args).then(
      (value: any) => {
        setState({ ...state, value, isLoading: false });
      },
      (error: any) => {
        setState({ ...state, error, isLoading: false });
      },
    );
  }, deps);

  return [state, callback];
};

export default useAsyncFn;
