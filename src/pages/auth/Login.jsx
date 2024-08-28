import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import companyName from "../../assets/images/companyNameLogo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { storeToLocalStorage } from "../../utils/index";

const Wrapper = styled.div`
  background-color: #fff;
  margin: 20px 40px;
  flex: 1;

  .logoContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .logoImgWrapper {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notify = (msg) => toast(msg);
  const { userData, setUserData } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://student-app-3baw.onrender.com/api/v1/auth/login/student",
        {
          email: email,
          password: password,
        }
      );
      if (res.data.status === "success") {
        notify("Login successful");
        storeToLocalStorage("userData", res.data.data);
        setUserData(res.data.data);
        navigate("/");
      }
      console.log("res", res);
    } catch (error) {
      notify("Login failed");
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <div className="logoContainer">
        <div className="logoImgWrapper">
          <img src={logo} alt="" />
          <img src={companyName} alt="" />
        </div>
        <div>Dark mode</div>
      </div>
      <div>
        <button onClick={() => navigate("/auth/register")}>Sign up</button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign in</button>
        </form>
      </div>

      <ToastContainer />
    </Wrapper>
  );
};

export default Login;
