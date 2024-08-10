import styled from "styled-components";

export const BannerSection = styled.section<{ backgroundImg: string }>`
    height: 476px;
    padding: 48px;
    border-radius: 24px;
    background-image: url(${props => props.backgroundImg});
    display: flex;
    align-items: end;
`;