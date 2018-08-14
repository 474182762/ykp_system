<style scoped>
.magnifymap {
    width: 100%;
    height: 100%;
    position: relative
}

.magnify_map {
    width: 80%;
    height: 1000px;
    max-height: 1000px;
    position: absolute;
    top: -5%;
    left: -5%;
}

.magnify_map .charts {
    width: 100%;
    height: 100%;
}

.magnifymap_table {
    width: 35%;
    position: absolute;
    top: 70px;
    right: 0px;
}

.magnifymap .colse_map {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 30px;
    color: #7CE9FF;
}

</style>
<style>
.magnifymap_table .table_container .el-table {
    background-color: rgba(0, 0, 0, 0.2) !important;
    color: #ffffff;
}

.magnifymap_table .table_container .el-table::before {
    background-color: rgba(0, 0, 0, 0.2) !important;
}

.magnifymap_table .table_container .el-table tr {
    background-color: rgba(0, 0, 0, 0.2) !important;
    color: #ffffff !important;
}

</style>
<template>
    <div class="magnifymap">
        <div class="magnify_map" ref="magnify_map">
            <div class="charts">
                <v-charts :option="option"></v-charts>
            </div>
        </div>
        <div class="magnifymap_table">
            <div class="table_container">
                <el-table :data="tableData" style="width: 100%;text-align: center;border:none;background-color: rgba(0, 0, 0, 0.2);" :header-cell-style="{background: 'linear-gradient(left, transparent 0, rgba(15, 32, 85, 0.4) 5%, rgba(15, 32, 85, 0.6) 10%, rgba(15, 32, 85, 0.8) 20%, rgba(15, 32, 85, 0.9) 30%, rgba(15, 32, 85, 0.9) 40%, rgba(15, 32, 85, 0.9) 50%, rgba(15, 32, 85, 0.9) 60%, rgba(15, 32, 85, 0.9) 70%, rgba(15, 32, 85, 0.8) 80%, rgba(15, 32, 85, 0.6) 90%, rgba(15, 32, 85, 0.5) 95%, transparent 100%)',textAlign:'center',border:'none',color:'#ffffff'}" :cell-style="{background:'rgba(9,65,97,0.1)',border:'none',color:'#ffffff'}">
                    <el-table-column v-for="(item,index) in tableKey" :key="index" :prop="item.name" :label="item.value" sortable></el-table-column>
                </el-table>
            </div>
        </div>
        <div class="colse_map el-icon-circle-close-outline" @click="colse_map"></div>
    </div>
</template>
<script>
import vCharts from '../../common/Charts.vue';
import bus from '../../common/bus.js';
import '../../../../static/js/china.js'
export default {
    data() {
        return {
            map_zoom: true,
            option: {
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
                    mapType: 'china', // 自定义扩展图表类型
                    roam: true,
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
                        { name: '广东', value: Math.round(Math.random() * 1000) },
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
            },
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
    components: {
        vCharts
    },
    mounted() {
        this.$refs.magnify_map.style.width = '80%';
    },
    created() {
        bus.$on('map_zoom', msg => { this.map_zoom = msg; })
    },
    methods: {
        colse_map() {
            this.map_zoom = !this.map_zoom;
            bus.$emit('map_zoom', this.map_zoom);
        }
    }
}

</script>
