import styled from "styled-components";

export const Card = styled.div<{imageURL: string}>`
    width: 339px;
    height: 253.67px;
    border-radius: 24px;
    margin: 0% 1% 2% 0%;
    padding: 12px;
    background-image: url(${props => props.imageURL});
    background-size: cover;
    overflow: hidden;
    position: relative;
`;