import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/homepage/Home";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
