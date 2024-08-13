import styled from "styled-components";

export const Card = styled.div<{ imageUrl: string }>`
    width: 268.8px;
    height: 253.67px;
    margin: 2% 1% 2% 0;
    border-radius: 24px;
    cursor: pointer;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
    overflow: hidden;
    position: relative;
    
    @media (max-width: 600px){
        width: 166.5px;
    }  
`;

export const Wrapper = styled.div`
    position: absolute;
    bottom: 10%;
    left: 5%;
    z-index: 15;
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const H3 = styled.h3`
    color: #EEEEEE;
    font-weight: 700;
    font-family: system-ui;
    font-size: 20px;
    
    @media (max-width: 600px){
        font-size: 15px;
    }  
`;

export const Age = styled.span`
    color: #EEEEEE;
    font-weight: 400;
    font-family: system-ui;
    font-size: 14px;
    line-height: 22.4px;
    margin-left: 5px;
    
    @media (max-width: 600px){
        font-size: 12px;
    }  
`;

export const Character = styled.span`
    color: #B4B4B4;
    font-weight: 400
    font-family: system-ui;
    font-size: 20px;
    line-height: 22.4px;
`;