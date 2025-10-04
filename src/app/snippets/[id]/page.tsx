import { db } from '@/db';
import ShowSnippet from '@/components/ShowSnippet';

export default async function page({ params }: { params: { id: string } }) {
  const snippet = await db.snippet.findUnique({
    where: { id: params.id },
  });

  if (!snippet) {
    return <div>Snippet not found</div>;
  }
  return <ShowSnippet snippet={snippet} />;
}
