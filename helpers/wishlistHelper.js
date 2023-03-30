let wishlist = getWishlist();

export function getWishlist() {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  }
}

function isProductAlreadyInWishlist(listToCheck, newProduct) {
  return listToCheck.some((product) => product.id === newProduct.id);
}

export function addToWishlist(newProduct) {
  if (typeof window !== "undefined") {
    if (isProductAlreadyInWishlist(wishlist, newProduct)) {
      return;
    }

    wishlist.unshift(newProduct);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
}
