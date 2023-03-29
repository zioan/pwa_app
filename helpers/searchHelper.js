export default function searchHelper(products, searchQuery) {
  if (!products) return;

  return products.filter((product) => {
    return product?.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
}
