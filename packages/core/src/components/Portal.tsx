import { usePortal } from "../hooks/usePortal";
import { createPortal } from "react-dom";

export interface PortalProps {
  children: React.ReactNode;
  container?: HTMLElement | (() => HTMLElement) | null;
}

/**
 * Portal component for rendering children outside DOM hierarchy
 */
export function Portal({ children, container }: PortalProps) {
  const portalContainer = usePortal(container);

  if (!portalContainer) {
    return null;
  }

  return createPortal(children, portalContainer);
}

