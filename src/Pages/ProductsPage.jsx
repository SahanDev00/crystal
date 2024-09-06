import React, { useEffect } from 'react'
import Product from '../components/Store/Product'
import Questions from '../components/Store/Questions'
import Collection from '../components/Collection'
import { Helmet } from 'react-helmet'

const ProductsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Helmet>
          <title>Crystal Mats | Products</title>
        </Helmet>
        <Product/>
        <Questions/>
        <Collection/>
    </div>
  )
}

export default ProductsPage