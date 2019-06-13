import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: '<http://localhost:8000/graphql/>',
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

const Hello = ({ name, ...props }) => {
  console.log(props)
  return (
    <div>
      <Header />
      <div>
        <h1>Hello {name}</h1>
      </div>
    </div>
  )
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <Hello name='Freja' client={client} />
  </ApolloProvider>,
  document.getElementById('app')
);
