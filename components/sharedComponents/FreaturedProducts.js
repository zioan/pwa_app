import Image from 'next/image'
import React, { Suspense, useContext, useEffect, useState } from 'react'
import ProductsContext from '../../context/ProductsContext'

function FreaturedProducts({ componentTitle }) {
  const { products } = useContext(ProductsContext)

  return (
    <Suspense fallback="Loading...">
      <div className="container ">
        {componentTitle && <h2>{componentTitle}</h2>}
        <div className="featuredContainer">
          {products &&
            products.products.map((product) => {
              return (
                <div className="card" key={product.id}>
                  {product.images[0] && (
                    <Image
                      src={product.images[0]}
                      className="card-img-top"
                      alt={product.title}
                      width={50}
                      height={50}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                      {product.description.substring(0, 20)}...
                    </p>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </Suspense>
  )
}

export default FreaturedProducts
