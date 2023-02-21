import React, { useState } from 'react'
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from 'mdbreact'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { MDBCol } from 'mdb-react-ui-kit'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="container-fluid p-0">
      <MDBNavbar
        className="py-0 navbarcss"
        expand="md"
        style={{ color: 'white', background: 'black' }}
      >
        <MDBNavbarToggler onClick={handleToggle} />
        <MDBCol xs="1" className="text-center align-self-center p-3">
          <Link href="/">
            <Image src="/images/sp.png" width={150} height={47} alt="Logo" />
          </Link>
        </MDBCol>
        <MDBCollapse
          id="navbarCollapse"
          navbar
          isOpen={isOpen}
          style={{ color: 'black' }}
        >
          <MDBNavbarNav left></MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem active={router.pathname === '/'}>
              <Link href="/">
                <a
                  className="nav-link"
                  style={{ color: 'white', fontSize: '12px' }}
                >
                  {/* <MDBIcon icon="home" className="mr-1" /> */}
                  Home
                </a>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link href="/buy" passHref>
                <a
                  className="nav-link"
                  style={{ color: 'white', fontSize: '12px' }}
                >
                  {/* <MDBIcon icon="building" className="mr-1" /> */}
                  Buy
                </a>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link href="/rent" passHref>
                <a
                  className="nav-link"
                  style={{ color: 'white', fontSize: '12px' }}
                >
                  {/* <MDBIcon icon="building" className="mr-1" /> */}
                  Rent
                </a>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link href="/mapPdf" passHref>
                <a
                  className="nav-link"
                  style={{ color: 'white', fontSize: '12px' }}
                >
                  {/* <MDBIcon icon="building" className="mr-1" /> */}
                  Manzana33
                </a>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link href="/agents/agents2Page" passHref>
                <a
                  className="nav-link"
                  style={{ color: 'white', fontSize: '12px' }}
                >
                  {/* <MDBIcon icon="building" className="mr-1" /> */}
                  Agents
                </a>
              </Link>
            </MDBNavItem>
            <MDBNavItem active={router.pathname === '/contact'}>
              <Link href="/contact">
                <a
                  className="nav-link"
                  style={{ color: 'white', fontSize: '12px' }}
                >
                  {/* <MDBIcon icon="address-book" className="mr-1" /> */}
                  Contact
                </a>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link href="/azulik" passHref>
                <a
                  className="nav-link"
                  style={{ color: 'black', fontSize: '12px' }}
                >
                  {/* <MDBIcon icon="building" className="mr-1" /> */}
                  Azulik
                </a>
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </div>
  )
}

export default Header
