import React,{useState} from 'react'
import NavBar from './components/navigation/NavBar';
import HomePage from './components/utilities/HomePage';
import Footer from './components/footer/Footer'
import Projects from './components/utilities/Projects';
import ScrollToTop from './components/utilities/ScrollToTop'
import ToggleTheme from './components/utilities/ToggleTheme';
import {ThemeProvider} from 'styled-components'
import './App.css'
import AboutMe from './components/aboutme/AboutMe';

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
  const[icon,setIcon]=useState('fas  fa-sun')


  const handleTheme=()=>{
    if(theme===themeEnum.dark){
      setTheme(themeEnum.light)
      setIcon('fas fa-moon')
    }else{
      setTheme(themeEnum.dark)
      setIcon('fas fa-sun')
    }
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <NavBar/>
      <HomePage/>
      <AboutMe/>
      <Projects/>
      <Footer/>
      <ToggleTheme onClick={handleTheme}>
        <i className={icon}></i>
      </ToggleTheme>
      <ScrollToTop/>
    </ThemeProvider>
  )
}

export default App