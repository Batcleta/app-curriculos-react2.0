import React from "react";
import styled from "styled-components";
import { themes } from "../globalstyles/ColorStyles";

const LineBottom = () => {
  return <Wrapper></Wrapper>;
};

export default LineBottom;

const Wrapper = styled.div`
  position: absolute;
  bottom: -0.05rem;

  width: 100%;

  height: 1.3rem;

  border-radius: 0.75rem 0.75rem 0 0;

  background: ${({ history }) =>
    history === "/formulario"
      ? `${themes.light.mainColor}`
      : `${themes.light.mainBackground}`};

  @media (min-width: 1360px) {
    display: ${({ history }) => (history === "/formulario" ? "none" : "auto")};
  }
`;
