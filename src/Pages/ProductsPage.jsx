import React, { useEffect } from 'react'
import Product from '../components/Store/Product'
import Questions from '../components/Store/Questions'
import Collection from '../components/Collection'
import { Helmet } from 'react-helmet'
import RelatedProducts from '../components/Store/RelatedProducts'

const ProductsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Helmet>
          <title>K-Mats | Products</title>
        </Helmet>
        <Product/>
        <Questions/>
        <RelatedProducts/>
        <Collection/>
    </div>
  )
}

export default ProductsPage