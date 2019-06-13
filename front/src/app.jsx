import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Hello from './components/hello';

import { observer, inject, Provider as MobxProvider } from 'mobx-react';
import { ApolloProvider } from 'react-apollo';

import AppState, { apolloClient } from './state/app';

@observer
export default class App extends React.Component {
  render() {
    console.log(this.props, this.state);

    return (
      <MobxProvider {...AppState.stores()}>
        <ApolloProvider client={apolloClient}>
          <React.Fragment>
            <Hello name='Freja' />
          </React.Fragment>
        </ApolloProvider>
      </MobxProvider>
    )
  }
}
