import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../auth.js";
import AppRoutes from "../routes.js";
import logo from '/src/assets/kjclogo.png';
import {
  useAtom,
  accessTokenAtom,
  userInfoAtom,
  isUserValidAtom
} from "../auth.js";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const navigator = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const [userInfo] = useAtom(userInfoAtom);
  const [isUserValid] = useAtom(isUserValidAtom);

  async function handleLogin(e, username, password) {
    e.preventDefault();
    const newToken = await authenticate(username, password);

    if (newToken.access_token) {
      setAccessToken(newToken.access_token);
    } else {
      console.log("Authentication Failed");
    }
  }

  useEffect(() => {
    if (isUserValid) {
      console.log(
        "Authentication Status: Successful Redirecting to " +
          AppRoutes[userInfo.role]
      );
      navigator(AppRoutes[userInfo.role]);
    } else {
      console.log("Authentication Status: Failed");
    }
  }, [isUserValid, navigator, userInfo.role]);

  return (
    <div className="login-container">
      <Navbar color="transparent" light expand="md" className="navbar">
      <img className="logo" src={logo} alt="KJC"/>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="nav" navbar>
            <NavItem>
              <NavLink href="/components/">About US</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Contact US</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    <div className="left-section">
      <h1>Conference Web-portal</h1>
    </div>
          <div className="login-form-container">
        <form
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <h4>LOGIN</h4>
          <label htmlFor="username">
            <div className="input-user">
            <input 
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            </div>
          </label>
          

          <label htmlFor="password">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <a href="" className="forgotpass">Forgot password</a>

          <button
            type="submit"
            onClick={(e) => handleLogin(e, username, password)}
          >
            Login
          </button>

          <button onClick={() => navigator("/paper-dashboard")}>
            Paper Dashboard Preview
          </button>
          <a className="register-link" href="">Register</a>
        </form>
      </div>
    </div>
  );
}
