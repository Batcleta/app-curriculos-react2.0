import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { themes } from "../../globalstyles/ColorStyles";

const Main = ({ children }) => {
  const history = useHistory().location.pathname;
  return <MainWrapper history={history}>{children}</MainWrapper>;
};

export default Main;

const MainWrapper = styled.div`
  grid-area: main;
  background: ${({ history }) =>
    history === "/formulario"
      ? `${themes.light.mainColor}`
      : `${themes.light.MainBackground}`};
`;
