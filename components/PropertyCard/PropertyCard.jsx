import Link from 'next/link'
import { Card } from 'primereact/card'
import { MDBCol } from 'mdb-react-ui-kit'

const PropertyCard = ({ properties }) => {
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
                            <img
                              style={{
                                width: '100%',
                                height: '25vh',
                              }}
                              src={property.images[0]}
                              alt={property.name}
                            />
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
                            <img
                              style={{
                                width: '100%',
                                height: '25vh',
                                padding: '0px',
                              }}
                              src={property.images[0]}
                              alt={property.name}
                            />
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
