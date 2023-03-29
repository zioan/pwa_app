import Image from "next/image";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

function ProductsHighlight({ products, showFavourite }) {
  if (!products) return;

  function addToFavoriteHandler() {
    console.log("added to F.");
  }

  return products.length ? (
    <ul className="list-group position-absolute top-100 w-100 productsHighlight">
      <div className="border p-2 bg-white">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link href={`/products/${product.id}`}>
                <li key={product.id} className="list-group-item d-flex gap-2">
                  <Image
                    src={product.thumbnail}
                    width={50}
                    height={50}
                    alt={product.title}
                  />
                  <div>
                    <h5>{product.title}</h5>
                    <p>{product.description.substring(0, 20)}...</p>
                  </div>
                  {showFavourite && (
                    <AiFillHeart size={40} onClick={addToFavoriteHandler} />
                  )}
                </li>
              </Link>
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
