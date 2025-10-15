import { db } from '@/db';
import ShowSnippet from '@/components/ShowSnippet';
import SnippetNotFound from '../../not-found';

export default async function page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = await params.id;
  const snippet = await db.snippet.findUnique({
    where: { id },
  });

  if (!snippet) {
    return <SnippetNotFound />;
  }

  return <ShowSnippet snippet={snippet} />;
}
