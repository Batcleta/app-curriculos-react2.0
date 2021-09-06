import styled from "styled-components";
import { themes } from "./ColorStyles";

export const Container = styled.div`
  padding: 1.5rem;

  @media (min-width: 1360px) {
    padding: 0.625rem 1.875rem;
    margin: 0 auto;
    width: 100%;
    max-width: 65.625rem;
  }
`;

//Global Text
export const H1 = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;
export const H2 = styled.h2`
  font-weight: 600;
  font-size: 1.8rem;
`;
export const MediumText = styled.div`
  font-size: 1rem;
  line-height: 130%;
`;

//Global forms
export const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0px 20px 40px rgba(34, 79, 169, 0.1),
    inset 0px 4px 4px rgba(255, 255, 255, 0.25);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 1rem;
`;

export const FormContent = styled.div`
  display: grid;
  gap: 3.125rem;

  padding: 2.5rem 1.25rem;
`;

export const FormSection = styled.div`
  display: grid;
  width: 100%;
  gap: 2.2rem;

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr;

    > h3 {
      grid-column: 1 / 3;
    }

    > div.conditional {
      grid-column: 1 / 3;

      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2.2rem;
    }
  }
`;

export const FormGroup = styled.div`
  display: grid;
  align-content: start;
`;

export const Form = styled.form`
  display: grid;
  gap: 2.2rem;
`;

export const Title = styled.div`
  font-weight: 800;
  transition: 0.5s;

  font-size: ${({ comoSoube }) => (!comoSoube ? "1.5rem" : "1.375rem")};

  line-height: 1.75rem;
  color: ${themes.light.mainTextColor};
`;
export const Description = styled.div`
  font-weight: normal;
  transition: 0.5s;

  font-size: ${({ comoSoube }) => (!comoSoube ? "1.2rem" : "1.05rem")};
  line-height: 130%;
  /* or 22px */

  color: ${themes.light.menuLinkColor};
`;

export const FormLabel = styled.div`
  display: grid;
  grid-template-columns: 0.93rem auto;

  margin-bottom: 0.8rem;

  font-weight: 600;
  /* identical to box height */

  color: rgba(0, 0, 0, 0.5);

  > span {
    color: ${themes.light.mainTextColor};
    font-size: 1.125rem;
    font-weight: 800;
  }
`;

export const FormInput = styled.input`
  padding: 0.875rem 1rem;
  //max-width: 18.125rem;
  height: 3.125rem;

  /* Main Color */
  border: 1px solid ${themes.light.mainColor};
  box-sizing: border-box;
  border-radius: 0.75rem;

  font-weight: normal;
  font-size: 0.95rem;
  line-height: 1.125rem;

  color: ${themes.light.menuLinkColor};

  ::placeholder {
    font-weight: normal;
    font-size: 0.9rem;
    line-height: 1.125rem;

    color: ${themes.light.mainParColor};
  }
`;

export const FormSelect = styled.select`
  padding: 1rem;
  height: 3.125rem;

  /* Main Color */
  border: 1px solid ${themes.light.mainColor};
  box-sizing: border-box;
  border-radius: 0.75rem;

  font-size: 0.95rem;

  color: ${themes.light.menuLinkColor};

  ::placeholder {
    font-weight: normal;
    font-size: 0.9rem;
    line-height: 1.125rem;

    color: ${themes.light.mainParColor};
  }
`;

export const ErrorMessage = styled.small`
  color: red;
  margin-top: 0.6rem;
  margin-left: 1rem;

  font-size: 0.9rem;
`;

export const NextButton = styled.button`
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
  border: none;

  > svg {
    transform: rotate(180deg);
    path {
      fill: ${themes.light.mainTextColor};
    }
  }
`;
