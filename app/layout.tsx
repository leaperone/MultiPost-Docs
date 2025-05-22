import { Banner } from 'fumadocs-ui/components/banner';
import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'MultiPost Documentation',
  description: 'The documentation for MultiPost',
};

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
      <Banner variant="rainbow" id="try-multiget">
        <p>
          Try new:&nbsp;
        </p>
        <a href="https://chromewebstore.google.com/detail/multiget/bhggbcoodmbomiaffjbpkafajbgcchgi" target="_blank" rel="noopener noreferrer" className="underline">
          「MultiGet」
        </a>
        </Banner>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
