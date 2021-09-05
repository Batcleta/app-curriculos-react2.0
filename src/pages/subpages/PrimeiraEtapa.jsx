import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { themes } from "../../globalstyles/ColorStyles";
import { SwapButton } from "../../assets/images/SpecialIcons";
import {
  FormGroup,
  FormInput,
  FormLabel,
  FormSelect,
  ErrorMessage,
} from "../../globalstyles/GlobalStyles";

//Components
import FormHeader from "../../components/templates/FormHeader";

const PrimeiraEtapa = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  const comoSoube = watch("comoSoubeDaVaga") === "Indicação de funcionário";

  const onSubmit = async (data) => {
    await localStorage.setItem("comoSoube", JSON.stringify(data));
    props.history.push("/formulario/informacoes-principais");
  };

  return (
    <Wrapper>
      <FormWrapper>
        <FormHeader />
        <FormContent>
          <TextWrapper comoSoube={comoSoube}>
            <Title comoSoube={comoSoube}>Antes de começarmos</Title>
            <Description comoSoube={comoSoube}>
              Most coding courses treat design as an afterthought
            </Description>
          </TextWrapper>
          <ImageWrapper
            src={require("../../assets/images/web-form-image.svg").default}
          />

          <Form onSubmit={handleSubmit(onSubmit)} id={"myForm"}>
            <FormGroup comoSoube={comoSoube}>
              <FormLabel>
                <span>*</span>
                Como soube sobre a vaga?
              </FormLabel>

              <FormSelect
                type="text"
                placeholder="Escolha uma opção"
                {...register("comoSoubeDaVaga", { required: true })}
              >
                <option value={""}>Escolha uma opção</option>
                <option>Indicação de funcionário</option>
                <option>Indicação de amigos</option>
                <option>Whatsapp</option>
                <option>Internet</option>
              </FormSelect>
              {errors.comoSoubeDaVaga && (
                <ErrorMessage> Informe como soube da vaga</ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <FormLabel>
                <span>*</span>
                Qual a sua pretenção salarial?
              </FormLabel>
              <FormInput
                type="text"
                {...register("pretencaoSalarial", { required: true })}
              />
              {errors.pretencaoSalarial && (
                <ErrorMessage>Informe sua pretenção salarial</ErrorMessage>
              )}
            </FormGroup>

            {!comoSoube ? (
              ""
            ) : (
              <FormGroup>
                <FormLabel>
                  <span>*</span>
                  Qual o nome do funcionário?
                </FormLabel>
                <FormInput
                  type="text"
                  placeholder="Digite o nome do funcionário"
                  {...register("nomeDoFuncionarioQueIndicou", {
                    required: true,
                  })}
                />
                {errors.nomeDoFuncionarioQueIndicou && (
                  <ErrorMessage>Informe o nome do funcionário</ErrorMessage>
                )}
              </FormGroup>
            )}

            <DescribeBetter>
              <FormTextWrapper>
                <h2>Descreva em poucas palavras *</h2>
                <p>
                  Por que teve interesse em participar do nosso processo
                  seletivo
                </p>
              </FormTextWrapper>
              <div style={{ display: "grid" }}>
                <textarea
                  name=""
                  placeholder="Informe aqui"
                  {...register("motivoDaParticipacao", { required: true })}
                />
                {errors.motivoDaParticipacao && (
                  <ErrorMessage>Informe sua motivação</ErrorMessage>
                )}
              </div>
            </DescribeBetter>
          </Form>
        </FormContent>
      </FormWrapper>

      <NextButton form={"myForm"}>
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
  transition: 0.5s;

  @media (min-width: 1200px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    transform: ${({ comoSoube }) => (!comoSoube ? "translateY(5rem)" : "")};
  }
`;
const Title = styled.div`
  font-weight: 800;
  transition: 0.5s;

  font-size: ${({ comoSoube }) => (!comoSoube ? "1.5rem" : "1.375rem")};

  line-height: 1.75rem;
  color: ${themes.light.mainTextColor};
`;
const Description = styled.div`
  font-weight: normal;
  transition: 0.5s;

  font-size: ${({ comoSoube }) => (!comoSoube ? "1.2rem" : "1.05rem")};
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
const Form = styled.form`
  display: grid;
  gap: 2.2rem;

  @media (min-width: 1200px) {
    grid-column: 1 / 3;
    grid-row: 2 / 4;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, auto);
  }
`;
const DescribeBetter = styled.div`
  display: grid;
  gap: 2.2rem;

  textarea {
    //max-width: 18.125rem;
    height: 6.875rem;

    padding: 1rem;

    border: 1.2px solid ${themes.light.mainColor};
    box-sizing: border-box;
    border-radius: 0.75rem;

    font-size: 1rem;
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
const NextButton = styled.button`
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
