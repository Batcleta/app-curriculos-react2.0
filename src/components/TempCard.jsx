import React from "react";
import styled from "styled-components";
// Styles
import { themes } from "../globalstyles/ColorStyles";
// Context
import { useVagas } from "../context/VagasContext";
// icons
import LogoIcon from "../assets/images/company-temp-logo.svg";
import LocationIcon from "../assets/images/location-icon.svg";
import MoneyIcon from "../assets/images/money-icon.svg";
import { useHistory } from "react-router-dom";

const Card = () => {
  const { vagasDetails, setVagasDetails } = useVagas();

  const maisDetalhes = () => {
    setVagasDetails({ status: !vagasDetails, uuid: "" });
  };

  return (
    <CardWrapper>
      <CompanyInfo>
        <img src={LogoIcon} alt="Logo Trilhatecnologia" />
        <CompanyName>vagaEmpresa</CompanyName>
      </CompanyInfo>
      <JobInfo>
        <JobTitle>vagaNome</JobTitle>
        <JobDescription>vagaDescr</JobDescription>
        <JobList>
          <div>
            <img src={LocationIcon} alt="Regime icon" />
            regimeContrato
          </div>
          <div>
            <img src={MoneyIcon} alt="Money icon" />
            {`R$ salarioInicial à R$ salarioLimite`}
          </div>
        </JobList>
      </JobInfo>
      <NextButton onClick={() => maisDetalhes()}>mais detalhes</NextButton>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  display: grid;
  gap: 1.875em;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0.625em 0em 1.875em rgba(34, 79, 169, 0.1);
  border-radius: 0.75em;

  @media (min-width: 1280px) {
    grid-template-rows: auto 1fr auto;
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  gap: 0.9375em;
  align-items: center;
  padding: 1.25em 1.25em 0em;
`;
const CompanyName = styled.div``;

const JobInfo = styled.div`
  display: grid;
  grid-template-rows: 45px 1fr auto;
  gap: 1.25em;

  padding: 0em 1.25em;
`;
const JobTitle = styled.h2`
  font-size: 1.1875em;
  font-weight: bold;
  line-height: 130%;
  color: ${themes.light.mainTextColor};
`;
const JobDescription = styled.p`
  font-size: 15px;
  line-height: 130%;
  /* or 19px */

  color: #5a5a5a;
`;

const JobList = styled.div`
  display: grid;
  gap: 0.9375em;

  > div {
    display: grid;
    grid-template-columns: 0.9375em auto;
    gap: 0.9375em;

    font-weight: 600;
    font-size: 15px;
    color: #323232;

    img {
      display: grid;
      justify-self: center;
      height: 1em;
    }
  }
`;

const NextButton = styled.div`
  display: block;
  text-align: center;
  padding: 1.25em 0;

  cursor: pointer;
  border-radius: 0px 0px 0.75em 0.75em;

  background: ${themes.light.mainColor};
  font-weight: bold;
  color: white;
`;
