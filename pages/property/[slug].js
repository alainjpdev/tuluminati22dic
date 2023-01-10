import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import CardCarousel from '../../components/CardCarousel'
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit'
import Slug from '../../components/Slug'
import CardVip from '../../components/CardVip'
import CardRelated from '../../components/CardRelated/index.jsx'
import { propertiesMock } from '../../src/constants.js'

import { MDBInput } from 'mdbreact'
import { useRouter } from 'next/router'
import Carousel from '../../components/Carousel'
import Carousel2 from '../../components/Carousel2'
import Link from 'next/link'
import emailjs, { send } from '@emailjs/browser'
import { useRef } from 'react'
// import './DialogDemo.css';
import DialogDemo from '../../components/DialogDemo'
import DialogModal from '../../components/DialogModal'

import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import Router from 'next/router'

const Property = ({
  property,
  propertiesVip,
  propertiesRelated,
  properties,
}) => {
  const styles = {
    fontSize: 15,
  }

  const router = useRouter()
  const onSubmit = (event) => {
    event.preventDefault()
    router.push('/')
  }

  const [visibleFullScreen, setVisibleFullScreen] = useState(false)

  // let { isLoggedIn } = this.state

  // const renderAuthButton = () => {
  //   if (isLoggedIn) {
  //     return <button>Logout</button>
  //   } else {
  //     return <button>Login</button>
  //   }
  // }
  const [isString, setIsString] = useState(
    'https://my.matterport.com/show/?m=nYhmHzFbGXD&brand=0'
  )

  const form = useRef()

  // const redirect = (e) => {
  //   sendEmail()
  //   // history.push('/agents')
  // }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_t42ges4',
        'template_i02jnzw',
        form.current,
        'LWhLzpN2d1Yzzs4DY'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    Router.push('/success')
  }

  return (
    <>
      <div>
        {property && (
          <Layout>
            <MDBContainer className="p-0">
              <MDBCard id="top">
                <MDBCardBody className="mx-0 p-0">
                  <MDBRow>
                    <MDBCol className="col col-lg-12">
                      <Carousel2 images={property.images} />
                    </MDBCol>
                    <MDBCol md="3" lg="3">
                      <h4 className="mt-3"></h4>
                      <div style={styles} className="m-2 mt-5">
                        <strong>{property.name}</strong>
                      </div>
                      <div className="mx-2">
                        <DialogDemo tour={property.virtualTour} />
                      </div>

                      <div style={styles} className="m-2">
                        <strong> $ {property.price}k</strong>
                      </div>
                      <div style={styles} className="d-inline m-2">
                        {/* <MDBIcon icon="calculator" className="mr-2" /> */}
                        <strong>
                          {' ' + property.factsandfeatures.beds}
                        </strong>{' '}
                        bd |
                      </div>
                      <div style={styles} className="d-inline m-2">
                        {/* <MDBIcon icon="calculator" className="mr-2" /> */}
                        <strong>
                          {' ' + property.factsandfeatures.bath}
                        </strong>{' '}
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
                      <div className="d-flex justify-content-around sticky"></div>
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
                    <Link href={'#contactUs'}>
                      <MDBBtn
                        className="me-2 my-1 p-2 mx-1 px-6 py-3 sticky"
                        color="white"
                      >
                        Request a tour
                      </MDBBtn>
                    </Link>
                    <Link href={'#contactUs'}>
                      <MDBBtn
                        className="me-2 my-1 p-2 mx-1 px-6 py-3 sticky"
                        // onClick={sendEmail}
                      >
                        Contact agent
                      </MDBBtn>
                    </Link>
                  </div>
                  <div className="p-0">
                    <div class="scrollmenu sticky2">
                      <Link href={'#overview'}>Overview</Link>
                      <Link href={'#factsnadfeatures'}>Facts and features</Link>
                      ...
                    </div>
                    <div id="overview" className="px-2">
                      Overview
                    </div>
                    <div className="px-2">{property.about}</div>
                    <hr />
                    <div id="factsnadfeatures" className="px-2">
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
                        <MDBIcon
                          icon="envelope"
                          className="pr-2"
                          id="contactUs"
                        />
                        Contact agent:
                      </h3>
                      <MDBRow>
                        <MDBCol md="6">
                          <form ref={form}>
                            <div className="md-form mb-0">
                              <div class="form-group">
                                <label for="name">Name</label>
                                <input
                                  type="name"
                                  name="user_name"
                                  class="form-control"
                                  id="name"
                                  placeholder="enter your name"
                                />
                              </div>
                              <div class="form-group">
                                <label for="email">Email address</label>
                                <input
                                  type="email"
                                  name="user_email"
                                  class="form-control"
                                  id="email"
                                  placeholder="enter your email"
                                />
                              </div>
                              <div class="form-group">
                                <label for="phone">Phone</label>
                                <input
                                  type="numer"
                                  name="user_phone"
                                  class="form-control"
                                  id="email"
                                  placeholder="enter your phone"
                                />
                              </div>

                              <div class="form-group">
                                <label for="email_body">Message</label>
                                <textarea
                                  class="form-control"
                                  name="message"
                                  id="email_body"
                                  rows="5"
                                >
                                  {'I am interested in ' +
                                    property.address.street}
                                </textarea>
                              </div>

                              <textarea
                                name="property_id"
                                className="hide"
                                display="none"
                              >
                                {property.id}
                              </textarea>
                              {/* <MDBInput
                                type="text"
                                id="form-contact-phone"
                                label="Phone"
                              /> */}
                            </div>
                          </form>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="12">
                          <div className="md-form mb-0">
                            <MDBBtn
                              className="me-2 my-1 py-3 mx-1 px-6 py-2 btn-block smBtn"
                              onClick={sendEmail}
                              target="_top"
                            >
                              Contact Agent
                            </MDBBtn>
                            {/* <DialogModal
                              className="hide"
                              sendEmail={sendEmail}
                              form={form}
                            /> */}
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCol>
                  {/* <div className="dialog-demo">
                    <Sidebar
                      visible={visibleFullScreen}
                      style={{ 'background-color': 'white' }}
                      fullScreen
                      onHide={() => setVisibleFullScreen(false)}
                    >
                      <h3 className="d-flex justify-content-end">
                        <Button
                          onClick={() => setVisibleFullScreen(false)}
                          className="d-flex justify-content-end btn btn-tertiary"
                        >
                          CLOSE
                        </Button>
                      </h3>
                    </Sidebar>
                    <MDBBtn
                      onClick={setVisibleFullScreen(true)}
                      className="me-2 my-1 py-3 mx-1 px-6 py-2 btn-block smBtn"
                    >
                      CONTACT AGENT
                    </MDBBtn>
                  </div> */}

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
        |
      </div>
    </>
  )
}

export const getServerSideProps = (context) => {
  // export const getStaticProps = (context) => {
  const { slug } = context.query
  const property = propertiesMock.BuyHomes.find((home) => home.id === slug)
  // const properties = propertiesMock.BuyHomes

  return {
    props: {
      property: property,
      propertiesVip: [],
      propertiesRelated: [],
      // properties: properties,
    },
  }
}

export default Property
