import styled from "styled-components";

export const InputWrapper = styled.div`
    margin-left: 40%;
    transform: translateX(-50%);
    z-index: 20;
    display: flex;
    align-items: center;

     @media (max-width: 600px){
        margin-left: 0%;
        transform: translateX(0%);
        margin: 5% 0;
    }  
`;

export const Input = styled.input`
    color: #fff;
    background-color: #191919;
    border: none;
    border-radius: 99px;
    padding: 3px 0px 3px 20px;
    width: 300px;
    height: 48px;
`;


export const SearchResultsWrapper = styled.div`
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    border-radius: 24px;
    background-color: #191919;
    padding: 12px;
    color: #fff;
    margin-top: 2%;
    
    @media (max-width: 600px){
        width: 95%;
    }  
`;

export const ResultItem = styled.div`
    display: flex;
    margin: 2% 0%;
    cursor: pointer;
    border-radius: 16px;
    padding: 4px;
    transition: .3s;
    z=index: 25;

    &:hover{
        background-color: #232323;
    }
`;

export const Image = styled.img`
    width: 64px;
    height: 86px;
    border-radius: 12px;
    border: 2px solid #3A3A3A;
    margin-right: 2%;
`;

export const MovieInfo = styled.div`
    width: 100%;
    padding: 0% 1%;
`;

export const MovieTitle = styled.h3`
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    line-height: 16.94px;
`;

export const Year = styled.span`
    color: #B4B4B4;
    font-weight: 500;
    font-size: 13px;
    line-height: 12px;
`;