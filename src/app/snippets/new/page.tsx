import { redirect } from 'next/navigation';
import { db } from '@/db';

export default function SnippetCreatePage() {
  async function createSnippet(data: FormData) {
    'use server';
    const title = data.get('title') as string;
    const code = data.get('code') as string;

    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log(snippet);
    redirect(`/`);
  }
  //   return (
  //     <form action={createSnippet} className="max-w-xl mx-auto my-8">
  //       <h3 className="font-bold m-3">Create a Snippet</h3>
  //       <div className="flex flex-col gap-4">
  //         <div className="flex gap-4">
  //           <label className="w-12" htmlFor="title">
  //             title
  //           </label>
  //           <input name="title" className="border rounded p-2 w-full" id="title" />
  //         </div>

  //         <div className="flex gap-4">
  //           <label className="w-12" htmlFor="code">
  //             Code
  //           </label>
  //           <textarea name="code" className="border rounded p-2 w-full" id="code" />
  //         </div>

  //         <button type="submit" className="rounded p-2 bg-blue-200">
  //           Create
  //         </button>
  //       </div>
  //     </form>
  //   );
  // }

  return (
    <form
      action={createSnippet}
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4"
    >
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Create Snippet</h1>

        <div role="form" aria-label="Create code snippet form">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title{' '}
              <span className="text-red-600" aria-label="required">
                *
              </span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              aria-required="true"
              placeholder="e.g., React useEffect Hook"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${'border-gray-300'}`}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-2">
              Code{' '}
              <span className="text-red-600" aria-label="required">
                *
              </span>
            </label>
            <textarea
              id="code"
              name="code"
              aria-required="true"
              placeholder="Paste your code here..."
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm ${'border-gray-300'}`}
            />
          </div>

          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            aria-label="Create snippet"
          >
            Create Snippet
          </button>
        </div>
      </div>
    </form>
  );
}
