import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import SaladBuilder from './containers/SaladBuilder/SaladBuilder';

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <SaladBuilder />
        </Layout>
      </>
    );
  };
}

export default App;
