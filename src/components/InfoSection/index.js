import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    InfoH1,
    InfoP,
    Column2,
    ImgWrap,
    Img
} from './InfoElem';

const InfoSection = ({lightBg, id, imgStart, topline, darkText, headingline, lightText, description, img, alt}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topline}</TopLine>
                            <InfoH1 lightText={lightText}>{headingline}</InfoH1>
                            <InfoP darkText={darkText}>{description}</InfoP>
                                <a href='https://github.com/dnocentini'> <FaGithub size='1.8em' color='#d95c38'  /></a> 
                                <a href='https://www.linkedin.com/in/dinny-nocentini/'> <FaLinkedin size='1.8em' color='#d95c38'  /></a>
                                <a href='mailto: dinny0313@gmail.com' > <FaEnvelope size='1.8em' color='#d95c38' /></a>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img.default} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;
