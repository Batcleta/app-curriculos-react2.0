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
  top: 15px;
  right: 10px;
  bottom: 15px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 290px 1fr;
  grid-template-areas:
    "header"
    "main";

  width: 100vw;

  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: ${({ active }) =>
    !active ? "translateX(110%)" : "translateX(0%)"};

  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  overflow-y: auto;

  @media (min-width: 1360px) {
    width: 390px;
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

const MainWrapper = styled.div`
  display: grid;
  gap: 25px;

  background: ${themes.light.MainBackground};
  padding: 10px 25px;
`;
const VagasDescription = styled.p`
  font-size: 14px;
`;
const VagasCardWrapper = styled.div`
  display: grid;
  gap: 20px;
`;
const VagasCard = styled.div`
  display: grid;
  gap: 15px;

  padding: 25px 20px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 10px 0px 30px rgba(34, 79, 169, 0.1);
  border-radius: 16px;

  ul {
    padding: 0px 20px;
    li {
      list-style-type: square;
      padding: 5px 0px;
      font-size: 15px;
      line-height: 130%;
    }
  }
`;
const CardTitle = styled.h2`
  font-weight: bold;
  font-size: 17px;
  color: #5c4fb8;
`;
const CardDescription = styled.p`
  font-size: 15px;
  line-height: 130%;
`;

const ApplyButton = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  margin: 0 auto;

  width: 100%;
  height: 60px;
  background: #7460ee;
  box-shadow: 10px 0px 30px rgba(34, 79, 169, 0.1);
  border-radius: 16px;

  color: white;
  font-size: 16px;
`;
