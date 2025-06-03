import { Share2, Trash2 } from "lucide-react";
import Tag from "./Tag";
import type React from "react";

const Card = ({ title, content }: { title: string; content: React.ReactNode }) => {
  return (
    <div className="bg-white w-2xs rounded-2xl h-80 border-2 border-primary overflow-hidden p-2">
      {/* Topbar */}
      <div className="opacity-60 flex justify-evenly shadow-amber-950">
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3"
        >
          <title>X</title>
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>

        <div>{title}</div>

        <Share2 />
        <Trash2 />
      </div>

      {/* Thumbnail or Details wrapped */}
      <div className="my-2 overflow-scroll h-[56%]">
        {content}
      </div>

      {/* tags */}
      <div className="flex">
        <Tag name="productivity" />
        <Tag name="learning" />
      </div>

      {/* date of creation of card */}
      <div className="text-gray-300 text-[12px]">Added on 10/03/2024</div>
    </div>
  );
};

export default Card;
