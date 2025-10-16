'use server';
import { db } from '@/db';
import { redirect } from 'next/navigation';

export const editSnippet = async ({ id, code }: { id: string; code: string }) => {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  return redirect(`/snippets/${id}`);
};

export const deleteSnippet = async ({ id }: { id: string }) => {
  await db.snippet.delete({
    where: { id },
  });
  return redirect(`/`);
};
