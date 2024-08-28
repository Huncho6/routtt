import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TiShoppingCart } from "react-icons/ti";
import { MartContext } from "../context/MartContext";
import { AuthContext } from "../context/AuthContext";
//NavLink allows styling
//but Link doesn't allow styling

const Wrapper = styled.nav`
  background-color: ${(props) => (props.theme === "dark" ? "#333" : "#fff")};
  color: ${(props) => (props.theme === "dark" ? "white" : "#333")};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    justify-content: center;
    gap: 1rem;
    list-style: none;
  }

  a {
    color: ${(props) => (props.theme === "dark" ? "white" : "#333")};
    text-decoration: none;

    &:hover {
      border-bottom: 2px solid orange;
      rotate: 50deg;
      transition: 0.3s;
    }
  }

  .active {
    border-bottom: 2px solid orange;
    color: orange;
  }

  .dropdownContainer {
    position: relative;

    ul {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #333;
      display: none;
      list-style: none;
      padding: 0.5rem;
      border-radius: 4px;
    }

    &:hover ul {
      display: block;
    }
  }

  .cartContainer {
    position: relative;
    width: 20px;
    height: 20px;

    p {
      position: absolute;
      top: -10px;
      right: 5px;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

const ToggleButton = styled.div`
  height: 30px;
  width: 50px;
  background: ${(props) => (props.theme === "dark" ? "#333" : "#fff")};
  color: ${(props) => (props.theme === "dark" ? "white" : "#333")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { cart } = useContext(MartContext);
  const { logOut } = useContext(AuthContext);

  return (
    <Wrapper theme={theme}>
      <h1>IB</h1>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
        <li className="dropdownContainer">
          <NavLink activeClassName="active" to="/service">
            Services
          </NavLink>

          <ul>
            <li>
              <Link to="/service/CarRepair">Car Repair</Link>
            </li>
            <li>
              <Link to="/service/CarHire">Car Hire</Link>
            </li>
          </ul>
        </li>
        <li className="dropdownContainer">
          <NavLink activeClassName="active" to="/student">
            Students
          </NavLink>
        </li>
        <li className="dropdownContainer">
          <NavLink activeClassName="active" to="/blog">
            Blogs
          </NavLink>
          <ul>
            <li>
              <Link to="/blog/BlogCard">BlogCard</Link>
            </li>
          </ul>
        </li>
        <li>
          <NavLink activeClassName="active" to="/mart">
            Mart
          </NavLink>
        </li>
      </ul>
      <ToggleButton theme={theme} onClick={toggleTheme}>
        Toggle
      </ToggleButton>
      <div className="cartContainer">
      <p>{cart?.length || 0}</p>
        <TiShoppingCart />
      </div>
      <div>
        <button onClick={logOut}>logout</button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
