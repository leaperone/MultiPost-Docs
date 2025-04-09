import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image
          width={24}
          height={24}
          src="/favicon.ico"
          alt="Logo"
          className="rounded-full"
        />
        MultiPost
      </>
    ),
  },
  links: [
    {
      text: 'Home',
      url: 'https://multipost.app',
      active: 'nested-url',
    },
    {
      text: 'Dashboard',
      url: 'https://multipost.app/dashboard',
      active: 'nested-url',
    },
    // {
    //   text: 'Documentation',
    //   url: '/docs',
    //   active: 'nested-url',
    // },
  ],
};
