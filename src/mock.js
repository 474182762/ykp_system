const Mock = require('mockjs');
const sliderbar = function() {
    let item = {
        "code": 0,
        "data": [{
                icon: 'el-icon-setting',
                index: 'index',
                title: '首页概览'
            },
            {
                icon: 'el-icon-edit-outline',
                index: '6',
                title: '设备检测',
                subs: [{
                        index: 'PowerDistributionMonitoring',
                        title: '配电监测'
                    },
                    {
                        index: 'MeterMonitoring',
                        title: '表计监测'
                    },
                    {
                        index: 'EnvironmentalMonitoring',
                        title: '环境监测'
                    },
                    {
                        index: 'ServiceMonitoring',
                        title: '服务监测'
                    }

                ]
            },
            {
                icon: 'el-icon-error',
                index: '404',
                title: '关于我们'
            }
        ],
        "msg": "success"
    }

    return item;
}
const treeitems = function() {
    let treelable = {
        'code': 200,
        'data': [{
                id: 1,
                labelname: '口腔医院',
                children: [{
                        id: 2,
                        labelname: '口外门诊',
                        children: [{
                            id: 3,
                            labelname: '东院门诊牙周门诊'
                        }, {
                            id: 4,
                            labelname: 'DE1102'
                        }, {
                            id: 5,
                            labelname: 'DE1102'
                        }, {
                            id: 6,
                            labelname: 'DE1102'
                        }, {
                            id: 7,
                            labelname: 'DE1102'
                        }]
                    },
                    {
                        id: 11,
                        labelname: '牙周门诊'
                    }, {
                        id: 12,
                        labelname: '口腔医院'
                    }
                ]
            },
            {
                id: 8,
                labelname: '保卫科'
            },
            {
                id: 9,
                labelname: "后勤保障科"
            },
            {
                id: 10,
                labelname: "水电科"
            }
        ],
        'msg': 'success'
    }
    return treelable;
}
// 科室定额
const sectionQuota = function() {
    let item = {
        'code': 200,
        'data': {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            xAxis: [{
                type: 'value'
            }],
            yAxis: [{
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }],
            series: [{
                    name: '直接访问',
                    type: 'bar',
                    stack: '总量',
                    itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                    data: [320, 302, 301, 334, 390, 330, 320]
                },
                {
                    name: '邮件营销',
                    type: 'bar',
                    stack: '总量',
                    itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'bar',
                    stack: '总量',
                    itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'bar',
                    stack: '总量',
                    itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                    data: [150, 212, 201, 154, 190, 330, 410]
                },
                {
                    name: '搜索引擎',
                    type: 'bar',
                    stack: '总量',
                    itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                    data: [820, 832, 901, 934, 1290, 1330, 1320]
                }
            ]
        },
        'msg': 'success'
    };
    return item;
}
Mock.mock('/sliderbar/list', 'post', sliderbar);
Mock.mock('/treeitems/list', 'post', treeitems);
Mock.mock('/sectionQuota/list', 'post', sectionQuota);
