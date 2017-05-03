import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import { AppContainer } from 'react-hot-loader';
// AppContainer 是一个 HMR 必须的包裹(wrapper)组件

import App from './Config/Route'; // 路由配置
import store from './Config/Store'; // 引入Store

// import SiderMenu from './Component/Menu/SiderMenu';

// 订阅state改变
store.subscribe(() => {
    // console.log(store.getState());
});

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>, document.getElementById('root'));
};


render(App);

// 模块热替换的 API
if (module.hot) {
  module.hot.accept('./Config/Route', () => {
    render(App);
  });
}
// render(SiderMenu);
//
// // 模块热替换的 API
// if (module.hot) {
//   module.hot.accept('./Component/Menu/SiderMenu', () => {
//     render(SiderMenu);
//   });
// }
