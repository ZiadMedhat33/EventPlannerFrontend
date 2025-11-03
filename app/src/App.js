import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Pages/LogIn/login";
import Signup from "./Pages/SignUp/signup";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/home";


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
