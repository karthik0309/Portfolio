import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
    width: 25vw;
    height: 40px;
    min-width: 250px;
    position: relative;
`
const Input=styled.input`
    height: 80%;
    width: 80%;
    border: none;
    font-size: 20px;
    outline: none;
    border-bottom:2px solid ${props=>props.theme.color};
    color:${props=>props.theme.color};
    background-color: transparent;
    &:focus~Label,&:valid~Label{
        transform: translateY(-25px);
        color: #874ef5;
        font-size: 18px;
    }
    &:focus~Div:before,&:valid~Div:before{
        transform: scaleX(1);
    }
`
const Label=styled.label`
    position: absolute;
    bottom: 10px;
    left: 0;
    font-size: 20px;
    color: darkgray;
    pointer-events: none;
    transition: all 0.3s ease;
`
const Div=styled.div`
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: 8px;
    &:before{
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        background: #874ef5;
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }
`
const TextInput = ({label,onChange,value,id}) => {
    return (
        <Wrapper>
            <Input 
            id={id}
            required
            autoComplete="off"
            onChange={onChange}
            value={value} 
            />
            <Label>{label}</Label>
            <Div/>
        </Wrapper>
    )
}

export default TextInput
