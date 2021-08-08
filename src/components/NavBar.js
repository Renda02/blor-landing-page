import React from "react";
import logo from "../images/logo.svg";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";

function NavBar() {
  return (
    <NavBarWrapper>
      <Nav>
        <NavLeft>
          <img src={logo} alt="log" />
          <ListWrap>
            <NavListWrap>
              Products{" "}
              <NavIconSpan>
                <RiArrowDropDownLine />
              </NavIconSpan>
            </NavListWrap>
            <NavListWrap>
              Company{" "}
              <NavIconSpan>
                <RiArrowDropDownLine />
              </NavIconSpan>
            </NavListWrap>
            <NavListWrap>
              Connect{" "}
              <NavIconSpan>
                <RiArrowDropDownLine />
              </NavIconSpan>
            </NavListWrap>
          </ListWrap>
        </NavLeft>
        <NavLinks>
          <FirstLinkButton href="/" alt="login">
            Login
          </FirstLinkButton>
          <SecondNavLink href="/">Signup</SecondNavLink>
        </NavLinks>
      </Nav>
      <ContentContainer>
        <h1>A modern publishing platform</h1>
        <p> Grow your audience and build your online brand</p>
        <MainLink>
          <a href="/"> Start for Free</a>
          <a href="/"> Learn More</a>
        </MainLink>
      </ContentContainer>
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

const SecondNavLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 1.2em;
  padding: 0.6em 1.2em;
  color: hsl(0, 0%, 100%);
  margin-right: 2em;
  border: 1px solid hsl(0, 0%, 100%);
  border-radius: 8px;
`;

const NavLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ListWrap = styled.ul`
  padding: 0;
  display: flex;
  list-style: none;
  font-weight: 400;
  margin-left: 2em;
`;

const NavListWrap = styled.li`
  margin: 0 1em;
  cursor: pointer;
  display: flex;
`;

const NavIconSpan = styled.span`
  padding: 0.1em;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;
const FirstLinkButton = styled.a`
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 1.2em;
  padding: 0.6em 1.2em;
  color: hsl(0, 0%, 100%);
  margin-right: 1em;

  &:hover,
  :focus {
    cursor: pointer;
    color: hsl(237, 17%, 21%);
    border: 1px solid hsl(0, 0%, 100%);
    border-radius: 8px;
    background-color: hsl(0, 0%, 100%);
  }
`;


const ContentContainer=styled.div`
text-align:center;
padding-bottom:6em;`;

const MainLink=styled.div`
margin:2em 0;`;