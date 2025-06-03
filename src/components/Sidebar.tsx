import TwitterIcon from "../icons/TwitterIcon"
import YoutubeIcon from "../icons/YoutubeIcon"
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
  return (
    <div className="h-screen w-70 bg-white border-r fixed left-0 top-0">
      <h1 className="text-3xl ml-3">🥸 Brainly</h1>
      <div className="pt-4 pl-2">
        <SidebarItem text="Twitter" icon={<TwitterIcon />} />
        <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
      </div>
    </div>
  )
}

export default Sidebar