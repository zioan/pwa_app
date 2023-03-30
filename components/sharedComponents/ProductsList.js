import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function ProductsList({ componentTitle, limit, products }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  function handleSortChange(event) {
    const selectedValue = event.target.value;
    if (selectedValue === "ascending") {
      setFilteredProducts(
        [...filteredProducts].sort((a, b) => a.price - b.price)
      );
    } else if (selectedValue === "descending") {
      setFilteredProducts(
        [...filteredProducts].sort((a, b) => b.price - a.price)
      );
    }
  }

  return (
    <div className="container mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        {componentTitle && <h2>{componentTitle}</h2>}
        {!limit && (
          <select
            className="form-select"
            aria-label="Sort"
            onChange={handleSortChange}
          >
            <option value="">Sortieren Nach</option>
            <option value="ascending">Preis aufsteigend</option>
            <option value="descending">Preis absteigend</option>
          </select>
        )}
      </div>
      <div className="featuredContainer">
        {filteredProducts &&
          filteredProducts
            .slice(0, limit || filteredProducts.length)
            .map((product) => {
              return (
                <Link href={`/products/${product.id}`} key={product.id}>
                  <div className="card">
                    {product.images[0] && (
                      <Image
                        src={product.thumbnail}
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
                </Link>
              );
            })}
      </div>
    </div>
  );
}

export default ProductsList;
