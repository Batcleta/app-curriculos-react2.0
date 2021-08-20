import React from "react";
import styled from "styled-components";
// Templates
import Header from "../components/templates/Header";
import Main from "../components/templates/Main";
import Footer from "../components/templates/Footer";
// Components
import DetVagas from "../components/DetVagas";
import MobileMenu from "../components/MobileMenu";
// styles
import { themes } from "../globalstyles/ColorStyles";
import { Container, H1, MediumText } from "../globalstyles/GlobalStyles";
// images
import searchIcon from "../assets/images/search-icon.svg";
import Card from "../components/Card";

const VagasLayout = () => {
  return (
    <LayoutWrapper>
      <Header>
        <MobileMenu />
        <HeaderContent>
          <TextWrapper>
            <Title>Learn the best tools and platforms</Title>
            <Description>
              Most coding courses treat design as an afterthought. Yet, the
              process of making
            </Description>
          </TextWrapper>

          <SearchWrapper>
            <img src={searchIcon} alt="" />
            <input type="text" placeholder="Informe a vaga desejada" />
          </SearchWrapper>

          {/* Tentar colocar um icone de reset */}
          <FilterReset>Resetar pesquisa</FilterReset>
        </HeaderContent>
      </Header>
      <Main>
        <MainContent>
          <VagasInfo>6 vagas encontradas</VagasInfo>
          <CardsWrapper>
            <Card />
            <Card />
            <Card />
          </CardsWrapper>
        </MainContent>
      </Main>
      <Footer />
      <DetVagas />
    </LayoutWrapper>
  );
};

export default VagasLayout;

const LayoutWrapper = styled.div`
  display: grid;
  grid-area: PageLayout;

  grid-template-columns: auto;
  grid-template-rows: 27.5em auto 3.125em;

  grid-template-areas:
    "header"
    "main"
    "footer";

  background: ${themes.light.MainBackground};

  @media (min-width: 1360px) {
    grid-template-rows: 18.75em auto 3.125em;
  }
`;
const HeaderContent = styled(Container)`
  display: grid;
  gap: 1.875em;
  align-content: center;
`;
const TextWrapper = styled.div`
  display: grid;
  gap: 0.9375em;

  @media (min-width: 1360px) {
    gap: 0.625em;
  }
`;
const Title = styled(H1)`
  color: white;
`;
const Description = styled(MediumText)`
  color: white;
`;
const SearchWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;

  > img {
    position: absolute;
    left: 1.25em;
  }

  > input {
    font-size: 1.0625em;
    color: #323232;

    max-width: 28.125em;
    height: 3.125em;
    padding-left: 3.75em;

    background: ${themes.light.MainBackground};
    border-radius: 4.25em;

    ::placeholder {
      color: #989898;
      font-weight: 600;
      letter-spacing: 0.03125em;
      font-size: 1em;
    }
  }
`;
const FilterReset = styled.p`
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

// main
const MainContent = styled(Container)`
  display: grid;
  gap: 1.5625em;
`;
const VagasInfo = styled.div``;

const CardsWrapper = styled.div`
  display: grid;
  gap: 1.5625em;
  grid-template-rows: repeat(3, auto);
  padding-bottom: 3.125em;

  @media (min-width: 1360px) {
    row-gap: 2.5em;
    grid-template-rows: auto;
    grid-template-columns: repeat(3, auto);
  }

  @media (min-width: 1400px) {
    gap: 3em;
  }
`;
