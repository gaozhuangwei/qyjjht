import React, { Component } from 'react'
import { Layout, Menu} from 'antd';
import {layoutRouteComponent} from '@router'
import SliderEach from '@utils/sliderEach'
import {withRouter} from 'react-router-dom';
import './style.css'

const SliderTabBar = SliderEach(layoutRouteComponent)
const { Header, Content, Footer, Sider } = Layout;

class LayoutCom extends Component {
    render() {
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
        style={{width:'100%'}}
        theme="dark"
        mode="inline"  
        onClick={this.handleTo.bind(this)}>
        {
          SliderTabBar
        }
      </Menu>
    </Sider>
    <Layout style={{ marginLeft: 200 }}>
      <Header style={{ background: '#fff', padding: 0 }} />
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
    handleTo(key){
      this.props.history.push(key.key);
    }
}

export default withRouter(LayoutCom)