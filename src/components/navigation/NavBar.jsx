import React, { useState } from "react";
import styled from "styled-components";
import NavItem from "./NavItem";
import "./Nav.css";

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  background-color: ${(props) => props.theme.background};
  width: 100%;
  height: 10vh;
  z-index:100;
  @media(max-width:600px){
    justify-content: space-between;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 50%;

  @media(max-width:600px){
    display: none;
  }
`;

const H2=styled.h2`
    font-family: 'Poppins', sans-serif;
    color:${props=>props.theme.color};
`

const NavBar = () => {
  
  const [navScrolled, setNavScrolled] = useState(false);

  const changeNavHandler = () => {
    if (window.scrollY > 80) {
      setNavScrolled(true);
    } else {
      setNavScrolled(false);
    }
  };

  window.addEventListener("scroll", changeNavHandler);

  return (
    <Nav className={navScrolled ? "active" : "null"}>
      <H2>Karthik</H2>
      <Row>
        <NavItem Name="Home" to="#Home" />
        <NavItem Name="About Me" to="#AboutMe" />
        <NavItem Name="Projects" to="#Projects" />
        <NavItem Name="Contact" to="#Contact" />
      </Row>
    </Nav>
  );
};

export default NavBar;
