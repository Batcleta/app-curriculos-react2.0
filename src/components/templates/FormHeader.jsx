import React from "react";
import styled from "styled-components";
import { themes } from "../../global/ColorStyles";

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
  gap: 5px;

  align-items: center;

  padding: 20px;

  @media (min-width: 1200px) {
    padding: 20px 30px;

    grid-template-columns: auto auto;
    justify-content: space-between;
  }
`;

const HeaderTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  /* identical to box height */
  color: ${themes.light.mainTextColor};
`;
const Informativo = styled.div`
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;

  color: #818181;
`;
const BottomLine = styled.div`
  position: absolute;
  bottom: 0;

  padding-left: 30px;

  height: 3px;
  width: 100%;

  background: #c1b7fe;

  > div {
    height: 3px;
    width: 100px;
    background: ${themes.light.mainColor};
  }
`;
