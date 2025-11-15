import { useEffect, RefObject } from "react";

export interface ClickOutsideOptions {
  enabled?: boolean;
  handler: (event: MouseEvent | TouchEvent) => void;
}

/**
 * Hook to detect clicks outside of a referenced element
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  options: ClickOutsideOptions
): void {
  const { enabled = true, handler } = options;

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, enabled, handler]);
}

