import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useContext, useState } from "react";
import { OptionContext } from "../context/OptionContext";
import useChangeCenter from "../hooks/useChangeCenter";
import useGetData from "../hooks/useGetData";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const MapHolder = () => {
  const { selectedType, selectedCity } = useContext(OptionContext);
  const { biblioteca, casa, centro, galeria, teatro } =
    useGetData(selectedCity);
  const { zoom, center } = useChangeCenter();
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker: any) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  // let BibliotecaFilter = biblioteca,
  //   CasaArtesaniaFilter = casa,
  //   CentroCulturalFilter = centro,
  //   GaleriaFilter = galeria,
  //   TeatroFilter = teatro;
  // switch (selectedType) {
  //   case "Biblioteca":
  //     BibliotecaFilter = biblioteca.filter((biblioItem) => {
  //       return biblioItem.nom_ent === selectedCity;
  //     });
  //     setZoom(10);
  //     console.log(BibliotecaFilter[0]);
  //     // if (
  //     //   BibliotecaFilter[0].gmaps_latitud &&
  //     //   BibliotecaFilter[0].gmaps_longitud
  //     // ) {
  //     //   center = {
  //     //     lat: BibliotecaFilter[0].gmaps_latitud,
  //     //     lng: BibliotecaFilter[0].gmaps_longitud,
  //     //   };
  //     // }

  //     break;
  //   case "Casa artesania":
  //     CasaArtesaniaFilter = casa.filter((casaItem) => {
  //       return casaItem.nom_ent === selectedCity;
  //     });
  //     break;
  //   case "Centro cultural":
  //     CentroCulturalFilter = centro.filter((centroItem) => {
  //       return centroItem.nom_ent === selectedCity;
  //     });
  //     break;
  //   case "Galería":
  //     GaleriaFilter = galeria.filter((galeriaItem) => {
  //       return galeriaItem.nom_ent === selectedCity;
  //     });
  //     break;
  //   case "Teatro":
  //     TeatroFilter = teatro.filter((teatroItem) => {
  //       return teatroItem.nom_ent === selectedCity;
  //     });
  //     break;
  // }
  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyBqyq_44KjHUSV6VWm7zcvbXLjprgIVS5Y">
        <GoogleMap
          mapContainerStyle={containerStyle}
          onClick={() => setActiveMarker(null)}
          center={center}
          zoom={zoom}
        >
          {selectedType === "Biblioteca"
            ? biblioteca.map((biblio_item, idx) => (
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
                    lat: parseFloat(biblio_item.gmaps_latitud),
                    lng: parseFloat(biblio_item.gmaps_longitud),
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
            ? casa.map((artesania_item, idx) => (
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
                    lat: parseFloat(artesania_item.gmaps_latitud),
                    lng: parseFloat(artesania_item.gmaps_longitud),
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
            ? centro.map((centro_item, idx) => (
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
                    lat: parseFloat(centro_item.gmaps_latitud),
                    lng: parseFloat(centro_item.gmaps_longitud),
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
            ? galeria.map((galeria_item, idx) => (
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
                    lat: parseFloat(galeria_item.gmaps_latitud),
                    lng: parseFloat(galeria_item.gmaps_longitud),
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
            ? teatro.map((teatro_item, idx) => (
                <Marker
                  key={idx}
                  onClick={() => handleActiveMarker(idx)}
                  icon={{
                    path: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z",
                    fillColor: "#ffabab",
                    fillOpacity: 0.9,
                    scale: 0.05,
                    strokeColor: "#f05c5c",
                    strokeWeight: 2,
                  }}
                  position={{
                    lat: parseFloat(teatro_item.gmaps_latitud),
                    lng: parseFloat(teatro_item.gmaps_longitud),
                  }}
                >
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
