import { Banner } from 'fumadocs-ui/components/banner';
import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import type { Translations } from 'fumadocs-ui/i18n';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { i18n } from '@/lib/i18n';

export const metadata = {
  title: 'MultiPost Documentation',
  description: 'The documentation for MultiPost',
};

const inter = Inter({
  subsets: ['latin'],
});

// translations
const zh: Partial<Translations> = {
  search: '搜索内容',
};

// available languages that will be displayed on UI
const locales = i18n.languages.map(lang => ({
  name: lang === 'zh' ? '中文' : 'English',
  locale: lang,
}));

export default async function Layout({ children, params }: { children: ReactNode, params: Promise<{ lang: string }> }) {
  const lang = (await params).lang;

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
      <Banner variant="rainbow" id="try-multiget">
        <p>
          Try new:&nbsp;
        </p>
        <a href="https://chromewebstore.google.com/detail/multiget/bhggbcoodmbomiaffjbpkafajbgcchgi" target="_blank" rel="noopener noreferrer" className="underline">
          「MultiGet」
        </a>
        </Banner>
        <RootProvider 
          i18n={{
            locale: lang,
            locales,
            translations: { zh }[lang],
          }}
        >{children}</RootProvider>
      </body>
    </html>
  );
}
