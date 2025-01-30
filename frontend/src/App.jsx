import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebsiteLayout from "./components/WebsiteLayout";
import DashboardLayout from "./components/DashboardLayout";
import Huren from "./pages/Huren";
import Abonnementen from "./pages/Abonnnementen";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home"; // Zorg dat je een Home-pagina hebt

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="huren" element={<Huren />} />
          <Route path="abonnementen" element={<Abonnementen />} />
          <Route path="beheren" element={<DashboardLayout />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
