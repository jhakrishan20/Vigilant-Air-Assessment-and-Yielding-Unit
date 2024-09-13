import { 
  createContext, 
  useContext, 
  useState, 
  useEffect 
} from "react";
import {
  ChevronFirst, 
  ChevronLast, 
  LayoutDashboard,
  Home,
  StickyNote,
  TriangleAlert,
  LogOut,
  MapPinCheck,
  Settings,
} from "lucide-react";
import Logo from "../assets/LOGO.png";
import { useNavigate } from "react-router-dom";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(() => {
    const savedState = localStorage.getItem("sidebar-expanded");
    return savedState ? JSON.parse(savedState) : false;
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", JSON.stringify(expanded));
  }, [expanded]);

  return (
    <>
      <aside
        className="bg-white border-r shadow-sm"
        style={{
          width: expanded ? "180px" : "60px",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          zIndex: 1000,
        }}
      >
        <nav
          className="h-full flex flex-col bg-white border-r shadow-sm"
          style={{ width: expanded ? "180px" : "60px" }}
        >
          <div
            className={`p-4 pb-2 flex items-center ${
              expanded ? "justify-between" : "flex-col justify-center"
            }`}
          >
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className={`p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all ${
                expanded ? "self-start" : "mb-4"
              }`}
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
            <img
              src={Logo}
              className={`transition-all ${expanded ? "w-24" : "w-8 mt-4"}`}
            />
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>

          <div className="flex flex-col mt-auto p-3">
            {expanded && (
              <button
                onClick={() => console.log("Logging out...")}
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                aria-label="Logout"
              >
                <LogOut size={20} className="mr-2" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem({ icon, text, active, onClick, path, noNavigate }) {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (!noNavigate) navigate(path);
  };

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-200 hover:text-indigo-600 text-gray-600"
      }`}
      onClick={handleClick}
    >
      <span
        className={`mr-2 ${expanded ? "text-2xl" : "text-xl"}`}
        style={{ color: "#115e59" }}
      >
        {icon}
      </span>
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-40 ml-2" : "w-0"
        }`}
      >
        {text}
      </span>

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
      noNavigate: false,
    },
    {
      icon: <StickyNote size={20} />,
      text: "About",
      alert: true,
      active: false,
      path: "/about",
      noNavigate: false,
    },
    {
      icon: <LayoutDashboard size={20} />,
      text: "Dashboards",
      alert: false,
      active: false,
      path: "/dashboard",
      noNavigate: false,
    },
    {
      icon: <MapPinCheck size={20} />,
      text: "Map View",
      alert: false,
      active: false,
      path: "/mapview",
      noNavigate: true, 
    },
    {
      icon: <TriangleAlert size={20} />,
      text: "Alerts",
      alert: false,
      active: false,
      path: "/alerts",
      noNavigate: true,
    },
    {
      icon: <Settings size={20} />,
      text: "Settings",
      alert: false,
      active: false,
      path: "/settings",
      noNavigate: true,
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
          path={item.path}
          noNavigate={item.noNavigate}
        />
      ))}
    </>
  );
}