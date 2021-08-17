import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { themes } from "../globalstyles/ColorStyles";

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
          <ContentWrapper>
            <ImageWrapper>Logo</ImageWrapper>
            <CompanyTitle>Trilha Tecnologia</CompanyTitle>
            <JobTitle>Técnico de Informática</JobTitle>
          </ContentWrapper>
        </ContentHeader>
      </Header>
      <Main>
        <VagasDescription>
          Criada dia 05/07/2021
          <br />
          Expira em 20 dias
        </VagasDescription>
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
        <ApplyButton onClick={() => nextPage()} />
      </Main>
    </Wrapper>
  );
};

export default DetVagas;

const Wrapper = styled.div`
  position: fixed;
  top: 15px;
  right: 10px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 290px 1fr;
  grid-template-areas:
    "header"
    "main";

  width: 100vw;
  height: 100vh;

  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: ${({ active }) =>
    !active ? "translateX(110%)" : "translateX(0%)"};

  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  @media (min-width: 1360px) {
    width: 400px;
  }
`;

const ContentHeader = styled.div`
  padding: 50px 25px 20px;
  display: grid;
`;

const CloseButton = styled.div`
  display: none;
  @media (min-width: 1360px) {
    position: absolute;
    top: 30px;
    left: 30px;
    display: grid;
    justify-self: left;

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
  display: grid;
  justify-items: center;
`;
const ImageWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  height: 100px;
  width: 100px;

  border-radius: 50%;
  background: ${themes.light.MainBackground};
`;
const CompanyTitle = styled.div`
  font-size: 16px;
  line-height: 100%;
  color: #ffffff;

  @media (min-width: 1360px) {
    font-size: 18px;
  }
`;
const JobTitle = styled.div`
  font-weight: bold;
  font-size: 22px;
  line-height: 100%;
  color: #ffffff;
`;

const VagasDescription = styled.p``;
const VagasCardWrapper = styled.div``;
const VagasCard = styled.div``;
const CardTitle = styled.h1``;
const CardDescription = styled.p``;

const ApplyButton = styled.div`
  width: 50px;
  height: 50px;
  background: pink;
`;
