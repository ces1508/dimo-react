import React from 'react';
import { client } from './graphql/'
import { ApolloProvider } from '@apollo/react-hooks'
import { HomePage } from './pages'
import './app.scss'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <HomePage />
      </div>
    </ApolloProvider>
  );
}

export default App;
