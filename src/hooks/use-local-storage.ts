import React from "react";

const useLocalStorage = <T>(storageKey: string, fallbackState: T) => {
  const [value, setValue] = React.useState<T>(() => {
    const storedValue = localStorage.getItem(storageKey);
    if (storedValue) {
      try {
        return JSON.parse(storedValue) as T;
      } catch (error) {
        console.error(
          `Error parsing stored value for key '${storageKey}':`,
          error,
        );
      }
    }
    return fallbackState;
  });

  React.useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue] as const;
};

export default useLocalStorage;
