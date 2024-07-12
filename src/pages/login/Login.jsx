import "./login.scss";
import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { DarkModeContext } from "../../context/darkModeContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch: dispatchMode, darkMode } = useContext(DarkModeContext);

  const navitage = useNavigate();

  const { dispatch: dispatchAuth } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatchAuth({ type: "LOGIN", payload: user });
        navitage("/");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="login">
      <form data-testid="form" onSubmit={handleLogin}>
        <input id="email" type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
        <input id="password" type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" data-testid="submit">
          Login
        </button>
        <div className="item">{darkMode ? <LightModeOutlinedIcon className="icon" onClick={() => dispatchMode({ type: "TOGGLE" })} /> : <DarkModeOutlinedIcon className="icon" onClick={() => dispatchMode({ type: "TOGGLE" })} />}</div>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  );
};

export default Login;
