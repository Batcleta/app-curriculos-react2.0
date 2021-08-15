import React from "react";
import styled from "styled-components";

const Menu = () => {
  return (
    <MenuWrapper>
      <ContentMenu>conteudo do menu</ContentMenu>
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  grid-area: sideMenu;
`;

const ContentMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 270px;
  background: white;
`;
