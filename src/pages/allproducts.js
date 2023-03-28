import ProductsList from "../../components/sharedComponents/ProductsList";

function allproducts() {
  return (
    <>
      <ProductsList limit="-1" componentTitle={"Alle Produkte"} />
    </>
  );
}

export default allproducts;
