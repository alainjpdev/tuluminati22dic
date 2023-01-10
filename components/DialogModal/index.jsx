import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { Sidebar } from 'primereact/sidebar'
import Image from 'next/image'
// import './DialogDemo.css';
import Property from '../../pages/property/[slug]'
import { MDBBtn } from 'mdb-react-ui-kit'

import emailjs, { send } from '@emailjs/browser'
const DialogModal = () => {
  const [displayBasic, setDisplayBasic] = useState(false)
  const [displayBasic2, setDisplayBasic2] = useState(false)
  const [displayModal, setDisplayModal] = useState(false)
  const [displayMaximizable, setDisplayMaximizable] = useState(false)
  const [displayPosition, setDisplayPosition] = useState(false)
  const [displayResponsive, setDisplayResponsive] = useState(false)
  const [position, setPosition] = useState('center')
  const [visibleFullScreen, setVisibleFullScreen] = useState(false)

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
    displayBasic2: setDisplayBasic2,
    displayModal: setDisplayModal,
    displayMaximizable: setDisplayMaximizable,
    displayPosition: setDisplayPosition,
    displayResponsive: setDisplayResponsive,
  }
  //   const form = form
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_t42ges4',
        'template_i02jnzw',
        form.current,
        'LWhLzpN2d1Yzzs4DY'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  const myFunc = () => {
    // setVisibleFullScreen(true)
    sendEmail()
  }

  const onClick = (name, position) => {
    // sendEmail
    dialogFuncMap[`${name}`](true)

    if (position) {
      setPosition(position)
    }
  }

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false)
  }

  const renderFooter = (name) => {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={() => onHide(name)}
          className="p-button-text"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    )
  }

  return (
    <div className="dialog-demo">
      <Sidebar
        visible={visibleFullScreen}
        style={{ 'background-color': 'white' }}
        fullScreen
        onHide={() => setVisibleFullScreen(false)}
      >
        <h3 className="d-flex justify-content-end">
          <Button
            onClick={() => setVisibleFullScreen(false)}
            className="d-flex justify-content-end btn-close"
          ></Button>
        </h3>

        <h3 className="d-flex justify-content-end">
          <Button
            onClick={() => setVisibleFullScreen(false)}
            className="d-flex justify-content-end btn btn-tertiary"
          >
            CLOSE
          </Button>
        </h3>
      </Sidebar>
      <MDBBtn
        onClick={setVisibleFullScreen(true)}
        className="me-2 my-1 py-3 mx-1 px-6 py-2 btn-block smBtn"
      >
        CONTACT AGENT
      </MDBBtn>
    </div>
  )
}
export default DialogModal
