import styled from "styled-components";


export const FilterWrapper = styled.div`
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

export const FilterButton = styled.button`
    background-color: #313131;
    border: none;
    border-radius: 99px;
    width: 48px;
    height: 48px;
    margin-left: 3%;
    cursor: pointer;
    position: relative;
`;

export const GenresWrapper = styled.div`
    margin: 2% 0;
    display: flex;
    flex-flow: wrap;
`;

export const HR = styled.hr`
    background-color: #3A3A3A;
    width: 90%;
    height: 2px;
    border: none;
    margin-left: 50%;
    transform: translateX(-50%);
`;

export const Counter = styled.span`
    border-radius: 99px;
    color: #EEEE;
    font-size: 12px;
    font-weight: 600;
    background-color: #6E6E6E;
    padding: 2px, 4px, 2px, 4px;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    left: -5px;
`;

export const ShowMoreBtn = styled.div`
    color: #6E6E6E;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    display: inline-block;
    margin: 2% 0;
    display: flex;
    align-items: center;
`;

export const Arrow = styled.img`
    width: 14px;
    height: 14px;
    margin-left: 3%;
`;