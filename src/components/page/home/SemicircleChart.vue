<template>
    <div class="semicircleChartBox" ref="semicircleChartBox">
        <div class="switchData">
            <span :class="{act:swichDate ==1? true:false}" @click="switchDate(1)">日</span>
            <span :class="{act:swichDate ==2? true:false}" @click="switchDate(2)">月</span>
            <span :class="{act:swichDate ==3? true:false}" @click="switchDate(3)">年</span>
        </div>
        <div class="showType clear">
            <span :class="{acti:defType == 1 ? true:false }" @click="changeType(1)"> 耗能</span>
            <b class="m-line"></b>
            <span :class="{acti:defType == 2 ? true:false }" @click="changeType(2)">费用</span>
        </div>
        <div class="semicircleCharts">
            <MyCharts :option="option"></MyCharts>
            <div class="contrast">
                <span class="item">环比&nbsp;&nbsp;<i style="color: #2b9e67" class="el-icon-sort-down"></i><span style="color:#fff">{{getData[defName[defType]].power.huan}}%</span></span>
                <span style="margin-top: 5px" class="item">同比&nbsp;<i style="color:#bd5b5b" class="el-icon-sort-up"></i> <span style="color:#fff">{{getData[defName[defType]].power.tong}}%</span></span>
            </div>
            <div class="markingdata1">
                <div class="markbox">
                    <i style="color:#c9ac38" class="el-icon-star-on"></i>
                    <span>本月用电（ {{(defType==1)?"kWh":"元"}} ）</span>
                    <p>{{getData[defName[defType]].power.used}}</p>
                </div>
            </div>
            <div class="markingdata2 clear">
                <div style="margin-left:10%" class="markbox fl">
                    <i style="color:#29b4de" class="ico el-icon-star-on"></i>
                    <span>本月用水（ {{(defType==1)?"kWh":"元"}} ）</span>
                    <p>{{getData[defName[defType]].water.used}}</p>
                    <div class="contrastData">
                        <span style="width:100px;display:inline-block;color: rgba(255,255,255,0.5)">环比&nbsp;&nbsp;<i style="color: #2b9e67" class="el-icon-sort-down"></i><span style="color:#fff">{{getData[defName[defType]].water.huan}}%%</span></span><span style="display:inline-block;color: rgba(255,255,255,0.5)">同比&nbsp;<i style="color:#bd5b5b" class="el-icon-sort-up"></i> <span style="color:#fff">{{getData[defName[defType]].water.tong}}%</span></span>
                    </div>
                </div>
                <div style="margin-right:10%" class="markbox fr">
                    <i style="color:#ea6060" class="ico el-icon-star-on"></i>
                    <span>本月用气（ {{(defType==1)?"kWh":"元"}} ）</span>
                    <p>{{getData[defName[defType]].air.used}}</p>
                    <div class="contrastData">
                        <span style="width:100px;display:inline-block;color: rgba(255,255,255,0.5)">环比&nbsp;&nbsp;<i style="color: #2b9e67" class="el-icon-sort-down"></i><span style="color:#fff">{{getData[defName[defType]].air.huan}}%%</span></span><span style="display:inline-block;color: rgba(255,255,255,0.5)">同比&nbsp;<i style="color:#bd5b5b" class="el-icon-sort-up"></i> <span style="color:#fff">{{getData[defName[defType]].air.tong}}%</span></span>
                    </div>
                </div>
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
                return {
                    energy: {
                        power: {
                            def: 15000,
                            used: 13046,
                            huan: 3.2,
                            tong: 3.4
                        },
                        water: {
                            def: 20000,
                            used: 7108,
                            huan: 3.2,
                            tong: 3.4
                        },
                        air: {
                            def: 2000,
                            used: 1109,
                            huan: 3.2,
                            tong: 3.4
                        }
                    },
                    money: {
                        power: {
                            def: 22000,
                            used: 16045,
                            huan: 3.2,
                            tong: 3.4
                        },
                        water: {
                            def: 18000,
                            used: 8804,
                            huan: 3.2,
                            tong: 3.4
                        },
                        air: {
                            def: 12000,
                            used: 8104,
                            huan: 3.2,
                            tong: 3.4
                        }
                    },
                }
            }
        },

    },
    data() {
        return {
            swichDate: 1,
            defType: 1,
            defName: ["", "energy", "money"],
            showPower: 30,
            showWater: 60,
            showAir: 80,
            option: {
                backgroundColor: 'transparent',
                tooltip: {
                    formatter: "{a} <br/>{c} {b}"
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: { show: true },
                        restore: { show: false },
                        saveAsImage: { show: false }
                    }
                },
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
            this.option.series = [{ //上方仪表
                    name: '刻度条',
                    type: 'gauge',
                    center: ['50%', '35%'],
                    splitNumber: 6,
                    radius: 93,
                    startAngle: 179,
                    endAngle: 1,
                    detail: { show: false },
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [0.5, '#fff'],
                                [0.54, '#89b68f'],
                                [0.57, '#7cb875'],
                                [0.6, '#7bc45b'],
                                [0.63, '#62b73d'],
                                [0.67, '#6ebd45'],
                                [0.7, '#dddb746'],
                                [0.73, '#d9ad49'],
                                [0.77, '#d0a34f'],
                                [0.8, '#e1a248'],
                                [0.83, '#ecad4f'],
                                [0.87, '#cd8c4f'],
                                [0.9, '#e6893f'],
                                [0.93, '#d87d46'],
                                [0.96, '#da7646'],
                                [1, '#bd5b5b']
                            ],
                            width: 0
                        }
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        // 坐标轴小标记
                        length: -5, // 属性length控制线长
                        lineStyle: { // 属性lineStyle控制线条样式
                            width: 1.5,
                            color: "auto",
                            /* shadowColor : '#fff', //默认透明
                             shadowBlur: 1*/
                        }
                    },
                    splitLine: {
                        // 分隔线
                        length: -8, // 属性length控制线长
                        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 1.5,
                            color: 'auto',
                            /*shadowColor : '#fff', //默认透明
                            shadowBlur: 3*/
                        }
                    },
                    pointer: {
                        show: false
                    },
                    data: [{ value: 0 }]
                },
                {
                    name: '内边距',
                    type: 'gauge',
                    center: ['50%', '35%'],
                    splitNumber: 6,
                    radius: 34.5,
                    startAngle: 180,
                    endAngle: 0,
                    detail: { show: false },
                    axisLine: {
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [1, '#D0C372']
                            ],
                            width: 2,
                            shadowColor: '#000', //默认透明
                            shadowBlur: 5
                        }
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: false
                    },
                    data: [{ value: 50, name: 'gas' }]
                },
                {
                    name: '色块',
                    type: 'gauge',
                    center: ['50%', '35%'],
                    splitNumber: 6,
                    radius: 85,
                    startAngle: 180,
                    endAngle: 0,
                    detail: { show: false },
                    axisLine: {
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [this.showPower * 0.01, '#D0B24B'],
                                [1, '#086090']
                            ],
                            width: 50,
                            shadowColor: 'rgba(255,255,255,)', //默认透明
                            shadowBlur: 3
                        }
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: false
                    },
                },
                {
                    name: '外边距',
                    type: 'gauge',
                    center: ['50%', '35%'],
                    splitNumber: 6,
                    radius: 87,
                    startAngle: 180,
                    endAngle: 0,
                    detail: { show: false },
                    axisLine: {
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [1, '#D0C372']
                            ],
                            width: 1,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10,
                            opacity: 1
                        }
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    pointer: {
                        width: 4,
                        length: '90%',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 1
                    },
                    itemStyle: {
                        color: "#fff000",
                        shadowColor: '#fff',
                        shadowBlur: 20
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: false
                    },
                    data: [{ value: this.showPower, name: 'kWh' }]
                },

                //左下方仪表
                {
                    name: '刻度条',
                    type: 'gauge',
                    center: ['25%', '75%'],
                    splitNumber: 6,
                    radius: 65,
                    startAngle: 179,
                    endAngle: 1,
                    detail: { show: false },
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [0.5, '#fff'],
                                [0.54, '#89b68f'],
                                [0.57, '#7cb875'],
                                [0.6, '#7bc45b'],
                                [0.63, '#62b73d'],
                                [0.67, '#6ebd45'],
                                [0.7, '#dddb746'],
                                [0.73, '#d9ad49'],
                                [0.77, '#d0a34f'],
                                [0.8, '#e1a248'],
                                [0.83, '#ecad4f'],
                                [0.87, '#cd8c4f'],
                                [0.9, '#e6893f'],
                                [0.93, '#d87d46'],
                                [0.96, '#da7646'],
                                [1, '#bd5b5b']
                            ],
                            width: 0
                        }
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        // 坐标轴小标记
                        length: -5, // 属性length控制线长
                        lineStyle: { // 属性lineStyle控制线条样式
                            width: 1,
                            color: "auto",
                            /* shadowColor : '#fff', //默认透明
                             shadowBlur: 1*/
                        }
                    },
                    splitLine: {
                        // 分隔线
                        length: -8, // 属性length控制线长
                        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 1.5,
                            color: 'auto',
                            /*shadowColor : '#fff', //默认透明
                            shadowBlur: 3*/
                        }
                    },
                    pointer: {
                        show: false
                    },
                    data: [{ value: 0 }]
                },
                {
                    name: '内边距',
                    type: 'gauge',
                    center: ['25%', '75%'],
                    splitNumber: 6,
                    radius: 24,
                    startAngle: 180,
                    endAngle: 0,
                    detail: { show: false },
                    axisLine: {
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [1, '#72cdda']
                            ],
                            width: 2,
                            shadowColor: '#000', //默认透明
                            shadowBlur: 5
                        }
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: false
                    },
                    data: [{ value: 50, name: 'gas' }]
                },
                {
                    name: '色块',
                    type: 'gauge',
                    center: ['25%', '75%'],
                    splitNumber: 6,
                    radius: 59,
                    startAngle: 180,
                    endAngle: 0,
                    detail: { show: false },
                    axisLine: {
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [this.showWater * 0.01, '#2fa9c2'],
                                [1, '#095a87']
                            ],
                            width: 35,
                            shadowColor: 'rgba(255,255,255,)', //默认透明
                            shadowBlur: 3
                        }
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: false
                    },
                },
                {
                    name: '外边距',
                    type: 'gauge',
                    center: ['25%', '75%'],
                    splitNumber: 6,
                    radius: 60.5,
                    startAngle: 180,
                    endAngle: 0,
                    detail: { show: false },
                    axisLine: {
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [1, '#72cdda']
                            ],
                            width: 1,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    pointer: {
                        width: 2,
                        length: '90%',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 1
                    },
                    itemStyle: {
                        color: "#fff000",
                        shadowColor: '#fff',
                        shadowBlur: 20
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: false
                    },
                    data: [{ value: this.showWater, name: 'kWh' }]
                },

                //右下方仪表
                {
                    name: '刻度条',
                    type: 'gauge',
                    center: ['75%', '75%'],
                    splitNumber: 6,
                    radius: 65,
                    startAngle: 179,
                    endAngle: 1,
                    detail: { show: false },
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [0.5, '#fff'],
                                [0.54, '#89b68f'],
                                [0.57, '#7cb875'],
                                [0.6, '#7bc45b'],
                                [0.63, '#62b73d'],
                                [0.67, '#6ebd45'],
                                [0.7, '#dddb746'],
                                [0.73, '#d9ad49'],
                                [0.77, '#d0a34f'],
                                [0.8, '#e1a248'],
                                [0.83, '#ecad4f'],
                                [0.87, '#cd8c4f'],
                                [0.9, '#e6893f'],
                                [0.93, '#d87d46'],
                                [0.96, '#da7646'],
                                [1, '#bd5b5b']
                            ],
                            width: 0
                        }
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        // 坐标轴小标记
                        length: -5, // 属性length控制线长
                        lineStyle: { // 属性lineStyle控制线条样式
                            width: 1,
                            color: "auto",
                            /* shadowColor : '#fff', //默认透明
                             shadowBlur: 1*/
                        }
                    },
                    splitLine: {
                        // 分隔线
                        length: -8, // 属性length控制线长
                        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 1.5,
                            color: 'auto',
                            /*shadowColor : '#fff', //默认透明
                            shadowBlur: 3*/
                        }
                    },
                    pointer: {
                        show: false
                    },
                    data: [{ value: 0 }]
                },
                {
                    name: '内边距',
                    type: 'gauge',
                    center: ['75%', '75%'],
                    splitNumber: 6,
                    radius: 24,
                    startAngle: 180,
                    endAngle: 0,
                    detail: { show: false },
                    axisLine: {
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [1, '#af6464']
                            ],
                            width: 2,
                            shadowColor: '#000', //默认透明
                            shadowBlur: 5
                        }
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: false
                    },
                    data: [{ value: 50, name: 'gas' }]
                },
                {
                    name: '色块',
                    type: 'gauge',
                    center: ['75%', '75%'],
                    splitNumber: 6,
                    radius: 59,
                    startAngle: 180,
                    endAngle: 0,
                    detail: { show: false },
                    axisLine: {
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [this.showAir * 0.01, '#d0635b'],
                                [1, '#095a87']
                            ],
                            width: 35,
                            shadowColor: 'rgba(255,255,255,)', //默认透明
                            shadowBlur: 3
                        }
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: false
                    },
                },
                {
                    name: '外边距',
                    type: 'gauge',
                    center: ['75%', '75%'],
                    splitNumber: 6,
                    radius: 60.5,
                    startAngle: 180,
                    endAngle: 0,
                    detail: { show: false },
                    axisLine: {
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: [
                                [1, '#af6464']
                            ],
                            width: 1,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    pointer: {
                        width: 2,
                        length: '90%',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 1
                    },
                    itemStyle: {
                        color: "#fff000",
                        shadowColor: '#fff',
                        shadowBlur: 20
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: false
                    },
                    data: [{ value: this.showAir, name: 'kWh' }]
                }
            ]
        },
        changeType(type) {
            this.defType = type;
        },
        switchDate(date) {
            this.swichDate = date;
        }
    },
    mounted() {
        this.$refs.semicircleChartBox.style.width = '100%';
        this.$refs.semicircleChartBox.style.height = '100%';
    }
}

</script>
<style scoped>
.semicircleChartBox {
    position: relative;
    width: 600px;
    height: 350px;
}

.semicircleChartBox .switchData {
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

.semicircleChartBox .switchData span {
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

.semicircleChartBox .switchData span.act {
    background: rgba(24, 129, 191, 0.4);
    color: #fff;
}

.semicircleChartBox .switchData span:last-of-type {
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
    color: rgba(255, 255, 255, 0.6);
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

.showType .acti {
    color: #fff;
}

.showType .m-line {
    width: 2px;
    height: 15px;
    position: relative;
    top: 2px;
    margin: 0 15px;
    display: inline-block;
    background: #fff;
}

.semicircleCharts {
    width: 100%;
    height: calc(100% - 32px);
}

.markingdata1 {

    width: 100%;
    margin-right: auto;
    margin-left: auto;
    position: absolute;
    top: 45%;
}

.markingdata1 .markbox {
    box-sizing: border-box;
    padding-left: 45px;
    width: 165px;
    margin: 0 auto;
    position: relative;
}

.markingdata1 .markbox i {
    position: absolute;
    top: 8px;
    left: 5px;
    font-size: 30px;
}

.markingdata1 .markbox span {
    font-size: 14px;
    color: #41dcf4;
}

.markingdata1 .markbox p {
    color: #fff;
    font-size: 24px;
}

.markingdata2 {

    width: 100%;
    margin-right: auto;
    margin-left: auto;
    position: absolute;
    top: 79%;
}

.markingdata2 .markbox {
    box-sizing: border-box;
    padding-left: 45px;
    width: 160px;
    position: relative;
}

.markingdata2 .markbox .ico {
    position: absolute;
    top: 8px;
    left: 5px;
    font-size: 30px;
}

.markingdata2 .markbox span {
    font-size: 13px;
    color: #41dcf4;
}

.markingdata2 .markbox p {
    color: #fff;
    font-size: 20px;
}

.markingdata2 .markbox .contrastData {
    position: absolute;
    bottom: -20px;
    left: -23px;
}

.semicircleCharts .contrast {
    position: absolute;
    top: 28%;
    right: 12%;
}

.semicircleCharts .contrast .item {
    color: rgba(255, 255, 255, 0.6);
    font-size: 15px;
    display: block;
}

</style>
