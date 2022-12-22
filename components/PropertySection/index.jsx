import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
  MDBCardImage,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import { PriceFormated } from "../Helpers";
import Link from "next/link";

// import { propertiesMock } from "../src/constants";

const PropertySection = ({ properties, handleDisplay }) => (
  <section className="container-fluid mb-3 mt-5">
    <h5 className="h2-responsive font-weight-bold text-center mb-4 text-night">
    Our Hottest Investment Opportunities
    </h5>
    <MDBRow>
      {properties &&
        properties.map((property) => (
          <MDBCol md="4" lg="4" key={property.name}>
            <MDBCard className="mb-4">
              <Link
                href="/property/[slug]"
                as={`/property/${property.id}`}
                passHref
              >
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage
                    src={property.images[0]}
                    alt={property.name}
                    className="globalImg"
                  />
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </MDBRipple>
              </Link>
              <MDBCardBody>
                <MDBCardTitle>{property.name}</MDBCardTitle>
                <MDBCardText>
                  <strong>$ {PriceFormated(property.price)}</strong>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
    </MDBRow>
    <div className="text-center">
      <Link href="/properties">
        <button className="lift py-3 globalBtn my-3">
        Check all our homes
        </button>
      </Link>
      <button className="lift py-3 ml-3 globalBtn my-3" onClick={handleDisplay}>
      Why us?
      </button>
    </div>
  </section>
);

export default PropertySection;
