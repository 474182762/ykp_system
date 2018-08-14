<template>
    <div style="background: #182633;">
        <!--  <div>
            <el-button @click="addCharts()">模块添加</el-button>
        </div> -->
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="map left">能耗地图</div>
            </el-col>
            <el-col :span="18" style="background: #203246">
                <el-row :gutter="10">
                    <div class="title">今年能耗用量</div>
                    <el-col :span="8">
                        <div class="huan">
                            <el-progress type="circle" :percentage="80" color="#FFD057" :show-text='false' :width="200">sdfs</el-progress>
                            <div class="text">
                                <p>今日用电(KW/h)</p>
                                <p class="du">2564</p>
                            </div>
                            <div class="proportion">
                                <span>环比↓3.2%</span>
                                <span style="padding-left: 10px;padding-right: 10px;">||</span>
                                <span>同比↑7.8%</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="huan">
                            <el-progress type="circle" :percentage="82" color="#5090F1" :show-text='false' :width="200"></el-progress>
                            <div class="text">
                                <p>今日用水(m³)</p>
                                <p class="du">2100</p>
                            </div>
                            <div class="proportion">
                                <span>环比↓3.2%</span>
                                <span style="padding-left: 10px;padding-right: 10px;">||</span>
                                <span>同比↑7.8%</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="huan">
                            <el-progress type="circle" :percentage="70" color="#A68EDB" :show-text='false' :width="200"></el-progress>
                            <div class="text">
                                <p>今日用气(m³)</p>
                                <p class="du">2378</p>
                            </div>
                            <div class="proportion">
                                <span>环比↓3.2%</span>
                                <span style="padding-left: 10px;padding-right: 10px;">||</span>
                                <span>同比↑7.8%</span>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="6">
                <div class="left energy">
                    <el-row>
                        <el-col :span="12">
                            <div class="energy_tilte">用能</div>
                        </el-col>
                        <el-col :span="12 ">
                            <div class="energy_tilte hover">费用</div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <div class="consumption">
                            <el-col :span="12">
                                <button>当月能耗</button>
                            </el-col>
                            <el-col :span="12">
                                <button>本月能耗</button>
                            </el-col>
                        </div>
                    </el-row>
                    <el-row :gutter="1">
                        <el-col :span="4">
                            <div class="energy_icon">电</div>
                        </el-col>
                        <el-col :span="20">
                            <div class="bar">
                                <div class="bar_top">当月电耗总定额：70000KW</div>
                                <el-progress :text-inside="true" :stroke-width="16" :percentage="70" color="#F9EB2F"></el-progress>
                                <div class="bar_bottom"><span style="color: #F9EB2F">已用35000KW</span> / 剩余35000KW</div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="1">
                        <el-col :span="4">
                            <div class="energy_icon">水</div>
                        </el-col>
                        <el-col :span="20">
                            <div class="bar">
                                <div class="bar_top">当月水耗总定额：40000m³</div>
                                <el-progress :text-inside="true" :stroke-width="16" :percentage="70" color="#4E3FDA"></el-progress>
                                <div class="bar_bottom"><span style="color: #4E3FDA">已用35000m³</span> / 剩余5000m³</div>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="1">
                        <el-col :span="4">
                            <div class="energy_icon">气</div>
                        </el-col>
                        <el-col :span="20">
                            <div class="bar">
                                <div class="bar_top">当月气耗总定额：70000KW</div>
                                <el-progress :text-inside="true" :stroke-width="16" :percentage="70" color="#8741BD"></el-progress>
                                <div class="bar_bottom"><span style="color: #8741BD">已用35000KW</span> / 剩余35000KW</div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="chatrs">
                    <div class="">今日能耗</div>
                    <v-charts :option="option2" class="echarts-container"></v-charts>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="10" class="ss">
            <el-col :span='6' v-for="(item,index) in chartsList" :key="index">
                <div class="chatrs">第{{index+1}}个模块</div>
            </el-col>
        </el-row>
        <el-row :gutter="10" class="ss">
            <el-col :span='8' >
                <div class="chatrs">
                    <SemicircleChart></SemicircleChart>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import vCharts from '../components/common/Charts.vue';
import SemicircleChart from '../components/page/home/SemicircleChart.vue';
export default {
    name: 'dashboard',
    data() {
        return {
            name: this.$store.state.userName,
            avator: 'http://up.qqya.com/allimg/201710-t/17-101805_137721.jpg',
            option: '',
            chartsList: this.$store.state.chatrs.chartsList,
            option2: {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['电能消耗', '水能消耗', '气能消耗'],
                    textStyle: {
                        color: '#fff'
                    }
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


                calculable: false,
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#fff'
                        }
                    }
                }],
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#fff'
                        }
                    }
                }],
                series: [{
                        name: '电能消耗',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '水能消耗',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '气能消耗',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    }
                ]

            }
        }
    },
    components: {
        vCharts,
        SemicircleChart
    },
    computed: {
        editModule() {
            return this.$store.state.chatrs.chartsList;
        }
    },
    created: function() {

    },
    methods: {},
    watch: {
        editModule() {
            this.chartsList = this.$store.state.chatrs.chartsList;
        }
    }
}

</script>
<style scoped>
.el-row {
    margin-bottom: 20px;
    color: #fff;
}

.ss .el-col {
    margin-bottom: 20px;
}

.mgb20 {
    margin-bottom: 20px;
}

.echarts-container {
    width: 100%;
    height: 15rem;
    color: #fff;
}

.chatrs {
    width: 100%;
    height: 400px;
    background: #203246;
}

.left {
    width: 100%;
    height: 400px;
    background: #203246;
    text-align: center;
}

.energy .energy_tilte {
    line-height: 40px;
    font-size: 16px;
}

.energy .energy_icon {
    line-height: 70px;
}

.energy .bar {
    width: 80%;
    font-size: 10px;
    text-align: left;
    line-height: 24px;
}

.energy .bar .bar_top {
    font-size: 10px;
    color: #BCBCBC;
}

.hover {
    background: #eee;
    color: #000;
}

.consumption button {
    width: 80%;
    line-height: 35px;
    font-size: 12px;
    background: #FFFFFF;
    border: 1px solid #000;
}

.huan {
    position: relative;
    width: 200px;
    height: 200px;
    left: 50%;
    margin-left: -100px;
    margin-bottom: 100px;
}

.text {
    width: 200px;
    position: absolute;
    top: 75px;
    left: 50%;
    text-align: center;
    margin-left: -100px;
}

.du {
    font-size: 32px;
    line-height: 40px;
}

.title {
    margin-left: 30px;
    margin-right: 30px;
    border-bottom: 1px solid #F0F0F0;
    line-height: 40px;
    font-size: 18px;
    margin-bottom: 40px;
    color: #6E6E6E;
}

.proportion {
    margin-top: 10px;
}

</style>
