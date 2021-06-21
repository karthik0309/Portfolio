import React from 'react'
import styled from 'styled-components'
import Contact from './Contact'
import Details from './Details'
import SocialLinks from './SocialLinks'

const Wrapper=styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow-x: hidden;
`
const Column=styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color:${props=>props.theme.background};
`
const Footer = () => {
    return (
        <Column id="contact">
            <Wrapper>
                <Contact/>
                <Details/>
            </Wrapper>
            <SocialLinks/>
        </Column>
    )
}

export default Footer
