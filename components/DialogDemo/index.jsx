
import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import Image from 'next/image';
// import './DialogDemo.css';

 const DialogDemo = () => {
    const [displayBasic, setDisplayBasic] = useState(false);
    const [displayBasic2, setDisplayBasic2] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);
    const [displayMaximizable, setDisplayMaximizable] = useState(false);
    const [displayPosition, setDisplayPosition] = useState(false);
    const [displayResponsive, setDisplayResponsive] = useState(false);
    const [position, setPosition] = useState('center');
    const [visibleFullScreen, setVisibleFullScreen] = useState(false);

    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,
        'displayBasic2': setDisplayBasic2,
        'displayModal': setDisplayModal,
        'displayMaximizable': setDisplayMaximizable,
        'displayPosition': setDisplayPosition,
        'displayResponsive': setDisplayResponsive
    }

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }

    return (
        <div className="dialog-demo">
           
              <Sidebar visible={visibleFullScreen} style={{ "background-color": "white"}} fullScreen onHide={() => setVisibleFullScreen(false)}>
                    <h3 className='d-flex justify-content-end'>
                    <Button  onClick={() => setVisibleFullScreen(false)} className="d-flex justify-content-end btn-close"></Button></h3>
                <iframe width="100%" height="600" src="https://my.matterport.com/show/?m=6zK8NNfBFRF" frameborder="0" allowfullscreen allow="xr-spatial-tracking">                </iframe>
                <h3 className='d-flex justify-content-end'>
                   <Button  onClick={() => setVisibleFullScreen(false)} className="d-flex justify-content-end btn btn-tertiary">CLOSE</Button>
</h3>
                </Sidebar>
                <Button onClick={() => setVisibleFullScreen(true)} className="btn btn-primary d-flex justify-content-end">
                <Image
                      src="/images/360logowhitebg.png"
                      alt="Picture of the author"
      width={120}
      height={30}
    /> 
               </Button>

            </div>
      
    )
}
export default DialogDemo;