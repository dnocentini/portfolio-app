import React from 'react';
import img1 from '../../images/imgP.png';
import img2 from '../../images/imgP.png';
import img3 from '../../images/imgP.png';
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
                    <a href="https://dnocentini.github.io/mmassage/" target="_blank" rel="noopener noreferrer">
                        <ProjectsImg src={img1}/>
                    </a>
                    <ProjectsH2>M Massage</ProjectsH2>
                    <ProjectsP>HTML CSS React.js</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <a href="https://listy-ga.herokuapp.com/users" target="_blank" rel="noopener noreferrer">
                        <ProjectsImg src={img1}/>
                    </a>
                    <ProjectsH2>Listy</ProjectsH2>
                    <ProjectsP>JS Node Express MongoDB</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <a href="https://dnocentini.github.io/flashcard-game/" target="_blank" rel="noopener noreferrer">
                        <ProjectsImg src={img2}/>
                    </a>
                    <ProjectsH2>Flashcard Game</ProjectsH2>
                    <ProjectsP>HTML CSS JavaScript</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <a href="https://artworld-sei.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <ProjectsImg src={img3}/>
                    </a>
                    <ProjectsH2>ArtWorld</ProjectsH2>
                    <ProjectsP>Django Python</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects;
