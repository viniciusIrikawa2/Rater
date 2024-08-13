import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow: hidden;
    
    @media (max-width: 600px){
        flex-direction: column;
        width: 100%;
    }

    @media screen and (min-width: 1800px){
        justify-content: space-around;
    }

`;

export const MainFeaturedWrapper = styled.div`

`;

export const SecondaryFeaturedWrapper = styled.div`
   margin-left: 1%;
`;