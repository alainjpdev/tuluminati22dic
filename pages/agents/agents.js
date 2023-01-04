import { MDBContainer } from 'mdb-react-ui-kit';
import Head from 'next/head';
import React from 'react'
import Carousel from '../../components/Carousel';
import Layout from '../../components/Layout';

import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Rating } from 'primereact/rating';
import Link from 'next/link';

const agents = () => {



  return (
    <div>
      <Head>
        <title>TuluminatiX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      
  
        <MDBContainer>
        <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Client Review</th>
          <th scope='col'>Status</th>
          

        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td className="cursorpointer">
          <Link href={"/agents/diana"}  >
            <div className='d-flex align-items-center '>
              <img
                src='https://res.cloudinary.com/dk473trop/image/upload/v1672770418/agentes/diana_d4fi05.webp'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1 d-flex align-items-center'>Diana Moncada</p>
                <p className='text-muted mb-0'>diana@gmail.com</p>
              </div>
            </div>
            </Link>
          </td>
         
          <td>
            <p className='fw-normal mb-1'>               
                </p>
            <p className='text-muted mb-0'>No reviews yet</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
          
          <td>
            <MDBBtn color='link' rounded size='sm'>
             
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td className="cursorpointer">
            <div className='d-flex align-items-center'>
              <img
                src='https://res.cloudinary.com/dk473trop/image/upload/v1672770418/agentes/karina_egv07i.webp'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Karina Buentello</p>
                <p className='text-muted mb-0'>karina@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
           
            <p className='text-muted mb-0'>No reviews yet</p>
          </td>
          <td>
          <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
          
         
       
        </tr>
        
      </MDBTableBody>
    </MDBTable>

          
        </MDBContainer>
  
      </Layout>
    </div>
  );

}



export default agents;