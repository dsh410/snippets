'use client';
import { db } from '@/db';
import ViewButton from '@/components/Buttons/ViewButton';
import { delay } from '@/utils/delay';
import { useState, useEffect } from 'react';
import { getSnippets } from '@/actions';

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
      await delay(2500);
      const data = await getSnippets();

      setSnippets(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      console.log('this is snippets length', snippets.length),
      (
        <>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            8. Skeleton Loading (Best for Content)
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
                <div className="bg-gray-300 rounded-md p-4 space-y-2 mb-4">
                  <div className="h-4 bg-gray-400 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-400 rounded w-5/6 animate-pulse"></div>
                  <div className="h-4 bg-gray-400 rounded w-4/6 animate-pulse"></div>
                </div>
                <div className="flex gap-2">
                  <div className="h-10 bg-gray-200 rounded w-20 animate-pulse"></div>
                  <div className="h-10 bg-gray-200 rounded w-20 animate-pulse"></div>
                  <div className="h-10 bg-gray-200 rounded w-20 ml-auto animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </>
      )
    );
  }

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
