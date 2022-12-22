import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBRipple,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { PriceFormated } from "../Helpers";
import Link from "next/link";

const Card = ({ properties }) => {
  let index = 0;
  return (
    <MDBCard className=" mt-4 mb-5 px-5 pb-5">
      <MDBCardBody>
        {properties &&
          properties.map((property, index) => (
            <MDBRow key={property._id}>
              <MDBCol lg="12">
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
                      src={property.images[0]}
                      alt={property.name}
                      className="globalImg mb-2"
                    />
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </MDBRipple>
                </Link>
              </MDBCol>
              <MDBCol lg="12">
                <span className="text-night">
                  <h6 className="font-weight-bold mb-3">
                    {/* <MDBIcon icon="building" className="pr-2" /> */}
                    {/* {property.category.name} */}
                  </h6>
                </span>
                <h3 className="font-weight-bold mb-1 p-0">
                <>${PriceFormated(property.price)}</>
                
                  {/* <strong>{property.name}</strong> */}
                </h3>
               
                <strong>{property.factsandfeatures.beds} </strong>bd |
                <strong>{" " + property.factsandfeatures.bath}</strong>  ba |
                
               
                <br/>
                   {property.address.street.toUpperCase()}
                <br/>
                <h9>
                   {property.developer.toUpperCase()}
                </h9>
                <p>
                 
                </p>
                <p className="text-night">
                  {/* <MDBIcon icon="city" className="mr-2" /> */}
                  {/* <strong>{property.city}</strong> */}
                </p>
              </MDBCol>
              <div style={{ display: "none" }}>{index++}</div>
              {index == properties.length ? "" : <hr className="my-5" />}
            </MDBRow>
          ))}
      </MDBCardBody>
    </MDBCard>
  );
};

export default Card;
