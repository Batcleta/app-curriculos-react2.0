import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

//Components
import Menu from "./components/templates/Menu";

//Pages
import JobMainPage from "./pages/JobMainPage";
import JobApplicationPage from "./pages/JobApplicationPage";
import CompanyGroupPage from "./pages/CompanyGroupPage";
import MobileMenu from "./components/templates/MobileMenu";

const App = () => {
  return (
    <Wrapper>
      <Menu />
      <MobileMenu />
      <Switch>
        <Route exact path={"/"} component={JobMainPage} />
        <Route path={"/grupo-trilha"} component={CompanyGroupPage} />
        <Route path={"formulario"} component={JobApplicationPage} />
      </Switch>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;

  grid-template-areas: "page";

  height: 100vh;

  @media (min-width: 1200px) {
    grid-template-columns: ${({ flat }) => (!flat ? "auto 1fr" : "auto 1fr")};

    grid-template-areas: "menu page";
  }
`;
