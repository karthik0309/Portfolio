import React from 'react';
import ProjectCard from './ProjectCard';
import { project } from '../../json/project';
import styled from 'styled-components';

const Header = styled.h1`
    text-align: center;
    color: white;
    margin-bottom: 10vh;
    font-size: 40px;
`

const Wrapper=styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  width: 75vw;
  margin-left: 12.5vw;
  @media (max-width: 649px) {
    padding-left: 4px;
    padding-right: 4px;
  }
`
const Projects = () => {
  return (
    <div style={{background:"rgb(4,4,2)"}} id="Projects">
      <Header>
        PROJECTS
      </Header>
      <Wrapper>
        {project.map((proj,index)=>(
            <ProjectCard project={proj} key={index}/>
        ))}
      </Wrapper>
    </div>
  )
};

export default Projects;
