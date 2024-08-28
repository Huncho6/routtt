import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import authImage from "../../assets/images/loginImage.svg";
import styled from "styled-components";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;

  .authImage {
    width: 945px;
    height: 1080px;
    left: 975px;
    gap: 0px;
    opacity: 0px;
    background: #00024c;
  }
`;

const Auth = () => {
  const { userData } = useContext(AuthContext);
  if (userData) {
    return <Navigate to="/" />;
  }

  return (
    <Wrapper>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/auth/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <div className="authImage">
        <img src={authImage} alt="" />
      </div>
    </Wrapper>
  );
};

export default Auth;
