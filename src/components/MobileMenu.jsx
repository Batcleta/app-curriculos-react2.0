import React from "react";
import styled from "styled-components";

import { useToggle } from "../context/VagasContext";

import BackButton from "./BackButton";

const MobileMenu = ({ back, icon }) => {
  const { setToggleMenu } = useToggle();

  return (
    <Wrapper backOn={back}>
      {!back ? "" : <BackButton />}
      {!icon ? "" : ""}
      <ToggleMenu onClick={() => setToggleMenu(true)}></ToggleMenu>
    </Wrapper>
  );
};

export default MobileMenu;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ backOn }) => (!backOn ? "auto" : "auto auto")};
  align-items: center;
  padding: 20px;

  @media (min-width: 1360px) {
    display: none;
  }
`;

const ToggleMenu = styled.div`
  display: grid;
  justify-self: right;

  width: 50px;
  height: 50px;
  background: pink;
  border-radius: 50%;
`;
