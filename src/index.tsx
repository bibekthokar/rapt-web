import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  ApolloProvider,
  gql,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

import data from './api/data.json';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from './theme/ThemeProvider';

const httpLink = createHttpLink({
  uri: 'https://www.test.com',
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
  // cache: new InMemoryCache({
  //   typePolicies: {
  //     Tower: {
  //       fields: {
  //         measurement: {
  //           read() {
  //             return data;
  //           },
  //         },
  //       },
  //     },
  //   },
  // }),
});

export const TOWERQUERY = gql`
  query {
    measurement @client
    measurement_point @client
  }
`;

cache.writeQuery({
  query: TOWERQUERY,
  data: {
    measurement: data,
    measurement_point: data.measurement_location[0].measurement_point,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
