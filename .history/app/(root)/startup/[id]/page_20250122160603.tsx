import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return (
    <>
      <h1 className="text-3xl"> this is startup number:{id}</h1>
    </>
  );
};

export default Page;
