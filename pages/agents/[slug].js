import React, { useState } from 'react'
import { propertiesMock } from '../../src/constants.js'
import { agentsMock } from '../../src/agents'
import agents from './agents2Page.js'
import { useRouter } from 'next/router'

const Details = (agent) => {
  const router = useRouter()
  const onSubmit = (event) => {
    event.preventDefault()
    router.push('/')
  }
  return <div>{agent && <h1>{agent.agents}Details Page</h1>}</div>
}
export const getServerSideProps = (context) => {
  const { slug } = context.query
  const agent = agentsMock.agents.find((agent) => agent.id === slug)

  return {
    props: {
      agent: agent,
      //   propertiesVip: [],
      //   propertiesRelated: [],
    },
  }
}

export default Details
