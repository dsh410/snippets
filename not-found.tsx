import Link from 'next/link';

export default function SnippetNotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-500">404</h1>
        </div>

        <div className="space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-white">Page Not Found</h2>
          <p className="text-xl text-gray-300">
            Oops! The page you&#39;re looking for seems to have vanished into the digital void.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Go Home
          </Link>
          <a
            href="/contact"
            className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors duration-200"
          >
            Contact Support
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="h-1 bg-slate-700 rounded-full"></div>
          <div className="h-1 bg-blue-600 rounded-full"></div>
          <div className="h-1 bg-slate-700 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
