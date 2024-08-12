import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 33%;
    margin: 3% 0;
`;

export const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 3%;
`;

export const Image = styled.img`
    width: 64px;
    height: 86px;
    border-radius: 12px;
    border: 2px solid #3A3A3A;
`;

export const MovieTitle = styled.h3`
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    line-height: 16.94px;
`;

export const Character = styled.h4`
    color: #B4B4B4;
    font-weight: 500;
    font-size: 13px;
    line-height: 12px;
    margin-bottom: 2%;
`;

export const Year = styled.span`
    color: #B4B4B4;
    font-weight: 500;
    font-size: 13px;
    line-height: 12px;
`;
