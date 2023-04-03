import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import ProductsContext from "../../../context/ProductsContext";
import { AiFillHeart } from "react-icons/ai";
import { addToWishlist } from "../../../helpers/wishlistHelper";

function Product() {
  const router = useRouter();
  const { productId } = router.query;
  const { products } = useContext(ProductsContext);

  const [currentImage, setCurrentImage] = useState("");

  const product = products?.find(
    (product) => product.id === parseInt(productId)
  );

  useEffect(() => {
    setCurrentImage(product?.thumbnail);
  }, [product?.thumbnail]);

  if (!product) {
    return <div>No product found</div>;
  }

  function addProductToWishlist() {
    addToWishlist(product);
  }

  return (
    <div className="productPage">
      <div className="imageGroup">
        <Image
          src={currentImage || product.thumbnail}
          alt={product.title}
          width={450}
          height={450}
        />
        <div className="productGallery">
          {product.images.map((image) => {
            return (
              <Image
                key={image}
                src={image}
                alt={product.title}
                width={80}
                height={80}
                onClick={() => setCurrentImage(image)}
              />
            );
          })}
        </div>
      </div>
      <div className="productContent">
        <div className="productHeaderGroup">
          <h4 className="productTitle">{product.title}</h4>
          <button
            onClick={addProductToWishlist}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Add to Wishlist"
          >
            <AiFillHeart size={40} />
          </button>
        </div>
        <h4 className="productPrice">{product.price} &#8364;</h4>
        <p className="productDescription">{product.description}</p>
        <button className="btn btn-primary">In der Warenkorb</button>
      </div>
    </div>
  );
}

export default Product;
