import React from "react";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return <>
    <h1 className="text-3xl" ></h1>
  </>;
};

export default Page;
