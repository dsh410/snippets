'use client';
import { redirect } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

interface Snippet {
  id: string;
  title: string;
  code: string;
}

export default function ShowSnippet({ snippet }: { snippet: Snippet }) {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <button
            onClick={() => redirect('/')}
            className="text-blue-600 hover:text-blue-700 flex items-center gap-2 text-sm"
          >
            ← Back to Snippets
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {snippet.title || 'Snippet Title'}
              </h1>
            </div>
            <div className="flex gap-2">
              <Link
                href={`/snippets/${snippet.id}/edit`}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm hover:bg-gray-300 transition-colors"
              >
                Edit
              </Link>
              <button className="px-4 py-2 bg-red-600 text-white rounded-md text-sm hover:bg-red-700 transition-colors">
                Delete
              </button>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Code</h2>
            </div>
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-md overflow-x-auto">
              {snippet.code}
            </pre>
          </div>
          <div className="border-t pt-6"></div>
        </div>
      </div>
    </div>
  );
}
