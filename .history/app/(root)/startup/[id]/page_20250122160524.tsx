import React from "react";

const Page = as ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return (
    <>
      <h1 className="text-3xl"> this is startup number</h1>
    </>
  );
};

export default Page;
