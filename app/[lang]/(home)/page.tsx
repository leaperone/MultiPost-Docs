import { BookCheckIcon, BugPlayIcon, WebhookIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import MultiPostLogo from '@/public/MultiPost-Latest.png';

export default async function HomePage(props: { params: Promise<{ lang: string }> }) {
  const lang = (await props.params).lang;
  return (
    <main className="flex flex-1 flex-col justify-center items-center text-center p-8">
      <Image src={MultiPostLogo} alt="MultiPost Logo" width={200} height={200} />
      <h1 className="mb-4 text-4xl font-bold">MultiPost Documentation</h1>
      <p className="text-fd-muted-foreground mb-8 max-w-2xl">
        MultiPost is a tool that allows you to post to multiple social media platforms from a single interface.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button href={`/${lang}/docs/user-guide`} icon={<BookCheckIcon />}>
          User Guide
        </Button>
        <Button href="https://api-docs.multipost.app/" icon={<WebhookIcon />}>
          API Reference
        </Button>
        <Button href={`/${lang}/docs/development`} icon={<BugPlayIcon />}>
          Development
        </Button>
      </div>
    </main>
  );
}

const Button = ({ children, icon, href }: { children: React.ReactNode, icon: React.ReactNode, href: string }) => {
  return (
    <Link href={href} className="flex items-center gap-2 px-6 py-3 bg-fd-primary text-fd-primary-foreground rounded-md font-medium hover:bg-fd-primary/90 transition-colors">
      {icon}
      {children}
    </Link>
  );
};