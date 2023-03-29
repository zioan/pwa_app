import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.scss";
import { ProductsProvider } from "../../context/ProductsContext";
import { CookieProvider } from "../../context/CookieContext";
import Layout from "../../components/Layout";
import { api } from "../../helpers/helpers";

function App({ Component, pageProps, products }) {
  return (
    <ProductsProvider products={products}>
      <CookieProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CookieProvider>
    </ProductsProvider>
  );
}

App.getInitialProps = async function () {
  try {
    const response = await fetch(`${api}/products`);
    const data = await response.json();
    return { products: data.products };
  } catch (error) {
    console.error(error);
    return { products: null };
  }
};

export default App;
