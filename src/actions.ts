'use server'; // ← This marks ALL functions in this file as Server Actions

import { db } from '@/db';

// This function RUNS ON THE SERVER, not in the browser
export async function getSnippets() {
  // Prisma runs here (server-side, has Node.js)
  const snippets = await db.snippet.findMany();
  return snippets; // Data is serialized and sent to client
}

export async function getSnippetById(id: string) {
  // Prisma runs here (server-side, has Node.js)
  const snippet = await db.snippet.findUnique({
    where: { id },
  });
  return snippet; // Data is serialized and sent to client
}
