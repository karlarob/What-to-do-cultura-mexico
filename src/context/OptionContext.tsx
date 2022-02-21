import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
interface ContextProps {
  selectedType: string;
  selectedCity: string;
  seleccionState: SeleccionarTipo | undefined;
  setSelectedType: Dispatch<SetStateAction<string>>;
  setSelectedCity: Dispatch<SetStateAction<string>>;
}
export type SeleccionarTipo =
  | "Biblioteca"
  | "Casa artesania"
  | "Centro cultural"
  | "Galería"
  | "Teatro";
export const OptionContext = createContext({} as ContextProps);

const OptionProvider: FC = ({ children }) => {
  const [selectedType, setSelectedType] = useState("Biblioteca");
  const [selectedCity, setSelectedCity] = useState("Aguascalientes");
  const [seleccionState] = useState<SeleccionarTipo>();

  return (
    <OptionContext.Provider
      value={{
        selectedType,
        setSelectedType,
        selectedCity,
        setSelectedCity,
        seleccionState,
      }}
    >
      {children}
    </OptionContext.Provider>
  );
};

export default OptionProvider;
