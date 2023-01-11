import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Layout from '../components/Layout'

const success = () => {
  return (
    <div>
      <Head>
        <title>Tuluminati X - Contact</title>
      </Head>
      <Layout>
        <br />
        <br />
        <div className="row">
          <br />
          <div className="col-md-4"></div>
          <div className="d-flex col justify-content-center align-items-centerpt-5 success px-5">
            <Image
              src="/images/check.png"
              width={30}
              height={30}
              alt="Logo"
              padding={10}
            />
            <h3>
              Your request has been sent.
              <br />
              The agent will connect with you shortly.
            </h3>
          </div>
          <div className="col-md-4"></div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Layout>
    </div>
  )
}

export default success
