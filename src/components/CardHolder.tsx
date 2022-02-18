import React, { useContext } from "react";
import { OptionContext } from "../context/OptionContext";

const CardHolder = () => {
  const tipoLista = [
    "Biblioteca",
    "Casa artesania",
    "Centro cultural",
    "Galería",
    "Teatro",
  ];
  const ciudadLista = [
    "Aguascalientes",
    "Baja California",
    "Baja California Sur",
    "Campeche",
    "Coahuila",
    "Colima",
    "Chiapas",
    "Chihuahua",
    "México D.F",
    "Durango",
    "Guanajuato",
    "Guerrero",
    "Estado de Hidalgo",
    "Jalisco",
    "Estado de México",
    "Michoacán",
    "Morelos",
    "Nayarit",
    "Nuevo León",
    "Oaxaca",
    "Puebla",
    "Querétaro",
    "Quintana Roo",
    "San Luis Potosí",
    "Sinaloa",
    "Sonora",
    "Tabasco",
    "Tamaulipas",
    "Tlaxcala",
    "Veracruz",
    "Yucatán",
    "Zacatecas",
  ];
  const { setSelectedCity, setSelectedType } = useContext(OptionContext);
  return (
    <div className="options-holder-container">
      <select
        onChange={(e) => {
          setSelectedType(e.target.value);
        }}
        name="tipo"
        id="tipo"
      >
        {/* <option value="tipo-todos">Ver todos</option> */}
        {tipoLista.map((tipo, idx) => (
          <option key={idx} value={tipo}>
            {tipo}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => {
          setSelectedCity(e.target.value);
        }}
        name="ciudad"
        id="ciudad"
      >
        {/* <option value="ciudad-todos">Ver todos</option> */}
        {ciudadLista.map((ciudad, idx) => (
          <option key={idx} value={ciudad}>
            {ciudad}
          </option>
        ))}
      </select>
      <button>GO</button>
    </div>
  );
};

export default CardHolder;
