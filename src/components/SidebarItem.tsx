import React from "react";

const SidebarItem = ({text, icon}: {
  text: string;
  icon: React.ReactElement;
}) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-200 transition-all delay-100">
      {icon} {text}
    </div>
  )
}

export default SidebarItem