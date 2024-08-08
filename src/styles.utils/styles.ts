import styled from "styled-components";

export const H3 = styled.h3`
    color: #fff;
    font-weight: 700;
    font-family: system-ui;
    font-size: 24px;
    margin: 0px 0px 10px 0px;
`;

export const Overlay = styled.div`
    background-color: #00000080;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
`;

export const MovieInfoWrapper = styled.div`
    position: absolute;
    bottom: 10%;
    left: 5%; 
    z-index: 10;
`;