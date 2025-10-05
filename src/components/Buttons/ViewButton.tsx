'use client';
import { redirect } from 'next/navigation';
import React from 'react';

export default function ViewButton({ id }: { id: string }) {
  return (
    <button
      onClick={() => redirect(`/snippets/${id}`)}
      className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
    >
      View
    </button>
  );
}
