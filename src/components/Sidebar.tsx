import TwitterIcon from "../assets/icons/TwitterIcon"
import YoutubeIcon from "../assets/icons/YoutubeIcon"
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
  return (
    <div className="h-screen w-70 bg-white border-r fixed left-0 top-0">
      <h1 className="text-3xl ml-3"><img src="/logo.svg" alt="Braineely Logo" width={60} className="bg-primary rounded-full pr-1 py-1" /> <div className="font-bagel-fat-one font-normal not-italic">Braineely</div></h1>
      <div className="pt-4 pl-2">
        <SidebarItem text="Twitter" icon={<TwitterIcon />} />
        <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
      </div>
    </div>
  )
}

export default Sidebar