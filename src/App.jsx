import { Route, Routes } from "react-router";
import "./App.css";

import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import RegisterPage from "./pages/RegisterPage";
import User from "./pages/User";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Loginpage />} />
    </Routes>
  );
}

export default App;
