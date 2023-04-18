'use client';

import { Roboto as SansFont } from 'next/font/google';
import { useServerInsertedHTML } from 'next/navigation';

const sans = SansFont({
  subsets: ['latin'],
  variable: '--font-family-sans',
  fallback: ['system-ui', 'Helvetica Neue', 'Helvetica', 'Arial'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

function Font() {
  useServerInsertedHTML(() => {
    return (
      <style
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            --font-family-sans: ${sans.style.fontFamily}, 'Roboto', 'sans-serif';
          }
        `,
        }}
      />
    );
  });

  return null;
}

export default Font;
