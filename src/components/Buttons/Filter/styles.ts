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