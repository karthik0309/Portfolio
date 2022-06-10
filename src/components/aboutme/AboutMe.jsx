import React from 'react'
import styled from 'styled-components'
import { AboutMeContent,ResumeLink } from '../../constants/Constant'
import Button from '../utilities/Button'
import AboutMeImg from '../../assets/images/AboutMe.png'

const Div=styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    align-items: space-around;
    justify-content: flex-start;
    flex-direction: column;
    background: ${props=>props.theme.background};
    color:${props=>props.theme.color};
    @media(max-width:600px){
        height: 150vh;
        font-size: 16px;
    }
`
const H1=styled.h1`
    margin-top: 10vh;
    margin-left: 12%;
    font-size: 40px;
    
`
const Content=styled.div`
    margin-top: 6vh;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 90%;
    height: 70%; 
    margin-left:8vw ;
    @media(max-width:600px){
        margin-left: 12%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        height: 80%;
    }
`
const Download=styled.div`
    width:70% ;
    display: grid;
    place-items:center;
    color: ${props=>props.theme.secondaryColor};
    @media(max-width:600px){
        font-size: 100px;
        align-items: flex-start;
    }
`

const Img=styled.img`
    margin-top:-70px;
    height:275px;
    width:345px;
`
const Col=styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    margin-left: 5%;
    color: ${props=>props.theme.secondaryColor};
    font-size: larger;
    @media(max-width:600px){
        width: 100%;
    }
`
const P=styled.p`
    width: 100%;
    color: #999 ;
    @media(max-width:600px){
        width: 80%;
    }
`
const A=styled.a`
    margin-top:60px;
`


const AboutMe = () => {
    return (
        <Div id="AboutMe">
            <H1>ABOUT ME</H1>
            <Content>
                <Col>
                    <P>{AboutMeContent}</P>  
                    <A href={ResumeLink} target="_blank">
                        <Button>Download resume</Button>
                    </A>
                </Col>             
                <Download>
                    <Img src={AboutMeImg}/>
                </Download>
            </Content>
        </Div>
    )
}
export default AboutMe
