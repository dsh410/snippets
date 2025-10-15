'use server';
import { db } from '@/db';

export const editSnippet = async ({ id, code }: { id: string; code: string }) => {
  console.log('id:', id, 'code:', code);
};
