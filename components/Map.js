import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { useMap } from "react-leaflet/hooks";
import { useState } from "react";
import tileLayer from "../utils/tileLayer";

import "../node_modules/leaflet/dist/leaflet.css";

export default function Map() {
  if (typeof window === "undefined") return <div>Loading</div>;

  const styleMap = {
    height: "100vh",
    width: "100%",
  };

  return (
    <MapContainer
      style={styleMap}
      center={[37.915996, 58.36816]}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer {...tileLayer} />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
