import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");
    try {
      const res = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessageType("error");
        setMessage(data.errors.map(err => err.msg));
        return;
      }
      setMessage('Signup successful!');
      setMessageType("success");
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setMessage(`Signup failed. Please try again: ${err}`);
      setMessageType("error");
    }
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
          <h2 className="form-title text-yellow">Create a new account, and benefit from out service!</h2>
          <form onSubmit={handleSubmit}>
            <label className="text-light-gray" >Email</label>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label className="text-light-gray" >Username</label>
            <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />

            <label className="text-light-gray" >Password</label>
            <input type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />

            <button className="submit-button" type="submit" value="login">Create new account</button>
          </form>
          <p>
            Already have an account?{" "}
            <span onClick={() => navigate("/signup")} style={{ color: "blue", cursor: "pointer" }}>
              Log in
            </span>
          </p>
          <hr />
          {message && (
            <div
              style={{
                marginTop: "20px",
                padding: "10px",
                borderRadius: "8px",
                fontWeight: "bold",
                color: messageType === "error" ? "#B00020" : "#0F5132",
                backgroundColor: messageType === "error" ? "#F8D7DA" : "#D1E7DD",
                border: `1px solid ${messageType === "error" ? "#F5C2C7" : "#BADBCC"}`,
              }}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
