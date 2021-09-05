import React from "react";
import styled from "styled-components";
import { themes } from "../../globalstyles/ColorStyles";

const FormHeader = () => {
  return (
    <Wrapper>
      <HeaderTitle>Como Soube?</HeaderTitle>
      <Informativo>Os campos com * são obrigatórios</Informativo>
      <BottomLine>
        <div></div>
      </BottomLine>
    </Wrapper>
  );
};

export default FormHeader;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 0.6rem;

  align-items: center;

  padding: 1.25rem;

  @media (min-width: 1200px) {
    padding: 1.25rem 2rem;

    grid-template-columns: auto auto;
    justify-content: space-between;
  }
`;

const HeaderTitle = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
  /* identical to box height */
  color: ${themes.light.mainTextColor};
`;
const Informativo = styled.div`
  font-weight: 600;
  font-size: 0.8rem;

  color: ${themes.light.mainParColor};
`;
const BottomLine = styled.div`
  position: absolute;
  bottom: 0;

  padding-left: 2rem;

  height: 0.2rem;
  width: 100%;

  background: #c1b7fe;

  > div {
    height: 0.2rem;
    width: 20%;
    background: ${themes.light.mainColor};
  }
`;
