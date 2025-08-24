interface HomeCardProps {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}
export const HomeCard = ({
  href,
  title,
  description,
  icon,
  children,
}: HomeCardProps) => {
  return (
    <a
      href={href}
      className={
        "group rounded-2xl border border-zinc-200/70 bg-brand-300/80 backdrop-blur p-6 hover:shadow-xl transition-shadow"
      }
      aria-label="Ir para o Blog"
    >
      <div className="flex items-center justify-between">
        <div>
          {children}
          <h2 className="mt-3 text-xl font-bold">{title}</h2>
          <p className="mt-1 text-sm text-brand-500">{description}</p>
        </div>
        <div className="rounded-xl p-3 bg-brand-900">{icon}</div>
      </div>
    </a>
  );
};
