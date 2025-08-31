"use client";

import { HomeCard } from "@repo/ui/index";

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 17L17 7M17 7H9M17 7v8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ShellHome() {
  return (
    <main>
      <section className="py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Seja Bem-vindo(a) ao Blog Tech!
          </h1>
          <p className="mt-3 max-w-prose text-brand-50">
            Artigos sobre tecnologia, frontend, arquitetura de software e boas
            práticas para quem busca escrever código mais escalável e de
            qualidade.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <HomeCard
              href="/blog"
              title="Blog"
              description="Artigos, guias e exemplos práticos."
              icon={<ArrowIcon />}
            >
              <div
                className="inline-flex items-center gap-2 rounded-full border border-brand-50
                 bg-indigo-50/70  px-3 py-1 text-xs font-medium text-indigo-700"
              >
                /blog
              </div>
            </HomeCard>

            <HomeCard
              href="/admin-panel"
              title="Admin Panel"
              description="Gerencie posts e configurações."
              icon={<ArrowIcon />}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-50/70 px-3 py-1 text-xs font-medium text-emerald-700">
                /admin-panel
              </div>
            </HomeCard>
          </div>
        </div>
      </section>
    </main>
  );
}
