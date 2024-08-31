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

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    other_name: "",
    email: "",
    phone_number: "",
    age: "",
    role: "student",
    password: "",
  });

  const notify = (msg) => toast(msg);
  const { userData, setUserData } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post(
            "https://school-app-os8e.onrender.com/api/v1/auth/create-account/student",
            formData
        );
        if (res.data.status === "success") {
            notify("Account created successfully! Please verify your account.");
            storeToLocalStorage("userData", res.data.data);
            setUserData(res.data.data);
            navigate("/auth/verifyaccount"); // Navigate to the verification page
        }
        console.log("res", res);
    } catch (error) {
        // Improved error handling
        if (error.response) {
            console.log("Error data:", error.response.data);
            console.log("Error status:", error.response.status);
            console.log("Error headers:", error.response.headers);
        } else if (error.request) {
            console.log("Error request:", error.request);
        } else {
            console.log("Error message:", error.message);
        }
        notify("Sign-up failed. Please check the details and try again.");
    }
};


  return (
    <Wrapper>
      <div className="logoContainer">
        <div className="logoImgWrapper">
          <img src={logo} alt="Logo" />
          <img src={companyName} alt="Company Name" />
        </div>
        <div>Dark mode</div>
      </div>
      <div>
        <button onClick={() => navigate("/auth/login")}>Sign in</button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />

          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />

          <label htmlFor="other_name">Other Name</label>
          <input
            type="text"
            id="other_name"
            name="other_name"
            value={formData.other_name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="phone_number">Phone Number</label>
          <input
            type="text"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />

          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>

      <ToastContainer />
    </Wrapper>
  );
};

export default Register;
