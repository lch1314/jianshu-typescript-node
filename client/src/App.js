import React from 'react';
import { GlobalStyle } from './gloabl-style';
import { GlobalIconStyle } from './statics/iconfont/iconfont';
import Header from './common/header/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';


function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <GlobalIconStyle />
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail" exact component={Detail}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
