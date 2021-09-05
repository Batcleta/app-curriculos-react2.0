import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { themes } from "../../globalstyles/ColorStyles";

const Main = (props) => {
  const { children } = props;
  const history = useHistory().location.pathname;

  return <Wrapper history={history}>{children}</Wrapper>;
};

export default Main;

const Wrapper = styled.div`
  grid-area: main;

  background: ${({ history }) =>
    history !== "/formulario"
      ? `${themes.light.mainBackground}`
      : `${themes.light.mainColor}`};
`;
