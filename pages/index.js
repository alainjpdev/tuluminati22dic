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
import { useNavigate } from 'react-router-dom'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
import YouTube from 'react-youtube'
import useRedirectAfterSomeSeconds from '../hook/useRedirectAfterSomeSeconds'

export default function Home({ propertiesVip, properties }) {
  const videoParentRef = useRef()
  const [shouldUseImage, setShouldUseImage] = useState(false)

  const [redirectSeconds, setRedirectSeconds] = useState(5)
  const router = useRouter()
  const query = router.query

  const [youtubeID] = useState('x01_I3pfE8I')
  const [estate, setEstate] = useState(true)

  // const handleDisplay = (event) => {
  //   event.preventDefault()
  //   setEstate(!estate)
  // }

  // const { secondsRemaining } = useRedirectAfterSomeSeconds('/', 10)
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
            <div className="row  p-0">
              <div className="col m-0 overlayt p-0">
                {/* <div className="d-md-none"> */}
                <video
                  autoplay
                  controls={true}
                  playsinline
                  preload="metadata"
                  height="745px"
                  width="100%"
                  src="https://res.cloudinary.com/dk473trop/video/upload/v1677176374/azulik_video/azulik_full_aarvha.mp4"
                  type="video/mp4"
                ></video>
                {/* <YouTube videoId="x01_I3pfE8I" /> */}

                {/* <iframe
                  onended="videoEnded()"
                  className="video"
                  width="100%"
                  height="745px"
                  title="Youtube player"
                  id="myvid"
                  sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                  src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
                ></iframe> */}

                {/* <div
                  ref={videoParentRef}
                  dangerouslySetInnerHTML={{
                    __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          preload="metadata"
          width:"100vw"
          height="750px"
          object-fit:"cover"
        >
        <source src="${mainVideo}" type="video/mp4" />
        </video>`,
                  }}
                /> */}

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
                <div className="container">
                  {/* <p>
                    Redirecting to the Map in
                    {' ' + secondsRemaining}{' '}
                    {'  ' + secondsRemaining > 1 ? ' seconds' : 'second'}.
                  </p> */}
                </div>
              </div>
            </div>

            {/* <div className="row rowTop">
              <div className="col-md">
                <Link href={'/mapPageSales'}>
                  <MDBCard alignment="center">
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image hover-overlay"
                    >
                      <MDBCardImage
                        src="images/hometul.png"
                        width={200}
                        fluid
                        alt="..."
                      />

                      <a>
                        <div
                          className="mask"
                          style={{
                            backgroundColor: 'rgba(251, 251, 251, 0.15)',
                          }}
                        ></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody>
                      <MDBCardTitle>
                        <strong>Buy a home</strong>
                      </MDBCardTitle>
                      <MDBCardText>
                        Find your place with an immersive photo experience and
                        the most listings, including things you won’t find
                        anywhere else.
                      </MDBCardText>
                      <MDBBtn>Buy Home</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </Link>
              </div>
              <div className="col-md">
                <Link href={'/rent'}>
                  <div className="col">
                    <MDBCard alignment="center">
                      <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image hover-overlay"
                      >
                        <MDBCardImage
                          src="images/rentul.png"
                          width={200}
                          fluid
                          alt="..."
                        />

                        <a>
                          <div
                            className="mask"
                            style={{
                              backgroundColor: 'rgba(251, 251, 251, 0.15)',
                            }}
                          ></div>
                        </a>
                      </MDBRipple>
                      <MDBCardBody>
                        <MDBCardTitle>
                          <strong>Rent a home</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                          Whether you’re looking for a single-family home,
                          high-rise apartment, or something in between, we’ll
                          help you find it.
                        </MDBCardText>
                        <MDBBtn>Find Rentals</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                </Link>
              </div>
            </div> */}
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
