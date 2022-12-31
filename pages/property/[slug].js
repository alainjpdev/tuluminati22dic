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


// import './DialogDemo.css';
import DialogDemo from "../../components/DialogDemo";

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
            <MDBContainer className="p-0">
              <MDBCard>
                <MDBCardBody className="mx-0 p-0">
                  <MDBRow>
                    <MDBCol md="6" lg="9">
                      <Carousel2 images={property.images} />
                    </MDBCol>
                    <MDBCol md="3" lg="3">
                      <h4 className="mt-3"></h4>
                      <div style={styles} className="m-2 mt-5">
                        <strong >{property.name}</strong>
                      </div>
                      <DialogDemo />

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
                      <div className="d-flex justify-content-around sticky">

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


                  <div className="sticky d-flex justify-content-around justify-content-lg-start">
                    <Link href={"#contactUs"}>
                      <MDBBtn className='me-2 my-1 p-2 mx-1 px-6 py-3 sticky' color='white'>

                        Request a tour
                      </MDBBtn>
                    </Link>
                    <Link href={"#contactUs"}>
                      <MDBBtn className='me-2 my-1 p-2 mx-1 px-6 py-3 sticky'>
                        Contact agent
                      </MDBBtn>
                    </Link>
                  </div>
                  <div className="p-0">
                    <div class="scrollmenu sticky2">
                      <Link href={"#overview"}>Overview</Link>
                      <Link href={"#factsnadfeatures"}>Facts and features</Link>
                 
                      ...
                    </div >
                    <div id="overview">

                    Overview
                    </div>
                    <div>{property.about}</div>
                    <hr />
                    <div id="factsnadfeatures">
                    Facts and features
                    </div>
                    
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>

            <section className="contact-section my-5">
              <MDBCard className="contact-card">
                <MDBRow>
                  <MDBCol lg="8">
                    <MDBCardBody className="form">
                      <h3 className="mt-4">
                        <MDBIcon icon="envelope" className="pr-2" id="contactUs" />
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
                            { }
                            <MDBBtn className='me-2 my-1 py-3 mx-1 px-6 py-2 btn-block smBtn'>

                              Contact Agent
                            </MDBBtn>
                            
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
