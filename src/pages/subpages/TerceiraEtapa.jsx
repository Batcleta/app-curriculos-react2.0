import React from "react";
import styled from "styled-components";
import { useForm, useFieldArray } from "react-hook-form";

import FormHeader from "../../components/templates/FormHeader";

import {
  FormWrapper,
  FormContent,
  Title,
  Description,
  Form,
  FormSection,
  NextButton,
  FormGroup,
  FormLabel,
  FormInput,
} from "../../globalstyles/GlobalStyles";
import { SwapButton } from "../../assets/images/SpecialIcons";

const TerceiraEtapa = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      exp: [
        {
          nomeEmpresa: "",
        },
      ],
    },
  });

  const {
    fields,
    append: expAppend,
    remove: expRemove,
  } = useFieldArray({
    control,
    name: "exp",
  });

  const watchExperiencia = watch("possuiExperiencias", false);

  const deleteExp = (index) => {
    expRemove(index);
  };

  const onSubmit = async (data) => {};

  return (
    <Wrapper>
      <FormWrapper>
        <FormHeader />
        <FormContent>
          <TextWrapper>
            <Title>Conte mais sobre suas experiências profissionais</Title>
            <Description>( 3 ultimas se houver )</Description>
          </TextWrapper>

          <Form onSubmit={handleSubmit(onSubmit)} id={"myForm"}>
            <FormSection>
              <FormGroup className={"check"}>
                <FormLabel>
                  <span></span> Possui Experiência?
                </FormLabel>
                <FormInput
                  type="checkbox"
                  {...register("possuiExperiencias")}
                />
              </FormGroup>
            </FormSection>
            {!watchExperiencia ? (
              ""
            ) : (
              <FormSection>
                {fields.map((item, index) => (
                  <div key={item.id} className="exp-form">
                    <h3>Empresa {index === 0 ? "" : index + 1}</h3>
                    <button type="button" onClick={() => deleteExp(index)}>
                      Delete
                    </button>
                  </div>
                ))}
              </FormSection>
            )}
          </Form>
          <p>revise seus dados antes de continuar</p>
        </FormContent>
      </FormWrapper>

      <NextButton form={"myForm"}>
        Seguinte
        <SwapButton />
      </NextButton>
    </Wrapper>
  );
};

export default TerceiraEtapa;

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  padding-bottom: 6.25rem;
`;

const TextWrapper = styled.div``;
