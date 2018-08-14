<template>
    <div class="HourlyEnergyChartBox" ref="HourlyEnergyChartBox">
        <div class="switchData">
            <span :class="{act:swichDate ==1? true:false}" @click="switchDate(1)">电</span>
            <span :class="{act:swichDate ==2? true:false}" @click="switchDate(2)">水</span>
            <span :class="{act:swichDate ==3? true:false}" @click="switchDate(3)">气</span>
        </div>
        <div class="showType clear">
            <span>今日逐时耗能</span>
        </div>
        <div class="HourlyEnergyChart">
            <MyCharts :option="option"></MyCharts>
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
            swichDate:1,
            vtype:["","power","water","air"],
            vdata:{
                power:{
                    today:[800, 500, 600, 700, 600, 500, 600, 800, 500, 600, 400, 600, 500],
                    yesterday:[600, 500, 400, 800, 500, 600, 800, 600, 400, 500, 600, 500, 600]
                },
                water:{
                    today:[700, 600, 600, 500, 500, 800, 760, 600, 700, 800, 600, 700, 600],
                    yesterday:[600, 400, 600, 700, 600, 540, 700, 800, 500, 700, 800, 700, 800]
                },
                air:{
                    today:[600, 500, 800, 600, 700, 800, 700, 600, 700, 500, 700, 600, 600],
                    yesterday:[500, 600, 500, 600, 500, 800, 500, 800, 600, 500, 500, 400, 800]
                }
            },
            option: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: 'transparent'
                        }
                    }
                },
                legend: {
                    right: '8%',
                    top: '8%',
                    textStyle: {
                        color: "rgba(255,255,255,0.4)"
                    },
                    data: [{ name: '昨日耗能', icon: "rect", height: 2 }, { name: '今日耗能', icon: "rect", height: 2 }]
                },
                grid: {
                    top: '22%',
                    left: '3%',
                    right: '10%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    name: '时间',
                    nameTextStyle: {
                        color: "rgba(255,255,255,0.4)"
                    },
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
                        color: "rgba(255,255,255,0.4)"
                    },
                    boundaryGap: false,
                    data: ['', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24']
                }],
                yAxis: [{
                    type: 'value',
                    name: '能耗 kWh',
                    nameTextStyle: {
                        color: "rgba(255,255,255,0.4)"
                    },
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
                series: []
            }
        }
    },
    created() {
        this.createChart();
    },
    methods: {
        createChart() {
            var it = this;
            //图形所需百分比计算
            //it.showPower = it.getData[it.defName[it.defType]].power.def;
            //it.showWater = it.getData[it.defName[it.defType]].water.def;
            //it.showAir = it.getData[it.defName[it.defType]].air.def;
            this.option.series = [{
                name: '昨日耗能',
                type: 'line',
                itemStyle: {
                    color: "rgba(24,199,227,0.2)",
                },
                lineStyle: {
                    color: "rgba(24,199,227,1)",
                },
                areaStyle: { normal: {} },
                smooth: true,
                data: it.vdata[this.vtype[this.swichDate]].yesterday
            },
                {
                    name: '今日耗能',
                    type: 'line',
                    itemStyle: {
                        color: "rgba(118,228,79,0.2)",
                    },
                    lineStyle: {
                        color: "rgba(118,228,79,1)",
                    },
                    areaStyle: { normal: {} },
                    smooth: true,
                    data: it.vdata[this.vtype[this.swichDate]].today
                },]
        },
        changeType(type) {
            this.defType = type;
        },
        switchDate(date) {
            this.swichDate = date;
            this.createChart();
        }
    },
    mounted() {
        this.$refs.HourlyEnergyChartBox.style.width = '100%';
        this.$refs.HourlyEnergyChartBox.style.height = '100%';
    }
}

</script>
<style scoped>
.HourlyEnergyChartBox {
    position: relative;
    width: 600px;
    height: 380px;
}

.HourlyEnergyChartBox .switchData {
    position: absolute;
    z-index: 10;
    top: 5%;
    left: 5%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 87px;
    height: 22px;
    border: 1px #269FC7 solid;
    border-radius: 15px;
    overflow: hidden;
    z-index: 3;
}

.HourlyEnergyChartBox .switchData span {
    cursor: pointer;
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
    font-size: 12px;
    line-height: 22px;
    display: inline-block;
    width: 33%;
    height: 100%;
    border-right: 1px #269FC7 solid;
}

.HourlyEnergyChartBox .switchData span.act {
    background: rgba(24, 129, 191, 0.4);
    color: #fff;
}

.HourlyEnergyChartBox .switchData span:last-of-type {
    border-right: none
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

.HourlyEnergyChart {
    width: 100%;
    height: calc(100% - 50px);
}

</style>
