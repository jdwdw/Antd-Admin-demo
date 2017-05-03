import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// 导入各种组件
// import Home from '../Component/App'; // 首页组件
// import From from '../Component/From'; // 表单组件
// import Comment from '../Component/Comment'; // 评论组件
// import Like from '../Component/Like'; // 状态 Like组件
// import TodoList from '../Component/TodoList'; // TodoList组件
import NotFoundPage from '../Component/NotFoundPage'; // NotFoundPage
import HomePage from '../Component/HomePage';
import mockMenuDatas from '../MockData/mockMenu';

import '../Style/style.less'; // 加载公共样式

// 路由配置
// const RouteConfig = () => (
//   <Router>
//     <div className="app">
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/from" component={From} />
//         <Route path="/comment" component={Comment} />
//         <Route path="/like" component={Like} />
//         <Route path="/list" component={TodoList} />
//         <Route component={NotFoundPage} />
//       </Switch>
//     </div>
//   </Router>
// );

const getAllRoutes = function getAllRoutes(array) {
  const newArray = [];
  array.forEach((item) => {
    if (item.router) {
      newArray.push(item);
    }
  });
  return newArray;
};

class ComponentTest extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="comment">{match.path}</div>
    );
  }
}

const createRoutes = function createRoutes(array) {
  return array.map(item => <Route path={item.router} component={ComponentTest} />);
};

const routes = createRoutes(getAllRoutes(mockMenuDatas));

// 路由配置
const RouteConfig = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route component={HomePage} />
        {routes}
      </Switch>
    </div>
  </Router>
);

// 导出
export default RouteConfig;
