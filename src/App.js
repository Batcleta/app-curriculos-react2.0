import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
// Templates
import Menu from "./components/templates/Menu";
import VagasLayout from "./pages/VagasLayout";
// Pages

const App = () => {
  return (
    <Wrapper>
      <Menu />
      <Switch>
        <Route exact path="/" component={VagasLayout} />
      </Switch>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* no modo mobile o menu é fixed */
  grid-template-areas: "PageLayout";

  @media (min-width: 1360px) {
    grid-template-columns: 270px auto;
    grid-template-areas: "sideMenu PageLayout";
    height: 100vh;
  }
`;
