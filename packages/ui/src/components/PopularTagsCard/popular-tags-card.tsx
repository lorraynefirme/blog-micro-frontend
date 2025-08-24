import { Tag } from "lucide-react";

export const PopularTagsCard = () => {
  const tagsList = {
    tags: [
      ["react", 10],
      ["microfrontend", 2],
      ["javascript", 5],
    ],
  };

  return (
    <aside className="rounded-xl border border-white/10 bg-brand-300/80 p-4">
      <h2 className="text-sm font-semibold mb-3">Tags populares</h2>
      <ul className="flex flex-wrap gap-2">
        {tagsList.tags.length === 0 && (
          <li className="text-slate-400 text-sm">Sem tags ainda</li>
        )}
        {tagsList.tags.map(([tag, count]) => (
          <li
            key={tag}
            className="px-2 py-1 rounded-lg bg-brand-900/75 border-white/10 text-xs inline-flex items-center gap-1"
          >
            <Tag className="size-3.5" /> {tag}
            <span className="opacity-70">({count})</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};
