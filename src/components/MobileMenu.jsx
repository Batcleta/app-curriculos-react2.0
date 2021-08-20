import React from "react";
import styled from "styled-components";

import { useToggle } from "../context/VagasContext";

import BackButton from "./BackButton";

const MobileMenu = ({ back, icon }) => {
  const { toggleMenu, setToggleMenu } = useToggle();

  return (
    <Wrapper backOn={back}>
      {!back ? "" : <BackButton />}
      {!icon ? "" : ""}
      <ToggleMenu onClick={() => setToggleMenu(!toggleMenu)}></ToggleMenu>
    </Wrapper>
  );
};

export default MobileMenu;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ backOn }) => (!backOn ? "auto" : "auto auto")};
  align-items: center;
  padding: 1.25em;

  @media (min-width: 1360px) {
    display: none;
  }
`;

const ToggleMenu = styled.div`
  display: grid;
  justify-self: right;

  width: 3.125em;
  height: 3.125em;
  background: pink;
  border-radius: 50%;
`;
