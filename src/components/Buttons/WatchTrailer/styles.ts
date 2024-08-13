import styled from "styled-components";

export const Button = styled.button`
    width: 184px;
    height: 35px;
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
    
    @media (max-width: 600px){
        width: 100%;
        font-size: 15px;
        justify-content: center;
    }  
    `;
    
export const IconPlay = styled.img`
    width: 20px;
    height: 20px;

    @media (max-width: 600px){
        margin-left: 5px;
    }  
`;