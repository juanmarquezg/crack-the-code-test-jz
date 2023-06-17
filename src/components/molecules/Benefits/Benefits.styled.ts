import styled from "styled-components";

const breakPoint = 885;

export const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 100px 0 100px 0;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 48px;
  line-height: 56px;
`;

export const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${breakPoint}px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ImageColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const TextColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 20px;
`;

export const Text = styled.p`
  margin-bottom: 20px;
`;

export const IconContainer = styled.img`
  margin-right: 15px;
`;

export const RowContainer = styled.div`
  display: flex;
  margin: 8px 0;
`;
