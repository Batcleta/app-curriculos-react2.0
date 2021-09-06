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
  FormWrapper,
  Title,
  Description,
  FormContent,
  Form,
  NextButton,
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
        <TempFormContent>
          <TextWrapper comoSoube={comoSoube}>
            <Title comoSoube={comoSoube}>Antes de começarmos</Title>
            <Description comoSoube={comoSoube}>
              Most coding courses treat design as an afterthought
            </Description>
          </TextWrapper>
          <ImageWrapper
            src={require("../../assets/images/web-form-image.svg").default}
          />

          <TempForm onSubmit={handleSubmit(onSubmit)} id={"myForm"}>
            <TempFormGroup comoSoube={comoSoube}>
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
            </TempFormGroup>

            <TempFormGroup>
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
            </TempFormGroup>

            {!comoSoube ? (
              ""
            ) : (
              <TempFormGroup>
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
              </TempFormGroup>
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
          </TempForm>
        </TempFormContent>
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
const TextWrapper = styled.div`
  transition: 0.5s;

  @media (min-width: 1200px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    transform: ${({ comoSoube }) => (!comoSoube ? "translateY(5rem)" : "")};
  }
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

// Substituir
const TempFormContent = styled(FormContent)`
  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, auto);

    row-gap: 3.75rem;
    padding: 2rem 2rem;
  }
`;
const TempForm = styled(Form)`
  @media (min-width: 1200px) {
    grid-column: 1 / 3;
    grid-row: 2 / 4;

    grid-template-rows: repeat(3, auto);
    grid-template-columns: 1fr 1fr;
  }
`;
const TempFormGroup = styled(FormGroup)`
  @media (min-width: 1200px) {
    transition: 0.5s;

    &:nth-child(1) {
      grid-row: 1 / 2;
      grid-column: 1 / 2;

      transform: ${({ comoSoube }) => (!comoSoube ? "translateY(7.1rem)" : "")};
    }

    &:nth-child(2) {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
    }

    &:nth-child(3) {
      grid-row: 2 / 3;
      grid-column: 1 / 2;

      opacity: ${({ comoSoube }) => (!comoSoube ? "1" : "0")};
    }
  }
`;
