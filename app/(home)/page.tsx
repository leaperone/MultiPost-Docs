import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center text-center p-8">
      <h1 className="mb-4 text-4xl font-bold">Welcome to MultiPost Documentation</h1>
      <p className="text-fd-muted-foreground mb-8 max-w-2xl">
        This is the MultiPost documentation center, where you can find all the information and usage guides about MultiPost.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/docs/user-guide"
          className="px-6 py-3 bg-fd-primary text-fd-primary-foreground rounded-md font-medium hover:bg-fd-primary/90 transition-colors"
      >
        User Guide
      </Link>
      <Link
        href="/docs/api-reference"
        className="px-6 py-3 bg-fd-primary text-fd-primary-foreground rounded-md font-medium hover:bg-fd-primary/90 transition-colors"
      >
        Api Reference
      </Link>
      <Link
        href="/docs/development"
        className="px-6 py-3 bg-fd-primary text-fd-primary-foreground rounded-md font-medium hover:bg-fd-primary/90 transition-colors"
        >
          Development
        </Link>
      </div>
    </main>
  );
}
