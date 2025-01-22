import React from "react";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return ;
};

export default Page;
