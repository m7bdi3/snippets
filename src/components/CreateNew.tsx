"use client";
import * as actions from "@/actions";
import { useFormState } from "react-dom";

export default function CreateHomeNew() {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });
  return (
    <div className="flex w-full justify-center items-center mb-4">
      <form
        action={action}
        className=" bg-green-700 rounded w-96 p-4 flex flex-col mt-4 justify-center items-center"
      >
        <div className="flex justify-center ">
          <h2 className="text-slate-200 font-bold text-xl">
            Create New Snippet
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="">
            <input
              type="text"
              name="title"
              id="title"
              className="mt-2 input input-bordered w-full max-w-xs"
              placeholder="Function Title"
            />
          </div>
          <div className="">
            <textarea
              name="code"
              id="code"
              cols={80}
              rows={4}
              className="mt-2 textarea textarea-bordered w-96 max-w-xs col"
            ></textarea>
          </div>
        </div>
        <div>
          <button type="submit" className="btn rounded text-slate-200">Submit</button>
        </div> 
      </form>
    </div>
  );
}
