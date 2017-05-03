import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Icon } from 'antd';
import SiderMenu from './Menu/SiderMenu';
import { HomePageToggleAction } from '../Action/Index';
import ContentInside from './ContentInside';

const { Header, Sider, Content } = Layout;


class HomePage extends Component {
  render() {
    console.log('refresh');
    const { changeCollapsed } = this.props;
    console.log(this.props);
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.props.HomePage.collapsed}>
          <SiderMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.props.HomePage.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={changeCollapsed}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <ContentInside />
          </Content>
        </Layout>
      </Layout>
    );
  }
}


export default connect(state => ({ HomePage: state.HomePage }), HomePageToggleAction)(HomePage);
