import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import Sidebar, { SidebarItem } from "./components/sidebar";
import { useState } from "react";
import Dashboard from "./components/dashboard";
import HomePage from "./components/homepage";
import MapView from "./components/mapview";
import About from "./components/about";

function App() {
  const [items, setItems] = useState([
    { icon: <Home size={20} />, 
      text: "Home", 
      alert: true, 
      active: false },
    {
      icon: <StickyNote size={20} />,
      text: "About",
      alert: true,
      active: false,
    },
    {
      icon: <LayoutDashboard size={20} />,
      text: "Dashboards",
      alert: false,
      active: false,
    },
    {
      icon: <MapPinCheck size={20} />,
      text: "Map View",
      alert: false,
      active: false,
    },
    {
      icon: <TriangleAlert size={20} />,
      text: "Alerts",
      alert: false,
      active: false,
    },
    { icon: <LogOut size={20} />, 
      text: "Logout", 
      alert: false, 
      active: false },
    {
      icon: <Settings size={20} />,
      text: "Settings",
      alert: false,
      active: false,
    },
    { icon: <LifeBuoy size={20} />, 
      text: "Help", 
      alert: false, 
      active: false },
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
    <div className="flex">
      <Router>
        <Sidebar>
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
        </Sidebar>
        <div>
          <Routes>
            <Route path="/" exact element={<MapView />} />
            <Route path="/homepage" exact element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
