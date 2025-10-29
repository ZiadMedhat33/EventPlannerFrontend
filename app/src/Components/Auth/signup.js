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
      <center>
      <table className="form-table" width={'100%'}>
        <tr width={'100%'}>
          <td width={'50%'} id="form-image"></td>
          <td width={'50%'}>
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
          </div>
        </td>
        </tr>
      </table>
      </center>
    </>
  );
}
