import React, { useContext, useEffect, useState } from "react";
import { OptionContext } from "../context/OptionContext";
import useGetData from "./useGetData";
const useChangeCenter = () => {
  const { selectedCity, selectedType } = useContext(OptionContext);
  const { biblioteca, casa, centro, galeria, teatro } = useGetData();
  const [center, setCenter] = useState({
    lat: 21.248,
    lng: -100.305,
  });
  const [zoom, setZoom] = useState(6);
  const getCenter = (lat: number, lng: number) => {
    setCenter({
      lat: lat,
      lng: lng,
    });
    console.log("center", {
      lat: lat,
      lng: lng,
    });
  };

  useEffect(() => {
    switch (selectedCity) {
      case "Aguascalientes":
        getCenter(21.8858107, -102.326319);
        break;
      case "Baja California":
        setZoom(8);
        getCenter(30.3334646, -114.0806839);
        break;
      case "Baja California Sur":
        getCenter(25.4239069, -111.301371);
        break;
      case "Campeche":
        getCenter(19.8306489, -90.5798364);
        break;
      case "Coahuila":
        getCenter(27.1983307, -104.1450085);
        break;
      case "Colima":
        getCenter(19.2401254, -103.7636271);
        break;
      case "Chiapas":
        getCenter(16.2596072, -93.3765322);
        break;
      case "Chihuahua":
        getCenter(28.6710638, -106.1346579);
        break;
      case "México D.F":
        getCenter(19.3910038, -99.2836965);
        break;
      case "Durango":
        getCenter(24.0227727, -104.6827442);
        break;
      case "Guanajuato":
        getCenter(21.025147, -101.2753897);
        break;
      case "Guerrero":
        getCenter(17.6013569, -101.2169918);
        break;
      case "Estado de Hidalgo":
        getCenter(20.498527, -99.4826721);
        break;
      case "Jalisco":
        getCenter(20.8369801, -104.7241361);
        break;
      case "Estado de México":
        getCenter(19.3268449, -100.1654168);
        break;
      case "Michoacán":
        getCenter(19.15518, -102.4610181);
        break;
      case "Morelos":
        getCenter(18.9319595, -99.2755844);
        break;
      case "Nayarit":
        setZoom(8);
        getCenter(21.8426243, -106.3254695);
        break;
      case "Nuevo León":
        getCenter(25.4791307, -100.9353074);
        break;
      case "Oaxaca":
        getCenter(17.0813771, -96.7707509);
        break;
      case "Puebla":
        getCenter(19.0401963, -98.263005);
        break;
      case "Querétaro":
        getCenter(20.8428841, -100.3802444);
        break;
      case "Quintana Roo":
        getCenter(19.7488423, -89.1246523);
        break;
      case "San Luis Potosí":
        getCenter(22.1364646, -100.9639946);
        break;
      case "Sinaloa":
        getCenter(25.8234299, -108.2194197);
        break;
      case "Sonora":
        getCenter(32.0782264, -115.0075436);
        break;
      case "Tabasco":
        getCenter(17.9514689, -93.119261);
        break;
      case "Tamaulipas":
        getCenter(24.2497468, -98.5954092);
        break;
      case "Tlaxcala":
        getCenter(19.4174275, -98.4471032);
        break;
      case "Veracruz":
        getCenter(19.5106996, -95.7525785);
        break;
      case "Yucatán":
        getCenter(20.6953305, -89.2013551);
        break;
      case "Zacatecas":
        getCenter(22.7636718, -102.606128);
        break;
    }
    console.log("hola");
  }, [selectedCity]);

  return { center, zoom };
};

export default useChangeCenter;
