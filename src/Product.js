import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const params = useParams();
  return (
    <div>
      This is a Brand new {params.smartPhone}
    </div>
  )
}

export default Product
