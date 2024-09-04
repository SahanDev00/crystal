import React, { useEffect } from 'react'
import Categories from '../components/Store/Categories'
import Product from '../components/Store/Product'
import Questions from '../components/Store/Questions'
import Collection from '../components/Collection'

const ProductsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Categories/>
        <Product/>
        <Questions/>
        <Collection/>
    </div>
  )
}

export default ProductsPage