// Package / Dependency Imports
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/react-hooks";
import { useState } from "react";
import type { AppProps } from "next/app";
import WordPressProvider from "@utils/WordPressProvider";
// Local Imports
import { client } from "src/utils/apolloClient";
import globalStyles from "@theme/globalStyles";
import store from "../app/store";

interface AppPageProps extends AppProps {
  pageProps: any;
}

function MyApp({ Component, pageProps }: AppPageProps) {
  globalStyles();

  const { post, siteOptions } = pageProps;

  const [wp] = useState({
    siteOptions,
  });

  const componentProps = {
    post: {
      ...post,
      siteOptions,
    },
  };

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <WordPressProvider value={wp}>
          <Component {...componentProps} />
        </WordPressProvider>
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
