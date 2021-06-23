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
  position: relative;
  @media(max-width:600px){
    position: fixed;
    overflow-x: ${props=>props.show ? `visible` : `hidden`};
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 50%;
  position: relative;
  @media(max-width:600px){
    display: inline;
    position: absolute;
    right: 0;
    top: 8vh;
    height: 92vh;
    text-align: center;
    padding: 20px;
    width: 100%;
    transform: ${props=>props.show ? `translateX(0%)` : `translateX(100%)`};
    transition: transform 1s ease-out;
    background-color: ${props=>props.theme.background};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    z-index: 100;
    font-size: 30px;
  }
`;

const H2=styled.h2`
    font-family: 'Poppins', sans-serif;
    color:${props=>props.theme.color};
`

const Hamburger=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    cursor: pointer;
    display: none;
    &:hover{
      opacity: 0.7;
    }
    @media(max-width:600px){
      display: block;
    }
`
const Line=styled.div`
  width: ${props=>props.width};
  height: 2px;
  margin: 3px;
  background-color: ${props=>props.theme.color};
`

const NavBar = () => {
  
  const [navScrolled, setNavScrolled] = useState(false);
  const [showSideBar,setShowSideBar]  = useState(false);

  const handleClick=()=>{
    setShowSideBar(!showSideBar)
  }
  const handleNavItemClick=()=>{
    setShowSideBar(false)
  }
  const changeNavHandler = () => {
    if (window.scrollY > 80) {
      setNavScrolled(true);
    } else {
      setNavScrolled(false);
    }
  };

  window.addEventListener("scroll", changeNavHandler);

  return (
    <Nav className={navScrolled ? "active" : "null"} show={showSideBar}>
      <H2>Karthik</H2>
      <Row show={showSideBar}>
        <NavItem Name="Home" to="#Home" onClick={handleNavItemClick} />
        <NavItem Name="Projects" to="#Projects" onClick={handleNavItemClick}/>
        <NavItem Name="Contact" to="#Contact" onClick={handleNavItemClick}/>
      </Row>
      <Hamburger onClick={handleClick}>
        <Line width="25px" />
        <Line width="15px" />
      </Hamburger>
    </Nav>
  );
};

export default NavBar;
