import React from 'react'

import styled from 'styled-components'

const Wrapper=styled.div`
    width: 30%;
    height: auto;
    position: relative;
    @media (max-width: 1200px) {
      width: 45%;
    }
    @media (max-width: 649px) {
      width: 100%;
    }
`
const ProjectCardContainer=styled.div`
    background: ${(props) => props.theme.background};
    height: 400px;
    padding: 16px 18px;
    border-radius: 8px;
    box-shadow: 2px 2px 2px 2px #cad4e2,
    -4px -5px 8px #c6d2e0;

    @media (max-width: 649px) {
        padding: 12px 14px;
    }
`

const SiteLink = styled.a`
    border-radius: 8px;
    display: inline-block;
    position: relative;
    width: 100%;
    padding-top: 56.5%;
`

const Img = styled.img`
      border-radius: 8px;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      transition: transform 400ms;
      &:hover {
        mix-blend-mode: normal;
        transform: scale(1.09, 1.16);
      }
`
    
const Info = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: space-between;
    min-height: 200px;
`

const ProjectTitle=styled.h1`
    font-size: 1.6rem;
    color: white;
    @media (max-width: 900px) {
        font-size: 1.4rem;
    }
`

const ProjectDescription=styled.p`
    font-size: 17px;
    line-height: 28px;
    color: white;
    @media (max-width: 900px) {
        font-size: 14px;
    }
`

const ExtraInfo=styled.div`
    display: flex;
    flex-direction: column;    
    justify-content: space-evenly;

`

const TechStack=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 40px;
    margin-left: 20px;

`

const Span=styled.span `
    font-size: 14px;
    color: rgb(173, 169, 169);
    &:not(:nth-child(1)) {
        margin-left: 10px;
    }
    @media (max-width: 900px) {
        font-size: 10px;
    }
`

const QuickLinks=styled.div`
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      position: absolute;
      bottom: 0;
      right: 0;
      height: 40px;
      margin-right: 20px;
`

const A=styled.a`
    color: white;
    text-decoration: none;
    margin-left: 20px;
    font-size: larger;

    &:hover{
       color: rgb(173, 169, 169);
    }
`

const ProjectCard=({project})=>{
    return(
        <Wrapper>
        <ProjectCardContainer>
            <SiteLink href={project.url} target="_blank" >
                <Img src={project.logo} alt={project.title} />
            </SiteLink>
            <Info>
                <div>
                    <a href={project.url}>
                        <ProjectTitle>
                            {project.title}
                        </ProjectTitle>
                    </a>
                    <ProjectDescription>
                        {project.desc}
                    </ProjectDescription>
                </div>
                <ExtraInfo>
                    <TechStack>
                        {project.tech.map((tech,index)=>(
                            <Span key={tech+index}>
                                {tech}
                            </Span>
                        ))}
                    </TechStack>
                    <QuickLinks>
                        <A href={project.url}>
                            <i class="fas fa-external-link-alt"></i>
                        </A>
                        <A href={project.git}>
                            <i class="fab fa-github"></i>
                        </A>
                    </QuickLinks>
                </ExtraInfo>
            </Info>
        </ProjectCardContainer>
        </Wrapper>
    )
}

export default ProjectCard