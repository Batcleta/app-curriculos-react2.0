import React from "react";
import styled from "styled-components";
import { useFlatMenu, useToggle } from "../../context/VagasContext";
import MobileNav from "../MobileNav";

const Menu = () => {
  const { flatMenu, setFlatMenu } = useFlatMenu();
  const { toggleMenu } = useToggle();

  return (
    <Wrapper flat={flatMenu} toggle={toggleMenu}>
      <ContainerMenu flat={flatMenu}>
        <MobileNav />
        <ToggleFlapButton onClick={() => setFlatMenu(!flatMenu)} />
      </ContainerMenu>
    </Wrapper>
  );
};

export default Menu;

const Wrapper = styled.div`
  position: fixed;

  grid-area: menu;

  z-index: 2;

  overflow: hidden;

  height: 100vh;
  width: 100vw;

  background: white;

  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: ${({ toggle }) =>
    !toggle ? "translateX(-100%)" : "translateX(0%)"};

  @media (min-width: 1200px) {
    display: none;
  }
`;

const ContainerMenu = styled.div``;

const ToggleFlapButton = styled.div`
  position: absolute;
  right: 0;
  bottom: 2rem;

  width: 3.125em;
  height: 3.125em;
  display: none;
  background-color: pink;

  @media (min-width: 1280px) {
    display: grid;
    justify-self: right;
  }
`;
