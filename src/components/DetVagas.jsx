import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import { UseFlatMenu, useVagas } from "../context/VagasContext";
import Header from "./templates/Header";
import Main from "./templates/Main";

const DetVagas = () => {
  const { setFlatMenu } = UseFlatMenu();
  const { vagasDetails, setVagasDetails } = useVagas();
  const history = useHistory();

  const nextPage = () => {
    history.push("/formulario");
    setFlatMenu(true);
    setVagasDetails(false);
  };

  return (
    <Wrapper active={vagasDetails}>
      <Header>
        <MobileCloseButton onClick={() => setVagasDetails(false)} />
        <ContentHeader>
          <CloseButton onClick={() => setVagasDetails(false)} />
          <ContentWrapper>teste</ContentWrapper>
        </ContentHeader>
      </Header>
      <Main>
        <ApplyButton onClick={() => nextPage()} />
      </Main>
    </Wrapper>
  );
};

export default DetVagas;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 330px 1fr;
  grid-template-areas:
    "header"
    "main";

  width: 100vw;
  height: 100vh;

  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: ${({ active }) =>
    !active ? "translateX(100%)" : "translateX(0%)"};

  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  @media (min-width: 1360px) {
    width: 400px;
  }
`;

const ContentHeader = styled.div`
  padding: 25px;
  display: grid;
`;

const CloseButton = styled.div`
  display: none;
  @media (min-width: 1360px) {
    display: grid;
    justify-self: right;

    width: 50px;
    height: 50px;
    background: red;
  }
`;

const MobileCloseButton = styled(CloseButton)`
  display: grid;
  width: 50px;
  height: 50px;
  background: red;
  margin: 20px;
  @media (min-width: 1360px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  background: pink;
`;

const ApplyButton = styled.div`
  width: 50px;
  height: 50px;
  background: pink;
`;
