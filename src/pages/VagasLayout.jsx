import React from "react";
import styled from "styled-components";
// Templates
import Header from "../components/templates/Header";
import Main from "../components/templates/Main";
import Footer from "../components/templates/Footer";

const VagasLayout = () => {
  return (
    <LayoutWrapper>
      {" "}
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </LayoutWrapper>
  );
};

export default VagasLayout;

const LayoutWrapper = styled.div`
  display: grid;
  grid-area: PageLayout;

  grid-template-columns: auto;
  grid-template-rows: 300px auto 50px;

  grid-template-areas:
    "header"
    "main"
    "footer";
`;
