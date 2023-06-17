import styled from "styled-components";

const breakPoint = 789;

export const ButtonListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: center;

  @media (max-width: ${breakPoint}px) {
    width: 100%;
  }
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 14px;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const DropdownButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 6px;
  background-color: #fff;
  color: #000;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.15), 0 1px 13px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  width: 100%;

  & a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  & a:hover {
    background-color: #ddd;
  }
`;

export const Dropdown = styled.div`
  &:hover ${DropdownContent} {
    display: block;
  }
`;

export const OptionLink = styled.a`
  width: 100%;
`;

export const ButtonText = styled.p`
  margin: 0;
`;

export const ButtonArrow = styled.p`
  margin: 0;
  color: #6058f6;
`;

export const ArrowImg = styled.img``;
