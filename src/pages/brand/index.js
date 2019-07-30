import React, { Component } from 'react';
import moment from 'moment';
import "./index.css"
import {
    Form,
    Input,
    Select,
    Switch,
    Slider,
    Button,
    Upload,
    Icon,
    DatePicker
  } from 'antd';

  const { Option } = Select;
  const dateFormat = 'YYYY/MM/DD';


class Brand extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>

        <Form.Item label="栏目选择" hasFeedback>
          {getFieldDecorator('栏目选择')(
            <Select placeholder="请你选择内容所要放的目录">
              <Option value="企业资讯">企业资讯</Option>
              <Option value="社会责任">社会责任</Option>
            </Select>,
          )}
        </Form.Item>

        <Form.Item label="文章标题">
          {getFieldDecorator('标题')(
              <Input placeholder="请输入文章标题" mode="multiple" />)}
        </Form.Item>

        <Form.Item label="发布日期">
          {getFieldDecorator('发布日期')(
            <DatePicker Option={moment('2019/01/01', dateFormat)} format={dateFormat} />)}
        </Form.Item>

        <Form.Item label="是否审核">
          {getFieldDecorator('是否审核', { valuePropName: 'checked' })(<Switch />)}
        </Form.Item>

        <Form.Item label="内容级别">
          {getFieldDecorator('内容级别')(
            <Slider
              marks={{
                0: 'A',
                20: 'B',
                40: 'C',
                60: 'D',
                80: 'E',
                100: 'F',
              }}
            />,
          )}
        </Form.Item>


        <Form.Item label="标题图片" >
          {getFieldDecorator('标题图片')(
            <Upload name="logo" action="@public/images" listType="picture">
              <Button>
                <Icon type="upload" /> 点击选择图片
              </Button>
            </Upload>,
          )}
        </Form.Item>


        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
        );
    }
}

export default Form.create({ name: 'validate_other' })(Brand);

