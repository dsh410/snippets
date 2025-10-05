'use client';
import React, { useState, useEffect } from 'react';

import ViewButton from '../Buttons/ViewButton';

interface Snippet {
  id: string;
  title: string;
  code: string;
}

export default function Homepage({ snippets, loading }: { snippets: Snippet[]; loading: boolean }) {
  const [isLoading, setIsLoading] = useState(loading);

  useEffect(() => {
    setIsLoading(loading);
  }, []);

  if (isLoading) {
    {
      /* 1. Full Page Spinner */
    }
    return (
      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Full Page Spinner</h2>
        <div className="flex items-center justify-center h-64 bg-gray-50 rounded">
          <div className="text-center">
            <div className="inline-block w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600 text-lg">Loading snippets...</p>
          </div>
        </div>
      </section>
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
