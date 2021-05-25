import React from 'react'
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
