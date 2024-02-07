"use client";
import Editor from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";
import * as actions from "@/actions";
interface SnippetEditFormProps {
  snippet: Snippet;
}
export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);
  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };
  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);
  return (
    <div className="justify-center items-start m-4 h-full">
      <div className="flex justify-between items-center p-4 bg-violet-800 hover:bg-violet-900 rounded">
        <div className="text-slate-200 font-bold">{snippet.title}</div>
        <form action={editSnippetAction}>
          <button
            type="submit"
            className="btn btn-neutral btn-success text-slate-200"
          >
            Save
          </button>
        </form>
      </div>
      <div>
        <Editor
          theme="vs-dark"
          height='50vh'
          language="javascript"
          defaultValue={snippet.code}
          options={{
            minimap: { enabled: false },
            automaticLayout: true,
          }}
          onChange={handleEditorChange}
        />
      </div>
    </div>
  );
}
