import { db } from '@/db';
import ShowSnippet from '@/components/ShowSnippet';
import SnippetNotFound from '../../not-found';

export default async function page({ params }: { params: { id: string } }) {
  const snippet = await db.snippet.findUnique({
    where: { id: params.id },
  });

  if (!snippet) {
    return <SnippetNotFound />;
  }

  return <ShowSnippet snippet={snippet} />;
}
