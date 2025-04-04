import React, { useEffect } from "react";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";

const View = ({ id }: { id: string }) => {
  const [totalViews, setTotalViews] = React.useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const { views: fetchedViews } = await client
        .withConfig({ useCdn: false })
        .fetch(STARTUP_VIEWS_QUERY, { id });

      setTotalViews(fetchedViews);

      // Increment the views count
      await writeClient
        .patch(id)
        .set({ views: fetchedViews + 1 })
        .commit();
    };

    fetchData();
  }, [id]);

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

export default View;
