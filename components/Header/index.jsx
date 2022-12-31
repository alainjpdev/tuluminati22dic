import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from "mdbreact";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { MDBCol } from "mdb-react-ui-kit";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MDBNavbar className="py-0 navbarcss" expand="md">
      <MDBNavbarToggler onClick={handleToggle} />
      <MDBCol xs="1" className="text-center align-self-center">
      <Link href="/">
        <Image src="/images/logoX.png" width={150} height={45} alt="Logo" />
      </Link>
      </MDBCol>
      <MDBCollapse id="navbarCollapse" navbar isOpen={isOpen}>
        <MDBNavbarNav left></MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem active={router.pathname === "/"}>
            <Link href="/">
              <a className="nav-link">
                {/* <MDBIcon icon="home" className="mr-1" /> */}
                Home
              </a>
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link href="/properties" passHref>
              <a className="nav-link">
                {/* <MDBIcon icon="building" className="mr-1" /> */}
                Buy
              </a>
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link href="/rent" passHref>
              <a className="nav-link">
                {/* <MDBIcon icon="building" className="mr-1" /> */}
                Rent
              </a>
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link href="/mapPdf" passHref>
              <a className="nav-link">
                {/* <MDBIcon icon="building" className="mr-1" /> */}
                Manzana33
              </a>
            </Link>
          </MDBNavItem>
          <MDBNavItem active={router.pathname === "/contact"}>
            <Link href="/contact">
              <a className="nav-link">
                {/* <MDBIcon icon="address-book" className="mr-1" /> */}
                Contact
              </a>
            </Link>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Header;
