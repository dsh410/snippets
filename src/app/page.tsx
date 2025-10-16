'use client';
import ViewButton from '@/components/Buttons/ViewButton';
import { delay } from '@/utils/delay';
import { useState, useEffect } from 'react';
import { getSnippets } from '@/actions';
import Loading from './loading';
import Link from 'next/link';

interface Snippet {
  id: string;
  title: string;
  code: string;
}

export default function Home() {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (process.env.NODE_ENV === 'development') {
        await delay(2000);
      }

      const data = await getSnippets();

      setSnippets(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Code Snippets</h1>
          <Link
            href="/snippets/new"
            className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
          >
            New
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {snippets.map((snippet) => (
            <div
              key={snippet.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">{snippet.title}</h2>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                {snippet.code}
              </pre>
              <div className="flex gap-2 mt-4">
                <ViewButton id={snippet.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
