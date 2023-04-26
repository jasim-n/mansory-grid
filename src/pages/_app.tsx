import "@/styles/globals.css";
import LayoutPage from "../../Components/LayoutPage";
import "@/styles/MainPage.scss";
import "@/styles/Product.scss";
import "@/styles/Databox.scss";
import "@/styles/Header.scss";

import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://profound-marmot-29.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </ApolloProvider>
  );
}
