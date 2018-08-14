<template>
    <div class="EnergyConsumptionCredictionBox">
        <div  class="switchData">
            <span :class="{act:swichDate ==1? true:false}" @click="switchDate(1)">明日</span>
            <span :class="{act:swichDate ==2? true:false}" @click="switchDate(2)">下月</span>
        </div>
        <div class="showType clear">
            <span>能耗预测</span>
        </div>
        <div class="EnergyConsumptionCrediction">
            <div class="contentBox">
                <div class="typeItem">
                    <div style="border-color: #e4ba36" class="typeItime-ico">
                        <i style="color: #e4ba36" class="el-icon-view"></i>
                    </div>
                    <div class="typeItimeCont">
                        <p class="typeItimeTit">{{typeTit[swichDate]}}电总用量 / 费用</p>
                        <p class="typeItimeData"><span>10000</span> kWh / ￥<span>8500</span> 元</p>
                    </div>
                </div>
                <div style="margin-top: 34px;" class="typeItem">
                    <div style="border-color: #3bc8eb" class="typeItime-ico">
                        <i style="color: #3bc8eb" class="el-icon-star-on"></i>
                    </div>
                    <div class="typeItimeCont">
                        <p class="typeItimeTit">{{typeTit[swichDate]}}水总用量 / 费用</p>
                        <p class="typeItimeData"><span>300</span> m³  / ￥<span>900</span> 元</p>
                    </div>
                </div>
                <div style="margin-top: 34px;" class="typeItem">
                    <div style="border-color: #ea6060" class="typeItime-ico">
                        <i style="color: #ea6060" class="el-icon-location"></i>
                    </div>
                    <div class="typeItimeCont">
                        <p class="typeItimeTit">{{typeTit[swichDate]}}气总用量 / 费用</p>
                        <p class="typeItimeData"><span>4</span> m³  / ￥<span>20</span> 元</p>
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
                return {}
            }
        },

    },
    data() {
        return {
            typeTit:["","明日","下月"],
            swichDate: 1,

        }
    },
    created() {
        //this.createChart();
    },
    methods: {
        switchDate(date) {
            console.log(date)
            this.swichDate = date;
        },
    },
    mounted() {

    }
}

</script>
<style scoped>
.EnergyConsumptionCredictionBox {
    position: relative;
    width: 100%;
    height: 100%;
}

.EnergyConsumptionCredictionBox .switchData {
    position: absolute;
    z-index: 10;
    top: 4%;
    left: 5%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 90px;
    height: 22px;
    border: 1px #269FC7 solid;
    border-radius: 15px;
    overflow: hidden;
}

.EnergyConsumptionCredictionBox .switchData span {
    cursor: pointer;
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
    font-size: 12px;
    line-height: 22px;
    display: inline-block;
    width: 50%;
    height: 100%;
    border-right: 1px #269FC7 solid;
    z-index: 3;
}

.EnergyConsumptionCredictionBox .switchData span.act {
    background: rgba(24, 129, 191, 0.4);
    color: #fff;
}

.EnergyConsumptionCredictionBox .switchData span:last-of-type {
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

.EnergyConsumptionCrediction {
    text-align: center;
    width: 100%;
    margin-top: 30px;
}
.EnergyConsumptionCrediction .contentBox{
    display: inline-block;
}
.EnergyConsumptionCrediction .contentBox .typeItem{
    height: 80px;
    line-height: 118px;
    position: relative;
    text-align: left;
    padding-left: 102px;
}
.EnergyConsumptionCrediction .contentBox .typeItem .typeItime-ico{
    border: 2px yellow solid;
    position: absolute;
    top:0;
    left: 0;
    border-radius: 50%;
    box-sizing: border-box;
    width: 80px;
    height: 80px;
    line-height: 93px;
    text-align: center;
}
.EnergyConsumptionCrediction .contentBox .typeItem .typeItime-ico i{
    font-size: 38px;
}
.EnergyConsumptionCrediction .contentBox .typeItem .typeItimeCont{
    height: 48px;
    line-height: 48px;
    text-align: left;
    display: inline-block;
    color: #fff;
}
.EnergyConsumptionCrediction .contentBox .typeItem .typeItimeCont .typeItimeTit{
    letter-spacing: 2px;
    font-size: 14px;
    line-height: 14px;
}
.EnergyConsumptionCrediction .contentBox .typeItem .typeItimeCont .typeItimeData{
    letter-spacing: 2px;
    font-size: 16px;
    line-height: 16px;
    margin-top: 10px;
}
.EnergyConsumptionCrediction .contentBox .typeItem .typeItimeCont .typeItimeData span{
    font-size: 30px;
    line-height: 30px;
    color: #44e7ff;
}

</style>
