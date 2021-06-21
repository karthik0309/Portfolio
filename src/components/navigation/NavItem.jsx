import React from 'react'
import styled from 'styled-components'

const A=styled.a`
    text-decoration: none;
    color: black;
    font-size: larger;
    margin: 5%;
    
    &:hover~Div:before{
        color: #874ef5;
        transform: scaleX(1);
    }
`
const Div=styled.div`
    position: absolute;
    height: 4px;
    width: 80px;
    left: 60px;
    &:before{
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        background: #874ef5;
        top: 0;
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }
`
const Wrapper=styled.div`
    height: 100%;
    position: relative;
`

const NavItem = ({Name,to}) => {
    return (
        <Wrapper>
            <Div></Div>
            <A href={to}>{Name}</A>
        </Wrapper>
    )
}

export default NavItem
