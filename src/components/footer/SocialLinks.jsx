import React from 'react'
import styled from 'styled-components'
import {GitHub,Instagram,LinkeIn} from '../../constants/Constant'
const A=styled.a`
    color:${props=>props.theme.color};
    cursor: pointer;
    text-decoration: none;
    font-size: 25px;
    &:hover{
        color:#874ef5;
    }
`
const Div =styled.div`
    display: flex;
    width: 100px;
    justify-content: space-between;
    align-items: center;
`
const SocialLinks = () => {
    return (
        <Div>
            <A title="Linked in" href={LinkeIn} target="_blank" rel="noopener">
                <i className="fa fa-linkedin"></i>
            </A>
            <A title="Github" href={GitHub} target="_blank" rel="noopener">
                <i className="fab fa-github"></i>
            </A>
            <A title="instagram" href={Instagram} target="_blank" rel="noopener">
                <i className="fab fa-instagram"></i>
            </A>
        </Div>
    )
}

export default SocialLinks
