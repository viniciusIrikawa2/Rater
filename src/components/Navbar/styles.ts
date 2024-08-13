import styled from "styled-components";

export const Logo = styled.img`
    cursor: pointer;
    height: 34.88px;
    width: 128px;
`;

export const Header = styled.header`
    background-color: #121212;
    padding: 3% 0%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    
    @media (max-width: 600px){
        flex-direction: column;
        align-items: center;
        margin: 2% 0;
    }   
`;