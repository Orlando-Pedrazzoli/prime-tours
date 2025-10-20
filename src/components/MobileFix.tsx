'use client';

import { useEffect } from 'react';

export default function MobileFix() {
  useEffect(() => {
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    document.body.style.maxWidth = '100vw';
  }, []);

  return (
    <style jsx global>{`
      html,
      body,
      #__next,
      main {
        overflow-x: hidden !important;
        max-width: 100vw !important;
      }
      @media (max-width: 768px) {
        .container {
          max-width: 100vw !important;
          padding: 0 1rem !important;
        }
        section#inicio .grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
    `}</style>
  );
}
