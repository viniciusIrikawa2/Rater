import styled from "styled-components";

export const Card = styled.div<{ imageUrl: string }>`
    width: 1000px;
    height: 826px;
    border-radius: 24px;
    padding: 48px;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
    overflow: hidden;
    position: relative;
`;

export const Wrapper = styled.p`
    border: 2px solid red;
`;

export const P = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 22.4px;
    color: #EEEEEE;
    margin: 0% 0px 2% 0px;
`;