import React from "react";
import styled from "styled-components";

import { UseFlatMenu, useToggle } from "../../context/VagasContext";

const Menu = ({ children }) => {
  const { toggleMenu, setToggleMenu } = useToggle();
  const { flatMenu, setFlatMenu } = UseFlatMenu();

  console.log(flatMenu);
  return (
    <MenuWrapper>
      <ContentMenu toggle={toggleMenu} flat={flatMenu}>
        <MobileCloseButton onClick={() => setToggleMenu(false)} />
        <div>conteudo de teste</div>
        <ToggleFlapButton onClick={() => setFlatMenu(!flatMenu)} />
      </ContentMenu>
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  z-index: 1;
  grid-area: sideMenu;
  position: fixed;

  @media (min-width: 1360px) {
    position: relative;
  }
`;

const ContentMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;

  display: grid;
  grid-template-rows: 100px 1fr;

  width: 100vw;
  background: white;

  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: ${({ toggle }) =>
    !toggle ? "translateX(-100%)" : "translateX(0%)"};

  @media (min-width: 1360px) {
    width: ${({ flat }) => (!flat ? "270px" : "100px")};
    grid-template-rows: 1fr 100px;
    transform: translateX(0vh);
  }
`;

const MobileCloseButton = styled.div`
  display: grid;
  justify-self: right;

  width: 50px;
  height: 50px;
  background: red;

  @media (min-width: 1360px) {
    display: none;
  }
`;

const ToggleFlapButton = styled.div`
  width: 50px;
  height: 50px;
  background: green;
  display: none;

  @media (min-width: 1360px) {
    display: grid;
    justify-self: right;
  }
`;
