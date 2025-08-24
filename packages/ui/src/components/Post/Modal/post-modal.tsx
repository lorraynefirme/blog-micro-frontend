"use client";

import { CalendarClock, Tag, User } from "lucide-react";
import { useState } from "react";

export interface Post {
  id: string;
  slug: string;
  title: string;
  content: string;
  author?: string;
  tags: string[];
  createdAt: number; // epoch
}

export const fmtDate = (ts: number) =>
  new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(ts);

export const PostModal = () => {
  const [selected, setSelected] = useState<Post | null>(null);

  return (
    <div>
      {selected && (
        <div className="fixed inset-0 z-20 grid place-items-center p-4">
          <button
            aria-label="Fechar"
            onClick={() => setSelected(null)}
            className="absolute inset-0 bg-black/60"
          />
          <article className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-slate-950 text-slate-100 overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{selected.title}</h3>
              <div className="mt-1 text-xs text-slate-400 flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <User className="size-3.5" /> {selected.author ?? "Anônimo"}
                </span>
                <span className="inline-flex items-center gap-1">
                  <CalendarClock className="size-3.5" />{" "}
                  {fmtDate(selected.createdAt)}
                </span>
              </div>
              <div className="prose prose-invert mt-4 whitespace-pre-wrap">
                {selected.content}
              </div>
              {selected.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {selected.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-xs bg-slate-900/60 border border-white/10 inline-flex items-center gap-1"
                    >
                      <Tag className="size-3" />
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
                >
                  Fechar
                </button>
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  );
};
