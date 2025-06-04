import { Share2, Trash2 } from "lucide-react";
import Tag from "./Tag";
import TwitterIcon from "../assets/icons/TwitterIcon";
import YoutubeIcon from "../assets/icons/YoutubeIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

const Card = ({ title, link, type }: CardProps) => {
  return (
    <div className="bg-white w-2xs rounded-2xl h-80 border-2 border-primary overflow-hidden p-2">
      {/* Topbar */}
      <div className="opacity-60 flex justify-evenly shadow-amber-950">
        {type === "twitter" && (<TwitterIcon />)}
        {type === "youtube" && (<YoutubeIcon />)}

        <div>{title}</div>

        <div>
          <a href={link} target="_blank">
            <Share2 />
          </a>
        </div>
        <Trash2 />
      </div>

      {/* Thumbnail or Details wrapped */}
      <div className="my-2 overflow-scroll h-[56%]">
        {type === "youtube" && (
          <iframe
            width={260}
            src={link.replace("youtu.be", "www.youtube.com/embed")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
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
