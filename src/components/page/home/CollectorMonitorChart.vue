<template>
    <div class="CollectorMonitorChartBox">
        <div v-if="swichShowData==2" class="switchData">
            <span :class="{act:swichDate ==1? true:false}" @click="switchDate(1)">全部</span>
            <span :class="{act:swichDate ==2? true:false}" @click="switchDate(2)">在线</span>
            <span :class="{act:swichDate ==3? true:false}" @click="switchDate(3)">离线</span>
        </div>
        <div class="swichShowBt">
            <span :class="{act:swichShowData ==1? true:false}" @click="swichShow(1)" style="margin-right: 7px"><i class="el-icon-tickets"></i></span><span :class="{act:swichShowData ==2? true:false}"><i class="el-icon-sort" @click="swichShow(2)"></i></span>
        </div>
        <div class="showType clear">
            <span>采集器状态监测</span>
        </div>
        <div class="CollectorMonitorChart" ref="CollectorMonitorChart">
            <div v-if="swichShowData==2" style="width: 100%;height: 100%;" class="chartBox">
                <MyCharts :option="option"></MyCharts>
            </div>
            <div v-if="swichShowData==1" class="dataLinstBox">
                <div class="showdownbg"></div>
                <el-table :data="tableData3" height="100%" :header-row-style="headerrowstyle" :header-cell-style="headercellstyle" :row-class-name="rowclassname" :cell-class-name="cellclassname" :cell-style="cellstyle" :row-style="rowstyle" style="width: 100%">
                    <el-table-column height="23" prop="city" label="城市">
                    </el-table-column>
                    <el-table-column height="23" prop="monitor_num" label="采集器数量">
                    </el-table-column>
                    <el-table-column height="23" prop="online_num" label="在线数量">
                    </el-table-column>
                    <el-table-column height="23" prop="offline_num" label="离线数量">
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script>
import MyCharts from '../../common/Charts.vue';
export default {
    name: 'basetable',
    components: {
        MyCharts
    },
    props: {
        getData: {
            type: Object,
            default: function() {
                return {}
            }
        },

    },
    data() {
        return {
            swichDate: 1,
            swichShowData: 2,
            headerrowstyle: { background: 'transparent', textAlign: 'center' },
            headercellstyle: { textAlign: 'center', border: "none", color: "#fff", fontSize: "14px" },
            rowstyle: { color: "rgba(255,255,255,0.5)", textAlign: 'center' },
            cellstyle: { border: 'none' },
            option: {
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
                    formatter: function(params) {
                        return '<span style="margin-right:5px;border-radius:50%;display: inline-block;width: 10px;height: 10px;background: transparent"></span>' + params[0].name + '<br/> ' +
                            '<span style="margin-right:5px;border-radius:50%;display: inline-block;width: 10px;height: 10px;background: transparent"></span>设备总数： ' + (params[0].value + params[1].value) + '<br/> ' +
                            '<span style="margin-right:5px;border-radius:50%;display: inline-block;width: 10px;height: 10px;background: ' + params[0].color + '"></span>在线数量：  ' + params[0].value + '<br/> ' +
                            '<span style="margin-right:5px;border-radius:50%;display: inline-block;width: 10px;height: 10px;background: ' + params[1].color + '"></span>离线数量：  ' + params[1].value + '<br/> ' +
                            '<div style="text-align: center"><a href="" style="color:#29819f;border: 1px #29819f solid;border-radius: 25px;display:inline-block;padding: 0 10px">查看详情</a></div>'
                    }
                },
                legend: {
                    right: '8%',
                    top: '8%',
                    textStyle: {
                        color: "rgba(255,255,255,0.4)"
                    },
                    data: ["在线", "离线"]
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
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
                        name: '在线',
                        type: 'bar',
                        z: 3,
                        barWidth: '35%',
                        data: [65, 63, 60, 55, 50, 45, 40, 35, 30, 25, 20],
                        stack: "数据",
                        itemStyle: {
                            color: "#4fb584",
                        }
                    },
                    {
                        name: '离线',
                        type: 'bar',
                        barWidth: '35%',
                        stack: "数据",
                        data: [5, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5],
                        itemStyle: {
                            color: "#c16464",

                        }
                    }
                ]
            },
            tableData3: [{
                    city: '中山市',
                    monitor_num: '15',
                    online_num: '20',
                    offline_num: '30'
                },
                {
                    city: '北京市',
                    monitor_num: '15',
                    online_num: '20',
                    offline_num: '30'
                },
                {
                    city: '深圳市',
                    monitor_num: '15',
                    online_num: '20',
                    offline_num: '30'
                },
                {
                    city: '广州市',
                    monitor_num: '15',
                    online_num: '20',
                    offline_num: '30'
                },
                {
                    city: '上海市',
                    monitor_num: '15',
                    online_num: '20',
                    offline_num: '30'
                },
                {
                    city: '成都市',
                    monitor_num: '15',
                    online_num: '20',
                    offline_num: '30'
                },
                {
                    city: '长安市',
                    monitor_num: '15',
                    online_num: '20',
                    offline_num: '30'
                },
                {
                    city: '赣州市',
                    monitor_num: '15',
                    online_num: '20',
                    offline_num: '30'
                },
                {
                    city: '韶关市',
                    monitor_num: '15',
                    online_num: '20',
                    offline_num: '30'
                },
                {
                    city: '汕头市',
                    monitor_num: '15',
                    online_num: '20',
                    offline_num: '30'
                },

            ]
        }
    },
    created() {
        //this.createChart();
    },
    methods: {
        createChart() {
            var it = this;
            //图形所需百分比计算
            //it.showPower = it.getData[it.defName[it.defType]].power.def;
            //it.showWater = it.getData[it.defName[it.defType]].water.def;
            //it.showAir = it.getData[it.defName[it.defType]].air.def;
            this.option.series = []
        },
        swichShow(type) {
            this.swichShowData = type;
        },
        switchDate(date) {
            this.swichDate = date;
        },
        cellclassname({ row, column, rowIndex, columnIndex }) {
            if (columnIndex == 2) {
                return "greenFont"
            }
            if (columnIndex == 3) {
                return "redFont"
            }
            // console.log(rowIndex);


        },
        rowclassname({ row, rowIndex }) {
            if (++rowIndex % 2 == 0) {
                return "lee-row"
            }
        }
    },
    mounted() {
        this.$refs.CollectorMonitorChart.style.width = '100%';
        this.$refs.CollectorMonitorChart.style.height = '80%';

    }
}

</script>
<style scoped>
.CollectorMonitorChartBox {
    position: relative;
    width: 100%;
    height: 100%;
}

.CollectorMonitorChartBox .switchData {
    position: absolute;
    z-index: 10;
    top: 5%;
    left: 5%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 120px;
    height: 22px;
    border: 1px #269FC7 solid;
    border-radius: 15px;
    overflow: hidden;
}

.CollectorMonitorChartBox .switchData span {
    cursor: pointer;
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
    font-size: 12px;
    line-height: 22px;
    display: inline-block;
    width: 33%;
    height: 100%;
    border-right: 1px #269FC7 solid;
    z-index: 3;
}

.CollectorMonitorChartBox .switchData span.act {
    background: rgba(24, 129, 191, 0.4);
    color: #fff;
}

.CollectorMonitorChartBox .switchData span:last-of-type {
    border-right: none
}

.CollectorMonitorChartBox .swichShowBt {
    position: absolute;
    top: 5%;
    right: 3%;
    color: rgba(255, 255, 255, 0.5);
}

.CollectorMonitorChartBox .swichShowBt .act {
    color: #fff;
}

.CollectorMonitorChartBox .swichShowBt span {
    cursor: pointer;
}

.showType {
    cursor: pointer;
    width: 158px;
    height: 34px;
    font-size: 18px;
    line-height: 34px;
    text-align: center;
    margin: 0 auto;
    border: 1px rgba(255, 255, 255, 0.5) solid;
    border-radius: 0 0 10px 10px;
    background: -webkit-radial-gradient( rgba(28, 70, 130, 1), transparent);
    /* Safari 5.1 - 6.0 */
    background: -o-radial-gradient( rgba(28, 70, 130, 1), transparent);
    /* Opera 11.6 - 12.0 */
    background: -moz-radial-gradient( rgba(28, 70, 130, 1), transparent);
    /* Firefox 3.6 - 15 */
    background: radial-gradient( rgba(28, 70, 130, 1), transparent);
    /* 标准的语法（必须放在最后） */
}

.showType span {
    color: #fff;
}

.CollectorMonitorChart {
    width: 600px;
    /*height: calc(100% - 50px);*/
    height: 380px;
}

.CollectorMonitorChart .dataLinstBox {
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 4%;
    height: 100%;
    width: 93%;
}

.dataLinstBox {
    position: relative
}

.dataLinstBox .showdownbg {
    position: absolute;
    top: 28px;
    height: 25px;
    width: 97%;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-image: -webkit-linear-gradient(left, transparent, rgba(13, 86, 147, 1), transparent)20 60 20;
    border-image: -o-linear-gradient(left, transparent, rgba(13, 86, 147, 1), transparent)20 60 20;
    border-image: -moz-linear-gradient(left, transparent, rgba(13, 86, 147, 1), transparent)20 60 20;
    border-image: linear-gradient(left, transparent, rgba(13, 86, 147, 1), transparent)20 60 20;
    /* border-image: -webkit-linear-gradient(left,transparent 0,rgba(13,86,147,0.4) 5%,rgba(13,86,147,0.6) 10%,rgba(13,86,147,0.8) 20%,rgba(13,86,147,0.9) 30%,rgba(13,86,147,0.9) 40%,rgba(13,86,147,0.9) 50%, rgba(13,86,147,0.9) 60%, rgba(13,86,147,0.9) 70%, rgba(13,86,147,0.8) 80%, rgba(13,86,147,0.6) 90%,rgba(13,86,147,0.5) 95%,transparent 100%);;*/
    background: -webkit-linear-gradient(left, transparent 0, rgba(15, 32, 85, 0.4) 5%, rgba(15, 32, 85, 0.6) 10%, rgba(15, 32, 85, 0.8) 20%, rgba(15, 32, 85, 0.9) 30%, rgba(15, 32, 85, 0.9) 40%, rgba(15, 32, 85, 0.9) 50%, rgba(15, 32, 85, 0.9) 60%, rgba(15, 32, 85, 0.9) 70%, rgba(15, 32, 85, 0.8) 80%, rgba(15, 32, 85, 0.6) 90%, rgba(15, 32, 85, 0.5) 95%, transparent 100%);
    background: -o-linear-gradient(left, transparent 0, rgba(15, 32, 85, 0.4) 5%, rgba(15, 32, 85, 0.6) 10%, rgba(15, 32, 85, 0.8) 20%, rgba(15, 32, 85, 0.9) 30%, rgba(15, 32, 85, 0.9) 40%, rgba(15, 32, 85, 0.9) 50%, rgba(15, 32, 85, 0.9) 60%, rgba(15, 32, 85, 0.9) 70%, rgba(15, 32, 85, 0.8) 80%, rgba(15, 32, 85, 0.6) 90%, rgba(15, 32, 85, 0.5) 95%, transparent 100%);
    background: -moz-linear-gradient(left, transparent 0, rgba(15, 32, 85, 0.4) 5%, rgba(15, 32, 85, 0.6) 10%, rgba(15, 32, 85, 0.8) 20%, rgba(15, 32, 85, 0.9) 30%, rgba(15, 32, 85, 0.9) 40%, rgba(15, 32, 85, 0.9) 50%, rgba(15, 32, 85, 0.9) 60%, rgba(15, 32, 85, 0.9) 70%, rgba(15, 32, 85, 0.8) 80%, rgba(15, 32, 85, 0.6) 90%, rgba(15, 32, 85, 0.5) 95%, transparent 100%);
    background: linear-gradient(left, transparent 0, rgba(15, 32, 85, 0.4) 5%, rgba(15, 32, 85, 0.6) 10%, rgba(15, 32, 85, 0.8) 20%, rgba(15, 32, 85, 0.9) 30%, rgba(15, 32, 85, 0.9) 40%, rgba(15, 32, 85, 0.9) 50%, rgba(15, 32, 85, 0.9) 60%, rgba(15, 32, 85, 0.9) 70%, rgba(15, 32, 85, 0.8) 80%, rgba(15, 32, 85, 0.6) 90%, rgba(15, 32, 85, 0.5) 95%, transparent 100%);
}

</style>
<style>
.CollectorMonitorChartBox .el-table {
    background: transparent;
}

.CollectorMonitorChartBox .el-table th,
.el-table tr {
    background: transparent;
}

.CollectorMonitorChartBox .el-table__row:hover>td {
    background: transparent
}

.CollectorMonitorChartBox .el-table tr:hover>td {
    background: transparent;
}

.CollectorMonitorChartBox .el-table tr:hover {
    background: transparent;
}

.CollectorMonitorChartBox .el-table::before {
    background-color: transparent;
}

.el-table--small td {
    padding: 2px 0
}

.CollectorMonitorChartBox .el-table__body-wrapper::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 11px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}








/*.CollectorMonitorChartBox .el-table__body-wrapper::-webkit-scrollbar-thumb {/*滚动条里面小方块
        border-radius: 10px;
        background-color: #114376;

    }*/

.CollectorMonitorChartBox .el-table__body-wrapper::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background-color: #0f3f6b;
    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
    background-image: -moz-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
    background-image: linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
}

.CollectorMonitorChartBox .el-table__body-wrapper::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    /*border-radius: 10px;*/
    background: rgba(255, 255, 255, 0.1);
}

.CollectorMonitorChartBox .lee-row {
    background: rgba(10, 40, 76, 0.6)!important;
}

.CollectorMonitorChartBox .greenFont div {
    color: #4ea064;
}

.CollectorMonitorChartBox .redFont div {
    color: #D14144;
}

</style>
