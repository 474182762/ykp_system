<template>
    <div class="RemindLesseeArrearageBox">
        <div class="showType clear">
            <span>租户欠费提醒</span>
        </div>
        <div class="RemindLesseeArrearage">
            <div class="contentBox">
                <div class="typeItem">
                    <div class="typeItime-ico">
                        <span>欠 费<br>租 户</span>
                    </div>
                    <div class="typeItimeCont">
                        <div style="margin-right: 55px" class="items">
                            <span class="typeItimeData">1451<span> 个</span></span>
                            <span class="typeItimeTit">欠费租户</span>
                        </div>
                        <div class="items">
                            <span class="typeItimeData">32145<span> 元</span></span>
                            <span class="typeItimeTit">欠费租户</span>
                        </div>
                    </div>
                </div>
                <div class="typeItem">
                    <div class="typeItime-ico">
                       <span>余 额<br>不 足</span>
                    </div>
                    <div class="typeItimeCont">
                        <div style="margin-right: 55px" class="items">
                            <span class="typeItimeData">1451<span> 个</span></span>
                            <span style="background: #3b9a85" class="typeItimeTit">欠费租户</span>
                        </div>
                        <div class="items">
                            <span class="typeItimeData">1451<span> 个</span></span>
                            <span style="background: #c66067" class="typeItimeTit">欠费租户</span>
                        </div>
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
.RemindLesseeArrearageBox {
    position: relative;
    width: 100%;
    height: 100%;
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

.RemindLesseeArrearage {
    text-align: center;
    width: 100%;
}
.RemindLesseeArrearage .contentBox{
    display: inline-block;
}
.RemindLesseeArrearage .contentBox .typeItem{
    margin-top: 61px;
    height: 80px;
    line-height: 106px;
    position: relative;
    text-align: left;
    padding-left: 122px;
}
.RemindLesseeArrearage .contentBox .typeItem .typeItime-ico{
    border: 4px #2bbcec solid;
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
.RemindLesseeArrearage .contentBox .typeItem .typeItime-ico span{
    display: inline-block;
    font-size: 16px;
    line-height: 22px;
    color: #fff;
}
.RemindLesseeArrearage .contentBox .typeItem .typeItimeCont{
    height: 48px;
    line-height: 48px;
    text-align: left;
    display: inline-block;
    color: #fff;
}
.RemindLesseeArrearage .contentBox .typeItem .typeItimeCont .items{
    display: inline-block;
    width: 102px;

}
.RemindLesseeArrearage .contentBox .typeItem .typeItimeCont .typeItimeTit{
    display: block;
    font-size: 15px;
    line-height: 15px;
    text-align: center;
    height: 23px;
    line-height: 23px;
    background: #2074bd;
    margin-top: 3px;

}
.RemindLesseeArrearage .contentBox .typeItem .typeItimeCont .typeItimeData{
    display: block;
    font-size: 30px;
    line-height: 30px;
}
.RemindLesseeArrearage .contentBox .typeItem .typeItimeCont .typeItimeData span{
    font-size: 14px;
    line-height: 14px;
    font-weight: bold;
}

</style>
