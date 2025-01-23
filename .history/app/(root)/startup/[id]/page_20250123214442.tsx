import React from "react";
import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/lib/queries";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  console.log({ id });

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) return notFound();

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">{formatDate(post?.)}</p>
      </section>
      <h1 className="text-3xl">{post.title}</h1>
    </>
  );
};

export default Page;
