import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import CardCarousel from "../../components/CardCarousel";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import Slug from "../../components/Slug";
import CardVip from "../../components/CardVip";
import CardRelated from "../../components/CardRelated/index.jsx";
import { propertiesMock } from "../../src/constants.js";

import { MDBInput } from "mdbreact";
import { useRouter } from "next/router";
import Carousel from "../../components/Carousel";
import Carousel2 from "../../components/Carousel2";
import Link from "next/link";

const Property = ({ property, propertiesVip, propertiesRelated }) => {
  const styles = {
    fontSize: 15,
  };

  const router = useRouter();
  const onSubmit = (event) => {
    event.preventDefault();
    router.push("/");
  };

  return (
    <>
      <div>
        {property && (
          <Layout>
            {/* <MDBContainer> */}
              {/* <MDBCard> */}
                <MDBCardBody className="mx-0 p-0">
                  <MDBRow>
                    <MDBCol md="6" lg="9">
                      <Carousel2 images={property.images} />
                    </MDBCol>
                    <MDBCol md="1" lg="3">
                      <h4 className="mt-3"></h4>
                      <div style={styles} className="m-2">
                        <strong>{property.name}</strong>
                      </div>

                      <div style={styles} className="m-2">
                        <strong> $ {property.price}k</strong>
                      </div>
                      <div style={styles} className="d-inline m-2">
                        {/* <MDBIcon icon="calculator" className="mr-2" /> */}
                        <strong>
                          {" " + property.factsandfeatures.beds}
                        </strong>{" "}
                        bd |
                      </div>
                      <div style={styles} className="d-inline m-2">
                        {/* <MDBIcon icon="calculator" className="mr-2" /> */}
                        <strong>
                          {" " + property.factsandfeatures.bath}
                        </strong>{" "}
                        ba |
                      </div>

                      <div style={styles} className="m-2">
                        {/* <MDBIcon icon="mobile-alt" className="mr-2" /> */}
                        {property.address.street}
                      </div>
                      <div style={styles} className="m-2">
                        {/* <MDBIcon icon="mobile-alt" className="mr-2" /> */}
                        {property.delivery?.finish}
                      </div>
                      <div className="sticky">
            <Link href={"/properties"}>
          <MDBBtn className='me-3 my-1 p-3 mx-1 px-6' color='white'>
        Request a tour
        </MDBBtn>
        </Link>
        <MDBBtn className='me-3 p-3 mx-1 px-6'color='primary'>
        Contact agent
        </MDBBtn> 
        </div>
                      <div style={styles}>
                        {/* <MDBIcon icon="envelope" className="mr-2" />
                     {property.card.agency} */}
                      </div>
                      <h3 className="mx-0 lh-1"></h3>
                      {/* <CardVip properties={propertiesVip} /> */}
                    </MDBCol>
                  </MDBRow>
                  <hr className="my-1" />
                  <MDBRow>
                    {propertiesRelated && propertiesRelated.length !== 0 && (
                      <MDBCol>
                        <h2 className="mb-4">Our similar properties</h2>
                        <CardRelated properties={propertiesRelated} />
                      </MDBCol>
                    )}
                  </MDBRow>
                  Overview
                  <div>{property.about}</div>
                  <hr />
                  Facts and features
                </MDBCardBody>
              {/* </MDBCard> */}
            {/* </MDBContainer> */}

            <section className="contact-section my-5">
              <MDBCard className="contact-card">
                <MDBRow>
                  <MDBCol lg="8">
                    <MDBCardBody className="form">
                      <h3 className="mt-4">
                        <MDBIcon icon="envelope" className="pr-2" />
                        Contact agent:
                      </h3>
                      <MDBRow>
                        <MDBCol md="6">
                          <div className="md-form mb-0">
                            <MDBInput
                              type="text"
                              id="form-contact-phone"
                              label="Phone"
                            />
                          </div>
                        </MDBCol>
                        <MDBCol md="6">
                          <div className="md-form mb-0">
                            <MDBInput
                              type="text"
                              id="form-contact-email"
                              label="Email"
                            />
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="12">
                          <div className="md-form mb-0">
                            <MDBInput
                              type="textarea"
                              id="form-contact-message"
                              label="Message"
                              valueDefault={
                                "I am interested in " + property.address.street
                              }
                            />
                            {}
                            <button
                              className="btn-block smBtn"
                              onClick={onSubmit}
                            >
                              Contact Agent
                            </button>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCol>
                  <MDBCol lg="4">
                    <MDBCardBody className="contact text-center h-100 white-text">
                      <h3 className="my-4 pb-2">Contact Information</h3>
                      <ul className="text-lg-left list-unstyled ml-4">
                        <li>
                          <p>
                            <MDBIcon icon="map-marker-alt" className="pr-2" />
                            Tulum, Quintana Roo, Mexico
                          </p>
                        </li>
                        <li>
                          <p>
                            <MDBIcon icon="phone" className="pr-2" />
                            +54 9 3514 59-9369
                          </p>
                        </li>
                        <li>
                          <p>
                            <MDBIcon icon="envelope" className="pr-2" />
                            cami@gmail.com
                          </p>
                        </li>
                      </ul>
                      <hr className="hr-light my-4" />
                      <ul className="list-inline text-center list-unstyled"></ul>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </section>
          </Layout>
        )}
      </div>
    </>
  );
};

export const getServerSideProps = (context) => {
  const { slug } = context.query;
  const property = propertiesMock.BuyHomes.find((home) => home.id === slug);

  return {
    props: {
      property: property,
      propertiesVip: [],
      propertiesRelated: [],
    },
  };
};

export default Property;
