import React from "react";
import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY  } from ""

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const post = await client();

  return (
    <>
      <h1 className="text-3xl"> this is startup number:{id}</h1>
    </>
  );
};

export default Page;
