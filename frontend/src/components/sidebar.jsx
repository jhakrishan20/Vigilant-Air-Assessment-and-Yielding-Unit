import { 
    ChevronFirst, 
    ChevronLast, 
    MoreVertical 
} from "lucide-react";
import logo from "../assets/logo1.png";
import profile from "../assets/profile1.png";
import { 
    createContext, 
    useContext, 
    useState 
} from "react";
import {
  LayoutDashboard,
  Home,
  StickyNote,
  TriangleAlert,
  LogOut,
  MapPinCheck,
  LifeBuoy,
  Settings,
} from "lucide-react";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <aside className="bg-white border-r shadow-sm"
      style={{
        width: expanded ? "180px" : "60px",
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        zIndex: 1000,
      }}>
        <nav
          className="h-full flex flex-col bg-white border-r shadow-sm"
          style={{ width: expanded ? "180px" : "60px" }}
        >
          <div className="p-4 pb-2 flex justify-between items-center">
            <img
              src={logo}
              className={`overflow-hidden transition-all ${
                expanded ? "w-24" : "w-0"
              }`}
            />
            {/* <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button> */}
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>

          <div className="border-t flex p-3">
            <img src={profile} className="w-8 h-8 rounded-md" />
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expanded ? "w-40 ml-2" : "w-0"
              }`}
            >
              <div className="leading-4">
                <h4 className="font-semibold text-xs">skyGuardians</h4>
                <span className="text-xs text-gray-600">
                  skyGuardians@gmail.com
                </span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem({ icon, text, active, alert, onClick }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-200 hover:text-indigo-600 text-gray-600"
      }`}
      onClick={onClick}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-40 ml-2" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        ></div>
      )}

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}

export function SidebarMenu() {
  const [items, setItems] = useState([
    {
      icon: <Home size={20} />,
      text: "Home",
      alert: true,
      active: false,
      path: "/",
    },
    {
      icon: <StickyNote size={20} />,
      text: "About",
      alert: true,
      active: false,
      path: "/about",
    },
    {
      icon: <LayoutDashboard size={20} />,
      text: "Dashboards",
      alert: false,
      active: false,
      path: "/dashboard",
    },
    {
      icon: <MapPinCheck size={20} />,
      text: "Map View",
      alert: false,
      active: false,
      path: "/mapview",
    },
    {
      icon: <TriangleAlert size={20} />,
      text: "Alerts",
      alert: false,
      active: false,
      path: "/alerts",
    },
    {
      icon: <LogOut size={20} />,
      text: "Logout",
      alert: false,
      active: false,
      path: "/logout",
    },
    {
      icon: <Settings size={20} />,
      text: "Settings",
      alert: false,
      active: false,
      path: "/settings",
    },
    {
      icon: <LifeBuoy size={20} />,
      text: "Help",
      alert: false,
      active: false,
      path: "/help",
    },
  ]);

  const handleItemClick = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        active: i === index,
      }))
    );
  };

  return (
    <>
      {items.map((item, index) => (
        <SidebarItem
          key={index}
          icon={item.icon}
          text={item.text}
          alert={item.alert}
          active={item.active}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </>
  );
}
