<style scoped>
.drag_content {
    width: 100%;
    overflow-y: scroll;
    position: relative;
}

.box {
    background: rgba(9, 25, 59, 0.4);
    overflow: hidden;
    border-radius: 15px;
    border: 1px solid #193D64;
}

.width {
    width: 30%;
}

.big_map {
    width: 100%;
    height: 100%;
    background: rgba(25, 25, 25, 0.6);
    position: absolute;
    top: 0px;
    left: 0;
}

.expendTopTip {
    width: 100%;
    height: 100%;
    background: rgba(25, 25, 25, 0.6);
    position: absolute;
    top: 0px;
    left: 0;
}

</style>
<template>
    <div class="drag_content">
        <grid-layout :layout="layout" :col-num="3" :row-height="30" :is-draggable="edit" :isResizable="false" :vertical-compact="true" :margin="[20, 20]" :use-css-transforms="true" @layout-updated="layoutUpdatedEvent">
            <grid-item v-for="(item,key) in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="key" class="box" @move="moveEvent">
                <template v-if="item.i == 1">
                    <div class="switch" v-if="edit">
                        <el-switch v-model="value1" @change="changes($event, item.i)">
                        </el-switch>
                    </div>
                    <SemicircleChart></SemicircleChart>
                </template>
                <template v-if="item.i == 2">
                    <div class="switch" v-if="edit">
                        <el-switch v-model="value2" @change="changes($event, item.i)">
                        </el-switch>
                    </div>
                    <blocmap class="width"></blocmap>
                </template>
                <template v-if="item.i == 3">
                    <div class="switch" v-if="edit">
                        <el-switch v-model="value3" @change="changes($event, item.i)">
                        </el-switch>
                    </div>
                    <HourlyEnergyChart></HourlyEnergyChart>
                </template>
                <template v-if="item.i == 4">
                    <div class="switch" v-if="edit">
                        <el-switch v-model="value4" @change="changes($event, item.i)">
                        </el-switch>
                    </div>
                    <expendTop></expendTop>
                </template>
                <template v-if="item.i == 5">
                    <div class="switch" v-if="edit">
                        <el-switch v-model="value5" @change="changes($event, item.i)">
                        </el-switch>
                    </div>
                    <CollectorMonitorChart></CollectorMonitorChart>
                </template>
                <template v-if="item.i == 6">
                    <div class="switch" v-if="edit">
                        <el-switch v-model="value6" @change="changes($event, item.i)">
                        </el-switch>
                    </div>
                    <statisticalInfo></statisticalInfo>
                </template>
                <template v-if="item.i == 7">
                    <div class="switch" v-if="edit">
                        <el-switch v-model="value7" @change="changes($event, item.i)">
                        </el-switch>
                    </div>
                    <pendingAlarm></pendingAlarm>
                </template>
                <template v-if="item.i == 8">
                    <div class="switch" v-if="edit">
                        <el-switch v-model="value8" @change="changes($event, item.i)">
                        </el-switch>
                    </div>
                    <arrearageRemind></arrearageRemind>
                </template>
            </grid-item>
        </grid-layout>
        <template v-if="map_zoom">
            <div class="big_map">
                <magnifymap></magnifymap>
            </div>
        </template>
        <template v-if="expendShow">
            <div class="expendTopTip">
                <expendTopTip></expendTopTip>
            </div>
        </template>
    </div>
</template>
<script>
import draggable from 'vuedraggable';
import VueGridLayout from 'vue-grid-layout';
import vTable from './Table.vue';
import blocmap from '../page/home/blocmap.vue';
import bus from '../common/bus.js';
import SemicircleChart from '../page/home/SemicircleChart.vue'
import vCharts from '../common/Charts.vue';
import 'echarts/map/js/china.js';
import magnifymap from '../page/home/magnifymap.vue';
import expendTop from '../page/home/expendTop.vue';
import expendTopTip from '../page/home/expendTopTip.vue';
import statisticalInfo from '../page/home/statisticalInfo.vue';
import pendingAlarm from '../page/home/pendingAlarm.vue';
import CollectorMonitorChart from '../page/home/CollectorMonitorChart.vue';
import HourlyEnergyChart from '../page/home/HourlyEnergyChart.vue'
import arrearageRemind from '../page/home/arrearageRemind.vue'; //租户欠费提醒
let GridLayout = VueGridLayout.GridLayout;
let GridItem = VueGridLayout.GridItem;
export default {
    data() {
        return {
            value1: true,
            value2: true,
            value3: true,
            value4: true,
            value5: true,
            value6: true,
            value7: true,
            value8: true,
            expendShow: false,
            edit: false,
            map_zoom: false,
            layout: [
                { "x": 0, "y": 0, "w": 1, "h": 9, "i": "1" },
                { "x": 1, "y": 0, "w": 1, "h": 18, "i": "2" },
                { "x": 2, "y": 0, "w": 1, "h": 9, "i": "3" },
                { "x": 0, "y": 4, "w": 1, "h": 9, "i": "4" },
                { "x": 1, "y": 4, "w": 1, "h": 9, "i": "5" },
                { "x": 2, "y": 4, "w": 1, "h": 9, "i": "6" },
                { "x": 0, "y": 8, "w": 1, "h": 9, "i": "7" },
                { "x": 2, "y": 8, "w": 1, "h": 9, "i": "8" },

            ],

        }
    },
    components: {
        draggable,
        GridLayout,
        GridItem,
        vTable,
        blocmap,
        SemicircleChart,
        magnifymap,
        expendTop,
        expendTopTip,
        statisticalInfo,
        pendingAlarm,
        CollectorMonitorChart,
        HourlyEnergyChart,
        arrearageRemind

    },
    created() {
        this.$nextTick(function() {
            // console.log(8888, 'dom完成')
        });
        bus.$on('expendShow', msg => { this.expendShow = msg; })
        bus.$on('map_zoom', msg => { this.map_zoom = msg; })
        bus.$on('edit', msg => { this.edit = msg; })
    },
    methods: {
        moveEvent: function(i, newX, newY) {},
        layoutUpdatedEvent: function(newLayout) {
            console.log("Updated layout: ", newLayout)
        }
    },
    updated() {
        this.$nextTick(function() {

        });
    },
    mounted() {
        this.$nextTick(function() {

        });
    }
}

</script>
