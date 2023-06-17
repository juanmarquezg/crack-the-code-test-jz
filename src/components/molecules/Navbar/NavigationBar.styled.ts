import styled from "styled-components";

const breakPoint = 855;

export const ImgLogo = styled.img`
  margin: 13px 0 13px 0;
  padding: 0;
  width: 75px;
`;

export const ImgGlobe = styled.img`
  margin: 0;
  padding: 0;
  width: 24px;
`;

export const ImgBurger = styled.img`
  margin: 0;
  padding: 0;
  width: 28px;

  @media (min-width: ${breakPoint}px) {
    display: none;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  background-color: white;
  justify-content: space-around;
  align-items: center;
  align-content: center;

  @media (max-width: ${breakPoint}px) {
    justify-content: space-between;
    margin: 0 20px;
  }
`;

export const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  cursor: pointer;
  margin: 0 40px;
  &.underline {
    text-decoration: underline;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  display: none;
  background-color: white;
`;

export const DropdownItem = styled.div`
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  

  &:hover ${Dropdown} {
    display: block;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  @media (max-width: ${breakPoint}px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  @media (max-width: ${breakPoint}px) {
    display: none;
  }
`;

export const Paragraph = styled.p`
  font-size: 14px;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 0.63rem 20px;
  border-radius: 0.5rem;
  transition: all 0.25s ease 0s;
  background: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  border: 2px solid rgb(0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4.5122px 6.76829px;
  width: 236px;
  font-size: 1.125rem;
  line-height: 1.69rem;
`;
