import React from 'react'

const Image = ({className,src,alt}) => {
  return (
    <img className={className} src={src} alt={alt} />
  )
}

export default Image