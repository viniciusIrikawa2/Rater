import styled from "styled-components";

interface CardListWrapperProps {
    direction?: 'row' | 'column'; 
}

export const H1 = styled.h1`
    font-weight: 700;
    color: #fff;
    line-height: 48.41px;
`;

export const H3 = styled.h3`
    color: #fff;
    font-weight: 700;
    font-size: 24px;
    margin: 0px 0px 10px 0px;
`;

export const H4 = styled.h4`
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    line-height: 19.2px;'
`;

export const Overlay = styled.div`
    background-color: #00000080;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    border-radius: 24px;
`;

export const MovieInfoWrapper = styled.div`
    position: absolute;
    bottom: 10%;
    left: 5%; 
    z-index: 10;
`;

export const CardListWrapper = styled.div<CardListWrapperProps>`
    display: flex;
    align-items: center;
    flex-direction: ${props => props.direction || 'row'};
    gap: 35px;
`;