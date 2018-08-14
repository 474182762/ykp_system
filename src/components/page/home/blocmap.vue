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
    /*line-height: 40px;*/
    position: absolute;
    top: 10px;
    left: 40px;
    text-align: left;
    color: #7597B0;
    font-size: 14px;
}

.statistics .statistics_data {
    color: #23E5EF;
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
            <v-charts :option="option" class="echarts-container"></v-charts>
        </div>
        <div class="statistics">
            <p>项目数：</p>
            <p class="statistics_data">156个</p>
            <p>单位面积能耗：</p>
            <p class="statistics_data"> 2 kWh/㎡</p>
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
// import 'echarts/map/js/china.js' // import 'echarts/map/js/province/guangdong.js'
import '../../../../static/js/china.js'
import '../../../../static/js/guangdong.js'
import bus from '../../common/bus.js'
export default {
    data() {
        return {
            map_zoom: false,
            option: '',
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
        bus.$on('map_zoom', msg => { this.map_zoom = msg; })
    },
    methods: {
        mapzooms() {
            this.map_zoom = !this.map_zoom;
            bus.$emit('map_zoom', this.map_zoom);
        }
    },
    mounted() {
        this.$refs.map_container.style.width = '100%';
        this.option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>今日能耗 {c}(Kw/ m2)',
                extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
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
                mapType: '广东', // 自定义扩展图表类型
                roam: true,
                itemStyle: {
                    // normal: { label: { show: true } },
                    emphasis: { label: { show: true } },
                    areaColor: '#1F6FAC',
                },

                data: [
                    { name: '珠海市', value: Math.round(Math.random() * 1000) },
                    { name: '汕头市', value: Math.round(Math.random() * 1000) },
                    { name: '佛山市', value: Math.round(Math.random() * 1000) },
                    { name: '韶关市', value: Math.round(Math.random() * 1000) },
                    { name: '湛江市', value: Math.round(Math.random() * 1000) },
                    { name: '肇庆市', value: Math.round(Math.random() * 1000) },
                    { name: '江门市', value: Math.round(Math.random() * 1000) },
                    { name: '茂名市', value: Math.round(Math.random() * 1000) },
                    { name: '惠州市', value: Math.round(Math.random() * 1000) },
                    { name: '汕尾市', value: Math.round(Math.random() * 1000) },
                    { name: '河源市', value: Math.round(Math.random() * 1000) },
                    { name: '阳江市', value: Math.round(Math.random() * 1000) },
                    { name: '清远市', value: Math.round(Math.random() * 1000) },
                    { name: '东莞市', value: Math.round(Math.random() * 1000) },
                    { name: '中山市', value: Math.round(Math.random() * 1000) },
                    { name: '潮州市', value: Math.round(Math.random() * 1000) },
                    { name: '揭阳市', value: Math.round(Math.random() * 1000) },
                    { name: '云浮市', value: Math.round(Math.random() * 1000) },
                    { name: '广州市', value: Math.round(Math.random() * 1000) },
                    { name: '梅州市', value: Math.round(Math.random() * 1000) },
                ],

            }]
        }
    },
    updated() {
        // console.log(this.$refs.map_container.getBoundingClientRect().width);
    }
}

</script>
