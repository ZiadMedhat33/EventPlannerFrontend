import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Pages/LogIn/login";
import Signup from "./Pages/SignUp/signup";
import Nav from "./Components/Header/Nav";
import Home from "./Pages/Home/home";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
