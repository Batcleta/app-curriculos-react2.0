import React, { createContext, useContext, useState } from "react";

export const VagasContext = createContext();

export default function VagasProvider({ children }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [vagasDetails, setVagasDetails] = useState(false);
  const [flatMenu, setFlatMenu] = useState(false);

  return (
    <VagasContext.Provider
      value={{
        toggleMenu,
        setToggleMenu,
        vagasDetails,
        setVagasDetails,
        flatMenu,
        setFlatMenu,
      }}
    >
      {children}
    </VagasContext.Provider>
  );
}

// hook de uso ds detalhes das vagas
export const useVagas = () => {
  const context = useContext(VagasContext);
  const { vagasDetails, setVagasDetails } = context;
  return { vagasDetails, setVagasDetails };
};

// hook de uso do toggle Menu
export const useToggle = () => {
  const context = useContext(VagasContext);
  const { toggleMenu, setToggleMenu } = context;
  return { toggleMenu, setToggleMenu };
};

export const UseFlatMenu = () => {
  const context = useContext(VagasContext);
  const { flatMenu, setFlatMenu } = context;
  return { flatMenu, setFlatMenu };
};
