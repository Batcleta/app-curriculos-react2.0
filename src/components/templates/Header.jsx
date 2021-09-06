import React from "react";
import styled from "styled-components";

import { themes } from "../../globalstyles/ColorStyles";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const { children } = props;
  const history = useHistory().location.pathname;

  return <Wrapper history={history}>{children}</Wrapper>;
};

export default Header;

const Wrapper = styled.div`
  position: relative;
  grid-area: header;

  display: grid;
  grid-template-rows: 5.625em auto 1.2em;

  background: ${({ history }) =>
    !history.startsWith("/formulario")
      ? `${themes.light.mainColor}`
      : `${themes.light.mainBackground}`};

  @media (min-width: 1200px) {
    grid-template-rows: auto 1.2em;
  }
`;
