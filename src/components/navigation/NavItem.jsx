import React from 'react'
import styled from 'styled-components'

const A=styled.a`
    text-decoration: none;
    color: ${props=>props.theme.color};
    font-size: larger;
    cursor: pointer;
    &:hover{
        transition: 300ms;
        color: #874ef5;
    }
`

const NavItem = ({Name,to}) => {
    return (
            <A href={to}>{Name}</A>
    )
}

export default NavItem
