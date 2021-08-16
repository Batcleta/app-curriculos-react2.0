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

const Card = () => {
  const { vagasDetails, setVagasDetails } = useVagas();

  const maisDetalhes = () => {
    setVagasDetails(!vagasDetails);
    //passar as informações da vaga
  };

  return (
    <CardWrapper>
      <CompanyInfo>
        <img src={LogoIcon} alt="Logo Trilhatecnologia" />
        <CompanyName>Trilha Tecnologia</CompanyName>
      </CompanyInfo>
      <JobInfo>
        <JobTitle>Auxiliar de Técnico de informática</JobTitle>
        <JobDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </JobDescription>
        <JobList>
          <div>
            <img src={LocationIcon} alt="Location icon" />
            JD João XXIII
          </div>
          <div>
            <img src={MoneyIcon} alt="Money icon" />
            R$ 1.200 - R$ 2.000
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
  gap: 30px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 10px 0px 30px rgba(34, 79, 169, 0.1);
  border-radius: 12px;
`;

const CompanyInfo = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 20px 20px 0px;
`;
const CompanyName = styled.div``;

const JobInfo = styled.div`
  display: grid;
  gap: 20px;
  padding: 0px 20px;
`;
const JobTitle = styled.h2`
  font-size: 19px;
  font-weight: bold;
  line-height: 130%;
  color: #5c4fb8;
`;
const JobDescription = styled.p``;

const JobList = styled.div`
  display: grid;
  gap: 15px;

  > div {
    display: grid;
    grid-template-columns: 15px auto;
    gap: 15px;

    font-weight: bold;
    color: #323232;

    img {
      display: grid;
      justify-self: center;
      height: 16px;
    }
  }
`;

const NextButton = styled.div`
  display: block;
  text-align: center;
  padding: 20px 0;

  cursor: pointer;
  border-radius: 0px 0px 12px 12px;

  background: ${themes.light.mainColor};
  font-weight: bold;
  color: white;
`;
