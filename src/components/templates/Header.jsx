import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// Styles
import { themes } from "../../globalstyles/ColorStyles";

const Header = ({ children }) => {
  const history = useHistory().location.pathname;
  console.log(history);
  return (
    <HeaderWrapper history={history}>
      {children}
      <LineBottom history={history} />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: grid;
  grid-area: header;
  grid-template-rows: 4.375em auto 1.25em;

  background: ${({ history }) =>
    history === "/formulario"
      ? `${themes.light.MainBackground}`
      : `${themes.light.mainColor}`};

  @media (min-width: 1360px) {
    grid-template-rows: ${({ history }) =>
      history === "/formulario" ? `5em 1fr` : `1fr 1.25em`};
  }
`;

const LineBottom = styled.div`
  height: 1.25em;

  border-radius: 0.75em 0.75em 0 0;

  background: ${({ history }) =>
    history === "/formulario"
      ? `${themes.light.mainColor}`
      : `${themes.light.MainBackground}`};

  @media (min-width: 1360px) {
    display: ${({ history }) => (history === "/formulario" ? "none" : "auto")};
  }
`;
