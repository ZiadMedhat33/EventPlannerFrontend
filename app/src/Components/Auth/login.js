import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import './style.css'
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:4000/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();
            if (!res.ok) {
                setMessage(data.error || "Login failed. Please try again.");
                setMessageType("error");
                return;
            }
            const { accessToken, refreshToken } = data;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            console.log(accessToken);
            if (accessToken) {
                const decoded = jwtDecode(accessToken);
                console.log(decoded.username, decoded.role)
                alert(decoded.username + " " + decoded.role);
            }
            setMessage("Login successful!");
            navigate("/");
        } catch (error) {
            console.error("Login error:", error);
            setMessage("Something went wrong. Try again.");
        }
    };
    return (
        <>
            <div className="form login">
                <h2 className="form-title text-yellow">Account Login</h2>
                <form onSubmit={handleSubmit}>
                    <label className="text-light-gray" for="TB_Email">Email</label>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label className="text-light-gray" for="TB_password">Password</label>
                    <input type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />

                    <button type="submit" value="login">Login to your Account!</button>
                </form>
                <p>
                    Don’t have an account?{" "}
                    <span onClick={() => navigate("/signup")} style={{ color: "blue", cursor: "pointer" }}>
                        Sign Up
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
        </>
    );
}
