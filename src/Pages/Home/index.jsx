import React from 'react'
import Banner from '../../Components/Banner'
import About from '../../Components/About'
import { ProductsPreview } from '../../Components/ProductsPreview'
const Home = () => {
  return (
    <>
      <Banner />
      <ProductsPreview/>
      <About />
    </>
  )
}

export default Home
