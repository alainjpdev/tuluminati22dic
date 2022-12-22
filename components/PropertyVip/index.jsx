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
} from "mdb-react-ui-kit";
import { PriceFormated } from "../Helpers";
import Link from "next/link";

const PropertyVip = ({ properties }) => (
  <section
    className="container-fluid"
    style={{ marginTop: 60 + "px !important" }}
  >
    <h5 className="h7-responsive font-weight-bold text-center my-4 text-night">
      The best properties in Riviera Maya
    </h5>
    {/* <NewMap />
    <Map />*/}
    <MDBRow>
      {properties &&
        properties.map((property) => (
          <MDBCol md="4" lg="4" key={property.title}>
            <MDBCard className="mb-4">
              <Link
                href="/property/[slug]"
                as={`/property/${property.slug}`}
                passHref
              >
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage
                    src={property.pictures[0]}
                    alt={property.title}
                    className="globalImg"
                  />
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </MDBRipple>
              </Link>
              <MDBCardBody>
                <MDBCardTitle>{property.title}</MDBCardTitle>
                <MDBCardText>
                  {/* <strong>{PriceFormated(property.price)}</strong> */}
                  {/* <strong>{property.price}</strong> */}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
    </MDBRow>
  </section>
);

export default PropertyVip;
