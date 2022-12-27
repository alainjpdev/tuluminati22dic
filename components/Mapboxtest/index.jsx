import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import React, { useEffect, useState } from "react";
import { propertiesMock } from "../../src/constants.js";
import Link from "next/link";
import { useRouter } from "next/router";

const lng = propertiesMock.BuyHomes[0].address.lng;
const lat = propertiesMock.BuyHomes[0].address.lat;

// const properties = propertiesMock.BuyHomes;

//Test

// const store = propertiesMock
// const propertiesMock = propertiesMock;
const BuyHomes = propertiesMock.BuyHomes;

const store = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-77.034084142948, 38.909671288923],
        // coordinates: [propertiesMock.BuyHomes[0].address.lng,propertiesMock.BuyHomes[0].address.lat],

        // coordinates: [propertiesMock.BuyHomes[0].address.lng,propertiesMock.BuyHomes[0].address.lat],
      },
      properties: {
        phoneFormatted: "(202) 234-7336",
        phone: "2022347336",
        address: "1471 P St NW",
        // address: propertiesMock.BuyHomes[0].address.street,

        city: "Washington DC",
        country: "United States",
        crossStreet: "at 15th St NW",
        postalCode: "20005",
        state: "D.C.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        // coordinates: [propertiesMock.BuyHomes[1].address.lng,propertiesMock.BuyHomes[1].address.lat],
        coordinates: [-77.034084142948, 38.909671288923],
      },
      properties: {
        phoneFormatted: "(202) 234-7336",
        phone: "2022347336",
        address: "1471 P St NW",
        // address: propertiesMock.BuyHomes[1].address.street,

        city: "Washington DC",
        country: "United States",
        crossStreet: "at 15th St NW",
        postalCode: "20005",
        state: "D.C.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        // coordinates: [propertiesMock.BuyHomes[2].address.lng,propertiesMock.BuyHomes[1].address.lat],
        coordinates: [-77.034084142948, 38.909671288923],
      },
      properties: {
        phoneFormatted: "(202) 234-7336",
        phone: "2022347336",
        address: "1471 P St NW",
        // address: propertiesMock.BuyHomes[2].address.street,

        city: "Washington DC",
        country: "United States",
        crossStreet: "at 15th St NW",
        postalCode: "20005",
        state: "D.C.",
      },
    },
  ],
};

const MapboxComponentTest = () => {
  const [map, setMap] = useState();
  //   const [stores, setStores] = useState(BuyHomes);
  //   const [stores, setStores] = useState(store);
  const [propertiesMocks, setPropertiesMock] = useState(propertiesMock);

  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-87.460795, 20.200037],
      zoom: 13,
      scrollZoom: false,
    });

    map.addControl(new mapboxgl.NavigationControl());
    setMap(map);

    const propertiesMocksCopy = { ...propertiesMocks };
    propertiesMocksCopy.BuyHomes.forEach(function (store, i) {
      store.address.id = i;
    });
    setPropertiesMock(propertiesMocksCopy);
  }, []);

  useEffect(() => {
    if (map && propertiesMocks) {
      map.on("load", () => {
        map.addSource("places", {
          type: "geojson",
          data: propertiesMocks,
        });

        addMarkers();
      });
    }
  }, [map]);

  const addMarkers = () => {
    /* For each feature in the GeoJSON object above: */
    for (const marker of propertiesMocks.BuyHomes) {
      /* Create a div element for the marker. */
      const el = document.createElement("div");
      /* Assign a unique `id` to the marker. */
      el.id = `marker-${marker.address.id}`;
      /* Assign the `marker` class to each marker for styling. */
      el.className = "marker";

      /**
       * Create a marker using the div element
       * defined above and add it to the map.
       **/
      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat([marker.address.lat, marker.address.lng])
        .addTo(map);

      /**
       * Listen to the element and when it is clicked, do three things:
       * 1. Fly to the point
       * 2. Close all other popups and display popup for clicked store
       * 3. Highlight listing in sidebar (and remove highlight for all other listings)
       **/
      el.addEventListener("click", (e) => {
        /* Fly to the point */
        flyToStore(marker);
        /* Close all other popups and display popup for clicked store */
        createPopUp(marker);
        /* Highlight listing in sidebar */
        const activeItem = document.getElementsByClassName("active");
        e.stopPropagation();
        if (activeItem[0]) {
          activeItem[0].classList.remove("active");
        }
      });
    }
  };

  const flyToStore = (currentFeature) => {
    map.flyTo({
      center: [currentFeature.address.lat, currentFeature.address.lng],
      zoom: 12,
    });
  };

  // const createPopUp = (currentFeature) => {
  //   const popUps = document.getElementsByClassName("mapboxgl-popup");
  //   if (popUps[0]) popUps[0].remove();
  //   const popup = new mapboxgl.Popup({ closeOnClick: false })
  //     .setLngLat([currentFeature.address.lat, currentFeature.address.lng])
  //   .setHTML(`
  // //   <img
  // //   className="someImg"
  // //   src=${propertiesMock.BuyHomes[0].images}
  // //   alt="property picture"
  // // />
  // <h6><strong>$${propertiesMock.BuyHomes[0].price}k</strong></h6>
  // <h6><strong>${propertiesMock.BuyHomes[0].factsandfeatures.beds}</strong> bds |</h6>
  // <h6><strong>${propertiesMock.BuyHomes[0].factsandfeatures.bath}</strong> ba </h6>
  //  <h6>${currentFeature.properties.address}</h6>
  //  `)
  //  console.log(currentFeature)
  //  .setHTML(`<a href=/property/${propertiesMock.BuyHomes[0].id}>
  //   <img
  //   className="someImg"
  //   src={"https://res.cloudinary.com/dk473trop/image/upload/v1670333637/atikk/2015_R_AttikTulum_Ext01_id0glm.jpg"}
  //   alt="property picture"
  // />
  // <h6><strong>$${propertiesMock.BuyHomes[0].price}k</strong></h6>
  // // <h6><strong>${propertiesMock.BuyHomes[0].factsandfeatures.beds}</strong> bds |</h6>
  // // <h6><strong>${propertiesMock.BuyHomes[0].factsandfeatures.bath}</strong> ba </h6>
  //   <h6>${currentFeature.properties.address}</h6></a>
  //  `)
  //     .addTo(map);
  // };

  return (
    <div className="map-content">
      <div id="map" className="map"></div>
    </div>
  );
};

export default MapboxComponentTest;
