import styled from "styled-components"

const ToggleTheme=styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  width: 50px;
  height: 50px;
  background: ${props=>props.theme.box};
  border-radius: 4px;
  color: ${props=>props.theme.color};
  display: grid;
  place-items: center;
  font-size: 25px;
  cursor: pointer;
  &:hover{
    color:#874ef5;
  }
  @media(max-width:600px){
    margin-right: 5%;
  }
`
export default ToggleTheme