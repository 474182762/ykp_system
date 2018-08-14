<template>
    <div class="EnergyAndMoneyBox">
        <div class="itemTit fl">
            <span></span>能耗及费用
        </div>
        <div class="typeSwich clear">
            <span :class="{act:typeSwich == 1?true:false}" @click="cltypeSwich(1)">能耗</span>
            <span :class="{act:typeSwich == 2?true:false}"  @click="cltypeSwich(2)">费用</span>
        </div>
        <div class="EnergyAndMoney">
            <select class="swichdate">
                <option value="dayly">按 日</option>
            </select>
            <div style="text-align: center">
                <CanvasSemicircle></CanvasSemicircle>
            </div>
            <div class="clear">
                <CanvasSemicircle class="fl" :getData="dataAir" ></CanvasSemicircle>
                <CanvasSemicircle class="fr" :getData="datawater"></CanvasSemicircle>
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
            typeSwich:1,
            dataAir:{
                className:'air',
                boxWidth:200,
                boxHeight:150,
                semicircleBorder:8,
                semicircleX:100,
                semicircleY:100,
                semicircleR:70,
                semicircleColor:["#eac378","#ef665e"],
                title:"今日用气 (m³)",
                data:98124,
                dataFontsize:"30px Arial",
                dataFontcolor:"#ba7276",
                dataY:20,
                icon:"图",
                iconFontsize:"20px Arial",
                iconFontcolor:"#fff867f",
                iconY:50,
                tongData:1.4,
                tongDataFontsize:"14px Arial",
                tongDataFontcolor:"rgba(255,255,255,1)",
                tongDataAlign:"right",
                tongDataX:70,
                tongDataY:115,
                tongTitleX:-70,
                tongTitleY:115,
                tongArrowsX:15,
                tongArrowsY:115,
                tongArrowsColor:"#e07f92",
                tongArrowsFontsize:"14px Arial",
                huanData:3.2,
                huanDataFontsize:"14px Arial",
                huanDataFontcolor:"rgba(255,255,255,1)",
                huanDataAlign:"right",
                huanDataX:135,
                huanDataY:70,
                huanTitleX:15,
                huanTitleY:70,
                huanArrowsX:-45,
                huanArrowsY:70,

            },
            datawater:{
                className:'water',
                boxWidth:200,
                boxHeight:150,
                semicircleBorder:8,
                semicircleX:100,
                semicircleY:100,
                semicircleR:70,
                semicircleColor:["#31e2f7","#3796d0"],
                title:"今日用水 (m³)",
                data:98124,
                dataFontsize:"30px Arial",
                dataFontcolor:"#5ab4e6",
                dataY:20,
                icon:"图",
                iconFontsize:"20px Arial",
                iconFontcolor:"#4cbbe9",
                iconY:50,
                tongData:1.4,
                tongDataFontsize:"14px Arial",
                tongDataFontcolor:"rgba(255,255,255,1)",
                tongDataAlign:"right",
                tongDataX:70,
                tongDataY:115,
                tongTitleX:-70,
                tongTitleY:115,
                tongArrowsX:15,
                tongArrowsY:115,
                tongArrowsColor:"#e07f92",
                tongArrowsFontsize:"14px Arial",
                huanData:3.2,
                huanDataFontsize:"14px Arial",
                huanDataFontcolor:"rgba(255,255,255,1)",
                huanDataAlign:"right",
                huanDataX:135,
                huanDataY:70,
                huanTitleX:15,
                huanTitleY:70,
                huanArrowsX:-45,
                huanArrowsY:70,

            }
        }
    },
    created() {

    },
    mounted(){

    },
    methods: {
        cltypeSwich(typ){
            this.typeSwich = typ;
        }
    },
}

</script>
<style scoped>
    .EnergyAndMoneyBox{
        padding: 20px 20px 10px 18px;
    }
    .EnergyAndMoneyBox .itemTit{
        padding-left:10px;
        position: relative;
        font-size: 17px;
        line-height: 17px;
        color: #fff;
    }
    .EnergyAndMoneyBox .itemTit span{
        position: absolute;
        left: 0;
        display: inline-block;
        width: 4px;
        height: 18px;
        background: #48d3bc;
    }
    .EnergyAndMoneyBox .typeSwich{
        width: 170px;
        margin: 0 auto;
    }
    .EnergyAndMoneyBox .typeSwich span{
        cursor: pointer;
        float: left;
        display: inline-block;
        border: 1px rgba(255,255,255,0.5) solid;
        color: rgba(255,255,255,0.5);
        width: 49%;
        text-align: center;
        height: 27px;
        line-height: 27px;
    }
    .EnergyAndMoneyBox .typeSwich span:first-of-type{
        border-right: none;

    }
    .EnergyAndMoneyBox .typeSwich span:last-of-type{
        border-left: none;

    }
    .EnergyAndMoneyBox .typeSwich span.act{
        border: 1px #58b5c6 solid;
        color: rgba(255,255,255,0.8);
        background:  rgba(255, 255,255, 0.15);

    }

    .EnergyAndMoney{
        padding-top: 26px;
        position: relative;
    }
    .swichdate{
        position: absolute;
        padding-left: 15px;
        padding-right: 5px;
        height: 25px;
        line-height: 25px;
        border: 1px #46d7ca solid;
        background: none;
        outline: none;
        color: #fff;
        cursor: pointer;
        border-radius: 15px;
        text-align: center;

    }


</style>
