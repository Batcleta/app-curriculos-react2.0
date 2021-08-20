import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      Todos os direitos reservados a trilha tecnologia{" "}
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  display: grid;
  grid-area: footer;
  align-items: center;
  justify-content: center;

  font-size: 0.8125em;
  color: #323232;

  background: white;
`;
