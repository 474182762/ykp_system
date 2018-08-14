<template>
        <div class="fr CylindricalPlotBox">
            <div class="tit"><b></b>累计能耗与定额比</div>
            <div class="boxline">
                <div style="left: 0px" class="left-items">
                    <p class="top-text">当前理论定额</p>
                    <p class="m-text"><span>45 </span>万</p>
                    <p class="bottom-text">年总定额 ( kWh )</p>

                </div>
                <div  class="m-items">
                    <div class="m-items-box">
                        <div class="fl defQuota">
                            <div class="dataPosition">
                                <div class="positionBox">
                                    <div class="oval oval-top"></div>
                                    <div class="oval oval-bottom"></div>
                                </div>
                            </div>

                        </div>
                        <div class="fr defQuota">
                            <div class="dataPosition outQuota">
                                <div class="positionBox">
                                    <div class="oval oval-top"></div>
                                    <div class="oval oval-bottom"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div style="right: 0px" class="right-items">
                    <p style="text-align: left;color: #E16264" class="top-text">已超出定额 12%</p>
                    <p style="text-align: left" class="m-text"><span style="color: #1881BF">60 </span>万</p>
                    <p style="text-align: left" class="bottom-text">当前累计总能耗 ( m³ ) </p>

                </div>
            </div>
            <div class="bottomDate">( 2017-01-01 至 2017-12-31)</div>
    </div>
</template>

<script>
    export default {
        name: 'test1',
        data () {
            return {

            }
        },
        methods:{

        },
        components:{

        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .fl{float: left}
    .fr{float: right}
    h3{font-size: 16px}
    .CylindricalPlotBox{

        height: 380px;
        width: 100%;
        max-width: 500px;
        position: relative;
    }
    .CylindricalPlotBox .tit{position: relative;height: 24px;font-size: 16px;color: #1881BF;font-weight: bold;}
    .CylindricalPlotBox .tit b{
        position: absolute;
        top:2px;
        left: -15px;
        width: 4px;
        display: inline-block;
        background: #1881BF;
        height: 20px;

    }
    .boxline{
        height: 192px;
        border-top: 1px #D6D6D6 dashed;
        border-bottom: 1px #D6D6D6 solid;
        position: absolute;
        width: 100%;
        bottom: 25px;
    }
    .bottomDate{
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        font-size: 12px;
        color: #838383;
    }
    .left-items,.right-items{
        position: absolute;
        width: 34%;
        max-width: 155px;
        height: 100%;
        bottom: 0;
    }
    .m-items{
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0;
        ;
    }
    .m-items .m-items-box{
        margin: 0 auto;
        width: 30%;
        max-width: 153px;
        height: 100%;
    }
    .m-items .defQuota{
        position: relative;
        bottom: 8px;
        width: 38%;
        max-width: 46px;
        height: 100%;

    }
    .m-items .defQuota .dataPosition{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 97%;
    }
    .m-items .defQuota .positionBox{
        width: 100%;
        height: 100%;
        background: -webkit-linear-gradient(#44D1EB, #22A1C9); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#44D1EB, #22A1C9); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#44D1EB, #22A1C9); /* Firefox 3.6 - 15 */
        background: linear-gradient(#44D1EB, #22A1C9); /* 标准的语法 */
    }
    .m-items .outQuota{
        height: 123%!important;
    }
    .m-items .defQuota .oval{
        position: absolute;
        background: #6EDBEF;
        width: 100%;
        max-width: 46px;
        height: 14px;
        border-radius: 50%;
    }
    .m-items .defQuota .oval-top{top:-8px}
    .m-items .defQuota .oval-bottom{bottom:-8px;background: #2892B4;}
    .left-items p,.right-items p {margin: 0;padding: 0;color: #3A3A3A}
    .m-items .outQuota .oval-top{
        background:#E16264 ;
    }
    .m-items .outQuota .positionBox{
        width: 100%;
        height: 100%;
        background: -webkit-linear-gradient(#D74242,#44D1EB,#22A1C9); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#D74242,#44D1EB,#22A1C9); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#D74242,#44D1EB,#22A1C9); /* Firefox 3.6 - 15 */
        background: linear-gradient(#D74242,#44D1EB 26%,#22A1C9); /* 标准的语法 */
    }
    .left-items .top-text,.right-items .top-text{
        position: absolute;
        width: 100%;
        text-align: right;
        font-weight: bold;
        top:-22px;
        font-size: 14px;
    }
    .left-items .m-text,.right-items .m-text{
        font-size: 22px;
        height: 194px;
        text-align: right;
        line-height: 194px;
    }
    .left-items .m-text span,.right-items .m-text span{
        font-size: 45px;
    }
    .left-items .bottom-text,.right-items .bottom-text{
        font-size: 14px;
        position: absolute;
        width: 100%;
        text-align: right;
        font-weight: bold;
        bottom: 0px;
    }


</style>

