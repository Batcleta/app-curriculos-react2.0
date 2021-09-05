import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import FormHeader from "../../components/templates/FormHeader";
import { themes } from "../../globalstyles/ColorStyles";
import { SwapButton } from "../../assets/images/SpecialIcons";

const PrimeiraEtapa = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log("teste bem sucedido");
  };

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
          <Form onSubmit={handleSubmit(onSubmit)}>
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
            <NextButton type={"submit"} />
          </Form>
        </FormContent>
      </FormWrapper>
    </Wrapper>
  );
};

export default PrimeiraEtapa;

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  padding-bottom: 6.25rem;
`;
const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0px 20px 40px rgba(34, 79, 169, 0.1),
    inset 0px 4px 4px rgba(255, 255, 255, 0.25);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 1rem;
`;

const FormContent = styled.div`
  display: grid;
  gap: 3.125rem;

  padding: 2.5rem 1.25rem;

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, auto);

    row-gap: 3.75rem;
    padding: 2rem 2rem;
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
  font-size: 1.375rem;
  line-height: 1.75rem;
  color: ${themes.light.mainTextColor};
`;
const Description = styled.div`
  font-weight: normal;
  font-size: 1.05rem;
  line-height: 130%;
  /* or 22px */

  color: ${themes.light.menuLinkColor};
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
  gap: 2.2rem;

  @media (min-width: 1200px) {
    grid-column: 1 / 3;
    grid-row: 2 / 4;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, auto);
  }
`;

const FormGroup = styled.div`
  display: grid;
  gap: 0.93rem;

  > label {
    display: grid;
    grid-template-columns: 0.93rem auto;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.125rem;
    /* identical to box height */

    color: rgba(0, 0, 0, 0.5);

    > span {
      color: ${themes.light.mainTextColor};
      font-size: 1.125rem;
      font-weight: 800;
    }
  }
  > input {
    padding: 0.875rem 1rem;
    max-width: 18.125rem;
    height: 3.125rem;

    /* Main Color */

    border: 1px solid ${themes.light.mainColor};
    box-sizing: border-box;
    border-radius: 0.75rem;

    font-weight: normal;
    font-size: 0.875rem;
    line-height: 1.125rem;
    /* identical to box height */

    color: rgba(0, 0, 0, 0.9);

    ::placeholder {
      font-weight: normal;
      font-size: 0.875rem;
      line-height: 1.125rem;
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
  gap: 2.2rem;
  textarea {
    max-width: 18.125rem;
    height: 6.875rem;

    border: 1.2px solid ${themes.light.mainColor};
    box-sizing: border-box;
    border-radius: 0.75rem;
  }

  @media (min-width: 1200px) {
    grid-column: 1 / 3;

    grid-template-columns: 1fr 1fr;
  }
`;
const FormTextWrapper = styled.div`
  h2 {
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.438rem;

    color: ${themes.light.mainColor};
  }

  p {
    font-size: 0.938rem;
    line-height: 130%;
    /* or 19px */

    color: rgba(0, 0, 0, 0.6);
  }
`;

const NextButton = styled.input`
  position: absolute;
  right: 0;
  margin-top: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  padding: 0.375rem 0.563rem;
  width: 100%;
  max-width: 9.375rem;
  height: 2.5rem;

  background: white;
  border-radius: 1.2rem;

  > svg {
    transform: rotate(180deg);
    path {
      fill: ${themes.light.mainTextColor};
    }
  }
`;
