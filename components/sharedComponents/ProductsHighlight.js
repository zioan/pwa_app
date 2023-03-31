import Image from "next/image";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

function ProductsHighlight({ products, showFavourite, removeFromWishlist }) {
  if (!products) return;

  return products.length ? (
    <ul
      className={
        showFavourite
          ? "list-group productsHighlight"
          : "list-group productsHighlight productsListSuggestion"
      }
    >
      <div className="p-2">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <li key={product.id}>
                <div>
                  <Link href={`/products/${product.id}`}>
                    <Image
                      src={product.thumbnail}
                      width={50}
                      height={50}
                      alt={product.title}
                    />
                  </Link>
                </div>
                <div className="productDescriptionHighlight">
                  <Link href={`/products/${product.id}`}>
                    <h5>{product.title}</h5>
                  </Link>
                  <p>{product.description.substring(0, 20)}...</p>
                </div>
                <div className="priceGroup">
                  <h4>{product.price} &#8364;</h4>
                  {showFavourite && (
                    <button
                      onClick={() =>
                        showFavourite && removeFromWishlist(product.id)
                      }
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Remove from Wishlist"
                    >
                      <AiFillHeart size={40} />
                    </button>
                  )}
                </div>
              </li>
            </div>
          );
        })}
        {showFavourite && (
          <Link className="btn btn-primary mt-2" href="/products">
            Alle Anzeigen
          </Link>
        )}
      </div>
    </ul>
  ) : null;
}

export default ProductsHighlight;
