<<<<<<< HEAD
import React from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/lib/queries";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
=======
import React, { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";

import markdownit from "markdown-it";
import { Skeleton } from "@/components/ui/skeleton";
const md = markdownit();

import View from "@/components/View";
>>>>>>> recovered-branch

export const experimental_ppr = true;
import defaultAvatar from "../../../../public/default-avatar.jpg";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });
<<<<<<< HEAD
=======

  if (!post) return notFound();

  const parsedContent = md.render(post?.pitch || "");
>>>>>>> recovered-branch

  if (!post) return notFound();
  // console.log(`${post.author.image}`);
  console.log("data in post", post);
  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">{formatDate(post?._createdAt)}</p>
<<<<<<< HEAD
=======

>>>>>>> recovered-branch
        <h1 className="heading">{post.title}</h1>
        <p className="sub-heading !max-w-5xl">{post.description}</p>
      </section>

      <section className="section_container">
        <img
          src={post.image}
          alt="thumbnail"
          className="w-full h-auto rounded-xl"
        />

        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={post.author.image}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />
<<<<<<< HEAD
=======

>>>>>>> recovered-branch
              <div>
                <p className="text-20-medium">{post.author.name}</p>
                <p className="text-16-medium !text-black-300">
                  @{post.author.username}
                </p>
              </div>
            </Link>

            <p className="category-tag">{post.category}</p>
          </div>
<<<<<<< HEAD
          <h1 className="text-30-bold">Pitch Details</h1>
        </div>
=======
          <h3 className="text-30-bold">Pitch Details</h3>
          {parsedContent ? (
            <article
              className="prose max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="no-result">No details provided</p>
          )}
        </div>
        <hr className="divider" />

        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id={id} />
        </Suspense>
>>>>>>> recovered-branch
      </section>
    </>
  );
};

export default Page;
