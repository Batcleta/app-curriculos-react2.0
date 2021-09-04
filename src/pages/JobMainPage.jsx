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

const JobMainPage = () => {
  return (
    <Wrapper>
      <DetVagas />
      <Header>
        <MobileNav />

        <LineBottom />
      </Header>
      <Main>
        <JobContainer>
          <TempCard />
        </JobContainer>
      </Main>
      <Footer></Footer>
    </Wrapper>
  );
};

export default JobMainPage;

const Wrapper = styled.div`
  grid-area: page;

  display: grid;
  grid-auto-rows: 27.5em auto 3.125rem;

  grid-template-areas:
    "header"
    "main"
    "footer";

  @media (min-width: 1200px) {
    grid-auto-rows: 19rem auto 3.125rem;
  }
`;

const JobContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
`;
