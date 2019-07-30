import React, { Component } from 'react'
import { Row, Col } from 'antd';
import echarts from 'echarts'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={{ span: 7, offset: 1 }} lg={{ span: 7, offset: 1 }}
                        style={{background:"#0bb78e",height:80,fontSize:"20px",lineHeight:"80px"}}
                    >
                        日均PV：2328
                    </Col>
                    <Col xs={{ span: 7, offset: 1 }} lg={{ span: 7, offset: 1 }}
                    style={{background:"#0bb78e",height:80,fontSize:"20px",lineHeight:"80px"}}>
                        人均UV：5.43
                    </Col>
                    <Col xs={{ span: 7, offset: 1 }} lg={{ span: 7, offset: 1 }}
                    style={{background:"#0bb78e",height:80,fontSize:"20px",lineHeight:"80px"}}>
                        人均停留时间：4.43
                    </Col>
                </Row>
                <div ref="echartcont" style={{width: "850px",height:"300px",
                margin:" 0 auto",marginTop:45}}></div>
            </div>
        )
    }
    componentDidMount(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(this.refs.echartcont);

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '最近一周网站广告投放趋势'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['百度','360','谷歌','搜狗','总量']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'百度',
                    type:'line',
                    stack: '总量',
                    data:[342, 286, 300, 263,329, 330, 410]
                },
                {
                    name:'360',
                    type:'line',
                    stack: '总量',
                    data:[220, 282, 191, 234, 290, 330, 310]
                },
                {
                    name:'谷歌',
                    type:'line',
                    stack: '总量',
                    data:[150, 252, 201, 154, 190, 330, 410]
                },
                {
                    name:'搜狗',
                    type:'line',
                    stack: '总量',
                    data:[320, 352, 301, 334, 390, 330, 320]
                },
                {
                    name:'总量',
                    type:'line',
                    stack: '总量',
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
}
