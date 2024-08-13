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
    margin-bottom: 1%;
    
    @media (max-width: 600px){
        padding: 16px;
        height: 200px;
    }
`;

export const MovieInfoSection = styled.section`
    margin-top: 3%;
    display: flex;
`;

export const Wrapper = styled.div<{ width: string}>`
    width: ${props => props.width};
`;
    
export const WrapperTitle = styled.div`
    display: flex;
    align-items: center
`;

export const Span = styled.span`
    color: #B4B4B4;
`;
