/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {store} from './src/store/index';
import {Provider} from 'react-redux';
import { Main } from './src/Main/Main';

const App = () => {

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
