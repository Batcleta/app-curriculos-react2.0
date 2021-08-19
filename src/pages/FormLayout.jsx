import React from "react";
import styled from "styled-components";
import BackButton from "../components/BackButton";
import MobileMenu from "../components/MobileMenu";

import Header from "../components/templates/Header";
import Main from "../components/templates/Main";

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
        </ContentWrapper>
      </Header>
      <Main></Main>
    </Wrapper>
  );
};

export default FormLayout;

const Wrapper = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: 400px auto;
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

const ContentWrapper = styled.div``;
const Title = styled.h2``;
const Description = styled.p``;
