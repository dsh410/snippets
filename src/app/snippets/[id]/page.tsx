import { db } from '@/db';

export default async function page({ params }: { params: { id: string } }) {
  const snippet = await db.snippet.findUnique({
    where: { id: params.id },
  });

  if (!snippet) {
    return <div>Snippet not found</div>;
  }

  return (
    <div>
      <h1>{snippet.title}</h1>
      <p>{snippet.code}</p>
    </div>
  );
}
