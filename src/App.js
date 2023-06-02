import React from 'react';
import { Provider } from 'react-redux';
import { store } from './lib/env';
import Layout from './components/Layout';
import './index.scss';

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
