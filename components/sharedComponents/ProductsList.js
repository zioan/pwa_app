import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

function ProductsList({ componentTitle, limit, products }) {
  return (
    <div className="container mb-5">
      {componentTitle && <h2>{componentTitle}</h2>}
      <div className="featuredContainer">
        {products &&
          products.slice(0, limit || products.length).map((product) => {
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
