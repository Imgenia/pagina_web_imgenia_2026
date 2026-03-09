import { useEffect } from 'react';

const UMAMI_URL = import.meta.env.VITE_UMAMI_URL as string | undefined;
const UMAMI_WEBSITE_ID = import.meta.env.VITE_UMAMI_WEBSITE_ID as string | undefined;

/**
 * Inyecta el script de Umami si están definidas VITE_UMAMI_URL y VITE_UMAMI_WEBSITE_ID.
 * Configura estas variables en el build (ej. en EasyPanel) para activar el analytics.
 */
export default function UmamiAnalytics() {
  useEffect(() => {
    if (!UMAMI_URL || !UMAMI_WEBSITE_ID) return;
    const url = UMAMI_URL.replace(/\/$/, '');
    if (document.querySelector(`script[data-website-id="${UMAMI_WEBSITE_ID}"]`)) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = `${url}/script.js`;
    script.setAttribute('data-website-id', UMAMI_WEBSITE_ID);
    document.head.appendChild(script);
  }, []);
  return null;
}
