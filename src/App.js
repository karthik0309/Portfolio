import React,{useState} from 'react'
import NavBar from './components/navigation/NavBar';
import HomePage from './components/utilities/HomePage';
import Skills from './components/skills/Skills'
import AboutMe from './components/aboutme/AboutMe';
import Projects from './components/projects/Projects';
import SocialLinks from './components/socialLinks/SocialLinks';
import Footer from './components/footer/Footer'
import {ThemeProvider} from 'styled-components'
import './App.css'

const darkTheme = {
  background: "rgb(4,4,2)",
  box: "rgb(18,13,8)",
  color: "white",
  secondaryColor:"gray"
};

const lightTheme = {
  background: "#FFFFFF",
  box: "lightgrey",
  color:"black",
  secondaryColor:"darkgray"
};

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

const themeEnum = {
  light: "light",
  dark: "dark",
};

const App = () => {
  const [theme, setTheme] = useState(themeEnum.dark);

  return (
    <ThemeProvider theme={themes[theme]}>
      <NavBar/>
      <SocialLinks/>
      <HomePage/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App