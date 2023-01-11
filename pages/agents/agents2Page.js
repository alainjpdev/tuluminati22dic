import { MDBContainer } from 'mdb-react-ui-kit'
import Head from 'next/head'
import React from 'react'
import Carousel from '../../components/Carousel'
import Layout from '../../components/Layout'

import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from 'mdb-react-ui-kit'
import { Rating } from 'primereact/rating'
import Link from 'next/link'
import { agentsMock } from '../../src/agents'
// import Carousel3 from '../../components/Carousel3'

const agentsArr = agentsMock.agents

const agents = () => {
  return (
    <div>
      <Head>
        <title>TuluminatiX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <MDBContainer>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            {/* <Carousel3 /> */}

            <tbody>
              {agentsArr.map((agent) => (
                <tr>
                  <th scope="row">
                    <Link href={'/agents/' + agent.id} key={agent.id}>
                      <div className="d-flex align-items-center ">
                        <>
                          <img
                            src={agent.images}
                            alt=""
                            style={{ width: '75px', height: '75px' }}
                            className="rounded-circle"
                          />

                          <div className="ms-3">
                            <p className="fw-bold mb-1 d-flex align-items-center">
                              {agent.name}
                            </p>
                            <p className="fw-bold mb-1 d-flex align-items-center"></p>
                            <p className="text-muted mb-0">{agent.mail}</p>
                          </div>
                        </>
                      </div>
                    </Link>
                  </th>

                  <td>
                    <MDBBadge color="success" pill>
                      Active
                    </MDBBadge>
                  </td>
                </tr>
              ))}
              {/* <tr>
                <th scope="row"></th>
                <td>Active</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td colspan="2">Active</td>
              </tr> */}
            </tbody>
          </table>
        </MDBContainer>
      </Layout>
    </div>
  )
}

export default agents
