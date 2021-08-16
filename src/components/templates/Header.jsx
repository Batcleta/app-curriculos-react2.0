import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// Styles
import { themes } from "../../globalstyles/ColorStyles";

const Header = ({ children }) => {
  const history = useHistory().location.pathname;
  return (
    <HeaderWrapper>
      {children}
      <LineBottom history={history} />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: grid;
  grid-area: header;
  grid-template-rows: 70px auto 20px;

  background: ${({ history }) =>
    history === "/formulario"
      ? `${themes.light.MainBackground}`
      : `${themes.light.mainColor}`};

  @media (min-width: 1360px) {
    grid-template-rows: 1fr 20px;
  }
`;

const LineBottom = styled.div`
  height: 20px;

  border-radius: 12px 12px 0 0;

  background: ${({ history }) =>
    history === "/formulario"
      ? `${themes.light.mainColor}`
      : `${themes.light.MainBackground}`};

  @media (min-width: 1360px) {
    display: ${({ history }) => (history === "/formulario" ? "none" : "auto")};
  }
`;
