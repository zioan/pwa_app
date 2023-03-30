import Image from "next/image";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

function ProductsHighlight({ products, showFavourite, removeFromWishlist }) {
  if (!products) return;

  return products.length ? (
    <ul className="list-group productsHighlight">
      <div className="border p-2 bg-white">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <li key={product.id} className="list-group-item d-flex gap-2">
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={product.thumbnail}
                    width={50}
                    height={50}
                    alt={product.title}
                  />
                </Link>
                <div>
                  <Link href={`/products/${product.id}`}>
                    <h5>{product.title}</h5>
                  </Link>
                  <p>{product.description.substring(0, 20)}...</p>
                </div>
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
