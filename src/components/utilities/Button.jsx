import styled from 'styled-components'

const Button=styled.button`
    border: none;
    background: transparent;
    outline: none;
    height: 40px;
    border: 2px solid #874ef5;
    width: 180px;
    color: #874ef5;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        background: #874ef5;
        color: white;
        transform: scale(1.1);
        transition: transform 0.3s ease;
    }
`

export default Button
