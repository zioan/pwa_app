import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.scss";
import { ProductsProvider } from "../../context/ProductsContext";
import Layout from "../../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductsProvider>
  );
}
