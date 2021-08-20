import styled from "styled-components";

export const Container = styled.div`
  padding: 0.625em 1.5625em;

  @media (min-width: 1360px) {
    padding: 0.625em 1.875em;
    margin: 0 auto;
    width: 100%;
    max-width: 65.625em;
  }

  @media (min-width: 1400px) {
    max-width: 80em;
  }
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 2.1875em;
  line-height: 2.75em;
`;

export const MediumText = styled.div`
  font-size: 1.0625em;
  line-height: 130%;
`;
