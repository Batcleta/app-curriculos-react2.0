import React from "react";
import styled from "styled-components";
import { themes } from "../../globalstyles/ColorStyles";

const Main = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Main;

const MainWrapper = styled.div`
  grid-area: main;
  background: ${themes.light.MainBackground};
  /* height: 2000px; */
`;
