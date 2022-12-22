import React, { useState, useRef } from "react";
import Map, { Marker, FlyToInterpolator } from "react-map-gl";

const MapView = () => {
  const [viewport, setViewport] = useState({
    latitude: 52.6376,
    longitude: -1.135171,
    width: "100vw",
    height: "100vh",
    zoom: 12,
    mapboxApiAccesToken:
      "pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ",
  });
  const mapRef = useRef();
  return (
    <ReactMapGL>
      <div>
        <Map
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14,
          }}
          style={{ width: 600, height: 400 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </div>
    </ReactMapGL>
  );
};

export default MapView;
