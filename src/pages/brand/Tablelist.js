import React, { Component } from 'react';
import { Table, Divider} from 'antd';

const columns = [
    {
      title: '标题',
      dataIndex: '标题',
      key: '标题',
    },
    {
      title: '内容级别',
      dataIndex: '内容级别',
      key: '内容级别',
    },
    {
      title: '栏目',
      dataIndex: '栏目',
      key: '栏目',
    },
    {
      title: '是否审核',
      key: '是否审核',
      dataIndex: '是否审核',
    },
    {
        title: '发布日期',
        key: '发布日期',
        dataIndex: '发布日期',
      },
    {
      title: '操作',
      key: '操作',
      render: () => (
        <span>
          <button>修改</button>
          <Divider type="vertical" />
          <button>删除</button>
        </span>
      ),
    },
  ];
//在表格中每个数据都必须有一个key值
const data = [
    { 
      key:'1',
      标题: '这是标题1',
      内容级别: 80,
      栏目: "社会责任",
      是否审核: 'true',
      发布日期: "2019-07-30 23:8:25",
    },
    {
      key:'2',
      标题: '这是标题2',
      内容级别: 70,
      栏目: "企业资讯",
      是否审核: 'false',
      发布日期: "2019-07-29 23:8:25",
    },
    {
      key:'3',
      标题: '这是标题3',
      内容级别: 90,
      栏目: "社会责任",
      是否审核: 'true',
      发布日期: "2019-07-28 23:8:25",
    }
]

export default class Tablelist extends Component {

    render() {

        if(this.props.val.内容级别 !== undefined | this.props.val.标题 !== undefined && 
           this.props.val.栏目 !== undefined && this.props.val.是否审核 !== undefined &&
           this.props.val.发布日期 !== undefined){
             
            var d = new Date(this.props.val.发布日期._d);
            var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + 
            ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

            let dat={
              key:this.props.val.key,
              标题:this.props.val.标题,
              内容级别: this.props.val.内容级别,
              栏目: this.props.val.栏目,
              是否审核:String(this.props.val.是否审核),
              发布日期: datetime
            };
            data.unshift(dat)
        }
        
        return (
            <Table columns={columns} dataSource={data} />
        );
    }
}



