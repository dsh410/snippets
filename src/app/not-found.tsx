import Link from 'next/link';

export default function SnippetNotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        <div className="space-y-8">
          <div>
            <p className="text-sm font-medium text-blue-600 mb-2">404 Error</p>
            <h1 className="text-4xl font-semibold text-gray-900 mb-3">Page not found</h1>
            <p className="text-gray-600 leading-relaxed">
              Sorry, we couldn&#39;t find the page you&#39;re looking for.
            </p>
          </div>
          <Link
            href="/"
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
