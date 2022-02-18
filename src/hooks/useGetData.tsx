import React, { useEffect, useState } from "react";
import { Biblioteca } from "../data/biblioteca";
import { CasaArtesania } from "../data/casa_artesania";
import { CentroCultural } from "../data/centro_cultural";
import { Galeria } from "../data/galeria";
import { Teatro } from "../data/teatro";

const useGetData = () => {
  const [biblioteca, setBiblioteca] = useState([]);
  const [casa, setCasa] = useState({});
  const [centro, setCentro] = useState({});
  const [galeria, setGaleria] = useState({});
  const [teatro, setTeatro] = useState({});

  useEffect(() => {
    // setBiblioteca(Biblioteca);
    // console.log("casa", Biblioteca);
    // setCasa(CasaArtesania);
    // setCentro(CentroCultural);
    // setGaleria(Galeria);
    // setTeatro(Teatro);
  }, []);
  return { biblioteca, casa, centro, galeria, teatro };
};

export default useGetData;
