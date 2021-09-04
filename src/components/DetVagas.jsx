import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { themes } from "../globalstyles/ColorStyles";

import { useFlatMenu, useVagas } from "../context/VagasContext";
import Header from "./templates/Header";
import LineBottom from "./LineBottom";

const DetVagas = () => {
  const { setFlatMenu } = useFlatMenu();
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
          <ContentWrapper>
            <ImageWrapper>Logo</ImageWrapper>
            <CompanyTitle>Trilha Tecnologia</CompanyTitle>
            <JobTitle>Técnico de Informática</JobTitle>
          </ContentWrapper>
        </ContentHeader>
        <LineBottom />
      </Header>
      <MainWrapper>
        <VagasDescription>Criada dia 05/07/2021</VagasDescription>
        <VagasCardWrapper>
          <VagasCard>
            <CardTitle>Descrição da vaga</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliqui
            </CardDescription>
            <ul>
              <li>Regime de contrato: CLT</li>
              <li>Período: Seg a sex das 08:00 as 18:00</li>
              <li>Faixa salarial: R$ 7.000 - R$ 9.000</li>
              <li>Localização da empresa: Jd João XXIII - São Paulo - SP</li>
            </ul>
          </VagasCard>
          <VagasCard>
            <CardTitle>Requisitos da Vaga</CardTitle>
            <ul>
              <li>Idade mínima: 22 anos</li>
              <li>Experiência comprovada: 2 a 5 anos</li>
              <li>
                Desejável capacitação nas áreas: Telecomunicação, vendas ou
                telemarketing
              </li>
              <li>Necessita residir próximo a empresa</li>
              <li>Necessita Carteira de Habilitação categorias A e B</li>
            </ul>
          </VagasCard>
        </VagasCardWrapper>
        <ApplyButton onClick={() => nextPage()}>
          Quero me candidatar
        </ApplyButton>
      </MainWrapper>
    </Wrapper>
  );
};

export default DetVagas;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 19em 1fr;
  grid-template-areas:
    "header"
    "main";

  width: 100vw;

  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: ${({ active }) =>
    !active ? "translateX(110%)" : "translateX(0%)"};

  box-shadow: 0em 0em 3.125em rgba(0, 0, 0, 0.2);
  border-radius: 0em;
  overflow-y: auto;

  @media (min-width: 1360px) {
    grid-template-rows: 18.125em 1fr;

    width: 24.375em;

    top: 0.5em;
    right: 0;
    bottom: 0.5em;

    border-radius: 1em;
  }
`;

const ContentHeader = styled.div`
  //padding: 3.125em 1.5625em 1.25em;
  display: grid;

  align-content: start;

  @media (min-width: 1200px) {
    align-content: center;
  }
`;

const CloseButton = styled.div`
  display: none;

  @media (min-width: 1360px) {
    position: absolute;
    top: 1.875em;
    left: 1.875em;
    display: grid;
    justify-self: left;

    width: 3.125em;
    height: 3.125em;
    background: red;
  }
`;

const MobileCloseButton = styled(CloseButton)`
  display: grid;
  width: 3.125em;
  height: 3.125em;
  background: red;
  margin: 1.25em;

  @media (min-width: 1360px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  justify-items: center;
`;

const ImageWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  height: 6.25em;
  width: 6.25em;

  border-radius: 50%;
  background: ${themes.light.mainBackground};
`;

const CompanyTitle = styled.div`
  font-size: 1em;
  line-height: 100%;
  color: #ffffff;

  @media (min-width: 1360px) {
    font-size: 1.125em;
  }
`;
const JobTitle = styled.div`
  font-weight: bold;
  font-size: 1.375em;
  line-height: 100%;
  color: #ffffff;
`;

const MainWrapper = styled.div`
  display: grid;
  gap: 1.5625em;

  background: ${themes.light.mainBackground};
  padding: 0.625em 1.5625em;
`;

const VagasDescription = styled.p`
  font-size: 0.875em;
`;

const VagasCardWrapper = styled.div`
  display: grid;
  gap: 1.25em;
`;

const VagasCard = styled.div`
  display: grid;
  gap: 0.9375em;

  padding: 1.5625em 1.25em;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0.625em 0em 1.875em rgba(34, 79, 169, 0.1);
  border-radius: 1em;

  ul {
    padding: 0em 1.25em;
    li {
      list-style-type: square;
      padding: 0.3125em 0em;
      font-size: 0.9375em;
      line-height: 130%;
    }
  }
`;

const CardTitle = styled.h2`
  font-weight: bold;
  font-size: 1.0625em;
  color: ${themes.light.mainTextColor};
`;

const CardDescription = styled.p`
  font-size: 0.9375em;
  line-height: 130%;
`;

const ApplyButton = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  margin: 0 auto;

  width: 100%;
  height: 3.75em;
  background: ${themes.light.mainColor};
  box-shadow: 0.625em 0em 1.875em rgba(34, 79, 169, 0.1);
  border-radius: 1em;

  color: white;
  font-size: 1em;
`;
