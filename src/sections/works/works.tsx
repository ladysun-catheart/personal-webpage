import React from 'react'
import Box from '../../components/box'
import { Gallery } from '../../components'
import { GalleryElement } from '../../components/gallery/gallery'

const galleryInfo: GalleryElement[] = [
  {title: 'Work 01',  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum quae illum quam? Dolore quo quod blanditiis iste reprehenderit, aliquam quas in expedita fugiat cumque illum alias fugit reiciendis. Officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum quae illum quam? Dolore quo quod blanditiis iste reprehenderit, aliquam quas in expedita fugiat cumque illum alias fugit reiciendis. Officiis?'},
  {title: 'Work 02',  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum quae illum quam? Dolore quo quod blanditiis iste reprehenderit, aliquam quas in expedita fugiat cumque illum alias fugit reiciendis. Officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum quae illum quam? Dolore quo quod blanditiis iste reprehenderit, aliquam quas in expedita fugiat cumque illum alias fugit reiciendis. Officiis?'},
  {title: 'Work 03',  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum quae illum quam? Dolore quo quod blanditiis iste reprehenderit, aliquam quas in expedita fugiat cumque illum alias fugit reiciendis. Officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum quae illum quam? Dolore quo quod blanditiis iste reprehenderit, aliquam quas in expedita fugiat cumque illum alias fugit reiciendis. Officiis?'}
]

const Works = () => {
    return (
        <Box title="Works">
          <Gallery list={galleryInfo} />
        </Box>
    )
}

export default Works
