import styled from "styled-components";

export const Button = styled.button<{ isSelected: boolean }>`
    border-radius: 100px;
    border: 3px solid #313131;
    color: #B4B4B4;
    background-color: ${props => props.isSelected ? 'gray' : 'transparent'};
    margin: 1% 1.2%;
    padding: 3px 15px;
    font-size: 12px;
    line-height: 14.52px;
    font-weight: 400;
    cursor: pointer;
`;