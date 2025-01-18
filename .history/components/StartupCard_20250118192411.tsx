import { formatDate } from "@/lib/utils";
import React from "react";
import { EyeIcon } from "lucide-react";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(post._createdAt)}</p>

        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{}</span>
        </div>
      </div>
    </li>
  );
};

export default StartupCard;
