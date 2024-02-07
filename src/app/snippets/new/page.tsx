"use client";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
export default function SnippetCreatePAge() {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });
  return (
    <form action={action} className="flex flex-col gap-2">
      <div className="w-full flex bg-violet-900 justify-center text-slate-200 text-2xl">
        <h3 className="font-bold m-3">Create a Snippet</h3>
      </div>
      <div className="flex flex-col gap-4 p-8">
        <div className="flex gap-4 justify-center items-center">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input name="title" className="rounded p-2 w-full" id="title" />
        </div>
        <div className="flex gap-4 items-center">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <textarea name="code" className="rounded p-2 w-full" id="code" />
        </div>
        <div className="flex justify-center" >
          <button
            type="submit"
            className="btn btn-neutral w-fit bg-green-700 hover:bg-green-800 text-slate-200"
          >
            Create
          </button>
        </div>
      </div>
    </form>
  );
}
