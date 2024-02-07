import SnippetView from "@/components/SnippetView";
import CreateHomeNew from "@/components/CreateNew";
export default async function Home() {
  return (
    <div>
      <CreateHomeNew />
      <SnippetView />
    </div>
  );
}
