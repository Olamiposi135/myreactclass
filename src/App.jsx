import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import RegisterPage from "./pages/RegisterPage";
import Products from "./pages/Products";
import User from "./pages/User";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/reg" element={<RegisterPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default App;
