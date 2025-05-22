import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { ActivityIcon, ChromeIcon, HomeIcon, LayoutDashboardIcon, MailIcon, PuzzleIcon } from 'lucide-react';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/leaperone/MultiPost-Extension',
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
    transparentMode: 'top',
  },
  links: [

    {
      type: 'icon',
      label: 'Home Link',
      text: 'Home',
      icon: <HomeIcon />,
      url: 'https://multipost.app',
    },
    {
      type: 'icon',
      label: 'Dashboard Link',
      text: 'Dashboard',
      icon: <LayoutDashboardIcon />,
      url: 'https://multipost.app/dashboard',
    },
    {
      type: 'icon',
      label: 'Contact Us Link',
      text: 'Contact Us',
      icon: <MailIcon />,
      url: '/docs/user-guide/contact-us',
    },
    {
      type: 'icon',
      label: 'MultiPost Status',
      text: 'Status',
      icon: <ActivityIcon />,
      url: 'https://monitor.leaper.one',
    },
    {
      type: 'menu',
      text: 'Extensions',
      items: [
        {
          icon: <ChromeIcon />,
          text: 'Install MultiPost',
          url: 'https://multipost.app/extension',
        },
        {
          icon: <PuzzleIcon />,
          text: 'Install MultiGet',
          url: 'https://chromewebstore.google.com/detail/multiget/bhggbcoodmbomiaffjbpkafajbgcchgi',
        },
      ],
    },
  ],
};
