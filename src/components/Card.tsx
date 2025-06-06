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
    <div className="bg-white w-2xs rounded-2xl h-80 border-2 border-primary overflow-hidden p-3">
      {/* Topbar */}
      <div className="opacity-60 flex justify-between shadow-amber-950 items-center px-2">
        <div className="flex gap-2 items-center">
          <div>
            {type === "twitter" && <TwitterIcon />}
            {type === "youtube" && <YoutubeIcon />}
          </div>

          <div>{title}</div>
        </div>

        <div className="flex gap-2 items-center">
          <div>
            <a href={link} target="_blank">
              <Share2 width={20} />
            </a>
          </div>
          <Trash2 width={20} />
        </div>
      </div>

      {/* Thumbnail or Details wrapped */}
      <div className="my-2 overflow-scroll overflow-x-hidden min-h-[56%] max-h-[70%]">
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

      <div>
        {/* tags */}
        <div className="flex gap-1">
          <Tag name="productivity" />
          <Tag name="learning" />
        </div>

        {/* date of creation of card */}
        <div className="text-gray-400/70 text-[12px]">Added on 10/03/2024</div>
      </div>
    </div>
  );
};

export default Card;
