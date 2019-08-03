import React, { Component } from 'react';
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import "./index.css"
import { Form, Input, Select, Switch, Slider, Button, Upload, Icon, DatePicker } from 'antd';
import Tablelist from './Tablelist'
import wangeditor from "wangeditor"

const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';


class Brand extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err,values) => {
      let keyVal=this.state.key*1;
      keyVal++;
      values.内容=this.editor2.txt.html();
      values.key=String(keyVal);
      this.setState({
        nms:values,
        key:keyVal,
    })
      
    });
  };

  constructor(){
    super()
    this.state={
        nms:{},
        key:3
    }
}

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    let {nms}=this.state;
    return (
      <div>
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>

        <Form.Item label="栏目" hasFeedback>
          {getFieldDecorator('栏目')(
            <Select placeholder="请你选择内容所要放的目录">
              <Option value="企业资讯">企业资讯</Option>
              <Option value="社会责任">社会责任</Option>
            </Select>,
          )}
        </Form.Item>

        <Form.Item label="标题">
          {getFieldDecorator('标题')(
            <Input placeholder="请输入文章标题" mode="multiple" />)}
        </Form.Item>

        <Form.Item label="发布日期">
          {getFieldDecorator('发布日期')(
            <DatePicker locale={locale} Option={moment('2019/01/01', dateFormat)} format={dateFormat} />)}
        </Form.Item>

        <Form.Item label="是否审核">
          {getFieldDecorator('是否审核', { valuePropName: 'checked' })(<Switch />)}
        </Form.Item>

        <Form.Item label="内容级别">
          {getFieldDecorator('内容级别')(
            <Slider
              marks={{
                0: 'F',
                20: 'E',
                40: 'D',
                60: 'C',
                80: 'B',
                100: 'A',
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

        <Form.Item wrapperCol={{ span: 18, offset: 3 }}>
          <div ref="editor"></div>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
      <Tablelist val={nms}></Tablelist>
      </div>
    );
  }
  componentDidMount() {
    this.editor2 = new wangeditor(this.refs.editor);
    this.editor2.create();
  }
}

export default Form.create({ name: 'validate_other' })(Brand);

