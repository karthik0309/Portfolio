import React,{useState} from 'react'
import {ThemeProvider} from 'styled-components'
import './App.css'
import Card from './components/utilities/Card';
import Os from './assets/OsSim.png'
const darkTheme = {
  background: "#0a0c15",
  box: "#282828",
  color: "white",
};

const lightTheme = {
  background: "#FFFFFF",
  box: "lightgrey",
  color:"black"
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
      <Card imgSrc={Os}/>
    </ThemeProvider>
  )
}

export default App