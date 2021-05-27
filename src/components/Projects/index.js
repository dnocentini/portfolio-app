import React from 'react';
import img1 from '../../images/imgP1.jpeg';
import img2 from '../../images/imgP1.jpeg';
import img3 from '../../images/imgP1.jpeg';
import {
    ProjectsContainer,
    ProjectsH1,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsImg,
    ProjectsH2,
    ProjectsP
} from './ProjectsElem'

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsImg src={img1}/>
                    <ProjectsH2>Projectn1</ProjectsH2>
                    <ProjectsP>aaaa</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsImg src={img2}/>
                    <ProjectsH2>Projectn2</ProjectsH2>
                    <ProjectsP>aaaa</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsImg src={img3}/>
                    <ProjectsH2>Projectn3</ProjectsH2>
                    <ProjectsP>aaaa</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects;
