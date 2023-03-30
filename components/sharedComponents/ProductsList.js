import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function ProductsList({ componentTitle, limit, products }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentProductsPerPage, setCurrentProductsPerPage] = useState([]);
  const productsPerPage = 12;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  useEffect(() => {
    setFilteredProducts(products);
    setTotalPages(Math.ceil(products?.length / productsPerPage));
  }, [products]);

  useEffect(() => {
    setCurrentProductsPerPage(filteredProducts?.slice(startIndex, endIndex));
  }, [filteredProducts, startIndex, endIndex]);

  const handlePageClick = (pageNumber) => {
    if (
      pageNumber > 0 ||
      pageNumber < filteredProducts.length / productsPerPage
    ) {
      setCurrentPage(pageNumber);
    }
  };

  function isNextPageValid(pageNumber) {
    return (
      pageNumber + 1 > 0 ||
      pageNumber + 1 < filteredProducts.length / productsPerPage
    );
  }
  function isPrevPageValid(pageNumber) {
    return (
      pageNumber - 1 > 0 ||
      pageNumber - 1 < filteredProducts.length / productsPerPage
    );
  }

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
        {currentProductsPerPage &&
          currentProductsPerPage
            .slice(0, limit || currentProductsPerPage.length)
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
      {!limit && (
        <div className="d-flex justify-content-center mt-4">
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                aria-label="Previous"
                onClick={() =>
                  currentPage > 1 && handlePageClick(currentPage - 1)
                }
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>

            {Array.from({ length: totalPages }).map((_, index) => (
              <li
                className={`page-item${
                  index + 1 === currentPage ? " active" : ""
                }`}
                key={index}
              >
                <a
                  className="page-link"
                  href="#"
                  onClick={() => handlePageClick(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            ))}

            <li className="page-item">
              <a
                className="page-link"
                href="#"
                aria-label="Next"
                onClick={() =>
                  currentPage < filteredProducts.length / productsPerPage &&
                  handlePageClick(currentPage + 1)
                }
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductsList;
