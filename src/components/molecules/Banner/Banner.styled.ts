import styled from "styled-components";

const breakPoint = 855;

export const Container = styled.div`
  background: #583af0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  color: #fff;
  max-width: 1276px;

  @media (max-width: ${breakPoint}px) {
    flex-direction: column;
  }
`;

export const ImgBanner = styled.img`
  margin: 0;
  padding: 0;
  width: 646px;
  height: 320px;
`;

export const Paragraph = styled.p`
  font-size: 24px;
  line-height: 32px;

  @media (max-width: ${breakPoint}px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const HeadingOne = styled.h1`
  font-size: 56px;
  line-height: 64px;
  @media (max-width: ${breakPoint}px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const TextContainer = styled.div`
  @media (max-width: ${breakPoint}px) {
    max-width: 400px;
  }
`;

export const TitleContainer = styled.div``;

export const DescriptionContainer = styled.div``;
