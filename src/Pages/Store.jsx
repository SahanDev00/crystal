import React from 'react'
import Categories from '../components/Store/Categories'
import Collection from '../components/Collection'
import AllProducts from '../components/Store/AllProducts'
import Questions from '../components/AboutUs/Questions'

const Store = () => {
  return (
    <div>
        <Categories/>
        <AllProducts/>
        <Questions/>
        <Collection/>
    </div>
  )
}

export default Store