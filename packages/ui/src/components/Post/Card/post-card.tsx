"use client";
import { Tag, Trash2 } from "lucide-react";
import { fmtDate, Post } from "../Modal/post-modal";

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <div
      key={post.id}
      className="rounded-xl border border-white/10 bg-brand-200/20 p-4 w-full max-h-fit"
    >
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <h3 className="text-base font-semibold">{post.title}</h3>
          <p className="text-xs text-slate-400 mt-0.5">
            por {post.author ?? "Anônimo"} • {fmtDate(post.createdAt)}
          </p>
          <p className="text-sm mt-2 line-clamp-2 text-slate-200 whitespace-pre-wrap">
            {post.content}
          </p>
          {post.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {post.tags.map((t) => (
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
        </div>
        <div>
          <button
            className="p-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-rose-200"
            aria-label="Excluir post"
          >
            <Trash2 className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
