import React from "react";
import styled from "styled-components";
import FormHeader from "../../components/templates/FormHeader";
import { themes } from "../../globalstyles/ColorStyles";
import { SwapButton } from "../../assets/images/SpecialIcons";

const PrimeiraEtapa = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <FormHeader />
        <FormContent>
          <TextWrapper>
            <Title>Antes de começarmos</Title>
            <Description>
              Most coding courses treat design as an afterthought
            </Description>
          </TextWrapper>
          <ImageWrapper
            src={require("../../assets/images/web-form-image.svg").default}
          />
          <Form>
            <FormGroup>
              <label>
                <span>*</span>
                Como soube sobre a vaga?
              </label>
              <input type={"text"} />
            </FormGroup>
            <FormGroup>
              <label>
                <span>*</span>
                Nome do funcionário que fez a indicação
              </label>
              <input type={"text"} />
            </FormGroup>
            <FormGroup>
              <label>
                <span>*</span>
                Como soube sobre a vaga?
              </label>
              <input type={"text"} />
            </FormGroup>

            <DescribeBetter>
              <FormTextWrapper>
                <h2>Descreva em poucas palavras *</h2>
                <p>
                  Por que teve interesse em participar do nosso processo
                  seletivo
                </p>
              </FormTextWrapper>
              <textarea />
            </DescribeBetter>
          </Form>
        </FormContent>
      </FormWrapper>
      <NextButton>
        Seguinte
        <SwapButton />
      </NextButton>
    </Wrapper>
  );
};

export default PrimeiraEtapa;

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  padding-bottom: 100px;
`;
const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0px 20px 40px rgba(34, 79, 169, 0.1),
    inset 0px 4px 4px rgba(255, 255, 255, 0.25);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 12px;
`;

const FormContent = styled.div`
  display: grid;
  gap: 50px;

  padding: 40px 20px;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, auto);

    row-gap: 60px;
    padding: 30px 30px;
  }
`;

const TextWrapper = styled.div`
  @media (min-width: 1200px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;
const Title = styled.div`
  font-weight: 800;
  font-size: 22px;
  line-height: 28px;
  color: #5c4fb8;
`;
const Description = styled.div`
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  /* or 22px */

  color: #5a5a5a;
`;

const ImageWrapper = styled.img`
  display: none;

  @media (min-width: 1200px) {
    display: grid;
    justify-self: center;
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }
`;

const Form = styled.div`
  display: grid;
  gap: 35px;

  @media (min-width: 1200px) {
    grid-column: 1 / 3;
    grid-row: 2 / 4;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, auto);
  }
`;

const FormGroup = styled.div`
  display: grid;
  gap: 15px;

  > label {
    display: grid;
    grid-template-columns: 15px auto;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */

    color: rgba(0, 0, 0, 0.5);

    > span {
      color: ${themes.light.mainTextColor};
      font-size: 18px;
      font-weight: 800;
    }
  }
  > input {
    padding: 14px 16px;
    max-width: 292px;
    height: 50px;

    /* Main Color */

    border: 1.2px solid #7460ee;
    box-sizing: border-box;
    border-radius: 12px;

    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */

    color: rgba(0, 0, 0, 0.9);

    ::placeholder {
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      /* identical to box height */

      color: rgba(0, 0, 0, 0.9);
    }
  }

  @media (min-width: 1200px) {
    &:nth-child(1) {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }

    &:nth-child(2) {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
    }

    &:nth-child(3) {
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    }
  }
`;

const DescribeBetter = styled.div`
  display: grid;
  gap: 35px;
  textarea {
    max-width: 292px;
    height: 110px;

    border: 1.2px solid #7460ee;
    box-sizing: border-box;
    border-radius: 12px;
  }

  @media (min-width: 1200px) {
    grid-column: 1 / 3;

    grid-template-columns: 1fr 1fr;
  }
`;
const FormTextWrapper = styled.div`
  h2 {
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;

    color: #7460ee;
  }

  p {
    font-size: 15px;
    line-height: 130%;
    /* or 19px */

    color: rgba(0, 0, 0, 0.6);
  }
`;

const NextButton = styled.div`
  position: absolute;
  right: 0;
  margin-top: 30px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 6px 9px;
  width: 100%;
  max-width: 150px;
  height: 41px;

  background: white;
  border-radius: 22.5px;

  > svg {
    transform: rotate(180deg);
    path {
      fill: ${themes.light.mainTextColor};
    }
  }
`;
