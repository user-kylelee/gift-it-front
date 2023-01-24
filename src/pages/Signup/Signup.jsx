import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/form.scss";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/signup",
        {
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: password,
        }
      );
      if (response.status === 200) {
        localStorage.set("user", JSON.stringify(response.data));
        navigate("/");
      }
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className="form">
      <div className=" container">
        <div className="form__container">
          <form onSubmit={handleSubmit}>
            <h1 className="form__heading">Sign Up</h1>
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
            <div className="form__items">
              <div className="form__item">
                <p>
                  <label htmlFor="firstName">First Name</label>
                </p>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form__item">
                <p>
                  <label htmlFor="lastName">Last Name</label>
                </p>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
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
              <p>
                <label htmlFor="password2">Confirm Password</label>
              </p>
              <input
                type="password"
                name="password2"
                id="password2"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
            </div>
            <div className="form__item">
              <p className="form__link">
                <a href="#">Already have an account?</a>
              </p>
              <button type="submit" className="form__btn">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
