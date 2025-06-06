import TwitterIcon from "../assets/icons/TwitterIcon";
import YoutubeIcon from "../assets/icons/YoutubeIcon";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="h-screen w-65 bg-white border-r-2 border-r-primary fixed left-0 top-0 p-5">
      <div className="flex gap-5 items-center border-b-1 border-b-primary/20  pb-3">
        <img
          src="/logo.svg"
          alt="Braineely Logo"
          width={60}
          className="bg-primary rounded-full pr-1 py-1"
        />{" "}
        <h1 className="text-3xl font-bagel-fat-one">Braineely</h1>
      </div>

      <div className="pt-4 flex flex-col gap-1">
        <SidebarItem text="Twitter" icon={<TwitterIcon />} />
        <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
      </div>
    </div>
  );
};

export default Sidebar;
