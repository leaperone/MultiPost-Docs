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
    // {
    //   text: 'Documentation',
    //   url: '/docs',
    //   active: 'nested-url',
    // },
  ],
};
