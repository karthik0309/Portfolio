import React from 'react';
import styled from 'styled-components';

const Wrapper=styled.div`
    position: fixed;
    bottom: 0;
    left: 20px;
    @media (max-width: 900px) {
      left: 4px;
      right: auto;
    }
    @media (max-width: 649px) {
      display: none;
    }
`

const SocialLink=styled.div`
    z-index: 20;
    @media (max-width: 649px) {
        margin-top: 10px;
    }

`

const UL=styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 649px) {
      flex-direction: row;
      justify-content: center;
    }
    &::after {
      content: "";
      display: block;
      width: 2px;
      height: 150px;
      margin: 0px auto;
      background-color: white;
      @media (max-width: 649px) {
        display: none;
      }
    }
`

const LI=styled.li`
    display: flex;
    justify-content: center;
    margin-bottom: 4px;
    color: #222f3e;
    @media (max-width: 649px) {
        margin-bottom: 0;
        margin-left: 30px;
      }
    &:hover {
        i{
          transform: scale(1.4);
          transition: 300ms transform;
          color: #874ef5;
        }
    }
    &:nth-last-child(1) {
        margin-bottom: 10px;
        @media (max-width: 649px) {
          margin-bottom: 0;
        }
    }
`

const A=styled.a`
    padding: 12px;
    i{
        font-size: xx-large;
        color: white;
    }
`

const SocialLinks = () => {
  return (
    <Wrapper>
    <SocialLink>
        <UL>
            <LI>
                <A href="https://github.com/karthik0309" target="_blank">
                    <i class="fab fa-github"></i>
                </A>
            </LI>
            <LI>
                <A href="https://www.linkedin.com/in/karthik-belida-5812a61b0" target="_blank">
                    <i class="fab fa-linkedin-in"></i>
                </A>
            </LI>
            <LI>
                <A href="https://www.instagram.com/karthikbelida/" target="_blank">
                    <i class="fab fa-instagram"></i>
                </A>
            </LI>
        </UL>
    </SocialLink>
    </Wrapper>
  );
};

export default SocialLinks;
