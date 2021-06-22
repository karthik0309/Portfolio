import React,{useState} from 'react'
import {ThemeProvider} from 'styled-components'
import NavBar from './components/navigation/NavBar';
import HomePage from './components/utilities/HomePage';
import Footer from './components/footer/Footer'
import './App.css'
import Card from './components/utilities/Card';


const darkTheme = {
  background: "#0a0c15",
  box: "#2e2b2b",
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
      <Footer/>

    </ThemeProvider>
  )
}

export default App