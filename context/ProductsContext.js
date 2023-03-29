import React, { createContext, useEffect, useState } from "react";

const ProductsContext = createContext();

function ProductsProvider(props) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(props.products);
  }, [props.products]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {props.children}
    </ProductsContext.Provider>
  );
}

export default ProductsContext;
export { ProductsProvider };
