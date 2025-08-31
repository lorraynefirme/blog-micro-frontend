"use client";

import { PopularTagsCard, PostCard } from "@repo/ui/index";
export default function BlogHome() {
  const postMock = {
    id: "1",
    slug: "first-post",
    title: "Meu primeiro post",
    content: "Este é o conteúdo do meu primeiro post no blog.",
    author: "Lorrayne",
    tags: ["next", "react", "blog"],
    createdAt: 1756068300,
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <div>
        <PopularTagsCard />
      </div>
      <div className="col-span-2 ">
        <PostCard post={postMock} />
      </div>
    </div>
  );
}
