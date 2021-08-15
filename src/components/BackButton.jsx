import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { UseFlatMenu } from "../context/VagasContext";

const BackButton = () => {
  const { setFlatMenu } = UseFlatMenu();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
    setFlatMenu(false);
  };

  return <Wrapper onClick={() => goBack()} />;
};

export default BackButton;

const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  background: red;
`;
