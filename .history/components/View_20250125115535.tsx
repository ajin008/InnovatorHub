import React from "react";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";

const view = async({ id }: { id: string }) => {

  const {views:totalViews} = await client.withConfig(newConfig:{})
  
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">Views: 100</span>
      </p>
    </div>
  );
};

export default view;
