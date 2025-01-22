import React from "react";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  return <div>page</div>;
};

export default Page;
