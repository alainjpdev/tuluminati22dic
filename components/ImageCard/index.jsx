import React from 'react'

const ImageCard = (property) => {
  return (
    <div>
      <img
        style={{
          width: '100%',
          height: '25vh',
          padding: '0px',
        }}
        src={property.images[0]}
        alt={property.name}
      />
      {/* {console.log(property.images[0])} */}
    </div>
  )
}

export default ImageCard
