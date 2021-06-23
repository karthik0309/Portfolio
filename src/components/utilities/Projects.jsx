import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import OsSim from '../../assets/OsSim.png'
import ReactPng from '../../assets/React.png'
import Unity from '../../assets/Unity.png'
import Details from '../../json/projects.json'

const logos=[OsSim,ReactPng,Unity,ReactPng]

const Wrapper=styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    height: 100vh;
    width: 100vw;
`
const Div=styled.div`
    height: 100%;
    width: 100%;
    background-color: ${props=>props.theme.background};
    color: ${props=>props.theme.color};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media(max-width:600px){
        height:150vh;
    }
`
const H1=styled.h1`
    margin-left: 12%;
    font-size: 40px;
`
const Projects = () => {
    return (
        <Div id="Projects">
            <H1>PROJECTS</H1>
            <Wrapper>
                {Details.map((ele,index)=>(
                    <Card 
                    imgSrc={logos[index]} 
                    title={ele.title}
                    description={ele.description}
                    link={ele.link}
                    key={ele.title}/>
                ))}
            </Wrapper>
        </Div>
    )
}

export default Projects
