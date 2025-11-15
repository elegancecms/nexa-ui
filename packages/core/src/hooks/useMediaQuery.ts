import { useEffect, useState } from "react";

export interface MediaQueryOptions {
  defaultValue?: boolean;
}

/**
 * Hook to detect if a media query matches
 * Uses native window.matchMedia API
 */
export function useMediaQuery(
  query: string,
  options: MediaQueryOptions = {}
): boolean {
  const { defaultValue = false } = options;

  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") {
      return defaultValue;
    }
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }

    // Fallback for older browsers
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, [query]);

  return matches;
}

