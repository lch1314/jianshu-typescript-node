import React from 'react';
import { GlobalStyle } from './gloabl-style';
import { GlobalIconStyle } from './statics/iconfont/iconfont';
import Header from './common/header/index';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <GlobalIconStyle />
      <Header />
    </Provider>
  );
}

export default App;
