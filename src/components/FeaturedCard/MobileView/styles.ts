import styled from "styled-components";

export const Card = styled.div<{ imageUrl: string }>`
    width: 100%;
    height: 284px;
    border-radius: 24px;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
    position: relative;
`;

export const MovieInfoWrapper = styled.div`
    position: absolute;
    padding: 3%;
    bottom: 0%;
    z-index: 10;
`;