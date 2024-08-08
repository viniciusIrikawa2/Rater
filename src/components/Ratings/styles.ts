import styled from "styled-components";

export const RatingWrapper = styled.div`
    width: 59px;
    height: 32px;
    border-radius: 12px;
    padding: 4px;
    color: #EEEEEE;
    backdrop-filter: blur(12px);
    background-color: #EEEEEE40;
    font-weight: 600;
    font-size: 20px;
    font-family: system-ui;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10%;
    left: 5%; 
    z-index: 10;
`;

export const IconStar = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`;