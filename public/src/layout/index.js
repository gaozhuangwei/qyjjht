import React, { Component } from 'react'
import { Layout, Menu, Dropdown, Icon } from 'antd';
import { layoutRouteComponent } from '@router'
import SliderEach from '@utils/sliderEach'
import { withRouter } from 'react-router-dom';
import store from '@store'
import {LogoutAction} from '@actions/actionCreator'
import './style.css'

const SliderTabBar = SliderEach(layoutRouteComponent)
const { Header, Content, Footer, Sider } = Layout;


class LayoutCom extends Component {
  constructor(){
    super()
    this.state=store.getState();
    store.subscribe(this.handleUserLogout.bind(this))
  }
  handleUserLogout(){
    this.setState(store.getState());
  }
  componentDidUpdate(oldProps,oldState){
    if(oldState.user.token !== this.state.user.token){
      this.props.history.push("/login")
    }
  }
  handleLogout(){
    sessionStorage.removeItem("token");
    store.dispatch(LogoutAction())
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="##">
            个人资料
      </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="##">
            修改密码
      </a>
        </Menu.Item>
        <Menu.Item>
          <span onClick={this.handleLogout.bind(this)}>
            退出登录
      </span>
        </Menu.Item>
      </Menu>
    );
    return (
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className="logo">
            <img src="logo.png" alt="全友家居LOGO" />
          </div>
          <Menu
            style={{ width: '100%' }}
            theme="dark"
            mode="inline"
            onClick={this.handleTo.bind(this)}>
            {
              SliderTabBar
            }
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Dropdown overlay={menu}>
              <button className="ant-dropdown-link" href="#">
                用户操作 <Icon type="down" />
              </button>
            </Dropdown>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>全友家居 ©2010 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
  handleTo(key) {
    this.props.history.push(key.key);
  }
}

export default withRouter(LayoutCom)