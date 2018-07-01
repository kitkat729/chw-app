import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './configureStore'

import './App.css';

const App = (props) => {

    const store = configureStore();

    return (
      <div className="App">
        <Provider store={store}>

        </Provider>
      </div>
    )
}

export default App;

