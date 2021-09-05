import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

//Theming
import { themes } from "../globalstyles/ColorStyles";
import { Container, H2, MediumText } from "../globalstyles/GlobalStyles";

//components
import Header from "../components/templates/Header";
import Main from "../components/templates/Main";
import MobileNav from "../components/MobileNav";
import LineBottom from "../components/LineBottom";

//Pages
import PrimeiraEtapa from "./subpages/PrimeiraEtapa";
import SegundaEtapa from "./subpages/SegundaEtapa";

const JobApplicationPage = () => {
  return (
    <Wrapper>
      <Header>
        <MobileNav />
        <HeaderContainer>
          <Title>Learn the best tools and platforms</Title>
          <Description>
            Most coding courses treat design as an afterthought. Yet, the
            process of making{" "}
          </Description>
          <ProgressBar>
            <div></div>
          </ProgressBar>
          <CompleteStages></CompleteStages>
        </HeaderContainer>
        <LineBottom />
      </Header>
      <Main>
        <MainFormWrapper>
          <MainTitleWrapper>
            <MainTitle>Analista de sistemas</MainTitle>
            <MainDescription>chamada qualquer sobre a vaga</MainDescription>
          </MainTitleWrapper>
          <MainFormWrapper>
            <Switch>
              <Route path={"/formulario"} component={PrimeiraEtapa} />
            </Switch>
          </MainFormWrapper>
        </MainFormWrapper>
      </Main>
    </Wrapper>
  );
};

export default JobApplicationPage;

const Wrapper = styled.div`
  grid-area: page;

  display: grid;
  grid-template-rows: 25em auto;
  grid-template-areas:
    "header"
    "main";

  @media (min-width: 1280px) {
    grid-template-columns: 3fr 7fr;
    grid-template-rows: auto;
    grid-template-areas: "header main";
  }
`;

const HeaderContainer = styled.div`
  padding: 2.5rem 1.5rem;

  @media (min-width: 1280px) {
    padding-top: 5rem;
  }
`;
const Title = styled.div`
  margin-bottom: 1.2rem;

  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: ${themes.light.mainTextColor};
`;
const Description = styled.div`
  margin-bottom: 2rem;

  font-size: 1rem;
  line-height: 130%;
  color: ${themes.light.menuLinkColor};
`;
const ProgressBar = styled.div`
  display: grid;
  height: 0.8rem;

  background-color: ${themes.light.mainColorLight};
  border-radius: 1rem;

  div {
    width: 40%;
    height: 0.8rem;

    background-color: ${themes.light.mainColor};
    border-radius: 1rem;
  }
`;
const CompleteStages = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: grid;
  }
`;

//Main Styles
const MainFormWrapper = styled(Container)`
  padding-top: 2rem;

  @media (min-width: 1280px) {
    padding-top: 3rem;
  }
`;
const MainTitleWrapper = styled.div``;
const MainTitle = styled(H2)`
  color: ${themes.light.whiteColor};
`;
const MainDescription = styled(MediumText)`
  color: ${themes.light.lightWhiteColor};
`;
