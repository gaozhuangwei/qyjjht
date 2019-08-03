import React, { Component } from 'react'
import { Form, Icon, Input, Button} from 'antd';
import {LoginAsyncAction} from '@actions/actionCreator'
import store from '@store'
import "./style.css"

class Login extends Component {
    constructor(){
        super()
        this.state=store.getState();
        store.subscribe(this.handleUpdate.bind(this))
    }
    handleUpdate(){
        this.setState(store.getState());
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                store.dispatch(LoginAsyncAction(values));  
            }
        });
    }
    componentDidUpdate(oldProps,oldState){
        if(oldState.user.token !== this.state.user.token){
            this.props.history.push("/home")
        }
    }
   
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form"
                wrapperCol={{sm:12}} labelCol={{sm:4,offset:3}}
            >
                {/*用户名*/}
                <Form.Item label="用户">
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                {/*密码*/}
                <Form.Item label="密码">
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item wrapperCol={{offset:6}}>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                   
                </Form.Item>
            </Form>
        )
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm;