import { useEffect, useState } from "react";

export interface DebounceOptions {
  delay?: number;
}

/**
 * Hook to debounce a value
 */
export function useDebounce<T>(
  value: T,
  options: DebounceOptions = {}
): T {
  const { delay = 300 } = options;
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

