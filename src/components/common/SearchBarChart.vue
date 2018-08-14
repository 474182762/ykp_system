<template>
    <div class="SearchBarChartBox">
        <div class="searchtoolBox clear">
            <div class="searchBox fl">
                <span class="fl">时间粒度：</span>
                <div class="fl">
                    <span :class="{act:timeSwich==1?true:false}" @click="swichTimeData(1)">时</span>
                    <span :class="{act:timeSwich==2?true:false}" @click="swichTimeData(2)">日</span>
                    <span :class="{act:timeSwich==3?true:false}" @click="swichTimeData(3)">月</span>
                    <span :class="{act:timeSwich==4?true:false}" @click="swichTimeData(4)">年</span>
                </div>
            </div>
            <div class="moreItems fl clear">
                <div class="searchItem">
                    <span>时间筛选：</span>
                    <select name="" id="">
                        <option value="">2018-03-07</option>
                    </select>
                    <span style="padding: 0 6px;font-size: 14px;color: #767676"> 至 </span>
                    <select name="" id="">
                        <option value="">2018-03-07</option>
                    </select>
                </div>
            </div>
            <div class="submitSearch">
                <button><i class="el-icon-search"></i>查询</button>
            </div>

        </div>
        <div class="SearchBarChart">
            <Charts :option="option"></Charts>
        </div>
    </div>
</template>
<script>
    //import DataTable from "../../components/common/DataTable"
    import Charts from '../../components/common/Charts.vue';

    export default {
        name: 'basetable',
        components: {
            Charts
        },
        props: {
            getOption: {
                type: Object,
                default: function () {
                    return {
                            color: ['#65ca84', '#73b9dd', '#e7c156', '#f58e6b', '#F1726b'],
                                tooltip: {
                            trigger: 'axis',
                                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                                }
                            },
                            dataZoom: [{
                                type: 'slider',
                                filterMode: 'weakFilter',
                                showDataShadow: false,
                                bottom: 0,
                                height: 16,
                                borderColor: 'transparent',
                                backgroundColor: '#e4eff5',
                                fillerColor: "#79b9df",
                                handleSize: 20,
                                handleStyle: {
                                    shadowBlur: 6,
                                },
                                labelFormatter: '',
                                startValue: 0,
                                endValue: 5,
                                zoomLock: false,
                                bottom: '9%'
                            }],
                                legend: {
                                data: ['一级', '二级', '三级', '四级', '五级'],
                                itemWidth: 9,
                                itemHeight: 9,
                                itemGap: 20,
                                right: 45
                            },
                            grid: {
                                top: '7%',
                                    left: '3%',
                                    right: '4%',
                                    bottom: '21%',
                                    containLabel: true
                            },
                            xAxis: [{
                                type: 'category',
                                data: ['2017-9', '2017-10', '2017-11', '2017-12', '2018-1', '2018-2', '2018-3', '2018-4', '2018-5'],
                                axisTick: {
                                    alignWithLabel: true
                                },
                                splitLine: {
                                    show: true,
                                    lineStyle: {
                                        // 网格颜色
                                        color: ['#E5EFF5']
                                    }
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#ccc'
                                    }
                                },
                                axisLabel: {
                                    color: "#3A3A3A",
                                    interval: 0
                                },
                            }],
                            yAxis: [{
                                type: 'value',
                                name: '次数',
                                nameTextStyle: {
                                    color: '#838383'
                                },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    // 网格颜色
                                    color: ['#E5EFF5']
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#E5EFF5'
                                }
                            },
                            axisLabel: {
                                color: "#3A3A3A",
                                interval: 0
                            },
                        }],
                            series: [
                            {
                                name: '五级',
                                barGap: 0,
                                type: 'bar',
                                data: [98, 77, 101, 99, 40, 98, 77, 101, 99, 40]
                            },
                            {
                                name: '四级',
                                type: 'bar',
                                data: [98, 77, 101, 99, 40, 98, 77, 101, 99, 40]
                            },
                            {
                                name: '三级',
                                type: 'bar',
                                data: [150, 232, 201, 154, 190, 150, 232, 201, 154, 190]
                            },
                            {
                                name: '二级',
                                type: 'bar',
                                data: [220, 182, 191, 234, 290, 220, 182, 191, 234, 290]
                            },
                            {
                                name: '一级',
                                type: 'bar',
                                data: [320, 332, 301, 334, 390, 320, 332, 301, 334, 390]
                            },


                        ]

                    }
                }
            }
        },
        data() {
            return {
                timeSwich: 1,
                option: this.getOption
            }
        },
        created() {

        },
        computed: {},
        methods: {
            swichTimeData(vl) {
                console.log(this.option);
                this.timeSwich = vl;
            }
        }
    }

</script>
<style scoped>
    .SearchBarChartBox {
        width: 100%;
        height: 100%;
    }

    .searchtoolBox {

        padding-bottom: 38px;
        padding-left: 38px;
        padding-right: 38px;
        font-size: 16px;
    }

    .searchBox {
        font-size: 14px;
        padding-top: 33px;
        margin-right: 47px;
    }

    .searchBox div {
        width: 110px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        border: 1px #828282 solid;
        line-height: 24px;
        box-sizing: border-box;
        height: 24px;
        border-radius: 15px;
        overflow: hidden;
    }

    .searchBox span {
        display: inline-block;
        height: 100%;
        font-size: 14px;
        color: #838383;
        font-weight: bold;
        line-height: 26px;
    }

    .searchBox div span {
        cursor: pointer;
        width: 25%;
        text-align: center;
        display: inline-block;
        height: 100%;
        color: #3a3a3a;
        font-weight: bold;
        line-height: 23px;
        border-right: 1px #828282 solid;
    }

    .searchBox span:last-of-type {
        border-right: none;
    }

    .searchBox div span.act {
        color: #fff;
        background: #3a8bc0;
    }

    .searchItem {
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        padding-top: 33px;
        float: left;
        margin-right: 68px;
    }

    .searchItem span {
        display: inline-block;
        color: #838383;
        font-weight: bold;
        font-size: 14px;
        height: 24px;
        line-height: 24px;
    }

    .searchItem select {
        outline: none;
        height: 24px;
        line-height: 24px;
        border: 1px #828282 solid;
        font-size: 15px;
        font-weight: bold;
        border-radius: 15px;
        color: #3A3A3A;
        padding: 0 1px 0 6px;
    }

    .submitSearch button i {
        margin-right: 5px
    }

    .submitSearch {
        float: left;
        padding-top: 33px;
    }

    .submitSearch button {
        cursor: pointer;
        display: inline-block;
        width: 79px;
        height: 24px;
        line-height: 24px;
        padding: 0 15px 0 12px;
        font-size: 14px;
        color: #fff;
        border-radius: 15px;
        outline: none;
        border: none;
        background: #1683be;
    }

    .SearchBarChart {
        width: 100%;
        height: calc(100% - 87px)

    }

</style>
<style>
</style>
