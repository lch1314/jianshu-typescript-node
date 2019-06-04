import React from 'react';
import { GlobalStyle } from './gloabl-style';
import { GlobalIconStyle } from './statics/iconfont/iconfont';
import Header from './common/header/index';

function App() {
  return (
    <div>
      <GlobalStyle />
      <GlobalIconStyle />
      <Header />
    </div>
  );
}

export default App;
