import { useContext } from "react";
import ProductsList from "../../../components/sharedComponents/ProductsList";
import ProductsContext from "../../../context/ProductsContext";

function AllProducts() {
  const { products } = useContext(ProductsContext);
  return <ProductsList componentTitle={"Alle Produkte"} products={products} />;
}

export default AllProducts;
