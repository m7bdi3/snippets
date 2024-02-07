import { notFound } from "next/navigation";
import { db } from "@/db";
import Link from "next/link";
import * as actions from "@/actions";
interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);
  return (
    <div className="justify-center">
      <div className="flex p-4 rounded justify-between  items-center bg-violet-800 m-4">
        <h1 className="text-xl font-bold text-slate-200">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="btn btn-neutral text-slate-200"
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="btn btn-neutral bg-red-500 hover:bg-red-800 text-slate-200">
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className="p-4 m-4 rounded bg-neutral text-slate-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString(),
    };
  });
}
