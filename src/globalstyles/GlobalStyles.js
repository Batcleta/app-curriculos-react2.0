import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 25px;

  @media (min-width: 1360px) {
    padding: 10px 30px;
    margin: 0 auto;
    width: 100%;
    max-width: 1050px;
  }
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 35px;
  line-height: 44px;
`;

export const MediumText = styled.div`
  font-size: 17px;
  line-height: 130%;
`;
