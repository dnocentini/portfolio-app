import styled from 'styled-components';

export const FooterContainer = styled.div`
    background: #00060e;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 90px;
    position: relative;
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FooterP = styled.p`
    color: #fff;
    font-size: 14px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 13px;
    }

    @media screen and (max-width: 480px) {
        font-size: 11px;
    }
`;