import { formatDate } from "@/lib/utils";
import React from "react";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(post._createdAt)}</p>

        <div className="flex gap:">

        </div>
      </div>
    </li>
  );
};

export default StartupCard;
