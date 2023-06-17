// import { useState } from "react";

import Logo from "../../../assets/Logo.svg";
import Globe from "../../../assets/Globe.svg";
import Burger from "../../../assets/Burger.svg";

import {
  ImgLogo,
  ImgGlobe,
  Navbar,
  NavItem,
  DropdownContainer,
  // Dropdown,
  // DropdownItem,
  ImgBurger,
  Button,
  Paragraph,
  LeftContainer,
  RightContainer,
} from "./NavigationBar.styled";

export const NavigationBar = () => {
  // const [open, setOpen] = useState(false);

  return (
    <Navbar>
      <ImgLogo src={Logo} />
      <LeftContainer>
        <DropdownContainer>
          <NavItem>
            <Paragraph>Programas</Paragraph>
          </NavItem>
          {/* <Dropdown>
          <DropdownItem>Cursos</DropdownItem>
          <DropdownItem>Rutas de aprendizaje</DropdownItem>
          <DropdownItem>Programas espaciales</DropdownItem>
        </Dropdown> */}
        </DropdownContainer>
        <NavItem>
          <Paragraph>Empresas</Paragraph>
        </NavItem>
        <DropdownContainer>
          <NavItem>
            <Paragraph>Nosotros</Paragraph>
          </NavItem>
          {/*  <Dropdown>
          <DropdownItem>Qué es Crack The Code?</DropdownItem>
          <DropdownItem>Blog</DropdownItem>
          <DropdownItem>Trabaja con nosotros</DropdownItem>
        </Dropdown> */}
        </DropdownContainer>
      </LeftContainer>
      <RightContainer>
        <NavItem>
          <ImgGlobe src={Globe} />
          <Paragraph>Global US$</Paragraph>
        </NavItem>
        <NavItem className="underline">
          <Paragraph>Ingresar</Paragraph>
        </NavItem>
        <NavItem>
          <Button>Prueba una clase gratis</Button>
        </NavItem>
      </RightContainer>
      <ImgBurger src={Burger} />
    </Navbar>
  );
};
