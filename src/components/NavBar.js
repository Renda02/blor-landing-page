import React from "react";
import arrow from "../images/icon-arrow-light.svg";
import logo from "../images/logo.svg";
import styled from "styled-components";

function NavBar() {
  return (
    <NavBarWrapper>
      <Nav>
          <NavLeft>
        <img src={logo} alt="log" />
        <ListWrap>
          <NavListWrap>
            Products <img src={arrow} alt="arrow" />
          </NavListWrap>
          <NavListWrap>
            {" "}
            Company <img src={arrow} alt="arrow" />
          </NavListWrap>
          <NavListWrap>
            {" "}
            Connect <img src={arrow} alt="arrow" />
          </NavListWrap>
        </ListWrap>
        </NavLeft>
        <div>
          <a href="/" alt="login">
            Login
          </a>
          <a href="/">Signup</a>
        </div>
      </Nav>
      <div>
        <h1>A modern publishing platform</h1>
        <p> Grow your audience and build your online brand</p>
        <div className="main-link">
          <a href="/"> Start for Free</a>
          <a href="/"> Learn More</a>
        </div>
      </div>
    </NavBarWrapper>
  );
}

export default NavBar;

const NavBarWrapper = styled.div`
  background-color: hsl(355, 100%, 74%);
  color: hsl(0, 0%, 100%);
  font-family: "Ubuntu", sans-serif;
  padding: 1em 0;
  border-radius: 0 0 0 2em;
`;
const Nav = styled.nav`
  padding: 1em;
  display: flex;
  justify-content: space-between;
`;

const NavLeft= styled.div`
display:flex;
justify-content:space-evenly;`;

const ListWrap = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
  font-weight: 400;
  margin-left: 3em;
`;

const NavListWrap= styled.li`
margin: 0 1em;
cursor: pointer;
`;
