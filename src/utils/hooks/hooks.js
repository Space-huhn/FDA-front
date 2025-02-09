import {useState, useCallback} from 'react';

export function useToggleExclusive(initialValue) {
  const [state, setState] = useState(initialValue);

  const setNewValue = useCallback((newValue) => {
    if (state !== newValue) {
      setState(newValue);
    }
  }, [state]);

  return [state, setNewValue];
}



export function useMultipleToggle(initialValue) {
  const [state, setState] = useState(initialValue);

  const setNewValue = useCallback((newValue) => {

    setState(prev => {
      if (prev.includes(newValue)) {
        if (prev.length > 1) {
          return prev.filter(el => el !== newValue);
        } else {
          return prev;
        }
      } else {
        return [...prev, newValue];
      }
    })

  }, [state]);
  return [state, setNewValue];
}



export function useMultipleToggleWithReset(initialValue, resetValue) {
  const [state, setState] = useState(initialValue);

  const setNewValue = useCallback((newValue) => {
    setState((prev) => {
      if (!prev.length) console.log("ok");

      if (newValue === resetValue) return [resetValue];

      if (prev.includes(resetValue)) return [newValue];

      if (prev.includes(newValue)) {
        if (prev.length === 1) return [resetValue];

        return prev.filter(el => el !== newValue);
      }

      return [...prev, newValue];
    })
  }, [state]);

  return [state, setNewValue];
}





