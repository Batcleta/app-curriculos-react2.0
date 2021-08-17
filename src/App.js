import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
// Templates
import Menu from "./components/templates/Menu";
import VagasLayout from "./pages/VagasLayout";
import FormLayout from "./pages/FormLayout";
// Context
import { UseFlatMenu } from "./context/VagasContext";

const App = () => {
  const { flatMenu } = UseFlatMenu();
  return (
    <Wrapper flat={flatMenu}>
      <Menu />
      <Switch>
        <Route exact path="/" component={VagasLayout} />
        <Route path="/formulario" component={FormLayout} />
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
    grid-template-columns: ${({ flat }) =>
      !flat ? "270px auto" : "100px auto"};
    grid-template-areas: "sideMenu PageLayout";
    height: 100vh;
  }
`;
