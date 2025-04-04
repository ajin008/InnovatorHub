import React from "react";
import {client} form '@/sanity/lib/client'

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const post = await client()

  return (
    <>
      <h1 className="text-3xl"> this is startup number:{id}</h1>
    </>
  );
};

export default Page;
