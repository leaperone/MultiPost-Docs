import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import {
  ActivityIcon,
  ChromeIcon,
  HomeIcon,
  LayoutDashboardIcon,
  MailIcon,
  NewspaperIcon,
  PuzzleIcon,
} from "lucide-react";
import Image from "next/image";
import { i18n } from "@/lib/i18n";
import Link from "next/link";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions = (locale: string): BaseLayoutProps => ({
  i18n,
  githubUrl: "https://github.com/leaperone/MultiPost-Extension",
  nav: {
    title: (
      <Link href={`/${locale}/`}>
        <div className="flex items-center gap-2">
          <Image
            width={24}
            height={24}
            src="/favicon.ico"
            alt="Logo"
            className="rounded-full"
          />
          MultiPost
        </div>
      </Link>
    ),
    transparentMode: "top",
  },
  links: [
    {
      type: "icon",
      label: "Home Link",
      text: "Home",
      icon: <HomeIcon />,
      url: "https://multipost.app",
    },
    {
      type: "icon",
      label: "Dashboard Link",
      text: "Dashboard",
      icon: <LayoutDashboardIcon />,
      url: "https://multipost.app/dashboard",
    },
    {
      type: 'icon',
      label: 'Blog Link',
      text: 'Blog',
      icon: <NewspaperIcon />,
      url: 'https://blog.multipost.app',
    },
    {
      type: "icon",
      label: "Contact Us Link",
      text: "Contact Us",
      icon: <MailIcon />,
      url: `/${locale}/docs/user-guide/contact-us`,
    },
    {
      type: "icon",
      label: "MultiPost Status",
      text: "Status",
      icon: <ActivityIcon />,
      url: "https://monitor.leaper.one",
    },
    {
      type: "menu",
      text: "Extensions",
      items: [
        {
          icon: <ChromeIcon />,
          text: "Install MultiPost",
          url: "https://multipost.app/extension",
        },
        {
          icon: <PuzzleIcon />,
          text: "Install MultiGet",
          url: "https://chromewebstore.google.com/detail/multiget/bhggbcoodmbomiaffjbpkafajbgcchgi",
        },
      ],
    },
  ],
});
