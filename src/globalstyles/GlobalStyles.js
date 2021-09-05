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
export const FormGroup = styled.div`
  display: grid;
  align-content: start;

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
