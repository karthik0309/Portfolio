import React from "react";
import styled from "styled-components";
import { SkillsList } from "../../json/skills";

const AnimatedContainer = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  width: 88%;
  margin: auto;
  overflow: hidden;
  background: ${(props) => props.theme.background};
`;

const AnimateScroll = styled.div`
  display: flex;
  width: calc(16 * 160px * 2);
  padding: 3rem 0;
  animation: scroll 40s linear infinite;

  &:hover {
    cursor: pointer;
    animation-play-state: paused;
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-160px * 14));
    }
  }
`;

const SkillCard = styled.div`
  background: ${(props) => props.theme.box};
  color: ${(props) => props.theme.color};
  box-shadow: 0 5px 5px rgb(0 0 0 / 12%);
  border-radius: 10px;
  width: 160px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  margin: 20px;
  transition: transform 1s;
  &:hover {
    transform: scale(1.2);
  }
`;

const H1 = styled.h1`
  font-size: 40px;
  color: white;
  text-align: center;
`;

const Div=styled.div`
    background: ${(props) => props.theme.background};
    width: 100vw;
    margin: 0;
`


const Skills = () => {
  return (
    <Div>
      <H1>SKILLS</H1>
      <AnimatedContainer>
        <AnimateScroll>
          {SkillsList.map((image, index) => (
            <SkillCard key={index}>
              <img src={image.logo} alt="some" height={"80px"} />
              <p>{image.name}</p>
            </SkillCard>
          ))}
          {SkillsList.map((image, index) => (
            <SkillCard key={index}>
              <img src={image.logo} alt="some" height={"80px"} />
              <p>{image.name}</p>
            </SkillCard>
          ))}
        </AnimateScroll>
      </AnimatedContainer>
    </Div>
  );
};

export default Skills;
