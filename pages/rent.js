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
  MDBIcon,
} from 'mdb-react-ui-kit'
import PropertyCard from '../components/PropertyCard/PropertyCard'
import { useRouter } from 'next/router'
import PropertyCardRent from '../components/PropertyCardRent/PropertyCardRent'

// import videoBg from "../src/videos/cut.mp4"

export default function Rent({ propertyRent, currentPage, pageCount }) {
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
      <Layout>
        {/* <MDBContainer> */}
        {/* <SearchFilter /> */}
        <br />
        <div className="sticky">
          <Link href={'/buy'}>
            <MDBBtn className="me-3 mx-3" color="white">
              For Sale
            </MDBBtn>
          </Link>

          <MDBBtn className="me-1" color="primary">
            For Rent
          </MDBBtn>
          <div className="d-md-none">
            <Link href={'/mapPageSales'}>
              <div className="mapButton">
                <MDBIcon fas icon="map-marked" className="mapIcon" /> Map
              </div>
            </Link>
          </div>
        </div>
        <h4 className="h1-responsive font-weight-bold text-center my-3 text-night">
          Rent Aparments
        </h4>
        <div className="row">
          <div className="d-none d-md-block">
            <div className="wrap">
              <div className="box">
                <PropertyCardRent propertyRent={propertyRent} />
              </div>

              <div className="box2">{<MapboxComponentTest />}</div>
            </div>
          </div>
          <div className="d-md-none">
            <div className="col-md-4">
              <PropertyCardRent propertyRent={propertyRent} />
            </div>
            {/* <div className="col-md-8">{<MapboxComponentTest />}</div> */}
          </div>
        </div>
        <div className="d-flex row justify-content-center mx-auto paginate-center">
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
        </div>
        {/* </MDBContainer> */}
      </Layout>
    </section>
  )
}

export const getServerSideProps = async ({ query }) => {
  const propertyRent = propertiesMock.RentHomes

  const page = query.page || 1
  const totalItemsCount = propertiesMock.RentHomes.length
  const numberOfItemsPerPage = 6

  const numberOfPages = Math.floor(
    (totalItemsCount + numberOfItemsPerPage - 1) / numberOfItemsPerPage
  )

  let slicePosition = 0
  if (page === 1) {
    slicePosition = 0
  } else {
    slicePosition = numberOfItemsPerPage * (page - 1)
  }
  const sliceProperties = propertyRent.slice(
    slicePosition,
    slicePosition + numberOfItemsPerPage
  )

  return {
    props: {
      // properties : properties
      propertyRent: sliceProperties,
      currentPage: page,
      pageCount: numberOfPages,
    },
  }
}
