import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
// import Card from "../components/Card";
import { MDBContainer } from "mdb-react-ui-kit";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import SearchFilter from "../components/SearchFilter";
import MapboxComponent from "../components/Mapbox/Mapbox";

import { propertiesMock } from "../src/constants";
import PropertyCard from "../components/PropertyCard/PropertyCard";
import { MDBBtn, MDBIcon } from "mdbreact";
import Header from "../components/Header";
import MapboxComponentTest from "../components/Mapboxtest";
import Link from "next/link";

import  { useState } from 'react';
import {
  
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

const MapPageSales = ({ properties }) => {

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  // const router = useRouter();

  // const paginationHandler = (page) => {
  //   const currentPath = router.pathname;
  //   const currentQuery = { ...router.query };
  //   currentQuery.page = page.selected + 1;
  //   router.push({
  //     pathname: currentPath,
  //     query: currentQuery,
  //   });
  // };

  return (
    <section>
      <Head>
        <title>Tuluminati X List of properties</title>
      </Head>
      <Header/>
        {/* <MDBContainer> */}
          {/* <SearchFilter /> */}
          <br/>
           <div className="sticky">
          <MDBBtn className='me-3 mx-3' color='primary'>
        For Sale
        </MDBBtn>
        <MDBBtn className='me-1'>
        For Rent
        </MDBBtn> 
        
          </div>
        <MapboxComponent/>
        {/* <MapboxComponentTest/> */}
        

        <i class="fas fa-list"></i>
      <Link href={"/properties"}>
          <div className="mapButton"><MDBIcon  className="fas fa-list"/>     List</div>
          {/* <PropertyCard properties={properties} /> */}
          </Link>
         
          <div className="d-flex row justify-content-center mx-auto paginate-center">
            {/* <ReactPaginate
              onPageChange={paginationHandler}
              initialPage={currentPage - 1}
              pageCount={pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={2}
              previousLabel="Anterior"
              nextLabel="Siguiente"
              activeClassName="actived"
              breakLabel="..."
              pageClassName="paginate"
              containerClassName="custom-paginate"
            /> */}

            
          </div>
        {/* </MDBContainer> */}
      
   
    </section>
  );
};

export const getServerSideProps = async ({ query }) => {
  const properties = propertiesMock.BuyHomes;

//   const page = query.page || 1;
//   const totalItemsCount = propertiesMock.BuyHomes.length;
//   const numberOfItemsPerPage = 9;

//   const numberOfPages = Math.floor(
//     (totalItemsCount + numberOfItemsPerPage - 1) / numberOfItemsPerPage
//   );

//   let slicePosition = 0;
//   if (page === 1) {
//     slicePosition = 0;
//   } else {
//     slicePosition = numberOfItemsPerPage * (page - 1);
//   }
//   const sliceProperties = properties.slice(
//     slicePosition,
//     slicePosition + numberOfItemsPerPage
//   );

  return {
    props: {
      properties : properties
      // properties: sliceProperties,
      // currentPage: page,
      // pageCount: numberOfPages,
    },
  };
};

export default MapPageSales;
