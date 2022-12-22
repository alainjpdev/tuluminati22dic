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



const CardSection = () => (
    <>
  <section className="container-fluid mb-3 mt-5">
  <Link href={"/properties"}>
<MDBRow  className="row-cols-1 row-cols-md-2 g-4">
   <MDBCol md="6">
    <MDBCard  alignment='center'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <MDBCardImage src='images/hometul.png' width={200}fluid alt='...' />
        {/* <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' /> */}
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle><strong>Buy a home</strong></MDBCardTitle>
        <MDBCardText>
        Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.
        </MDBCardText>
        <MDBBtn>
        Buy Home
             
             
        
          
        
          </MDBBtn>
      </MDBCardBody>
      
    </MDBCard>
    </MDBCol>
    </MDBRow>
    </Link> 
  </section>
  <section className="container-fluid mb-3 mt-5">
  <Link href={"/rent"}>
<MDBRow >
  
   <MDBCol md="6">
  <MDBCard  alignment='center'>
    
    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
    <MDBCardImage src='images/rentul.png' width={200} fluid alt='...' />
      
      {/* <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' /> */}
      <a>
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
      </a>
    </MDBRipple>
    <MDBCardBody>
      <MDBCardTitle><strong>Rent a home</strong></MDBCardTitle>
      <MDBCardText>
      Whether you’re looking for a single-family home, high-rise apartment, or something in between, we’ll help you find it.
      </MDBCardText>
      <MDBBtn >Find Rentals</MDBBtn>
    </MDBCardBody>
  </MDBCard>
  </MDBCol>
    </MDBRow>
    </Link>
</section>
</>
);

export default CardSection;
