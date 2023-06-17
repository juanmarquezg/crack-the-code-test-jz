import { FC } from "react";

import { Container } from "./Button.styled";
import { StyledButtonProps } from "./types";

export const Button: FC<StyledButtonProps> = ({
  text,
  pressed,
  handleOnClick,
}) => {
  return (
    <Container
      data-testid={"button-test-id"}
      pressed={pressed}
      onClick={handleOnClick}
    >
      {text}
    </Container>
  );
};
