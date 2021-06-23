import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
    width: 100%;
    height: 100vh;
    background-color:${props=>props.theme.background};
    color:${props=>props.theme.color};
`
const Content=styled.div`
    width: 50%;
    display: flex;
    display: flex;
    margin-left: 12%;
    flex-direction: column;
    height: 100vh;
    align-items: flex-start;
    justify-content: center;
    font-size: larger;
`
const Span=styled.span`
    color:#874ef5 ;
    font-size: 40px;
    font-weight: 400;
    cursor: pointer;
    &:hover{
        color:${props=>props.theme.background};
        text-shadow: -1px 1px 0 #874ef5,
                  1px 1px 0 #874ef5,
                  1px -1px 0 #874ef5,
                 -1px -1px 0 #874ef5;
    }
`

const P=styled.p`
    font-size: 30px;
    margin-top: 10px;
    color: ${props=>props.theme.secondaryColor};
`
const H1=styled.h1`
    font-size: 50px;
`
const HomePage = () => {
    return (
        <Wrapper id="Home">
            <Content>
                <P>Hi, I'm</P>
                <H1>Karthik Belida</H1>
                <P>A Computer science student at <Span>VIT</Span></P>
                <P>Frontend developer and a <Span>REACT</Span> Enthusiast</P>
            </Content>
        </Wrapper>
    )
}

export default HomePage
