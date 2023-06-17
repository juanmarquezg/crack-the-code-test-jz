import { StyledButtonProps } from "../../atoms/Button/types";

export interface ButtonItem extends StyledButtonProps {
  id: string;
}

export interface ButtonListProps {
  items: ButtonItem[];
}
