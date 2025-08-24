"use client";

export const LayoutBlog = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-brand-900 text-slate-100 min-h-screen w-screen">
      {children}
    </div>
  );
};
