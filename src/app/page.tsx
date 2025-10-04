import { db } from '@/db';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Code Snippets</h1>
          <span className="text-sm text-gray-600">{snippets.length} snippets</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {snippets.map((snippet) => (
            <div
              key={snippet.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">{snippet.title}</h2>
                <span className="text-xs text-gray-500">{`ID: ${snippet.id}`}</span>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                {snippet.code}
              </pre>
              <div className="flex gap-2 mt-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors">
                  Copy
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm hover:bg-gray-300 transition-colors">
                  Edit
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md text-sm hover:bg-red-700 transition-colors ml-auto">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
