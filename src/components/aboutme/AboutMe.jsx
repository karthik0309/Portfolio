import React from 'react'
import styled from 'styled-components'
import { AboutMeContent } from '../../constants/Constant'
import Button from '../utilities/Button'
import Resume from '../../assets/KarthikBelida.pdf'
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
    margin-top: 10vh;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 80%;
    height: 70%;
    @media(max-width:600px){
        margin-left: 12%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        height: 80%;
    }
`
const Download=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 140px;
    height: 60%;
    color: ${props=>props.theme.secondaryColor};
    @media(max-width:600px){
        font-size: 100px;
        align-items: flex-start;
    }
`
const Col=styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    margin-left: 6%;
    color: ${props=>props.theme.secondaryColor};
    font-size: larger;
    @media(max-width:600px){
        width: 100%;
    }
`
const P=styled.p`
    width: 100%;
    @media(max-width:600px){
        width: 80%;
    }
`

const Ul=styled.ul `
    margin-left: 4%;
    margin-top: 2%;
`
const AboutMe = () => {
    return (
        <Div id="AboutMe">
            <H1>ABOUT ME</H1>
            <Content>
                <Col>
                    <P>{AboutMeContent}</P>  
                    <P>Here are few technologies i work with:</P>
                    <Ul>
                        <li>HTML and CSS</li>
                        <li>React js</li>
                        <li>Typescript</li>
                        <li>Node js</li>
                    </Ul>
                </Col>             
                <Download>
                    <i className="far fa-file-alt"></i>
                    <a href={Resume} download>
                        <Button>Download resume</Button>
                    </a>
                </Download>
            </Content>
        </Div>
    )
}
export default AboutMe
