import React from 'react'
import Categories from '../components/Store/Categories'
import Product from '../components/Store/Product'
import Questions from '../components/Store/Questions'
import Collection from '../components/Collection'

const ProductsPage = () => {
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