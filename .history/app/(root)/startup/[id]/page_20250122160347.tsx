import React from "react";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return <>
    <h1 className=""></h1>
  </>;
};

export default Page;
