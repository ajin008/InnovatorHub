import React from "react";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { unstable_after as after } from "next/server";

const view = async ({ id }: { id: string }) => {
  // Fetch the current views
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  // Increment the views count
  after()

  return (
    <div className="view-container ">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <div className="view-bg">
        <p className="view-text  ">
          <span className="font-black ">Views:{totalViews}</span>
        </p>
      </div>
    </div>
  );
};

export default view;
