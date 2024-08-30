import { LayoutDashboard, Home, StickyNote, TriangleAlert, LogOut, MapPinCheck, LifeBuoy, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/sidebar"

function App() {

  return (
    <>
      <div className="flex">
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Home" alert />
          <SidebarItem icon={<StickyNote size={20} />} text="About" alert />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboards" active />
          <SidebarItem icon={<MapPinCheck size={20} />} text="Map View" />
          <SidebarItem icon={<TriangleAlert size={20} />} text="Alerts" />
          <SidebarItem icon={<LogOut size={20} />} text="Logout" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>
      </div>
    </>
  )
}

export default App
