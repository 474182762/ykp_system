<style scoped>
.box {
    width: 600px;
    height: 100%;
    position: relative;
}

.map_container {
    width: 100%;
    height: 500px;
}

.statistics {
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
}

.statistics .city_statistics {
    background: #0C3B75;
    width: 200px;
    position: absolute;
    left: 40px;
    top: 5px;
}

.statistics .building_statistics {
    width: 200px;
    background: #0C3B75;
    position: absolute;
    right: 40px;
    top: 5px;
}

.map_table {
    width: 100%;
    position: relative;
}

.map_table .map_zoom {
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: #33B1D4;
    position: absolute;
    top: 0;
    right: 10px;
}

.map_table .table_container {
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background: #0D204A;
}

</style>
<style type="text/css">
.map_table .table_container .el-table {
    background-color: rgba(0, 0, 0, 0) !important;
    color: #ffffff;
}

.map_table .table_container .el-table::before {
    height: 0 !important;
    background-color: rgba(0, 0, 0, 0) !important;
}

.map_table .table_container .el-table tr {
    background-color: rgba(0, 0, 0, 0.1) !important;
    color: #ffffff !important;
}

</style>
<template>
    <div class="box" ref="map_container">
        <div class="map_container">
            <v-charts :option="option" class="echarts-container" ref="map" v-on:mapValue="mapValue"></v-charts>
        </div>
        <div class="statistics ub">
            <div class="city_statistics ub-f1">平台应用<span>1 1</span>省市</div>
            <div class="building_statistics ub-f1">上线<span> 1 1 0 0 </span>栋楼宇</div>
        </div>
        <div class="map_table">
            <div class="map_zoom" @click="mapzooms">缩放</div>
            <div class="table_container">
                <el-table :data="tableData" style="width: 100%;text-align: center;border:none;" :header-cell-style="{background:'rgba(9,65,97,0)',textAlign:'center',border:'none',color:'#ffffff'}" :cell-style="{background:'rgba(9,65,97,0)',border:'none',color:'#ffffff'}">
                    <el-table-column v-for="(item,index) in tableKey" :key="index" :prop="item.name" :label="item.value" sortable></el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script>
import vCharts from '../../common/Charts.vue'
import '../../../../static/js/china.js'
import '../../../../static/js/guangdong.js'
import bus from '../../common/bus.js'
export default {
    data() {
        return {
            map_zoom: false,
            option: '',
            citys: '',
            tableData: [{
                id: '12987122',
                name: '广东省',
                amount1: '234',
                amount2: '3.2',
                amount3: 10
            }, {
                id: '12987123',
                name: '浙江省',
                amount1: '165',
                amount2: '4.43',
                amount3: 12
            }, {
                id: '12987124',
                name: '福建省',
                amount1: '324',
                amount2: '1.9',
                amount3: 9
            }, {
                id: '12987125',
                name: '江西省',
                amount1: '621',
                amount2: '2.2',
                amount3: 17
            }],
            tableKey: [{
                    name: 'name',
                    value: '省份',
                },
                {
                    name: 'id',
                    value: '电耗（kWh）',
                },
                {
                    name: 'amount1',
                    value: '水耗（m³）',
                },
                {
                    name: 'amount2',
                    value: '气耗（m³）',
                }
            ]
        }
    },
    props: {},
    components: {
        vCharts
    },
    created() {
        bus.$on('map_zoom', msg => { this.map_zoom = msg; });
        this.option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>今日能耗 {c}(Kw/ m2)',
                extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
            },
            dataRange: {
                show: false,
                orient: 'horizontal',
                min: 0,
                max: 1000,
                text: ['高', '低'], // 文本，默认为数值文本
                splitNumber: 0,
                color: ['#69F6FF', '#024161', '#02395E', '#023455', ]
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [{
                name: '中国各省市能耗数据',
                type: 'map',
                roam: true,
                mapType: 'china', // 自定义扩展图表类型
                itemStyle: {
                    // normal: { label: { show: true } },
                    emphasis: { label: { show: true } },
                    areaColor: '#1F6FAC',
                },
                data: [
                    { name: '上海', value: Math.round(Math.random() * 1000) },
                    { name: '河南', value: Math.round(Math.random() * 1000) },
                    { name: '湖南', value: Math.round(Math.random() * 1000) },
                    { name: '安徽', value: Math.round(Math.random() * 1000) },
                    { name: '江苏', value: Math.round(Math.random() * 1000) },
                    { name: '浙江', value: Math.round(Math.random() * 1000) },
                    { name: '江西', value: Math.round(Math.random() * 1000) },
                    { name: '湖北', value: Math.round(Math.random() * 1000) },
                    { name: '福建', value: Math.round(Math.random() * 1000) },
                    { name: '山东', value: Math.round(Math.random() * 1000) },
                    { name: '上海', value: Math.round(Math.random() * 1000) },
                    { name: '黑龙江', value: Math.round(Math.random() * 1000) },
                    { name: '吉林', value: Math.round(Math.random() * 1000) },
                    { name: '辽宁', value: Math.round(Math.random() * 1000) },
                    { name: '河北', value: Math.round(Math.random() * 1000) },
                    { name: '浙江', value: Math.round(Math.random() * 1000) },
                    { name: '山西', value: Math.round(Math.random() * 1000) },
                    { name: '台湾', value: Math.round(Math.random() * 1000) },
                    { name: '福建', value: Math.round(Math.random() * 1000) },
                    { name: '广东', value: Math.round(Math.random() * 1000), selected: true },
                    { name: '四川', value: Math.round(Math.random() * 1000) },
                    { name: '云南', value: Math.round(Math.random() * 1000) },
                    { name: '贵州', value: Math.round(Math.random() * 1000) },
                    { name: '青海', value: Math.round(Math.random() * 1000) },
                    { name: '甘肃', value: Math.round(Math.random() * 1000) },
                    { name: '陕西', value: Math.round(Math.random() * 1000) },
                    { name: '内蒙古', value: Math.round(Math.random() * 1000) },
                    { name: '新疆', value: Math.round(Math.random() * 1000) },
                    { name: '广西', value: Math.round(Math.random() * 1000) },
                    { name: '宁夏', value: Math.round(Math.random() * 1000) },
                    { name: '西藏', value: Math.round(Math.random() * 1000) },
                    { name: '北京', value: Math.round(Math.random() * 1000) },
                    { name: '天津', value: Math.round(Math.random() * 1000) },
                    { name: '重庆', value: Math.round(Math.random() * 1000) },
                    { name: '海南', value: Math.round(Math.random() * 1000) },
                    { name: '香港', value: Math.round(Math.random() * 1000) },
                    { name: '澳门', value: Math.round(Math.random() * 1000) },

                ],

            }]
        }
    },
    methods: {
        mapzooms() {
            this.map_zoom = !this.map_zoom;
            bus.$emit('map_zoom', this.map_zoom);
        },
        mapValue(mapValue) {
            let provinces = ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen'];
            let provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'];
            // console.log(mapValue);
            for (var i = 0; i < provincesText.length; i++) {

                if (mapValue == provincesText[i]) {
                    //显示对应省份的方法
                    console.log(provinces[i]);
                  // this.option.series[0].mapType = '广东'; // this.option.series[0].data = []; // console.log(this.option.series[0].mapType)

                    break;
                }

            }
        }
    },
    mounted() {
        this.$refs.map_container.style.width = '100%';

    },
    updated() {
        // console.log(this.$refs.map_container.getBoundingClientRect().width);
    }
}

</script>
