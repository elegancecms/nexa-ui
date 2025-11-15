import { useEffect, useState } from "react";

/**
 * Hook to get/create a portal container element
 */
export function usePortal(
  container?: HTMLElement | (() => HTMLElement) | null
): HTMLElement | null {
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let element: HTMLElement | null = null;

    if (container) {
      element = typeof container === "function" ? container() : container;
    } else {
      // Default to body
      element = document.body;
    }

    setPortalContainer(element);

    return () => {
      setPortalContainer(null);
    };
  }, [container]);

  return portalContainer;
}

