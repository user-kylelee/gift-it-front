import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/form.scss";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/user/login", {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/");
      }
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className="form">
      <div className="container">
        <div className="form__container">
          <form onSubmit={handleSubmit}>
            <h1 className="form__heading">Sign In</h1>
            <div className="form__item">
              <p>
                <label htmlFor="email">Email</label>
              </p>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form__item">
              <p>
                <label htmlFor="password">Password</label>
              </p>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form__item">
              <p className="form__link">
                <a href="#">Forgot Password?</a>
              </p>
              <button type="submit" className="form__btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
