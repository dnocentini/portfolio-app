import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElem';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElem';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


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
                    <Button 
                        to='contact' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Contact Me {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
