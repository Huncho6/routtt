import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  background-color: #fff;
  margin: 20px 40px;
  flex: 1;
`;

const VerifyAccount = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");

  const notify = (msg) => toast(msg);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCodeChange = (e) => {
    setConfirmationCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://school-app-os8e.onrender.com/api/v1/auth/verify-account/student",
        {
          email, // Include email in the request body
          confirmationCode, // Include confirmationCode in the request body
        }
      );

      if (res.data.status === "success") {
        notify("Account verified successfully!");
        navigate("/"); // Navigate to login page or home after successful verification
      } else {
        notify("Verification failed. Please try again.");
      }
      console.log("res", res);
    } catch (error) {
      notify("Verification failed. Please try again.");
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <h2>Verify Your Account</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="confirmationCode">Verification Code</label>
        <input
          type="text"
          id="confirmationCode"
          name="confirmationCode"
          value={confirmationCode}
          onChange={handleCodeChange}
        />

        <button className="" type="submit">Verify</button>
      </form>

      <ToastContainer />
    </Wrapper>
  );
};

export default VerifyAccount;
