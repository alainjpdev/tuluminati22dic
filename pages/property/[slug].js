import React, { useEffect, useState } from 'react'
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
import Image from 'next/image'
import Header from '../../components/Header'

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase()
  return ua.indexOf('safari') > -1 && ua.indexOf('chrome') < 0
}

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

  const videoParentRef = useRef()
  useEffect(() => {
    // check if user agent is safari and we have the ref to the container <div />
    if (isSafari() && videoParentRef.current) {
      // obtain reference to the video element
      const player = videoParentRef.current.children[0]

      // if the reference to video player has been obtained
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false
        player.playsinline = true
        player.muted = true
        player.setAttribute('muted', '') // leave no stones unturned :)
        player.autoplay = true

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play()
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current.style.display = 'none'
                setShouldUseImage(true)
              })
          }
        }, 0)
      }
    }
  }, [])

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
          <>
            <Header />
            <div className="d-md-none">
              <MDBContainer className="p-0">
                <MDBCard id="top">
                  <MDBCardBody className="mx-0 p-0">
                    <MDBRow>
                      <MDBCol className="col col-lg-12">
                        {!!property.video ? (
                          <div style={{ justifyContent: 'center' }}>
                            <video
                              autoplay
                              controls={true}
                              playsinline
                              preload="metadata"
                              height="250px"
                              width="100%"
                              src={property.video}
                              type="video/mp4"
                            ></video>
                          </div>
                        ) : (
                          <></>
                        )}
                        <Carousel2 images={property.images} />
                        <br />
                      </MDBCol>
                      <MDBCol md="3" lg="3">
                        <h4 className="mt-3"></h4>
                        <div style={styles} className="m-2 mt-5">
                          <strong>{property.name}</strong>
                        </div>

                        <h3 style={{ color: 'green', fontSize: '24px' }}>
                          <strong>
                            Starting from
                            {' ' +
                              property.price.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                              })}
                          </strong>
                        </h3>
                        <div style={styles} className="d-inline m-2">
                          {/* <MDBIcon icon="calculator" className="mr-2" /> */}
                          <strong>
                            {' ' + property.factsandfeatures.beds}
                          </strong>{' '}
                          bd <span className="lineatrans">|</span>
                        </div>
                        <div style={styles} className="d-inline m-2">
                          {/* <MDBIcon icon="calculator" className="mr-2" /> */}
                          <strong>
                            {' ' + property.factsandfeatures.bath}
                          </strong>{' '}
                          ba <span className="lineatrans">|</span>
                        </div>

                        <div style={styles} className="m-2">
                          {property.address.street}
                        </div>
                        <div style={styles} className="m-2">
                          {property.delivery?.finish}
                        </div>
                        <div className="mx-2">
                          <DialogDemo tour={property.virtualTour} />
                        </div>
                        <div className="d-flex justify-content-around sticky"></div>
                        <div style={styles}></div>
                        <h3 className="mx-0 lh-1"></h3>
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
                        <MDBBtn className="me-2 my-1 p-2 mx-1 px-6 py-3 sticky">
                          Contact agent
                        </MDBBtn>
                      </Link>
                    </div>
                    <div className="p-0">
                      <div class="scrollmenu sticky2">
                        <Link href={'#overview'}>Overview</Link>
                        <Link href={'#factsnadfeatures'}>
                          Facts and features
                        </Link>
                        ...
                      </div>
                      <div id="overview" className="px-2 anchor">
                        Overview
                      </div>
                      <ul>
                        <div className="square mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            // fill="currentColor"

                            className="bi bi-building"
                            viewBox="0 0 16 16"
                            padding-right="5px"
                          >
                            <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                            <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
                          </svg>
                          <span className="px-2">Single family residence</span>
                        </div>
                        <div className="square mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-calendar-event"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                          </svg>
                          <span className="px-2">Built in 2023</span>
                        </div>
                        <div className="square mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-thermometer-high"
                            viewBox="0 0 16 16"
                          >
                            <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z" />
                            <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
                          </svg>
                          <span className="px-2">
                            Fireplace(s), heat pump, multiple systems
                          </span>
                        </div>
                        <div className="square mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-snow3"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 7.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z" />
                            <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793v-1.51l-2.053-1.232-1.348.778-.495 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.883-.237a.5.5 0 1 1 .258-.966l1.85.495L5 9.155v-2.31l-1.4-.808-1.85.495a.5.5 0 1 1-.259-.966l.884-.237-1.12-.646a.5.5 0 0 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849 1.348.778L7.5 4.717v-1.51L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 0 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v1.51l2.053 1.232 1.348-.778.495-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495-1.4.808v2.31l1.4.808 1.849-.495a.5.5 0 1 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-1.348-.778L8.5 11.283v1.51l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5zm2-6.783V6.783l-2-1.2-2 1.2v2.434l2 1.2 2-1.2z" />
                          </svg>
                          <span className="px-2">Central air</span>
                        </div>
                        <div className="square mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-p-square"
                            viewBox="0 0 16 16"
                            padding="30px"
                          >
                            <path d="M5.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5V4.002Zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97H8.27Z" />
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
                          </svg>
                          <span className="px-2">Garage spaces</span>
                        </div>
                        <div className="square mb-2"></div>
                      </ul>
                      <div className="px-2">{property.about}</div>
                      <hr />
                      <div id="factsnadfeatures" className="px-2 anchor2">
                        Facts and features
                      </div>
                      <div className="px-2">{property.about}</div>
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
            </div>

            <div className="d-none d-md-block">
              <div className="wrap">
                <div className="boxSlug1">
                  <div className="container-fluid">
                    <div className="grid-layout p-0 ">
                      {!!property.video ? (
                        <div
                          ref={videoParentRef}
                          dangerouslySetInnerHTML={{
                            __html: `
                                    <video
                                    controls="true"
                                      loop
                                      muted
                                      autoplay
                                      playsInline
                                      preload="metadata"
                                      width="500px"
                                      height="350px"
                                    >
                                    <source src="${property.video}" type="video/mp4" />
                                    </video>`,
                          }}
                        />
                      ) : (
                        <></>
                      )}
                      {property.images.map((image, index) => {
                        return (
                          <>
                            <div
                              className={'ima' + index}
                              style={{ margin: '2px' }}
                            >
                              <Image
                                src={image}
                                width={800}
                                height={450}
                                // layout={'fill'}
                                // justify-content-end
                              />
                            </div>
                          </>
                        )
                      })}
                      {/* </div> */}
                    </div>
                  </div>
                </div>

                <div className="boxSlug2" style={{ border: '1px solid black' }}>
                  <MDBContainer className="p-0">
                    <MDBCard id="top">
                      <MDBCardBody className="mx-0 p-0">
                        <MDBRow>
                          <MDBCol md="12" lg="12">
                            <div style={styles} className="m-2 mt-5">
                              <strong>{property.name}</strong>
                            </div>

                            <div style={styles} className="m-2">
                              <h3 style={{ color: 'green', fontSize: '24px' }}>
                                <strong>
                                  Starting from
                                  {' ' +
                                    property.price.toLocaleString('en-US', {
                                      style: 'currency',
                                      currency: 'USD',
                                    })}
                                </strong>
                              </h3>
                            </div>
                            <div style={styles} className="d-inline m-2">
                              {/* <MDBIcon icon="calculator" className="mr-2" /> */}
                              <strong>
                                {' ' + property.factsandfeatures.beds}
                              </strong>{' '}
                              bd <span className="lineatrans">|</span>
                            </div>
                            <div style={styles} className="d-inline m-2">
                              {/* <MDBIcon icon="calculator" className="mr-2" /> */}
                              <strong>
                                {' ' + property.factsandfeatures.bath}
                              </strong>{' '}
                              ba <span className="lineatrans">|</span>
                            </div>

                            <div style={styles} className="m-2">
                              {property.address.street}
                            </div>
                            <div style={styles} className="m-2">
                              {property.delivery?.finish}
                            </div>
                            <div className="mx-2">
                              <DialogDemo tour={property.virtualTour} />
                            </div>
                            <div className="d-flex justify-content-around sticky"></div>
                            <div style={styles}></div>
                            <h3 className="mx-0 lh-1"></h3>
                          </MDBCol>
                          {/* <div className="fixedTop"></div> */}
                        </MDBRow>
                        <hr className="my-1" />
                        <MDBRow>
                          {propertiesRelated &&
                            propertiesRelated.length !== 0 && (
                              <MDBCol>
                                <h2 className="mb-4">Our similar properties</h2>
                                <CardRelated properties={propertiesRelated} />
                              </MDBCol>
                            )}
                        </MDBRow>

                        <div className="sticky d-flex justify-content-around justify-content-lg-start">
                          <Link href={'#contactUs2'}>
                            <MDBBtn
                              className="me-2 my-1 p-2 mx-1 px-6 py-3 sticky"
                              color="white"
                            >
                              Request a tour
                            </MDBBtn>
                          </Link>
                          <Link href={'#contactUs2'}>
                            <MDBBtn className="me-2 my-1 p-2 mx-1 px-6 py-3 sticky">
                              Contact agent
                            </MDBBtn>
                          </Link>
                        </div>
                        <div className="p-0">
                          <div class="scrollmenu sticky2">
                            <Link href={'#overview2'}>Overview</Link>
                            <Link href={'#factsnadfeatures2'}>
                              Facts and features
                            </Link>
                            ...
                          </div>
                          <div id="overview2" className="px-2 anchor">
                            Overview
                          </div>
                          <ul>
                            <div className="square mb-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                // fill="currentColor"

                                className="bi bi-building"
                                viewBox="0 0 16 16"
                                padding-right="5px"
                              >
                                <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                                <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
                              </svg>
                              <span className="px-2">
                                Single family residence
                              </span>
                            </div>
                            <div className="square mb-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-calendar-event"
                                viewBox="0 0 16 16"
                              >
                                <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                              </svg>
                              <span className="px-2">Built in 2023</span>
                            </div>
                            <div className="square mb-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-thermometer-high"
                                viewBox="0 0 16 16"
                              >
                                <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z" />
                                <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
                              </svg>
                              <span className="px-2">
                                Fireplace(s), heat pump, multiple systems
                              </span>
                            </div>
                            <div className="square mb-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-snow3"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 7.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z" />
                                <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793v-1.51l-2.053-1.232-1.348.778-.495 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.883-.237a.5.5 0 1 1 .258-.966l1.85.495L5 9.155v-2.31l-1.4-.808-1.85.495a.5.5 0 1 1-.259-.966l.884-.237-1.12-.646a.5.5 0 0 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849 1.348.778L7.5 4.717v-1.51L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 0 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v1.51l2.053 1.232 1.348-.778.495-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495-1.4.808v2.31l1.4.808 1.849-.495a.5.5 0 1 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-1.348-.778L8.5 11.283v1.51l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5zm2-6.783V6.783l-2-1.2-2 1.2v2.434l2 1.2 2-1.2z" />
                              </svg>
                              <span className="px-2">Central air</span>
                            </div>
                            <div className="square mb-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-p-square"
                                viewBox="0 0 16 16"
                                padding="30px"
                              >
                                <path d="M5.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5V4.002Zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97H8.27Z" />
                                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
                              </svg>
                              <span className="px-2">Garage spaces</span>
                            </div>
                            <div className="square mb-2"></div>
                          </ul>
                          <div
                            className="px-2"
                            style={{ 'text-align': 'justify' }}
                          >
                            {property.about}
                          </div>
                          <hr />
                          <div id="factsnadfeatures2" className="px-2 anchor2">
                            Facts and features
                          </div>
                          <div
                            className="px-2"
                            style={{ 'text-align': 'justify' }}
                          >
                            {property.about}
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBContainer>

                  <section className="contact-section my-5">
                    <MDBCard className="contact-card">
                      <MDBRow>
                        <MDBCol lg="12">
                          <MDBCardBody className="form">
                            <h3 className="mt-4">
                              <MDBIcon
                                icon="envelope"
                                className="pr-2"
                                id="contactUs2"
                              />
                              Contact agent:
                            </h3>
                            <MDBRow>
                              <MDBCol md="12">
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
                                </div>
                              </MDBCol>
                            </MDBRow>
                          </MDBCardBody>
                        </MDBCol>

                        {/* <MDBCol lg="4">
                          <MDBCardBody className="contact text-center h-100 white-text">
                            <h3 className="my-4 pb-2">Contact Information</h3>
                            <ul className="text-lg-left list-unstyled ml-4">
                              <li>
                                <p>
                                  <MDBIcon
                                    icon="map-marker-alt"
                                    className="pr-2"
                                  />
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
                        </MDBCol> */}
                      </MDBRow>
                    </MDBCard>
                  </section>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export const getServerSideProps = (context) => {
  const { slug } = context.query
  const property = propertiesMock.BuyHomes.find((home) => home.id === slug)

  return {
    props: {
      property: property,
      propertiesVip: [],
      propertiesRelated: [],
    },
  }
}

export default Property
