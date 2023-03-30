import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const NoSSRProductsHighlight = dynamic(
  () => import("../../components/sharedComponents/ProductsHighlight"),
  { ssr: false }
);

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    getWishlist();
  }, []);

  function getWishlist() {
    if (typeof window !== "undefined") {
      setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
    }
  }

  function isProductAlreadyInWishlist(listToCheck, newProduct) {
    return listToCheck.some((product) => product.id === newProduct.id);
  }

  function addToWishlist(newProduct) {
    if (typeof window !== "undefined") {
      if (isProductAlreadyInWishlist(wishlist, newProduct)) {
        return;
      }

      wishlist.unshift(newProduct);
      setWishlist(newProduct, wishlist);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }

  function removeFromWishlist(id) {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  }

  return (
    <NoSSRProductsHighlight
      products={wishlist}
      showFavourite={true}
      removeFromWishlist={removeFromWishlist}
    />
  );
}

export default dynamic(() => Promise.resolve(Wishlist), { ssr: false });
