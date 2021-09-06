import React from "react";
import styled from "styled-components";
import { themes } from "../globalstyles/ColorStyles";
import { useHistory } from "react-router-dom";

const LineBottom = () => {
  const history = useHistory().location.pathname;
  return <Wrapper history={history}></Wrapper>;
};

export default LineBottom;

const Wrapper = styled.div`
  position: absolute;
  bottom: -0.05rem;

  width: 100%;

  height: 1.3rem;

  border-radius: 0.75rem 0.75rem 0 0;

  background: ${({ history }) =>
    history.startsWith("/formulario")
      ? `${themes.light.mainColor}`
      : `${themes.light.mainBackground}`};

  @media (min-width: 1360px) {
    display: ${({ history }) =>
      history.startsWith("/formulario") ? "none" : "auto"};
  }
`;
