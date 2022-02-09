import React from 'react'
import styled from 'styled-components'
import Contact from './Contact'
import ContactImg from '../../assets/images/Contact.png'
import SocialLinks from './SocialLinks'

const Wrapper=styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10vh;
`
const Column=styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color:${props=>props.theme.background};
    @media(max-width:700px){
        height: 150vh;
    }
`

const Img=styled.img`
    @media(max-width:1000px){
        display: none;
    }
`
const Footer = () => {
    return (
        <Column id="Contact">
            <Wrapper>
                <Contact/>
                <Img src={ContactImg} alt="" />
            </Wrapper>
            <SocialLinks/>
        </Column>
    )
}

export default Footer
