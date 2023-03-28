import React, { createContext, useState } from "react";

const ProductsContext = createContext();

function ProductsProvider(props) {
  const [products, setProducts] = useState(null);

  function setProductsList(productsData) {
    setProducts(productsData);
  }

  return (
    <ProductsContext.Provider value={{ products, setProductsList }}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsContext;
export { ProductsProvider };
