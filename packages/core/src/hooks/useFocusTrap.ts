import { useEffect, RefObject } from "react";

/**
 * Hook to trap focus within a container element
 * Useful for modals and dialogs
 */
export function useFocusTrap<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  enabled: boolean = true
): void {
  useEffect(() => {
    if (!enabled || !ref.current) {
      return;
    }

    const container = ref.current;
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") {
        return;
      }

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    // Focus first element when trap is activated
    firstElement?.focus();

    container.addEventListener("keydown", handleTabKey);

    return () => {
      container.removeEventListener("keydown", handleTabKey);
    };
  }, [ref, enabled]);
}

