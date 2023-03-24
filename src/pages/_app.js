import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.scss'
import { ProductsProvider } from '../../context/ProductsContext'

export default function App({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <Component {...pageProps} />
    </ProductsProvider>
  )
}
