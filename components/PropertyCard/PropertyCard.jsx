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
    <div className="grid align-items-end ">
      {properties.map((property) => {
        return (
          <div className="container-fluid p-0">
            <div className="row p-0">
              {/* <div className="col-12 sm:col-12 md:col-8 lg:col-8 mb-4 cursor-pointer p-0 "> */}
              <div className=" sm:col-12 px-2 cursor-pointer">
                <Link
                  href="/property/[slug]"
                  as={`/property/${property.id}`}
                  passHref
                >
                  <Card
                    header={
                      <div className="portrait">
                        <img
                          className=""
                          src={property.images[0]}
                          alt={property.name}
                        />
                      </div>
                    }
                  >
                    <div className="text-sm-start mt-1 mx-3 text-sm-start lh-sm">
                      {property.name}{' '}
                      <h3 style={{ color: 'green' }}>
                        {property.price.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </h3>
                      <strong>{property.factsandfeatures.beds} </strong>bd |
                      <strong>{' ' + property.factsandfeatures.bath}</strong> ba
                      |
                      <br />
                      {property.address.street.toUpperCase()}
                      <h6>{property.developer.toUpperCase()}</h6>
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
  )
}

export default PropertyCard
