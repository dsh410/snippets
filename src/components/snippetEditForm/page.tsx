'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import type { Snippet } from '@prisma/client';
import { editSnippet } from '@/actions/index';
import { Editor } from '@monaco-editor/react';

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = '') => {
    setCode(value);
  };

  const editSnippetAction = editSnippet.bind(null, { id: snippet.id, title: snippet.title, code });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 flex items-center gap-2 text-sm"
          >
            ← Back to Snippets
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <input
                type="text"
                name="title"
                defaultValue={snippet.title}
                className="text-3xl font-bold text-gray-900 mb-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-600"
                placeholder="Snippet Title"
              />
            </div>
            <div className="flex gap-2">
              <form action={editSnippetAction}>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors">
                  Save
                </button>
              </form>

              <Link
                href="/"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm hover:bg-gray-300 transition-colors"
              >
                Cancel
              </Link>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Code</h2>
            </div>
            <Editor
              height="40vh"
              defaultValue={`${snippet.code}`}
              language="javascript"
              theme="vs-dark"
              onChange={handleEditorChange}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                wordWrap: 'on',
                tabSize: 2,
                automaticLayout: true,
              }}
            />
          </div>

          <div className="border-t pt-6"></div>
        </div>
      </div>
    </div>
  );
}
