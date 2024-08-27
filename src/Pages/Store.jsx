import React from 'react'
import Categories from '../components/Store/Categories'
import Collection from '../components/Collection'
import AllProducts from '../components/Store/AllProducts'

const Store = () => {
  return (
    <div>
        <Categories/>
        <AllProducts/>
        <Collection/>
    </div>
  )
}

export default Store