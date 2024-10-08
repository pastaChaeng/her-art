
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Home from './index'
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
     <Home/>
    </Layout>
  );
}

export default MyApp;
