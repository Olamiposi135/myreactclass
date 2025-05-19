import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import RegisterPage from "./pages/RegisterPage";
import Products from "./pages/Products";
import User from "./pages/User";

import PostPage from "./pages/PostPage";
import Navbar2 from "./component/Navbar2";
import { useState } from "react";
import { UserProvider } from "./context/UserContext";

function App() {
  const [firstName, setFirstName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  return (
    <>
      <UserProvider>
        <Navbar2 firstName={firstName} userEmail={userEmail} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/login"
            element={
              <Loginpage
                setFirstName={setFirstName}
                setUserEmail={setUserEmail}
              />
            }
          />
          <Route path="/reg" element={<RegisterPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/user" element={<User />} />
          <Route path="/posts" element={<PostPage />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
