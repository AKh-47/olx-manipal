import React, { ReactElement } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
  concat,
} from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTZjZTEzZjY4MjI1MzM1MWNjMjI0NyIsIm5hbWUiOiJBa2hpbCIsImVtYWlsIjoia2FsYWFra2lAZ21haWwuY29tIiwiaWF0IjoxNjE2MzAxNTg5fQ.VzlsvDXHL3yz0nCAJJxoRMW22kDeDMC3B0T6NCgmxc0";

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: token,
    },
  });

  return forward(operation);
});

const httpLink = new HttpLink({ uri: `http://localhost:8000/graphql` });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export default ({ children }: { children: ReactElement }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
