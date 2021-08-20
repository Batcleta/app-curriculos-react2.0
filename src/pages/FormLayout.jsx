import React from "react";
import styled from "styled-components";
import BackButton from "../components/BackButton";
import MobileMenu from "../components/MobileMenu";

import Header from "../components/templates/Header";
import Main from "../components/templates/Main";
import { Route, Switch } from "react-router-dom";

const FormLayout = () => {
  return (
    <Wrapper>
      <Header>
        <MobileMenu back="true" />
        <LargeNav>
          <BackButton />
        </LargeNav>
        <ContentWrapper>
          <Title>Learn the best tools and platforms</Title>
          <Description>
            Most coding courses treat design as an afterthought. Yet, the
            process of making
          </Description>
          <ProgressContainer>
            <ProgressBar />
          </ProgressContainer>
        </ContentWrapper>
      </Header>
      <Main>
        <Switch>
          <Route path={"/"} component={() => "teste de componente"} />
        </Switch>
      </Main>
    </Wrapper>
  );
};

export default FormLayout;

const Wrapper = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 25em auto;
  grid-template-areas:
    "header"
    "main";

  @media (min-width: 1360px) {
    grid-template-columns: 2fr 4fr;
    grid-template-rows: auto;
    grid-template-areas: "header main";
  }
`;

const LargeNav = styled.div`
  display: none;

  @media (min-width: 1360px) {
    display: grid;
  }
`;

const ContentWrapper = styled.div`
  @media (min-width: 1400px) {
    padding: 0.625em 3.75em;
  }
`;
const Title = styled.h2`
  font-weight: 800;
  font-size: 1.5625em;
  line-height: 1.5em;
  color: #5c4fb8;
`;
const Description = styled.p`
  font-size: 1.0625em;
  line-height: 130%;
  color: #5a5a5a;
`;

const ProgressContainer = styled.div`
  height: 0.75em;
  background: #c1b7fe;
  border-radius: 0.25em;
`;
const ProgressBar = styled.div`
  width: 40%;
  height: 0.75em;

  background: #5c4fb8;
  border-radius: 0.25em;
`;
