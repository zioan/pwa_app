import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import ProductsContext from "../../../context/ProductsContext";
import { AiFillHeart } from "react-icons/ai";

function Product() {
  const router = useRouter();
  const { productId } = router.query;
  const { products } = useContext(ProductsContext);

  if (!products) return;

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return <div>No product found</div>;
  }

  function addProductToWishlist() {
    localStorage.setItem("wishlist", JSON.stringify(product));
  }

  return (
    <div>
      <div className="d-flex ">
        <Image
          src={product.images[0]}
          className=""
          alt={product.title}
          width={350}
          height={350}
        />
        <div>
          <h1>{product.title}</h1>
          <h2>$ {product.price}</h2>
          <button className="btn btn-primary">In der Warenkorb</button>
          <AiFillHeart onClick={addProductToWishlist} size={40} className="" />
        </div>
      </div>
      <div>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default Product;
