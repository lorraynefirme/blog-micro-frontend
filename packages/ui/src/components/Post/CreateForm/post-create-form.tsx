"use client";

import { Plus, Shield } from "lucide-react";

export const PostCreateForm = () => {
  return (
    <section className="rounded-2xl border border-white/10 bg-brand-200/20  p-5">
      <h2 className="text-sm font-semibold flex items-center gap-2">
        <Shield className="size-4" /> Área Administrativa
      </h2>
      <p className="text-xs text-slate-400 mt-1">Cadastre novos posts.</p>

      <form onSubmit={() => {}} className="mt-4 space-y-3">
        <label className="block text-sm">
          <span className="text-slate-200">Título</span>
          <input
            //value={title}
            // onChange={}
            className="mt-1 w-full h-10 px-3 rounded-lg bg-brand-600/70 text-slate-100 border border-white/10 focus:border-brand-300/60 focus:ring-4 focus:ring-indigo-500/10 outline-none"
            placeholder="Título do post"
            required
          />
        </label>
        <label className="block text-sm">
          <span className="text-slate-200">Autor (opcional)</span>
          <input
            //value={title}
            // onChange={}
            className="mt-1 w-full h-10 px-3 rounded-lg bg-brand-600/70 text-slate-100 border border-white/10 focus:border-brand-300/60 focus:ring-4 focus:ring-indigo-500/10 outline-none"
            placeholder="Seu nome"
          />
        </label>
        <label className="block text-sm">
          <span className="text-slate-200">Conteúdo</span>
          <textarea
            //value={title}
            // onChange={}
            rows={6}
            className="mt-1 w-full px-3 py-2 rounded-lg bg-brand-600/70 text-slate-100 border border-white/10 focus:border-brand-300/60 focus:ring-4 focus:ring-indigo-500/10 outline-none"
            placeholder="Escreva seu post aqui"
            required
          />
        </label>
        <label className="block text-sm">
          <span className="text-slate-200">Tags (separadas por vírgula)</span>
          <input
            //value={title}
            // onChange={}
            className="mt-1 w-full h-10 px-3 rounded-lg bg-brand-600/70 text-slate-100 border border-white/10 focus:border-brand-300/60 focus:ring-4 focus:ring-brand-300/10 outline-none"
            placeholder="nextjs, react, tailwind"
          />
        </label>
        <button
          type="submit"
          disabled={false}
          className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-brand-300/90 hover:bg-brand-300 text-white disabled:opacity-50"
        >
          <Plus className="size-4" /> Publicar
        </button>
      </form>
    </section>
  );
};
