import React from "react";
import Ping from "./Ping";

const view = ({ id }: { id: string }) => {
  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
    </div>
  );
};

export default view;
