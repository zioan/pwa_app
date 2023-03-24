import React, { createContext, useEffect, useState } from 'react'
import { api } from '../helpers/helpers'

const ProductsContext = createContext()

function ProductsProvider(props) {
  const [products, setProducts] = useState(null)

  async function getProducts() {
    try {
      const response = await fetch(`${api}/products`)
      const data = await response.json()
      console.log(data)
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <ProductsContext.Provider value={{ products, getProducts }}>
      {props.children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext
export { ProductsProvider }
