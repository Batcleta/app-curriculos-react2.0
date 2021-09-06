import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";

import FormHeader from "../../components/templates/FormHeader";
import {
  FormWrapper,
  FormContent,
  Title,
  Description,
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  ErrorMessage,
  FormSelect,
  NextButton,
  FormSection,
} from "../../globalstyles/GlobalStyles";
import { SwapButton } from "../../assets/images/SpecialIcons";

const SegundaEtapa = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [getCep, setGetCep] = useState();
  const watchJackson = watch("possuiFilhos");
  const watchCnh = watch("possuiCnh");

  //Função para pegar o cep e preencher os campos necessários
  useEffect(() => {
    const address = getCep
      ? axios.get(`https://viacep.com.br/ws/${getCep}/json/`).then((resp) => {
          const data = resp.data;

          setValue("logradouroCandidato", data.logradouro);
          setValue("bairroCandidato", data.bairro);
          setValue("municipioCandidato", data.localidade);
          setValue("ufCandidato", data.uf);
        })
      : "";

    return address;
  }, [getCep]);

  const getCepAtBlur = (bluredCep) => {
    setGetCep(bluredCep);
  };

  const onSubmit = async (data) => {
    await localStorage.setItem("dadosPessoais", JSON.stringify(data));
    props.history.push("/formulario/experiencias-profissionais");
  };

  return (
    <Wrapper>
      <FormWrapper>
        <FormHeader />
        <FormContent>
          <TextWrapper>
            <Title>Conte mais sobre você</Title>
            <Description>Dados Principais</Description>
          </TextWrapper>

          <Form onSubmit={handleSubmit(onSubmit)} id={"myForm"}>
            <FormSection>
              {/*Dados Principais*/}
              <FormGroup>
                <FormLabel>
                  <span>*</span>Primeiro Nome
                </FormLabel>
                <FormInput
                  placeholder="Informe seu nome"
                  {...register("nomeCandidato", { required: true })}
                />
                {errors.nomeCandidato && (
                  <ErrorMessage>Informe um nome válido</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel>
                  <span>*</span>Sobrenome
                </FormLabel>
                <FormInput
                  placeholder="Informe seu sobrenome"
                  {...register("sobrenomeCandidato", { required: true })}
                />
                {errors.sobrenomeCandidato && (
                  <ErrorMessage>Informe um sobrenome válido</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel>
                  <span>*</span>Data de nascimento
                </FormLabel>
                <FormInput
                  type="date"
                  {...register("dataNascimento", { required: true })}
                />
                {errors.dataNascimento && (
                  <ErrorMessage>Informe uma data válida</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel>
                  <span>*</span>Sexo
                </FormLabel>
                <FormSelect
                  placeholder="Escolha uma opção"
                  {...register("sexoCandidato", { required: true })}
                >
                  <option value="">Escolha uma opção</option>
                  <option>Masculino</option>
                  <option>Feminino</option>
                  <option>Outro</option>
                  <option>Prefiro nao declarar</option>
                </FormSelect>
                {errors.sexoCandidato && (
                  <ErrorMessage>Escolha uma opção</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                {/*Melhorar a validação de cpf*/}
                <FormLabel>
                  <span>*</span> CPF
                </FormLabel>
                <FormInput
                  placeholder="Informe seu CPF"
                  {...register("cpfCandidato", {
                    required: true,
                    validate: {
                      cpfCheck: (strCPF) => {
                        var Soma;
                        var Resto;
                        Soma = 0;
                        if (strCPF === "00000000000") return false;

                        for (let i = 1; i <= 9; i++)
                          Soma =
                            Soma +
                            parseInt(strCPF.substring(i - 1, i)) * (11 - i);
                        Resto = (Soma * 10) % 11;

                        if (Resto === 10 || Resto === 11) Resto = 0;
                        if (Resto !== parseInt(strCPF.substring(9, 10)))
                          return false;

                        Soma = 0;
                        for (let i = 1; i <= 10; i++)
                          Soma =
                            Soma +
                            parseInt(strCPF.substring(i - 1, i)) * (12 - i);
                        Resto = (Soma * 10) % 11;

                        if (Resto === 10 || Resto === 11) Resto = 0;
                        if (Resto !== parseInt(strCPF.substring(10, 11)))
                          return false;
                        return true;
                      },
                      // hasCpf: async (cpf) => {
                      //   const resp = await axios.get(
                      //     `http://localhost:8081/candidato/${cpf}`
                      //   );

                      //   if (resp.data.length !== 0) {
                      //     return false;
                      //   }
                      // },
                    },
                  })}
                />

                {errors.cpfCandidato?.type === "cpfCheck" && (
                  <ErrorMessage>Informe um cpf válido</ErrorMessage>
                )}
                {errors.cpfCandidato?.type === "hasCpf" && (
                  <ErrorMessage>Cpf já encontra-se cadastrado</ErrorMessage>
                )}
                {errors.cpfCandidato && (
                  <ErrorMessage>Informe um cpf válido</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel>
                  <span>*</span> Naturalidade
                </FormLabel>
                <FormInput
                  placeholder="Estado / Cidade em que nasceu"
                  {...register("naturaCandidato", { required: true })}
                />
                {errors.naturaCandidato && (
                  <ErrorMessage>Informe sua naturalidade</ErrorMessage>
                )}
              </FormGroup>
            </FormSection>

            <FormSection>
              {/*Dados Complementares*/}
              <h3 className="sub-title">Dados Complementares </h3>

              <FormGroup>
                <FormLabel>
                  <span>*</span> Estado civil
                </FormLabel>
                <FormSelect
                  placeholder="Digite aqui seu estdo civil"
                  {...register("estadoCivil", { required: true })}
                >
                  <option value="">Escolha uma opção</option>
                  <option>Solteiro</option>
                  <option>Casado</option>
                  <option>União Estável</option>
                  <option>Viúvo</option>
                  <option>Divorciado</option>
                  <option>Separado judicialmente</option>
                </FormSelect>
                {errors.estadoCivil && (
                  <ErrorMessage>Informe sua naturalidade</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel>
                  <span></span>Possui Religião? (opcional)
                </FormLabel>
                <FormInput
                  placeholder="Digite aqui sua religião"
                  {...register("religiaoCandidato")}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>
                  <span></span> É fumante?
                </FormLabel>
                <FormInput type="checkbox" {...register("fumante")} />
              </FormGroup>

              <FormGroup>
                <FormLabel>
                  <span></span> Possui Filhos?
                </FormLabel>
                <FormInput type="checkbox" {...register("possuiFilhos")} />
              </FormGroup>

              {!watchJackson ? (
                ""
              ) : (
                <div className={"conditional"}>
                  <FormGroup>
                    <FormLabel>
                      <span>*</span>Quantos Possui?
                    </FormLabel>
                    <FormSelect
                      placeholder="Escolha uma opção"
                      {...register("quantosFilhos", { required: true })}
                    >
                      <option value="">Escolha uma opção</option>
                      <option>1 Filho</option>
                      <option>2 Filhos</option>
                      <option>3 Filhos</option>
                      <option>4 ou mais filhos</option>
                    </FormSelect>
                    {errors.quantosFilhos && (
                      <ErrorMessage>Escolha uma opção válida</ErrorMessage>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>
                      <span>*</span> Idade do(s) filho(s)
                    </FormLabel>
                    <FormSelect
                      placeholder="Escolha uma opção"
                      {...register("idadeDosFilhos", { required: true })}
                    >
                      <option value="">Escolha uma opção</option>
                      <option>0 a 1 ano</option>
                      <option>1 a 5 anos</option>
                      <option>5 a 10 anos</option>
                      <option>Mais de 10 anos</option>
                    </FormSelect>
                    {errors.idadeDosFilhos && (
                      <ErrorMessage>Escolha uma opção válida</ErrorMessage>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>
                      <span>*</span> Tem com quem deixar?
                    </FormLabel>
                    <FormInput
                      type="checkbox"
                      {...register("possuiCuidador")}
                    />
                  </FormGroup>
                </div>
              )}
            </FormSection>

            <FormSection>
              <h3 className="sub-title">Dados Complementares 2 </h3>
              {/*Dados Complementares*/}
              <FormGroup>
                <FormLabel>
                  <span>*</span>Possui Pis?
                </FormLabel>
                <FormInput type="checkbox" {...register("possuiPis")} />
              </FormGroup>

              <FormGroup>
                <FormLabel>
                  <span>*</span>Possui Título de Eleitor?
                </FormLabel>
                <FormInput type="checkbox" {...register("possuiTitulo")} />
              </FormGroup>

              <FormGroup>
                <FormLabel>
                  <span>*</span>Possui dispensa militar?
                </FormLabel>
                <FormInput type="checkbox" {...register("possuiDispensa")} />
              </FormGroup>

              <FormGroup>
                <FormLabel>
                  <span>*</span>Possui Carteira de Habilitação?
                </FormLabel>
                <FormInput type="checkbox" {...register("possuiCnh")} />
              </FormGroup>

              {!watchCnh ? (
                ""
              ) : (
                <div className={"conditional"}>
                  <FormGroup>
                    <FormLabel>
                      <span>*</span>Categoria
                    </FormLabel>
                    <FormInput
                      placeholder="A,B,C"
                      {...register("categoriaCnh", { required: true })}
                    />
                    {errors.categoriaCnh && (
                      <ErrorMessage>Informe uma categoria</ErrorMessage>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>
                      <span>*</span>Validade
                    </FormLabel>
                    <FormInput
                      type="date"
                      name="validadeCnh"
                      {...register("validadeCnh", { required: true })}
                    />
                    {errors.validadeCnh && (
                      <ErrorMessage>Informe uma data de validade</ErrorMessage>
                    )}
                  </FormGroup>
                </div>
              )}
            </FormSection>

            <FormSection>
              <h3>Endereço</h3>

              <FormGroup>
                <FormLabel>
                  <span>*</span>CEP
                </FormLabel>
                <FormInput
                  placeholder="Informe seu CEP"
                  {...register("cepCandidato", { required: true })}
                  onBlur={(e) => getCepAtBlur(e.target.value)}
                  // validar cep
                />
                {errors.cepCandidato && (
                  <ErrorMessage>Informe um cep válido</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel>
                  <span>*</span>Logradouro
                </FormLabel>
                <FormInput
                  {...register("logradouroCandidato", { required: true })}
                />
                {errors.logradouroCandidato && (
                  <ErrorMessage>Informe um logradouro válido</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel>
                  <span>*</span>Número
                </FormLabel>
                <FormInput
                  placeholder="Nº"
                  {...register("numeroEndereco", { required: true })}
                />
                {errors.numeroEndereco && (
                  <ErrorMessage> Informe o numero da residência </ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel>
                  <span>*</span>Bairro
                </FormLabel>
                <FormInput
                  {...register("bairroCandidato", { required: true })}
                />
                {errors.bairroCandidato && (
                  <ErrorMessage>Informe um bairro válido</ErrorMessage>
                )}
              </FormGroup>
              <FormGroup>
                <FormLabel>
                  <span></span>Complemento (opcional)
                </FormLabel>
                <FormInput
                  placeholder="Complemento (se houver)"
                  {...register("complementoEndereco")}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>
                  <span>*</span>Municipio
                </FormLabel>
                <FormInput
                  {...register("municipioCandidato", { required: true })}
                />
                {errors.municipioCandidato && (
                  <ErrorMessage>Informe um município válido</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <FormLabel>
                  <span>*</span>UF
                </FormLabel>
                <FormInput {...register("ufCandidato", { required: true })} />
                {errors.logradouroCandidato && (
                  <ErrorMessage>Informe um UF válido</ErrorMessage>
                )}
              </FormGroup>
            </FormSection>
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

export default SegundaEtapa;

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  padding-bottom: 6.25rem;
`;

const TextWrapper = styled.div``;
