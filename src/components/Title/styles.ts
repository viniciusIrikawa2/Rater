import styled from "styled-components";

export const H2 = styled.h2`
    color: #ffff;
    font-family: system-ui;
    display: flex;
    align-items: center;

    &:before {
        content: '';
        width: 5px;
        height: 30px;
        background-color: #ffff;
        display: inline-block;
        margin-right: 8px;
        border-radius: 5px;
    }
`;