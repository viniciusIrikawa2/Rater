import styled from "styled-components";

export const Button = styled.a`
    width: 184px;
    height: 20px;
    border-radius: 10px;
    padding: 12px;
    color: #EEEEEE;
    backdrop-filter: blur(12px);
    background-color: #EEEEEE40;
    border: none;
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    z-index: 15;
`;

export const IconPlay = styled.img`
    width: 20px;
    height: 20px;
`;