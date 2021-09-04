import React from "react";
import styled from "styled-components";
import { Container } from "../globalstyles/GlobalStyles";
import { useToggle, useVagas } from "../context/VagasContext";
import { themes } from "../globalstyles/ColorStyles";

const MobileNav = (props) => {
  const { toggleMenu, setToggleMenu } = useToggle();
  const { vagasDetails } = useVagas();

  return (
    <Wrapper toggle={toggleMenu} vagas={vagasDetails}>
      <Logo>
        {!toggleMenu ? (
          <img src={require("../assets/images/main-header-logo.svg").default} />
        ) : (
          <img src={require("../assets/images/form-header-logo.svg").default} />
        )}
      </Logo>
      <ToggleButton
        toggle={toggleMenu}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </ToggleButton>
    </Wrapper>
  );
};

export default MobileNav;

const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1200px) {
    display: none;
  }
`;

const Logo = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;

  width: 50px;
  height: 50px;
`;
const ToggleButton = styled.div`
  display: grid;
  justify-items: center;

  align-content: center;
  align-items: center;
  gap: 6px;

  width: 2.875rem;
  height: 2.875rem;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  background: ${({ toggle }) => (!toggle ? `` : `${themes.light.mainColor}`)};
  box-sizing: border-box;
  //box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25), 0px 20px 40px rgba(0, 0, 0, 0.25);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 50%;

  > span {
    width: 25px;
    height: 2px;
    background: rgba(255, 255, 255, 0.6);

    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:nth-child(1) {
      transform: ${({ toggle }) =>
        !toggle ? `` : `translate(0rem, .5rem) rotate(45deg)`};
    }

    &:nth-child(2) {
      transform: ${({ toggle }) =>
        !toggle ? `` : `translateX(-2rem) rotate(45deg)`};
      opacity: ${({ toggle }) => (!toggle ? `1` : `0`)};
    }

    &:nth-child(3) {
      transform: ${({ toggle }) =>
        !toggle ? `` : ` translate(0rem, -.5rem) rotate(-45deg)`};
    }
  }
`;
