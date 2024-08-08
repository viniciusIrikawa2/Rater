import styled from "styled-components";

export const H2 = styled.h2`
    color: black;
    font-family: system-ui;
    margin-left: 20px;
    display: flex;
    align-items: center;

    &:before {
        content: '';
        width: 5px;
        height: 30px;
        background-color: black;
        display: inline-block;
        margin-right: 5px;
        border-radius: 5px;
    }
`;