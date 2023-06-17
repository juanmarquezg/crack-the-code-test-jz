import React from "react";

import {
  Title,
  ArrowImg,
  Dropdown,
  OptionLink,
  ButtonText,
  DropdownButton,
  DropdownContent,
  DropdownContainer,
  ButtonListContainer,
} from "./ButtonList.styled";
import { ButtonListProps } from "./types";
import { Button } from "../../atoms/Button";
import Arrow from "../../../assets/Arrow.svg";
import { useWindowSize } from "../../../hooks/useWindowResize";

export const ButtonList: React.FC<ButtonListProps> = ({ items }) => {
  const { isResized } = useWindowSize();

  console.log("isResizas", isResized);

  return (
    <ButtonListContainer>
      <Title>Edades:</Title>
      {!isResized ? (
        items.map((item) => (
          <Button
            key={item.id}
            pressed={item.pressed ? "1" : ""}
            handleOnClick={item.handleOnClick}
            text={item.text}
          />
        ))
      ) : (
        <DropdownContainer>
          <Dropdown>
            <DropdownButton>
              <ButtonText>{items[0].text}</ButtonText>
              <ArrowImg src={Arrow} />
            </DropdownButton>
            <DropdownContent>
              {items.map((item) => (
                <OptionLink>{item.text}</OptionLink>
              ))}
            </DropdownContent>
          </Dropdown>
        </DropdownContainer>
      )}
    </ButtonListContainer>
  );
};
