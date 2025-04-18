import { BookCheckIcon, BugPlayIcon, WebhookIcon } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center text-center p-8">
      <h1 className="mb-4 text-4xl font-bold">Welcome to MultiPost Documentation</h1>
      <p className="text-fd-muted-foreground mb-8 max-w-2xl">
        This is the MultiPost documentation center, where you can find all the information and usage guides about MultiPost.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button href="/docs/user-guide" icon={<BookCheckIcon />}>
          User Guide
        </Button>
        <Button href="https://api-docs.multipost.app/" icon={<WebhookIcon />}>
          API Reference
        </Button>
        <Button href="/docs/development" icon={<BugPlayIcon />}>
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