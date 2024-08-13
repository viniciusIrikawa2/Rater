import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    
    @media (max-width: 600px){
        flex-direction: column-reverse;
    }
`;
    
export const MovieWrapper = styled.div`
    width: 70%;

    @media (max-width: 600px){
        width: 100%;
    }
`;

export const Movies = styled.div`
    display: flex;
    flex-flow: wrap;
    height: 90vh;
    overflow-y: scroll;
    margin-right: 1%;
`;

export const ActorWrapper = styled.div`
    width: 30%;
    
    @media (max-width: 600px){
        width: 100%;
        margin-bottom: 5%;
    }
`;

export const ActorImage = styled.img`
    width: 400px;
    height: 350px;
    border-radius: 24px;
    border: 4px solid #3A3A3A;
    object-fit: cover;

    @media (max-width: 600px){
        width: 100%;
        border: none;
    }
`;

export const InfoWrapper = styled.div`
    margin: 2% 0;
`;

export const AboutWrapper = styled.div`
    height: 200px;
    overflow: hidden;
    overflow-y: scroll;
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