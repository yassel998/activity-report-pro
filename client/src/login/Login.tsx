import axios from "axios";
import { useContext, useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { login } = useContext(AuthContext as AuthContextProps);

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(inputs);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/login", inputs, {
        withCredentials: true,
      });
      navigate("/");
    } catch (err) {
      setError((err as any).response?.data);
    }
  };

  return (
    <div className="login">
      <h1>Se connecter</h1>
      <form>
        <input
          required
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Mot de passe"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Connexion</button>
        {err && <p>{err}</p>}
        <span>Mot de passe oublié?</span>
      </form>
    </div>
  );
};
