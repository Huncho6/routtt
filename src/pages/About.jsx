import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";

const Wrapper = styled.div`
  background-color: ${(props) => (props.theme === "dark" ? "#333" : "#fff")};
  color: ${(props) => (props.theme === "dark" ? "white" : "#333")};
  padding: 1rem 0;
`;

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper theme={theme}>
      <h1>About</h1>
    </Wrapper>
  );
};

export default About;
