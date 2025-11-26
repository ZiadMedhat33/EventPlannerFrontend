import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Pages/LogIn/login";
import Signup from "./Pages/SignUp/signup";
import Nav from "./Components/Header/Nav";
import Home from "./Pages/Home/home";
import ProtectedRoute from "./Context/ProtectedRoute";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ProtectedRoute>
        <Routes>
          <Route path="/" element={<Home />} />  
        </Routes>
      </ProtectedRoute>
    </>
  );
}

export default App;
