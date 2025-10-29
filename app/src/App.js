import { Routes, Route, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Login from "./Components/Auth/login";
import Signup from "./Components/Auth/signup";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/home";
import { MyContext } from './Components/Auth/context';


function App() {
  const { value } = useContext(MyContext);
  const navigate = useNavigate();
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
