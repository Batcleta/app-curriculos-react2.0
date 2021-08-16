import React from "react";
import styled from "styled-components";

const Main = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Main;

const MainWrapper = styled.div`
  grid-area: main;
  /* height: 2000px; */
`;
