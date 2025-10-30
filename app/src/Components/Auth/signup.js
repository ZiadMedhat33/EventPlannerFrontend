import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup:", { email, password });

        // fetch("http://localhost:3000/login", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ email, password }),
        // })
        // .then((res) => res.json())
        // .then((data) => console.log(data))
        // .catch((err) => console.error(err));

    };

  return (
    <>
    <div className="appointment-container">
      <div className="left-side">
        <div className="overlay"></div>
        <div className="doctor-info">
          <h1><strong>EventPlanner</strong></h1>
          <h2>Fast and easy.</h2>
          <p>Organize your events with us!</p>
        </div>
      </div>

      <div className="right-side">
        <h2 class="form-title text-yellow">Create a new account, and benefit from out service!</h2>
        <form onSubmit={handleSubmit}>
            <label class="text-light-gray" for="TB_Email">Email</label>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

            <label class="text-light-gray" for="TB_password">Password</label>
            <input type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>

            <button className="submit-button"  type="submit" value="login">Create new account</button>
        </form>
        <p>
        Already have an account?{" "}
        <span onClick={() => navigate("/signup")} style={{ color: "blue", cursor: "pointer" }}>
            Log in
        </span>
        </p>
        <hr/>
        <div id="alertBox"></div>
      </div>
    </div>
      {/* <div className="bg-image">
        <img src="/images/istockphoto-2014634732-612x612.jpg"></img>
      </div>
      <div class="form login">
        <h2 class="form-title text-yellow">Create a new account, and benefit from out service!</h2>
        <form onSubmit={handleSubmit}>
            <label class="text-light-gray" for="TB_Email">Email</label>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

            <label class="text-light-gray" for="TB_password">Password</label>
            <input type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>

            <button  type="submit" value="login">Create new account</button>
        </form>
        <p>
        Already have an account?{" "}
        <span onClick={() => navigate("/signup")} style={{ color: "blue", cursor: "pointer" }}>
            Log in
        </span>
        </p>
        <hr/>
        <div id="alertBox"></div>
      </div> */}
        
      
    </>
  );
}
