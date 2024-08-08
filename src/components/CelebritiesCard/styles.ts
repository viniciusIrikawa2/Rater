import styled from "styled-components";

export const Card = styled.div`
    width: 268.8px;
    height: 253.67px;
    border-radius: 24px;
    background-image: url('/actors/robert_downey.png');
    background-size: cover;
    background-position: center;
    overflow: hidden;
    position: relative;
`;

export const TitleWrapper = styled.div`
    position: absolute;
    bottom: 10%;
    left: 5%; 
    display: flex;
    align-items: center;
`;

export const H3 = styled.h3`
    color: #EEEEEE;
    font-weight: 700;
    font-family: system-ui;
    font-size: 20px;
`;

export const Age = styled.span`
    color: #EEEEEE;
    font-weight: 400;
    font-family: system-ui;
    font-size: 14px;
    line-height: 22.4px;
    margin-left: 5px;
`;