import styled from "styled-components";

import HomeBanner from "../../../assets/homeBanner.png";
import homeBannerMobile from "../../../assets/homeBannerMobile.png";

const breakPoint = 1150;

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  height: 211px;
  width: 100%;
  max-width: 1272px;
  background-image: url(${HomeBanner});
  background-size: cover;
  background-repeat: no-repeat, repeat;

  @media (max-width: ${breakPoint}px) {
    flex-direction: column;
    height: 483px;
    width: 80%;
    align-items: center;
    justify-content: flex-end;
    background-image: url(${homeBannerMobile});
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 320px;
  color: #fff;
  @media (max-width: ${breakPoint}px) {
    margin-left: 10px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin: 0;

  @media (max-width: ${breakPoint}px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  line-height: 40px;
  margin: 0 0 10px 0;

  @media (max-width: ${breakPoint}px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  gap: 8px;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.25s ease;
  width: 249px;
  height: 50px;
  overflow: hidden;
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  margin-top: 30px;

  &:hover {
    background: #555;
    color: #fff;
  }

  @media (max-width: ${breakPoint}px) {
    width: 80%;
    align-self: center;
    margin-bottom: 20px;
  }
`;
