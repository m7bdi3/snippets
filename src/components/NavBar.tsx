import Link from "next/link";
export default function NavBar() {
  return (
    <div className="flex w-full sticky">
      <div className="navbar bg-base-100 shadow-grey-900 shadow-lg">
        <div className="flex-1">
          <Link href={"/"} className=" p-1 font-bold text-xl hover:text-violet-900">
            Snippet
          </Link>
        </div>
        <div>
          <Link
            href={"/snippets/new"}
            className="btn btn-neutral bg-violet-900 hover:bg-violet-800 text-slate-300"
          >
            New
          </Link>
        </div>
      </div>
    </div>
  );
}
