import React from 'react'
import styled from 'styled-components'

const A=styled.a`
    text-decoration: none;
    color: ${props=>props.theme.color};
    font-size: larger;
    cursor: pointer; 
    &:hover{
        color: #874ef5;
        border-bottom: 2px solid #874ef5;
    }
`

const NavItem = ({Name,to,onClick}) => {
    return (
            <A href={to} onClick={onClick}>{Name}</A>
    )
}

export default NavItem
