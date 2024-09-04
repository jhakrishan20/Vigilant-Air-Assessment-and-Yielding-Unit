import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar, { SidebarMenu } from "./components/sidebar";
import Dashboard from "./components/dashboard";
import HomePage from "./components/homepage";
import About from "./components/about";

function App() {
  return (
    <div className="flex">
      <Router>
      <Sidebar>
          <SidebarMenu />
        </Sidebar>
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;
