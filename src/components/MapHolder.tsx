import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useContext, useState } from "react";
import { OptionContext } from "../context/OptionContext";
import { Biblioteca } from "../data/biblioteca";
import { CasaArtesania } from "../data/casa_artesania";
import { CentroCultural } from "../data/centro_cultural";
import { Galeria } from "../data/galeria";
import { Teatro } from "../data/teatro";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 21.248,
  lng: -100.305,
};

const MapHolder = () => {
  //   const { biblioteca, casa, centro, galeria, teatro } = useGetData();
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker: any) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const { selectedCity, selectedType, seleccionState } =
    useContext(OptionContext);
  let BibliotecaFilter = Biblioteca,
    CasaArtesaniaFilter = CasaArtesania,
    CentroCulturalFilter = CentroCultural,
    GaleriaFilter = Galeria,
    TeatroFilter = Teatro;
  switch (selectedType) {
    case "Biblioteca":
      BibliotecaFilter = Biblioteca.filter((biblioItem) => {
        return biblioItem.nom_ent === selectedCity;
      });
      break;
    case "Casa artesania":
      CasaArtesaniaFilter = CasaArtesania.filter((casaItem) => {
        return casaItem.nom_ent === selectedCity;
      });
      break;
    case "Centro cultural":
      CentroCulturalFilter = CentroCultural.filter((centroItem) => {
        return centroItem.nom_ent === selectedCity;
      });
      break;
    case "Galería":
      GaleriaFilter = Galeria.filter((galeriaItem) => {
        return galeriaItem.nom_ent === selectedCity;
      });
      break;
    case "Teatro":
      TeatroFilter = Teatro.filter((teatroItem) => {
        return teatroItem.nom_ent === selectedCity;
      });
      break;
  }
  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyBqyq_44KjHUSV6VWm7zcvbXLjprgIVS5Y">
        <GoogleMap
          mapContainerStyle={containerStyle}
          onClick={() => setActiveMarker(null)}
          center={center}
          zoom={6}
        >
          {selectedType === "Biblioteca"
            ? BibliotecaFilter.map((biblio_item, idx) => (
                <Marker
                  key={idx}
                  onClick={() => handleActiveMarker(idx)}
                  icon={{
                    path: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z",
                    fillColor: "#96cdff",
                    fillOpacity: 0.9,
                    scale: 0.05,
                    strokeColor: "#138af7",
                    strokeWeight: 2,
                  }}
                  position={{
                    lat: biblio_item.gmaps_latitud,
                    lng: biblio_item.gmaps_longitud,
                  }}
                >
                  {activeMarker === idx ? (
                    <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                      <div>{biblio_item.biblioteca_nombre}</div>
                    </InfoWindow>
                  ) : null}
                </Marker>
              ))
            : selectedType === "Casa artesania"
            ? CasaArtesaniaFilter.map((artesania_item, idx) => (
                <Marker
                  key={idx}
                  onClick={() => handleActiveMarker(idx)}
                  icon={{
                    path: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z",
                    fillColor: "#69ddff",
                    fillOpacity: 0.9,
                    scale: 0.05,
                    strokeColor: "#05c6ff",
                    strokeWeight: 2,
                  }}
                  position={{
                    lat: artesania_item.gmaps_latitud,
                    lng: artesania_item.gmaps_longitud,
                  }}
                >
                  {" "}
                  {activeMarker === idx ? (
                    <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                      <div>{artesania_item.casa_artesania_nombre}</div>
                    </InfoWindow>
                  ) : null}
                </Marker>
              ))
            : selectedType === "Centro cultural"
            ? CentroCulturalFilter.map((centro_item, idx) => (
                <Marker
                  key={idx}
                  onClick={() => handleActiveMarker(idx)}
                  icon={{
                    path: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z",
                    fillColor: "#bfbbff",
                    fillOpacity: 0.9,
                    scale: 0.05,
                    strokeColor: "#857cff",
                    strokeWeight: 2,
                  }}
                  position={{
                    lat: centro_item.gmaps_latitud,
                    lng: centro_item.gmaps_longitud,
                  }}
                >
                  {" "}
                  {activeMarker === idx ? (
                    <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                      <div>{centro_item.centro_cultural_nombre}</div>
                    </InfoWindow>
                  ) : null}
                </Marker>
              ))
            : selectedType === "Galería"
            ? GaleriaFilter.map((galeria_item, idx) => (
                <Marker
                  key={idx}
                  onClick={() => handleActiveMarker(idx)}
                  icon={{
                    path: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z",
                    fillColor: "#ffc8dc",
                    fillOpacity: 0.9,
                    scale: 0.05,
                    strokeColor: "#ff5894",
                    strokeWeight: 2,
                  }}
                  position={{
                    lat: galeria_item.gmaps_latitud,
                    lng: galeria_item.gmaps_longitud,
                  }}
                >
                  {" "}
                  {activeMarker === idx ? (
                    <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                      <div>{galeria_item.galeria_nombre}</div>
                    </InfoWindow>
                  ) : null}
                </Marker>
              ))
            : selectedType === "Teatro"
            ? TeatroFilter.map((teatro_item, idx) => (
                <Marker
                  key={idx}
                  onClick={() => handleActiveMarker(idx)}
                  icon={{
                    path: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z",
                    fillColor: "#cbf2d1",
                    fillOpacity: 0.9,
                    scale: 0.05,
                    strokeColor: "#8fef9f",
                    strokeWeight: 2,
                  }}
                  position={{
                    lat: teatro_item.gmaps_latitud,
                    lng: teatro_item.gmaps_longitud,
                  }}
                >
                  {" "}
                  {activeMarker === idx ? (
                    <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                      <div>{teatro_item.teatro_nombre}</div>
                    </InfoWindow>
                  ) : null}
                </Marker>
              ))
            : ""}
        </GoogleMap>
      </LoadScript>
      {/* {selectedType === "Biblioteca"
            ? Biblioteca.map((biblio_item, idx) => (
                <Marker
                  key={idx}
                  position={[
                    biblio_item.gmaps_latitud,
                    biblio_item.gmaps_longitud,
                  ]}
                ></Marker>
              ))
            : selectedType === "Casa artesania"
            ? CasaArtesania.map((artesania_item, idx) => (
                <Marker
                  key={idx}
                  position={[
                    artesania_item.gmaps_latitud,
                    artesania_item.gmaps_longitud,
                  ]}
                ></Marker>
              ))
            : selectedType === "Centro cultural"
            ? CentroCultural.map((centro_item, idx) => (
                <Marker
                  key={idx}
                  position={[
                    centro_item.gmaps_latitud,
                    centro_item.gmaps_longitud,
                  ]}
                ></Marker>
              ))
            : selectedType === "Galería"
            ? Galeria.map((galeria_item, idx) => (
                <Marker
                  key={idx}
                  position={[
                    galeria_item.gmaps_latitud,
                    galeria_item.gmaps_longitud,
                  ]}
                ></Marker>
              ))
            : selectedType === "Teatro"
            ? Teatro.map((teatro_item, idx) => (
                <Marker
                  key={idx}
                  position={[
                    teatro_item.gmaps_latitud,
                    teatro_item.gmaps_longitud,
                  ]}
                ></Marker>
              ))
            : ""} */}
    </>
  );
};

export default MapHolder;
