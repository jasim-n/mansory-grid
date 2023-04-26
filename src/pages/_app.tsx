import "@/styles/globals.css";
import LayoutPage from "../Components/Layout/LayoutPage";
import "@/styles/MainPage.scss";
import "@/styles/Product.scss";
import "@/styles/Databox.scss";
import "@/styles/Header.scss";

import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/utils/ApolloConfig";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </ApolloProvider>
  );
}
