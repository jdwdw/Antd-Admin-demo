import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import mockMenuDatas from '../MockData/mockMenu';


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


class ContentInside extends Component {
  render() {
    return (
      <div className="contentInside">
        <Switch>
          {routes}
        </Switch>
      </div>
    );
  }
}

export default ContentInside;
