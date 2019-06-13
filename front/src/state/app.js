import { create } from 'mobx-persist';
import localforage from 'localforage';
import { createHttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import UIState from './ui';

const httpLink = createHttpLink({
  uri: '<http://localhost:8000/graphql/>',
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

class RootState {
  constructor() {
    this.apolloClient = apolloClient;

    this.UI = new UIState(this);
  }

  stores() {
    return {
      UI: this.UI
    };
  }
}

const RootInst = new RootState();

const hydrate = create({ storage: localforage, jsonfiy: true });

window.__APP_STATE__ = RootInst;

export default RootInst;
