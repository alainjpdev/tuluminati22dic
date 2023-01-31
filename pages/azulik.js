import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import PropertyVip from '../components/PropertyVip'

import Carousel from '../components/Carousel'
import PropertySection from '../components/PropertySection'
import Features from '../components/Features'
import { propertiesMock } from '../src/constants'
import MapboxComponent from '../components/Mapbox/Mapbox'
import MapboxComponentTest from '../components/Mapboxtest'
import Image from 'next/image'
import CardSection from '../components/CardSection'
import Header from '../components/Header'
import Link from 'next/link'
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
  MDBCardImage,
  MDBRipple,
  MDBBtn,
} from 'mdb-react-ui-kit'
import ReactPlayer from 'react-player'

// import videoBg from "../src/videos/cut.mp4"
const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase()
  return ua.indexOf('safari') > -1 && ua.indexOf('chrome') < 0
}

const mainVideo = '/videos/azulik.mp4'

export default function Azulik({ propertiesVip, properties }) {
  const videoParentRef = useRef()
  const [shouldUseImage, setShouldUseImage] = useState(false)
  useEffect(() => {
    // check if user agent is safari and we have the ref to the container <div />
    if (isSafari() && videoParentRef.current) {
      // obtain reference to the video element
      const player = videoParentRef.current.children[0]

      // if the reference to video player has been obtained
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false
        player.playsinline = true
        player.muted = true
        player.setAttribute('muted', '') // leave no stones unturned :)
        player.autoplay = true

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play()
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current.style.display = 'none'
                setShouldUseImage(true)
              })
          }
        }, 0)
      }
    }
  }, [])

  // return shouldUseImage ? (
  //   <img src={mainVideo} alt="Muted Video" />
  // ) : (
  //   <div
  //     ref={videoParentRef}
  //     dangerouslySetInnerHTML={{
  //       __html: `
  //       <video
  //         loop
  //         muted
  //         autoplay
  //         playsinline
  //         preload="metadata"
  //       >
  //       <source src="${mainVideo}" type="video/mp4" />
  //       </video>`,
  //     }}
  //   />
  // )

  const [estate, setEstate] = useState(true)

  const handleDisplay = (event) => {
    event.preventDefault()
    setEstate(!estate)
  }

  if (estate) {
    return (
      <div>
        <Head>
          <title>TuluminatiX</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          {/* <h2 className="hello">hello world</h2> */}
          {/* <div> */}

          <div className="container-fluid  p-0">
            <div className="row  maint p-0">
              <div className="col mainVideo overlat p-0">
                {/* <div className="d-md-none"> */}

                <div>
                  <video
                    autoplay
                    loop
                    controls={true}
                    playsinline
                    preload="metadata"
                    height="745px"
                    src="/videos/azulik.mp4"
                    type="video/mp4"
                  ></video>
                </div>
                {/* }} */}
                {/* /> */}

                {/* <video
                  style={{ width: '100%', height: '100%' }}
                  autoPlay
                  loop
                  // src="/videos/tulumBeach.mp4"
                  src="/videos/tb.mp4"
                  className="main p-0 m-0 videoBg"
                  type="video/mp4"
                ></video> */}
                {/* </div> */}
                {/* <div className="d-none d-md-block">
                  <video
                    style={{ width: '100%', height: '100%' }}
                    muted
                    autoPlay
                    loop
                    src="/videos/tb.mp4"
                    className="main p-0 m-0"
                    type="video/mp4"
                  ></video>
                </div> */}

                {/* <ReactPlayer
                  playsinline={true}
                  controls={false}
                  playing={true}
                  muted={true}
                  loop={true}
                  className="main p-0 m-0 videoBg p-0 m-0"
                  width="100%"
                  height=""
                  url="/videos/tb.mp4"
                  type="video/mp4"
                /> */}
              </div>
            </div>
          </div>
        </Layout>
      </div>
    )
  } else {
    return (
      <div>
        <Head>
          <title>WebImmo</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="" />
        </Head>
        <Layout>
          <Carousel />
          <MDBContainer>
            <Features handleDisplay={handleDisplay} />
          </MDBContainer>
        </Layout>
      </div>
    )
  }
}

export const getStaticProps = async (ctx) => {
  const properties = propertiesMock.BuyHomes

  return {
    props: {
      // propertiesVip: [],
      properties: properties,
    },
  }
}
