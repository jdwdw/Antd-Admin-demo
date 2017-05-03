import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import lodash from 'lodash';
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { SelectMenuAction } from '../../Action/Index';
import mockMenuDatas from '../../MockData/mockMenu';


class SiderMenu extends Component {
  render() {
    const { selectSiderMenu } = this.props;

    // array 类型转换为 tree 类型
    const arrayToTree = function arrayToTree(array, id = 'id', pid = 'pid', children = 'children') {
      const datas = lodash.cloneDeep(array);
      const result = [];
      const hash = {};
      datas.forEach((item) => {
        hash[item[id]] = item;
      });
      datas.forEach((item) => {
        const hashValue = hash[item[pid]];
        if (hashValue) {
          if (!hashValue[children]) {
            hashValue[children] = [];
          }
          hashValue[children].push(item);
        } else {
          result.push(item);
        }
      });
      return result;
    };

    const menuTreeDatas = arrayToTree(mockMenuDatas, 'id', 'mpid');
    const getMeunItems = function getMeunItems(menuTree) {
      return menuTree.map((item) => {
        if (item.children) {
          // console.log('hasChildern', item.id);
          // console.log(getMeunItems);
          return (
            <Menu.SubMenu
              key={item.id}
              title={<span>{item.icon && <Icon type={item.icon} />}
                {item.name}</span>}
            >
              {getMeunItems(item.children)}
            </Menu.SubMenu>
          );
        }
        return (
          <Menu.Item key={item.id}>
            <Link to={item.router}>
              {item.icon && <Icon type={item.icon} />}
              {item.name}
            </Link>
          </Menu.Item>
        );
      });
    };
    const menuItems = [getMeunItems(menuTreeDatas)];


    return (
      <div className="SilderMenu">
        <Menu
          onClick={selectSiderMenu}
          defaultSelectedKeys={['1']}
          mode="inline"
        >
          {menuItems}
        </Menu>
      </div>
    );
  }
}
export default connect(state => ({ SiderMenu: state.SiderMenu }), SelectMenuAction)(SiderMenu);
