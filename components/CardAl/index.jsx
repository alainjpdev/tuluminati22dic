import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBRipple,
  MDBTooltip,
} from 'mdb-react-ui-kit'
import React from 'react'

function CardAl(property) {
  console.log(property.propertiesB)
  return (
    <div className="col-6">
      <MDBCard>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          <MDBCardImage
            //   <i className="fa fa-heart" />
            src={property.propertiesB.images[0]}
            //   src="images/hometul.png"
            className="card-header-image"
            alt="..."
          />

          {/* <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' /> */}
          <a>
            <div
              className="mask"
              style={{
                backgroundColor: 'rgba(251, 251, 251, 0.15)',
              }}
            ></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>
            <strong>{property.propertiesB.name}</strong>
          </MDBCardTitle>
          <MDBCardText>${property.propertiesB.price}K</MDBCardText>
          <MDBCardText>
            {property.propertiesB.factsandfeatures.beds} bd |
          </MDBCardText>
          <MDBCardFooter className="px-1">
            <span className="float-right">
              <MDBTooltip domElement placement="top">
                <i className="grey-text fa fa-share-alt mr-3" />
                <span>Share</span>
              </MDBTooltip>
            </span>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}

export default CardAl
