import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import React, { useEffect, useState } from 'react'
import { propertiesMock } from '../../src/constants.js'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit'

const MapboxComponent = ({ propertiesB }) => {
  const propertiesArr = propertiesB

  const storeObj = { type: 'FeatureCollection', features: propertiesArr }
  // console.log(propertiesB[0])

  const store = storeObj

  const [map, setMap] = useState()
  const [stores, setStores] = useState(store)

  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      // style: "mapbox://styles/mapbox/light-v11",
      style: 'mapbox://styles/mapbox/streets-v12',

      center: [-87.452119, 20.19915],
      zoom: 15,
      scrollZoom: false,
    })

    map.addControl(new mapboxgl.NavigationControl())
    setMap(map)

    const storesCopy = { ...stores }
    storesCopy.features.forEach(function (store, i) {
      // store.properties.id = i
      store.geometry.id = i
    })
    setStores(storesCopy)
  }, [])

  useEffect(() => {
    if (map && stores) {
      map.on('load', () => {
        map.addSource('places', {
          type: 'geojson',
          data: stores,
        })
        map.scrollZoom.enable()
        addMarkers()
      })
    }
  }, [map])

  const addMarkers = () => {
    /* For each feature in the GeoJSON object above: */
    for (const marker of stores.features) {
      /* Create a div element for the marker. */
      const el = document.createElement('div')
      /* Assign a unique `id` to the marker. */
      // el.id = `marker-${marker.properties.id}`
      el.id = `marker-${marker.geometry.id}`

      /* Assign the `marker` class to each marker for styling. */
      el.className = 'marker'

      /**
       * Create a marker using the div element
       * defined above and add it to the map.
       **/
      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map)

      /**
       * Listen to the element and when it is clicked, do three things:
       * 1. Fly to the point
       * 2. Close all other popups and display popup for clicked store
       * 3. Highlight listing in sidebar (and remove highlight for all other listings)
       **/
      el.addEventListener('click', (e) => {
        /* Fly to the point */
        // flyToStore(marker)
        /* Close all other popups and display popup for clicked store */
        createPopUp(marker)
        /* Highlight listing in sidebar */
        const activeItem = document.getElementsByClassName('active')
        e.stopPropagation()
        if (activeItem[0]) {
          activeItem[0].classList.remove('active')
        }
      })
    }
  }

  // const flyToStore = (currentFeature) => {
  //   map.flyTo({
  //     center: currentFeature.geometry.coordinates,
  //     zoom: 16,
  //   })
  // }

  const createPopUp = (currentFeature) => {
    const popUps = document.getElementsByClassName('mapboxgl-popup')
    if (popUps[0]) popUps[0].remove()
    if (!!currentFeature.videoPrev) {
      const popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(currentFeature.geometry.coordinates)
        //   .setHTML(`
        //   <img
        //   className="someImg"
        //   src=${propertiesMock.BuyHomes[0].images}
        //   alt="property picture"
        // />
        // <h6><strong>$${propertiesMock.BuyHomes[0].price}k</strong></h6>
        // <h6><strong>${propertiesMock.BuyHomes[0].factsandfeatures.beds}</strong> bds |</h6>
        // <h6><strong>${propertiesMock.BuyHomes[0].factsandfeatures.bath}</strong> ba </h6>
        //   <h6>${currentFeature.properties.address}</h6>
        //  `)
        //       .setHTML(
        //         `
        //      <iframe width="320" height="215"
        //      src="https://www.youtube.com/embed/D8dX6hk5XI4?autoplay=1&mute=1&controls=0">
        // </iframe>
        // //       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        // //   Launch demo modal
        // // </button>
        // <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        //   <div class="modal-dialog">
        //     <div class="modal-content">
        //       <div class="modal-header">
        //         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        //         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //       </div>
        //       <div class="modal-body">
        //         ...
        //       </div>
        //       <div class="modal-footer">
        //         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        //         <button type="button" class="btn btn-primary">Save changes</button>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        .setHTML(
          `
        <a href="https://tuluminati22dic.vercel.app/property/${currentFeature.id}" target="_blank" title="Opens in a new window">
        <video
        src=${currentFeature.videoPrev}
        controls={true}
        playsinline
        preload="metadata"
        width="250" 
        height="160"
      ></video>
     <p></p>
     <p>${currentFeature.name}<br/>$${currentFeature.price}K <br/>${currentFeature.factsandfeatures.beds}<strong> bd</strong>, ${currentFeature.factsandfeatures.bath}<strong> ba</strong>
     </a></p>
          `
        )

        .addTo(map)

      console.log('have video')
    } else {
      const popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(currentFeature.geometry.coordinates)
        //   .setHTML(`
        //   <img
        //   className="someImg"
        //   src=${propertiesMock.BuyHomes[0].images}
        //   alt="property picture"
        // />
        // <h6><strong>$${propertiesMock.BuyHomes[0].price}k</strong></h6>
        // <h6><strong>${propertiesMock.BuyHomes[0].factsandfeatures.beds}</strong> bds |</h6>
        // <h6><strong>${propertiesMock.BuyHomes[0].factsandfeatures.bath}</strong> ba </h6>
        //   <h6>${currentFeature.properties.address}</h6>
        //  `)
        //       .setHTML(
        //         `
        //      <iframe width="320" height="215"
        //      src="https://www.youtube.com/embed/D8dX6hk5XI4?autoplay=1&mute=1&controls=0">
        // </iframe>
        // //       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        // //   Launch demo modal
        // // </button>
        // <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        //   <div class="modal-dialog">
        //     <div class="modal-content">
        //       <div class="modal-header">
        //         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        //         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //       </div>
        //       <div class="modal-body">
        //         ...
        //       </div>
        //       <div class="modal-footer">
        //         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        //         <button type="button" class="btn btn-primary">Save changes</button>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        .setHTML(
          `
      <a href="https://tuluminati22dic.vercel.app/property/${currentFeature.id}" target="_blank" title="Opens in a new window">
      <img
      src=${currentFeature.images[0]}
      controls={true}
      playsinline
      preload="metadata"
      width="250" 
      height="160"
    ></img>
   <p></p>
   <p>${currentFeature.name}<br/>$${currentFeature.price}K <br/>${currentFeature.factsandfeatures.beds}<strong> bd</strong>, ${currentFeature.factsandfeatures.bath}<strong> ba</strong>
   </a></p>
        `
        )

        .addTo(map)
      console.log('no hay video')
    }
  }

  //   const popup = new mapboxgl.Popup({ closeOnClick: false })
  //     .setLngLat(currentFeature.geometry.coordinates)
  //     //   .setHTML(`
  //     //   <img
  //     //   className="someImg"
  //     //   src=${propertiesMock.BuyHomes[0].images}
  //     //   alt="property picture"
  //     // />
  //     // <h6><strong>$${propertiesMock.BuyHomes[0].price}k</strong></h6>
  //     // <h6><strong>${propertiesMock.BuyHomes[0].factsandfeatures.beds}</strong> bds |</h6>
  //     // <h6><strong>${propertiesMock.BuyHomes[0].factsandfeatures.bath}</strong> ba </h6>
  //     //   <h6>${currentFeature.properties.address}</h6>
  //     //  `)
  //     //       .setHTML(
  //     //         `
  //     //      <iframe width="320" height="215"
  //     //      src="https://www.youtube.com/embed/D8dX6hk5XI4?autoplay=1&mute=1&controls=0">
  //     // </iframe>
  //     // //       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  //     // //   Launch demo modal
  //     // // </button>
  //     // <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  //     //   <div class="modal-dialog">
  //     //     <div class="modal-content">
  //     //       <div class="modal-header">
  //     //         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
  //     //         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  //     //       </div>
  //     //       <div class="modal-body">
  //     //         ...
  //     //       </div>
  //     //       <div class="modal-footer">
  //     //         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  //     //         <button type="button" class="btn btn-primary">Save changes</button>
  //     //       </div>
  //     //     </div>
  //     //   </div>
  //     // </div>
  //     .setHTML(
  //       `
  //       <a href="https://tuluminati22dic.vercel.app/property/${currentFeature.id}" target="_blank" title="Opens in a new window">
  //       <video
  //       src=${currentFeature.videoPrev}
  //       controls={true}
  //       playsinline
  //       preload="metadata"
  //       width="250"
  //       height="160"
  //     ></video>
  //    <p></p>
  //    <p>${currentFeature.name}<br/>$${currentFeature.price}K <br/>${currentFeature.factsandfeatures.beds}<strong> bd</strong>, ${currentFeature.factsandfeatures.bath}<strong> ba</strong>
  //    </a></p>
  //         `
  //     )

  //     .addTo(map)
  // }

  // <img
  //      className="someImg"
  //      src=${currentFeature.images[0]}
  //      alt="property picture"
  //      width="150" height="80"
  //    />

  const propertyId = propertiesArr

  return (
    <div className="map-content">
      <div id="map" className="map"></div>
    </div>
  )
}

export default MapboxComponent
