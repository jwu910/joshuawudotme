import React from "react";

const useLocalStorage = (storageKey: string, fallbackState: any) => {
  const [value, setValue] = React.useState(
    JSON.parse(
      localStorage.getItem(storageKey) ?? JSON.stringify(fallbackState)
    )
  );

  React.useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

export default useLocalStorage;
