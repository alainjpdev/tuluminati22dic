import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import PropertyVip from '../components/PropertyVip'
import ReactPaginate from 'react-paginate'
import Carousel from '../components/Carousel'
import PropertySection from '../components/PropertySection'
import Features from '../components/Features'
import { propertiesMock } from '../src/constants'
import MapboxComponent from '../components/Mapbox/Mapbox'
// import MapboxComponentTestBuy from '../components/MapboxTestBuy'
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
  MDBIcon,
} from 'mdb-react-ui-kit'
import PropertyCard from '../components/PropertyCard/PropertyCard'
import { useRouter } from 'next/router'

// import videoBg from "../src/videos/cut.mp4"

export default function Buy({ properties, currentPage, pageCount }) {
  const router = useRouter()

  const paginationHandler = (page) => {
    const currentPath = router.pathname
    const currentQuery = { ...router.query }
    currentQuery.page = page.selected + 1
    router.push({
      pathname: currentPath,
      query: currentQuery,
    })
  }
  return (
    <section>
      <Head>
        <title>Tuluminati X List of properties</title>
      </Head>
      <Header />
      {/* <MDBContainer> */}
      {/* <SearchFilter /> */}
      <br />
      <div>
        <MDBBtn className="me-3 mx-3" color="primary">
          For Sale
        </MDBBtn>
        <Link href={'/rent'}>
          <MDBBtn className="me-1" color="white">
            For Rent
          </MDBBtn>
        </Link>
        <div className="d-md-none">
          <Link href={'/mapPageSales'}>
            <div className="mapButton">
              <MDBIcon fas icon="map-marked" className="mapIcon" /> Map
            </div>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <div className="d-none d-md-block">
            <div className="wrap">
              <div className="box">
                <PropertyCard properties={properties} />
              </div>

              <div className="box2">
                {/* <MapboxComponentTestBuy /> */}
                <MapboxComponent propertiesB={properties} />
              </div>
            </div>
          </div>
          <div className="d-md-none">
            <div className="col-md-4">
              <PropertyCard properties={properties} />
            </div>
            <ReactPaginate
              onPageChange={paginationHandler}
              initialPage={currentPage - 1}
              pageCount={pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={2}
              previousLabel="Back"
              nextLabel="Next"
              activeClassName="actived"
              breakLabel="..."
              pageClassName="paginate"
              containerClassName="custom-paginate"
            />
            {/* <div className="col-md-8">{<MapboxComponentTest />}</div> */}
          </div>
        </div>
      </div>
      <div className="d-flex row justify-content-center mx-auto paginate-center">
        <br />
        <br />
      </div>
      {/* </MDBContainer> */}
    </section>
  )
}
export const getServerSideProps = async ({ query }) => {
  const properties = propertiesMock.BuyHomes

  const page = query.page || 1
  const totalItemsCount = propertiesMock.BuyHomes.length
  const numberOfItemsPerPage = 18

  const numberOfPages = Math.floor(
    (totalItemsCount + numberOfItemsPerPage - 1) / numberOfItemsPerPage
  )

  let slicePosition = 0
  if (page === 1) {
    slicePosition = 0
  } else {
    slicePosition = numberOfItemsPerPage * (page - 1)
  }
  const sliceProperties = properties.slice(
    slicePosition,
    slicePosition + numberOfItemsPerPage
  )

  return {
    props: {
      // properties : properties
      properties: sliceProperties,
      currentPage: page,
      pageCount: numberOfPages,
    },
  }
}

// export const getStaticProps = async (ctx) => {
//   const properties = propertiesMock.BuyHomes

//   return {
//     props: {
//       // propertiesVip: [],
//       properties: properties,
//     },
//   }
// }
