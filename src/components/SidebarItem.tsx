import React from "react";

const SidebarItem = ({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactElement;
}) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all delay-10 pl-3 font-semibold font-mono text-pink-700/45 text-2xl rounded-2xl">
      <div className="pt-0.5 text-pink-700/45">{icon}</div> {text}
    </div>
  );
};

export default SidebarItem;