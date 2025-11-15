/**
 * Class name utility function - combines class names conditionally
 * Native implementation without external dependencies
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

