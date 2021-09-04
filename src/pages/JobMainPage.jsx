import React from "react";
import styled from "styled-components";

//templates
import Header from "../components/templates/Header";
import Main from "../components/templates/Main";

//Components
import MobileNav from "../components/MobileNav";
import Footer from "../components/templates/Footer";
import LineBottom from "../components/LineBottom";
import TempCard from "../components/TempCard";
import DetVagas from "../components/DetVagas";
import searchIcon from "../assets/images/search-icon.svg";
import { Container, H1, MediumText } from "../globalstyles/GlobalStyles";
import { themes } from "../globalstyles/ColorStyles";

const JobMainPage = () => {
  return (
    <Wrapper>
      <DetVagas />
      <Header>
        <MobileNav />
        <HeaderContainer>
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
        </HeaderContainer>
        <LineBottom />
      </Header>
      <Main>
        <MainContainer>
          <VagasInfo>6 vagas encontradas</VagasInfo>
          <JobContainer>
            <TempCard /> <TempCard /> <TempCard />
          </JobContainer>
        </MainContainer>
      </Main>
      <Footer></Footer>
    </Wrapper>
  );
};

export default JobMainPage;

const Wrapper = styled.div`
  grid-area: page;

  display: grid;
  grid-auto-rows: 27.5rem auto 3.125rem;

  grid-template-areas:
    "header"
    "main"
    "footer";

  @media (min-width: 1200px) {
    grid-auto-rows: 19rem auto 3.125rem;
  }
`;

const HeaderContainer = styled(Container)`
  display: grid;
  gap: 1.875rem;
  align-content: center;
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 0.9375rem;
`;

const Title = styled(H1)`
  color: white;
`;

const Description = styled(MediumText)`
  color: #ffffff;
`;

const SearchWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;

  > img {
    position: absolute;
    left: 1.25rem;
  }

  > input {
    font-size: 1.0625rem;
    color: #323232;

    height: 3rem;
    max-width: 28.125rem;

    padding-left: 3.75rem;

    background: ${themes.light.mainBackground};
    border-radius: 4.25rem;

    ::placeholder {
      color: ${themes.light.mainParColor};
      letter-spacing: 0.03125rem;
      font-size: 1rem;
    }
  }
`;

const FilterReset = styled.div`
  cursor: pointer;

  max-width: 8.5rem;
  border-radius: 1rem;

  padding: 0.5rem;

  background-color: ${themes.light.mainBackground};

  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${themes.light.mainTextColor};
`;

const JobContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

const MainContainer = styled(Container)``;

const VagasInfo = styled.div`
  margin: 1rem 0 2rem 1.4rem;
`;
