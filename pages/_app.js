import '/styles/globals.css'
import Layout from './layout/Head.js'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout></Layout>
      <Component {...pageProps} />
    </>
    )
}
