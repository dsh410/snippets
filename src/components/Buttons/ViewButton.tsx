'use client';
import Link from 'next/link';

export default function ViewButton({ id }: { id: string }) {
  return (
    <Link
      href={`/snippets/${id}`}
      className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
    >
      View
    </Link>
  );
}
