import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Header from './components/Header/Header';
import Main from './pages/Main';
import Footer from './components/Footer/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App () {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app" id="app">
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;