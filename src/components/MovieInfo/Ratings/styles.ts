import styled from "styled-components";

export const RatingWrapper = styled.div<{backgroundColor: boolean}>`
    width: 59px;
    height: 32px;
    border-radius: 12px;
    padding: 4px;
    color: #EEEEEE;
    backdrop-filter: blur(12px);
    background-color: ${props => props.backgroundColor ? '#EEEEEE40' : 'transparent'};
    font-weight: 600;
    font-size: 20px;
    font-family: system-ui;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 10;

    @media (max-width: 600px){
        font-size: 15px;
    }
`;

export const IconStar = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`;

export const P = styled.img`
    color: #B4B4B4;
`;
