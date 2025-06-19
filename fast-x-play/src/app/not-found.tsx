import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <div className="text-center space-y-5">
        <h1 className="text-5xl font-bold">404</h1>
        <h2 className="text-2xl">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
} 