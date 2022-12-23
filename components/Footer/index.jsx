import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';
import Image from "next/image";

const Footer = () => {
  return (
    <MDBFooter className="pt-3 text-dark bg-light">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6" className="text-center align-self-center">
          <Image src="/images/logoX.png" width={150} height={45} alt="Logo" />
            <br/>
            <br/>


            <p>Find the property of your dreams...</p>
          </MDBCol>
          <MDBCol md="6" className="text-center">
            <h8 className="title">Mr. Jean Paul</h8>
            <ul className="px-0">
              <li className="d-inline m-2">
                <a
                  className="text-dark"
                  // href="https://github.com/"
                  href="https://www.linkedin.com/in/alain-raimond-kedilhac-ruiz-54711920a/"

                  target="_blank"
                >
                  
     
                  <MDBIcon
                    fab
                    icon="linkedin"
                    className="mt-2"
                    style={{ fontSize: "1em" }}
                  />
                </a>
              </li>
              <li className="d-inline m-1">
                <a
                  className="text-white"
                  href="https://www.linkedin.com/in/alain-raimond-kedilhac-ruiz-54711920a/"
                  target="_blank"
                >
                  <MDBIcon
                    fab
                    icon="linkedin"
                    className="mt-2"
                    style={{ fontSize: "1em" }}
                  />
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-5">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Develop{" "}
          {/* <span className="text-danger">&#10084;&#65039;</span> par{" "}
          <a href="" className="text-white"> </a> */}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
