import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import PropertyVip from "../components/PropertyVip";
import { MDBContainer } from "mdb-react-ui-kit";
import Carousel from "../components/Carousel";
import PropertySection from "../components/PropertySection";
import Features from "../components/Features";
import { propertiesMock } from "../src/constants";
import MapboxComponent from "../components/Mapbox/Mapbox";
import MapboxComponentTest from "../components/Mapboxtest";
import Image from "next/image";
import CardSection from "../components/CardSection";
import Header from "../components/Header";
// import videoBg from "../src/videos/cut.mp4"

export default function Home({ propertiesVip, properties }) {
  const [estate, setEstate] = useState(true);

  const handleDisplay = (event) => {
    event.preventDefault();
    setEstate(!estate);
  };

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

          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-md-3 p-0"></div>
              <div className="col-md-6 p-0">
                  <video style={{ width: '100%', height: '100%', }}
                  muted autoPlay loop src="/videos/movieB.mp4" className="main p-0 m-0"
                  type="video/mp4" >
                  </video>
              </div>
              
              <div className="col-md-3 p-0"></div>
              
            </div>
            <div className="row">
              <div className="col">

                   <CardSection />
              </div>
              </div>
            
          </div>

        </Layout>
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <title>WebImmo</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
          />
        </Head>
        <Layout>
          <Carousel />
          <MDBContainer>
            <Features handleDisplay={handleDisplay} />
          </MDBContainer>
        </Layout>
      </div>
    );
  }
}

export const getStaticProps = async () => {
  const properties = propertiesMock.BuyHomes;

  return {
    props: {
      propertiesVip: [],
      properties: properties,
    },
  };
};
