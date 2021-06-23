import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
    margin-left: 12%;
    height: 200px;
    width: 400px;
    border-radius: 8px;
    color: ${props=>props.theme.color};
    background-color: ${props=>props.theme.box};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-bottom: 4px solid #874ef5;
    &:hover{
        transform: translateY(-20px);
        transition: 100ms;
        background-color: #874ef5;
        border-bottom: 4px solid ${props=>props.theme.box};
    }
    @media(max-width:1000px){
        width: 320px;
        height: 150px;
    }
`
const Img=styled.img`
    background-repeat: no-repeat;
    width: 75px;
    height: 75px;
    margin-right:25px ;
`
const Row=styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 10px;
    align-items: center;
    color: ${props=>props.theme.color};
`

const Card=({imgSrc,title,description,link})=>{
    return(
        <Wrapper>
            <a href={link} target="_blank" rel="noreferrer">
            <Row>
                <Img src={imgSrc}/>
                <h2>{title}</h2>
            </Row>
            <Row>
               <p>{description}</p>
            </Row>
            </a>
        </Wrapper>
    )
}

export default Card