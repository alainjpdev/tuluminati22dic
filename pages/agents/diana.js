import { MDBBtn, MDBBtnGroup, MDBContainer } from 'mdb-react-ui-kit';
import Head from 'next/head';
import React from 'react'



import Layout from '../../components/Layout';

const diana = () => {

  return (
    <div>
      <Head>
        <title>TuluminatiX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* <Carousel /> */}
     
        <div className='container pt-4'>
            <div className='row'>
                <div className='col'>
                    <h6>Quintana Roo - Riviera Maya - Tulum</h6>
                </div>
                </div> 

            <div className='row'>
                <div className="col">
                  {/* <div className="d-none"> */}
                    <img
                        src='https://res.cloudinary.com/dk473trop/image/upload/v1672770418/agentes/diana_d4fi05.webp'
                        alt=''
                        style={{ width: '150px', height: '150px' }}
                        className='rounded-circle'
                    />
                    {/* </div> */}
                     </div>
                <div className='col'>
                    <h4><strong>Diana Moncada</strong></h4>
                    <h6>Agencia Test</h6>
                </div>
           
            </div>
            <div className='row'>
                <div className="col-md">
                    <div className="d-grid gap-2">
                    <button  className="btn btn-primary px-4">
                        Contact us
                    </button>
                    </div>

                </div>
            </div>
                 

                    
         </div>

          
       
  
      </Layout>
    </div>
  );

}

export default diana