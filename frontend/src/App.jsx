import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar, { SidebarMenu } from "./components/sidebar";
import Dashboard from "./components/dashboard";
import HomePage from "./components/homepage";
import About from "./components/about";
import LoginSignUp from "./components/login";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar>
          <SidebarMenu />
        </Sidebar>
        <main className="flex-1"> 
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/LoginSignUp" element={<LoginSignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
