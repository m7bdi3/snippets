import { db } from "@/db";
import Link from "next/link";
import * as actions from "@/actions";
export default async function SnippetView() {
  const snippets = await db.snippet.findMany();
  const renderSnippets = snippets.map((snippet) => {
    const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);
    return (
      <div
        key={snippet.id}
        tabIndex={0}
        className="collapse collapse-arrow bg-violet-900 hover:bg-violet-800 p-1 rounded w-96 grid"
      >
        <input type="checkbox" />
        <div className="collapse-title flex justify-center text-xl font-medium text-slate-200">
          <div className="flex justify-center items-center">
            <div>{snippet.title}</div>
          </div>
        </div>
        <div className="collapse-content">
          <p className="text-slate-200 break-words w-80">{snippet.code}</p>
          <div className="flex gap-2 justify-center items-center mt-3">
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
      </div>
    );
  });
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col  items-center justify-center gap-2 rounded min-w-min max-w-3xl">
        <div className="flex self-start">
          <h3 className="text-slate-200 font-bold">Last Snippets</h3>
        </div>
        {renderSnippets}
      </div>
    </div>
  );
}
