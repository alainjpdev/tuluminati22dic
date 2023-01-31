import Link from 'next/link'
import { Card } from 'primereact/card'
import { MDBCol } from 'mdb-react-ui-kit'
import { useEffect, useRef, useState } from 'react'
import VideoPlayer from '../VideoPlayer'
import ImageCard from '../ImageCard'
const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase()
  return ua.indexOf('safari') > -1 && ua.indexOf('chrome') < 0
}

const video1 = '/videos/video1.mp4'

const PropertyCard = ({ properties }) => {
  // const video1 = '${property.video}'
  const videoParentRef = useRef()
  const [shouldUseImage, setShouldUseImage] = useState(false)
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
  const generateAboutText = (text) => {
    if (text.length > 200) {
      return `${text.substring(0, 200)}...`
    }
    return text
  }

  return (
    <>
      <div className="d-none d-lg-block">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridGap: '0px',
            margin: '5px',
          }}
          shadow
        >
          {properties.map((property) => {
            return (
              <div
                className="container-fluid m-0  "
                style={{
                  padding: '15px',
                  // margin: '10px',
                  paddingTop: '0px',
                  paddingRight: '15px',
                }}
              >
                <div className="row p-0">
                  {/* <div className="col-12 sm:col-12 md:col-8 lg:col-8 mb-4 cursor-pointer p-0 "> */}
                  <div className="sm:col-12  cursor-pointer shadow p-0 bg-white rounded m-1 ">
                    <Link
                      href="/property/[slug]"
                      as={`/property/${property.id}`}
                      passHref
                    >
                      <Card
                        header={
                          <div className="portrait ">
                            {!!property.video ? (
                              <div
                                ref={videoParentRef}
                                dangerouslySetInnerHTML={{
                                  __html: `
                                    <video
                                      loop
                                      muted
                                      autoplay
                                      playsinline
                                      preload="metadata"
                                      width="100%"
                                      height="150px"

                                    >
                                    <source src="${property.video}" type="video/mp4" />
                                    </video>`,
                                }}
                              />
                            ) : (
                              <img
                                style={{
                                  width: '100%',
                                  height: '25vh',
                                  padding: '0px',
                                }}
                                src={property.images[0]}
                                alt={property.name}
                              />
                            )}

                            {/* <img
                              style={{
                                width: '100%',
                                height: '25vh',
                              }}
                              src={property.images[0]}
                              alt={property.name}
                            /> */}
                          </div>
                        }
                      >
                        <div
                          className="text-sm-start mt-1 mx-3 text-sm-start lh-sm pt-0"
                          style={{
                            fontSize: '12px',
                          }}
                        >
                          {property.name}
                          <h3 style={{ color: 'green', fontSize: '12px' }}>
                            <strong>
                              {property.price.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                              })}
                            </strong>
                          </h3>
                          <strong>{property.factsandfeatures.beds} </strong>bd{' '}
                          <span className="lineatrans">|</span>
                          <strong>
                            {' ' + property.factsandfeatures.bath}
                          </strong>{' '}
                          ba <span className="lineatrans">|</span>
                          <br />
                          {property.address.street.toUpperCase()}
                          <h6
                            style={{
                              fontSize: '8px',
                            }}
                          >
                            {property.developer.toUpperCase()}
                          </h6>
                        </div>

                        {/* <hr /> */}
                      </Card>
                    </Link>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="d-lg-none">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridGap: '16px',
            margin: '0px',
            padding: '0px',
          }}
          p-0
        >
          {properties.map((property) => {
            return (
              <div className="container-fluid p-0 h-100">
                <div className="row p-0">
                  {/* <div className="col-12 sm:col-12 md:col-8 lg:col-8 mb-4 cursor-pointer p-0 "> */}
                  <div className="sm:col-12 px-0 cursor-pointer  shadow p-0 bg-white rounded ">
                    <Link
                      href="/property/[slug]"
                      as={`/property/${property.id}`}
                      passHref
                    >
                      <Card
                        header={
                          <div className="portrait p-0">
                            {/* <div
                              ref={videoParentRef}
                              dangerouslySetInnerHTML={{
                                __html: `
                                    <video
                                      loop
                                      muted
                                      autoplay
                                      playsinline
                                      preload="metadata"
                                    >
                                    <source src="${video1}" type="video/mp4" />
                                    </video>`,
                              }}
                            /> */}

                            {/* {!!property.video ? (
                              <video
                                style={{ width: '100%', height: '100%' }}
                                autoPlay
                                loop
                                muted
                                // src="/videos/tulumBeach.mp4"
                                src={property.video}
                                className="main p-0 m-0 videoBg"
                                type="video/mp4"
                              ></video>
                            ) : (
                              <img
                                style={{
                                  width: '100%',
                                  height: '25vh',
                                  padding: '0px',
                                }}
                                src={property.images[0]}
                                alt={property.name}
                              />
                            )} */}

                            {!!property.video ? (
                              <div
                                ref={videoParentRef}
                                dangerouslySetInnerHTML={{
                                  __html: `
                                    <video
                                      loop
                                      muted
                                      autoplay
                                      playsinline
                                      preload="metadata"
                                      width="100%"
                                      height="150px"

                                    >
                                    <source src="${property.video}" type="video/mp4" />
                                    </video>`,
                                }}
                              />
                            ) : (
                              <img
                                style={{
                                  width: '100%',
                                  height: '25vh',
                                  padding: '0px',
                                }}
                                src={property.images[0]}
                                alt={property.name}
                              />
                            )}
                          </div>
                        }
                      >
                        <div
                          className="text-sm-start mt-1 mx-3 text-sm-start lh-sm"
                          style={{
                            fontSize: '12px',
                          }}
                        >
                          {property.name}{' '}
                          <h3 style={{ color: 'green', fontSize: '12px' }}>
                            <strong>
                              {property.price.toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                              })}
                            </strong>
                          </h3>
                          <strong>{property.factsandfeatures.beds} </strong>bd{' '}
                          <span className="lineatrans">|</span>
                          <strong>
                            {' ' + property.factsandfeatures.bath}
                          </strong>{' '}
                          ba <span className="lineatrans">|</span>
                          <br />
                          {property.address.street.toUpperCase()}
                          <h6
                            style={{
                              fontSize: '9px',
                            }}
                          >
                            {property.developer.toUpperCase()}
                          </h6>
                        </div>

                        {/* <hr /> */}
                      </Card>
                    </Link>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default PropertyCard
