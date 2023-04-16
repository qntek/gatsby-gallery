import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Thumbnail = ({image, picName, artistName}) => {
  console.log(image);
  return (
    <div className='relative'>
      <GatsbyImage image={getImage(image)} alt={picName} />
      <p>{picName}</p>
      <p>{artistName}</p>
    </div>
  )
}

export default Thumbnail