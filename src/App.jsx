import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import RegisterPage from "./pages/RegisterPage";
import User from "./pages/User";
import Navbar2 from "./component/Navbar2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/reg" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
