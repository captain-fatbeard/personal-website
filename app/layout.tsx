import Font from '@/components/Font';
import { Menu } from '@/components/Menu';
import '@/styles/design_tokens.css';
import '@/styles/globals.css';

export const metadata = {
  title: 'Jacob Juul Larsen',
  description: 'Personal website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Font />
      <body>
        {children}
        <Menu />
      </body>
    </html>
  );
}
