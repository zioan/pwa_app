import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductsContext from "../context/ProductsContext";
import ProductsHighlight from "./sharedComponents/ProductsHighlight";
import searchHelper from "../helpers/searchHelper";

function Search() {
  const { products } = useContext(ProductsContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const router = useRouter();

  //reset searchQuery if path change
  useEffect(() => {
    const handleRouteChange = () => setSearchQuery("");
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  //filter sugested products based on queryString
  useEffect(() => {
    if (products && searchQuery.length) {
      setSuggestedProducts(searchHelper(products, searchQuery));
    } else {
      setSuggestedProducts([]);
    }
  }, [products, searchQuery]);

  function searchHandler(evt) {
    if (evt.key === "Enter") {
      setSuggestedProducts([]);
      if (searchQuery.length) {
        router.push(`/products/search/${searchQuery}`);
      } else {
        router.push("/products");
      }
    }
  }

  return (
    <div className="searchInputGroup">
      <input
        type="text"
        placeholder="Suchen"
        aria-label="Suchen"
        value={searchQuery}
        onChange={(evt) => setSearchQuery(evt.target.value)}
        onKeyDown={searchHandler}
      />
      {router.pathname !== "/products/search/[searchQuery]" &&
        suggestedProducts.length > 0 && (
          <div className="suggestedProducts">
            <ProductsHighlight
              products={suggestedProducts}
              showFavourite={false}
            />
          </div>
        )}
    </div>
  );
}

export default Search;
