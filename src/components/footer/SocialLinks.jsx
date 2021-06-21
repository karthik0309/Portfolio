import React from 'react'
import styled from 'styled-components'

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
            <A title="Linked in" href="https://www.linkedin.com/in/karthik-belida-5812a61b0/" target="_blank">
                <i className="fa fa-linkedin"></i>
            </A>
            <A title="Github" href="https://github.com/karthik0309" target="_blank">
                <i className="fab fa-github"></i>
            </A>
            <A title="instagram" href="https://www.instagram.com/karthikbelida/" target="_blank">
                <i className="fab fa-instagram"></i>
            </A>
        </Div>
    )
}

export default SocialLinks
