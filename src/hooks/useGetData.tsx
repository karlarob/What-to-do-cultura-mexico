import React, { useContext, useEffect, useState } from "react";
import { OptionContext } from "../context/OptionContext";
import { BibliotecaItem } from "../interfaces/BibliotecaItem";
const useGetData = () => {
  const [cargando, setCargando] = useState(true);
  const [biblioteca, setBiblioteca] = useState<any[]>([]);
  const [casa, setCasa] = useState<any[]>([]);
  const [centro, setCentro] = useState<any[]>([]);
  const [galeria, setGaleria] = useState<any[]>([]);
  const [teatro, setTeatro] = useState<any[]>([]);
  const { selectedCity } = useContext(OptionContext);

  const apisIDs = {
    Biblioteca: "a39e4668-f759-4a49-84e8-27a6bee17ae8",
    Casa: "b99eada8-5fe8-4b5f-8297-4f62ed37d84f",
    Centro: "1b1d818b-8f86-465f-9b21-63e5c22ecd33",
    Galeria: "ecf94d21-6ac7-4ada-9542-7f12984fc81c",
    Teatro: "8de2a7ce-5aa4-46fd-b24e-55d873707206",
  };
  let url;

  const getBibliotecas = async () => {
    if (selectedCity) {
      url =
        "https://data.amerigeoss.org/api/3/action/datastore_search_sql?sql=SELECT%20*%20from%20%22" +
        apisIDs.Biblioteca +
        "%22%20WHERE%20nom_ent%20LIKE%20%27" +
        selectedCity +
        "%27";
    } else {
      url =
        "https://data.amerigeoss.org/api/3/action/datastore_search_sql?sql=SELECT*%20from%20%22" +
        apisIDs.Biblioteca +
        "%22%20";
    }
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.result.records);
    setBiblioteca(data.result.records);
  };

  const getCasas = async () => {
    if (selectedCity) {
      url =
        "https://data.amerigeoss.org/api/3/action/datastore_search_sql?sql=SELECT%20*%20from%20%22" +
        apisIDs.Casa +
        "%22%20WHERE%20nom_ent%20LIKE%20%27" +
        selectedCity +
        "%27";
    } else {
      url =
        "https://data.amerigeoss.org/api/3/action/datastore_search_sql?sql=SELECT*%20from%20%22" +
        apisIDs.Casa +
        "%22%20";
    }
    const res = await fetch(url);
    const data = await res.json();
    setCasa(data.result.records);
  };

  const getCentros = async () => {
    if (selectedCity) {
      url =
        "https://data.amerigeoss.org/api/3/action/datastore_search_sql?sql=SELECT%20*%20from%20%22" +
        apisIDs.Centro +
        "%22%20WHERE%20nom_ent%20LIKE%20%27" +
        selectedCity +
        "%27";
    } else {
      url =
        "https://data.amerigeoss.org/api/3/action/datastore_search_sql?sql=SELECT*%20from%20%22" +
        apisIDs.Centro +
        "%22%20";
    }
    const res = await fetch(url);
    const data = await res.json();
    setCentro(data.result.records);
  };

  const getGalerias = async () => {
    if (selectedCity) {
      url =
        "https://data.amerigeoss.org/api/3/action/datastore_search_sql?sql=SELECT%20*%20from%20%22" +
        apisIDs.Galeria +
        "%22%20WHERE%20nom_ent%20LIKE%20%27" +
        selectedCity +
        "%27";
    } else {
      url =
        "https://data.amerigeoss.org/api/3/action/datastore_search_sql?sql=SELECT*%20from%20%22" +
        apisIDs.Galeria +
        "%22%20";
    }
    const res = await fetch(url);
    const data = await res.json();
    setGaleria(data.result.records);
  };

  const getTeatro = async () => {
    if (selectedCity) {
      url =
        "https://data.amerigeoss.org/api/3/action/datastore_search_sql?sql=SELECT%20*%20from%20%22" +
        apisIDs.Teatro +
        "%22%20WHERE%20nom_ent%20LIKE%20%27" +
        selectedCity +
        "%27";
    } else {
      url =
        "https://data.amerigeoss.org/api/3/action/datastore_search_sql?sql=SELECT*%20from%20%22" +
        apisIDs.Teatro +
        "%22%20";
    }
    const res = await fetch(url);
    const data = await res.json();
    setTeatro(data.result.records);
  };

  useEffect(() => {
    getBibliotecas();
    getCasas();
    getCentros();
    getGalerias();
    getTeatro();
    setTimeout(() => {
      setCargando(false);
    }, 5000);
  }, [selectedCity]);
  return { biblioteca, casa, centro, galeria, teatro };
};

export default useGetData;
