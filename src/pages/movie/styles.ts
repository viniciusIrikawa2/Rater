import styled from "styled-components";

export const BannerSection = styled.section<{ backgroundImg: string }>`
    height: 476px;
    padding: 48px;
    border-radius: 24px;
    background-image: url(${props => props.backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: end;
    position: relative;
    margin-bottom: 2%;
    
    @media (max-width: 600px){
        padding: 16px;
        height: 200px;
    }
`;
    
export const MovieInfoSection = styled.section`
    margin-top: 3%;
    display: flex;
    flex-direction: row;

    @media (max-width: 600px){
        flex-direction: column;
    }
`;
    
export const Wrapper = styled.div<{ width: string}>`
    width: ${props => props.width};

    @media (max-width: 600px){
        width: 100%;
        margin-bottom: 5%;
    }
`;
    
export const WrapperTitle = styled.div`
    display: flex;
    align-items: center
`;

export const Span = styled.span`
    color: #B4B4B4;

    @media (max-width: 600px){
        font-size: 14px;
    }
`;
