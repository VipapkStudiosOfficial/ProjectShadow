import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebsiteLayout from "./components/WebsiteLayout";
import Huren from "./pages/Huren";
import Abonnementen from "./pages/Abonnnementen";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import DashboardLayout from "./components/DashboardLayout";
import AccountSettings from "./pages/AccountSettings";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Website layout met standaardpagina's */}
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home />} />
          <Route path="huren" element={<Huren />} />
          <Route path="abonnementen" element={<Abonnementen />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* ✅ Beheren binnen WebsiteLayout zodat Navbar/Footer altijd zichtbaar zijn */}
        <Route path="/beheren" element={<WebsiteLayout />}>
          <Route path="" element={<DashboardLayout />}>
            <Route path="accountinstellingen" element={<AccountSettings />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
