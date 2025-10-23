import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-zinc-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-zinc-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-zinc-300 mb-6">
          Page Not Found
        </h2>
        <p className="text-zinc-500 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
