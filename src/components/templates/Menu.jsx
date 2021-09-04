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
  z-index: 2;

  grid-area: menu;

  height: 100vh;

  background: white;

  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  width: ${({ flat }) => (!flat ? "16.9rem" : "6.25rem")};
`;

const Container = styled.div`
  display: grid;
  gap: 1.5rem;

  margin-top: 3rem;

  justify-items: center;
`;

const LogoWrapper = styled.div`
  display: grid;
  align-items: center;
`;
const Logo = styled.img``;

const NavWrapper = styled.div`
  display: grid;
  align-content: center;
  gap: 1rem;

  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.1rem;

    height: 3rem;

    padding: 0.688rem 1.5rem;

    transition: 0.2s ease-in;
    border-radius: 1.2rem;

    &.active {
      box-shadow: 10px 0px 30px rgba(34, 79, 169, 0.1);
      background: ${themes.light.mainTextColor};

      svg {
        path {
          fill: white;
        }
      }

      h2 {
        color: white;
      }
    }
  }
`;

const NavIcon = styled.div`
  > svg path {
    fill: ${themes.light.menuLinkColor};
  }
`;
const NavTitle = styled.h2`
  color: ${themes.light.menuLinkColor};
  display: ${({ flat }) => (!flat ? "auto" : "none")};
`;

const MenuImage = styled.div`
  position: relative;
  width: 100%;
  height: 21rem;

  img {
    position: absolute;
    width: 100%;
    left: 0;
  }
`;

const BackLinkWrapper = styled.div`
  display: grid;
  align-items: center;

  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;

    height: 55px;
    width: 100%;
    max-width: 350px;

    padding: 11px 20px;
  }
`;

const ToggleFlapButton = styled.div`
  display: none;

  position: absolute;
  right: 0;
  bottom: 2rem;

  width: ${({ flat }) => (!flat ? "6rem" : "4.7rem")};
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
