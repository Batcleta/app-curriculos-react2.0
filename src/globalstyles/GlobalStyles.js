import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem;

  @media (min-width: 1360px) {
    padding: 0.625rem 1.875rem;
    margin: 0 auto;
    width: 100%;
    max-width: 65.625rem;
  }
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;

export const MediumText = styled.div`
  font-size: 1rem;
  line-height: 130%;
`;
