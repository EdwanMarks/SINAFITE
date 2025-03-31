import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Component that scrolls the window to the top on route change
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}