import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductsContext from "../../../../context/ProductsContext";
import searchHelper from "../../../../helpers/searchHelper";
import ProductsList from "../../../../components/sharedComponents/ProductsList";

function SearchResults() {
  const router = useRouter();
  const { searchQuery } = router.query;
  const { products } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(searchHelper(products, searchQuery));
  }, [searchQuery, products]);

  return (
    <div>
      {filteredProducts && (
        <ProductsList
          componentTitle={`Ihre Suche nach "${searchQuery}" ergab ${filteredProducts.length} Treffer`}
          products={filteredProducts}
        />
      )}
    </div>
  );
}

export default SearchResults;
