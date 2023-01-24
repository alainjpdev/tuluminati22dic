import Link from 'next/link'
import { Card } from 'primereact/card'
import { MDBCard, MDBCol } from 'mdb-react-ui-kit'

const PropertyCardRent = ({ propertyRent }) => {
  const generateAboutText = (text) => {
    if (text.length > 200) {
      return `${text.substring(0, 200)}...`
    }
    return text
  }

  return (
    <div className="grid align-items-end ">
      {propertyRent.map((property) => {
        return (
          <div className="container-fluid p-0">
            <div className="row">
              <div className=" sm:col-12 px-2 cursor-pointer">
                <Link
                  href="/propertyRent/[slug]"
                  as={`/propertyRent/${property.id}`}
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
                    <MDBCol lg="3" className="mx-3 cardPa">
                      <span className="text-night">
                        <h6 className="font-weight-bold mb-3">
                          {/* <MDBIcon icon="building" className="pr-2" /> */}
                          {/* {property.category.name} */}
                        </h6>
                      </span>
                      <h3 className="font-weight-bold p-0 flex">
                        {/* <>${PriceFormated(property.price)}</> */}

                        {/* <strong>{property.name}</strong> */}
                      </h3>
                      {/*                
                <strong>{property.factsandfeatures.beds} </strong>bd |
                <strong>{" " + property.factsandfeatures.bath}</strong>  ba |
                
                */}
                      {/* <br/>
                   {property.address.street.toUpperCase()}
                <br/>
                <h9>
                   {property.developer.toUpperCase()}
                </h9>
                 */}
                    </MDBCol>

                    {/* <p className="m-3" style={{ lineHeight: "1.8" }}>
                  {generateAboutText(property.about)}
                </p> */}

                    <hr />
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PropertyCardRent
