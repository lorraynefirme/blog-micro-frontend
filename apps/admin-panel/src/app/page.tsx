"use client";

import { PostCard, PostCreateForm } from "@repo/ui/index";

export default function Home() {
  const postMock = {
    id: "1",
    slug: "first-post",
    title: "Meu primeiro post",
    content: "Este é o conteúdo do meu primeiro post no blog.",
    author: "Lorrayne",
    tags: ["next", "react", "blog"],
    createdAt: Date.now(),
  };
  return (
    <div className="flex flex-row gap-4 px-10 max-w-full">
      <div className="max-w-md">
        <PostCreateForm />
      </div>
      <PostCard post={postMock} />
    </div>
  );
}
