## Blog Tech Micro-frontends

```markdown
 🧩 Multi-Zone com Next.js (Micro-frontends)

Este monorepo implementa Multi-Zone no Next.js: um Shell (apps/web) que orquestra dois microfrontends independentes (Blog e Admin Panel) via middleware.

 📂 Estrutura

apps/
├─ web/ # Shell host
├─ blog/ # Microfrontend Blog (basePath: /blog)
└─ admin-panel/ # Microfrontend Admin (basePath: /admin-panel)
packages/
├─ ui/ # Design System compartilhado
└─ tailwind-config/
```

---

## 🔀 Como funciona

- Usuário acessa `https://shell.com/blog/...` ou `.../admin-panel/...`
- O **middleware do shell** reescreve a request para o microfrontend correto (`BLOG_ORIGIN` ou `ADMIN_ORIGIN`)
- O navegador mantém a URL no domínio do shell → **sem CORS e sem redirects**

---

## ⚙️ Configuração

### Shell (`apps/web/middleware.ts`)

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BLOG_ORIGIN = process.env.BLOG_ORIGIN || "http://localhost:3101";
const ADMIN_ORIGIN = process.env.ADMIN_ORIGIN || "http://localhost:3102";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/blog")) {
    const url = req.nextUrl.clone();

    url.href = `${BLOG_ORIGIN}${pathname}${req.nextUrl.search}`;
    return NextResponse.rewrite(url);
  }

  if (pathname.startsWith("/admin-panel")) {
    const url = req.nextUrl.clone();

    url.href = `${ADMIN_ORIGIN}${pathname}${req.nextUrl.search}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blog/:path*", "/admin-panel/:path*"],
};
```

### Blog (`apps/blog/next.config.ts`)

```ts
const nextConfig: NextConfig = {
  basePath: "/blog",
  transpilePackages: ["@repo/ui", "@repo/tailwind-config"],
};

export default nextConfig;
```

### Admin (`apps/admin-panel/next.config.ts`)

```ts
const nextConfig: NextConfig = {
  basePath: "/admin-panel",
  transpilePackages: ["@repo/ui", "@repo/tailwind-config"],
};

export default nextConfig;
```

## ✅ Benefícios

- **Navegação transparente**  
  O usuário acessa `/blog` e `/admin-panel` como se fossem parte de um único app, sem perceber que existem múltiplos projetos por trás.

- **Deploys independentes**  
  Cada microfrontend (blog e admin) pode ser publicado separadamente, sem precisar esperar o shell ou os outros apps — reduzindo tempo de entrega.

- **Reuso de código e design system**  
  Pacotes compartilhados (`ui`, `tailwind-config`) garantem consistência visual e aceleram o desenvolvimento entre times diferentes.

- **Escalabilidade de equipes**  
  Times podem trabalhar de forma isolada em cada microfrontend, com pipelines de CI/CD próprias, sem travar o fluxo dos outros.

- **Performance otimizada**  
  Como os assets são servidos no mesmo domínio do shell, o navegador reaproveita cache e mantém carregamento mais rápido.

---

## 🌐 Deploy

- Cada microfrontend é deployado separadamente (ex.: na Vercel):

- blog → https://blog-micro-frontend-blog.vercel.app/blog

- admin-panel → https://blog-micro-frontend-admin-panel.vercel.app/admin-panel

- web (shell) → https://blog-micro-frontend-web.vercel.app/

- O Shell orquestra todos via rewrites no middleware.ts.

---

## 📖 Referências

- [Next.js Multi Zones](https://nextjs.org/docs/app/building-your-application/deploying/multi-zones)
- [Middleware Rewrites](https://nextjs.org/docs/app/building-your-application/routing/middleware#rewrites)
