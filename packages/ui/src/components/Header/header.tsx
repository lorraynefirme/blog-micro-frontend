"use client";
import { Shield } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  shellOrigin?: string;
  blog: {
    url: string;
    hasPrefetch: boolean;
  };
  admin: {
    url: string;
    hasPrefetch: boolean;
  };
}

export const Header = (headerProps: HeaderProps) => {
  const [tab, setTab] = useState<"blog" | "admin">("blog");

  return (
    <header className="top-0 flex items-center justify-between px-11 py-1">
      <div className="flex items-center gap-3 py-4">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500"
          />
          <strong className="tracking-tight">Blog • Tech</strong>
        </div>
      </div>

      <nav className="w-lg flex items-center justify-between gap-4 rounded-xl border border-white/10  p-1">
        <a
          href={headerProps.shellOrigin ?? "/"}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
            tab === "blog"
              ? "bg-white/10 text-white"
              : "text-slate-300 hover:text-white hover:bg-white/5"
          }`}
        >
          Home
        </a>

        <div className="flex items-center gap-2">
          <a
            href={headerProps.blog.url}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
              tab === "blog"
                ? "bg-white/10 text-white"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            Posts
          </a>
          <a
            href={headerProps.admin.url}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
              tab === "blog"
                ? "bg-white/10 text-white"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <Shield className="inline size-4 mr-1 align-[-2px]" /> Admin
          </a>
        </div>
      </nav>
    </header>
  );
};
