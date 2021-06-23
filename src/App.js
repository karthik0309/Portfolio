import React,{useState} from 'react'
import {ThemeProvider} from 'styled-components'
import NavBar from './components/navigation/NavBar';
import HomePage from './components/utilities/HomePage';
import Footer from './components/footer/Footer'
import './App.css'
import Projects from './components/utilities/Projects';

const darkTheme = {
  background: "#0a0c15",
  box: "#242526",
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
      <HomePage/>
      <Projects/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App