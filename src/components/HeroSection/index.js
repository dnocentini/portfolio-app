import React from 'react';
import Video from '../../videos/video.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper
} from './HeroElem';

const HeroSection = () => {
    return (
        <HeroContainer>   
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Hello, I am Dinny Nocentini</HeroH1>
                <HeroP>
                    Software Engineer
                </HeroP>
                <HeroBtnWrapper>
                    
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
