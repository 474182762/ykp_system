<template>
    <div class="energyefficiencygoalsachievedBox">
        <div class="itemTit">
            <span></span>能耗及费用
        </div>
        <div class="energyefficiencygoalsachieved">
            <div class="scalebg">
                <div style="height: 38px" class="scaleitem">
                    <span>100</span>
                </div>
                <div style="height: 35px" class="scaleitem">
                    <span>80</span>
                </div>
                <div class="scaleitem">
                    <span>60</span>
                </div>
                <div style="height: 35px" class="scaleitem">
                    <span>40</span>
                </div>
                <div style="height: 53px" class="scaleitem">
                    <span>20</span>
                    <span style="top:30px;">0</span>
                </div>

            </div>
            <div class="mainBox">
                <div style="position: relative;width: 100%;height: 100%">
                    <div style="left: 18%;" class="goalItem">
                        <div style="position: relative;width: 100%;height: 100%">
                            <div class="goalItemTop"></div>
                            <div class="goalItemBottom"></div>
                            <div class="fill" style="position: absolute;bottom:0;width: 100%;height: 20%">
                                <div class="fills" style="position: relative;width: 100%;height: 100%">
                                    <span style="top:-26px;left: 10px" class="topData">47%</span>
                                    <span style="left: -13px;left:46px;width: 65px" class="leftData">1531 万 kWh</span>
                                    <div class="goalItemTop"></div>
                                    <div class="goalItemBottom"></div>

                                </div>

                            </div>
                            <span class="goalTop">
                                <i>图</i><br>
                                电耗节能
                            </span>
                            <span class="goal">
                                节能目标：<br>
                                <span>3200 万 kWh</span>
                            </span>

                        </div>
                    </div>
                    <div style="left: 48%;" class="goalItem">
                        <div class="goalItemTop"></div>
                        <div class="goalItemBottom"></div>
                        <div class="fill" style="position: absolute;bottom:0;width: 100%;height: 40%">
                            <div class="fills" style="position: relative;width: 100%;height: 100%">
                                <span style="top:-26px;left: 10px" class="topData">47%</span>
                                <span style="left: -13px;left:46px;width: 65px" class="leftData">1531 万 kWh</span>
                                <div class="goalItemTop"></div>
                                <div class="goalItemBottom"></div>
                            </div>

                        </div>
                        <span class="goalTop">
                                <i>图</i><br>
                                水耗节能
                            </span>
                        <span class="goal">
                                节能目标：<br>
                                <span>3200 万 kWh</span>
                            </span>
                    </div>
                    <div style="left: 75%;" class="goalItem">
                        <div class="goalItemTop"></div>
                        <div class="goalItemBottom"></div>
                        <div class="fill" style="position: absolute;bottom:0;width: 100%;height: 60%">
                            <div class="fills" style="position: relative;width: 100%;height: 100%">
                                <span style="top:-26px;left: 10px" class="topData">47%</span>
                                <span style="left: -13px;left:46px;width: 65px" class="leftData">1531 万 kWh</span>
                                 <div class="goalItemTop"></div>
                                <div class="goalItemBottom"></div>
                            </div>
                        </div>
                        <span class="goalTop">
                                <i>图</i><br>
                                气耗节能
                            </span>
                        <span class="goal">
                                节能目标：<br>
                                <span>3200 万 kWh</span>
                            </span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import CanvasSemicircle from "../../common/CanvasSemicircle.vue";
export default {
    name: 'basetable',
    components: {
        CanvasSemicircle
    },
    props: {
        getData: {
            type: Object,
            default: function () {
                return {

                }
            }
        },

     },
    data() {
        return {

        }
    },
    created() {

    },
    mounted(){

    },
    methods: {

    },
}

</script>
<style scoped>
    .energyefficiencygoalsachievedBox{
        padding: 20px 20px 10px 18px;
    }
    .energyefficiencygoalsachievedBox .itemTit{
        padding-left:10px;
        position: relative;
        font-size: 17px;
        line-height: 17px;
        color: #fff;
    }
    .energyefficiencygoalsachievedBox .itemTit span{
        position: absolute;
        left: 0;
        display: inline-block;
        width: 4px;
        height: 18px;
        background: #48d3bc;
    }
    .energyefficiencygoalsachieved{
        position: relative;
        margin-top: 82px;

    }
    .scalebg{
        padding-left: 40px;
    }
    .scalebg .scaleitem{
        border-bottom: 1px rgba(255,255,255,0.2) solid;
        position: relative;
        height: 40px;

    }
    .scalebg .scaleitem:first-of-type{
        border-top: 1px rgba(255,255,255,0.2) solid;
    }
    .scalebg .scaleitem span{
        position: absolute;
        top:0;
        left: -40px;
        color: rgba(255,255,255,0.6);
        font-size: 14px;
        display: inline-block;
        width: 30px;
        text-align: right;
    }
    .mainBox{
        position: absolute;
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
    }
    .mainBox .goalItem{
        position: absolute;
        bottom: 0;
        width: 44px;
        height: 92%;
        bottom: 8px;
        background: #314963;
    }
    .mainBox .goalItemTop{
        position: absolute;
        margin-top: 0px;
        background: #445d7b;
        width: 44px;
        height: 14px;
        border-radius: 50%;
        top: -8px;
    }
    .mainBox .goalItemBottom{
        position: absolute;
        bottom: -8px;
        background: #445d7b;
        width: 44px;
        height: 14px;
        border-radius: 50%;

    }

    .mainBox .fills{
        background: -webkit-linear-gradient(#01d8d3, #43d3a4);
        background: -o-linear-gradient(#01d8d3, #43d3a4);
        background: linear-gradient(#01d8d3, #43d3a4);
    }
    .mainBox .fill .goalItemTop{
       background: #44e8e7;
    }
    .mainBox .fill .goalItemBottom{
        background: #43d3a4;

    }
    .mainBox .fills span{
        display: inline-block;
        color: #fff;
        font-size: 13px;
        position: absolute;
        top:0;
    }
    .goalItem .goal{
        position: absolute;
        bottom: -60px;
        left: -5px;
        width: 100px;
        font-size: 13px;
        color: rgba(255,255,255,0.6);
    }
    .goalItem .goal span{
        color: #fff;
    }
    .goalItem .goalTop{
        position: absolute;
        top: -60px;
        left: -10px;
        width: 60px;
        text-align: center;
        font-size: 13px;
        color: rgba(255,255,255,0.7);
    }
    .goalItem .goalTop i{
        font-size: 16px;
    }


</style>
