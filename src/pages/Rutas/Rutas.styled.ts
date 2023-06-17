import styled from "styled-components";

const breakPoint = 1290;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  width: 100%;
`;

export const BannerContainer = styled.section`
  background: #583af0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: center;
  max-width: 1276px;
  width: 100%;
`;

export const ButtonListContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  align-content: left;
  padding: 24px 0;
  border-bottom: 1px solid #e5e5e5;
  max-width: 1276px;
  width: 100%;
  margin-bottom: 24px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: left;
  align-content: left;
  @media (max-width: ${breakPoint}px) {
    justify-content: space-around;
  }
`;

export const CardContainer = styled.div`
  margin: 0 15px 30px 0;
`;
