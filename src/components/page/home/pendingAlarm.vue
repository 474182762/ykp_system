<template>
    <div class="pendingAlarm">
        <div class="pendingAlarm_title">待处理告警</div>
        <div class="pendingAlarm_content" ref="pendingAlarm_content">
            <div class="charts">
                <v-charts :option="option"></v-charts>
            </div>
        </div>
    </div>
</template>
<script>
import vCharts from '../../common/Charts.vue'
export default {
    data() {
        return {
            option: ""
        }
    },
    components: {
        vCharts
    },
    mounted() {
        this.$refs.pendingAlarm_content.style.width = '100%';
        this.$refs.pendingAlarm_content.style.height = '100%';
        this.option = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                },
                enterable: true,
                confine: true,
                //transitionDuration: 1,
                triggerOn: 'mousemove',
                // alwaysShowContent: true,
                position: function(pos, params, dom, rect, size) {
                    return [pos[0], '20%']
                },
                backgroundColor: "#0d3c65",
                /*formatter: function(params) {
                    return '<span style="margin-right:5px;border-radius:50%;display: inline-block;width: 10px;height: 10px;background: transparent"></span>' + params[0].name + '<br/> ' +
                        '<span style="margin-right:5px;border-radius:50%;display: inline-block;width: 10px;height: 10px;background: transparent"></span>设备总数： ' + (params[0].value + params[1].value) + '<br/> ' +
                        '<span style="margin-right:5px;border-radius:50%;display: inline-block;width: 10px;height: 10px;background: ' + params[0].color + '"></span>在线数量：  ' + params[0].value + '<br/> ' +
                        '<span style="margin-right:5px;border-radius:50%;display: inline-block;width: 10px;height: 10px;background: ' + params[1].color + '"></span>离线数量：  ' + params[1].value + '<br/> ' +
                        '<div style="text-align: center"><a href="" style="color:#29819f;border: 1px #29819f solid;border-radius: 25px;display:inline-block;padding: 0 10px">查看详情</a></div>'
                }*/
            },
            dataZoom: [{
                type: 'slider',
                filterMode: 'weakFilter',
                showDataShadow: false,
                bottom: 0,
                height: 10,
                borderColor: 'transparent',
                backgroundColor: 'rgba(48,107,149,0.4)',
                fillerColor: "#306b95",
                handleSize: 20,
                handleStyle: {
                    shadowBlur: 6,
                },
                labelFormatter: '',
                startValue: 0,
                endValue: 6,
                zoomLock: true,
                bottom: '10%'
            }],
            legend: {
                right: '8%',
                top: '15%',
                textStyle: {
                    color: "rgba(255,255,255,0.3)"
                },
                data: ["一级", "二级", "三级", "四级", "五级"]
            },
            grid: {
                top: '25%',
                left: '5%',
                right: '4%',
                bottom: '15%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: true,
                splitLine: {
                    show: true,
                    lineStyle: {
                        // 网格颜色
                        color: 'rgba(255,255,255,0.05)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#29819f' //坐标线的颜色
                    }
                },
                axisTick: {
                    show: false
                    /* lineStyle:{
                         color: "red"  //刻度颜色
                     }*/
                },
                axisLabel: {
                    color: "rgba(255,255,255,0.4)",
                    interval: 0
                },
                data: ['中山市', '东莞市', '深圳市', '北京市', '赣州市', '长安市', '韶关市', '湛江市', '珠海市', '汕头市', "佛山市"],

            }],
            yAxis: [{
                type: 'value',
                boundaryGap: false,
                splitLine: {
                    show: true,
                    lineStyle: {
                        // 网格颜色
                        color: 'rgba(255,255,255,0.05)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#29819f'
                    }
                },
                axisTick: {
                    show: false
                    /* lineStyle:{
                         color: "red"  //刻度颜色
                     }*/
                },
                axisLabel: {
                    color: "rgba(255,255,255,0.4)"
                }
            }],
            series: [{
                    name: '一级',
                    type: 'bar',
                    z: 3,
                    barWidth: '35%',
                    data: [43, 54, 23, 43, 12, 53, 67, 34, 28, 25, 20],
                    stack: "数据",
                    itemStyle: {
                        color: "#BF5853",
                    }
                },
                {
                    name: '二级',
                    type: 'bar',
                    barWidth: '35%',
                    stack: "数据",
                    data: [5, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5],
                    itemStyle: {
                        color: "#CD7243",

                    }
                },
                {
                    name: '三级',
                    type: 'bar',
                    barWidth: '35%',
                    stack: "数据",
                    data: [43, 54, 23, 43, 12, 53, 67, 34, 28, 25, 20],
                    itemStyle: {
                        color: "#3188B3",

                    }
                },
                {
                    name: '四级',
                    type: 'bar',
                    barWidth: '35%',
                    stack: "数据",
                    data: [5, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5],
                    itemStyle: {
                        color: "#47BBBA",

                    }
                },
                {
                    name: '五级',
                    type: 'bar',
                    barWidth: '35%',
                    stack: "数据",
                    data: [5, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5],
                    itemStyle: {
                        color: "#5AB268",

                    }
                }
            ]
        }
    }
}

</script>
<style scoped>
.pendingAlarm {
    width: 100%;
    height: 100%;
    position: relative;
}

.pendingAlarm .pendingAlarm_title {
    width: 156px;
    height: 34px;
    line-height: 34px;
    background: rgba(30, 71, 133, 0.2);
    font-size: 18px;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -80px;
    color: #ffffff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 1px solid #3E547B;
    background: -webkit-radial-gradient( rgba(28, 70, 130, 1), transparent);
    /* Safari 5.1 - 6.0 */
    background: -o-radial-gradient( rgba(28, 70, 130, 1), transparent);
    /* Opera 11.6 - 12.0 */
    background: -moz-radial-gradient( rgba(28, 70, 130, 1), transparent);
    /* Firefox 3.6 - 15 */
    background: radial-gradient( rgba(28, 70, 130, 1), transparent);
    /* 标准的语法（必须放在最后） */
}

.pendingAlarm_content {
    width: 600px;
    height: 400px;
    position: absolute;
}

.pendingAlarm_content .charts {
    width: 100%;
    height: 100%;
}

</style>
