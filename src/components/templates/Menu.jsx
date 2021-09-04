import React from "react";
import styled from "styled-components";
import { useFlatMenu, useToggle } from "../../context/VagasContext";
import { NavLink } from "react-router-dom";
import { themes } from "../../globalstyles/ColorStyles";

import {
  BackToSiteButton,
  GrupoTrilhaIcon,
  SwapButton,
  VagasIcon,
} from "../../assets/images/SpecialIcons";

const Menu = () => {
  const { flatMenu, setFlatMenu } = useFlatMenu();
  const { toggleMenu } = useToggle();

  return (
    <Wrapper flat={flatMenu}>
      <ContainerMenu flat={flatMenu} toggle={toggleMenu}>
        <Container flat={flatMenu}>
          <LogoWrapper>
            <Logo
              src={
                !flatMenu
                  ? `${
                      require("../../assets/images/web-logo-trilha-multicoisas.svg")
                        .default
                    }`
                  : `${
                      require("../../assets/images/form-header-logo.svg")
                        .default
                    }`
              }
              alt={""}
            />
          </LogoWrapper>
          <NavWrapper>
            <NavLink
              to={"/grupo-trilha"}
              flat={flatMenu}
              activeClassName={"active"}
            >
              <NavIcon>
                <GrupoTrilhaIcon />
              </NavIcon>
              <NavTitle flat={flatMenu}>O Grupo Trilha</NavTitle>
            </NavLink>
            <NavLink exact to={"/"} flat={flatMenu} activeClassName={"active"}>
              <NavIcon>
                <VagasIcon />
              </NavIcon>
              <NavTitle flat={flatMenu}>Lista de Vagas</NavTitle>
            </NavLink>
          </NavWrapper>
          <MenuImage flat={flatMenu}>
            <img
              src={
                !flatMenu
                  ? `${
                      require("../../assets/images/web-menu-image.svg").default
                    }`
                  : `${
                      require("../../assets/images/web-menu-image-flat.svg")
                        .default
                    }`
              }
              alt={""}
            />
          </MenuImage>
          <BackLinkWrapper>
            <NavLink to={"https://trilhatecnologia.com"} flat={flatMenu}>
              <NavIcon>
                <BackToSiteButton />
              </NavIcon>
              <NavTitle flat={flatMenu}>Voltar ao site</NavTitle>
            </NavLink>
          </BackLinkWrapper>
        </Container>
        <ToggleFlapButton
          flat={flatMenu}
          onClick={() => setFlatMenu(!flatMenu)}
        >
          <SwapButton />
        </ToggleFlapButton>
      </ContainerMenu>
    </Wrapper>
  );
};

export default Menu;

const Wrapper = styled.div`
  display: none;

  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  box-shadow: 10px 0px 30px rgba(34, 79, 169, 0.1);

  @media (min-width: 1200px) {
    display: grid;
    width: ${({ flat }) => (!flat ? "16.9rem" : "6.25rem")};
  }
`;

const ContainerMenu = styled.div`
  position: fixed;

  grid-area: menu;

  z-index: 2;

  overflow: hidden;

  height: 100vh;
  width: 100vw;

  background: white;

  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: ${({ toggle }) =>
    !toggle ? "translateX(100%)" : "translateX(0%)"};

  @media (min-width: 1200px) {
    width: ${({ flat }) => (!flat ? "16.9rem" : "6.25rem")};

    transform: translateX(0);
  }
`;

const Container = styled.div``;

const LogoWrapper = styled.div``;
const Logo = styled.img``;

const NavWrapper = styled.div``;

const NavIcon = styled.div``;
const NavTitle = styled.h2``;

const MenuImage = styled.div``;

const BackLinkWrapper = styled.div``;

const ToggleFlapButton = styled.div`
  display: none;

  position: absolute;
  right: 0;
  bottom: 2rem;

  width: ${({ flat }) => (!flat ? "5.121rem" : "4rem")};
  height: 3rem;

  cursor: pointer;

  background: ${themes.light.mainTextColor};
  border-radius: 2rem 0 0 2rem;

  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  > svg {
    transition: 1s cubic-bezier(0, 075 0.82 0, 165 1);
    transform: scale(1.3)
      ${({ flat }) => (!flat ? "rotate(0deg)" : "rotate(180deg)")};
    path {
      fill: white;
    }
  }

  @media (min-width: 1360px) {
    display: grid;
    align-items: center;
    padding-left: 1rem;
  }
`;
