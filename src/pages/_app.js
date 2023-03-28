import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.scss";
import { ProductsProvider } from "../../context/ProductsContext";
import { CookieProvider } from "../../context/CookieContext";
import Layout from "../../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <CookieProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CookieProvider>
    </ProductsProvider>
  );
}
