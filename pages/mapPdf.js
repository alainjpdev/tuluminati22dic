import { MDBContainer } from 'mdb-react-ui-kit';
import Head from 'next/head';
import React from 'react'
import Carousel from '../components/Carousel';
import Layout from '../components/Layout';
import Image from 'next/image'

const mapPdf = () => {

  return (
    <div>
      <Head>
        <title>TuluminatiX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* <Carousel /> */}
        <Image
      // loader={myLoader}
      src="/images/zamapage11diciembre.png"
      alt="Picture of the author"
      width={600}
      height={400}
    />
        <MDBContainer>

          
        </MDBContainer>
  
      </Layout>
    </div>
  );

}

export default mapPdf