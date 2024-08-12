import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`;

export const MovieWrapper = styled.div`
    width: 70%;
`;

export const Movies = styled.div`
    border: 2px solid green;
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
`;

export const ActorWrapper = styled.div`
    border: 2px solid purple;
    width: 30%;
`;

export const ActorImage = styled.img`
    width: 400px;
    height: 350px;
    border-radius: 24px;
    border: 4px solid #3A3A3A;
    object-fit: cover;
`;

export const InfoWrapper = styled.div`
    margin: 2% 0;
`;
export const Span = styled.span`
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    line-height: 16.8px;
`;
export const P = styled.p`
    color: #B4B4B4;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
`;