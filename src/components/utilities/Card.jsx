import React from 'react'
import styled from 'styled-components'

const Img=styled.img`
    width: 350px;
    height: 250px;
    box-shadow:5px 5px 15px rgba(0,0,0,.3);
    background-repeat: no-repeat;
    &:hover{

    }
`
const Conatiner=styled.div`
    margin: 5%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: 2px solid #874ef5;
`

const Card = ({imgSrc,to,mssg}) => {
    return (
        <Conatiner>
            <a href={to}>
                <Img src={imgSrc} />
            </a>
            <div>
                <h2>Os Sim</h2>
                <p>A Tool to </p>
            </div>
        </Conatiner>
    )
}

export default Card
