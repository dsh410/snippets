import React from 'react';
import { db } from '@/db';
import { notFound } from 'next/navigation';
import SnippetEditForm from '@/components/snippetEditForm/page';

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const awaitedParams = await props.params;
  const id = awaitedParams.id;

  const snippet = await db.snippet.findFirst({
    where: {
      id: id,
    },
  });

  if (!snippet) {
    return notFound();
  }

  return <SnippetEditForm snippet={snippet} />;
}
