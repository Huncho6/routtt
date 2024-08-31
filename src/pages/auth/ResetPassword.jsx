import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const navigate = useNavigate();
  const [resetToken, setResetToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://school-app-os8e.onrender.com/api/v1/auth/reset-password/student",
        {
          resetToken,
          newPassword,
        }
      );
      setMessage(response.data.message);
      navigate("/auth/login"); 
    } catch (error) {
      setMessage(error.response.data.message || "An error occurred.");
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={resetToken}
          onChange={(e) => setResetToken(e.target.value)}
          placeholder="Enter your reset token"
          required
        />
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter your new password"
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
