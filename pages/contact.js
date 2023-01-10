import React, { useRef } from 'react'
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBContainer,
} from 'mdbreact'
import Layout from '../components/Layout'
import Carousel from '../components/Carousel'
import { useRouter } from 'next/router'
import Head from 'next/head'
import emailjs from '@emailjs/browser'

const ContactPage = () => {
  const router = useRouter()

  const onSubmit = (event) => {
    event.preventDefault()
    router.push('/')
  }

  const form = useRef()
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
  }
  return (
    <div>
      <Head>
        <title>Tuluminati X - Contact</title>
      </Head>
      <Layout>
        <MDBContainer className="container-fluid p-0">
          <Carousel />
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
                      Contact
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
                              ></textarea>
                            </div>

                            <textarea
                              name="property_id"
                              className="hide"
                              display="none"
                            ></textarea>
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
                          {/* +54 9 3514 59-9369 */}
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
        </MDBContainer>
      </Layout>
    </div>
  )
}

export default ContactPage
