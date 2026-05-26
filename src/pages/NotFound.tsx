import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-background px-4 text-center">
      <Helmet>
        <title>404 — Page not found</title>
      </Helmet>
      <p className="font-display text-7xl font-semibold text-foreground">404</p>
      <h1 className="mt-3 font-display text-xl text-foreground">Page not found</h1>
      <p className="mt-2 text-sm text-muted-foreground">That route doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
      >
        Back home
      </Link>
    </div>
  );
}