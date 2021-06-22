import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
    margin: 15%;
    height: 250px;
    width: 400px;
    border-radius: 8px;
    background-color: ${props=>props.theme.box};
    cursor: pointer;
    &:hover{
        transform: translateY(-10px);
        transition: 100ms;
    }
`

const Card=()=>{
    return(
        <Wrapper>

        </Wrapper>
    )
}

export default Card