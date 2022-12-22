import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { MDBContainer } from "mdb-react-ui-kit";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import SearchFilter from "../components/SearchFilter";
import MapboxComponent from "../components/Mapbox/Mapbox";

import { propertiesMock } from "../src/constants";
import PropertyCard from "../components/PropertyCard/PropertyCard";

const Rent = ({ properties, currentPage, pageCount }) => {
  const router = useRouter();

  const paginationHandler = (page) => {
    const currentPath = router.pathname;
    const currentQuery = { ...router.query };
    currentQuery.page = page.selected + 1;
    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  return (
    <section>
      <Head>
        <title>Tuluminati X Rental of properties</title>
      </Head>
      <Layout>
        <MDBContainer>
          {/* <SearchFilter /> */}
          <h2 className="h1-responsive font-weight-bold text-center my-4 text-night">
            Check out the our list of Rental properties
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Each property at Tuluminati X is unique, find here your rental
            property
          </p>

          <PropertyCard properties={properties} />

          <div className="d-flex row justify-content-center mx-auto paginate-center">
            <ReactPaginate
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
            />
          </div>
        </MDBContainer>
        <MapboxComponent />
      </Layout>
    </section>
  );
};

export const getServerSideProps = async ({ query }) => {
  const properties = propertiesMock.RentHomes;

  const page = query.page || 1;
  const totalItemsCount = propertiesMock.RentHomes.length;
  const numberOfItemsPerPage = 9;

  const numberOfPages = Math.floor(
    (totalItemsCount + numberOfItemsPerPage - 1) / numberOfItemsPerPage
  );

  let slicePosition = 0;
  if (page === 1) {
    slicePosition = 0;
  } else {
    slicePosition = numberOfItemsPerPage * (page - 1);
  }
  const sliceProperties = properties.slice(
    slicePosition,
    slicePosition + numberOfItemsPerPage
  );

  return {
    props: {
      properties: sliceProperties,
      currentPage: page,
      pageCount: numberOfPages,
    },
  };
};

export default Rent;
