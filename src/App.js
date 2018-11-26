import React, { Component, Fragment } from 'react';

import List from './components/List';

import { Provider } from 'react-redux';
import store from './store';



class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Fragment>
          < List />
        </Fragment>
      </Provider>
    );
  }
}

export default App;