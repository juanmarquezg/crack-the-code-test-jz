import styled from "styled-components";

export const Container = styled.button<{ pressed: string }>`
  width: 102px;
  height: 34px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  background-color: ${(props) => (props.pressed ? "#9c56e0" : "#f6f6f6")};
  color: ${(props) => (props.pressed ? "#fff" : "#000")};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }

  &:active {
    background-color: #9c56e0;
  }
`;

